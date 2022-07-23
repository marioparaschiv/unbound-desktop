"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>k});const a=require("../../components/discord"),b=require("../../modules/webpack/common"),c=require("../../../common/utilities/index"),d=require("../../../common/constants"),e=require("../../components/index"),f=require("../../modules/webpack/api"),g=j(require("react")),h=require("./Icons/index"),i=j(require("../../styles/panels/addoncard.css"));function j(a){return a&&a.__esModule?a:{default:a}}i.default.append();class k extends g.default.Component{componentWillMount(){let a=this.getGlobal(),b=this.getType(),c=window[a]?.[b]??window[a]?.managers?.[b];c?.on?.("toggle",this.onToggle)}componentWillUnmount(){let a=this.getGlobal(),b=this.getType(),c=window[a]?.[b]??window[a]?.managers?.[b];c?.off?.("toggle",this.onToggle)}render(){let{entity:f}=this.props,h=((((f.instance?._config?.info?.name??f.manifest?.name)??f.displayName)??f.data?.name)??f.name)??b.Locale.Messages.UNBOUND_ADDON_MISSING_NAME,i=(((f.instance?._config?.info?.description??f.manifest?.description)??f.data?.description)??f.description)??b.Locale.Messages.UNBOUND_ADDON_MISSING_DESCRIPTION,j=((((f.instance?._config?.info?.authors??f.manifest?.author)??f.data?.authors)??f.getAuthor?.())??f.author)??b.Locale.Messages.UNBOUND_ADDON_MISSING_AUTHOR,k="bd"===this.props.client?"#3E82E5":((f?.color??f?.data?.color)??f?.instance?.color)??d.Colors.BRAND,l=((((f.instance?._config?.info?.version??f.manifest?.version)??f.getVersion?.())??f.data?.version)??f.version)??b.Locale.Messages.UNBOUND_ADDON_MISSING_VERSION;return g.default.createElement(a.Tooltip,{position:"left",text:f.failed?b.Locale.Messages[`UNBOUND_ADDON_FAILED_${this.props.type.toUpperCase()}`]:null,hideOnClick:!1},g.default.createElement("div",{className:(0,c.classnames)("unbound-addon-card",f.failed&&"disabled"),style:{"--entity-color":k},onContextMenu:c=>b.ContextMenu.openContextMenu(c,()=>g.default.createElement(a.Menu.default,{onClose:b.ContextMenu.closeContextMenu},g.default.createElement(a.Menu.MenuItem,{id:"delete",color:"colorDanger",label:b.Locale.Messages.UNBOUND_DELETE,action:()=>this.delete()}),g.default.createElement(a.Menu.MenuItem,{id:"reload",label:b.Locale.Messages.UNBOUND_RELOAD,action:()=>this.reload()})))},g.default.createElement("div",{className:"unbound-addon-header"},g.default.createElement(a.Text,{className:"unbound-addon-name",size:a.Text.Sizes.SIZE_16},h),g.default.createElement(a.Text,{className:"unbound-addon-version",size:a.Text.Sizes.SIZE_16,color:a.Text.Colors.INTERACTIVE_NORMAL},l),g.default.createElement(a.Text,{className:"unbound-addon-authors",size:a.Text.Sizes.SIZE_16,color:a.Text.Colors.INTERACTIVE_NORMAL},"by ",this.renderAuthors(j)),g.default.createElement("div",{className:"unbound-addon-controls"},"unbound"!==this.props.client&&g.default.createElement(a.RelativeTooltip,{text:b.Locale.Messages[`UNBOUND_ADDON_MANAGER_${this.props.client.toUpperCase()}_TOOLTIP`]?.format({type:"Plugin"}),hideOnClick:!1},a=>this.renderType({...a})),this.hasSettings()&&g.default.createElement(a.RelativeTooltip,{text:b.Locale.Messages.UNBOUND_SETTINGS,hideOnClick:!1},a=>g.default.createElement(e.Icon,Object.assign({},a,{onClick:()=>this.props.openSettings(),name:"Gear",width:28,height:28,className:"unbound-addon-control-button"}))),g.default.createElement(a.Switch,{checked:this.isEnabled,onChange:()=>this.toggle(),className:"unbound-addon-switch"}))),g.default.createElement("div",{className:"unbound-addon-footer"},g.default.createElement(a.FormText,{className:"unbound-addon-description"},g.default.createElement(a.Markdown,null,i)))))}renderAuthors(c){let d=[],e=c=>{if("string"==typeof c)d.push(c);else if("object"==typeof c&&c.name){let e=typeof c.id||typeof c.discord_id,h=e&&["number","string"].includes(typeof e);d.push(h?g.default.createElement(a.Anchor,{className:"unbound-addon-author",onClick(){b.Layers?.popLayer?.(),f.DMs?.openPrivateChannel?.([c.id??c.discord_id])}},c.name):c.name)}};return Array.isArray(c)?c.map(e):"object"==typeof c&&c.name?e(c):"string"==typeof c&&d.push(c),d.map((a,b)=>{let c=b+1===d.length;return"string"==typeof a?c?a:`${a}, `:[a,c?"":", "]})}renderType(a){let{client:b}=this.props;switch(a.className??="unbound-addon-type-icon",a.width??=16,a.height??=16,b.toLowerCase()){case"bd":return g.default.createElement(h.Bd,Object.assign({},a));case"powercord":return g.default.createElement(h.Plug,Object.assign({},a));default:return null}}get isEnabled(){let a=this.getName(),b=this.getGlobal(),c=this.getType(),d=window[b]?.[c]??window[b]?.managers?.[c];return d?.isEnabled?.(a)}delete(){let a=this.getName(),b=this.getGlobal(),c=this.getType(),d=window[b]?.[c]??window[b]?.managers?.[c];return d?.delete?.(a)}toggle(){let a=this.getName(),b=this.getGlobal(),c=this.getType(),d=window[b]?.[c]??window[b]?.managers?.[c];return d?.toggle?.(a)}reload(){let a=this.getName(),b=this.getGlobal(),c=this.getType(),d=window[b]?.[c]??window[b]?.managers?.[c];return d?.reload?d.reload(a):d?.remount?d.remount(a):void 0}onToggle(a){let{entity:b}=this.props;[b.id,b.entityID,b.name].includes(a)&&this.forceUpdate()}getType(){let{type:a,client:b}=this.props;switch(b.toLowerCase()){case"powercord":return"plugins"===a?"pluginManager":"styleManager";case"bd":return"plugins"===a?"Plugins":"Themes";case"unbound":return"plugins"===a?"plugins":"themes"}}getGlobal(){let{client:a}=this.props;switch(a.toLowerCase()){case"powercord":return"powercord";case"bd":return"BdApi";case"unbound":return"unbound"}}hasSettings(){let a=this.getId(),b=this.getName();return this.isEnabled&&(((this.props.entity.instance?.getSettingsPanel??this.props.entity.getSettingsPanel)??[...window?.powercord?.api?.settings?.settings?.keys()??[]].includes(a))??[...window?.powercord?.api?.settings?.settings?.values()??[]].find?.(c=>{let d=[c.label,c.category];if(d.includes(a)||d.includes(b))return!0}))}getName(){return((this.props.entity.entityID??this.props.entity.id)??this.props.entity.manifest?.name)??this.props.entity.name}getId(){return(this.props.entity.id??this.props.entity.entityID)??this.props.entity.name}}!function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([c.bind],k.prototype,"onToggle",null)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9jb21wb25lbnRzL0FkZG9uQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgU3dpdGNoLCBBbmNob3IsIEZvcm1UZXh0LCBNYXJrZG93biwgUmVsYXRpdmVUb29sdGlwLCBNZW51LCBUb29sdGlwIH0gZnJvbSAnQGNvbXBvbmVudHMvZGlzY29yZCc7XHJcbmltcG9ydCB7IENvbnRleHRNZW51LCBMYXllcnMsIExvY2FsZSB9IGZyb20gJ0B3ZWJwYWNrL2NvbW1vbic7XHJcbmltcG9ydCB7IEF1dGhvciB9IGZyb20gJ0BjbGllbnQvbWFuYWdlcnMvYmFzZSc7XHJcbmltcG9ydCB7IGJpbmQsIGNsYXNzbmFtZXMgfSBmcm9tICdAdXRpbGl0aWVzJztcclxuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnQGNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdAY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERNcyB9IGZyb20gJ0B3ZWJwYWNrL2FwaSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBQbHVnLCBCZCB9IGZyb20gJy4vSWNvbnMnO1xyXG5cclxuaW1wb3J0IFN0eWxlcyBmcm9tICdAc3R5bGVzL3BhbmVscy9hZGRvbmNhcmQuY3NzJztcclxuU3R5bGVzLmFwcGVuZCgpO1xyXG5cclxuaW50ZXJmYWNlIEFkZG9uQ2FyZFByb3BzIHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgb3BlblNldHRpbmdzOiBGbjtcclxuICBjbGllbnQ6IHN0cmluZztcclxuICBlbnRpdHk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkb25DYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFkZG9uQ2FyZFByb3BzPiB7XHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgY29uc3QgZ2xvYmFsID0gdGhpcy5nZXRHbG9iYWwoKTtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcclxuXHJcbiAgICBjb25zdCBtYW5hZ2VyID0gKHdpbmRvd1tnbG9iYWxdPy5bdHlwZV0gPz8gd2luZG93W2dsb2JhbF0/Lm1hbmFnZXJzPy5bdHlwZV0pO1xyXG5cclxuICAgIG1hbmFnZXI/Lm9uPy4oJ3RvZ2dsZScsIHRoaXMub25Ub2dnbGUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjb25zdCBnbG9iYWwgPSB0aGlzLmdldEdsb2JhbCgpO1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xyXG5cclxuICAgIGNvbnN0IG1hbmFnZXIgPSAod2luZG93W2dsb2JhbF0/Llt0eXBlXSA/PyB3aW5kb3dbZ2xvYmFsXT8ubWFuYWdlcnM/Llt0eXBlXSk7XHJcbiAgICBtYW5hZ2VyPy5vZmY/LigndG9nZ2xlJywgdGhpcy5vblRvZ2dsZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGVudGl0eSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBuYW1lID0gKFxyXG4gICAgICBlbnRpdHkuaW5zdGFuY2U/Ll9jb25maWc/LmluZm8/Lm5hbWUgPz9cclxuICAgICAgZW50aXR5Lm1hbmlmZXN0Py5uYW1lID8/XHJcbiAgICAgIGVudGl0eS5kaXNwbGF5TmFtZSA/P1xyXG4gICAgICBlbnRpdHkuZGF0YT8ubmFtZSA/P1xyXG4gICAgICBlbnRpdHkubmFtZSA/P1xyXG4gICAgICBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9BRERPTl9NSVNTSU5HX05BTUVcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoXHJcbiAgICAgIGVudGl0eS5pbnN0YW5jZT8uX2NvbmZpZz8uaW5mbz8uZGVzY3JpcHRpb24gPz9cclxuICAgICAgZW50aXR5Lm1hbmlmZXN0Py5kZXNjcmlwdGlvbiA/P1xyXG4gICAgICBlbnRpdHkuZGF0YT8uZGVzY3JpcHRpb24gPz9cclxuICAgICAgZW50aXR5LmRlc2NyaXB0aW9uID8/XHJcbiAgICAgIExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0FERE9OX01JU1NJTkdfREVTQ1JJUFRJT05cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYXV0aG9yID0gKFxyXG4gICAgICBlbnRpdHkuaW5zdGFuY2U/Ll9jb25maWc/LmluZm8/LmF1dGhvcnMgPz9cclxuICAgICAgZW50aXR5Lm1hbmlmZXN0Py5hdXRob3IgPz9cclxuICAgICAgZW50aXR5LmRhdGE/LmF1dGhvcnMgPz9cclxuICAgICAgZW50aXR5LmdldEF1dGhvcj8uKCkgPz9cclxuICAgICAgZW50aXR5LmF1dGhvciA/P1xyXG4gICAgICBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9BRERPTl9NSVNTSU5HX0FVVEhPUlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb2xvciA9IHRoaXMucHJvcHMuY2xpZW50ID09PSAnYmQnID8gJyMzRTgyRTUnIDogKFxyXG4gICAgICBlbnRpdHk/LmNvbG9yID8/XHJcbiAgICAgIGVudGl0eT8uZGF0YT8uY29sb3IgPz9cclxuICAgICAgZW50aXR5Py5pbnN0YW5jZT8uY29sb3IgPz9cclxuICAgICAgQ29sb3JzLkJSQU5EXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHZlcnNpb24gPSAoXHJcbiAgICAgIGVudGl0eS5pbnN0YW5jZT8uX2NvbmZpZz8uaW5mbz8udmVyc2lvbiA/P1xyXG4gICAgICBlbnRpdHkubWFuaWZlc3Q/LnZlcnNpb24gPz9cclxuICAgICAgZW50aXR5LmdldFZlcnNpb24/LigpID8/XHJcbiAgICAgIGVudGl0eS5kYXRhPy52ZXJzaW9uID8/XHJcbiAgICAgIGVudGl0eS52ZXJzaW9uID8/XHJcbiAgICAgIExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0FERE9OX01JU1NJTkdfVkVSU0lPTlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VG9vbHRpcFxyXG4gICAgICAgIHBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgIHRleHQ9e2VudGl0eS5mYWlsZWQgPyBMb2NhbGUuTWVzc2FnZXNbYFVOQk9VTkRfQURET05fRkFJTEVEXyR7dGhpcy5wcm9wcy50eXBlLnRvVXBwZXJDYXNlKCl9YF0gOiBudWxsfVxyXG4gICAgICAgIGhpZGVPbkNsaWNrPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygndW5ib3VuZC1hZGRvbi1jYXJkJywgZW50aXR5LmZhaWxlZCAmJiAnZGlzYWJsZWQnKX1cclxuICAgICAgICAgIHN0eWxlPXt7ICctLWVudGl0eS1jb2xvcic6IGNvbG9yIH19XHJcbiAgICAgICAgICBvbkNvbnRleHRNZW51PXsoZSkgPT4gQ29udGV4dE1lbnUub3BlbkNvbnRleHRNZW51KGUsICgpID0+XHJcbiAgICAgICAgICAgIDxNZW51LmRlZmF1bHQgb25DbG9zZT17Q29udGV4dE1lbnUuY2xvc2VDb250ZXh0TWVudX0+XHJcbiAgICAgICAgICAgICAgPE1lbnUuTWVudUl0ZW1cclxuICAgICAgICAgICAgICAgIGlkPSdkZWxldGUnXHJcbiAgICAgICAgICAgICAgICBjb2xvcj0nY29sb3JEYW5nZXInXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfREVMRVRFfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiB0aGlzLmRlbGV0ZSgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPE1lbnUuTWVudUl0ZW1cclxuICAgICAgICAgICAgICAgIGlkPSdyZWxvYWQnXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfUkVMT0FEfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiB0aGlzLnJlbG9hZCgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTWVudS5kZWZhdWx0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi1oZWFkZXInPlxyXG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3VuYm91bmQtYWRkb24tbmFtZScgc2l6ZT17VGV4dC5TaXplcy5TSVpFXzE2fT5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi12ZXJzaW9uJ1xyXG4gICAgICAgICAgICAgIHNpemU9e1RleHQuU2l6ZXMuU0laRV8xNn1cclxuICAgICAgICAgICAgICBjb2xvcj17VGV4dC5Db2xvcnMuSU5URVJBQ1RJVkVfTk9STUFMfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3ZlcnNpb259XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtYWRkb24tYXV0aG9ycydcclxuICAgICAgICAgICAgICBzaXplPXtUZXh0LlNpemVzLlNJWkVfMTZ9XHJcbiAgICAgICAgICAgICAgY29sb3I9e1RleHQuQ29sb3JzLklOVEVSQUNUSVZFX05PUk1BTH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIGJ5IHt0aGlzLnJlbmRlckF1dGhvcnMoYXV0aG9yKX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi1jb250cm9scyc+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2xpZW50ICE9PSAndW5ib3VuZCcgJiYgPFJlbGF0aXZlVG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgdGV4dD17TG9jYWxlLk1lc3NhZ2VzW2BVTkJPVU5EX0FERE9OX01BTkFHRVJfJHt0aGlzLnByb3BzLmNsaWVudC50b1VwcGVyQ2FzZSgpfV9UT09MVElQYF0/LmZvcm1hdCh7IHR5cGU6ICdQbHVnaW4nIH0pfVxyXG4gICAgICAgICAgICAgICAgaGlkZU9uQ2xpY2s9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwID0+IHRoaXMucmVuZGVyVHlwZSh7IC4uLnAgfSl9XHJcbiAgICAgICAgICAgICAgPC9SZWxhdGl2ZVRvb2x0aXA+fVxyXG4gICAgICAgICAgICAgIHt0aGlzLmhhc1NldHRpbmdzKCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFJlbGF0aXZlVG9vbHRpcCB0ZXh0PXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9TRVRUSU5HU30gaGlkZU9uQ2xpY2s9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAge3AgPT4gPEljb25cclxuICAgICAgICAgICAgICAgICAgICB7Li4ucH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5TZXR0aW5ncygpfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J0dlYXInXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI4fVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17Mjh9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWFkZG9uLWNvbnRyb2wtYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgIDwvUmVsYXRpdmVUb29sdGlwPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5pc0VuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy50b2dnbGUoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi1zd2l0Y2gnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1bmJvdW5kLWFkZG9uLWZvb3Rlcic+XHJcbiAgICAgICAgICAgIDxGb3JtVGV4dCBjbGFzc05hbWU9J3VuYm91bmQtYWRkb24tZGVzY3JpcHRpb24nPlxyXG4gICAgICAgICAgICAgIDxNYXJrZG93bj5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8L01hcmtkb3duPlxyXG4gICAgICAgICAgICA8L0Zvcm1UZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVG9vbHRpcD4pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQXV0aG9ycyhhdXRob3JzOiBBdXRob3IpIHtcclxuICAgIGNvbnN0IHJlcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUF1dGhvciA9IChhdXRob3IpID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBhdXRob3IgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmVzLnB1c2goYXV0aG9yKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXV0aG9yID09PSAnb2JqZWN0JyAmJiBhdXRob3IubmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdHlwZW9mIGF1dGhvci5pZCB8fCB0eXBlb2YgYXV0aG9yLmRpc2NvcmRfaWQ7XHJcbiAgICAgICAgY29uc3QgaGFzSWQgPSBpZCAmJiAoWydudW1iZXInLCAnc3RyaW5nJ10uaW5jbHVkZXModHlwZW9mIGlkKSk7XHJcblxyXG4gICAgICAgIHJlcy5wdXNoKGhhc0lkID9cclxuICAgICAgICAgIDxBbmNob3JcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWFkZG9uLWF1dGhvcidcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIExheWVycz8ucG9wTGF5ZXI/LigpO1xyXG4gICAgICAgICAgICAgIERNcz8ub3BlblByaXZhdGVDaGFubmVsPy4oW2F1dGhvci5pZCA/PyBhdXRob3IuZGlzY29yZF9pZF0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICA8L0FuY2hvcj4gOlxyXG4gICAgICAgICAgYXV0aG9yLm5hbWVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGF1dGhvcnMpKSB7XHJcbiAgICAgIGF1dGhvcnMubWFwKGhhbmRsZUF1dGhvcik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhdXRob3JzID09PSAnb2JqZWN0JyAmJiBhdXRob3JzLm5hbWUpIHtcclxuICAgICAgaGFuZGxlQXV0aG9yKGF1dGhvcnMpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXV0aG9ycyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmVzLnB1c2goYXV0aG9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5tYXAoKGF1dGhvciwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgaXNMYXN0ID0gaW5kZXggKyAxID09PSByZXMubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBhdXRob3IgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTGFzdCA/IGF1dGhvciA6IGAke2F1dGhvcn0sIGA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFthdXRob3IsIGlzTGFzdCA/ICcnIDogJywgJ107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVHlwZShwcm9wcykge1xyXG4gICAgY29uc3QgeyBjbGllbnQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcHJvcHMuY2xhc3NOYW1lID8/PSAndW5ib3VuZC1hZGRvbi10eXBlLWljb24nO1xyXG4gICAgcHJvcHMud2lkdGggPz89IDE2O1xyXG4gICAgcHJvcHMuaGVpZ2h0ID8/PSAxNjtcclxuXHJcbiAgICBzd2l0Y2ggKGNsaWVudC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgJ2JkJzpcclxuICAgICAgICByZXR1cm4gPEJkIHsuLi5wcm9wc30gLz47XHJcbiAgICAgIGNhc2UgJ3Bvd2VyY29yZCc6XHJcbiAgICAgICAgcmV0dXJuIDxQbHVnIHsuLi5wcm9wc30gLz47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNFbmFibGVkKCkge1xyXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xyXG4gICAgY29uc3QgZ2xvYmFsID0gdGhpcy5nZXRHbG9iYWwoKTtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcclxuXHJcbiAgICBjb25zdCBtYW5hZ2VyID0gKHdpbmRvd1tnbG9iYWxdPy5bdHlwZV0gPz8gd2luZG93W2dsb2JhbF0/Lm1hbmFnZXJzPy5bdHlwZV0pO1xyXG4gICAgcmV0dXJuIG1hbmFnZXI/LmlzRW5hYmxlZD8uKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKCkge1xyXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xyXG4gICAgY29uc3QgZ2xvYmFsID0gdGhpcy5nZXRHbG9iYWwoKTtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcclxuXHJcbiAgICBjb25zdCBtYW5hZ2VyID0gKHdpbmRvd1tnbG9iYWxdPy5bdHlwZV0gPz8gd2luZG93W2dsb2JhbF0/Lm1hbmFnZXJzPy5bdHlwZV0pO1xyXG4gICAgcmV0dXJuIG1hbmFnZXI/LmRlbGV0ZT8uKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xyXG4gICAgY29uc3QgZ2xvYmFsID0gdGhpcy5nZXRHbG9iYWwoKTtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcclxuXHJcbiAgICBjb25zdCBtYW5hZ2VyID0gKHdpbmRvd1tnbG9iYWxdPy5bdHlwZV0gPz8gd2luZG93W2dsb2JhbF0/Lm1hbmFnZXJzPy5bdHlwZV0pO1xyXG5cclxuICAgIHJldHVybiBtYW5hZ2VyPy50b2dnbGU/LihuYW1lKTtcclxuICB9XHJcblxyXG4gIHJlbG9hZCgpIHtcclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcclxuICAgIGNvbnN0IGdsb2JhbCA9IHRoaXMuZ2V0R2xvYmFsKCk7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XHJcblxyXG4gICAgY29uc3QgbWFuYWdlciA9ICh3aW5kb3dbZ2xvYmFsXT8uW3R5cGVdID8/IHdpbmRvd1tnbG9iYWxdPy5tYW5hZ2Vycz8uW3R5cGVdKTtcclxuXHJcbiAgICBpZiAobWFuYWdlcj8ucmVsb2FkKSB7XHJcbiAgICAgIHJldHVybiBtYW5hZ2VyLnJlbG9hZChuYW1lKTtcclxuICAgIH0gZWxzZSBpZiAobWFuYWdlcj8ucmVtb3VudCkge1xyXG4gICAgICByZXR1cm4gbWFuYWdlci5yZW1vdW50KG5hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGJpbmRcclxuICBvblRvZ2dsZShuYW1lKSB7XHJcbiAgICBjb25zdCB7IGVudGl0eSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBpZiAoIVtlbnRpdHkuaWQsIGVudGl0eS5lbnRpdHlJRCwgZW50aXR5Lm5hbWVdLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUeXBlKCkge1xyXG4gICAgY29uc3QgeyB0eXBlLCBjbGllbnQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgc3dpdGNoIChjbGllbnQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICBjYXNlICdwb3dlcmNvcmQnOlxyXG4gICAgICAgIHJldHVybiB0eXBlID09PSAncGx1Z2lucycgPyAncGx1Z2luTWFuYWdlcicgOiAnc3R5bGVNYW5hZ2VyJztcclxuICAgICAgY2FzZSAnYmQnOlxyXG4gICAgICAgIHJldHVybiB0eXBlID09PSAncGx1Z2lucycgPyAnUGx1Z2lucycgOiAnVGhlbWVzJztcclxuICAgICAgY2FzZSAndW5ib3VuZCc6XHJcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdwbHVnaW5zJyA/ICdwbHVnaW5zJyA6ICd0aGVtZXMnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0R2xvYmFsKCkge1xyXG4gICAgY29uc3QgeyBjbGllbnQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgc3dpdGNoIChjbGllbnQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICBjYXNlICdwb3dlcmNvcmQnOlxyXG4gICAgICAgIHJldHVybiAncG93ZXJjb3JkJztcclxuICAgICAgY2FzZSAnYmQnOlxyXG4gICAgICAgIHJldHVybiAnQmRBcGknO1xyXG4gICAgICBjYXNlICd1bmJvdW5kJzpcclxuICAgICAgICByZXR1cm4gJ3VuYm91bmQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFzU2V0dGluZ3MoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQoKTtcclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5pc0VuYWJsZWQgJiYgKFxyXG4gICAgICB0aGlzLnByb3BzLmVudGl0eS5pbnN0YW5jZT8uZ2V0U2V0dGluZ3NQYW5lbCA/P1xyXG4gICAgICB0aGlzLnByb3BzLmVudGl0eS5nZXRTZXR0aW5nc1BhbmVsID8/XHJcbiAgICAgIFsuLi53aW5kb3c/LnBvd2VyY29yZD8uYXBpPy5zZXR0aW5ncz8uc2V0dGluZ3M/LmtleXMoKSA/PyBbXV0uaW5jbHVkZXMoaWQpID8/XHJcbiAgICAgIFsuLi53aW5kb3c/LnBvd2VyY29yZD8uYXBpPy5zZXR0aW5ncz8uc2V0dGluZ3M/LnZhbHVlcygpID8/IFtdXS5maW5kPy4oZSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoYWJsZSA9IFtlLmxhYmVsLCBlLmNhdGVnb3J5XTtcclxuICAgICAgICBpZiAoc2VhcmNoYWJsZS5pbmNsdWRlcyhpZCkgfHwgc2VhcmNoYWJsZS5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLnByb3BzLmVudGl0eS5lbnRpdHlJRCA/P1xyXG4gICAgICB0aGlzLnByb3BzLmVudGl0eS5pZCA/P1xyXG4gICAgICB0aGlzLnByb3BzLmVudGl0eS5tYW5pZmVzdD8ubmFtZSA/P1xyXG4gICAgICB0aGlzLnByb3BzLmVudGl0eS5uYW1lXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLnByb3BzLmVudGl0eS5pZCA/P1xyXG4gICAgICB0aGlzLnByb3BzLmVudGl0eS5lbnRpdHlJRCA/P1xyXG4gICAgICB0aGlzLnByb3BzLmVudGl0eS5uYW1lXHJcbiAgICApO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiQWRkb25DYXJkIiwiU3R5bGVzIiwiYXBwZW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJnbG9iYWwiLCJnZXRHbG9iYWwiLCJ0eXBlIiwiZ2V0VHlwZSIsIm1hbmFnZXIiLCJ3aW5kb3ciLCJtYW5hZ2VycyIsIm9uIiwib25Ub2dnbGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm9mZiIsInJlbmRlciIsImVudGl0eSIsInByb3BzIiwibmFtZSIsImluc3RhbmNlIiwiX2NvbmZpZyIsImluZm8iLCJtYW5pZmVzdCIsImRpc3BsYXlOYW1lIiwiZGF0YSIsIkxvY2FsZSIsIk1lc3NhZ2VzIiwiVU5CT1VORF9BRERPTl9NSVNTSU5HX05BTUUiLCJkZXNjcmlwdGlvbiIsIlVOQk9VTkRfQURET05fTUlTU0lOR19ERVNDUklQVElPTiIsImF1dGhvciIsImF1dGhvcnMiLCJnZXRBdXRob3IiLCJVTkJPVU5EX0FERE9OX01JU1NJTkdfQVVUSE9SIiwiY29sb3IiLCJjbGllbnQiLCJDb2xvcnMiLCJCUkFORCIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwiVU5CT1VORF9BRERPTl9NSVNTSU5HX1ZFUlNJT04iLCJUb29sdGlwIiwicG9zaXRpb24iLCJ0ZXh0IiwiZmFpbGVkIiwidG9VcHBlckNhc2UiLCJoaWRlT25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsImNsYXNzbmFtZXMiLCJzdHlsZSIsIm9uQ29udGV4dE1lbnUiLCJlIiwiQ29udGV4dE1lbnUiLCJvcGVuQ29udGV4dE1lbnUiLCJNZW51IiwiZGVmYXVsdCIsIm9uQ2xvc2UiLCJjbG9zZUNvbnRleHRNZW51IiwiTWVudUl0ZW0iLCJpZCIsImxhYmVsIiwiVU5CT1VORF9ERUxFVEUiLCJhY3Rpb24iLCJkZWxldGUiLCJVTkJPVU5EX1JFTE9BRCIsInJlbG9hZCIsIlRleHQiLCJzaXplIiwiU2l6ZXMiLCJTSVpFXzE2IiwiSU5URVJBQ1RJVkVfTk9STUFMIiwicmVuZGVyQXV0aG9ycyIsIlJlbGF0aXZlVG9vbHRpcCIsImZvcm1hdCIsInAiLCJyZW5kZXJUeXBlIiwiaGFzU2V0dGluZ3MiLCJVTkJPVU5EX1NFVFRJTkdTIiwiSWNvbiIsIm9uQ2xpY2siLCJvcGVuU2V0dGluZ3MiLCJ3aWR0aCIsImhlaWdodCIsIlN3aXRjaCIsImNoZWNrZWQiLCJpc0VuYWJsZWQiLCJvbkNoYW5nZSIsInRvZ2dsZSIsIkZvcm1UZXh0IiwiTWFya2Rvd24iLCJyZXMiLCJoYW5kbGVBdXRob3IiLCJwdXNoIiwiZGlzY29yZF9pZCIsImhhc0lkIiwiaW5jbHVkZXMiLCJBbmNob3IiLCJMYXllcnMiLCJwb3BMYXllciIsIkRNcyIsIm9wZW5Qcml2YXRlQ2hhbm5lbCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImluZGV4IiwiaXNMYXN0IiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJCZCIsIlBsdWciLCJnZXROYW1lIiwicmVtb3VudCIsImVudGl0eUlEIiwiZm9yY2VVcGRhdGUiLCJnZXRJZCIsImdldFNldHRpbmdzUGFuZWwiLCJwb3dlcmNvcmQiLCJhcGkiLCJzZXR0aW5ncyIsImtleXMiLCJ2YWx1ZXMiLCJmaW5kIiwic2VhcmNoYWJsZSIsImNhdGVnb3J5IiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsa0dBcUJBLFNBNFRDLHdCQTVUb0JBLENBQVMsbUJBckIyRCwwQkFBcUIsWUFDbEUsOEJBQWlCLFlBRTVCLGlDQUFZLFlBQ3RCLDJCQUFZLFlBQ2Qsd0JBQWEsWUFDZCwyQkFBYyxjQUNoQixPQUFPLGFBRUEsZUFBUyxjQUVmLG1DQUE4QixzREFDakRDLENBQU0sUUFBQSxDQUFDQyxNQUFNLEVBQUUsQUFTQSxPQUFNRixDQUFTLFNBQVNHLENBQUssUUFBQSxDQUFDQyxTQUFTLENBQ3BEQyxrQkFBa0IsRUFBRyxDQUNuQixJQUFNQyxDQUFNLENBQUcsSUFBSSxDQUFDQyxTQUFTLEVBQUUsQ0FDekJDLENBQUksQ0FBRyxJQUFJLENBQUNDLE9BQU8sRUFBRSxDQUVyQkMsQ0FBTyxDQUFJQyxNQUFNLENBQUNMLENBQU0sQ0FBQyxFQUFFLENBQUNFLENBQUksQ0FBQyxFQUFJRyxNQUFNLENBQUNMLENBQU0sQ0FBQyxFQUFFTSxRQUFRLEVBQUUsQ0FBQ0osQ0FBSSxDQUFDLEFBQUMsQUFINUMsQ0FLaENFLENBQU8sRUFBRUcsRUFBRSxHQUFHLFFBQVEsQ0FBRSxJQUFJLENBQUNDLFFBQVEsRUFDdEMsQUFFREMsb0JBQW9CLEVBQUcsQ0FDckIsSUFBTVQsQ0FBTSxDQUFHLElB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