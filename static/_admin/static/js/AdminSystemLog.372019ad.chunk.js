(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{556:function(e,t,a){"use strict";a.r(t);a(328);var n=a(326),c=a(116),l=(a(173),a(56)),r=(a(174),a(68)),i=(a(345),a(346)),o=(a(343),a(344)),s=a(11),u=(a(350),a(351)),d=a(0),m=a.n(d),p=a(66),b=u.a.confirm;t.default=function(){var e=Object(d.useState)([]),t=Object(s.a)(e,2),a=t[0],u=t[1],f=Object(d.useState)({current:1,pageSize:10}),y=Object(s.a)(f,2),E=y[0],g=y[1],k=Object(d.useState)(0),x=Object(s.a)(k,2),O=x[0],h=x[1],j=o.a.useForm(),v=Object(s.a)(j,1)[0],N=[{title:"\u5e8f\u53f7",dataIndex:"index",key:"index",render:function(e,t,a){return m.a.createElement("span",{style:{width:"20px",display:"block"}},10*(E.current-1)+a+1)}},{title:"\u64cd\u4f5c\u65f6\u95f4",dataIndex:"create_dt",key:"create_dt"},{title:"\u7ba1\u7406\u5458",dataIndex:"admin_user",key:"admin_user",render:function(e,t){return t.admin_user.nickname}},{title:"\u7c7b\u578b",dataIndex:"type",key:"type",render:function(e,t){return m.a.createElement(i.a,{className:"table-article-tag-list",color:"orange"},["","\u521b\u5efa","\u4fee\u6539","\u5220\u9664","\u767b\u5f55"][t.type])}},{title:"\u5185\u5bb9",dataIndex:"content",key:"content"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return m.a.createElement("div",{className:"operation-btn"},m.a.createElement("button",{className:"btn btn-light",onClick:function(){I(t)}},"\u5220\u9664"))}}],I=function(e){b({title:"\u786e\u8ba4\u8981\u5220\u9664\u6b64\u6587\u7ae0\u5417\uff1f",content:"\u6b64\u64cd\u4f5c\u4e0d\u53ef\u9006\u8f6c",okText:"Yes",cancelText:"No",onOk:function(){C(e.id)},onCancel:function(){console.log("Cancel")}})},S=Object(d.useCallback)((function(){p.a.get("/admin-system-log/list",{params:{page:E.current,pageSize:E.pageSize}}).then((function(e){u(e.data.list),h(e.data.count)}))}),[E]);Object(d.useEffect)((function(){S()}),[S]);var C=function(e){p.a.post("/admin-system-log/delete",{id:e}).then((function(e){S(),r.a.success("\u5220\u9664\u540e\u53f0\u65e5\u5fd7\u6210\u529f")}))};return m.a.createElement("div",{className:"layout-main"},m.a.createElement("div",{className:"layout-main-title"},m.a.createElement(l.a,null,m.a.createElement(l.a.Item,{href:"#/manager/index"},m.a.createElement("span",null,"\u4e3b\u9875")),m.a.createElement(l.a.Item,{href:"#"},m.a.createElement("span",null,"\u7cfb\u7edf\u7ba1\u7406")),m.a.createElement(l.a.Item,null,"\u540e\u53f0\u65e5\u5fd7"))),m.a.createElement("div",{className:"layout-nav-btn"},m.a.createElement("button",{className:"btn btn-danger",onClick:function(){"add"==="add"&&v.resetFields()}},"\u521b\u5efa\u6807\u7b7e")),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement(n.a,{columns:N,pagination:Object(c.a)({},E,{total:O}),onChange:function(e,t,a){g(e)},dataSource:a,rowKey:function(e){return e.id}}))))}}}]);