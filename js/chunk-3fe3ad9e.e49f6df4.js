(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fe3ad9e"],{"3c93":function(t,e,i){},"411c":function(t,e,i){t.exports=i.p+"img/user-avatar.5429f758.jpg"},"5e23":function(t,e,i){},7958:function(t,e,i){},"8b0d":function(t,e,i){},b5b6:function(t,e,i){},dead:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("navbar"),i("v-main",{staticClass:"app"},[i("v-container",{attrs:{fluid:""}},[i("div",{staticClass:"d-flex align-center py-3"},[i("div",{staticClass:"display-1 pl-6 pb-2"},[i("span",{staticClass:"main__title"},[t._v(" "+t._s(t.title)+" ")])])]),i("keep-alive",[i("router-view")],1)],1)],1)],1)},o=[],s=(i("fb6a"),i("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header-menu",{on:{drawer:function(e){t.drawer=!t.drawer}}}),n("v-navigation-drawer",{staticClass:"elevation-5",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-row",{staticClass:"pads__zero",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"auto"}},[n("v-img",{staticClass:"mx-auto",attrs:{contain:"","max-height":"25","max-width":"25",src:i("9b19"),alt:"Need-for-drive"}})],1),n("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"auto"}},[n("v-card-title",[n("span",{staticClass:"auth__logo_text"},[t._v("Need for car")])])],1)],1),n("v-list",[n("v-list-item-group",{staticClass:"pt-2",attrs:{color:"#3395ff"}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,staticClass:"pr-0 mr-0",attrs:{to:e.to}},[n("v-list-item-icon",[n("v-icon",{staticClass:"pa-0 ma-0",attrs:{left:""},domProps:{textContent:t._s(e.ico)}})],1),n("v-list-item-content",[t._v(" "+t._s(e.title)+" ")])],1)})),1)],1)],1),n("footer-menu")],1)}),a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{color:"white",app:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-app-bar-nav-icon",{on:{click:function(e){return t.$emit("drawer")}}})],1),n("v-col",{attrs:{cols:"auto"}},[n("v-text-field",{staticClass:"search pt-2",attrs:{label:"Поиск...",dense:"","append-icon":"mdi-magnify",clearable:""}})],1),n("v-spacer"),n("v-col",{staticClass:"col__borders ma-4 pb-2",attrs:{cols:"auto"}},[n("notification-dropdown")],1),n("v-col",{staticClass:"avatar",attrs:{cols:"auto"}},[n("v-avatar",[n("img",{attrs:{src:i("411c"),alt:"User"}})]),n("span",{staticClass:"pr-10 pl-3"},[t._v("Admin")]),n("user-menu")],1)],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,bottom:"","offset-y":"",transition:"scale-transition",origin:"top left"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:"",large:""}},n),[i("v-badge",{attrs:{color:"#C4183C",value:t.count,overlap:"",bottom:"",content:t.count}},[i("v-icon",{attrs:{dark:""}},[t._v(" mdi-bell ")])],1)],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-card",[i("v-card-title",[t._v(" Уведомления ")])],1)],1)},h=[],u={data:function(){return{menu:!1}},computed:{count:function(){return 2}}},d=u,p=i("2877"),v=i("6544"),f=i.n(v),m=i("15fd"),g=i("5530"),b=(i("a9e3"),i("ff44"),i("132d")),y=i("a9ad"),S=i("7560"),O=i("f2e7"),w=i("2b0e"),C=w["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),_=i("fe6c"),$=i("58df"),x=i("80d2"),B=["aria-atomic","aria-label","aria-live","role","title"],j=Object($["a"])(y["a"],Object(_["b"])(["left","bottom"]),S["a"],O["a"],C).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(g["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(x["g"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),i=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),n=this.$createElement("span",i,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[n]):n},genBadgeContent:function(){if(!this.dot){var t=Object(x["s"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(b["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],i=[Object(x["s"])(this)],n=this.$attrs,o=(n["aria-atomic"],n["aria-label"],n["aria-live"],n.role,n.title,Object(m["a"])(n,B));return this.inline&&this.left?i.unshift(e):i.push(e),t("span",{staticClass:"v-badge",attrs:o,class:this.classes},i)}}),A=i("8336"),T=i("b0af"),E=i("99d9"),k=i("e449"),M=Object(p["a"])(d,c,h,!1,null,null,null),V=M.exports;f()(M,{VBadge:j,VBtn:A["a"],VCard:T["a"],VCardTitle:E["c"],VIcon:b["a"],VMenu:k["a"]});var N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":100,bottom:"","offset-y":"",transition:"scale-transition",origin:"top right"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:"",large:""}},n),[i("v-icon",{attrs:{"x-large":"",dark:""}},[t._v(" mdi-menu-down ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-card",{attrs:{height:"75px"}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"mt-3",attrs:{cols:"auto"}},[i("v-btn",{attrs:{color:"primary"},on:{click:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[i("v-icon",[t._v("mdi-logout")]),t._v(" Выйти ")],1)],1)],1)],1)],1)},H=[],L=i("2f62"),I={data:function(){return{menu:!1}},methods:Object(g["a"])(Object(g["a"])({},Object(L["b"])("user",["logoutUser"])),{},{logout:function(){this.logoutUser()}})},P=I,R=i("62ad"),X=i("0fd9"),Y=Object(p["a"])(P,N,H,!1,null,null,null),U=Y.exports;f()(Y,{VBtn:A["a"],VCard:T["a"],VCol:R["a"],VIcon:b["a"],VMenu:k["a"],VRow:X["a"]});var z={name:"HeaderMenu",components:{NotificationDropdown:V,UserMenu:U}},W=z,D=(i("c7cd"),i("8b0d"),i("3835")),F=(i("0481"),i("5e23"),i("8dd9")),q=i("adda"),Z=i("d9bd"),J=F["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(g["a"])(Object(g["a"])({},F["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(g["a"])(Object(g["a"])({},this.measurableStyles),{},{height:Object(x["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(D["a"])(e,2),n=i[0],o=i[1];t.$attrs.hasOwnProperty(n)&&Object(Z["a"])(n,o,t)}))},methods:{genBackground:function(){var t={height:Object(x["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(q["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(x["g"])(this.computedContentHeight)}},Object(x["s"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(x["g"])(this.extensionHeight)}},Object(x["s"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}}),G=i("53ca");function K(t,e){var i=e.modifiers||{},n=i.self,o=void 0!==n&&n,s=e.value,a="object"===Object(G["a"])(s)&&s.options||{passive:!0},r="function"===typeof s||"handleEvent"in s?s:s.handler,l=o?t:e.arg?document.querySelector(e.arg):window;l&&(l.addEventListener("scroll",r,a),t._onScroll={handler:r,options:a,target:o?void 0:l})}function Q(t){if(t._onScroll){var e=t._onScroll,i=e.handler,n=e.options,o=e.target,s=void 0===o?t:o;s.removeEventListener("scroll",i,n),delete t._onScroll}}var tt={inserted:K,unbind:Q},et=tt;function it(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object($["a"])(Object(_["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var nt=w["a"].extend({name:"scrollable",directives:{Scroll:tt},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(Z["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),ot=i("d10f"),st=Object($["a"])(J,nt,ot["a"],O["a"],it("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),at=st.extend({name:"v-app-bar",directives:{Scroll:et},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return nt.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(g["a"])(Object(g["a"])({},J.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return J.options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=J.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:J.options.computed.isCollapsed.call(this)},isProminent:function(){return J.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(g["a"])(Object(g["a"])({},J.options.computed.styles.call(this)),{},{fontSize:Object(x["g"])(this.computedFontSize,"rem"),marginTop:Object(x["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(x["g"])(this.computedTransform),")"),left:Object(x["g"])(this.computedLeft),right:Object(x["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=J.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=J.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),rt=(i("498a"),i("9d26")),lt=w["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var i=e.slots,n=e.listeners,o=e.props,s=e.data,a=Object.assign(s,{staticClass:"v-app-bar__nav-icon ".concat(s.staticClass||"").trim(),props:Object(g["a"])(Object(g["a"])({},o),{},{icon:!0}),on:n}),r=i().default;return t(A["a"],a,r||[t(rt["a"],"$menu")])}}),ct=i("8212"),ht=i("2fa4"),ut=i("8654"),dt=Object(p["a"])(W,r,l,!1,null,null,null),pt=dt.exports;f()(dt,{VAppBar:at,VAppBarNavIcon:lt,VAvatar:ct["a"],VCol:R["a"],VRow:X["a"],VSpacer:ht["a"],VTextField:ut["a"]});var vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{fixed:"",padless:""}},[i("v-card",{staticClass:"footer__main flex",attrs:{flat:"",tile:""}},[i("div",{staticClass:"admin__footer_links"},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"auto"}},[i("span",{staticClass:"footer_left_text"},[t._v("Главная страница")])]),i("v-col",{attrs:{cols:"auto"}},[i("span",{staticClass:"footer_left_text_v2"},[t._v("Ссылка")])]),i("v-spacer"),i("v-col",{attrs:{cols:"auto"}},[i("span",{staticClass:"footer_right pr-3"},[t._v("Copyright © 2020 Simbirsoft")])])],1)],1)])],1)},ft=[],mt={name:"FooterMenu"},gt=mt,bt=(i("b5b6"),Object($["a"])(F["a"],it("footer",["height","inset"]),ot["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(g["a"])(Object(g["a"])({},F["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(g["a"])(Object(g["a"])({},F["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(x["g"])(t),left:Object(x["g"])(this.computedLeft),right:Object(x["g"])(this.computedRight),bottom:Object(x["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})),yt=Object(p["a"])(gt,vt,ft,!1,null,null,null),St=yt.exports;f()(yt,{VCard:T["a"],VCol:R["a"],VFooter:bt,VRow:X["a"],VSpacer:ht["a"]});var Ot={components:{HeaderMenu:pt,FooterMenu:St},data:function(){return{padless:!1,drawer:!0,items:[{title:"Домашнаяя страница",to:{name:"Home"},ico:"mdi-home-variant"},{title:"Карточка автомобиля",to:{name:"Cars"},ico:"mdi-pencil"},{title:"Сущности",to:{name:"Entities"},ico:"mdi-clipboard-list"},{title:"Заказы",to:{name:"Orders"},ico:"mdi-calendar-plus"},{title:"Error 404",to:{name:"Error"},ico:"mdi-alert-circle"}]}}},wt=Ot,Ct=i("8860"),_t=i("da13"),$t=i("5d23"),xt=i("1baa"),Bt=i("34c3"),jt=(i("99af"),i("7958"),i("b848")),At=i("e4cd"),Tt=i("e707"),Et=i("a293"),kt=i("dc22"),Mt=(i("159b"),function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,o=t.touchendY,s=.5,a=16;t.offsetX=i-e,t.offsetY=o-n,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&o<n-a&&t.up(t),t.down&&o>n+a&&t.down(t))});function Vt(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function Nt(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),Mt(e)}function Ht(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function Lt(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return Vt(t,e)},touchend:function(t){return Nt(t,e)},touchmove:function(t){return Ht(t,e)}}}function It(t,e,i){var n=e.value,o=n.parent?t.parentElement:t,s=n.options||{passive:!0};if(o){var a=Lt(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[i.context._uid]=a,Object(x["z"])(a).forEach((function(t){o.addEventListener(t,a[t],s)}))}}function Pt(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var o=n._touchHandlers[i.context._uid];Object(x["z"])(o).forEach((function(t){n.removeEventListener(t,o[t])})),delete n._touchHandlers[i.context._uid]}}var Rt={inserted:It,unbind:Pt},Xt=Rt,Yt=Object($["a"])(it("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),y["a"],jt["a"],At["a"],Tt["a"],ot["a"],S["a"]),Ut=Yt.extend({name:"v-navigation-drawer",directives:{ClickOutside:Et["a"],Resize:kt["a"],Touch:Xt},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(g["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&At["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(x["g"])(this.height),top:this.isBottom?"auto":Object(x["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(x["g"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(x["g"])(this.computedTransform,"%"),")"),width:Object(x["g"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(q["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(x["s"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(x["s"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),zt=Object(p["a"])(wt,s,a,!1,null,null,null),Wt=zt.exports;f()(zt,{VCardTitle:E["c"],VCol:R["a"],VIcon:b["a"],VImg:q["a"],VList:Ct["a"],VListItem:_t["a"],VListItemContent:$t["a"],VListItemGroup:xt["a"],VListItemIcon:Bt["a"],VNavigationDrawer:Ut,VRow:X["a"]});var Dt={name:"AppLayout",components:{Navbar:Wt},data:function(){return{menuItems:{orders:{name:"Заказы",url:"/orders"},home:{name:"Домашняя страница",url:"/home"},cars:{name:"Автомобили",url:"/cars",create:{name:"Создать автомобиль",url:"/cars/create"},edit:{name:"Карточка автомобиля",url:"/cars/edit"}},entities:{name:"Сущности",url:"/entities"},error:{name:" ",url:"/error"},menu5:{name:"Меню 5",url:"/menu5"},menu6:{name:"Меню 6",url:"/menu6"},menu7:{name:"Меню 7",url:"/menu7"}}}},computed:{title:function(){if("create"===this.$route.name.slice(5))return this.menuItems["cars"].create.name;if("edit"===this.$route.name.slice(5))return this.menuItems["cars"].edit.name;var t,e=this.$route.name[0].toLowerCase()+this.$route.name.slice(1);return(null===(t=this.menuItems[e])||void 0===t?void 0:t.name)||"Добро пожаловать!"}}},Ft=Dt,qt=i("7496"),Zt=i("a523"),Jt=i("f6c4"),Gt=Object(p["a"])(Ft,n,o,!1,null,null,null);e["default"]=Gt.exports;f()(Gt,{VApp:qt["a"],VContainer:Zt["a"],VMain:Jt["a"]})},e4cd:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("b0c0");var n=i("d9bd"),o=i("2b0e");e["a"]=o["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,n=t.name,o=t.mobileBreakpoint;if(o===this.mobileBreakpoint)return e;var s=parseInt(this.mobileBreakpoint,10),a=!isNaN(s);return a?i<s:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(n["d"])("mobile-break-point","mobile-breakpoint",this)}})},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("5530"),o=(i("3c93"),i("a9ad")),s=i("7560"),a=i("f2e7"),r=i("58df"),l=Object(r["a"])(o["a"],s["a"],a["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),c=l,h=i("80d2"),u=i("2b0e");e["a"]=u["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(h["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[h["y"].up,h["y"].pageup],i=[h["y"].down,h["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight,o=e<0,s=e>0;return!(i||!o)||(!(n||!s)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,o=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(o,n))||!this.shouldScroll(n,i)}for(var s=0;s<e.length;s++){var a=e[s];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return!this.shouldScroll(a,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},ff44:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3fe3ad9e.e49f6df4.js.map