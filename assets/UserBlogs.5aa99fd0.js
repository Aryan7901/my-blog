import{u as i,r as t,c as E,l as s,d as b,B as f,R as P}from"./index.a8391bd9.js";const C=()=>{const o=i(e=>e.user.token),m=i(e=>e.user),[u,g]=t.exports.useState(0),r=10,n=u*r,p=({selected:e})=>{g(e)},d=async()=>{const e=await fetch("https://blogmania.onrender.com/user/list",{headers:{authorization:`BEARER ${o}`}});if(!e.ok)throw new Error("Could not fetch User's Pages");return e.json()},{data:c,error:l,isLoading:h}=E(["user-blogs",o],d),a=c?c.blogs:null,x=a?Math.ceil(a.length/r):0,N=JSON.stringify(a)==="[]";return l?t.exports.createElement("div",{className:s.message},t.exports.createElement("h1",{className:s.error},l.message)):t.exports.createElement(t.exports.Fragment,null,h?t.exports.createElement(b,null):N?t.exports.createElement("div",{className:s.message},t.exports.createElement("h1",null,"You are yet to Write a Blog!")):t.exports.createElement("section",{className:s.content},a.slice(n,n+r).map(e=>t.exports.createElement(f,{key:e._id,title:e.title,author:m,description:e.description,id:e._id})),t.exports.createElement(P,{previousLabel:"Previous",nextLabel:"Next",pageCount:x,onPageChange:p,containerClassName:s.container,previousLinkClassName:s.btn,nextLinkClassName:s.btn,activeClassName:s.active})))};export{C as default};
