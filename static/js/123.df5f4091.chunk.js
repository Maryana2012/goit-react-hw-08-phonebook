"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[123],{9123:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var a=t(2791),r=t(9434),s=t(9439),l=function(e){return e.contactReducer.filter},c=function(e){return e.contactReducer.contact},o=function(e){return e.contactReducer.isLoading},i=function(e){return e.contactReducer.errorContact},u=t(7490),m=t(2844),d=t(9085),_={form__container:"Form_form__container__0Ze0A",input:"Form_input__FTtTw",label:"Form_label__8nx+5",label__form:"Form_label__form__wlLL9"},h=t(3329);function x(e){var n=e.id,t=e.name,l=e.number,o=e.onClose,i=(0,r.I0)(),x=(0,r.v9)(c),f=(0,a.useState)(t),p=(0,s.Z)(f,2),b=p[0],j=p[1],v=(0,a.useState)(l),N=(0,s.Z)(v,2),C=N[0],k=N[1];return(0,h.jsxs)("form",{className:_.form__container,onSubmit:function(e){e.preventDefault();var a=e.target,r={id:n,name:a.elements.name.value,number:a.elements.phone.value};if(t)i((0,u.Tk)(r)),o();else{if(x.some((function(e){return e.name.toLowerCase()===a.elements.name.value.toLowerCase()})))return void d.Am.error("".concat(a.elements.name.value," is already in contacts"));i((0,u.uK)(r))}a.reset()},children:[(0,h.jsxs)("label",{htmlFor:"",className:_.label,children:[(0,h.jsx)("span",{className:_.label__form,children:"Name"}),t?(0,h.jsx)("input",{className:_.input,type:"text",name:"name",value:b,onChange:function(e){j(e.target.value)},required:!0}):(0,h.jsx)("input",{className:_.input,type:"text",name:"name",required:!0})]}),(0,h.jsxs)("label",{htmlFor:"",className:_.label,children:[(0,h.jsx)("span",{className:_.label__form,children:"Number"}),l?(0,h.jsx)("input",{className:_.input,type:"tel",name:"phone",value:C,onChange:function(e){k(e.target.value)},required:!0}):(0,h.jsx)("input",{className:_.input,type:"tel",name:"phone",required:!0})]}),(0,h.jsx)(m.z,{colorScheme:"yellow",size:"md",className:_.button_add,type:"submit",children:t?"Update":"Add Contact"})]})}var f=t(2134),p=t(8642),b=function(e){var n=e.id,t=e.name,a=e.number,r=e.onClose;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:p.Z.backdrop,onClick:r}),(0,h.jsxs)("div",{className:p.Z.modal,children:[(0,h.jsx)(x,{id:n,name:t,number:a,onClose:r}),(0,h.jsx)("button",{className:p.Z.button,onClick:r,children:(0,h.jsx)(f.oHP,{})})]})]})},j="Contact_item__j+P5X",v="Contact_text_name__wo51U",N="Contact_text_number__KZa7z",C="Contact_button_container__qIA86",k="Contact_button__F+kJb";function F(e){var n=e.id,t=e.name,l=e.number,c=(0,a.useState)(!1),o=(0,s.Z)(c,2),i=o[0],d=o[1],_=(0,r.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("li",{className:j,children:[(0,h.jsx)("span",{className:v,children:t}),(0,h.jsx)("span",{className:N,children:l}),(0,h.jsxs)("div",{className:C,children:[(0,h.jsx)(m.z,{colorScheme:"yellow",className:k,type:"button",onClick:function(){return _((0,u.GK)(n))},children:"Delete"}),(0,h.jsx)(m.z,{colorScheme:"yellow",className:k,type:"button",onClick:function(){d(!0)},children:"Update"})]})]},n),i&&(0,h.jsx)(b,{isOpen:i,id:n,name:t,number:l,onClose:function(){d(!1)}})]})}var w="ContactList_list__csErn";function y(){var e=(0,r.v9)(l),n=(0,r.v9)(c).filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,h.jsx)("ul",{className:w,children:n.map((function(e){return(0,h.jsx)(F,{id:e._id,name:e.name,number:e.number},e._id)}))})}var g=t(8857),L="Filter_input__N7T3z",Z="Filter_label__vEd1E";function I(){var e=(0,r.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("label",{htmlFor:"",className:Z,children:"Find contact by name "}),(0,h.jsx)("input",{type:"text",className:L,name:"filter",onChange:function(n){e((0,g.s)(n.target.value))}})]})}var S="PhoneBook_container__JI9R8",T="PhoneBook_title__RkD7r";function z(){var e=(0,r.I0)(),n=(0,r.v9)(c),t=(0,r.v9)(o),s=(0,r.v9)(i);return(0,a.useEffect)((function(){e((0,u.yF)())}),[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:S,children:[(0,h.jsx)("h2",{className:T,children:"Add new contact"}),(0,h.jsx)(x,{})]}),(0,h.jsxs)("div",{className:S,children:[(0,h.jsx)("h2",{className:T,children:"Contacts"}),t&&(0,h.jsx)("p",{children:"Loading contacts..."}),s&&(0,h.jsx)("p",{children:s}),(0,h.jsx)(I,{}),n&&(0,h.jsx)(y,{})]})]})}},8642:function(e,n){n.Z={modal:"Modal_modal__DJDMv",button:"Modal_button__PTCbC",backdrop:"Modal_backdrop__xTnIT"}}}]);
//# sourceMappingURL=123.df5f4091.chunk.js.map