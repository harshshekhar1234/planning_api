"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1855],{1855:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var n=t(7294),r=t(5617),a=t(1514),o=t(2881),i=t(6491),c=t(4978),l=t(6974),m=t(1984),d=t(1923),u=t(5893);const h=function(){(0,l.s0)();var e=(0,r.I0)(),s=(0,r.v9)((function(e){return e.register.name})),t=(0,r.v9)((function(e){return e.register.email})),h=(0,r.v9)((function(e){return e.register.password})),g=(0,r.v9)((function(e){return e.register.message})),f=(0,r.v9)((function(e){return e.register.departmentId})),b=(0,r.v9)((function(e){return e.register.divisionId})),p=(0,r.v9)((function(e){return e.register.role})),v=(0,r.v9)((function(e){return e.departments.departments})),E=(0,r.v9)((function(e){return e.divisions.divisions}));(0,n.useEffect)((function(){return e((0,m.X)()),function(){e(a.E.setName({name:""})),e(a.E.setEmail({email:""})),e(a.E.setPassword({password:""})),e(a.E.setDepartmentId({departmentId:""})),e(a.E.setDivisionId({divisionId:""})),e(a.E.setRole({role:"user"})),e(a.E.setMessage({message:""})),e(o.G.setDivisions({divisions:[]}))}}),[]),(0,n.useEffect)((function(){""!==f&&e((0,d.dI)(f))}),[f]);return(0,u.jsxs)("div",{className:"center",children:[(0,u.jsx)("h1",{className:"b",children:"Create New User"}),(0,u.jsxs)("div",{className:"pa4 black-80",children:[(0,u.jsx)("label",{htmlFor:"name",className:"f6 b db mb2",children:"Name"}),(0,u.jsx)("input",{id:"name",className:"ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",onChange:function(s){e(a.E.setName({name:s.target.value})),e(a.E.setMessage({message:""}))},value:s}),(0,u.jsx)("small",{id:"name-desc",className:"f6 black-60 db mb2",children:"Helper text for the form control."})]}),(0,u.jsxs)("div",{className:"pa4 black-80",children:[(0,u.jsx)("label",{htmlFor:"email",className:"f6 b db mb2",children:"Email address"}),(0,u.jsx)("input",{id:"email",className:"ba b--black-20 pa2 mb2 db w-100",type:"email","aria-describedby":"name-desc",onChange:function(s){e(a.E.setEmail({email:s.target.value})),e(a.E.setMessage({message:""}))},value:t}),(0,u.jsx)("small",{id:"name-desc",className:"f6 black-60 db mb2",children:"Helper text for the form control."})]}),(0,u.jsxs)("div",{className:"pa4 black-80",children:[(0,u.jsx)("label",{htmlFor:"password",className:"f6 b db mb2",children:"Password"}),(0,u.jsx)("input",{id:"password",className:"ba b--black-20 pa2 mb2 db w-100",type:"password","aria-describedby":"name-desc",onChange:function(s){e(a.E.setPassword({password:s.target.value})),e(a.E.setMessage({message:""}))},value:h}),(0,u.jsx)("small",{id:"name-desc",className:"f6 black-60 db mb2",children:"Helper text for the form control."})]}),(0,u.jsx)("div",{className:"pa4 black-80",children:(0,u.jsxs)("div",{className:"measure",children:[(0,u.jsx)("label",{htmlFor:"department_name",className:"f6 b db mb2",children:"Select Department Name"}),(0,u.jsxs)("select",{id:"department_name",className:"ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",defaultValue:"default",onChange:function(s){e(a.E.setDepartmentId({departmentId:s.target.value})),e(a.E.setMessage({message:""}))},children:[(0,u.jsx)("option",{value:"default",children:"Select the department"}),v&&v.map((function(e){return(0,u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),(0,u.jsx)("small",{id:"name-desc",className:"f6 black-60 db mb2",children:"Helper text for the form control."})]})}),(0,u.jsx)("div",{className:"pa4 black-80",children:(0,u.jsxs)("div",{className:"measure",children:[(0,u.jsx)("label",{htmlFor:"name",className:"f6 b db mb2",children:"Select Division Name"}),(0,u.jsxs)("select",{id:"name",className:"ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",defaultValue:"default",onChange:function(s){e(a.E.setDivisionId({divisionId:s.target.value})),e(a.E.setMessage({message:""}))},children:[(0,u.jsx)("option",{value:"default",children:"Select the division"}),E&&E.map((function(e){return(0,u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),(0,u.jsx)("small",{id:"name-desc",className:"f6 black-60 db mb2",children:"Helper text for the form control."})]})}),(0,u.jsx)("div",{className:"pa4 black-80",children:(0,u.jsxs)("div",{className:"measure",children:[(0,u.jsx)("label",{htmlFor:"name",className:"f6 b db mb2",children:"Select Role"}),(0,u.jsxs)("select",{id:"name",className:"ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",defaultValue:"default",onChange:function(s){e(a.E.setRole({role:s.target.value})),e(a.E.setMessage({message:""}))},children:[(0,u.jsx)("option",{value:"user",children:"User"}),(0,u.jsx)("option",{value:"verifier",children:"Verifier"})]}),(0,u.jsx)("small",{id:"name-desc",className:"f6 black-60 db mb2",children:"Helper text for the form control."})]})}),""!==g&&(0,u.jsx)("p",{className:"f6 ph3 pv2 mb2 mt2 black w-100 tc pointer b ba b--black-40",children:g}),(0,u.jsx)("p",{className:"f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer",onClick:function(){return""===t?e(a.E.setMessage({message:"Please enter Email"})):""===s?e(a.E.setMessage({message:"Please Enter Name"})):""===h?e(a.E.setMessage({message:"Please Enter Password"})):h.length<6?e(a.E.setMessage({message:"Password must be greater than 6 characters"})):""===b?e(a.E.setMessage({message:"No Division Selected"})):""===f?e(a.E.setMessage({message:"No Department Selected"})):""===p?e(a.E.setMessage({message:"No Role Selected"})):void e(function(e,s,t,n,r,o){return function(l){fetch("".concat(i.xz,"register"),{method:"post",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token")),"Content-Type":"application/json"},body:JSON.stringify({email:e,password:s,name:t,department_id:n,division_id:r,role:o,password_confirmation:s})}).then((function(e){return e.json()})).then((function(e){200===e.status?(l(a.E.setName({name:""})),l(a.E.setEmail({email:""})),l(a.E.setPassword({password:""})),l(a.E.setRole({role:"user"})),l(a.E.setMessage({message:"You have successfuly registered"}))):(l(c.n.setError({error:!0})),l(a.E.setName({name:""})),l(a.E.setEmail({email:""})),l(a.E.setPassword({password:""})),l(a.E.setRole({role:"user"})),l(a.E.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){l(c.n.setError({error:!0})),l(a.E.setName({name:""})),l(a.E.setEmail({email:""})),l(a.E.setPassword({password:""})),l(a.E.setRole({role:"user"})),l(a.E.setMessage({message:"Sorry something went wrong!!"}))}))}}(t,h,s,f,b,p))},children:"Create New User"})]})}},1984:(e,s,t)=>{t.d(s,{X:()=>o});var n=t(8671),r=t(6491),a=t(4978),o=function(e){return function(e){fetch("".concat(r.xz,"dept_dashboard"),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(s){0!==s.length?e(n.u.setDepartments({departments:s})):(e(a.n.setError({error:!0})),e(n.u.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(s){e(a.n.setError({error:!0})),e(n.u.setMessage({message:"Sorry something went wrong!!"}))}))}}},1923:(e,s,t)=>{t.d(s,{dI:()=>o,BJ:()=>i,Lp:()=>c,wg:()=>l,dV:()=>m,C9:()=>d});var n=t(2881),r=t(6491),a=t(4978),o=function(e){return function(s){fetch("".concat(r.xz,"div_dashboard/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){0!==e.length?s(n.G.setDivisions({divisions:e})):(s(a.n.setError({error:!0})),s(n.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){s(a.n.setError({error:!0})),s(n.G.setMessage({message:"Sorry something went wrong!!"}))}))}},i=function(e){return function(s){fetch("".concat(r.xz,"mig_div_dashboard/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){0!==e.length?s(n.G.setDivisions({divisions:e})):(s(a.n.setError({error:!0})),s(n.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){s(a.n.setError({error:!0})),s(n.G.setMessage({message:"Sorry something went wrong!!"}))}))}},c=function(e){return function(s){fetch("".concat(r.xz,"division/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){0!==e.length?s(n.G.setDivision({division:e.name})):(s(a.n.setError({error:!0})),s(n.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){s(a.n.setError({error:!0})),s(n.G.setMessage({message:"Sorry something went wrong!!"}))}))}},l=function(e){return function(s){fetch("".concat(r.xz,"cur_reportsubschemedivision/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){200===e.status?s(n.G.setDivisionReport({divisionReport:e})):(s(a.n.setError({error:!0})),s(n.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){s(a.n.setError({error:!0})),s(n.G.setMessage({message:"Sorry something went wrong!!"}))}))}},m=function(e){return function(s){fetch("".concat(r.xz,"mig_reportsubschemedivision/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){200===e.status?s(n.G.setDivisionReport({divisionReport:e})):(s(a.n.setError({error:!0})),s(n.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){s(a.n.setError({error:!0})),s(n.G.setMessage({message:"Sorry something went wrong!!"}))}))}},d=function(){return function(e){fetch("".concat(r.xz,"divisionall"),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(s){200===s.status?e(n.G.setDivisionAll({divisionAll:s.divisions})):(e(a.n.setError({error:!0})),e(n.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(s){e(a.n.setError({error:!0})),e(n.G.setMessage({message:"Sorry something went wrong!!"}))}))}}}}]);