webpackJsonp([1],{"5CNK":function(t,e){},JErv:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("7t+N"),i=a.n(r),n=a("mvHQ"),o=a.n(n),l={name:"login",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{closeLogin:function(){i()("#userCode").val(""),i()("#password").val(""),i()("#loginDiv").hide(),i()("#_overlay_").hide()},loginAndRegister:function(){var t=this,e=i()("#userCode").val(),a=i()("#password").val();if(""!==e&&""!==a){var s={userCode:e,password:a};s=t.encryptDes(o()(s)),t.$api.login.login(s).then(function(e){console.log(e),console.log("**"),null!=e?(0===e.code?(t.$store.commit("$_setToken",e.data.token),i()("#loginDiv").hide(),i()("#_overlay_").hide()):alert(e.msg),i()("#loading_tips").attr("style","visibility: hidden")):alert("登录失败")}),i()("#loading_tips").attr("style","visibility: visible")}else alert("请输入账号密码")},delUserCode:function(){i()("#userCode").val("")},delPassword:function(){i()("#password").val("")}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login",staticStyle:{height:"364px"},attrs:{id:"login"}},[a("div",{staticClass:"headerClose"},[a("a",{staticClass:"close",attrs:{id:"close",title:"关闭",tabindex:"14"},on:{click:function(e){return t.closeLogin()}}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"web_qr_login",staticStyle:{display:"block"},attrs:{id:"web_qr_login"}},[a("div",{staticClass:"web_qr_login_show",attrs:{id:"web_qr_login_show"}},[a("div",{staticClass:"web_login",attrs:{id:"web_login"}},[t._m(2),t._v(" "),a("div",{staticClass:"login_form"},[a("div",{staticClass:"uinArea",attrs:{id:"uinArea"}},[a("div",{staticClass:"inputOuter"},[a("input",{staticClass:"inputstyle",attrs:{type:"text",id:"userCode",maxlength:"8",tabindex:"1",placeholder:"账号"}}),t._v(" "),a("a",{staticClass:"uin_del",staticStyle:{display:"block"},on:{click:function(e){return t.delUserCode()}}})])]),t._v(" "),a("div",{staticClass:"pwdArea",attrs:{id:"pwdArea"}},[a("div",{staticClass:"inputOuter"},[a("input",{staticClass:"inputstyle password",attrs:{type:"password",id:"password",maxlength:"16",tabindex:"2",placeholder:"密码"}}),t._v(" "),a("a",{staticClass:"uin_del",staticStyle:{display:"block"},on:{click:function(e){return t.delPassword()}}})]),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"submit"},[a("a",{staticClass:"login_button",attrs:{hidefocus:"true"}},[a("input",{staticClass:"btn",attrs:{type:"submit",tabindex:"6",value:"登 录",id:"login_button"},on:{click:function(e){return t.loginAndRegister()}}})])])])]),t._v(" "),t._m(5)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"error_tips",staticStyle:{display:"none"},attrs:{id:"error_tips"}},[e("span",{staticClass:"error_logo",attrs:{id:"error_logo"}}),this._v(" "),e("span",{staticClass:"err_m",attrs:{id:"err_m"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading_tips",staticStyle:{visibility:"hidden"},attrs:{id:"loading_tips"}},[e("span",{attrs:{id:"loading_wording"}},[this._v("登录中")]),this._v(" "),e("img",{attrs:{id:"loading_img",src:a("ZWQh"),alt:"加载中"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips",attrs:{id:"tips"}},[e("div",{staticClass:"title",attrs:{id:"title_2"}},[this._v("帐号密码登录")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lock_tips",staticStyle:{display:"none"},attrs:{id:"caps_lock_tips"}},[e("span",{staticClass:"lock_tips_row"}),this._v(" "),e("span",[this._v("大写锁定已打开")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"verifyArea",attrs:{id:"verifyArea"}},[e("div",{staticClass:"verifyinputArea",attrs:{id:"verifyinputArea"}},[e("label",{staticClass:"input_tips",attrs:{id:"vc_tips",for:"verifycode"}},[this._v("验证码")]),this._v(" "),e("div",{staticClass:"inputOuter"},[e("input",{staticClass:"inputstyle verifycode",attrs:{name:"verifycode",type:"text",id:"verifycode",value:"",tabindex:"3"}})])]),this._v(" "),e("div",{staticClass:"verifyimgArea",attrs:{id:"verifyimgArea"}},[e("img",{staticClass:"verifyimg",attrs:{id:"verifyimg",title:"看不清，换一张"}}),this._v(" "),e("a",{staticClass:"verifyimg_tips",attrs:{tabindex:"4"}},[this._v("看不清，换一张")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom",staticStyle:{display:"block"},attrs:{id:"bottom_web"}},[e("a",{staticClass:"link",attrs:{id:"forgetpwd",target:"_blank"}},[this._v("忘了密码？")]),this._v(" "),e("span",{staticClass:"dotted"},[this._v("|")]),this._v(" "),e("a",{staticClass:"link",attrs:{target:"_blank"}},[this._v("注册新帐号")])])}]};var u={name:"app",components:{Login:a("VU/8")(l,c,!1,function(t){a("5CNK")},null,null).exports},created:function(){},data:function(){return{}},watch:{},methods:{login:function(){i()("#loginDiv").show(),i()("#_overlay_").show()}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticStyle:{height:"368px",width:"622px",border:"0px",padding:"0px",margin:"-184px 0px 0px -311px",position:"fixed","z-index":"100002",top:"50%",left:"50%",display:"none",visibility:"visible"},attrs:{id:"loginDiv","data-milodialog":"1",role:"dialog",tabindex:"-1"}},[a("login")],1),t._v(" "),a("div",[t._m(0),t._v(" "),a("div",{attrs:{id:"header"}},[t._m(1),t._v(" "),a("ul",{attrs:{id:"nav"}},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("li",[a("a",{staticClass:"nav-link team",on:{click:function(e){return t.login()}}},[t._v("登录")])])])]),t._v(" "),a("div",{staticClass:"fix-sidebar",attrs:{id:"main"}},[a("div",{staticClass:"sidebar"},[a("div",{staticClass:"sidebar-inner"},[a("div",{staticClass:"list"},[a("iframe",{attrs:{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"298",height:"52",src:"//music.163.com/outchain/player?type=0&id=3112901650&auto=1&height=32"}}),t._v(" "),t._m(5),t._v(" "),a("ul",{staticClass:"menu-root"},[a("li",[a("router-link",{attrs:{to:"QRCode"}},[t._v("生成二维码")])],1),t._v(" "),t._m(6),t._v(" "),a("li",[a("router-link",{attrs:{to:"HelloWorld"}},[t._v("HelloWorld")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"Star"}},[t._v("我的收藏")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"Doupo"}},[t._v("斗破苍穹")])],1)])])])]),t._v(" "),a("div",{staticClass:"content guide with-sidebar instance-guide"},[a("router-view")],1)]),t._v(" "),a("div",{staticStyle:{display:"none","background-color":"rgb(0, 0, 0)",position:"absolute",height:"100%","z-index":"100001",width:"100%",left:"0px",top:"0px",opacity:"0.7"},attrs:{id:"_overlay_"}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"mobile-bar"}},[e("a",{staticClass:"menu-button"}),this._v(" "),e("a",{staticClass:"logo",attrs:{href:"/"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{id:"logo",href:"/"}},[e("img",{attrs:{src:a("Rvus")}}),this._v(" "),e("span",[this._v("Luckystar")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("form",{attrs:{id:"search-form"}},[e("input",{staticClass:"search-query st-default-search-input aa-input",attrs:{placeholder:"暂无该功能",type:"text",id:"search-query-nav","aria-label":"搜索",autocomplete:"off",spellcheck:"false",role:"combobox","aria-autocomplete":"list","aria-expanded":"false","aria-owns":"algolia-autocomplete-listbox-0",dir:"auto"}}),e("pre",{staticStyle:{position:"absolute",visibility:"hidden","white-space":"pre","font-family":"Arial","font-size":"14px","font-style":"normal","font-variant":"normal","font-weight":"400","word-spacing":"0px","letter-spacing":"normal","text-indent":"0px","text-rendering":"auto","text-transform":"none"},attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-dropdown-container learn"},[a("a",{staticClass:"nav-link current"},[t._v("学习")]),a("span",{staticClass:"arrow"}),t._v(" "),a("ul",{staticClass:"nav-dropdown"},[a("li",[a("h4",[t._v("文档")])]),t._v(" "),a("li",[a("ul",[a("li",[a("a",{staticClass:"nav-link current",attrs:{href:"/v2/guide/"}},[t._v("教程")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"/v2/api/"}},[t._v("API")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"/v2/style-guide/"}},[t._v("风格指南")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"/v2/examples/"}},[t._v("示例")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"/v2/cookbook/"}},[t._v("Cookbook")])])])]),t._v(" "),a("li",[a("h4",[t._v("视频教程")])]),t._v(" "),a("li",[a("ul",[a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://www.vuemastery.com/courses/",target:"_blank",rel:"sponsored noopener"}},[t._v("Vue Mastery (英文)")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown",target:"_blank",rel:"noopener"}},[t._v("Vue School (英文)")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://learning.dcloud.io/",target:"_blank",rel:"sponsored noopener"}},[t._v("DCloud 视频教程")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-dropdown-container ecosystem"},[a("a",{staticClass:"nav-link"},[t._v("生态系统")]),a("span",{staticClass:"arrow"}),t._v(" "),a("ul",{staticClass:"nav-dropdown"},[a("li",[a("h4",[t._v("帮助")])]),t._v(" "),a("li",[a("ul",[a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://forum.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("论坛")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://chat.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("聊天室")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://events.vuejs.org/meetups/",target:"_blank",rel:"noopener"}},[t._v("聚会")])])])]),t._v(" "),a("li",[a("h4",[t._v("工具")])]),t._v(" "),a("li",[a("ul",[a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener"}},[t._v("Devtools")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener"}},[t._v("Vue CLI")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://vue-loader.vuejs.org/zh/",target:"_blank",rel:"noopener"}},[t._v("Vue Loader")])])])]),t._v(" "),a("li",[a("h4",[t._v("核心插件")])]),t._v(" "),a("li",[a("ul",[a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener"}},[t._v("Vue Router")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener"}},[t._v("Vuex")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://ssr.vuejs.org/zh/",target:"_blank",rel:"noopener"}},[t._v("Vue 服务端渲染")])])])]),t._v(" "),a("li",[a("h4",[t._v("信息")])]),t._v(" "),a("li",[a("ul",[a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("周刊")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://github.com/vuejs/vue/projects/6",target:"_blank",rel:"noopener"}},[t._v("Roadmap")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://events.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("活动")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://medium.com/the-vue-point",target:"_blank",rel:"noopener"}},[t._v("博客")])]),t._v(" "),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"https://vuejobs.com/?ref=vuejs",target:"_blank",rel:"noopener"}},[t._v("工作")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v("\n              教程\n              "),a("select",{staticClass:"version-select"},[a("option",{attrs:{value:"SELF",selected:""}},[t._v("2.x")]),t._v(" "),a("option",{attrs:{value:"v1"}},[t._v("1.0")]),t._v(" "),a("option",{attrs:{value:"012"}},[t._v("0.12")]),t._v(" "),a("option",{attrs:{value:"011"}},[t._v("0.11")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("h3",[this._v("工具")])])}]};var p=a("VU/8")(u,v,!1,function(t){a("RXye")},null,null).exports,d=a("/ocq"),h={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{hello:function(){alert("hey boy"),this.$http.get(this.HOME+"/test?v=1&x=2&y=3").then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),a("button",{on:{click:function(e){return t.hello()}}},[t._v("hello")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var f=a("VU/8")(h,_,!1,function(t){a("sxb9")},"data-v-6f44c1a8",null).exports,m={name:"QRCode",data:function(){return{msg:""}},methods:{getQRCode:function(){var t=i()("#msg").val();""!==t?this.$api.qrcode.getQRCode(t).then(function(t){var e="data:image/png;base64,"+t;i()("#QRCodeImg").attr("src",e)}):this.kPopup("未输入内容")}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"QRCodeComp"},[a("div",[t._v("输入二维码解析的内容")]),t._v(" "),a("textarea",{attrs:{id:"msg"}}),t._v(" "),a("div",[a("button",{on:{click:function(e){return t.getQRCode()}}},[t._v("生成")])]),t._v(" "),a("div",[t._v("生成的二维码")]),t._v(" "),a("img",{staticStyle:{height:"6rem",width:"6rem"},attrs:{id:"QRCodeImg"}})])},staticRenderFns:[]};var A=a("VU/8")(m,g,!1,function(t){a("bEmX")},null,null).exports,C={name:"Star",data:function(){return{stars:[]}},created:function(){var t=this;t.$api.star.qryUpdateChapter().then(function(e){console.log(e),null!=e?0===e.code?t._self.stars=e.data:alert(e.msg):alert("查询失败")})},methods:{}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[t._v("Novel")]),t._v(" "),a("ul",[t._m(0),t._v(" "),t._l(t.stars,function(e){return a("li",{key:e.chapter},[t._v("\n      "+t._s(e.chapter)+" "+t._s(e.href)+"\n    ")])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"icon-star-empty"}),this._v("龙族")])}]};var y=a("VU/8")(C,k,!1,function(t){a("oDtL")},null,null).exports,b={name:"Doupo",data:function(){return{chapters:[],chapterImgs:[],curChapter:0}},created:function(){var t=this;t.$api.star.qryDoupoChapter().then(function(e){console.log(e.data),t._self.chapters=e.data}),document.onkeydown=function(e){var a=e||event||window.event;a&&37===a.keyCode?t.beforeChapter():a&&39===a.keyCode&&t.afterChapter()}},methods:{openChapter:function(t){var e=this;e._self.curChapter=t,i()("#doupolist").hide(),i()("#doupochapter").show(),e.$api.star.qryDoupoChapterImages(t).then(function(t){e._self.chapterImgs=t.data.data,console.log(e._self.chapterImgs)})},beforeChapter:function(){var t=this,e=this,a=e._self.curChapter;e.$api.star.qryDoupoChapterImagesBefore(a).then(function(a){e._self.chapterImgs=a.data.data,t._self.curChapter=a.data.chapterId}),document.scrollingElement.scrollTop=0},afterChapter:function(){var t=this,e=this,a=e._self.curChapter;e.$api.star.qryDoupoChapterImagesAfter(a).then(function(a){e._self.chapterImgs=a.data.data,t._self.curChapter=a.data.chapterId}),document.scrollingElement.scrollTop=0}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"doupolist"}},[a("div",[t._v("斗破苍穹")]),t._v(" "),a("div",[t._v("目录")]),t._v(" "),a("ul",t._l(t.chapters,function(e){return a("li",{key:e.chapterId,on:{click:function(a){return t.openChapter(e.chapterId)}}},[t._v("\n        "+t._s(e.chapter_id)+" "+t._s(e.title)+"\n      ")])}),0)]),t._v(" "),a("div",{staticStyle:{display:"none"},attrs:{id:"doupochapter"}},[a("div",{staticClass:"header"},[a("a",{on:{click:function(e){return t.beforeChapter()}}},[t._v("上一话（快捷键←）")]),a("br"),t._v(" "),a("a",{on:{click:function(e){return t.afterChapter()}}},[t._v("下一话（快捷键→）")])]),t._v(" "),t._l(t.chapterImgs,function(t){return a("div",{key:t.id},[a("img",{attrs:{src:t.src}})])})],2)])},staticRenderFns:[]};var x=a("VU/8")(b,w,!1,function(t){a("JErv")},null,null).exports;s.a.use(d.a);var E=new d.a({base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",name:"home",component:f},{path:"/QRCode",name:"QRCode",component:A,meta:{requireAuth:!0}},{path:"/HelloWorld",name:"HelloWorld",component:f},{path:"/Star",name:"Star",component:y,meta:{requireAuth:!0}},{path:"/Doupo",name:"Doupo",component:x}]});E.beforeEach(function(t,e,a){if("/login"===t.path)a();else{var s=localStorage.getItem("Authorization");"null"===s||""===s?a("/login"):a()}});var S=E,Q={install(t,e){t.prototype.kPopup=function(t){i()("body").append('<div class="mark"></div>'),i()(".mark").html(t),i()(".mark").show(),setTimeout(function(){i()(".mark").hide(),i()(".mark").remove()},2e3)}}},D=(a("rqsT"),a("NYxO"));s.a.use(D.a);var I={isLogin:"0",ser:null,token:document.cookie?localStorage.token:""},q=new D.a.Store({state:I,getters:{getStorage:function(t){return I.token||(I.token=JSON.parse(localStorage.getItem(t))),I.token}},mutations:{$_setToken:function(t,e){t.token=e,localStorage.setItem("token",e),console.log(t),console.log(e),document.cookie=e},$_removeStorage:function(t){localStorage.removeItem("token")}}}),j=a("Av7u"),R=a.n(j),$="Ki1055894396",F={install(t,e){t.prototype.encryptDes=function(t){var e=R.a.enc.Utf8.parse($),a={mode:R.a.mode.ECB,padding:R.a.pad.Pkcs7};return R.a.DES.encrypt(t,e,a).ciphertext.toString()},t.prototype.decryptDes=function(t){var e=R.a.enc.Utf8.parse($);return R.a.DES.decrypt({ciphertext:R.a.enc.Hex.parse(t)},e,{mode:R.a.mode.ECB,padding:R.a.pad.Pkcs7}).toString(R.a.enc.Utf8)}}},M={sq:"https://xxxx111111.com/api/v1",bd:"http://xxxxx22222.com/api",luckyStar:"http://localhost:9000"},L=a("//Fk"),U=a.n(L),B=a("mtWM"),T=a.n(B),V=a("Fd2+"),O=function(t){Object(V.a)({message:t,duration:1e3,forbidClick:!0})},W=function(){S.replace({path:"/login",query:{redirect:S.currentRoute.fullPath}})};S.beforeEach(function(t,e,a){console.log(q);var s=q;if(t.matched.some(function(t){return t.meta.requireAuth}))if(s.state.token)a();else if("/login"!==t.path){var r=s.state.token;"null"!==r&&""!==r&&void 0!==r||alert("检测到您还未登录,请登录后操作！")}else a();else a()});var J=T.a.create({timeout:12e3});J.defaults.headers.common["Authentication-Token"]=q.state.token,J.interceptors.request.use(function(t){return t.headers.common.token=q.state.token,console.log("token:"+q.state.token),console.log("config"),console.log(t),t},function(t){return U.a.error(t)}),J.interceptors.response.use(function(t){return 200===t.status?U.a.resolve(t.data):U.a.reject(t)},function(t){var e=t.response;if(e)return function(t,e){switch(t){case 401:W();break;case 403:O("登录过期，请重新登录"),localStorage.removeItem("token"),q.commit("loginSuccess",null),setTimeout(function(){W()},1e3);break;case 404:O("请求的资源不存在");break;default:console.log(e)}}(e.status,e.data.message),U.a.reject(e);q.commit("changeNetwork",!1)});var N=J,P=a("mw3O"),Y=a.n(P),Z={article:{articleList:function(){return N.get(M.sq+"/topics")},articleDetail:function(t,e){return N.get(M.sq+"/topic/"+t,{params:e})},login:function(t){return N.post(M.sq+"/accesstoken",Y.a.stringify(t))}},login:{login:function(t){return N.get(M.luckyStar+"/login?param="+t)}},star:{qryUpdateChapter:function(){return N.get(M.luckyStar+"/qryUpdateChapter")},qryDoupoChapter:function(){return N.get(M.luckyStar+"/qryDoupoChapter")},qryDoupoChapterImages:function(t){return N.get(M.luckyStar+"/qryDoupoChapterImages?chapterId="+t)},qryDoupoChapterImagesBefore:function(t){return N.get(M.luckyStar+"/qryDoupoChapterImagesBefore?chapterId="+t)},qryDoupoChapterImagesAfter:function(t){return N.get(M.luckyStar+"/qryDoupoChapterImagesAfter?chapterId="+t)}},qrcode:{getQRCode:function(t){return N.get(M.luckyStar+"/getQRCode?msg="+t)}}};s.a.config.productionTip=!1,s.a.prototype.$store=q,s.a.prototype.$api=Z,s.a.use(Q),s.a.use(F),new s.a({el:"#app",router:S,components:{App:p},template:"<App/>"})},RXye:function(t,e){},Rvus:function(t,e,a){t.exports=a.p+"static/img/amy.df49a5f.gif"},ZWQh:function(t,e){t.exports="data:image/gif;base64,R0lGODlhEAAQALMMAKqooJGOhp2bk7e1rZ2bkre1rJCPhqqon8PBudDOxXd1bISCef///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAMACwAAAAAEAAQAAAET5DJyYyhmAZ7sxQEs1nMsmACGJKmSaVEOLXnK1PuBADepCiMg/DQ+/2GRI8RKOxJfpTCIJNIYArS6aRajWYZCASDa41Ow+Fx2YMWOyfpTAQAIfkEBQAADAAsAAAAABAAEAAABE6QyckEoZgKe7MEQMUxhoEd6FFdQWlOqTq15SlT9VQM3rQsjMKO5/n9hANixgjc9SQ/CgKRUSgw0ynFapVmGYkEg3v1gsPibg8tfk7CnggAIfkEBQAADAAsAAAAABAAEAAABE2QycnOoZjaA/IsRWV1goCBoMiUJTW8A0XMBPZmM4Ug3hQEjN2uZygahDyP0RBMEpmTRCKzWGCkUkq1SsFOFQrG1tr9gsPc3jnco4A9EQAh+QQFAAAMACwAAAAAEAAQAAAETpDJyUqhmFqbJ0LMIA7McWDfF5LmAVApOLUvLFMmlSTdJAiM3a73+wl5HYKSEET2lBSFIhMIYKRSimFriGIZiwWD2/WCw+Jt7xxeU9qZCAAh+QQFAAAMACwAAAAAEAAQAAAETZDJyRCimFqbZ0rVxgwF9n3hSJbeSQ2rCWIkpSjddBzMfee7nQ/XCfJ+OQYAQFksMgQBxumkEKLSCfVpMDCugqyW2w18xZmuwZycdDsRACH5BAUAAAwALAAAAAAQABAAAARNkMnJUqKYWpunUtXGIAj2feFIlt5JrWybkdSydNNQMLaND7pC79YBFnY+HENHMRgyhwPGaQhQotGm00oQMLBSLYPQ9QIASrLAq5x0OxEAIfkEBQAADAAsAAAAABAAEAAABE2QycmUopham+da1cYkCfZ94UiW3kmtbJuRlGF0E4Iwto3rut6tA9wFAjiJjkIgZAYDTLNJgUIpgqyAcTgwCuACJssAdL3gpLmbpLAzEQA7"},bEmX:function(t,e){},oDtL:function(t,e){},rqsT:function(t,e){},sxb9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c75c54d7ae264311bdb4.js.map