(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-165d9ce6"],{"096c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#FFFFFF","min-height":"calc(100vh - 24px )"}},[a("navbar"),a("div",{staticClass:"main"},[a("div",{staticStyle:{padding:"90px 30px 0 30px",position:"relative",height:"100%"}},[a("div",{staticClass:"list_top"},[a("div",[a("div",{staticClass:"list_top_title"},[t._v(t._s(t.appName))]),a("div",{staticClass:"introduction"},[t._v(t._s(t.appDescription))])]),a("div",{},[t.subscribed?a("el-button",{staticStyle:{width:"100px"},attrs:{type:"primary",size:"small",disabled:!0},on:{click:t.subscribe}},[t._v("已订阅 ")]):a("el-button",{staticStyle:{width:"100px"},attrs:{type:"primary",size:"small"},on:{click:t.subscribe}},[t._v("订阅 ")]),a("el-button",{staticStyle:{width:"100px"},attrs:{size:"small",icon:"el-icon-back"},on:{click:function(e){return t.$router.push({name:"openServe"})}}},[t._v(" 返回 ")])],1)]),a("div",{staticClass:"list_top2"},[a("div",{staticClass:"service_providers"},[t._v("服务商："+t._s(t.appProvider))]),a("div",{staticClass:"service_providers"},[t._v("已添加的插件：")]),a("div",{staticStyle:{width:"669px",display:"flex","flex-wrap":"wrap"}},t._l(t.plugins,(function(e,i){return a("div",{key:i,staticClass:"plug-in service_providers",staticStyle:{display:"flex"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:e.msg,placement:"bottom-start"}},[a("div",{staticClass:"chajian_qian"})]),a("div",[t._v(t._s(e.pluginType))])],1)})),0),a("div",{staticClass:"release_time"},[t._v("发布时间：2021-10-05 08:05:00")])]),a("div",{staticStyle:{"padding-left":"30px",position:"absolute",left:"0",right:"0",width:"100%",height:"55vh",background:"#FFFFFF"}},[a("api-detail",{attrs:{apiOptions:t.appVersion}})],1)])])],1)},n=[],s=a("2909"),o=a("ade3"),r=(a("159b"),a("d81d"),a("b0c0"),a("1e8f")),c=a("5f87"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"he_main"},[a("el-row",{staticStyle:{height:"100%"}},[a("el-col",{staticStyle:{height:"100%"},attrs:{span:4}},[a("div",{staticClass:"apiList"},[a("el-select",{attrs:{size:"mini",placeholder:"请选择"},on:{change:t.apiValueChange},model:{value:t.apiValue,callback:function(e){t.apiValue=e},expression:"apiValue"}},t._l(t.apiOptions,(function(t){return a("el-option",{key:t.id,attrs:{label:t.version,value:t.id}})})),1),t._l(t.defaultApiList,(function(e,i){return a("p",{key:i,class:t.classList[i],staticStyle:{cursor:"pointer"},on:{click:function(a){return t.choseApi(e,i)}}},[t._v(" "+t._s(e.apiName)+" ")])}))],2)]),a("el-col",{staticStyle:{height:"100%"},attrs:{span:20}},[a("div",{staticClass:"apiMessage"},[a("div",{staticClass:"api-info"},[a("div",{staticClass:"title"},[t._v(t._s(t.apiMessageAll.apiName))]),a("div",{staticClass:"secondTitle"},[t._v(t._s(t.apiMessageAll.description))])]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color"},[t._v("调用路径 : ")]),a("span",{staticClass:"conten-color"},[t._v(t._s(t.apiMessageAll.domain))])]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color agrement"},[t._v("协议类型 : ")]),a("span",{staticClass:"conten-color"},[t._v(t._s(t.apiMessageAll.protocol))])]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color"},[t._v("请求方式 : ")]),a("span",{staticClass:"conten-color"},[t._v(t._s(t.apiMessageAll.requestMethod))])]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color"},[t._v("返回类型 : ")]),a("span",{staticClass:"conten-color"},[t._v("JSON")])]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color"},[t._v("请求参数 : ")]),a("div",{staticClass:"table_box table_top"},[a("el-table",{attrs:{data:t.table,"empty-text":"暂无数据","row-style":{height:"50px"},"highlight-current-row":"","header-cell-style":{"font-weight":400,color:"#494E6A"}}},[a("el-table-column",{attrs:{prop:"parame",label:"名称"}}),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),a("el-table-column",{attrs:{prop:"isHaveto",label:"是否必选"}}),a("el-table-column",{attrs:{prop:"describe",label:"描述"}}),a("el-table-column",{attrs:{prop:"default",label:"默认值"}})],1)],1)]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color"},[t._v("状态码 : ")]),a("div",{staticClass:"table_box table_top"},[a("el-table",{attrs:{data:t.statusTable,"empty-text":"暂无数据","row-style":{height:"50px"},"highlight-current-row":"","header-cell-style":{"font-weight":400,color:"#494E6A"}}},[a("el-table-column",{attrs:{prop:"statusCode",label:"状态码",width:"200"}}),a("el-table-column",{attrs:{prop:"describe",label:"描述"}})],1)],1)])])])],1)],1)},u=[],p=a("a1ad"),d={props:["apiOptions"],created:function(){},methods:{apiValueChange:function(){var t=this,e={appCode:this.$route.query.code,appVersionId:this.apiValue};Object(p["p"])(e).then((function(e){200===e.code&&(t.defaultApiList=e.data.apiList,t.classList=[])}))},getapiMessage:function(t){var e=this;Object(p["c"])(t).then((function(t){200===t.code&&(e.apiMessageAll=t.data,e.table=JSON.parse(t.data.requestParams))}))},choseApi:function(t,e){this.classList=[];for(var a=0;a<this.defaultApiList.length;a++)a===e?this.classList.push("hitClass"):this.classList.push("nohit");var i=t.apiId;this.getapiMessage(i)}},data:function(){return{table:[],classList:[],apiValue:"",defaultApiList:[],apiMessageAll:{},statusTable:[{statusCode:200,describe:"操作成功"},{statusCode:400,describe:"操作失败"}]}},watch:{apiOptions:function(){this.apiValue=this.apiOptions[0].id,this.apiValueChange()},defaultApiList:function(){this.classList=[];for(var t=0;t<this.defaultApiList.length;t++)0===t?this.classList.push("hitClass"):this.classList.push("nohit");var e=this.defaultApiList[0].apiId;this.getapiMessage(e)}}},h=d,f=(a("0d42"),a("2877")),g=Object(f["a"])(h,l,u,!1,null,"5e03fcd2",null),m=g.exports,b=a("90cc"),v=a("0a0a"),_={components:{navbar:b["a"],apiDetail:m},data:function(){return Object(o["a"])({appName:"",appDescription:"",appCreationDate:"",appVersion:[],appProvider:"",plugins:[],tooltipList:v["a"],subscribed:!0},"subscribed",!0)},created:function(){this.query()},methods:{plugName:function(t){var e={jwt:"Jwt-auth",base_auth:"basic_auth",oauth2:"OAuth2.0",black_list_ip:"IP 黑名单控制",white_list_ip:"IP 白名单控制",cors:"cors跨域",sign:"防篡改签名",replay_attacks:"防网络重放攻击",error_log:"error log",http_log:"http log",sentinel:"sentinel",gzip:"gzip",proxy_cache:"proxy-cache",real_ip:"real_ip",response_rewrite:"response-rewrite"};return t?e[t]:""},query:function(){var t=this;Object(r["b"])(this.$route.query.code).then((function(e){if(200===e.code){t.appName=e.data.appName,t.appDescription=e.data.appDescription,t.appCreationDate=e.data.appCreationDate,t.appProvider=e.data.appProvider,t.appVersion=e.data.appVersion||[],t.subscribed=e.data.subscribed,t.plugins=e.data.plugins;var a=[];t.tooltipList.forEach((function(t){a.push.apply(a,Object(s["a"])(t.content))})),t.plugins.map((function(e,i){e.pluginType=t.plugName(e.pluginType),a.forEach((function(t,a){e.pluginType===t.name&&(e.msg=t.message)}))}))}}))},subscribe:function(){var t=this;Object(c["a"])("token")?this.$confirm("确认订阅："+this.appName+"吗, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["g"])(t.$route.query.code).then((function(e){200===e.code&&(t.$message.success("订阅成功"),t.query())}))})):this.$router.push({path:"/login",query:{path:this.$route.path,code:this.$route.query.code}})}}},y=_,w=(a("de47"),Object(f["a"])(y,i,n,!1,null,"6885c555",null));e["default"]=w.exports},"0a0a":function(t,e,a){"use strict";var i=[{type:"身份认证",content:[{name:"Jwt-auth",code:"jwt",imgUrl:"",message:"验证和认证JSON Web令牌",defaultShow:!0,configuration:!0},{name:"basic_auth",code:"base_auth",imgUrl:"",message:"为您的服务添加基本身份验证",defaultShow:!0,configuration:!1},{name:"OAuth2.0",code:"oauth2",imgUrl:"",message:"将SDX与第三方OAuth2.0授权服务器集成",defaultShow:!0,configuration:!0}]},{type:"安全防护",content:[{name:"IP 黑名单控制",code:"black_list_ip",imgUrl:"",message:"可以发出请求的黑名单",defaultShow:!0,configuration:!0},{name:"IP 白名单控制",code:"white_list_ip",imgUrl:"",message:"可以发出请求的白名单",defaultShow:!0,configuration:!0},{name:"cors跨域",code:"cors",imgUrl:"",message:"允许开发人员从浏览器发出请求",defaultShow:!0,configuration:!0},{name:"防篡改签名",code:"sign",imgUrl:"",message:"-",defaultShow:!0,configuration:!0},{name:"防网络重放攻击",code:"replay_attacks",imgUrl:"",message:"网络请求重试限制",defaultShow:!0,configuration:!1}]},{type:"可观测性",content:[{name:"error log",code:"error_log",imgUrl:"",message:"错误日志记录器",defaultShow:!0,configuration:!1},{name:"http log",code:"http_log",imgUrl:"",message:"将请求和响应日志发送到http服务器",defaultShow:!0,configuration:!1}]},{type:"流量控制",content:[{name:"sentinel",code:"sentinel",imgUrl:"",message:"外部系统集成控流插件",defaultShow:!0,configuration:!0}]},{type:"其他插件",content:[{name:"gzip",code:"gzip",imgUrl:"",message:"请求压缩",defaultShow:!0,configuration:!1},{name:"proxy-cache",code:"proxy_cache",imgUrl:"",message:"代理缓存",defaultShow:!0,configuration:!1},{name:"real_ip",code:"real_ip",imgUrl:"",message:"获取真实ip",defaultShow:!0,configuration:!1},{name:"response-rewrite",code:"response_rewrite",imgUrl:"",message:"请求返回信息重写",defaultShow:!0,configuration:!1}]}];e["a"]=i},"0d42":function(t,e,a){"use strict";a("45df")},"1e8f":function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return c})),a.d(e,"b",(function(){return l})),a.d(e,"g",(function(){return u}));var i=a("b775");function n(t){return Object(i["a"])({url:"/app/appList/"+t,method:"get"})}function s(t){return Object(i["a"])({url:"/app/data/statistics",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/app/subscribed/list"+t,method:"get"})}function r(t){return Object(i["a"])({url:"/app/api/list"+t,method:"get"})}function c(t){return Object(i["a"])({url:"/app/open/list"+t,method:"get"})}function l(t){return Object(i["a"])({url:"/app/open/".concat(t),method:"get"})}function u(t){return Object(i["a"])({url:"/app/open/subscribe/".concat(t),method:"get"})}},"40e8":function(t,e,a){"use strict";a("ceef")},"421b":function(t,e,a){},"45df":function(t,e,a){},"90cc":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar_top"},[i("div",{staticClass:"navbar"},[t._m(0),i("div",{staticClass:"navber_userHandle"},[i("div",{staticClass:"kongzhitai",on:{click:t.godashboard}},[t._v("控制台")]),t.isLogin?t._e():i("div",{staticClass:"kongzhitai",staticStyle:{"margin-left":"20px"},on:{click:t.gologin}},[t._v("登录")]),t.isLogin?i("img",{attrs:{src:a("f92b"),alt:""}}):t._e(),t.isLogin?i("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[i("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#1D1C35"}},[t._v(" "+t._s(t.userName)),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),i("el-dropdown-menu",{staticClass:"drop-div",attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"a"}},[t._v("个人信息")]),i("el-dropdown-item",{attrs:{command:"b"}},[t._v("退出登录")])],1)],1):t._e()],1)])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"210px",height:"60px",display:"flex","justify-content":"center","align-items":"center"}},[i("img",{staticClass:"sidebar-logo",attrs:{src:a("4da1")}})])}],s=a("5530"),o=a("2f62"),r=a("5f87"),c={components:{},data:function(){return{phone:"",userName:"",isLogin:!0}},created:function(){this.phone=Object(r["a"])("apiPhone"),this.userName=Object(r["a"])("userName_api"),this.phone?this.isLogin=!0:this.isLogin=!1},watch:{$route:{handler:function(t,e){},deep:!0}},computed:Object(s["a"])({},Object(o["b"])(["sidebar","avatar","device"])),methods:{handleCommand:function(t){"a"==t?this.$router.push({path:"/system/index"}):this.$router.push({path:"/login"})},godashboard:function(){this.$router.push({name:"Dashboard"})},gologin:function(){this.$router.push({path:"/login"})}}},l=c,u=(a("40e8"),a("2877")),p=Object(u["a"])(l,i,n,!1,null,"1646885b",null);e["a"]=p.exports},a1ad:function(t,e,a){"use strict";a.d(e,"u",(function(){return n})),a.d(e,"g",(function(){return s})),a.d(e,"v",(function(){return o})),a.d(e,"s",(function(){return r})),a.d(e,"t",(function(){return c})),a.d(e,"d",(function(){return l})),a.d(e,"b",(function(){return u})),a.d(e,"n",(function(){return p})),a.d(e,"h",(function(){return d})),a.d(e,"a",(function(){return h})),a.d(e,"p",(function(){return f})),a.d(e,"e",(function(){return g})),a.d(e,"x",(function(){return m})),a.d(e,"k",(function(){return b})),a.d(e,"w",(function(){return v})),a.d(e,"c",(function(){return _})),a.d(e,"m",(function(){return y})),a.d(e,"q",(function(){return w})),a.d(e,"r",(function(){return C})),a.d(e,"o",(function(){return O})),a.d(e,"j",(function(){return j})),a.d(e,"i",(function(){return S})),a.d(e,"l",(function(){return x})),a.d(e,"f",(function(){return L}));var i=a("b775");function n(t){return Object(i["a"])({url:"/app/list?"+t,method:"get"})}function s(t){return Object(i["a"])({url:"/app/create",method:"post",data:t})}function o(t,e){return Object(i["a"])({url:"/app/"+t,method:"put",data:e})}function r(t){return Object(i["a"])({url:"/app/"+t,method:"delete"})}function c(t){return Object(i["a"])({url:"/app/"+t,method:"get"})}function l(t){return Object(i["a"])({url:"/app/data/"+t+"/appNum",method:"post"})}function u(t){return Object(i["a"])({url:"/app/api/list?developerId="+t,method:"get"})}function p(t,e){return Object(i["a"])({url:"/app/"+t+"/publish",method:"post",data:e})}function d(t){return Object(i["a"])({url:"/app/appVersion/"+t,method:"delete"})}function h(t){return Object(i["a"])({url:"/app/subscribed/list?"+t,method:"get"})}function f(t){return Object(i["a"])({url:"/app/api/queryApiList",method:"post",data:t})}function g(t,e){return Object(i["a"])({url:"/app/appVersion/"+t,method:"post",data:e})}function m(t){return Object(i["a"])({url:"/app/appVersion/"+t,method:"get"})}function b(t){return Object(i["a"])({url:"/gateway/log?"+t,method:"get"})}function v(t){return Object(i["a"])({url:"/app/subscribed/"+t,method:"get"})}function _(t){return Object(i["a"])({url:"/app/api/"+t,method:"get"})}function y(t){return Object(i["a"])({url:"/app/plugin",method:"post",data:t})}function w(){return Object(i["a"])({url:"/app/plugin/randomKey",method:"get"})}function C(t){return Object(i["a"])({url:"/app/rateLimit/save",method:"post",data:t})}function O(t){return Object(i["a"])({url:"/app/plugin",method:"put",data:t})}function j(t){return Object(i["a"])({url:"/app/unSubscribe/"+t,method:"post"})}function S(t,e){return Object(i["a"])({url:"/app/plugin/"+t+"/"+e,method:"get"})}function x(t){return Object(i["a"])({url:"/app/rateLimit/open?appId="+t,method:"post"})}function L(t){return Object(i["a"])({url:"/app/rateLimit/close?appId="+t,method:"post"})}},ceef:function(t,e,a){},de47:function(t,e,a){"use strict";a("421b")}}]);