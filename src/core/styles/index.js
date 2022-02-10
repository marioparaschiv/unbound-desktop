const { appendCSS } = require('@utilities');
const { readdirSync } = require('fs');
const { basename } = require('path');

const styles = {};

readdirSync(__dirname).filter(f => f !== basename(__filename)).map(file => {
   const items = file.split('.');
   if (items.length != 1) items.splice(items.length - 1, 1);

   const name = items.join('.');
   module.exports[name] = styles[name] = require(`${__dirname}/${file}`);
});

module.exports = class Styles {
   constructor() {
      this.styles = styles;
      this.applied = [];
   }

   apply() {
      for (const key in this.styles) {
         this.applied.push(appendCSS(`unbound-core-${key}`, styles[key]));
      }
   }

   remove() {
      for (const unstyle of this.applied) {
         unstyle();
      }
   }
};