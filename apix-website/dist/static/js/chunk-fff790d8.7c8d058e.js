(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fff790d8"],{"2df9":function(e,t,a){"use strict";a("a8c7")},"376e":function(e,t,a){"use strict";a("ce27")},"6c0b":function(e,t,a){},a8c7:function(e,t,a){},ce27:function(e,t,a){},ea1d:function(e,t,a){"use strict";a("6c0b")},f77e:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"he_height"},[a("div",{staticClass:"list_top"},[a("div",{staticClass:"list_title"},[e._v(e._s(e.serveAllMeaasge.appName))]),a("div",{staticClass:"list_search"},[a("el-button",{staticClass:"td-but",attrs:{type:"primary",size:"small"},on:{click:e.unSubscribe}},[e._v("退订")])],1)]),a("div",{staticClass:"secondTitle"},[e._v(e._s(e.serveAllMeaasge.appDescription))]),a("div",{staticClass:"status"},[e._m(0),a("div",{staticClass:"time"},[a("div",[a("span",[e._v("发布时间 : ")]),a("span",[e._v(e._s(e.serveAllMeaasge.appPublishDate))])]),a("div",[a("span",[e._v("订阅时间 : ")]),a("span",[e._v(e._s(e.serveAllMeaasge.subscribeDate))])])])]),a("div",{staticClass:"tabsMessage"},[a("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"API详情",name:"first"}},[a("api-detail",{attrs:{list:e.versionList,defaultApiList:e.apiList,gatewayDomain:e.serveAllMeaasge.gatewayDomain},on:{changeVersion:e.changeVersion}})],1),a("el-tab-pane",{attrs:{label:"插件详情",name:"second"}},[a("plug-in")],1)],1)],1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left-span"},[a("span",[e._v("发布者 : ")]),e._v(" "),a("span",[e._v(" 博冀信息")])])}],l=(a("fcb4"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"he_main"},[a("el-row",{staticStyle:{height:"100%"}},[a("el-col",{staticStyle:{height:"100%"},attrs:{span:4}},[a("div",{staticClass:"apiList"},[a("el-select",{attrs:{size:"mini",placeholder:"请选择"},on:{change:e.apiValueChange},model:{value:e.apiValue,callback:function(t){e.apiValue=t},expression:"apiValue"}},e._l(e.list,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._l(e.defaultApiList,(function(t,s){return a("p",{key:s,class:e.classList[s],on:{click:function(a){return e.choseApi(t,s)}}},[e._v(" "+e._s(t.apiName)+" ")])}))],2)]),a("el-col",{staticStyle:{height:"100%"},attrs:{span:20}},[a("div",{staticClass:"apiMessage"},[a("div",{staticClass:"api-info"},[a("div",{staticClass:"title"},[e._v(e._s(e.apiMessageAll.apiName))]),a("div",{staticClass:"secondTitle"},[e._v(e._s(e.apiMessageAll.description))])]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color"},[e._v("调用路径 : ")]),a("span",{staticClass:"conten-color"},[e._v(e._s(e.gatewayDomain+e.apiMessageAll.url))]),a("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.gatewayDomain+e.apiMessageAll.url,expression:"gatewayDomain + apiMessageAll.url",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"el-icon-copy-document icon-color"})]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color agrement"},[e._v("协议类型 : ")]),a("span",{staticClass:"conten-color"},[e._v(e._s(e.apiMessageAll.protocol))])]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color"},[e._v("请求方式 : ")]),a("span",{staticClass:"conten-color"},[e._v(e._s(e.apiMessageAll.requestMethod))])]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color"},[e._v("请求参数 : ")]),a("div",{staticClass:"table_box table_top"},[a("el-table",{attrs:{data:e.table,"empty-text":"暂无数据","row-style":{height:"50px"},"highlight-current-row":"","header-cell-style":{"font-weight":400,color:"#494E6A"}}},[a("el-table-column",{attrs:{prop:"parame",label:"名称"}}),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),a("el-table-column",{attrs:{prop:"isHaveto",label:"是否必选"}}),a("el-table-column",{attrs:{prop:"describe",label:"描述"}}),a("el-table-column",{attrs:{prop:"default",label:"默认值"}})],1)],1)]),a("div",{staticClass:"api-info"},[a("span",{staticClass:"label-color"},[e._v("状态码 : ")]),a("div",{staticClass:"table_box table_top"},[a("el-table",{attrs:{data:e.statusTable,"empty-text":"暂无数据","row-style":{height:"50px"},"highlight-current-row":"","header-cell-style":{"font-weight":400,color:"#494E6A"}}},[a("el-table-column",{attrs:{prop:"statusCode",label:"状态码",width:"200"}}),a("el-table-column",{attrs:{prop:"describe",label:"描述"}})],1)],1)])])])],1)],1)}),n=[],o=a("a1ad"),r={data:function(){return{table:[],apiOptions:[],apiValue:"",classList:[],appCode:"",apiMessageAll:{},statusTable:[{statusCode:200,describe:"操作成功"},{statusCode:400,describe:"操作失败"}]}},props:["list","defaultApiList","gatewayDomain"],created:function(){this.appCode=this.$route.params.appCode},mounted:function(){},methods:{choseApi:function(e,t){this.classList=[];for(var a=0;a<this.defaultApiList.length;a++)a===t?this.classList.push("hitClass"):this.classList.push("nohit");var s=e.apiId;this.getapiMessage(s)},getapiMessage:function(e){var t=this;Object(o["c"])(e).then((function(e){200===e.code&&(t.apiMessageAll=e.data,t.table=JSON.parse(e.data.requestParams))}))},apiValueChange:function(){var e=this,t={appCode:this.appCode,appVersionId:this.apiValue};Object(o["q"])(t).then((function(t){200===t.code&&e.$emit("changeVersion",t.data.apiList)}))},onCopy:function(){this.$message("复制成功")},onError:function(){this.$message("复制失败")}},watch:{list:function(){this.apiValue=this.list[0].value},defaultApiList:function(){this.classList=[];for(var e=0;e<this.defaultApiList.length;e++)0===e?this.classList.push("hitClass"):this.classList.push("nohit");var t=this.defaultApiList[0].apiId;this.getapiMessage(t)}}},p=r,c=(a("2df9"),a("2877")),u=Object(c["a"])(p,l,n,!1,null,"243844d5",null),d=u.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"plug-in auto"},[a("el-drawer",{attrs:{title:"日志详情",visible:e.drawer,direction:e.direction,"before-close":e.handleClose,size:"50%"},on:{"update:visible":function(t){e.drawer=t}}},[a("json-view",{attrs:{data:this.historylist,theme:"index",deep:2,fontSize:12}})],1),a("div",{staticClass:"table_box mode-margin"},[a("p",[e._v("已添加插件")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.versionLoading,expression:"versionLoading"}],attrs:{data:e.pluginsTable,"empty-text":"暂无数据","row-style":{height:"50px"},"highlight-current-row":"","header-cell-style":{"font-weight":400,"font-size":"16px",color:"#1D1C35"}}},[a("el-table-column",{attrs:{prop:"appName",label:"插件名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(" "+e._s(e._f("plugName")(t.row.pluginType))+" ")])]}}])}),a("el-table-column",{attrs:{prop:"appCode",label:"启用状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{class:0===t.row.enabled?"noenable":"enabled"},[e._v(" "+e._s(0===t.row.enabled?"未启用":"已启用")+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.getPluginMessage(t.row)}}},[e._v("查看")])]}}])})],1)],1),e.ishttplogShow?a("div",{staticClass:"table_box mode-margin"},[e._m(0),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.requestLoding,expression:"requestLoding"}],attrs:{data:e.requestTable,"empty-text":"暂无数据","row-style":{height:"50px"},"highlight-current-row":"","header-cell-style":{"font-weight":400,"font-size":"16px",color:"#1D1C35"}}},[a("el-table-column",{attrs:{prop:"requestUri",label:"请求地址",width:"280px","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"httpMethod",label:"请求方式"}}),a("el-table-column",{attrs:{prop:"remoteIp",label:"客户端IP"}}),a("el-table-column",{attrs:{prop:"serverIp",label:"服务端IP"}}),a("el-table-column",{attrs:{prop:"consumingTime",label:"耗时(ms)"}}),a("el-table-column",{attrs:{label:"调用时间",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("formatDate")(t.row.eventTime)))])]}}],null,!1,1610164273)}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.getlogs(t.row)}}},[e._v("查看")])]}}],null,!1,2228775102)})],1),a("el-pagination",{staticClass:"list-pagination",attrs:{background:"","current-page":e.currentPageRequest,layout:"prev, pager, next",total:e.totalRequest},on:{"update:currentPage":function(t){e.currentPageRequest=t},"update:current-page":function(t){e.currentPageRequest=t},"current-change":e.handleCurrentChangeRequest}})],1):e._e(),e.iserrlogShow?a("div",{staticClass:"table_box mode-margin"},[e._m(1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.errorLoading,expression:"errorLoading"}],attrs:{data:e.ErrorTable,"row-style":{height:"50px"},"highlight-current-row":"","header-cell-style":{"font-weight":400,"font-size":"16px",color:"#1D1C35"}}},[a("el-table-column",{attrs:{prop:"requestUri",label:"请求地址",width:"280px","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"httpMethod",label:"请求方式"}}),a("el-table-column",{attrs:{prop:"remoteIp",label:"客户端IP"}}),a("el-table-column",{attrs:{prop:"serverIp",label:"服务端IP"}}),a("el-table-column",{attrs:{prop:"consumingTime",label:"耗时(ms)"}}),a("el-table-column",{attrs:{label:"调用时间",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("formatDate")(t.row.eventTime)))])]}}],null,!1,1610164273)}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.getlogs(t.row)}}},[e._v("查看")])]}}],null,!1,2228775102)})],1),a("el-pagination",{staticClass:"list-pagination",attrs:{background:"","current-page":e.currentPageError,layout:"prev, pager, next",total:e.totalError},on:{"update:currentPage":function(t){e.currentPageError=t},"update:current-page":function(t){e.currentPageError=t},"current-change":e.handleCurrentChangeError}})],1):e._e(),a("plugins-message",{attrs:{drawerProps:e.drawerIsshow,pluginId:e.pluginId},on:{showChange:e.showChange}})],1)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"serve-table"},[a("div",{staticClass:"table-tilelong"},[e._v("请求日志")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"serve-table"},[a("div",{staticClass:"table-tilelong"},[e._v("错误日志")])])}],b=a("080b"),v=a("63b0"),f={components:{jsonView:b["a"],pluginsMessage:v["a"]},filters:{plugName:function(e){var t={jwt:"Jwt-auth",base_auth:"basic_auth",oauth2:"OAuth2.0",black_list_ip:"IP 黑名单控制",white_list_ip:"IP 白名单控制",cors:"cors跨域",sign:"防篡改签名",replay_attacks:"防网络重放攻击",error_log:"error log",http_log:"http log",sentinel:"sentinel",gzip:"gzip",proxy_cache:"proxy_cache",real_ip:"real_ip",response_rewrite:"response-rewrite"};return e?t[e]:""}},data:function(){return{iserrlogShow:!1,ishttplogShow:!1,drawerIsshow:!1,historylist:{},direction:"rtl",drawer:!1,ErrorTable:[],pluginsTable:[],appCode:"",versionLoading:!1,appId:"",requestLoding:!1,requestTable:[],currentPageRequest:1,totalRequest:0,errorLoading:!1,currentPageError:1,totalError:0,pluginId:""}},created:function(){this.appCode=this.$route.params.appCode,this.getServeDeatil(),this.getLog("request"),this.getLog("error")},methods:{getPluginMessage:function(e){this.pluginId=e.id,this.drawerIsshow=!0},showChange:function(){this.drawerIsshow=!1},handleClose:function(e){e()},getlogs:function(e){this.drawer=!0,this.historylist=e},getServeDeatil:function(){var e=this;this.versionLoading=!0,Object(o["t"])(this.appCode).then((function(t){if(200===t.code){e.versionLoading=!1,e.appId=t.data.appId,e.pluginsTable=t.data.plugins,e.iserrlogShow=!1,e.ishttplogShow=!1;for(var a=0;a<t.data.plugins.length;a++)"http_log"===t.data.plugins[a].pluginType&&(1===t.data.plugins[a].enabled?e.ishttplogShow=!0:e.ishttplogShow=!1),"error_log"===t.data.plugins[a].pluginType&&(1===t.data.plugins[a].enabled?e.iserrlogShow=!0:e.iserrlogShow=!1)}}))},enabledChange:function(e){var t=this;if("sentinel"===e.pluginType)0===e.enabled?Object(o["m"])(e.appId).then((function(a){if(200===a.code){var s={appId:e.appId,appCode:e.appCode,pluginType:e.pluginType,enabled:e.enabled,id:e.id};Object(o["p"])(s).then((function(e){200===e.code&&t.getServeDeatil()}))}})):Object(o["f"])(e.appId).then((function(a){if(200===a.code){var s={appId:e.appId,appCode:e.appCode,pluginType:e.pluginType,enabled:e.enabled,id:e.id};Object(o["p"])(s).then((function(e){200===e.code&&t.getServeDeatil()}))}}));else{var a={appId:e.appId,appCode:e.appCode,pluginType:e.pluginType,enabled:e.enabled,id:e.id};Object(o["p"])(a).then((function(e){200===e.code&&t.getServeDeatil()}))}},pluginConfig:function(e){this.$router.push("/serve/serveDetail/pluginConfig/"+e.pluginType+"?appcode="+e.appCode+"&appid="+e.appId+"&id="+e.id+"&pluginParams=true")},getLog:function(e){var t=this;if("request"===e){this.requestLoding=!0;var a="appCode="+this.appCode+"&limit=10&offset="+this.currentPageRequest+"&statusCode=200";Object(o["l"])(a).then((function(e){200===e.code&&(t.requestTable=e.data.logList,t.requestLoding=!1,t.totalRequest=e.data.total)}))}else{var s="appCode="+this.appCode+"&limit=10&offset="+this.currentPageError+"&statusCode=500";this.errorLoading=!0,Object(o["l"])(s).then((function(e){200===e.code&&(t.errorLoading=!1,t.ErrorTable=e.data.logList,t.totalError=e.data.total)}))}},handleCurrentChangeRequest:function(e){this.currentPageRequest=e,this.getLog("request")},handleCurrentChangeError:function(e){this.currentPageError=e,this.getLog("error")},goConfig:function(e){return"jwt"===e||"oauth2"===e||"black_list_ip"===e||"white_list_ip"===e||"cors"===e||"sign"===e||"sentinel"===e}}},m=f,_=(a("ea1d"),Object(c["a"])(m,g,h,!1,null,"6b37497e",null)),C=_.exports,w={data:function(){return{activeName:"first",appCode:"",serveAllMeaasge:{},loading:!1,versionList:[],apiList:[]}},created:function(){this.appCode=this.$route.params.appCode,this.getSubscribed()},components:{apiDetail:d,plugIn:C},methods:{handleClick:function(){},getSubscribed:function(){var e=this;this.loading=!0,Object(o["w"])(this.appCode).then((function(t){if(200===t.code){e.loading=!1,e.serveAllMeaasge=t.data,e.versionList=[];for(var a=0;a<t.data.appVersion.length;a++)e.versionList.push({label:t.data.appVersion[a].version,value:t.data.appVersion[a].id});e.apiList=t.data.appVersion[0].apiList}}))},changeVersion:function(e){this.apiList=e},unSubscribe:function(){var e=this;this.$confirm("确认退订服务"+this.serveAllMeaasge.appName+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["k"])(e.appCode).then((function(t){200===t.code&&e.$router.push({path:"/serve/subscribe"})}))})).catch((function(){}))}}},y=w,L=(a("376e"),Object(c["a"])(y,s,i,!1,null,"78a09efe",null));t["default"]=L.exports}}]);