(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{201:function(t,e,r){"use strict";r.r(e);r(54),r(208),r(24),r(166);var n=r(17),o=r(27),c=r(30),l=r(26),v=r(19),f=r(8),d=r(94);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=h(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).queryKeyword="",t.keywords=[],t}return Object(o.a)(r,[{key:"trigger",value:function(t){13===t.keyCode&&this.search()}},{key:"search",value:function(){var t=this.queryKeyword;t||(t="");for(var e=this.$searchUtils.splitKeyword(t),r=Object.assign({},this.$route.query),n=[],i=0;i<e.length;i++){var o=e[i];"keyword"===o.label&&n.push(o.value)}r.keyword=n,r.from=0,this.$router.push(this.localePath({name:"search",query:r}),(function(){}),(function(){}))}},{key:"keywordStr",get:function(){var t=this.$store.state.keyword;return Array.isArray(t)?t.join(" "):t},set:function(t){this.queryKeyword=t}}]),r}(d.Vue),_=y=m([Object(d.Component)({})],y),k=r(73),w=r(86),j=r.n(w),x=r(430),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-text-field",{attrs:{"single-line":"","background-color":"grey lighten-2",filled:"",rounded:"",dense:"","hide-details":"",label:t.$t("search"),clearable:"","clear-icon":"mdi-close-circle","append-icon":"mdi-magnify"},on:{"click:append":t.search,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.trigger(e)}},model:{value:t.keywordStr,callback:function(e){t.keywordStr=e},expression:"keywordStr"}})],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VTextField:x.a})},206:function(t,e,r){"use strict";(function(t){r(54);var n=r(17),o=r(27),c=function(){function e(){Object(n.a)(this,e)}return Object(o.a)(e,[{key:"formatArrayValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:", ";if(null==t)return"";if(1===t.length)return t[0];var r=t.join(e);return r}},{key:"getProjectFooter",value:function(e){return"ja"===e?t.env.projectFooterJa:t.env.projectFooterEn}},{key:"getProjectName",value:function(e){return"ja"===e?t.env.projectNameJa:t.env.projectNameEn}},{key:"getProjectDescription",value:function(e){return"ja"===e?t.env.projectDescriptionJa:t.env.projectDescriptionEn}},{key:"truncate",value:function(t,e){return t&&t["@id"]?"":(t=String(t)).length<=e?t:t.substring(0,e)+"..."}}]),e}();e.a=function(t,e){e("utils",new c)}}).call(this,r(192))},207:function(t,e,r){"use strict";r(256),r(258),r(20),r(50),r(28),r(34),r(66),r(14),r(53),r(15),r(24),r(420),r(36),r(60),r(48),r(39),r(56),r(57),r(59);var n=r(25),o=(r(40),r(10)),c=r(285),l=r(17),v=r(27),f=r(71),d=r.n(f);function h(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var y=function(){function t(){Object(l.a)(this,t),this.shuffle=function(t){for(var e=Object(c.a)(t).slice(0),i=e.length-1;i>=0;i--){var r=Math.floor(Math.random()*(i+1)),n=[e[r],e[i]];e[i]=n[0],e[r]=n[1]}return e}}var e,r,f;return Object(v.a)(t,[{key:"splitKeyword",value:function(t){for(var e=t.replace(/　/g," ").split(" ").filter((function(t){return""!==t})),r=[],i=0;i<e.length;i++){var n=e[i],o=n.split(":");2===o.length?r.push({label:"q-"+o[0].trim(),value:o[1].trim()}):r.push({label:"keyword",value:n})}return r}},{key:"createFacetQuery",value:function(t){for(var e={},i=0;i<t.length;i++){var r=t[i];e[r.field]=r.value}return e}},{key:"createQuery",value:function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=Object.keys(e.facetOptions),o=["_full_text","_title"],c=50,l=t.from?Number(t.from):0,v=t.size?Number(t.size):e.size,f={keyword:"true"===t.keywordOr,q:"true"===t.advancedOr,fc:"true"===t.facetOr};v>500&&(v=500);for(var d={},h={},i=0;i<n.length;i++){var m=n[i],y="fc-"+m;if(t[y]){var _=t[y],k=[];k=Array.isArray(_)?_:[_],h[y]=k}var option=e.facetOptions[m],w=option.orderKey||"_count",j=option.orderValue||"desc",x={};x[w]=j,d[m]={terms:{field:m+".keyword",size:r?option.size||c:-1,order:x}}}var O={bool:{must:[],should:[],filter:[],must_not:[]}},A=t.keyword?t.keyword:[],S=[];S=Array.isArray(A)?A:[A];for(var F=0;F<S.length;F++){var R=S[F];if(R.startsWith("-"))for(var I=0;I<o.length;I++){var P={};P[o[I]]=R.slice(1),O.bool.must_not.push({match_phrase:P})}else if(f.keyword);else{for(var C=[],N=0;N<o.length;N++){var V={};V[o[N]]=R,C.push({match_phrase:V})}O.bool.must.push({bool:{should:C}})}}for(var D in t)if(D.startsWith("q-")||D.startsWith("fc-")){var E=D,K=E.split("-")[0],L=E.split("-")[0],z="q"===L?"must":"filter",$=f[L]?"should":z,T=t[E],W=[];W=Array.isArray(T)?T:[T];for(var H=[],M=[],J=0;J<W.length;J++){var U=W[J];U.startsWith("-")?M.push(U.slice(1)):H.push(U)}for(var Q=0;Q<M.length;Q++){var B=M[Q];if("fc"===K){var G={};G[D.slice(3)+".keyword"]=B,O.bool.must_not.push({term:G})}else{var X={};X[D.slice(2)]=B,O.bool.must_not.push({term:X})}}if(0===H.length)continue;if("fc"===K){for(var Y=[],Z=0;Z<H.length;Z++){var tt=W[Z],et={};et[D.slice(3)+".keyword"]=tt,Y.push({term:et})}O.bool[$].push({bool:{should:Y}})}else for(var nt=0;nt<H.length;nt++){var at=W[nt],it={};it[D.slice(2)]=at,O.bool[$].push({term:it})}}var ot=t.sort?t.sort:null,st=[];if(null!=ot&&!ot.includes("_score")){var ct=ot.split(":"),ut=ct[0],lt=ct[1],vt={};vt[ut]={order:lt},st.push(vt),st.push("_score")}var body={query:O,aggs:d,size:v,from:l,sort:st};return body}},{key:"initStore",value:function(t,e){t.commit("setIndex",e.index),t.commit("setData",e.data)}},{key:"loadIndex",value:(f=Object(o.a)(regeneratorRuntime.mark((function t(u){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get(u).then((function(t){for(var e=t.data,data=[],r={},i=0;i<e.length;i++){var n=e[i],o={},c="";for(var l in n)if(!l.startsWith("_")){var v=n[l];v=Array.isArray(v)?v:[v],o[l]=v,r[l]||(r[l]={});for(var f=0;f<v.length;f++){var d=v[f];d&&String(d).startsWith("http")||(r[l][d]||(r[l][d]=[]),r[l][d].push(i),c+=d+" ")}}var h="_id",m=n._id;r[h]||(r[h]={}),r[h][m]||(r[h][m]=[]),r[h][m].push(i),r[h="_full_text"]||(r[h]={}),r[h][c]||(r[h][c]=[]),r[h][c].push(i),n._label&&(o._label=[n._label]),n._image&&(o._thumbnail=[n._image]),n._related&&(o._relatedLink=[n._related]),n._url&&(o._url=[n._url]);var y={_id:m,_source:o};data.push(y)}return{data:data,index:r}}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),function(t){return f.apply(this,arguments)})},{key:"createIndex",value:(r=Object(o.a)(regeneratorRuntime.mark((function t(u){var data,e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get(u).then((function(t){var r=t.data;return"cr:Curation"===r["@type"]?e.createIndexFromIIIFCurationList(r):{}}));case 2:return data=t.sent,t.abrupt("return",data);case 4:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})},{key:"createIndexFromIIIFCurationList",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(e){var title,r,n,data,o,c,l,v,f,i,h,m,y,_,k,w,label,j,x,O,A,S,F,R,I,P,C,N,V,D,E,K,L,z,$,T,W,H,M,J,U,Q,B,G,X,area,image,Y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:title=e.label,r="",n=e["@id"],e.thumbnail&&(r=e.thumbnail),data=[],o=e.selections,c=1,l={},v={},f={},i=0;case 11:if(!(i<o.length)){t.next=86;break}h=o[i],m=h.members,y=h.within["@id"],_=0;case 16:if(!(_<m.length)){t.next=83;break}if(k=m[_],w="",0===i&&0===_&&""===r&&(r=k.thumbnail),(label=k.label)["@value"]&&(label=label["@value"]),j={_label:[label]},k.related&&(j._related=[k.related]),k.thumbnail?j._thumbnail=[k.thumbnail]:(v[y]||(v[y]={}),v[y][c-1]=k["@id"]),x={},!(O=k.metadata)){t.next=45;break}A=0;case 29:if(!(A<O.length)){t.next=45;break}if(S=O[A],F=S.value,Array.isArray(F)||(F=[F]),!(R=F[0])||"oa:Annotation"!==R["@type"]){t.next=38;break}return I=R.resource.chars.replace(/<[^>]*>?/gm,""),j._label=[I],t.abrupt("continue",42);case 38:for(j[S.label]||(j[S.label]=[]),P=0;P<F.length;P++)C=F[P],j[S.label].includes(C)||j[S.label].push(C);S.property&&(N=S.property,x[N]||(x[N]={}),S.uri?x[N][S.uri]||(x[N][S.uri]={label:S.value}):x[N][S.value]||(x[N][S.valu]={label:S.value})),S.property&&(V=S.property,f[V]||(f[V]={}),D=S.uri,E=S.value,f[V][D]||(f[V][D]={label:E,count:0}),K=f[V][D].count+1,f[V][D].count=K);case 42:A++,t.next=29;break;case 45:j._manifest=[y],t.t0=regeneratorRuntime.keys(j);case 47:if((t.t1=t.t0()).done){t.next=69;break}L=t.t1.value,l[L]||(l[L]={}),z=j[L],$=0;case 52:if(!($<z.length)){t.next=67;break}if(T=z[$],!Array.isArray(T)){t.next=56;break}return t.abrupt("continue",64);case 56:if(!T||!T["@id"]){t.next=58;break}return t.abrupt("continue",64);case 58:if(!T||!String(T).startsWith("http")||"_manifest"===L){t.next=60;break}return t.abrupt("continue",64);case 60:l[L][T]||(l[L][T]=[]),W=c-1,l[L][T].push(W),w+=T+" ";case 64:$++,t.next=52;break;case 67:t.next=47;break;case 69:l[H="_full_text"]||(l[H]={}),l[H][w]||(l[H][w]=[]),l[H][w].push(c-1),j._curation=[n],j._pos=[c],M={_id:j.m_sort[0],_source:j,entity:x},k.images&&(M.images=k.images),k.texts&&(M.texts=k.texts),data.push(M),c+=1;case 80:_++,t.next=16;break;case 83:i++,t.next=11;break;case 86:t.t2=regeneratorRuntime.keys(v);case 87:if((t.t3=t.t2()).done){t.next=98;break}return J=t.t3.value,t.next=91,d.a.get(J).then((function(t){for(var e={},r=t.data.sequences[0].canvases,n=0;n<r.length;n++){var canvas=r[n];canvas.images[0].resource.service?e[canvas["@id"]]=canvas.images[0].resource.service["@id"]+"/info.json":e[canvas["@id"]]=canvas.images[0].resource["@id"]}return e})).catch((function(){return null}));case 91:if(U=t.sent){t.next=94;break}return t.abrupt("continue",87);case 94:for(B in Q=v[J])G=Q[B].split("#xywh="),X=G[0],area=G[1],(image=U[X])&&(image.includes("info.json")&&(image=image.replace("info.json",area+"/256,/0/default.jpg")),data[Number(B)]._source._thumbnail=[image]);t.next=87;break;case 98:return Y="list","annotation"===e.viewingHint?Y="table":e.viewingHint&&(Y=e.viewingHint),t.abrupt("return",{data:data,index:l,title:title,thumbnail:r,json:e,entity:f,api:e.api,layout:Y,description:e.description});case 101:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"search",value:function(t,e,r){var n=this.filter(t,e,r),o=this.getDataFiltered(n,e),c=this.createFacets(t,n,r.aggs);return o=this.sortData(r.sort,o),{aggregations:c,hits:{hits:this.getResult(o,r.from,r.size),total:{relation:r.sort,value:o.length}}}}},{key:"filter",value:function(t,e,r){for(var o=this,c=[],i=0;i<e.length;i++)c.push(i);if(!r.query)return c;var l=r.query.bool,v=new Set(c),f=new Set,d={filter:!1,must:!1,must_not:!1,should:!1};for(var m in l){var y=l[m];y.length>0&&(d[m]=!0);for(var _=function(e){var r=y[e],l=new Set;if(r.bool){var d=r.bool.should;l=new Set([]);for(var h=0;h<d.length;h++){var _=o.getIds(t,c,d[h],m);l=new Set([].concat(Object(n.a)(l),Object(n.a)(_)))}}else l=o.getIds(t,c,r,m);"should"!==m?v=new Set(Object(n.a)(v).filter((function(t){return l.has(t)}))):f=new Set([].concat(Object(n.a)(f),Object(n.a)(l)))},k=0;k<y.length;k++)_(k)}!d.should||d.must||d.filter||d.must_not||(v=new Set([]));var w,j=[],x=h(new Set([].concat(Object(n.a)(v),Object(n.a)(f))));try{for(x.s();!(w=x.n()).done;){var O=w.value;j.push(O)}}catch(t){x.e(t)}finally{x.f()}return j}},{key:"getIds",value:function(t,e,r,n){var o=r[Object.keys(r)[0]],c=Object.keys(o)[0],l=o[c],v="Phone/Word.keyword"!==c;l=v?l.toLowerCase():l;var f=[];if("must_not"===n&&(f=e),c.includes(".keyword")){var d=t[c=c.replace(".keyword","")];for(var h in d){(v?h.toLowerCase():h)===l&&function(){var t=d[h];f="must_not"!==n?f.concat(t):f.filter((function(e){return!t.includes(e)}))}()}}else{var map=t[c];for(var m in map){(v?m.toLowerCase():m).includes(l)&&function(){var t=map[m];f="must_not"!==n?f.concat(t):f.filter((function(e){return!t.includes(e)}))}()}}return new Set(f)}},{key:"getDataFiltered",value:function(t,e){for(var r=[],i=0;i<t.length;i++)r.push(e[t[i]]);return r}},{key:"createFacets",value:function(t,e,r){var n={},o=function(label){var o=r[label].terms,c=o.size?Number(o.size):-1,l=o.field.replace(".keyword",""),map=t[l],v={};for(var f in map){for(var d=[],h=map[f],i=0;i<h.length;i++)e.includes(h[i])&&d.push(h[i]);var m=d.length;m>0&&(v[f]=m)}var y=Object.keys(v).map((function(t){return{key:t,value:v[t]}})),_=Object.keys(o.order)[0],k="value";"_term"==_&&(k="key");var w=1;"asc"==o.order[_]&&(w=-1),y.sort((function(a,b){return a[k]<b[k]?w:a[k]>b[k]?-1*w:0})),(-1===c||c>y.length)&&(c=y.length);for(var j=[],x=0;x<c;x++){var O={key:y[x].key,doc_count:y[x].value};j.push(O)}n[label]={buckets:j}};for(var label in r)o(label);return n}},{key:"sortData",value:function(t,e){var r,n=(r=t,Array.isArray(r)?r:[r])[0];if(!n)return e;var o=Object.keys(n)[0];if("_random"===o)return this.shuffle(e);var c=n[o].order;o=o.replace(".keyword","");var l=!0;"desc"===c&&(l=!1);var v=1,f=-1;return l||(v*=-1,f*=-1),e.sort((function(a,b){return a._source[o]?b._source[o]?a._source[o][0]>b._source[o][0]?v:a._source[o][0]<b._source[o][0]?f:0:f:v})),e}},{key:"getResult",value:function(t,e,r){var n=[],o=e+r;o>t.length&&(o=t.length);for(var i=e;i<o;i++)n.push(t[i]);return n}},{key:"getSearchQueryFromQueryStore",value:function(t,u){var e={sort:t.sort,size:t.size,from:(t.currentPage-1)*t.size,col:t.col,layout:t.layout};t.keyword.length>0&&(e.keyword=t.keyword);for(var r=t.advanced,n=["fc","q"],o=0;o<n.length;o++){var c=n[o];for(var label in r[c]){var l=[],v=r[c][label];for(var f in v)for(var d=v[f],i=0;i<d.length;i++){var h=d[i];l.push("+"===f?h:"-"+h)}e[label]=l}}return u&&(e.u=u),e}},{key:"getTopMessage",value:function(t,e,r){var n="",o="ja"===r?"件":"";return t===e&&(n="ja"===r?"上位":"Top "),n+t.toLocaleString()+o}}]),t}();e.a=function(t,e){e("searchUtils",new y)}},249:function(t,e,r){var content=r(322);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("7750648c",content,!0,{sourceMap:!1})},261:function(t,e,r){var content=r(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("56b15182",content,!0,{sourceMap:!1})},287:function(t,e,r){"use strict";r(208);var n=r(17),o=r(30),c=r(26),l=r(19),v=r(8),f=r(94),d=r(201);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(o.a)(r,t);var e=h(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).drawer=!1,t.baseUrl="https://moeller.jinsha.tsukuba.ac.jp/dev",t.siteName="Hieratische Paläographie DB",t}return r}(f.Vue),_=y=m([Object(f.Component)({components:{FullTextSearch:d.default}})],y),k=(r(360),r(73)),w=r(86),j=r.n(w),x=r(437),O=r(444),A=r(439),S=r(218),F=r(438),R=r(440),I=r(196),P=r(197),C=r(122),N=r(198),V=r(88),D=r(441),E=r(426),K=r(442),L=r(443),z=r(279),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",[r("v-navigation-drawer",{attrs:{app:"",temporary:!0},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[r("v-list-item",{attrs:{link:"",to:t.localePath({name:"index"}),exact:""}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-home")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),r("v-list-item",{attrs:{link:"",to:t.localePath({name:"search"})}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t("search")))])],1)],1),t._v(" "),r("v-list-item",{attrs:{link:"",to:t.localePath({name:"category-id",params:{id:"Vol"}})}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-view-list")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t("category")))])],1)],1),t._v(" "),r("v-list-item",{attrs:{link:"",to:t.localePath({name:"about"})}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-information")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t("ユーザーズガイド")))])],1)],1),t._v(" "),r("v-list-item",{attrs:{link:"",href:t.baseUrl+"/snorql",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("SPARQL Endpoint\n              "),r("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1),t._v(" "),r("v-list-item",{attrs:{link:"",href:"https://wdb.jinsha.tsukuba.ac.jp/hdb/",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-database")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Hieratic Database"),r("br"),t._v("Project\n              "),r("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1),t._v(" "),r("v-list-item",{attrs:{link:"",href:"https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/asia/item?search=6+W%3A800+X%3Amol&sort_by=uparl%3AidentifierOfTheData&sort_order=asc",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-image")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Digital Resources for"),r("br"),t._v("Egyptian Studies\n              "),r("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1),t._v(" "),r("v-list-item",{attrs:{link:"",href:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=https://moeller.jinsha.tsukuba.ac.jp/data/curation.json&mode=annotation&lang=ja",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-image")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("IIIF Curation"),r("br"),t._v("Platform\n              "),r("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1),t._v(" "),r("v-list-item",{attrs:{link:"",href:"https://self-museum.cultural.jp/?collection=https://moeller.jinsha.tsukuba.ac.jp/data/curation.json&build=1",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-image")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Self Museum "),r("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)],1)],1),t._v(" "),r("v-app-bar",[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",[r("nuxt-link",{staticStyle:{color:"inherit","text-decoration":"inherit"},attrs:{to:t.localePath({name:"index"})}},[t._v("\n          "+t._s(t.$t(t.siteName))+"\n        ")])],1),t._v(" "),"xs"!=t.$vuetify.breakpoint.name?[r("v-spacer"),t._v(" "),r("FullTextSearch")]:t._e(),t._v(" "),r("v-spacer"),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{depressed:"",btn:""}},n),[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-translate")]),t._v(" "),"xs"!=t.$vuetify.breakpoint.name?[t._v("\n              "+t._s("ja"==t.$i18n.locale?"日本語":"English")+"\n              "),r("v-icon",{staticClass:"ml-2"},[t._v("mdi-menu-down")])]:t._e()],2)]}}])},[t._v(" "),r("v-list",[r("v-list-item",{attrs:{to:t.switchLocalePath("en")}},[r("v-list-item-title",[t._v("English")])],1),t._v(" "),r("v-list-item",{attrs:{to:t.switchLocalePath("ja")}},[r("v-list-item-title",[t._v("日本語")])],1)],1)],1)],2)],1),t._v(" "),r("v-main",[r("nuxt")],1),t._v(" "),r("v-footer",{staticClass:"mt-5",attrs:{dark:!0}},[r("v-container",[r("p",{staticClass:"text-center my-5"},["ja"==t.$i18n.locale?[t._v("\n          永井正勝, 和氣愛仁, 高橋洋成, 中村覚")]:[t._v("Masakatsu NAGAI, Toshihito WAKI, Yona TAKAHASHI and Satoru NAKAMURA\n        ")]],2),t._v(" "),r("p",{staticClass:"text-center my-5"},["ja"==t.$i18n.locale?[t._v("\n          本研究はJSPS科研費"),r("a",{attrs:{href:"https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-18K00525/"}},[t._v("18K00525")]),t._v("の助成を受けたものです．\n        ")]:[t._v("\n          This work was supported by JSPS KAKENHI Grant Number\n          "),r("a",{attrs:{href:"https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-18K00525/"}},[t._v("18K00525")]),t._v(".\n        ")]],2)])],1)],1)}),[],!1,null,null,null);e.a=component.exports;j()(component,{FullTextSearch:r(201).default}),j()(component,{VApp:x.a,VAppBar:O.a,VAppBarNavIcon:A.a,VBtn:S.a,VContainer:F.a,VFooter:R.a,VIcon:I.a,VList:P.a,VListItem:C.a,VListItemAction:N.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:D.a,VMenu:E.a,VNavigationDrawer:K.a,VSpacer:L.a,VToolbarTitle:z.a})},297:function(t,e,r){r(298),t.exports=r(299)},321:function(t,e,r){"use strict";r(249)},322:function(t,e,r){(e=r(11)(!1)).push([t.i,"h1[data-v-66a519aa]{font-size:20px}",""]),t.exports=e},360:function(t,e,r){"use strict";r(261)},361:function(t,e,r){(e=r(11)(!1)).push([t.i,"tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.nuxt-content h2{margin-top:16px;margin-bottom:16px}",""]),t.exports=e},399:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c}));r(50),r(28),r(66),r(14),r(15),r(36),r(56),r(59);function n(t){return Array.isArray(t)?t:[t]}var o=function(){return{sort:"",size:-1,from:-1,keyword:[],advanced:{},currentPage:1,layout:"",col:-1,facetFlag:!0,facetFlags:{},facetLabels:{},facetOptions:{},result:{},data:[],index:null,selected:[]}},c={init:function(t,e){var r=e.keyword;for(var o in t.keyword=r?Array.isArray(r)?r:[r]:[],t.advanced={q:{},fc:{}},e)for(var c=["fc","q"],l=0;l<c.length;l++){var v=c[l];if(o.includes(v+"-")){var label=o,f=e[o];f=n(f);var d=t.advanced[v];d[label]||(d[label]={"+":[],"-":[]});for(var h=d[label],i=0;i<f.length;i++){var m=f[i];m.startsWith("-")?h["-"].push(m.slice(1)):h["+"].push(m)}}}var y=e.layout;t.layout=y||"m_sort:asc";var _=e.sort;t.sort=_||"_score:desc";var k=e.from;t.from=k?Number(k):0;var w=e.size;t.size=w?Number(w):24;var j=t.from/t.size+1;t.currentPage=j;var col=e.col;t.col=col?Number(col):4},setLayout:function(t,e){t.layout=e},setCol:function(t,e){t.col=e},setResult:function(t,e){t.result=e},setFacetLabels:function(t,e){t.facetLabels=e},setFacetOptions:function(t,e){t.facetOptions=e},setFacetFlags:function(t,e){for(var i=0;i<e.length;i++){var r=e[i];t.facetFlags[r]=!0}},setSize:function(t,e){t.size=e},setSort:function(t,e){t.sort=e},setCurrentPage:function(t,e){t.currentPage=e},setFrom:function(t,e){t.from=e},setFacetFlag:function(t,e){t.facetFlag=e},setKeyword:function(t,e){t.keyword=n(e)},setAdvanced:function(t,e){var label=e.label,r=e.values;r=n(r);var o=e.type,c=t.advanced[o];c[label]||(c[label]={"+":[],"-":[]});for(var l=c[label],i=0;i<r.length;i++){var v=r[i];v.startsWith("-")?l["-"].push(v.slice(1)):l["+"].push(v)}},removeAdvanced:function(t,data){for(var label=data.label,e=data.values,r=data.type,n=t.advanced[r],o=function(i){var t=e[i],r="+";t.startsWith("-")&&(t=t.slice(1),r="-");var o=n[label][r];n[label][r]=o.filter((function(e){return e!==t}))},i=0;i<e.length;i++)o(i)},changeFacetFlags:function(t,data){t.facetOptions[data.label].open=data.value},removeKeyword:function(t,e){var r=t.keyword.filter((function(t){return!e.includes(t)}));t.keyword=r},removeKey:function(t,data){var e=t[data.label].filter((function(t){return!data.value.includes(t)}));t[data.label]=e},setData:function(t,e){t.data=e},setIndex:function(t,e){t.index=e},setSelected:function(t,e){t.selected=e}}},402:function(t,e,r){var map={"./en":[293,0],"./en.json":[293,0],"./ja":[294,1],"./ja.json":[294,1]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r.t(n,3)}))}n.keys=function(){return Object.keys(map)},n.id=402,t.exports=n},84:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(321),r(73)),c=r(86),l=r.n(c),v=r(437),f=r(438),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-container",{staticClass:"my-5"},[404===t.error.statusCode?r("h1",[t._v("\n      "+t._s(t.pageNotFound)+"\n    ")]):r("h1",[t._v("\n      "+t._s(t.otherError)+"\n    ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)],1)}),[],!1,null,"66a519aa",null);e.a=component.exports;l()(component,{VApp:v.a,VContainer:f.a})}},[[297,15,4,16]]]);