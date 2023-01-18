"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56],{7145:(e,s,a)=>{a.d(s,{Z:()=>r});a(7294);var t=a(6491),n=a(5893);const r=function(){return(0,n.jsxs)("footer",{className:"pv4 ph3 ph5-m ph6-l white fbcolor",children:[(0,n.jsxs)("small",{className:"f6 db tc",children:[(0,n.jsxs)("b",{className:"ttu",children:["Developed and Maintained by ",(0,n.jsx)("a",{href:"https://japit.jharkhand.gov.in/",target:"_blank",className:"dib ph1 dim",children:(0,n.jsx)("img",{src:"".concat(t.jV,"japit.jpg"),className:"kdib",alt:"Site Name"})})]}),(0,n.jsx)("span",{children:"© 2022"}),(0,n.jsx)("br",{}),"All Rights Reserved"]}),(0,n.jsxs)("div",{className:"tc mt3",children:[(0,n.jsx)("a",{href:"/",title:"Language",className:"f6 dib ph2 link white-80 dim",children:"Language"}),(0,n.jsx)("a",{href:"/",title:"Terms",className:"f6 dib ph2 link white-80 dim",children:"Terms of Use"}),(0,n.jsx)("a",{href:"/",title:"Privacy",className:"f6 dib ph2 link white-80 dim",children:"Privacy"})]})]})}},9956:(e,s,a)=>{a.d(s,{Z:()=>i});a(7294);var t=a(9711),n=a(6491),r=a(5893);const i=function(){return(0,r.jsx)("div",{children:(0,r.jsxs)("nav",{className:"kdb kdt-l kw-100 kborder-box kpa3 kph5-l",children:[(0,r.jsx)(t.rU,{className:"kdb kdtc-l kv-mid kmid-gray klink kdim kw-100 w-10-l ktc ktl-l kmb2 kmb0-l",to:"/",title:"Home",children:(0,r.jsx)("img",{src:"".concat(n.jV,"logo3.png"),className:"kdib w4 h4 kbr-100",alt:"Site Name"})}),(0,r.jsx)("h2",{className:"hcolor kdb kdtc-l kv-mid kw-100 kw-25-l ktc center",children:(0,r.jsxs)("strong",{children:["Department of Planning and Development",(0,r.jsx)("br",{}),"Government of Jharkhand"]})}),(0,r.jsxs)("div",{className:"kdb kdtc-l kv-mid kw-100 w-10-l ktc ktr-l",children:[(0,r.jsx)(t.rU,{className:"klink kdim kdark-gray kf6 kf5-l kdib kmr3 b",to:"/home/about",title:"About",children:"About"}),(0,r.jsx)(t.rU,{className:"klink kdim kdark-gray kf6 kf5-l kdib kmr3 b",to:"/login",title:"Store",children:"Sign In"}),(0,r.jsx)(t.rU,{className:"klink kdim kdark-gray kf6 kf5-l kdib kmr3 b ba pa2 b--light-silver w4 tc",to:"/home/publicdashboard",title:"Contact",children:"MIS"})]})]})})}},56:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(7294),n=a(5617),r=a(9441),i=a(446),l=a(6974),o=a(9956),d=a(7145),c=a(4978),m=a(5893);const h=function(){var e=(0,l.s0)(),s=(0,n.I0)(),a=(0,n.v9)((function(e){return e.signin.email})),h=(0,n.v9)((function(e){return e.signin.password})),u=(0,n.v9)((function(e){return e.signin.message})),k=(0,n.v9)((function(e){return e.user.role})),p=(0,n.v9)((function(e){return e.user.isSignedIn})),f=(0,n.v9)((function(e){return e.error.error}));return(0,t.useEffect)((function(){return function(){s(r.J.setEmail({email:""})),s(r.J.setPassword({password:""})),s(r.J.setMessage({message:""}))}}),[]),(0,t.useEffect)((function(){if(!0===p){if("admin"===k)return e("/dashboard/main");if("user"===k)return e("/dashboarddeptuser/main");if("verifier"===k)return e("/dashboardverifier/main")}}),[p]),(0,t.useEffect)((function(){return f?e("/errorpage"):function(){s(c.n.setError({error:!1}))}}),[f]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z,{}),(0,m.jsxs)("div",{className:"pa3 mt4 mb7 measure center shadow-2",children:[(0,m.jsx)("legend",{className:"mh2",children:(0,m.jsx)("h2",{className:"b",children:"Log In"})}),(0,m.jsxs)("div",{className:"form-group mb3",children:[(0,m.jsx)("label",{htmlFor:"exampleInputEmail1",className:"b",children:"Email address"}),(0,m.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email",value:a,onChange:function(e){s(r.J.setEmail({email:e.target.value}))}})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{htmlFor:"exampleInputPassword1",className:"b",children:"Password"}),(0,m.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",value:h,onChange:function(e){s(r.J.setPassword({password:e.target.value}))}})]}),(0,m.jsx)("button",{type:"submit",className:"btn btn-primary mb4 mt3",onClick:function(){s((0,i.s)(a,h))},children:"Submit"}),u&&(0,m.jsx)("p",{className:"alert alert-primary",children:u})]}),(0,m.jsx)(d.Z,{})]})}},446:(e,s,a)=>{a.d(s,{s:()=>l,k:()=>o});var t=a(9441),n=a(8097),r=a(6491),i=a(4978),l=function(e,s){return function(a){fetch("".concat(r.xz,"login"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:s,password_confirmation:s})}).then((function(e){return e.json()})).then((function(e){200===e.status?(localStorage.setItem("access_token",e.access_token),a(n.h.setEmail({email:e.user.email})),a(n.h.setName({name:e.user.name})),a(n.h.setDepartmentId({departmentId:e.user.departmentId})),a(n.h.setDivisionId({divisionId:e.user.divisionId})),a(n.h.setRole({role:e.user.role})),a(n.h.setId({id:e.user.id})),a(n.h.setSignedIn({isSignedIn:!0})),a(t.J.setEmail({email:""})),a(t.J.setPassword({password:""})),a(t.J.setMessage({message:"You have been successfuly Signed In"}))):(a(t.J.setEmail({email:""})),a(t.J.setPassword({password:""})),a(t.J.setMessage({message:e.message})))})).catch((function(e){a(i.n.setError({error:!0})),a(t.J.setEmail({email:""})),a(t.J.setPassword({password:""})),a(t.J.setMessage({message:res.message}))}))}},o=function(){return function(e){fetch("".concat(r.xz,"signout"),{method:"post",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token")),"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(s){200===s.status&&(localStorage.setItem("access_token",""),e(n.h.setEmail({email:""})),e(n.h.setName({name:""})),e(n.h.setDepartmentId({departmentId:""})),e(n.h.setDivisionId({divisionId:""})),e(n.h.setRole({role:""})),e(n.h.setId({id:""})),e(n.h.setSignedIn({isSignedIn:!1})))})).catch((function(s){e(i.n.setError({error:!0})),localStorage.setItem("access_token",""),e(n.h.setEmail({email:""})),e(n.h.setName({name:""})),e(n.h.setDepartmentId({departmentId:""})),e(n.h.setDivisionId({divisionId:""})),e(n.h.setRole({role:""})),e(n.h.setId({id:""})),e(n.h.setSignedIn({isSignedIn:!1}))}))}}}}]);