(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(t,n,e){"use strict";e.r(n);var o=e(24),r=(e(67),{data:function(){return{navOpen:!1,provider:null}},mounted:function(){void 0!==window.klaytn&&(this.provider=window.klaytn)},computed:{isConnected:function(){return this.provider&&null!=this.provider.selectedAddress}},methods:{navTogle:function(){this.navOpen=!this.navOpen},goToPage:function(t){this.$router.push(t),this.navOpen=!1},connect:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=window,(e=n.klaytn)&&e.isKaikas){t.next=4;break}return alert("KAIKAS 확장프로그램 설치가 필요합니다"),t.abrupt("return");case 4:return t.next=6,e.enable();case 6:case"end":return t.stop()}}),t)})))()}}}),c=(e(290),e(49)),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"fixed-wrap"}},[n("nav",{staticClass:"navbar px-5"},[n("div",{staticClass:"navbar__logo"},[n("img",{staticClass:"icons mr-3 pointer",attrs:{src:"icons/fox.svg",alt:"logo"},on:{click:function(n){return t.$router.push("/")}}}),t._v(" "),t.isConnected?[n("a",{staticClass:"mr-3 pointer",on:{click:function(n){return t.$router.push("step1")}}},[t._v("Step1")]),t._v(" "),n("a",{staticClass:"mr-3 pointer",on:{click:function(n){return t.$router.push("step2")}}},[t._v("Step2")]),t._v(" "),n("img",{staticClass:"icons",attrs:{src:"icons/connect.svg",alt:"connect"}})]:[n("a",{staticClass:"mr-3 pointer",on:{click:function(n){return t.$router.push("/")}}},[t._v("아기여우 키우기")]),t._v(" "),n("img",{staticClass:"icons pointer",attrs:{src:"icons/wallet.svg",alt:"wallet"},on:{click:t.connect}})]],2),t._v(" "),n("ul",{class:["navbar__menu",{active:t.navOpen}]},[n("li",[n("a",{attrs:{href:"#story"},on:{click:t.navTogle}},[t._v("Story")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#howto"},on:{click:t.navTogle}},[t._v("How to")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#vision"},on:{click:t.navTogle}},[t._v("Vision")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#roadmap"},on:{click:t.navTogle}},[t._v("Roadmap")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#comunity"},on:{click:t.navTogle}},[t._v("Community")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#team"},on:{click:t.navTogle}},[t._v("Team")])])]),t._v(" "),n("a",{staticClass:"navbar__toggleBtn",on:{click:function(n){t.navOpen=!t.navOpen}}},[n("img",{staticClass:"icons",attrs:{src:"icons/menu.svg",alt:"menu"}})])])])}),[],!1,null,"78cbed41",null);n.default=component.exports},159:function(t,n,e){"use strict";e.r(n);e(292);var o=e(49),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,n=t._self._c;return n("footer",{staticClass:"pl-5"},[n("img",{staticClass:"icons mt-4",attrs:{src:"icons/ntf.svg",alt:"logo"}}),t._v(" "),n("div",{staticClass:"ml-3 mt-2"},[t._v("\n    copyrigth ⓒ 2022 Nine tail fox lab. All rights Resesrved. \n  ")])])}],!1,null,"3a242b2c",null);n.default=component.exports},215:function(t,n,e){var content=e(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("0b4edbfe",content,!0,{sourceMap:!1})},216:function(t,n,e){var content=e(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("2d5a445a",content,!0,{sourceMap:!1})},217:function(t,n,e){var content=e(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("4375b872",content,!0,{sourceMap:!1})},231:function(t,n,e){"use strict";var o=e(158),r=e(159),c={components:{NavHeader:o.default,FoxFooter:r.default}},l=(e(294),e(49)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"wrap"},[n("nav-header"),t._v(" "),n("div",{attrs:{id:"container"}},[n("Nuxt")],1),t._v(" "),n("fox-footer")],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{NavHeader:e(158).default,FoxFooter:e(159).default})},233:function(t,n,e){e(234),t.exports=e(235)},290:function(t,n,e){"use strict";e(215)},291:function(t,n,e){var o=e(60)(!1);o.push([t.i,'body[data-v-78cbed41]{margin:0;font-family:"Jua"}a[data-v-78cbed41]{text-decoration:none;color:#1f3995;font-weight:700}#fixed-wrap[data-v-78cbed41]{position:fixed;top:0;width:100%;z-index:999}.pointer[data-v-78cbed41]{cursor:pointer}.navbar[data-v-78cbed41]{display:flex;justify-content:space-between;align-items:center;background-color:#ced5e8;padding:8px 12px;min-height:10vh;z-index:999}.navbar__logo[data-v-78cbed41]{font-size:24px;color:violet}.navbar__menu[data-v-78cbed41]{display:flex;list-style:none;padding-left:0;margin-top:1rem}.navbar__menu li[data-v-78cbed41]{padding:8px 12px}.navbar__menu li[data-v-78cbed41]:hover{background-color:grey;border-radius:4px}.navbar__links[data-v-78cbed41]{list-style:none;padding-left:0;color:teal;display:flex}.navbar__links li[data-v-78cbed41]{padding:8px 12px}.navbar__toggleBtn[data-v-78cbed41]{display:none;position:absolute;right:32px;font-size:24px}@media screen and (max-width:860px){.navbar[data-v-78cbed41]{flex-direction:column;align-items:flex-start;padding:24px}.navbar__menu[data-v-78cbed41]{display:none;flex-direction:column;align-items:center;width:100%}.navbar__menu li[data-v-78cbed41]{width:100%;text-align:center}.navbar__links[data-v-78cbed41]{display:none;justify-content:center;width:100%}.navbar__toggleBtn[data-v-78cbed41]{display:block}.navbar__links.active[data-v-78cbed41],.navbar__menu.active[data-v-78cbed41]{display:flex}}',""]),t.exports=o},292:function(t,n,e){"use strict";e(216)},293:function(t,n,e){var o=e(60)(!1);o.push([t.i,"footer[data-v-3a242b2c]{background-color:#1f3995;width:100%;height:20vh;color:#fff}.icons[data-v-3a242b2c]{height:50px}",""]),t.exports=o},294:function(t,n,e){"use strict";e(217)},295:function(t,n,e){var o=e(60)(!1);o.push([t.i,"#container{min-height:70vh;margin-top:150px}h1{color:#1f3995}hr{background-color:#1f3995;height:1px}.icons{height:32px}.bold{font-weight:700}@media screen and (max-width:860px){.m-5{margin:0!important}h1{font-size:2rem}h5{font-size:1.1rem}}",""]),t.exports=o}},[[233,17,1,18]]]);