(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{632:function(t,e,n){var content=n(633);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("0cd63bd9",content,!0,{sourceMap:!1})},633:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=e},698:function(t,e,n){"use strict";n.r(e);n(40);var r=n(10),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.app,e.next=3,n(r.i18n.locale,"index").fetch();case 3:return o=e.sent,console.log({document:o}),e.abrupt("return",{document:o});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{baseUrl:"https://moeller.jinsha.tsukuba.ac.jp/dev",title:"Hieratische Paläographie DB"}},head:function(){return{titleTemplate:null,title:this.title}}},l=n(73),c=n(86),h=n.n(c),d=n(218),f=n(438),m=(n(216),n(250)),w=Object(m.a)("layout"),v=(n(14),n(632),n(1).default.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),x=n(5),y=Object(x.a)(v).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"mb-5"},[n("v-parallax",{attrs:{src:t.baseUrl+"/img/ogp/home.jpg",height:"300"}},[n("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[n("h1",{staticClass:"white--text mb-2 display-1 text-center"},[n("b",[t._v(t._s(t.title))])]),t._v(" "),n("v-btn",{staticClass:"mt-5",attrs:{large:"",to:t.localePath({name:"search"}),color:"primary"}},[t._v(t._s(t.$t("try_out")))])],1)],1)],1),t._v(" "),n("v-container",[n("nuxt-content",{attrs:{document:t.document}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:d.a,VContainer:f.a,VLayout:w,VParallax:y})}}]);