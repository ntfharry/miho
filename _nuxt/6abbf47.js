(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{319:function(t,n,e){var content=e(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("54ad33f6",content,!0,{sourceMap:!1})},327:function(t,n,e){"use strict";e(319)},328:function(t,n,e){var r=e(60)(!1);r.push([t.i,"h5[data-v-7f035128]{margin:5rem 0}img[data-v-7f035128]{margin:5rem 0 2rem;max-width:100%}.btn-lg[data-v-7f035128]{background-color:#1f3995;width:300px;border-radius:30px}",""]),t.exports=r},335:function(t,n,e){"use strict";e.r(n);var r=e(24),c=(e(67),e(37),[{constant:!1,inputs:[],name:"mintSingle",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]),o={methods:{mint:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=window,(e=n.klaytn)&&e.isKaikas){t.next=4;break}return alert("KAIKAS 확장프로그램 설치가 필요합니다"),t.abrupt("return");case 4:return t.next=6,e.enable();case 6:setTimeout((function(){new caver.klay.Contract(c,"0x77Dd381590C25cdEDD4A88651c731CB9aF671151").methods.mintSingle().send({from:e.selectedAddress,gas:1e6}).then((function(){alert("분양 완료")})).catch((function(){alert("다시 시도해주세요")}))}),500);case 7:case"end":return t.stop()}}),t)})))()}}},l=(e(327),e(49)),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-5 p-5"},[n("h1",{staticClass:"mb-4"},[t._v("Story")]),t._v(" "),n("hr",{staticClass:"mb-5"}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-8"},[n("h5",[t._v("서기 9999년, 남태평양 가운데 118개의 섬으로 이뤄진 폴리네시아 제도.")]),t._v(" "),n("h5",[t._v("하지만, 사람들 눈에는 보이지 않는 숨겨진 섬 ‘청구’가 있습니다. 청구는 신비한 능력을 가진 여우들이 사는 곳으로, 각 기 다른 문양을 가진 10부족이 있습니다. 이곳에서는 아기 여우가 태어나면 자신의 숨겨진 능력을 찾기 위해 인간들이 사는 지상계로 보내집니다.")]),t._v(" "),n("h5",[t._v("아기 여우는 주인의 사랑과 정성으로 꼬리 9개가 달린 어른 여우로 성장하고, 주인들의 취향에 따라 각기 다른 특성을 가지게 됩니다.")]),t._v(" "),n("h5",{staticClass:"bold"},[t._v("과연, 당신의 여우는 어떠한 특성을 가진 여우로 성장할까요?")]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"},on:{click:t.mint}},[t._v("\n        미호 분양받기\n      ")])]),t._v(" "),t._m(0)])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"col-4 text-center"},[n("img",{attrs:{src:"images/miho.png",alt:"miho"}}),t._v(" "),n("div",[t._v("반려여우 미호 (Miho)")])])}],!1,null,"7f035128",null);n.default=component.exports}}]);