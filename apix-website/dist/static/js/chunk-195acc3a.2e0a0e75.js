(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-195acc3a"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1e8f":function(t,e,i){"use strict";i.d(e,"f",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return c})),i.d(e,"a",(function(){return r})),i.d(e,"e",(function(){return o})),i.d(e,"b",(function(){return l})),i.d(e,"g",(function(){return p}));var s=i("b775");function n(t){return Object(s["a"])({url:"/app/appList/"+t,method:"get"})}function a(t){return Object(s["a"])({url:"/app/data/statistics",method:"post",data:t})}function c(t){return Object(s["a"])({url:"/app/subscribed/list"+t,method:"get"})}function r(t){return Object(s["a"])({url:"/app/api/list"+t,method:"get"})}function o(t){return Object(s["a"])({url:"/app/open/list"+t,method:"get"})}function l(t){return Object(s["a"])({url:"/app/open/".concat(t),method:"get"})}function p(t){return Object(s["a"])({url:"/app/open/subscribe/".concat(t),method:"get"})}},"3a50":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAeZJREFUWEftmE1OAkEQhasGNrDiCHgCYcHQsBFO4MDgGjmBeAK5gXoC2YvIDWRF+EvkCOMNWLDtLtOJJkyAodtuCMQhYfdq6utXNdWVQTjxH544H8SAphU6Lwddt9ZFdJq6p04kKDsa9b9041T0IQdtADLmN4ngViV5hCZIpfj9cDhY7gJcEtFzdBK8RARPatYddF3/ExFyhoBAxGvT6WCwCzCYTN4uopIUCvVbx8GXLYAeItyZABLBMp3mrSgH/wxoArYt1rqDMeDPmIlLrNoK/68HGas/EGFH1aEdOjmo85GDGgAWe5JkAUD+Q4O6WPQ/AKBiCLh3UGs9f/0mYczLCuEYXXWOA8F43O9KiFAPMtboENGVFh0ApFK8JsuhG6eiP691S+VEx9acl4Ou63sApL0qpdPi6Sg9aGNhrVS8zGpltg8mk/ItHgQbb7ENQNf1338XWZN+5Ryr83lvaP2qszWohXDys9nrwjqgdI2xhtFNwjkuJVxUieN1S7U/D1Ji1eQquhhQxaUojXUHbaxbRBDMZlvWrbVBHXDOW1EnSySS1wDUPtSXhX2DWqsy6wtrqdRoC0GPWg/YFAeIvCqvO+sfjwzBNsJDgOXyTU4IyugmGY97Q90YVf157YOqpzqm7uQd/AbT+Hg4+1j2WAAAAABJRU5ErkJggg=="},"40e8":function(t,e,i){"use strict";i("ceef")},"7c43":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main_open"},[s("navbar"),s("div",{staticStyle:{"min-height":"calc(100vh - 238px - 60px)"}},[s("div",{staticClass:"apiMain_content"},[s("div",{staticClass:"welcome"},[t._v(t._s(t.pageInfo.title||"欢迎访问我们的开放服务平台"))]),s("div",{staticClass:"all_services"},[t._v(t._s(t.pageInfo.description||"您可以在我们所有的服务中找到需要的那一个"))]),s("div",{staticClass:"input-with-select"},[s("el-input",{attrs:{placeholder:"请输入服务名称"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),s("el-button",{attrs:{slot:"append",type:"primary"},on:{click:t.search},slot:"append"},[t._v("搜一下")])],1)]),s("div",{staticClass:"open_service"},[s("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[s("div",{staticClass:"open_service_title"},[t._v("开放服务")]),s("div",[s("img",{staticStyle:{width:"20px",height:"20px","margin-right":"10px",cursor:"pointer"},attrs:{src:i("3a50")},on:{click:function(e){t.isshow=1}}}),s("img",{staticStyle:{width:"20px",height:"20px",cursor:"pointer"},attrs:{src:i("9a0e")},on:{click:function(e){t.isshow=2}}})])]),s("transition",{attrs:{name:"el-fade-in-linear"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.isshow,expression:"isshow===1"}],staticClass:"open_service_list"},t._l(t.serviceList,(function(e,i){return s("div",{key:i,staticClass:"service_list_item",on:{click:function(i){return t.goDetail(e)}}},[s("div",{staticClass:"list_item_title"},[t._v(t._s(e.appName))]),s("div",{staticClass:"list_item_content"},[t._v(t._s(e.description))]),s("div",{staticStyle:{width:"140px"}},[t._l(e.plugins,(function(t,e){return s("img",{directives:[{name:"show",rawName:"v-show",value:e<5,expression:"indexs<5"}],key:e,staticStyle:{"margin-right":"5px"},attrs:{src:t.icon,width:"20px",height:"20px"}})})),e.plugins.length>5?s("span",[t._v("...")]):t._e()],2),s("div",{staticStyle:{width:"100px","text-align":"center"}},[e.appVersions[0]?s("div",{staticClass:"list_item_v"},[t._v(t._s(e.appVersions[0]))]):t._e()]),e.subscribed?s("div",{staticClass:"list_item_button_dis"},[t._v("已订阅")]):s("div",{staticClass:"list_item_button",on:{click:function(i){return i.stopPropagation(),t.subscribe(e)}}},[t._v("订阅")])])})),0)]),s("transition",{attrs:{name:"el-fade-in-linear"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.isshow,expression:"isshow===2"}],staticClass:"open_service_cards"},[t._l(t.serviceList,(function(e,i){return s("div",{key:i,staticClass:"service_cards_item",on:{click:function(i){return t.goDetail(e)}}},[e.subscribed?s("div",{staticClass:"cards_item_button_dis"},[t._v("已订阅")]):s("div",{staticClass:"cards_item_button",on:{click:function(i){return i.stopPropagation(),t.subscribe(e)}}},[t._v("订阅")]),s("div",{staticClass:"cards_item_title"},[t._v(t._s(e.appName))]),s("div",{staticClass:"cards_item_content"},[t._v(t._s(e.description))]),s("div",{staticStyle:{display:"flex",width:"100%"}},[t._l(e.plugins,(function(t,e){return s("img",{directives:[{name:"show",rawName:"v-show",value:e<5,expression:"indexs<5"}],key:e,staticStyle:{"margin-right":"5px"},attrs:{src:t.icon,width:"20px",height:"20px"}})})),e.plugins.length>5?s("span",[t._v("...")]):t._e()],2),s("div",[e.appVersions[0]?s("div",{staticClass:"cards_item_v"},[t._v(t._s(e.appVersions[0]))]):s("div",{staticStyle:{width:"20px",height:"20px"}})])])})),t.serviceList.length%4===3||t.serviceList.length%4===2?s("div",{staticStyle:{width:"270px",height:"300px"}}):t._e(),t.serviceList.length%4===2?s("div",{staticStyle:{width:"270px",height:"300px"}}):t._e()],2)]),0===t.serviceList.length?s("transition",{attrs:{name:"el-fade-in-linear"}},[s("el-empty",{attrs:{description:"暂无开放服务"}})],1):t._e()],1)]),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service_footer"},[s("div",[s("img",{staticStyle:{width:"119px",height:"43px",opacity:"1"},attrs:{src:i("82c4")}})]),s("div",{staticClass:"footer_text1"},[s("div",{staticStyle:{"margin-right":"50px"}},[t._v("上海博冀信息科技有限公司")]),s("div",[t._v("联系电话 000-0000-8888")])]),s("div",{staticClass:"footer_text2"},[t._v("Copyright © 2021 上海博冀信息科技有限公司")])])}],a=i("2909"),c=(i("ac1f"),i("841c"),i("159b"),i("d81d"),i("b0c0"),i("c24f")),r=i("1e8f"),o=i("90cc"),l=i("5f87"),p=i("0a0a"),u={components:{navbar:o["a"]},data:function(){return{searchKey:"",items:[],isshow:1,serviceList:[],pageInfo:{},plugin:p["a"]}},created:function(){this.search(),this.getPageInfo()},methods:{getPageInfo:function(){var t=this;Object(c["d"])().then((function(e){t.pageInfo=e.data}))},plugName:function(t){var e={jwt:"Jwt-auth",base_auth:"basic_auth",oauth2:"OAuth2.0",black_list_ip:"IP 黑名单控制",white_list_ip:"IP 白名单控制",cors:"cors跨域",sign:"防篡改签名",replay_attacks:"防网络重放攻击",error_log:"error log",http_log:"http log",sentinel:"sentinel",gzip:"gzip",proxy_cache:"proxy-cache",real_ip:"real_ip",response_rewrite:"response-rewrite"};return t?e[t]:""},search:function(){var t=this,e="?market=true&appName="+this.searchKey;Object(r["e"])(e).then((function(e){t.serviceList=e.data.appList;var i=[];t.plugin.forEach((function(t){i.push.apply(i,Object(a["a"])(t.content))})),t.serviceList.map((function(e,s){e.plugins.map((function(e,s){e.pluginType=t.plugName(e.pluginType),i.forEach((function(t,i){e.pluginType===t.name&&(e.icon=t.icon)}))}))}))}))},goDetail:function(t){this.$router.push({name:"openServeDetail",query:{code:t.appCode}})},subscribe:function(t){var e=this;Object(l["a"])("token")?this.$confirm("确认订阅："+t.appName+"吗, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["g"])(t.appCode).then((function(t){200===t.code&&(e.$message.success("订阅成功"),e.search())}))})):this.$router.push({path:"/login",query:{path:this.$route.path}})}}},d=u,h=(i("d001"),i("2877")),g=Object(h["a"])(d,s,n,!1,null,"45cca506",null);e["default"]=g.exports},"82c4":function(t,e,i){t.exports=i.p+"static/img/img_sinosdx_logo.4ac7ad5e.png"},"841c":function(t,e,i){"use strict";var s=i("d784"),n=i("825a"),a=i("1d80"),c=i("129f"),r=i("14c3");s("search",1,(function(t,e,i){return[function(e){var i=a(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i):new RegExp(e)[t](String(i))},function(t){var s=i(e,t,this);if(s.done)return s.value;var a=n(t),o=String(this),l=a.lastIndex;c(l,0)||(a.lastIndex=0);var p=r(a,o);return c(a.lastIndex,l)||(a.lastIndex=l),null===p?-1:p.index}]}))},"90cc":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar_top"},[s("div",{staticClass:"navbar"},[t._m(0),s("div",{staticClass:"navber_userHandle"},[s("div",{staticClass:"kongzhitai",on:{click:t.godashboard}},[t._v("控制台")]),t.isLogin?t._e():s("div",{staticClass:"kongzhitai",staticStyle:{"margin-left":"20px"},on:{click:t.gologin}},[t._v("登录")]),t.isLogin?s("img",{attrs:{src:i("f92b"),alt:""}}):t._e(),t.isLogin?s("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#1D1C35"}},[t._v(" "+t._s(t.userName)),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{staticClass:"drop-div",attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"a"}},[t._v("个人信息")]),s("el-dropdown-item",{attrs:{command:"b"}},[t._v("退出登录")])],1)],1):t._e()],1)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{width:"210px",height:"60px",display:"flex","justify-content":"center","align-items":"center"}},[s("img",{staticClass:"sidebar-logo",attrs:{src:i("4da1")}})])}],a=i("5530"),c=i("2f62"),r=i("5f87"),o={components:{},data:function(){return{phone:"",userName:"",isLogin:!0}},created:function(){this.phone=Object(r["a"])("apiPhone"),this.userName=Object(r["a"])("userName_api"),this.phone?this.isLogin=!0:this.isLogin=!1},watch:{$route:{handler:function(t,e){},deep:!0}},computed:Object(a["a"])({},Object(c["b"])(["sidebar","avatar","device"])),methods:{handleCommand:function(t){"a"==t?this.$router.push({path:"/system/index"}):this.$router.push({path:"/login"})},godashboard:function(){this.$router.push({name:"Dashboard"})},gologin:function(){this.$router.push({path:"/login"})}}},l=o,p=(i("40e8"),i("2877")),u=Object(p["a"])(l,s,n,!1,null,"1646885b",null);e["a"]=u.exports},"9a0e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAZZJREFUWEftWEFOAkEQ7J7lAJz8gfgCuLCZcBFe4IJ4Fn+gLxB/gC+Qu2L4gZzIbuDAE/AHPMCZNkME1yiztCRkJ5lO9tZd6a7p6a4dhJwb5jw/8AkeekJuMRiG7SGiuOZWHQRUmU5f39NxYdjpI+I9F0spbM3nL5NN3A8GXUpwRUSP9uqxigiR8clikIgebFiIeAoAPeOzL4PLJBmd2UDr9U5PCHzaJ8EkGVl7XcqoSRS8+QR3XRLP4F+96Hvwi5Vdc9Df4nTb/GfMrABgkbGmKgBgvsxBDQDb1bUD8wQAapw5yFqhWZuEA2bdJFJ2+0R0zgE0vqWSak8mY8P61qTs9IiQLTy0Fnez2fP29NySW1zmjuHvFoNheBkB0Po2caxc1oPfPdhtaq2bHBzjK4QexvF4uYlzVrCyCj/amElJfr/qDl11nkHPoFfUzitqpdSNbVoHQeECgG73EaxKqZYNCzGoCgED9wVr7h+PGo2rmtZk/g9YFsffz2WbQCmjCkBh/c/CsWLxY5FWRm7pQU6lx/LNPYOfj3dHR037pfsAAAAASUVORK5CYII="},ceef:function(t,e,i){},d001:function(t,e,i){"use strict";i("f9ce")},f9ce:function(t,e,i){}}]);