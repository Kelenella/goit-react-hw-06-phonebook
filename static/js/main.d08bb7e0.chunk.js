(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={label:"Filter_label__h-W-U",input:"Filter_input__QgBIh",filter:"Filter_filter__3ggoA"}},16:function(e,t,n){e.exports={name:"Contact_name__3tnZN",number:"Contact_number__3wq8I"}},17:function(e,t,n){e.exports={item:"ContactsList_item__2JWBV",button:"ContactsList_button__24owY"}},18:function(e,t,n){e.exports={title:"App_title__3jw0D",contactsTitle:"App_contactsTitle__37CaD"}},21:function(e,t,n){e.exports={container:"Container_container__3vaGu"}},25:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},30:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),o=n(20),s=(n(30),n(21)),l=n.n(s),b=n(1);function u(e){var t=e.children;return Object(b.jsx)("div",{className:l.a.container,children:t})}var d=n(19),j=n(3),m=function(e){return e.contacts.contactItems},O=function(e){return e.contacts.filter},p=function(e){var t=O(e).toLowerCase();return m(e).filter((function(e){return e.name.toLowerCase().includes(t)}))},f=n(42),h=n(4),_={addContact:Object(h.b)("contacts/Add",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(f.a)(),name:t,number:n}}})),deleteContact:Object(h.b)("contacts/Delete"),changeFilter:Object(h.b)("contacts/changeFilter")},x=n(6),C=n.n(x);function v(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),o=i[0],s=i[1],l=Object(j.c)(m),u=Object(j.b)(),O=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":s(a);break;default:return}},p=function(){c(""),s("")};return Object(b.jsxs)("form",{className:C.a.form,onSubmit:function(e){if(e.preventDefault(),l.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return p(),alert("".concat(n," is already in the directory"));u(_.addContact({name:n,number:o})),p()},children:[Object(b.jsxs)("label",{className:C.a.label,children:["Name",Object(b.jsx)("input",{onChange:O,value:n,className:C.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{className:C.a.label,children:["Phone",Object(b.jsx)("input",{value:o,className:C.a.input,onChange:O,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("button",{className:C.a.button,type:"submit",children:Object(b.jsx)("span",{className:C.a.btnText,children:" Add contacts"})})]})}var g=n(12),N=n.n(g);function y(){var e=Object(j.c)(O),t=Object(j.b)();return Object(b.jsx)("div",{className:N.a.filter,children:Object(b.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(b.jsx)("input",{className:N.a.input,type:"text",value:e,onChange:function(e){t(_.changeFilter(e.currentTarget.value))}})]})})}var w=n(10),F=n.n(w),k=n(16),A=n.n(k);function D(e){var t=e.name,n=e.number;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{className:A.a.name,children:[t,":"]}),Object(b.jsx)("span",{className:A.a.number,children:n})]})}D.propType={name:F.a.string.isRequired,number:F.a.number.isRequired};var T=n(17),L=n.n(T);function S(){var e=Object(j.c)(p),t=Object(j.b)();return Object(b.jsx)("ul",{children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(b.jsxs)("li",{className:L.a.item,children:[Object(b.jsx)(D,{name:a,number:c}),Object(b.jsx)("button",{className:L.a.button,type:"button",onClick:function(){return t(_.deleteContact(n))},children:"Delete"})]},n)}))})}var q=n(18),z=n.n(q);var B,I=function(){return Object(b.jsxs)(u,{children:[Object(b.jsx)("h1",{className:z.a.title,children:"Phonebook"}),Object(b.jsx)(v,{}),Object(b.jsx)(y,{}),Object(b.jsx)("h2",{className:z.a.contactsTitle,children:"Contacts"}),Object(b.jsx)(S,{})]})},J=n(11),R=n(23),Z=n.n(R),M=n(5),W=n(24),E=n.n(W),P=n(13),Q=n(2),U=n(25),G=Object(h.c)(U,(B={},Object(P.a)(B,_.addContact,(function(e,t){var n=t.payload;return[].concat(Object(J.a)(e),[n])})),Object(P.a)(B,_.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),B)),H=Object(h.c)("",Object(P.a)({},_.changeFilter,(function(e,t){return t.payload}))),K=Object(Q.b)({contactItems:G,filter:H}),V={key:"contacts",storage:E.a,blacklist:["filter"]},Y=[].concat(Object(J.a)(Object(h.d)({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}})),[Z.a]),$=Object(h.a)({reducer:{contacts:Object(M.g)(V,K)},devTools:!1,middleware:Y}),X=Object(M.h)($);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j.a,{store:$,children:Object(b.jsx)(o.a,{loading:Object(b.jsx)("h2",{children:"Wait,loading"}),persistor:X,children:Object(b.jsx)(I,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"ContactForm_form__40RkM",label:"ContactForm_label__DfbUu",input:"ContactForm_input__3lg1Q",button:"ContactForm_button__2BmDi"}}},[[40,1,2]]]);
//# sourceMappingURL=main.d08bb7e0.chunk.js.map