(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{199:function(e,t,r){"use strict";r.r(t);r(73),r(13),r(16),r(71),r(32),r(24),r(208);var n=r(26),o=r(38),c=r(37),l=r(34),v=r(25),f=r(17),d=r(99);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(v.a)(e);if(t){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},y=function(e){Object(c.a)(r,e);var t=h(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).queryKeyword="",e.keywords=[],e}return Object(o.a)(r,[{key:"trigger",value:function(e){13===e.keyCode&&this.search()}},{key:"search",value:function(){var e=this.queryKeyword;e||(e="");for(var t=this.$searchUtils.splitKeyword(e),r=Object.assign({},this.$route.query),n=[],i=0;i<t.length;i++){var o=t[i];"keyword"===o.label&&n.push(o.value)}r.keyword=n,r.from=0,this.$router.push(this.localePath({name:"search",query:r}),(function(){}),(function(){}))}},{key:"keywordStr",get:function(){var e=this.$store.state.keyword;return Array.isArray(e)?e.join(" "):e},set:function(e){this.queryKeyword=e}}]),r}(d.Vue),_=y=m([Object(d.Component)({})],y),k=r(80),w=r(92),j=r.n(w),x=r(420),component=Object(k.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-text-field",{attrs:{"single-line":"","background-color":"grey lighten-2",filled:"",rounded:"",dense:"","hide-details":"",label:e.$t("search"),clearable:"","clear-icon":"mdi-close-circle","append-icon":"mdi-magnify"},on:{"click:append":e.search,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.trigger(t)}},model:{value:e.keywordStr,callback:function(t){e.keywordStr=t},expression:"keywordStr"}})],1)}),[],!1,null,null,null);t.default=component.exports;j()(component,{VTextField:x.a})},203:function(e,t,r){"use strict";(function(e){r(73);var n=r(26),o=r(38),c=function(){function t(){Object(n.a)(this,t)}return Object(o.a)(t,[{key:"formatArrayValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:", ";if(null==e)return"";if(1===e.length)return e[0];var r=e.join(t);return r}},{key:"getProjectFooter",value:function(t){return"ja"===t?e.env.projectFooterJa:e.env.projectFooterEn}},{key:"getProjectName",value:function(t){return"ja"===t?e.env.projectNameJa:e.env.projectNameEn}},{key:"getProjectDescription",value:function(t){return"ja"===t?e.env.projectDescriptionJa:e.env.projectDescriptionEn}},{key:"truncate",value:function(e,t){return e&&e["@id"]?"":(e=String(e)).length<=t?e:e.substring(0,t)+"..."}}]),t}();t.a=function(e,t){t("utils",new c)}}).call(this,r(190))},204:function(e,t,r){"use strict";r(8),r(55),r(60),r(28),r(7),r(49),r(35),r(51),r(39),r(31),r(22),r(12),r(16),r(32),r(24),r(411),r(43),r(48),r(68),r(52),r(72),r(65),r(47);var n=r(33),o=(r(53),r(15)),c=r(280),l=r(26),v=r(38),f=r(78),d=r.n(f);function h(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var y=function(){function e(){Object(l.a)(this,e),this.shuffle=function(e){for(var t=Object(c.a)(e).slice(0),i=t.length-1;i>=0;i--){var r=Math.floor(Math.random()*(i+1)),n=[t[r],t[i]];t[i]=n[0],t[r]=n[1]}return t}}var t,r,f;return Object(v.a)(e,[{key:"splitKeyword",value:function(e){for(var t=e.replace(/　/g," ").split(" ").filter((function(e){return""!==e})),r=[],i=0;i<t.length;i++){var n=t[i],o=n.split(":");2===o.length?r.push({label:"q-"+o[0].trim(),value:o[1].trim()}):r.push({label:"keyword",value:n})}return r}},{key:"createFacetQuery",value:function(e){for(var t={},i=0;i<e.length;i++){var r=e[i];t[r.field]=r.value}return t}},{key:"createQuery",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=Object.keys(t.facetOptions),o=["_full_text","_title"],c=50,l=e.from?Number(e.from):0,v=e.size?Number(e.size):t.size,f={keyword:"true"===e.keywordOr,q:"true"===e.advancedOr,fc:"true"===e.facetOr};v>500&&(v=500);for(var d={},h={},i=0;i<n.length;i++){var m=n[i],y="fc-"+m;if(e[y]){var _=e[y],k=[];k=Array.isArray(_)?_:[_],h[y]=k}var option=t.facetOptions[m],w=option.orderKey||"_count",j=option.orderValue||"desc",x={};x[w]=j,d[m]={terms:{field:m+".keyword",size:r?option.size||c:-1,order:x}}}var O={bool:{must:[],should:[],filter:[],must_not:[]}},A=e.keyword?e.keyword:[],S=[];S=Array.isArray(A)?A:[A];for(var F=0;F<S.length;F++){var R=S[F];if(R.startsWith("-"))for(var I=0;I<o.length;I++){var P={};P[o[I]]=R.slice(1),O.bool.must_not.push({match_phrase:P})}else if(f.keyword);else{for(var C=[],N=0;N<o.length;N++){var V={};V[o[N]]=R,C.push({match_phrase:V})}O.bool.must.push({bool:{should:C}})}}for(var D in e)if(D.startsWith("q-")||D.startsWith("fc-")){var E=D,K=E.split("-")[0],L=E.split("-")[0],z="q"===L?"must":"filter",T=f[L]?"should":z,$=e[E],W=[];W=Array.isArray($)?$:[$];for(var H=[],M=[],J=0;J<W.length;J++){var U=W[J];U.startsWith("-")?M.push(U.slice(1)):H.push(U)}for(var Q=0;Q<M.length;Q++){var B=M[Q];if("fc"===K){var G={};G[D.slice(3)+".keyword"]=B,O.bool.must_not.push({term:G})}else{var X={};X[D.slice(2)]=B,O.bool.must_not.push({term:X})}}if(0===H.length)continue;if("fc"===K){for(var Y=[],Z=0;Z<H.length;Z++){var ee=W[Z],te={};te[D.slice(3)+".keyword"]=ee,Y.push({term:te})}O.bool[T].push({bool:{should:Y}})}else for(var re=0;re<H.length;re++){var ne=W[re],ae={};ae[D.slice(2)]=ne,O.bool[T].push({term:ae})}}var ie=e.sort?e.sort:null,oe=[];if(null!=ie&&!ie.includes("_score")){var se=ie.split(":"),ue=se[0],ce=se[1],le={};le[ue]={order:ce},oe.push(le),oe.push("_score")}var body={query:O,aggs:d,size:v,from:l,sort:oe};return body}},{key:"initStore",value:function(e,t){e.commit("setIndex",t.index),e.commit("setData",t.data)}},{key:"loadIndex",value:(f=Object(o.a)(regeneratorRuntime.mark((function e(u){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(u).then((function(e){for(var t=e.data,data=[],r={},i=0;i<t.length;i++){var n=t[i],o={},c="";for(var l in n)if(!l.startsWith("_")){var v=n[l];v=Array.isArray(v)?v:[v],o[l]=v,r[l]||(r[l]={});for(var f=0;f<v.length;f++){var d=v[f];d&&String(d).startsWith("http")||(r[l][d]||(r[l][d]=[]),r[l][d].push(i),c+=d+" ")}}var h="_id",m=n._id;r[h]||(r[h]={}),r[h][m]||(r[h][m]=[]),r[h][m].push(i),r[h="_full_text"]||(r[h]={}),r[h][c]||(r[h][c]=[]),r[h][c].push(i),n._label&&(o._label=[n._label]),n._image&&(o._thumbnail=[n._image]),n._related&&(o._relatedLink=[n._related]),n._url&&(o._url=[n._url]);var y={_id:m,_source:o};data.push(y)}return{data:data,index:r}}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)})},{key:"createIndex",value:(r=Object(o.a)(regeneratorRuntime.mark((function e(u){var data,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(u).then((function(e){var r=e.data;return"cr:Curation"===r["@type"]?t.createIndexFromIIIFCurationList(r):{}}));case 2:return data=e.sent,e.abrupt("return",data);case 4:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"createIndexFromIIIFCurationList",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var title,r,n,data,o,c,l,v,f,i,h,m,y,_,k,w,label,j,x,O,A,S,F,R,I,P,C,N,V,D,E,K,L,z,T,$,W,H,M,J,U,Q,B,G,X,area,image,Y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:title=t.label,r="",n=t["@id"],t.thumbnail&&(r=t.thumbnail),data=[],o=t.selections,c=1,l={},v={},f={},i=0;case 11:if(!(i<o.length)){e.next=86;break}h=o[i],m=h.members,y=h.within["@id"],_=0;case 16:if(!(_<m.length)){e.next=83;break}if(k=m[_],w="",0===i&&0===_&&""===r&&(r=k.thumbnail),(label=k.label)["@value"]&&(label=label["@value"]),j={_label:[label]},k.related&&(j._related=[k.related]),k.thumbnail?j._thumbnail=[k.thumbnail]:(v[y]||(v[y]={}),v[y][c-1]=k["@id"]),x={},!(O=k.metadata)){e.next=45;break}A=0;case 29:if(!(A<O.length)){e.next=45;break}if(S=O[A],F=S.value,Array.isArray(F)||(F=[F]),!(R=F[0])||"oa:Annotation"!==R["@type"]){e.next=38;break}return I=R.resource.chars.replace(/<[^>]*>?/gm,""),j._label=[I],e.abrupt("continue",42);case 38:for(j[S.label]||(j[S.label]=[]),P=0;P<F.length;P++)C=F[P],j[S.label].includes(C)||j[S.label].push(C);S.property&&(N=S.property,x[N]||(x[N]={}),S.uri?x[N][S.uri]||(x[N][S.uri]={label:S.value}):x[N][S.value]||(x[N][S.valu]={label:S.value})),S.property&&(V=S.property,f[V]||(f[V]={}),D=S.uri,E=S.value,f[V][D]||(f[V][D]={label:E,count:0}),K=f[V][D].count+1,f[V][D].count=K);case 42:A++,e.next=29;break;case 45:j._manifest=[y],e.t0=regeneratorRuntime.keys(j);case 47:if((e.t1=e.t0()).done){e.next=69;break}L=e.t1.value,l[L]||(l[L]={}),z=j[L],T=0;case 52:if(!(T<z.length)){e.next=67;break}if($=z[T],!Array.isArray($)){e.next=56;break}return e.abrupt("continue",64);case 56:if(!$||!$["@id"]){e.next=58;break}return e.abrupt("continue",64);case 58:if(!$||!String($).startsWith("http")||"_manifest"===L){e.next=60;break}return e.abrupt("continue",64);case 60:l[L][$]||(l[L][$]=[]),W=c-1,l[L][$].push(W),w+=$+" ";case 64:T++,e.next=52;break;case 67:e.next=47;break;case 69:l[H="_full_text"]||(l[H]={}),l[H][w]||(l[H][w]=[]),l[H][w].push(c-1),j._curation=[n],j._pos=[c],M={_id:j.m_sort[0],_source:j,entity:x},k.images&&(M.images=k.images),k.texts&&(M.texts=k.texts),data.push(M),c+=1;case 80:_++,e.next=16;break;case 83:i++,e.next=11;break;case 86:e.t2=regeneratorRuntime.keys(v);case 87:if((e.t3=e.t2()).done){e.next=98;break}return J=e.t3.value,e.next=91,d.a.get(J).then((function(e){for(var t={},r=e.data.sequences[0].canvases,n=0;n<r.length;n++){var canvas=r[n];canvas.images[0].resource.service?t[canvas["@id"]]=canvas.images[0].resource.service["@id"]+"/info.json":t[canvas["@id"]]=canvas.images[0].resource["@id"]}return t})).catch((function(){return null}));case 91:if(U=e.sent){e.next=94;break}return e.abrupt("continue",87);case 94:for(B in Q=v[J])G=Q[B].split("#xywh="),X=G[0],area=G[1],(image=U[X])&&(image.includes("info.json")&&(image=image.replace("info.json",area+"/256,/0/default.jpg")),data[Number(B)]._source._thumbnail=[image]);e.next=87;break;case 98:return Y="list","annotation"===t.viewingHint?Y="table":t.viewingHint&&(Y=t.viewingHint),e.abrupt("return",{data:data,index:l,title:title,thumbnail:r,json:t,entity:f,api:t.api,layout:Y,description:t.description});case 101:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"search",value:function(e,t,r){var n=this.filter(e,t,r),o=this.getDataFiltered(n,t),c=this.createFacets(e,n,r.aggs);return o=this.sortData(r.sort,o),{aggregations:c,hits:{hits:this.getResult(o,r.from,r.size),total:{relation:r.sort,value:o.length}}}}},{key:"filter",value:function(e,t,r){for(var o=this,c=[],i=0;i<t.length;i++)c.push(i);if(!r.query)return c;var l=r.query.bool,v=new Set(c),f=new Set,d={filter:!1,must:!1,must_not:!1,should:!1};for(var m in l){var y=l[m];y.length>0&&(d[m]=!0);for(var _=function(t){var r=y[t],l=new Set;if(r.bool){var d=r.bool.should;l=new Set([]);for(var h=0;h<d.length;h++){var _=o.getIds(e,c,d[h],m);l=new Set([].concat(Object(n.a)(l),Object(n.a)(_)))}}else l=o.getIds(e,c,r,m);"should"!==m?v=new Set(Object(n.a)(v).filter((function(e){return l.has(e)}))):f=new Set([].concat(Object(n.a)(f),Object(n.a)(l)))},k=0;k<y.length;k++)_(k)}!d.should||d.must||d.filter||d.must_not||(v=new Set([]));var w,j=[],x=h(new Set([].concat(Object(n.a)(v),Object(n.a)(f))));try{for(x.s();!(w=x.n()).done;){var O=w.value;j.push(O)}}catch(e){x.e(e)}finally{x.f()}return j}},{key:"getIds",value:function(e,t,r,n){var o=r[Object.keys(r)[0]],c=Object.keys(o)[0],l=o[c],v="Phone/Word.keyword"!==c;l=v?l.toLowerCase():l;var f=[];if("must_not"===n&&(f=t),c.includes(".keyword")){var d=e[c=c.replace(".keyword","")];for(var h in d){(v?h.toLowerCase():h)===l&&function(){var e=d[h];f="must_not"!==n?f.concat(e):f.filter((function(t){return!e.includes(t)}))}()}}else{var map=e[c];for(var m in map){(v?m.toLowerCase():m).includes(l)&&function(){var e=map[m];f="must_not"!==n?f.concat(e):f.filter((function(t){return!e.includes(t)}))}()}}return new Set(f)}},{key:"getDataFiltered",value:function(e,t){for(var r=[],i=0;i<e.length;i++)r.push(t[e[i]]);return r}},{key:"createFacets",value:function(e,t,r){var n={},o=function(label){var o=r[label].terms,c=o.size?Number(o.size):-1,l=o.field.replace(".keyword",""),map=e[l],v={};for(var f in map){for(var d=[],h=map[f],i=0;i<h.length;i++)t.includes(h[i])&&d.push(h[i]);var m=d.length;m>0&&(v[f]=m)}var y=Object.keys(v).map((function(e){return{key:e,value:v[e]}})),_=Object.keys(o.order)[0],k="value";"_term"==_&&(k="key");var w=1;"asc"==o.order[_]&&(w=-1),y.sort((function(a,b){return a[k]<b[k]?w:a[k]>b[k]?-1*w:0})),(-1===c||c>y.length)&&(c=y.length);for(var j=[],x=0;x<c;x++){var O={key:y[x].key,doc_count:y[x].value};j.push(O)}n[label]={buckets:j}};for(var label in r)o(label);return n}},{key:"sortData",value:function(e,t){var r,n=(r=e,Array.isArray(r)?r:[r])[0];if(!n)return t;var o=Object.keys(n)[0];if("_random"===o)return this.shuffle(t);var c=n[o].order;o=o.replace(".keyword","");var l=!0;"desc"===c&&(l=!1);var v=1,f=-1;return l||(v*=-1,f*=-1),t.sort((function(a,b){return a._source[o]?b._source[o]?a._source[o][0]>b._source[o][0]?v:a._source[o][0]<b._source[o][0]?f:0:f:v})),t}},{key:"getResult",value:function(e,t,r){var n=[],o=t+r;o>e.length&&(o=e.length);for(var i=t;i<o;i++)n.push(e[i]);return n}},{key:"getSearchQueryFromQueryStore",value:function(e,u){var t={sort:e.sort,size:e.size,from:(e.currentPage-1)*e.size,col:e.col,layout:e.layout};e.keyword.length>0&&(t.keyword=e.keyword);for(var r=e.advanced,n=["fc","q"],o=0;o<n.length;o++){var c=n[o];for(var label in r[c]){var l=[],v=r[c][label];for(var f in v)for(var d=v[f],i=0;i<d.length;i++){var h=d[i];l.push("+"===f?h:"-"+h)}t[label]=l}}return u&&(t.u=u),t}},{key:"getTopMessage",value:function(e,t,r){var n="",o="ja"===r?"件":"";return e===t&&(n="ja"===r?"上位":"Top "),n+e.toLocaleString()+o}}]),e}();t.a=function(e,t){t("searchUtils",new y)}},246:function(e,t,r){var content=r(315);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("7750648c",content,!0,{sourceMap:!1})},282:function(e,t,r){"use strict";r(13),r(16),r(71),r(24);var n=r(26),o=r(37),c=r(34),l=r(25),v=r(17),f=r(99),d=r(199);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var m=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},y=function(e){Object(o.a)(r,e);var t=h(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).drawer=!1,e.baseUrl="https://moeller.jinsha.tsukuba.ac.jp/dev",e}return r}(f.Vue),_=y=m([Object(f.Component)({components:{FullTextSearch:d.default}})],y),k=r(80),w=r(92),j=r.n(w),x=r(427),O=r(434),A=r(429),S=r(215),F=r(428),R=r(430),I=r(194),P=r(195),C=r(129),N=r(196),V=r(94),D=r(431),E=r(416),K=r(432),L=r(433),z=r(274),component=Object(k.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("div",[r("v-navigation-drawer",{attrs:{app:"",temporary:!0},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",[r("v-list-item",{attrs:{link:"",to:e.localePath({name:"index"})}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-home")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("Home")])],1)],1),e._v(" "),r("v-list-item",{attrs:{link:"",to:e.localePath({name:"search"})}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-magnify")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("search")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{link:"",to:e.localePath({name:"category-id",params:{id:"Vol"}})}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-view-list")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("category")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{link:"",to:e.localePath({name:"about"})}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-information")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("ユーザーズガイド")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{link:"",href:e.baseUrl+"/snorql",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-magnify")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("SPARQL Endpoint\n              "),r("v-icon",[e._v("mdi-open-in-new")])],1)],1)],1),e._v(" "),r("v-list-item",{attrs:{link:"",href:"https://wdb.jinsha.tsukuba.ac.jp/hdb/",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-database")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("Hieratic Database"),r("br"),e._v("Project\n              "),r("v-icon",[e._v("mdi-open-in-new")])],1)],1)],1),e._v(" "),r("v-list-item",{attrs:{link:"",href:"https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/asia/item?search=6+W%3A800+X%3Amol&sort_by=uparl%3AidentifierOfTheData&sort_order=asc",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-image")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("Digital Resources for"),r("br"),e._v("Egyptian Studies\n              "),r("v-icon",[e._v("mdi-open-in-new")])],1)],1)],1),e._v(" "),r("v-list-item",{attrs:{link:"",href:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=https://moeller.jinsha.tsukuba.ac.jp/data/curation.json&mode=annotation&lang=ja",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-image")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("IIIF Curation"),r("br"),e._v("Platform\n              "),r("v-icon",[e._v("mdi-open-in-new")])],1)],1)],1),e._v(" "),r("v-list-item",{attrs:{link:"",href:"https://self-museum.cultural.jp/?collection=https://moeller.jinsha.tsukuba.ac.jp/data/curation.json&build=1",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-image")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("Self Museum "),r("v-icon",[e._v("mdi-open-in-new")])],1)],1)],1)],1)],1),e._v(" "),r("v-app-bar",[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),r("v-toolbar-title",[r("nuxt-link",{staticStyle:{color:"inherit","text-decoration":"inherit"},attrs:{to:e.localePath({name:"index"})}},[e._v("\n          Hieratische Paläographie DB\n        ")])],1),e._v(" "),"xs"!=e.$vuetify.breakpoint.name?[r("v-spacer"),e._v(" "),r("FullTextSearch")]:e._e(),e._v(" "),r("v-spacer"),e._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({attrs:{depressed:"",btn:""}},n),[r("v-icon",{staticClass:"mr-2"},[e._v("mdi-translate")]),e._v(" "),"xs"!=e.$vuetify.breakpoint.name?[e._v("\n              "+e._s("ja"==e.$i18n.locale?"日本語":"English"))]:e._e(),e._v(" "),r("v-icon",{staticClass:"ml-2"},[e._v("mdi-menu-down")])],2)]}}])},[e._v(" "),r("v-list",[r("v-list-item",{attrs:{to:e.switchLocalePath("en")}},[r("v-list-item-title",[e._v("English")])],1),e._v(" "),r("v-list-item",{attrs:{to:e.switchLocalePath("ja")}},[r("v-list-item-title",[e._v("日本語")])],1)],1)],1)],2)],1),e._v(" "),r("v-main",[r("nuxt")],1),e._v(" "),r("v-footer",{staticClass:"mt-5",attrs:{dark:!0}},[r("v-container",[r("p",{staticClass:"text-center my-5"},["ja"==e.$i18n.locale?[e._v("\n          永井正勝, 和氣愛仁, 高橋洋成, 中村覚")]:[e._v("Masakatsu NAGAI, Toshihito WAKI, Yona TAKAHASHI and Satoru NAKAMURA\n        ")]],2),e._v(" "),r("p",{staticClass:"text-center my-5"},["ja"==e.$i18n.locale?[e._v("\n          本研究はJSPS科研費"),r("a",{attrs:{href:"https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-18K00525/"}},[e._v("18K00525")]),e._v("の助成を受けたものです．\n        ")]:[e._v("\n          This work was supported by JSPS KAKENHI Grant Number\n          "),r("a",{attrs:{href:"https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-18K00525/"}},[e._v("18K00525")]),e._v(".\n        ")]],2)])],1)],1)}),[],!1,null,null,null);t.a=component.exports;j()(component,{FullTextSearch:r(199).default}),j()(component,{VApp:x.a,VAppBar:O.a,VAppBarNavIcon:A.a,VBtn:S.a,VContainer:F.a,VFooter:R.a,VIcon:I.a,VList:P.a,VListItem:C.a,VListItemAction:N.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:D.a,VMenu:E.a,VNavigationDrawer:K.a,VSpacer:L.a,VToolbarTitle:z.a})},291:function(e,t,r){r(292),e.exports=r(293)},314:function(e,t,r){"use strict";r(246)},315:function(e,t,r){(t=r(19)(!1)).push([e.i,"h1[data-v-66a519aa]{font-size:20px}",""]),e.exports=t},388:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return c}));r(7),r(35),r(39),r(22),r(16),r(43),r(72),r(47);function n(e){return Array.isArray(e)?e:[e]}var o=function(){return{sort:"",size:-1,from:-1,keyword:[],advanced:{},currentPage:1,layout:"",col:-1,facetFlag:!0,facetFlags:{},facetLabels:{},facetOptions:{},result:{},data:[],index:null,selected:[]}},c={init:function(e,t){var r=t.keyword;for(var o in e.keyword=r?Array.isArray(r)?r:[r]:[],e.advanced={q:{},fc:{}},t)for(var c=["fc","q"],l=0;l<c.length;l++){var v=c[l];if(o.includes(v+"-")){var label=o,f=t[o];f=n(f);var d=e.advanced[v];d[label]||(d[label]={"+":[],"-":[]});for(var h=d[label],i=0;i<f.length;i++){var m=f[i];m.startsWith("-")?h["-"].push(m.slice(1)):h["+"].push(m)}}}var y=t.layout;e.layout=y||"m_sort:asc";var _=t.sort;e.sort=_||"_score:desc";var k=t.from;e.from=k?Number(k):0;var w=t.size;e.size=w?Number(w):24;var j=e.from/e.size+1;e.currentPage=j;var col=t.col;e.col=col?Number(col):4},setLayout:function(e,t){e.layout=t},setCol:function(e,t){e.col=t},setResult:function(e,t){e.result=t},setFacetLabels:function(e,t){e.facetLabels=t},setFacetOptions:function(e,t){e.facetOptions=t},setFacetFlags:function(e,t){for(var i=0;i<t.length;i++){var r=t[i];e.facetFlags[r]=!0}},setSize:function(e,t){e.size=t},setSort:function(e,t){e.sort=t},setCurrentPage:function(e,t){e.currentPage=t},setFrom:function(e,t){e.from=t},setFacetFlag:function(e,t){e.facetFlag=t},setKeyword:function(e,t){e.keyword=n(t)},setAdvanced:function(e,t){var label=t.label,r=t.values;r=n(r);var o=t.type,c=e.advanced[o];c[label]||(c[label]={"+":[],"-":[]});for(var l=c[label],i=0;i<r.length;i++){var v=r[i];v.startsWith("-")?l["-"].push(v.slice(1)):l["+"].push(v)}},removeAdvanced:function(e,data){for(var label=data.label,t=data.values,r=data.type,n=e.advanced[r],o=function(i){var e=t[i],r="+";e.startsWith("-")&&(e=e.slice(1),r="-");var o=n[label][r];n[label][r]=o.filter((function(t){return t!==e}))},i=0;i<t.length;i++)o(i)},changeFacetFlags:function(e,data){e.facetOptions[data.label].open=data.value},removeKeyword:function(e,t){var r=e.keyword.filter((function(e){return!t.includes(e)}));e.keyword=r},removeKey:function(e,data){var t=e[data.label].filter((function(e){return!data.value.includes(e)}));e[data.label]=t},setData:function(e,t){e.data=t},setIndex:function(e,t){e.index=t},setSelected:function(e,t){e.selected=t}}},392:function(e,t,r){var map={"./en":[287,0],"./en.json":[287,0],"./ja":[288,1],"./ja.json":[288,1]};function n(e){if(!r.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],n=t[0];return r.e(t[1]).then((function(){return r.t(n,3)}))}n.keys=function(){return Object.keys(map)},n.id=392,e.exports=n},90:function(e,t,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(314),r(80)),c=r(92),l=r.n(c),v=r(427),f=r(428),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{dark:""}},[r("v-container",{staticClass:"my-5"},[404===e.error.statusCode?r("h1",[e._v("\n      "+e._s(e.pageNotFound)+"\n    ")]):r("h1",[e._v("\n      "+e._s(e.otherError)+"\n    ")]),e._v(" "),r("NuxtLink",{attrs:{to:"/"}},[e._v(" Home page ")])],1)],1)}),[],!1,null,"66a519aa",null);t.a=component.exports;l()(component,{VApp:v.a,VContainer:f.a})}},[[291,13,4,14]]]);