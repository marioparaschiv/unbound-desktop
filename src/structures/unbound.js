const { basename, resolve } = require('path');
const Lodash = window._;

const APIManager = require('@structures/apis/manager');
const Manager = require('@structures/manager');
const Patcher = require('@patcher');

const PatchManager = require('@core/patches');
const Styles = require('@core/styles');

module.exports = class Unbound {
   static #styles = new Styles();
   static #patches = new PatchManager();

   async start() {
      global.unbound = this;

      // Apply core styles
      Unbound.#styles.apply();

      // Initialize webpack instance & core APIs
      this.webpack = require('@webpack');
      this.apis = new APIManager();
      await this.apis.start();

      // Apply internal patches
      await Unbound.#patches.apply();

      // Export miscellaneous
      this.utilities = require('@utilities');
      this.constants = require('@constants');

      // Initialize built-in managers
      this.managers = {
         plugins: new Manager('plugins'),
         themes: new Manager('themes')
      };

      // Load all entities
      this.managers.themes.loadAll();
      this.managers.plugins.loadAll();
   }

   async restart() {
      await this.shutdown();

      // Use global instead which has the "require" inside so
      // that way, the cache gets refreshed and any edited code
      // is applied on this restartart
      await global.unbound.start();
   }

   async shutdown() {
      Object.keys(this.managers ?? {}).map(m => {
         this.managers[m].unloadAll();
      });

      Unbound.#styles?.remove?.();
      await this.apis?.stop?.();
      await Unbound.#patches.remove();

      // Get all patcher callers for unpatching
      const callers = Lodash.uniq(Patcher.patches.map(a => a.caller));
      for (const caller of callers) {
         Patcher.unpatchAll(caller);
      }

      // Clear require cache to allow for any code changes to apply
      const parent = basename(resolve(__dirname, '..', '..'));
      const cache = Object.keys(require.cache).filter(c => ~c.indexOf(parent));
      cache.map(c => delete require.cache[c]);

      // Replace the global with a new one
      delete global.unbound;
      global.unbound = {
         start: async () => {
            const Webpack = require('@webpack');
            await Webpack.init();

            const Unbound = require('@structures/unbound');
            const instance = new Unbound();
            await instance.start();
         },
         shutdown: () => { },
         restart: () => global.unbound.start()
      };
   }
};