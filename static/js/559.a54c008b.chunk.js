"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[559],{2559:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r=t(5861),o=t(885),a=t(7757),c=t.n(a),s=t(6871),i="BlogPage_blog__SP4UW",m="BlogPage_buttons__3koG2",l="BlogPage_icon__7N04i",u=t(2791),h=t(3365),d=t(6030),p="DeleteButton_icon__MqS6e",g=t(8820),f=t(184);var x=function(e){var n=(0,d.v9)((function(e){return e.user.token})),t=(0,s.s0)(),o=e.id,a=function(){var e=(0,r.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://blogaryan.herokuapp.com","/user/").concat(o),{method:"DELETE",headers:{authorization:"BEARER ".concat(n)}});case 3:if(r=e.sent,t(-1),r.ok){e.next=7;break}throw new Error("Could not delete blog page");case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,f.jsx)(g.VPh,{size:"30px",color:"black",className:p,onClick:a})},v=t(3504),b=t(773),j=t(5705),_="CommentForm_error__c1QWG",k="CommentForm_form__zNaag";var C=function(e){var n=(0,u.useState)(!1),t=(0,o.Z)(n,2),a=t[0],s=t[1],i=(0,d.v9)((function(e){return e.user.token})),m=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://blogaryan.herokuapp.com"+"/blogs/comment/".concat(e.blogId),{method:"POST",body:JSON.stringify({comment:t.comment}),headers:{"Content-Type":"application/json",authorization:"BEARER ".concat(i)}});case 3:if(n.sent.ok){n.next=6;break}throw new Error("Could not create new comment");case 6:e.toggler(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),l=b.Ry().shape({comment:b.Z_().required("Your comment is empty!")});return(0,f.jsx)("section",{className:k,children:(0,f.jsx)(j.J9,{initialValues:{comment:""},validationSchema:l,validateOnChange:!1,validateOnBlur:!1,onSubmit:function(e){m(e),s(!0),setTimeout((function(){s(!1)}),3e3)},children:function(e){var n=e.errors,t=e.handleBlur,r=e.handleChange,o=e.values;return(0,f.jsxs)(j.l0,{children:[(0,f.jsx)("label",{htmlFor:"comment",children:" Add a Comment"}),(0,f.jsx)("textarea",{name:"comment",onChange:r,onBlur:t,value:o.comment}),n.comment&&(0,f.jsx)("div",{className:_,children:n.comment}),(0,f.jsx)("button",{className:"btn",type:"submit",disabled:a,children:"Comment"})]})}})})},N="CommentItem_item__u-VKp",w="CommentItem_user__0A0Wz",y="CommentItem_span__x5TRL",E="CommentItem_icon__2zVu7",B=t(2113),S=t(7692);var Z=function(e){var n=(0,u.useState)(!1),t=(0,o.Z)(n,2),a=t[0],s=t[1],i=(0,d.v9)((function(e){return e.user.token})),m=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://blogaryan.herokuapp.com"+"/blogs/comment/".concat(e.commentId),{method:"PATCH",body:JSON.stringify({comment:t.comment}),headers:{"Content-Type":"application/json",authorization:"BEARER ".concat(i)}});case 3:if(n.sent.ok){n.next=6;break}throw new Error("Could not update comment");case 6:e.editToggle(),e.toggler(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),l=b.Ry().shape({comment:b.Z_().required("Your comment is empty!")});return(0,f.jsx)("section",{className:k,children:(0,f.jsx)(j.J9,{initialValues:{comment:e.comment},validationSchema:l,validateOnChange:!1,validateOnBlur:!1,onSubmit:function(e){m(e),s(!0),setTimeout((function(){s(!1)}),3e3)},children:function(e){var n=e.errors,t=e.handleBlur,r=e.handleChange,o=e.values;return(0,f.jsxs)(j.l0,{children:[(0,f.jsx)("label",{htmlFor:"comment",children:" Edit Comment"}),(0,f.jsx)("textarea",{name:"comment",onChange:r,onBlur:t,value:o.comment}),n.comment&&(0,f.jsx)("div",{className:_,children:n.comment}),(0,f.jsx)("button",{className:"btn",type:"submit",disabled:a,children:"Comment"})]})}})})};var z=function(e){var n=(0,d.v9)((function(e){return e.user.token})),t=(0,d.v9)((function(e){return e.user.id}))===e.comment.user._id,a=(0,u.useState)(!1),s=(0,o.Z)(a,2),i=s[0],m=s[1];function l(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}var h=function(){m((function(e){return!e}))},p=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://blogaryan.herokuapp.com","/blogs/comment/").concat(e.comment._id),{method:"DELETE",headers:{authorization:"BEARER ".concat(n)}});case 3:if(t.sent.ok){t.next=6;break}throw new Error("Could not delete comment");case 6:e.toggler(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),x=new Date(e.comment.date).toLocaleString();return(0,f.jsxs)("div",{className:N,children:[(0,f.jsxs)("div",{className:w,children:[(0,f.jsx)("img",{src:B,alt:"Icon"}),(0,f.jsxs)("h3",{children:[l(e.comment.user.firstName)+" "+l(e.comment.user.lastName)+" ",(0,f.jsx)("span",{className:y,children:x}),(0,f.jsx)("span",{children:t&&(0,f.jsxs)(u.Fragment,{children:[(0,f.jsx)(S.n2B,{size:"20px",color:"grey",className:E,onClick:h}),(0,f.jsx)(g.VPh,{size:"20px",color:"grey",className:E,onClick:p})]})})]})]}),i?(0,f.jsx)(Z,{commentId:e.comment._id,comment:e.comment.content,toggler:e.toggler,editToggle:h}):(0,f.jsx)("p",{children:e.comment.content})]})},I="Comments_comments__GpvuG",L="Comments_btn__ctZ4n",P="Comments_container__qe6wa",R="Comments_active__PIJLz",T=t(6048),A=t.n(T);var F=function(e){var n=e.comments,t=(0,d.v9)((function(e){return e.user.token})),r=(0,u.useState)(0),a=(0,o.Z)(r,2),c=a[0],s=a[1],i=5*c,m=n.length?n.length:1,l=Math.ceil(m/5);return(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)("h2",{children:"Comments"}),t?(0,f.jsx)(C,{blogId:e.blogId,toggler:e.toggler}):(0,f.jsx)("h3",{children:"Login to comment"}),n&&(0,f.jsxs)(u.Fragment,{children:[n.slice(i,i+5).map((function(n){return(0,f.jsx)(z,{comment:n,toggler:e.toggler},n._id)})),(0,f.jsx)(A(),{previousLabel:"Previous",nextLabel:"Next",pageCount:l,onPageChange:function(e){var n=e.selected;s(n)},containerClassName:P,previousLinkClassName:L,nextLinkClassName:L,activeClassName:R})]})]})},O=function(){var e=(0,s.UO)().id,n=(0,u.useState)(null),t=(0,o.Z)(n,2),a=t[0],p=t[1],g=(0,d.v9)((function(e){return e.user})),b=(0,u.useState)(!1),j=(0,o.Z)(b,2),_=j[0],k=j[1];(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://blogaryan.herokuapp.com","/blogs/blog/").concat(e));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Could not fetch blog page");case 6:return n.next=8,t.json();case 8:r=n.sent,p(r.blog),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,_]);var C=(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)(v.rU,{to:"/edit/".concat(e),children:(0,f.jsx)(S.n2B,{className:l,size:"30px",color:"black"})}),(0,f.jsx)(x,{id:e})]}),N=!!a,w=!1;return g.token&&a&&(w=a.author._id===g.id),(0,f.jsx)(u.Fragment,{children:N?(0,f.jsxs)(u.Fragment,{children:[(0,f.jsxs)("div",{className:i,children:[(0,f.jsx)("h1",{children:a.title}),(0,f.jsxs)("h2",{children:[a.author.firstName+" "+a.author.lastName," "]}),(0,f.jsx)("h3",{children:a.description}),w&&C,(0,f.jsx)("p",{children:a.article})]}),(0,f.jsx)(F,{blogId:e,comments:a.comments,toggler:function(){k((function(e){return!e}))}})]}):(0,f.jsx)(h.Z,{})})}},2113:function(e,n,t){e.exports=t.p+"static/media/user-img.2fda6558cd58b877e14f.png"}}]);
//# sourceMappingURL=559.a54c008b.chunk.js.map