(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{447:function(t,e,r){"use strict";r.r(e);r(208);var o=r(17),n=r(27),l=r(30),c=r(26),d=r(19),h=r(8),v=r(94),f=r(455);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(d.a)(t);if(e){var n=Object(d.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(c.a)(this,r)}}var m=function(t,e,r,desc){var o,n=arguments.length,l=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(n<3?o(l):n>3?o(e,r,l):o(e,r))||l);return n>3&&l&&Object.defineProperty(e,r,l),l},y=function(t){Object(l.a)(r,t);var e=_(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),r}(v.Vue);m([Object(v.Prop)()],y.prototype,"item",void 0);var w=y=m([Object(v.Component)({components:{ShareButtons:f.default}})],y),x=r(73),k=r(86),O=r.n(k),j=r(218),C=r(196),S=r(426),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("v-menu",{attrs:{top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({attrs:{depressed:"",icon:""}},o),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),r("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{ShareButtons:r(455).default}),O()(component,{VBtn:j.a,VIcon:C.a,VMenu:S.a})},449:function(t,e,r){"use strict";r(164),r(165),r(14);var o=r(2),n=(r(453),r(211)),l=r(213),c=r(92),d=r(5);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=v({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},453:function(t,e,r){var content=r(454);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("e23b7040",content,!0,{sourceMap:!1})},454:function(t,e,r){(e=r(11)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},455:function(t,e,r){"use strict";r.r(e);r(208);var o=r(17),n=r(27),l=r(30),c=r(26),d=r(19),h=r(8),v=r(94);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(d.a)(t);if(e){var n=Object(d.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(c.a)(this,r)}}var _=function(t,e,r,desc){var o,n=arguments.length,l=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(n<3?o(l):n>3?o(e,r,l):o(e,r))||l);return n>3&&l&&Object.defineProperty(e,r,l),l},m=function(t){Object(l.a)(r,t);var e=f(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://moeller.jinsha.tsukuba.ac.jp/dev",t}return Object(n.a)(r,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(r){r.clipboardData.setData("text/plain",t),r.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),r}(v.Vue);_([Object(v.Prop)({required:!0})],m.prototype,"url",void 0),_([Object(v.Prop)({required:!0})],m.prototype,"title",void 0);var y=m=_([v.Component],m),w=r(73),x=r(86),k=r.n(x),O=r(218),j=r(449),C=r(196),S=r(655),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},o),[r("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Twitter"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},o),[r("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Facebook"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},o),[r("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VBtn:O.a,VCard:j.a,VIcon:C.a,VTooltip:S.a})},459:function(t,e,r){var content=r(460);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("dc0628f2",content,!0,{sourceMap:!1})},460:function(t,e,r){(e=r(11)(!1)).push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=e},461:function(t,e,r){var content=r(462);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("7c06aa28",content,!0,{sourceMap:!1})},462:function(t,e,r){(e=r(11)(!1)).push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=e},463:function(t,e,r){"use strict";r.r(e);r(54),r(208),r(53),r(24),r(39);var o=r(17),n=r(27),l=r(30),c=r(26),d=r(19),h=r(8),v=r(94);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(d.a)(t);if(e){var n=Object(d.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(c.a)(this,r)}}var _=function(t,e,r,desc){var o,n=arguments.length,l=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(n<3?o(l):n>3?o(e,r,l):o(e,r))||l);return n>3&&l&&Object.defineProperty(e,r,l),l},m=function(t){Object(l.a)(r,t);var e=f(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r,[{key:"getQuery",value:function(t){var e={};return e["fc-"+this.field]=t,e}},{key:"items",get:function(){var data=this.data;if(!data)return[];data=data[0];for(var t=["(",")","=","×3","×2","/",","],i=0;i<t.length;i++)data=data.split(t[i]).join("+");return data.split("+")}},{key:"elements",get:function(){var data=this.data,t=this.items;if(!data)return[];data=data[0];for(var map={},i=0;i<t.length;i++){var e=t[i],r=e.length;map[r]||(map[r]=[]),map[r].push(e)}for(var o=Object.keys(map).reverse(),n=0;n<o.length;n++)for(var l=map[o[n]],c=0;c<l.length;c++){var d=l[c];data=data.split(d).join("$$$")}return data.split("$$$")}}]),r}(v.Vue);_([Object(v.Prop)({required:!0})],m.prototype,"data",void 0),_([Object(v.Prop)({required:!0})],m.prototype,"field",void 0);var y=m=_([v.Component],m),w=r(73),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",t._l(t.elements,(function(e,i){return r("span",{key:i},[t._v("\n    "+t._s(t.elements[i])+"\n    "),r("nuxt-link",{attrs:{to:t.localePath({name:"search",query:t.getQuery(t.items[i])})}},[t._v("\n      "+t._s(t.items[i])+"\n    ")])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},608:function(t,e,r){"use strict";r(14);var o=r(2),n=(r(461),r(0)),l=r(13),c=r(5);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(c.a)(l.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n.g)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},655:function(t,e,r){"use strict";r(14);var o=r(2),n=(r(459),r(121)),l=r(22),c=r(149),d=r(131),h=r(215),v=r(195),f=r(42),_=r(0),m=r(6),y=r(5);e.a=Object(y.a)(l.a,c.a,d.a,h.a,v.a,f.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,n=0;return this.top||this.bottom||r?n=o+e.width/2-content.width/2:(this.left||this.right)&&(n=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=r+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=r+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(_.g)(this.maxWidth),minWidth:Object(_.g)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(_.s)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===_.w.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},701:function(t,e,r){"use strict";r.r(e);r(14),r(24),r(39),r(40);var o=r(10),n=r(71),l=r.n(n),c={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,data,d,i,h,v,f,_,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.payload,o=t.app,!r){e.next=5;break}return e.abrupt("return",r);case 5:return n=o.context.route.params.id,e.next=8,l.a.get("https://moeller.jinsha.tsukuba.ac.jp/dev/data/curation_old.json");case 8:c=e.sent,data=c.data,d=data.selections,i=0;case 12:if(!(i<d.length)){e.next=28;break}h=d[i],v=h.within["@id"],f=h.members,_=0;case 17:if(!(_<f.length)){e.next=25;break}if((m=f[_]).label!==n){e.next=22;break}return m.manifest=v,e.abrupt("return",m);case 22:_++,e.next=17;break;case 25:i++,e.next=12;break;case 28:case"end":return e.stop()}}),e)})))()},data:function(){return{baseUrl:"https://moeller.jinsha.tsukuba.ac.jp/dev",prefix:"https://w3id.org/hpdb",fields:[{label:"Item Type"},{label:"Sub Type"},{label:"Unit"},{label:"Vol"},{label:"Page"},{label:"Order"},{label:"Item Label"},{label:"Hieratic No"},{label:"Numeral"},{label:"Category Class"},{label:"Hieroglyph No"},{label:"Phone/Word"},{label:"Note",text:!0}]}},head:function(){var title=this.title;return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.thumbnail},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"}]}},computed:{url:function(){return this.baseUrl+"/item/"+this.$route.params.id},id:function(){return this.$route.params.id},title:function(){return this.id},metadataObj:function(){for(var t=this.metadata,e={},i=0;i<t.length;i++){var r=t[i],o=Array.isArray(r.value)?r.value:""===r.value?[]:[r.value];e[r.label]=o}return e}},methods:{getIframeUrl:function(){return this.baseUrl+"/curation/?manifest="+this.manifest+"&canvas="+encodeURIComponent(this["@id"])},getCurationUrl:function(){var t=this["@id"].split("#xywh="),e=t[0],r=t[1];return"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest="+this.manifest+"&canvas="+encodeURIComponent(e)+"&xywh="+r+"&xywh_highlight=border"},getUtaUrl:function(){var t=this["@id"].split("#xywh="),e=t[0],r=t[1],o=e.split("/canvas/p")[1];return"https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/asia/document/"+this.manifest.split("/manifest/")[1].split("/")[0]+"#?c=0&m=0&s=0&cv="+(Number(o)-1)+"&xywh="+r},getQuery:function(label,t){var e={};return e["fc-"+label]=t,e}}},d=r(73),h=r(86),v=r.n(h),f=r(218),_=r(438),m=r(46),y=r(608),w=r(655),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-3"}},[r("v-container",[r("iframe",{attrs:{src:t.getIframeUrl(),width:"100%",height:"200",allowfullscreen:"",frameborder:"0"}})])],1),t._v(" "),r("v-container",{staticClass:"mt-5 mb-10"},[r("p",{staticClass:"text-center py-5"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"mx-1",attrs:{icon:"",target:"_blank",href:t.getCurationUrl()}},o),[r("img",{attrs:{src:t.baseUrl+"/img/icons/icp-logo.svg",width:"30px"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("IIIF Curation Viewer"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"mx-1",attrs:{icon:"",target:"_blank",href:t.getUtaUrl()}},o),[r("img",{attrs:{src:t.baseUrl+"/img/icons/ut.ico",width:"30px"}})])]}}])},[t._v(" "),r("span",[t._v(t._s(t.$t("uta")))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"mx-1",attrs:{icon:"",target:"_blank",href:t.baseUrl+"/snorql/?describe="+t.prefix+"/api/items/"+t.id}},o),[r("img",{attrs:{src:t.baseUrl+"/img/icons/rdf-logo.svg",width:"30px"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("RDF"))])]),t._v(" "),r("ResultOption",{attrs:{item:{label:t.id,url:t.url}}})],1),t._v(" "),r("v-simple-table",{staticClass:"mt-10",scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[r("tr",[r("td",{attrs:{width:"30%"}},[t._v("URL")]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[r("a",{attrs:{href:t.prefix+"/item/"+t.$route.params.id}},[t._v(t._s(t.prefix+"/item/"+t.$route.params.id))])])]),t._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[t._v("ID")]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[t._v("\n              "+t._s(t.id)+"\n            ")])]),t._v(" "),t._l(t.fields,(function(e,o){return[t.metadataObj[e.label]&&t.metadataObj[e.label].length>0?r("tr",{key:o},[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t(e.label)))]),t._v(" "),r("td",{staticClass:"py-5",class:"Phone/Word"===e.label?"phone":"",staticStyle:{"overflow-wrap":"break-word"}},[["Hieratic No","Hieroglyph No"].includes(e.label)?[r("Split",{attrs:{data:t.metadataObj[e.label],field:e.label+" Mod"}})]:e.text?t._l(t.metadataObj[e.label],(function(e,o){return r("span",{key:o},[t._v("\n                    "+t._s(e)+"\n                  ")])})):t._l(t.metadataObj[e.label],(function(o,n){return r("nuxt-link",{key:n,attrs:{to:t.localePath({name:"search",query:t.getQuery(e.label,o)})}},[t._v("\n                    "+t._s(["Item Type","Sub Type","Unit"].includes(e.label)?t.$t(o):o)+"\n                  ")])}))],2)]):t._e()]}))],2)]},proxy:!0}])}),t._v(" "),r("v-sheet",{staticClass:"text-center mt-10"},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("license")))]),t._v(" "),"ja"==t.$i18n.locale?[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"クリエイティブ・コモンズ・ライセンス",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("この作品は"),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("クリエイティブ・コモンズ 表示 4.0 国際 ライセンス")]),t._v("の下に提供されています。\n        ")]:[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("This work is licensed under a\n          "),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("Creative Commons Attribution 4.0 International License")]),t._v(".\n        ")]],2)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ResultOption:r(447).default,Split:r(463).default}),v()(component,{VBtn:f.a,VContainer:_.a,VSheet:m.a,VSimpleTable:y.a,VTooltip:w.a})}}]);