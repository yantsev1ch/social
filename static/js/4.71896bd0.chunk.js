(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{305:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(56),s=t(57),o=t(59),c=t(58),r=t(0),i=t.n(r),m=t(31),u=t(19),l=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){Object(o.a)(r,a);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(m.a,{to:"/login"})}}]),r}(i.a.Component);return Object(u.b)(l)(a)}},307:function(e,a,t){e.exports={content:"Dialogs_content__2oE78"}},308:function(e,a,t){},309:function(e,a,t){},310:function(e,a,t){e.exports={form:"DialogsForm_form__2aWcC",button:"DialogsForm_button__2uZ-b",active:"DialogsForm_active__1Epjy"}},322:function(e,a,t){"use strict";t.r(a);var n=t(129),s=t(0),o=t.n(s),c=t(307),r=t.n(c),i=t(308),m=t.n(i),u=t(13),l=function(e){return o.a.createElement("div",{className:m.a.dialogItem},o.a.createElement(u.b,{to:"/dialogs/".concat(e.id)},e.name))},d=t(309),g=t.n(d),f=function(e){return o.a.createElement("div",{key:e.id,className:g.a.message},e.message)},b=t(310),p=t.n(b),E=t(131),h=t(132),v=t(60),_=t(47),j=Object(_.a)(50),y=Object(h.a)({form:"messageForm"})((function(e){return o.a.createElement("form",{className:p.a.form,onSubmit:e.handleSubmit},o.a.createElement(E.a,{component:v.c,validate:[_.b,j],name:"newMessageBody",placeholder:"Write your message here"}),o.a.createElement("button",{type:"submit",className:p.a.button},"Add message"))})),O=function(e){var a=e.dialogs.map((function(e){return o.a.createElement(l,{key:e.id,id:e.id,name:e.name})})),t=e.messages.map((function(e){return o.a.createElement(f,{key:e.id,message:e.message,id:e.id})}));return o.a.createElement("div",{className:r.a.dialogs},o.a.createElement("h1",null,"Dialogs"),o.a.createElement("div",{className:r.a.content},o.a.createElement("div",{className:r.a.colLeft},a),o.a.createElement("div",{className:r.a.colRight},t,o.a.createElement(y,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))))},k=t(19),N=t(305),w=t(8);a.default=Object(w.compose)(Object(k.b)((function(e){return{dialogs:e.messagesPage.dialogs,messages:e.messagesPage.messages}}),{sendMessage:n.a}),N.a)(O)}}]);
//# sourceMappingURL=4.71896bd0.chunk.js.map