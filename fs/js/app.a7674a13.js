(function(e){function t(t){for(var o,r,s=t[0],l=t[1],u=t[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"50d9":function(e,t,n){e.exports=n.p+"media/fan.2f79f170.wav"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h3",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.description,expression:"description"}]},[e._v(e._s(e.title))]),n("fan"),n("div",{staticClass:"footer"},[n("vue-about-me",{attrs:{copyright:e.copyright}})],1)],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"fan"}},[n("div",{staticClass:"header"},[n("div",{key:e.count,class:e.leafs},[n("div",{staticClass:"circle"}),n("div",{staticClass:"leaf-1"}),n("div",{staticClass:"leaf-2"}),n("div",{staticClass:"leaf-3"})])]),n("div",{staticClass:"neck"}),n("div",{staticClass:"footer"}),n("div",{staticClass:"switch-btn-group"},[n("el-radio-group",{on:{change:e.radioChange},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},e._l(e.switchItems,(function(t,o){return n("el-radio-button",{key:o,class:t.class,attrs:{label:t.value},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"item.value"}},[e._v(e._s(t.name))])})),1)],1)])},s=[],l={data:function(){return{audioElm:"",srcUrl:n("50d9"),stopFlag:!1,switchItems:[{name:"关",class:"switch_0",value:0},{name:"1",class:"switch_1",value:1},{name:"2",class:"switch_2",value:2},{name:"3",class:"switch_3",value:3}],leafs:"leafs",radio:0,count:0}},beforeMount:function(){this.initAudioElm()},methods:{initAudioElm:function(){var e=new Audio;e.preload="metadata",e.src=this.srcUrl,e.load(),this.audioElm=e},radioChange:function(e){switch(this.leafs="leafs-"+e,this.count+=1,e){case 0:this.playSwitchAudio();break;default:this.stopFlag=!1,0===this.audioElm.currentTime||this.audioElm.currentTime===this.audioElm.duration?this.playFanAudio(0):this.playFanAudio();break}},playSwitchAudio:function(){this.audioElm.ended||this.stopAudio()},playFanAudio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3.5;if(!this.stopFlag){this.audioElm.currentTime=e,this.audioElm.play();var t=this,n=this.audioElm.duration-this.audioElm.currentTime-1;setTimeout((function(){t.playFanAudio()}),1e3*n)}},stopAudio:function(){this.audioElm.currentTime=6,this.stopFlag=!0}}},u=l,c=(n("afd9"),n("2877")),d=Object(c["a"])(u,r,s,!1,null,"332196fa",null),f=d.exports,p=n("4ced"),h=n.n(p),v={name:"app",data:function(){return{title:"夏日清凉小风扇~",description:"除了没有风，什么都好！",copyright:{name:"Electric Fan",repo:"electric-fan",author:"YunYouJun",logo:"#icon-cloud-line",link:"https://fan.elpsy.cn/"}}},components:{Fan:f,VueAboutMe:h.a}},m=v,g=(n("034f"),Object(c["a"])(m,i,a,!1,null,null,null)),b=g.exports,y=n("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var w=n("e37d"),_=(n("0fae"),n("5c96"));o["default"].config.productionTip=!1,o["default"].use(w["a"]),o["default"].use(_["RadioGroup"]),o["default"].use(_["Radio"]),o["default"].use(_["RadioButton"]),new o["default"]({render:function(e){return e(b)}}).$mount("#app")},"7ff3":function(e,t,n){},"85ec":function(e,t,n){},afd9:function(e,t,n){"use strict";n("7ff3")}});
//# sourceMappingURL=app.a7674a13.js.map