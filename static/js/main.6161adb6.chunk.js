(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{62:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),s=n.n(a),i=n(15),r=n.n(i),j=n(19),u=n(10),l=n(7),o=n(11),b=Object(o.a)();b.listen((function(e){var t=e.pathname;window.dispatchEvent(new CustomEvent("location.change",{detail:{pathname:t}}))}));var d=b,O=n(37),h=n(25),x=n(22),p=n(23),m=(n(62),function(e){var t=e.popupIsActive;return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)(h.a,{variant:"success",children:[Object(c.jsx)(h.a.Heading,{className:"mb-4",children:"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043e\u0441\u043c\u043e\u0442\u0440."}),Object(c.jsx)(x.a,{variant:"primary",className:"mb-3",onClick:function(){t(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u0432\u0442\u043e \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(p.a,{to:"/queue",className:"header__link mr-3 btn btn-info",children:"\u0410\u0432\u0442\u043e \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u0438"}),Object(c.jsx)(p.a,{to:"/passed",className:"header__link btn btn-info",children:"\u0410\u0432\u0442\u043e \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0435 \u0422\u041e"})]})]})})}),f=n(16),v=n(27),A=n(20),_=Object(j.b)((function(){return{}}),(function(e){return{addAutoToQueue:function(t){return e({type:"ADD_AUTO_TO_QUEUE",newAuto:t})}}}))((function(e){var t=e.popupActive,n=e.onHide,a=e.addAutoToQueue,i=s.a.useState({name:"",vin:""}),r=Object(O.a)(i,2),j=r[0],l=r[1],o=function(e){return function(t){l(Object(u.a)(Object(u.a)({},j),{},Object(f.a)({},e,t.target.value)))}};return Object(c.jsx)("div",{className:"popup",children:Object(c.jsxs)(v.a,{show:t,onHide:n,animation:!1,children:[Object(c.jsx)(v.a.Header,{closeButton:!0,children:Object(c.jsx)(v.a.Title,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0430\u0432\u0442\u043e \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c"})}),Object(c.jsxs)(A.a,{onSubmit:function(e){e.preventDefault(),a(Object(u.a)(Object(u.a)({},j),{},{status:0})),n()},children:[Object(c.jsxs)(v.a.Body,{children:[Object(c.jsxs)(A.a.Group,{children:[Object(c.jsx)(A.a.Label,{className:"mb-2",children:"\u0418\u043c\u044f"}),Object(c.jsx)(A.a.Control,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",required:!0,onChange:o("name")})]}),Object(c.jsxs)(A.a.Group,{children:[Object(c.jsx)(A.a.Label,{className:"mb-2",children:"Vin-\u043d\u043e\u043c\u0435\u0440:"}),Object(c.jsx)(A.a.Control,{type:"text",placeholder:"XWEH3130000012",required:!0,onChange:o("vin")})]})]}),Object(c.jsxs)(v.a.Footer,{children:[Object(c.jsx)(x.a,{variant:"secondary",onClick:n,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(c.jsx)(x.a,{variant:"primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})]})})})),N=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)(m,{popupIsActive:s}),Object(c.jsx)(_,{popupActive:n,onHide:function(){s(!1)}})]})},y=n(31),T=(n(67),Object(j.b)((function(e){return{list:e.list}}),(function(e){return{changeStatusAuto:function(t){return e({type:"CHANGE_STATUS_AUTO",indexAuto:t})}}}))((function(e){var t=e.data,n=e.type,a=e.changeStatusAuto,s=e.list;return Object(c.jsx)("div",{className:"list",children:Object(c.jsxs)(h.a,{variant:"success",children:[Object(c.jsxs)(h.a.Heading,{className:"mb-4",children:["queue"===n&&"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438 \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u0435","passed"===n&&"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438 \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0435 \u0422\u041e"]}),Object(c.jsx)("div",{className:"list__container mb-4",children:t.map((function(e,t){return Object(c.jsx)(y.a,{style:{width:"15rem"},className:"mr-2 mb-2",children:Object(c.jsxs)(y.a.Body,{children:[Object(c.jsxs)(y.a.Title,{children:["\u0418\u043c\u044f: ",Object(c.jsx)("span",{className:"list__font-weight",children:e.name})]}),Object(c.jsxs)(y.a.Text,{className:"mb-4",children:["VIN: ",Object(c.jsx)("span",{className:"list__font-weight",children:e.vin})]}),Object(c.jsx)(x.a,{variant:"danger",size:"sm",onClick:function(){a(s.indexOf(e))},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})]})},t)}))}),Object(c.jsx)(p.a,{to:"/",className:"header__link mr-3 btn btn-primary",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})]})})}))),g=(n(68),n(69),n(70),Object(j.b)((function(e){return{list:e.list}}),(function(){return{}}))((function(e){var t=e.list;return Object(c.jsx)(l.b,{history:d,children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(c.jsx)(l.a,{path:"/queue",render:function(e){return Object(c.jsx)(T,Object(u.a)(Object(u.a)({},e),{},{type:"queue",data:t.filter((function(e){return 0===e.status}))}))}}),Object(c.jsx)(l.a,{path:"/passed",render:function(e){return Object(c.jsx)(T,Object(u.a)(Object(u.a)({},e),{},{type:"passed",data:t.filter((function(e){return 1===e.status}))}))}})]})})})}))),w=n(32),C=n(47),E={list:[{name:"Carl",vin:"vwxs2323232323",status:0}]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_AUTO_TO_QUEUE":return Object(u.a)(Object(u.a)({},e),{},{list:[].concat(Object(C.a)(e.list),[t.newAuto])});case"CHANGE_STATUS_AUTO":var n=Object(C.a)(e.list);return n[t.indexAuto].status=n[t.indexAuto].status?0:1,Object(u.a)(Object(u.a)({},e),{},{list:n});default:return e}},U=Object(w.b)(S);r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(j.a,{store:U,children:Object(c.jsx)(g,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.6161adb6.chunk.js.map