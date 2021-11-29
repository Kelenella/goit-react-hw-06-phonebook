(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"ContactForm_form__40RkM",label:"ContactForm_label__DfbUu",input:"ContactForm_input__3lg1Q",button:"ContactForm_button__2BmDi"}},,,,function(e,t,n){e.exports={label:"Filter_label__h-W-U",input:"Filter_input__QgBIh",filter:"Filter_filter__3ggoA"}},,,function(e,t,n){e.exports={name:"Contact_name__3tnZN",number:"Contact_number__3wq8I"}},function(e,t,n){e.exports={item:"ContactsList_item__2JWBV",button:"ContactsList_button__24owY"}},function(e,t,n){e.exports={title:"App_title__3jw0D",contactsTitle:"App_contactsTitle__37CaD"}},,function(e,t,n){e.exports={container:"Container_container__3vaGu"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=(n(20),n(15)),s=n(3),u=n(13),l=n.n(u),b=n(0);function m(e){var t=e.children;return Object(b.jsx)("div",{className:l.a.container,children:t})}var j=n(26),d=n(2),p=n.n(d);function f(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),l=u[0],m=u[1],d=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}},f=function(){o(""),m("")};return Object(b.jsxs)("form",{className:p.a.form,onSubmit:function(e){e.preventDefault();var n={id:Object(j.a)(),name:r,number:l};t(n),f()},children:[Object(b.jsxs)("label",{className:p.a.label,children:["Name",Object(b.jsx)("input",{onChange:d,value:r,className:p.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{className:p.a.label,children:["Phone",Object(b.jsx)("input",{value:l,className:p.a.input,onChange:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("button",{className:p.a.button,type:"submit",children:Object(b.jsx)("span",{className:p.a.btnText,children:" Add contacts"})})]})}var _=n(6),h=n.n(_);function O(e){var t=e.value,n=e.onChange;return Object(b.jsx)("div",{className:h.a.filter,children:Object(b.jsxs)("label",{className:h.a.text,children:["Find contacts by name",Object(b.jsx)("input",{className:h.a.value,type:"text",value:t,onChange:n})]})})}var x=n(8),v=n.n(x),C=n(9),N=n.n(C);function g(e){var t=e.name,n=e.number;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{className:N.a.name,children:[t,":"]}),Object(b.jsx)("span",{className:N.a.number,children:n})]})}g.propType={name:v.a.string.isRequired,number:v.a.number.isRequired};var w=n(10),S=n.n(w);function y(e){var t=e.contacts,n=e.onDeleteContact;return Object(b.jsx)("ul",{children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(b.jsxs)("li",{className:S.a.item,children:[Object(b.jsx)(g,{name:t,number:a}),Object(b.jsx)("button",{className:S.a.button,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})}var A=n(14),k=n(11),F=n.n(k);var D=function(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:A})),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(b.jsxs)(m,{children:[Object(b.jsx)("h1",{className:F.a.title,children:"Phonebook"}),Object(b.jsx)(f,{onSubmit:function(e){if(n.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("contact is already in the directory");c([].concat(Object(i.a)(n),[e]))}}),Object(b.jsx)(O,{value:u,onChange:function(e){l(e.target.value)}}),Object(b.jsx)("h2",{className:F.a.contactsTitle,children:"Contacts"}),Object(b.jsx)(y,{contacts:function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){c(n.filter((function(t){return t.id!==e})))}})]})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.66d50f25.chunk.js.map