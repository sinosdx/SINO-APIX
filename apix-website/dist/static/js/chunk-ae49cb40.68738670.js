(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae49cb40"],{"0ca7":function(e,t,i){},2863:function(e,t,i){"use strict";i("8da5")},"2c28":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"titleFont"},[e._v(" "+e._s(e._f("plugName")(e.pluginName))+" ")]),"jwt"===e.pluginName?i("jwt-auth"):"oauth2"===e.pluginName?i("oauth"):"sign"===e.pluginName?i("sign"):"black_list_ip"===e.pluginName?i("black"):"white_list_ip"===e.pluginName?i("white"):"cors"===e.pluginName?i("cors"):i("sentinel")],1)},r=[],n=(i("fcb4"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"formBox"},[i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"top"}},[i("el-form-item",{attrs:{label:"config.Header",prop:"header"}},[i("el-input",{staticClass:"inputWidth",attrs:{placeholder:"",disabled:!0,clearable:""},model:{value:e.ruleForm.header,callback:function(t){e.$set(e.ruleForm,"header",t)},expression:"ruleForm.header"}})],1),i("el-form-item",{attrs:{label:"config.key",prop:"key"}},[i("el-input",{staticClass:"inputWidth",attrs:{placeholder:"",disabled:!0,clearable:""},model:{value:e.ruleForm.key,callback:function(t){e.$set(e.ruleForm,"key",t)},expression:"ruleForm.key"}})],1),i("el-form-item",{attrs:{label:"config.Maximum (过期时间ms)",prop:"maximum"}},[i("el-input-number",{attrs:{min:1},on:{change:e.handleChange},model:{value:e.ruleForm.maximum,callback:function(t){e.$set(e.ruleForm,"maximum",t)},expression:"ruleForm.maximum"}})],1),i("div",{staticClass:"bottom_button_a"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.buttonFont))]),i("el-button",{attrs:{size:"small"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1)}),o=[],l=i("a1ad"),s={data:function(){return{appCode:"",appId:"",id:"",pluginParams:{},enabled:0,ruleForm:{header:"authorizatuion",key:"iss",maximum:"7200000"},buttonFont:"添加",rules:{header:[{required:!0,message:"config.Header为必选项",trigger:"blur"}],key:[{required:!0,message:"config.key为必选项",trigger:"blur"}],maximum:[{required:!0,message:"过期时间为必选项",trigger:"blur"}]}}},created:function(){var e=this;this.appCode=this.$route.query.appcode,this.appId=this.$route.query.appid,this.$route.query.pluginParams?(this.id=this.$route.query.id,Object(l["i"])(this.id,this.appCode).then((function(t){if(200===t.code){e.enabled=t.data.enabled;var i=JSON.parse(t.data.pluginParams);e.ruleForm={header:i.HeaderNames,key:i.keyClaimName,maximum:i.TokenExpiration}}})),this.buttonFont="应用"):this.buttonFont="添加"},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;if("添加"===t.buttonFont){var i={HeaderNames:t.ruleForm.header,keyClaimName:t.ruleForm.key,TokenExpiration:t.ruleForm.maximum},a={pluginType:"jwt",appCode:t.appCode,appId:t.appId,pluginParams:JSON.stringify(i)};Object(l["m"])(a).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}else{var r={HeaderNames:t.ruleForm.header,keyClaimName:t.ruleForm.key,TokenExpiration:t.ruleForm.maximum},n={pluginType:"jwt",id:t.id,appCode:t.appCode,appId:t.appId,enabled:t.enabled,pluginParams:JSON.stringify(r)};Object(l["o"])(n).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}}))},resetForm:function(){this.$router.push({path:"/serve/serveDetail/plug-in?appcode="+this.appCode+"&appid="+this.appId})},handleChange:function(e){}}},p=s,u=i("2877"),d=Object(u["a"])(p,n,o,!1,null,null,null),c=d.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"formBox"},[i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"top"}},[i("el-form-item",{attrs:{label:"Provision Key",prop:"ProvisionKey"}},[i("el-input",{staticClass:"inputWidth",attrs:{placeholder:"",clearable:""},model:{value:e.ruleForm.ProvisionKey,callback:function(t){e.$set(e.ruleForm,"ProvisionKey",t)},expression:"ruleForm.ProvisionKey"}})],1),i("el-form-item",{attrs:{label:"Token Expiration",prop:"TokenExpiration"}},[i("el-input-number",{attrs:{min:1},on:{change:e.handleChange},model:{value:e.ruleForm.TokenExpiration,callback:function(t){e.$set(e.ruleForm,"TokenExpiration",t)},expression:"ruleForm.TokenExpiration"}})],1),i("el-form-item",{attrs:{prop:"timeout"}},[i("el-checkbox",{attrs:{disabled:""},model:{value:e.ruleForm.EnableClientCredentials,callback:function(t){e.$set(e.ruleForm,"EnableClientCredentials",t)},expression:"ruleForm.EnableClientCredentials"}},[e._v("客户端认证")])],1),i("el-form-item",{attrs:{label:"Refresh Token Expiration",prop:"RefreshTokenExpiration"}},[i("el-input-number",{attrs:{min:1},on:{change:e.handleChange},model:{value:e.ruleForm.RefreshTokenExpiration,callback:function(t){e.$set(e.ruleForm,"RefreshTokenExpiration",t)},expression:"ruleForm.RefreshTokenExpiration"}})],1),i("div",{staticClass:"bottom_button_a"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.buttonFont))]),i("el-button",{attrs:{size:"small"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1)},h=[],f={data:function(){return{id:"",appCode:"",appId:"",buttonFont:"添加",enabled:0,ruleForm:{ProvisionKey:"",EnableClientCredentials:!0,TokenExpiration:"7200",RefreshTokenExpiration:"1209600"},rules:{ProvisionKey:[{required:!0,message:"请输入ProvisionKey",trigger:"blur"}],TokenExpiration:[{required:!0,message:"请输入TokenExpiration",trigger:"blur"}],RefreshTokenExpiration:[{required:!0,message:"请输入RefreshTokenExpiration",trigger:"blur"}]}}},created:function(){var e=this;this.appCode=this.$route.query.appcode,this.appId=this.$route.query.appid,this.$route.query.pluginParams?(this.id=this.$route.query.id,Object(l["i"])(this.id,this.appCode).then((function(t){if(200===t.code){e.enabled=t.data.enabled;var i=JSON.parse(t.data.pluginParams);e.ruleForm=i}})),this.buttonFont="应用"):this.buttonFont="添加"},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;if("添加"===t.buttonFont){var i={pluginType:"oauth2",appCode:t.appCode,appId:t.appId,pluginParams:JSON.stringify(t.ruleForm)};Object(l["m"])(i).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}else{var a={pluginType:"oauth2",appCode:t.appCode,appId:t.appId,id:t.id,enabled:t.enabled,pluginParams:JSON.stringify(t.ruleForm)};Object(l["o"])(a).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}}))},resetForm:function(){this.$router.push({path:"/serve/serveDetail/plug-in?appcode="+this.appCode+"&appid="+this.appId})},handleChange:function(e){}}},b=f,v=Object(u["a"])(b,m,h,!1,null,null,null),g=v.exports,F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"formBox"},[i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"top"}},[i("el-form-item",{attrs:{label:"config.key",prop:"appKey"}},[i("el-input",{staticClass:"inputWidth",attrs:{placeholder:"",clearable:""},model:{value:e.ruleForm.appKey,callback:function(t){e.$set(e.ruleForm,"appKey",t)},expression:"ruleForm.appKey"}}),i("span",{staticClass:"show-but",on:{click:e.getrandomKey}},[e._v("系统生成")])],1),i("el-form-item",{attrs:{label:"config.Secret",prop:"appSecret"}},[i("el-input",{staticClass:"inputWidth",attrs:{placeholder:"",clearable:""},model:{value:e.ruleForm.appSecret,callback:function(t){e.$set(e.ruleForm,"appSecret",t)},expression:"ruleForm.appSecret"}})],1),i("el-form-item",{attrs:{label:"再次输入Secret",prop:"appSecret2"}},[i("el-input",{staticClass:"inputWidth",attrs:{placeholder:"",clearable:""},model:{value:e.ruleForm.appSecret2,callback:function(t){e.$set(e.ruleForm,"appSecret2",t)},expression:"ruleForm.appSecret2"}})],1),i("div",{staticClass:"bottom_button_a"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.buttonFont))]),i("el-button",{attrs:{size:"small"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1)},C=[],y={data:function(){var e=this,t=function(t,i,a){""===i?a(new Error("请再次输入请输入config.Secret")):i!==e.ruleForm.appSecret?a(new Error("两次输入请输入config.Secret不一致!")):a()};return{appCode:"",appId:"",id:"",enabled:0,buttonFont:"添加",ruleForm:{appKey:"",appSecret:"",appSecret2:""},rules:{appSecret2:[{validator:t,trigger:"blur"}],appSecret:[{required:!0,message:"请输入config.key",trigger:"blur"}],appKey:[{required:!0,message:"请输入config.Secret",trigger:"blur"}]}}},created:function(){var e=this;this.appCode=this.$route.query.appcode,this.appId=this.$route.query.appid,this.$route.query.pluginParams?(this.id=this.$route.query.id,Object(l["i"])(this.id,this.appCode).then((function(t){if(200===t.code){e.enabled=t.data.enabled;var i=JSON.parse(t.data.pluginParams);e.ruleForm={appKey:i.appKey,appSecret:i.appSecret,appSecret2:i.appSecret}}})),this.buttonFont="应用"):this.buttonFont="添加"},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;if("添加"===t.buttonFont){var i={appKey:t.ruleForm.appKey,appSecret:t.ruleForm.appSecret},a={pluginType:"sign",appCode:t.appCode,appId:t.appId,pluginParams:JSON.stringify(i)};Object(l["m"])(a).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}else{var r={appKey:t.ruleForm.appKey,appSecret:t.ruleForm.appSecret},n={pluginType:"sign",appCode:t.appCode,appId:t.appId,id:t.id,enabled:t.enabled,pluginParams:JSON.stringify(r)};Object(l["o"])(n).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}}))},resetForm:function(){this.$router.push({path:"/serve/serveDetail/plug-in?appcode="+this.appCode+"&appid="+this.appId})},getrandomKey:function(){var e=this;Object(l["q"])().then((function(t){200===t.code&&(e.ruleForm.appKey=t.data)}))}}},_=y,x=(i("8c8d"),Object(u["a"])(_,F,C,!1,null,"a5c93f3a",null)),k=x.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"formBox"},[i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"top"}},[i("el-form-item",{attrs:{label:"ip黑名单",prop:"black_list_ip"}},[i("el-input",{staticStyle:{width:"48%"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},placeholder:"请输入需要控制访问的IP,多个IP需要用英文分号分隔"},model:{value:e.ruleForm.black_list_ip,callback:function(t){e.$set(e.ruleForm,"black_list_ip",t)},expression:"ruleForm.black_list_ip"}})],1),i("div",{staticClass:"bottom_button_a"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.buttonFont))]),i("el-button",{attrs:{size:"small"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1)},w=[],I={data:function(){return{appCode:"",appId:"",id:"",enabled:0,buttonFont:"添加",ruleForm:{black_list_ip:""},rules:{black_list_ip:[{required:!0,message:"请输入ip或者域名",trigger:"blur"}]}}},created:function(){var e=this;this.appCode=this.$route.query.appcode,this.appId=this.$route.query.appid,this.$route.query.pluginParams?(this.id=this.$route.query.id,Object(l["i"])(this.id,this.appCode).then((function(t){if(200===t.code){e.enabled=t.data.enabled;var i=JSON.parse(t.data.pluginParams);e.ruleForm=i}})),this.buttonFont="应用"):this.buttonFont="添加"},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;if("添加"===t.buttonFont){var i={pluginType:"black_list_ip",appCode:t.appCode,appId:t.appId,pluginParams:JSON.stringify(t.ruleForm)};Object(l["m"])(i).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}else{var a={pluginType:"black_list_ip",id:t.id,enabled:t.enabled,appCode:t.appCode,appId:t.appId,pluginParams:JSON.stringify(t.ruleForm)};Object(l["o"])(a).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}}))},resetForm:function(){this.$router.push({path:"/serve/serveDetail/plug-in?appcode="+this.appCode+"&appid="+this.appId})}}},$=I,S=(i("44d1"),Object(u["a"])($,O,w,!1,null,"b85c0688",null)),j=S.exports,P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"formBox"},[i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"top"}},[i("el-form-item",{attrs:{label:"ip白名单",prop:"white_list_ip"}},[i("el-input",{staticStyle:{width:"48%"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},placeholder:"请输入需要控制访问的IP,多个IP需要用英文分号分隔"},model:{value:e.ruleForm.white_list_ip,callback:function(t){e.$set(e.ruleForm,"white_list_ip",t)},expression:"ruleForm.white_list_ip"}})],1),i("div",{staticClass:"bottom_button_a"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.buttonFont))]),i("el-button",{attrs:{size:"small"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1)},N=[],q={data:function(){return{appCode:"",appId:"",id:"",enabled:0,buttonFont:"添加",ruleForm:{white_list_ip:""},rules:{white_list_ip:[{required:!0,message:"请输入ip或者域名",trigger:"blur"}]}}},created:function(){var e=this;this.appCode=this.$route.query.appcode,this.appId=this.$route.query.appid,this.$route.query.pluginParams?(this.id=this.$route.query.id,Object(l["i"])(this.id,this.appCode).then((function(t){if(200===t.code){e.enabled=t.data.enabled;var i=JSON.parse(t.data.pluginParams);e.ruleForm=i}})),this.buttonFont="应用"):this.buttonFont="添加"},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;if("添加"===t.buttonFont){var i={pluginType:"white_list_ip",appCode:t.appCode,appId:t.appId,pluginParams:JSON.stringify(t.ruleForm)};Object(l["m"])(i).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}else{var a={pluginType:"white_list_ip",appCode:t.appCode,appId:t.appId,id:t.id,enabled:t.enabled,pluginParams:JSON.stringify(t.ruleForm)};Object(l["o"])(a).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}}))},resetForm:function(){this.$router.push({path:"/serve/serveDetail/plug-in?appcode="+this.appCode+"&appid="+this.appId})}}},T=q,E=(i("e8f4"),Object(u["a"])(T,P,N,!1,null,"3f1c535c",null)),H=E.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"formBox"},[i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"top"}},[i("el-form-item",{attrs:{label:"来源 Origin",prop:"allowOrigins"}},[i("el-input",{staticStyle:{width:"48%"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},placeholder:"允许所有填*,以http://或https://开头,多个Origin用英文逗号分隔"},model:{value:e.ruleForm.allowOrigins,callback:function(t){e.$set(e.ruleForm,"allowOrigins",t)},expression:"ruleForm.allowOrigins"}})],1),i("el-form-item",{attrs:{label:"操作 Method",prop:"allowMethods"}},[i("el-checkbox-group",{attrs:{min:1,max:7},model:{value:e.ruleForm.allowMethods,callback:function(t){e.$set(e.ruleForm,"allowMethods",t)},expression:"ruleForm.allowMethods"}},e._l(e.methodsOptions,(function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1),i("el-form-item",{attrs:{label:"Allow-Headers",prop:"allowHeaders"}},[i("el-input",{staticStyle:{width:"48%"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},placeholder:"请输入允许的Header,多个Header间用英文逗号分隔,允许所有的Header则填*"},model:{value:e.ruleForm.allowHeaders,callback:function(t){e.$set(e.ruleForm,"allowHeaders",t)},expression:"ruleForm.allowHeaders"}})],1),i("el-form-item",{attrs:{label:"All-exposeHeaders",prop:"exposeHeaders"}},[i("el-input",{staticStyle:{width:"48%"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},placeholder:"请输入允许暴露给XHLHttpRequest对象的Header,多个Header间用英文逗号分隔,允许所有的Header则填*"},model:{value:e.ruleForm.exposeHeaders,callback:function(t){e.$set(e.ruleForm,"exposeHeaders",t)},expression:"ruleForm.exposeHeaders"}})],1),i("el-form-item",[i("el-checkbox",{model:{value:e.ruleForm.allowCredentials,callback:function(t){e.$set(e.ruleForm,"allowCredentials",t)},expression:"ruleForm.allowCredentials"}},[e._v("允许Cookie")])],1),i("el-form-item",{attrs:{label:"超时 Max-Age(s)",prop:"maxAge"}},[i("el-input-number",{attrs:{min:1},model:{value:e.ruleForm.maxAge,callback:function(t){e.$set(e.ruleForm,"maxAge",t)},expression:"ruleForm.maxAge"}})],1),i("div",{staticClass:"bottom_button_a"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.buttonFont))]),i("el-button",{attrs:{size:"small"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1)},A=[],D=(i("ac1f"),i("1276"),i("d3b7"),i("25f0"),{data:function(){return{appCode:"",appId:"",id:"",enabled:0,buttonFont:"添加",methodsOptions:["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"],ruleForm:{allowOrigins:"",allowHeaders:"",exposeHeaders:"",allowMethods:["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"],allowCredentials:!1,maxAge:"5"},rules:{allowOrigins:[{required:!0,message:"请输入来源Origins",trigger:"blur"}],allowHeaders:[{required:!0,message:"请输入Allow-Headers",trigger:"blur"}],exposeHeaders:[{required:!0,message:"请输入来源exposeHeaders",trigger:"blur"}]}}},created:function(){var e=this;this.appCode=this.$route.query.appcode,this.appId=this.$route.query.appid,this.$route.query.pluginParams?(this.id=this.$route.query.id,Object(l["i"])(this.id,this.appCode).then((function(t){if(200===t.code){e.enabled=t.data.enabled;var i=JSON.parse(t.data.pluginParams);i.allowMethods=i.allowMethods.split(","),e.ruleForm=i}})),this.buttonFont="应用"):this.buttonFont="添加"},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;if("添加"===t.buttonFont){var i={allowOrigins:t.ruleForm.allowOrigins,allowHeaders:t.ruleForm.allowHeaders,exposeHeaders:t.ruleForm.exposeHeaders,allowMethods:t.ruleForm.allowMethods.toString(),allowCredentials:t.ruleForm.allowCredentials,maxAge:t.ruleForm.maxAge},a={pluginType:"cors",appCode:t.appCode,appId:t.appId,pluginParams:JSON.stringify(i)};Object(l["m"])(a).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}else{var r={allowOrigins:t.ruleForm.allowOrigins,allowHeaders:t.ruleForm.allowHeaders,exposeHeaders:t.ruleForm.exposeHeaders,allowMethods:t.ruleForm.allowMethods.toString(),allowCredentials:t.ruleForm.allowCredentials,maxAge:t.ruleForm.maxAge},n={pluginType:"cors",appCode:t.appCode,appId:t.appId,id:t.id,enabled:t.enabled,pluginParams:JSON.stringify(r)};Object(l["o"])(n).then((function(e){200===e.code&&t.$router.push({path:"/serve/serveDetail/"+t.appCode})}))}}))},resetForm:function(){this.$router.push({path:"/serve/serveDetail/plug-in?appcode="+this.appCode+"&appid="+this.appId})}}}),J=D,K=(i("f76f"),Object(u["a"])(J,L,A,!1,null,"4ee68f5d",null)),V=K.exports,z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"s_main"},[i("p",[e._v("服务控流配置")]),i("p",{staticClass:"s_title"},[e._v(" 服务控制时长 "),i("span",{staticStyle:{color:"red"}},[e._v("*")]),i("el-tooltip",{attrs:{effect:"light",content:"单位时间内当前服务的请求次数上限",placement:"right"}},[i("i",{staticClass:"el-icon-warning-outline s_icon"})])],1),i("div",{staticStyle:{"margin-top":"20px"}},[i("el-input-number",{attrs:{min:1},on:{change:e.handleChange},model:{value:e.servetime,callback:function(t){e.servetime=t},expression:"servetime"}}),i("el-select",{staticStyle:{width:"80px","margin-left":"5px"},model:{value:e.servetimeValue,callback:function(t){e.servetimeValue=t},expression:"servetimeValue"}},e._l(e.serveOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),i("p",{staticClass:"s_title"},[e._v(" 服务控流值 "),i("el-tooltip",{attrs:{effect:"light",content:"当前服务能够被访问的次数上限",placement:"right"}},[i("i",{staticClass:"el-icon-warning-outline s_icon"})])],1),i("div",{staticStyle:{"margin-top":"20px"}},[i("el-input-number",{attrs:{min:1},on:{change:e.handleChange},model:{value:e.servenum,callback:function(t){e.servenum=t},expression:"servenum"}})],1),i("p",{staticStyle:{"margin-top":"20px"}},[e._v("API控流配置")]),i("div",{staticClass:"s_apiType"},[i("div",{staticClass:"one"},[e._v("API")]),i("div",{staticClass:"two"},[e._v("API控制时长")]),i("div",{staticClass:"three"},[e._v(" API控流值 "),i("el-tooltip",{attrs:{effect:"light",content:"单位时间内一个api能够被访问的次数上限",placement:"right"}},[i("i",{staticClass:"el-icon-warning-outline s_icon"})])],1)]),e._l(e.apiConfigList,(function(t,a){return i("div",{key:a,staticClass:"information"},[i("div",{staticClass:"one"},[i("el-select",{staticStyle:{width:"200px"},attrs:{"value-key":"apiName"},on:{change:function(t){return e.apiChose(a)}},model:{value:e.apivalueList[a],callback:function(t){e.$set(e.apivalueList,a,t)},expression:"apivalueList[index]"}},e._l(e.options,(function(e){return i("el-option",{key:e.apiId,attrs:{label:e.apiName,value:e}})})),1)],1),i("div",{staticClass:"two"},[i("el-input-number",{staticStyle:{"margin-left":"15px"},attrs:{min:1},on:{change:e.handleChange},model:{value:e.apitime[a],callback:function(t){e.$set(e.apitime,a,t)},expression:"apitime[index]"}}),i("el-select",{staticStyle:{width:"80px","margin-left":"5px"},model:{value:e.apitimeValue[a],callback:function(t){e.$set(e.apitimeValue,a,t)},expression:"apitimeValue[index]"}},e._l(e.serveOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),i("div",{staticClass:"three"},[i("el-input-number",{staticStyle:{"margin-left":"15px"},attrs:{min:1},on:{change:e.handleChange},model:{value:e.apiNum[a],callback:function(t){e.$set(e.apiNum,a,t)},expression:"apiNum[index]"}})],1),i("div",{staticClass:"four"},[0===a?i("el-button",{on:{click:e.apiConfigAdd}},[e._v("添加")]):e._e(),0!==a?i("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.apiConfigDel(a)}}},[e._v("删除")]):e._e()],1)])})),i("div",{staticClass:"bottom_button_a"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v(e._s(e.buttonFont))]),i("el-button",{attrs:{size:"small"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取消")])],1)],2)},R=[],U=(i("a434"),i("5f87")),M={data:function(){return{options:[],servetime:"1",servetimeValue:"1",servenum:"1",developerId:"",apiConfigList:[""],apivalueList:[""],apitime:["1"],apitimeValue:["1"],apiNum:["1"],serveOptions:[{value:"0",label:"秒"},{value:"1",label:"分"},{value:"2",label:"时"},{value:"3",label:"天"}],appCode:"",appId:"",id:"",enabled:0,buttonFont:"添加"}},created:function(){var e=this;this.developerId=Object(U["a"])("userId_api"),this.appCode=this.$route.query.appcode,this.appId=this.$route.query.appid,this.getApiList(),this.$route.query.pluginParams?(this.id=this.$route.query.id,Object(l["i"])(this.id,this.appCode).then((function(t){if(200===t.code){e.enabled=t.data.enabled;var i=JSON.parse(t.data.pluginParams);e.servetime=i[0].interval,e.servenum=i[0].count,e.servetimeValue=i[0].intervalUnit,e.apivalueList=[],e.apiConfigList=[],e.apitime=[],e.apiNum=[],e.apitimeValue=[],1===i.length&&(e.apiConfigList=["1"],e.apitime=["1"],e.apiNum=["1"],e.apitimeValue=["1"]);for(var a=1;a<i.length;a++)e.apiConfigList.push(""),e.apivalueList.push(i[a].apiId),e.apitime.push(i[a].interval),e.apiNum.push(i[a].count),e.apitimeValue.push(i[a].intervalUnit)}})),this.buttonFont="应用"):this.buttonFont="添加"},methods:{getApiList:function(){var e=this;Object(l["b"])(this.developerId).then((function(t){200===t.code&&(e.options=t.data.apiList)}))},apiChose:function(e){},submitForm:function(){var e=this;if("添加"===this.buttonFont){for(var t=[{appId:this.appId,count:this.servenum,interval:this.servetime,intervalUnit:this.servetimeValue,path:""}],i=[{appId:this.appId,count:this.servenum,interval:this.servetime,intervalUnit:this.servetimeValue,path:""}],a=0;a<this.apiConfigList.length;a++)""===this.apivalueList[a]||(i.push({appId:this.appId,path:this.apivalueList[a].apiUrl,count:this.apiNum[a],interval:this.apitime[a],intervalUnit:this.apitimeValue[a]}),t.push({appId:this.appId,path:this.apivalueList[a].apiUrl,count:this.apiNum[a],interval:this.apitime[a],intervalUnit:this.apitimeValue[a],apiId:this.apivalueList[a]}));Object(l["r"])(i).then((function(i){if(200===i.code){var a={pluginType:"sentinel",appCode:e.appCode,appId:e.appId,pluginParams:JSON.stringify(t)};Object(l["m"])(a).then((function(t){200===t.code&&e.$router.push({path:"/serve/serveDetail/"+e.appCode})}))}}))}else{for(var r=[{appId:this.appId,count:this.servenum,interval:this.servetime,intervalUnit:this.servetimeValue,path:""}],n=[{appId:this.appId,count:this.servenum,interval:this.servetime,intervalUnit:this.servetimeValue,path:""}],o=0;o<this.apiConfigList.length;o++)""===apivalueList[o]||(n.push({appId:this.appId,path:this.apivalueList[o].apiUrl,count:this.apiNum[o],interval:this.apitime[o],intervalUnit:this.apitimeValue[o]}),r.push({appId:this.appId,path:this.apivalueList[o].apiUrl,count:this.apiNum[o],interval:this.apitime[o],intervalUnit:this.apitimeValue[o],apiId:this.apivalueList[o]}));Object(l["r"])(n).then((function(t){if(200===t.code){var i={pluginType:"sentinel",appCode:e.appCode,appId:e.appId,id:e.id,enabled:e.enabled,pluginParams:JSON.stringify(r)};Object(l["o"])(i).then((function(t){200===t.code&&e.$router.push({path:"/serve/serveDetail/"+e.appCode})}))}}))}},resetForm:function(){this.$router.push({path:"/serve/serveDetail/plug-in?appcode="+this.appCode+"&appid="+this.appId})},handleChange:function(){},apiConfigAdd:function(){this.apiConfigList.push(""),this.apivalueList.push(""),this.apitime.push("0"),this.apitimeValue.push("0"),this.apiNum.push("0")},apiConfigDel:function(e){this.apiConfigList.splice(e,1)}}},B=M,W=(i("2863"),Object(u["a"])(B,z,R,!1,null,"211362b4",null)),G=W.exports,X={filters:{plugName:function(e){var t={jwt:"Jwt-auth",base_auth:"basic_auth",oauth2:"OAuth2.0",black_list_ip:"IP 黑名单控制",white_list_ip:"IP 白名单控制",cors:"cors跨域",sign:"防篡改签名",replay_attacks:"防网络重放攻击",error_log:"error log",http_log:"http log",sentinel:"sentinel",gzip:"gzip",proxy_cache:"proxy_cache",real_ip:"real_ip",response_rewrite:"response-rewrite"};return e?t[e]:""}},components:{jwtAuth:c,oauth:g,sign:k,black:j,white:H,cors:V,sentinel:G},data:function(){return{pluginName:"",ruleForm:{header:"",key:"",maximum:""},rules:{header:[{required:!0,message:"请输入版本名称",trigger:"blur"}],key:[{required:!0,message:"请输入版本描述",trigger:"blur"}],maximum:[{required:!0,message:"请选择关联API",trigger:"blur"}]}}},created:function(){this.pluginName=this.$route.params.plugincode},methods:{submitForm:function(){},resetForm:function(){},handleChange:function(e){}}},Q=X,Y=Object(u["a"])(Q,a,r,!1,null,null,null);t["default"]=Y.exports},"44d1":function(e,t,i){"use strict";i("a577")},"5a87":function(e,t,i){},"8c8d":function(e,t,i){"use strict";i("9d52")},"8da5":function(e,t,i){},"9d52":function(e,t,i){},a1ad:function(e,t,i){"use strict";i.d(t,"u",(function(){return r})),i.d(t,"g",(function(){return n})),i.d(t,"v",(function(){return o})),i.d(t,"s",(function(){return l})),i.d(t,"t",(function(){return s})),i.d(t,"d",(function(){return p})),i.d(t,"b",(function(){return u})),i.d(t,"n",(function(){return d})),i.d(t,"h",(function(){return c})),i.d(t,"a",(function(){return m})),i.d(t,"p",(function(){return h})),i.d(t,"e",(function(){return f})),i.d(t,"x",(function(){return b})),i.d(t,"k",(function(){return v})),i.d(t,"w",(function(){return g})),i.d(t,"c",(function(){return F})),i.d(t,"m",(function(){return C})),i.d(t,"q",(function(){return y})),i.d(t,"r",(function(){return _})),i.d(t,"o",(function(){return x})),i.d(t,"j",(function(){return k})),i.d(t,"i",(function(){return O})),i.d(t,"l",(function(){return w})),i.d(t,"f",(function(){return I}));var a=i("b775");function r(e){return Object(a["a"])({url:"/app/list?"+e,method:"get"})}function n(e){return Object(a["a"])({url:"/app/create",method:"post",data:e})}function o(e,t){return Object(a["a"])({url:"/app/"+e,method:"put",data:t})}function l(e){return Object(a["a"])({url:"/app/"+e,method:"delete"})}function s(e){return Object(a["a"])({url:"/app/"+e,method:"get"})}function p(e){return Object(a["a"])({url:"/app/data/"+e+"/appNum",method:"post"})}function u(e){return Object(a["a"])({url:"/app/api/list?developerId="+e,method:"get"})}function d(e,t){return Object(a["a"])({url:"/app/"+e+"/publish",method:"post",data:t})}function c(e){return Object(a["a"])({url:"/app/appVersion/"+e,method:"delete"})}function m(e){return Object(a["a"])({url:"/app/subscribed/list?"+e,method:"get"})}function h(e){return Object(a["a"])({url:"/app/api/queryApiList",method:"post",data:e})}function f(e,t){return Object(a["a"])({url:"/app/appVersion/"+e,method:"post",data:t})}function b(e){return Object(a["a"])({url:"/app/appVersion/"+e,method:"get"})}function v(e){return Object(a["a"])({url:"/gateway/log?"+e,method:"get"})}function g(e){return Object(a["a"])({url:"/app/subscribed/"+e,method:"get"})}function F(e){return Object(a["a"])({url:"/app/api/"+e,method:"get"})}function C(e){return Object(a["a"])({url:"/app/plugin",method:"post",data:e})}function y(){return Object(a["a"])({url:"/app/plugin/randomKey",method:"get"})}function _(e){return Object(a["a"])({url:"/app/rateLimit/save",method:"post",data:e})}function x(e){return Object(a["a"])({url:"/app/plugin",method:"put",data:e})}function k(e){return Object(a["a"])({url:"/app/unSubscribe/"+e,method:"post"})}function O(e,t){return Object(a["a"])({url:"/app/plugin/"+e+"/"+t,method:"get"})}function w(e){return Object(a["a"])({url:"/app/rateLimit/open?appId="+e,method:"post"})}function I(e){return Object(a["a"])({url:"/app/rateLimit/close?appId="+e,method:"post"})}},a577:function(e,t,i){},e8f4:function(e,t,i){"use strict";i("0ca7")},f76f:function(e,t,i){"use strict";i("5a87")},fcb4:function(e,t,i){}}]);