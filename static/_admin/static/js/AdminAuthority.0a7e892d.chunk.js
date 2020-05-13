(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{536:function(e,a,t){},555:function(e,a,t){"use strict";t.r(a);t(370);var n=t(371),r=(t(355),t(356)),l=(t(369),t(372)),i=(t(347),t(348)),c=(t(173),t(56)),u=(t(114),t(113)),m=(t(174),t(68)),o=t(116),s=(t(343),t(344)),d=t(11),h=(t(350),t(351)),p=(t(175),t(58)),y=t(0),f=t.n(y),E=t(562),b=t(361),_=t(362),v=t(66),O=(t(536),p.a.Option),j=h.a.confirm;a.default=function(){var e={wrapperCol:{offset:8,span:16}},a=Object(y.useState)(!1),t=Object(d.a)(a,2),g=t[0],C=t[1],k=Object(y.useState)(""),I=Object(d.a)(k,2),N=I[0],w=I[1],q=Object(y.useState)(!0),x=Object(d.a)(q,2),F=x[0],S=x[1],T=s.a.useForm(),z=Object(d.a)(T,1)[0],J=Object(y.useState)([]),K=Object(d.a)(J,2),P=K[0],V=K[1],A=Object(y.useState)({authority_parent_id:"",authority_parent_name:""}),B=Object(d.a)(A,2),D=B[0],L=B[1],Y=Object(y.useState)(0),G=Object(d.a)(Y,2),H=G[0],M=G[1],Q=Object(y.useCallback)((function(e,a){var t=[];for(var n in e)e[n].authority_parent_id==a&&(e[n].children=Q(e,e[n].authority_id),t.push(e[n]));return t}),[]),R=Object(y.useCallback)((function(){v.a.get("/admin-authority/list").then((function(e){var a=Q(e.data,"");V(a)}))}),[Q]);Object(y.useEffect)((function(){R()}),[R]);var U=function(e,a){C(!0),"add"===e?(z.resetFields(),L({authority_parent_id:a.authority_id||"",authority_parent_name:a.authority_name||""}),S(!0)):(L({authority_parent_id:a.authority_parent_id||"",authority_parent_name:a.authority_parent_name||""}),S(!1))},W=function(e){v.a.post("/admin-authority/create",Object(o.a)({},e,{},D)).then((function(e){R(),C(!1),m.a.success("\u521b\u5efa\u7ba1\u7406\u5458\u6743\u9650\u6210\u529f")}))},X=function(e){v.a.post("/admin-authority/update",Object(o.a)({authority_id:N},e)).then((function(e){R(),C(!1),m.a.success("\u4fee\u6539\u7ba1\u7406\u5458\u6743\u9650\u6210\u529f")}))},Z=function(e){var a=ee(e);v.a.post("/admin-authority/delete",{authority_id_arr:a}).then((function(e){R(),C(!1),m.a.success("\u5220\u9664\u7ba1\u7406\u5458\u6743\u9650\u6210\u529f")}))},$=function(e){var a;for(a in e)if(e.hasOwnProperty(a))return!1;return!0},ee=function(e){var a=[];return a.push(e.authority_id),$(e.children)||function e(t){for(var n in t)a.push(t[n].authority_id),$(t[n].children)||e(t[n].children)}(e.children),a},ae=function(e){return f.a.createElement("div",{className:"box-tree-title clearfix"},f.a.createElement("div",{className:"pull-left"},f.a.createElement("span",{className:"title"},e.authority_name," ")),f.a.createElement("div",{className:"pull-right"},f.a.createElement(u.a,{size:"small",onClick:function(){U("add",e)}},f.a.createElement(E.a,null)),f.a.createElement(u.a,{size:"small",onClick:function(){var a;U("edit",a=e),w(a.authority_id),z.setFieldsValue(Object(o.a)({},a)),M(a.authority_type)}},f.a.createElement(b.a,null)),f.a.createElement(u.a,{size:"small",onClick:function(){return a=e,void j({title:"\u786e\u8ba4\u8981\u5220\u9664\u6b64\u6587\u7ae0\u5417\uff1f",content:"\u6b64\u64cd\u4f5c\u4e0d\u53ef\u9006\u8f6c",okText:"Yes",cancelText:"No",onOk:function(){Z(a)},onCancel:function(){console.log("Cancel")}});var a}},f.a.createElement(_.a,null))))};return f.a.createElement("div",{className:"layout-main admin-authority"},f.a.createElement("div",{className:"layout-main-title"},f.a.createElement(c.a,null,f.a.createElement(c.a.Item,{href:"#/manager/index"},f.a.createElement("span",null,"\u4e3b\u9875")),f.a.createElement(c.a.Item,{href:"#"},f.a.createElement("span",null,"\u7cfb\u7edf\u7ba1\u7406")),f.a.createElement(c.a.Item,null,"\u7ba1\u7406\u5458\u6743\u9650"))),f.a.createElement("div",{className:"layout-nav-btn"},f.a.createElement("button",{className:"btn btn-danger",onClick:function(){U("add",{})}},"\u521b\u5efa\u7ba1\u7406\u5458\u6743\u9650")),f.a.createElement("div",{className:"card"},f.a.createElement(h.a,{footer:null,getContainer:!1,onCancel:function(){C(!1)},title:F?"\u521b\u5efa\u7ba1\u7406\u5458\u6743\u9650":"\u4fee\u6539\u7ba1\u7406\u5458\u6743\u9650",visible:g},f.a.createElement(s.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",form:z,initialValues:{remember:!0},onFinish:function(e){F?W(e):X(e)},onFinishFailed:function(e){console.log("Failed:",e)}}),D.authority_parent_name?f.a.createElement(s.a.Item,{label:"\u7236\u6743\u9650\u540d\u79f0"},f.a.createElement(i.a,{disabled:!0,value:D.authority_parent_name})):"",f.a.createElement(s.a.Item,{label:"\u6743\u9650\u540d\u79f0",name:"authority_name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6743\u9650\u540d\u79f0\uff01",whitespace:!0}]},f.a.createElement(i.a,null)),f.a.createElement(s.a.Item,{label:"\u6743\u9650\u7c7b\u578b",name:"authority_type",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6743\u9650\u7c7b\u578b\uff01",whitespace:!0}]},f.a.createElement(p.a,{onChange:function(e){M(e)}},f.a.createElement(O,{value:"1"},"\u57fa\u7840\u83dc\u5355"),f.a.createElement(O,{value:"2"},"\u64cd\u4f5c\u548c\u529f\u80fd"))),2==H?f.a.createElement(s.a.Item,{label:"\u6743\u9650\u8def\u5f84",name:"authority_url",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6743\u9650\u8def\u5f84\uff01",whitespace:!0}]},f.a.createElement(i.a,{addonBefore:"/api-client/v1",placeholder:"\u8bf7\u8f93\u5165\u6743\u9650\u8def\u5f84"})):f.a.createElement(s.a.Item,{label:"\u6743\u9650Key",name:"authority_url",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6743\u9650Key",whitespace:!0}]},f.a.createElement(i.a,null)),f.a.createElement(s.a.Item,{name:"authority_sort",label:"\u6392\u5e8f",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6392\u5e8f"}]},f.a.createElement(l.a,{min:0,max:50})),f.a.createElement(s.a.Item,{label:"\u6743\u9650\u63cf\u8ff0",name:"authority_description",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6743\u9650\u63cf\u8ff0",whitespace:!0}]},f.a.createElement(i.a,null)),2==H?f.a.createElement(s.a.Item,{label:"\u662f\u5426\u663e\u793a",name:"enable",valuePropName:"checked",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u662f\u5426\u663e\u793a"}]},f.a.createElement(r.a,null)):"",f.a.createElement(s.a.Item,e,F?f.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u521b\u5efa"):f.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u4fee\u6539"),f.a.createElement(u.a,{onClick:function(){C(!1)}},"\u53d6\u6d88")))),f.a.createElement("div",{className:"card-body"},f.a.createElement(n.a,{defaultExpandAll:!0,showLine:!0,treeData:function e(a){return a.map((function(a){var t;return a.key=a.authority_id,a.title=ae(a),(null===(t=a.children)||void 0===t?void 0:t.length)&&(a.children=e(a.children)),a}))}(P)}))))}}}]);