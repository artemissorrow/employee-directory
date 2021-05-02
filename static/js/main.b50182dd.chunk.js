(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{42:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s.n(r),a=s(12),c=s.n(a),o=s(0);var i=function(){return Object(o.jsx)("nav",{className:"navbar navbar-dark bg-dark border border-secondary border-2",children:Object(o.jsx)("div",{className:"container-fluid justify-content-center",children:Object(o.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Employee Directory"})})})},l=s(13),j=s(14),b=s(17),d=s(16),h={img:{borderRadius:"100%"}};var u=function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:Object(o.jsx)("img",{src:e.img,alt:e.name,style:h.img})}),Object(o.jsx)("td",{children:e.first}),Object(o.jsx)("td",{children:e.last}),Object(o.jsx)("td",{children:e.email}),Object(o.jsx)("td",{children:e.phone})]})};var m=function(e){return Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Filter by First or Last Name","aria-label":"Filter",onChange:e.event}),Object(o.jsx)("button",{className:"btn btn-secondary",type:"submit",children:"Filter"})]})},p=s(15),f=s.n(p),O=function(){return f.a.get("https://randomuser.me/api/?results=55&nat=us")},x=function(e){Object(b.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={employees:[],search:null},e.generateRoster=function(){O().then((function(t){return e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.searchSpace=function(t){var s=t.target.value;e.setState({search:s})},e.sortFirst=function(){e.setState(e.state.employees.sort((function(e,t){var s=e.name.first.toLowerCase(),r=t.name.first.toLowerCase();return s<r?-1:s>r?1:0})))},e.sortLast=function(){e.setState(e.state.employees.sort((function(e,t){var s=e.name.last.toLowerCase(),r=t.name.last.toLowerCase();return s<r?-1:s>r?1:0})))},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.generateRoster()}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{className:"container bg-dark p-2",children:[Object(o.jsx)(m,{event:function(t){return e.searchSpace(t)}}),Object(o.jsxs)("table",{className:"table table-dark table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Photo"}),Object(o.jsxs)("th",{scope:"col",children:["First Name"," ",Object(o.jsx)("button",{onClick:this.sortFirst,className:"btn btn-secondary btn-sm",children:Object(o.jsx)("i",{className:"fas fa-sort"})})]}),Object(o.jsxs)("th",{scope:"col",children:["Last Name"," ",Object(o.jsx)("button",{onClick:this.sortLast,className:"btn btn-secondary btn-sm",children:Object(o.jsx)("i",{className:"fas fa-sort"})})]}),Object(o.jsx)("th",{scope:"col",children:"Email"}),Object(o.jsx)("th",{scope:"col",children:"Phone"})]})}),Object(o.jsx)("tbody",{children:this.state.employees.filter((function(t){return null==e.state.search||t.name.first.toLowerCase().includes(e.state.search.toLowerCase())||t.name.last.toLowerCase().includes(e.state.search.toLowerCase())?t:void 0})).map((function(e){return Object(o.jsx)(u,{img:e.picture.thumbnail,name:e.name,first:e.name.first,last:e.name.last,email:e.email,phone:e.phone})}))})]})]})}}]),s}(n.a.Component);var y=function(){return Object(o.jsxs)("div",{className:"App bg-secondary",children:[Object(o.jsx)(i,{}),Object(o.jsx)(x,{})]})};s(41);c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b50182dd.chunk.js.map