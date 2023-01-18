"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5853],{5853:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var r=t(7294),o=t(6974),s=t(1253),i=t(5617),c=t(9711),a=t(5893);const h=function(e){var n=e.division;return(0,a.jsx)("article",{className:"center mw5 mw5-ns w-100 w-25-ns ba mv4 shadow-2 br3",children:(0,a.jsxs)(c.rU,{to:"/dashboard/migrationdivision/".concat(n.id),className:"no-underline",style:{textDecoration:"none"},children:[(0,a.jsx)("h1",{className:"f4 bg-blue white mv0 pv2 ph3 customBorder",children:n.name}),(0,a.jsx)("p",{className:"f5 b grow no-underline ph3 pv2 mb2 dib black ml2 dim",children:"View Details →"})]})})};var u=t(1923),g=t(2881),m=t(7357),d=t(1458);const f=function(e){var n=e.id,t=e.name,o=(0,i.I0)(),s=(0,i.v9)((function(e){return e.divisions.divisions}));return(0,r.useEffect)((function(){return o((0,u.BJ)(n)),function(){o(g.G.setDivisions({divisions:[]}))}}),[]),0===s.length?(0,a.jsxs)("div",{children:[(0,a.jsx)(m.Z,{sx:{width:"100%"},children:(0,a.jsx)(d.Z,{})}),(0,a.jsx)("h2",{className:"tc mt2 b",children:"Loading..."})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:t}),(0,a.jsx)("div",{className:"flex flex-wrap mh1 mh4-m mh5-ns br3",children:s.map((function(e){return(0,a.jsx)(h,{division:e},e.id)}))})]})};const l=function(){var e=(0,o.UO)(),n=(0,i.I0)(),t=(0,i.v9)((function(e){return e.department.name}));return(0,i.v9)((function(e){return e.department.message})),(0,r.useEffect)((function(){n((0,s.Q)(e.id))}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(f,{id:e.id,name:t})})}},1253:(e,n,t)=>{t.d(n,{Q:()=>i});var r=t(5552),o=t(6491),s=t(4978),i=function(e){return function(n){fetch("".concat(o.xz,"department/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){0!==e.name.length?(n(r.S.setName({name:e.name})),n(r.S.setId({id:e.id}))):(n(s.n.setError({error:!0})),n(r.S.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){n(s.n.setError({error:!0})),n(r.S.setMessage({message:"Sorry something went wrong!!"}))}))}}},1923:(e,n,t)=>{t.d(n,{dI:()=>i,BJ:()=>c,Lp:()=>a,wg:()=>h,dV:()=>u,C9:()=>g});var r=t(2881),o=t(6491),s=t(4978),i=function(e){return function(n){fetch("".concat(o.xz,"div_dashboard/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){0!==e.length?n(r.G.setDivisions({divisions:e})):(n(s.n.setError({error:!0})),n(r.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){n(s.n.setError({error:!0})),n(r.G.setMessage({message:"Sorry something went wrong!!"}))}))}},c=function(e){return function(n){fetch("".concat(o.xz,"mig_div_dashboard/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){0!==e.length?n(r.G.setDivisions({divisions:e})):(n(s.n.setError({error:!0})),n(r.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){n(s.n.setError({error:!0})),n(r.G.setMessage({message:"Sorry something went wrong!!"}))}))}},a=function(e){return function(n){fetch("".concat(o.xz,"division/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){0!==e.length?n(r.G.setDivision({division:e.name})):(n(s.n.setError({error:!0})),n(r.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){n(s.n.setError({error:!0})),n(r.G.setMessage({message:"Sorry something went wrong!!"}))}))}},h=function(e){return function(n){fetch("".concat(o.xz,"cur_reportsubschemedivision/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){200===e.status?n(r.G.setDivisionReport({divisionReport:e})):(n(s.n.setError({error:!0})),n(r.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){n(s.n.setError({error:!0})),n(r.G.setMessage({message:"Sorry something went wrong!!"}))}))}},u=function(e){return function(n){fetch("".concat(o.xz,"mig_reportsubschemedivision/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(e){200===e.status?n(r.G.setDivisionReport({divisionReport:e})):(n(s.n.setError({error:!0})),n(r.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(e){n(s.n.setError({error:!0})),n(r.G.setMessage({message:"Sorry something went wrong!!"}))}))}},g=function(){return function(e){fetch("".concat(o.xz,"divisionall"),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then((function(e){return e.json()})).then((function(n){200===n.status?e(r.G.setDivisionAll({divisionAll:n.divisions})):(e(s.n.setError({error:!0})),e(r.G.setMessage({message:"Sorry something went wrong!!"})))})).catch((function(n){e(s.n.setError({error:!0})),e(r.G.setMessage({message:"Sorry something went wrong!!"}))}))}}}}]);