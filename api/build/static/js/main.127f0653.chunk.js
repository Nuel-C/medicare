(this.webpackJsonpmedicare=this.webpackJsonpmedicare||[]).push([[0],{38:function(e,t,s){},67:function(e,t,s){},91:function(e,t,s){"use strict";s.r(t);var r=s(1),c=s.n(r),n=s(15),i=s.n(n),a=(s(38),s(2)),d=s(12),l=s.n(d),o=s(5),j=s(6),b=function(e){return{type:"UPDATE_NAME",data:e}},u=s(3),h=s(0),x=function(){var e=Object(u.c)((function(e){return e.isLoggedIn})),t=Object(r.useState)(""),s=Object(a.a)(t,2),c=s[0],n=s[1],i=Object(r.useState)(""),d=Object(a.a)(i,2),x=d[0],O=d[1],p=Object(r.useState)(""),g=Object(a.a)(p,2),m=g[0],f=g[1],y=Object(r.useState)(""),v=Object(a.a)(y,2),w=v[0],L=v[1],N=Object(u.b)();return Object(h.jsxs)("div",{children:[e?Object(h.jsx)(o.a,{to:{pathname:"/dashboard"}}):null,Object(h.jsxs)("div",{id:"form",className:"container",style:{paddingTop:"10%"},children:[Object(h.jsx)("h2",{style:{textAlign:"center"},children:"Log In"}),Object(h.jsxs)("div",{className:"form-div",children:[Object(h.jsx)("span",{style:{color:"green"},children:m}),Object(h.jsx)("span",{style:{color:"red"},children:w}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f("*Loggin In*"),L("");var t={username:c,password:x};l.a.post("/login",t).then((function(e){if(console.log(e.data),!1===e.data.success&&(f(""),L(e.data.message)),!0===e.data.success){console.log(e.data.patientsList);var t={username:c,patients:e.data.patients,patientsList:e.data.patientsList,encounters:e.data.encounters,encountersList:e.data.encountersList};N({type:"LOGGED_IN"}),N(b(t))}})).catch((function(e){console.log(e),f(""),L("Server Error")})),setTimeout((function(){f(""),L("")}),7e3)},children:["Username:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Username",onChange:function(e){n(e.target.value)},value:c,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Password:",Object(h.jsx)("input",{required:!0,type:"password",placeholder:"Password",onChange:function(e){O(e.target.value)},value:x,className:"form-control form-group"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",className:"btn btn-danger btn-block form-control form-group",value:"submit"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(j.b,{to:"/signup",style:{color:"red"},children:"*Sign Up*"})]})]})]})},O=(s(67),s(68),s(69),function(){var e=Object(u.c)((function(e){return e.isLoggedIn})),t=Object(u.b)(),s=Object(r.useState)(""),c=Object(a.a)(s,2),n=c[0],i=c[1],d=Object(r.useState)(""),x=Object(a.a)(d,2),O=x[0],p=x[1],g=Object(r.useState)(""),m=Object(a.a)(g,2),f=m[0],y=m[1],v=Object(r.useState)(""),w=Object(a.a)(v,2),L=w[0],N=w[1],C=Object(r.useState)(""),S=Object(a.a)(C,2),A=S[0],k=S[1],T=Object(r.useState)(""),R=Object(a.a)(T,2),D=R[0],B=R[1],q=Object(r.useState)(""),G=Object(a.a)(q,2),_=G[0],E=G[1],I=Object(r.useState)(""),M=Object(a.a)(I,2),U=M[0],P=M[1],F=Object(r.useState)(""),H=Object(a.a)(F,2),W=H[0],V=H[1],X=Object(r.useState)(""),J=Object(a.a)(X,2),z=J[0],K=J[1];return Object(h.jsxs)("div",{children:[e?Object(h.jsx)(o.a,{to:{pathname:"/dashboard"}}):null,Object(h.jsxs)("div",{id:"form",className:"container",style:{paddingTop:"10%"},children:[Object(h.jsx)("h2",{style:{textAlign:"center"},children:"Sign Up"}),Object(h.jsxs)("div",{className:"form-div",children:[Object(h.jsx)("span",{style:{color:"green"},children:W}),Object(h.jsx)("span",{style:{color:"red"},children:z}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),V("*Creating Account*"),K("");var s={username:n,password:U,name:O,surname:f,age:L,gender:A,cadre:D,department:_};l.a.post("/signup",s).then((function(e){if(console.log(e.data),!1===e.data.success&&(V(""),K(e.data.msg)),!0===e.data.success){var s={username:n,patients:e.data.patients,patientsList:e.data.patientsList,encounters:e.data.encounters,encountersList:e.data.encountersList};t({type:"LOGGED_IN"}),t(b(s))}})).catch((function(e){console.log(e),V(""),K("Server Error")})),setTimeout((function(){V(""),K("")}),7e3)},children:["Name:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Name",onChange:function(e){p(e.target.value)},value:O,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Surname:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Surname",onChange:function(e){y(e.target.value)},value:f,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Age:",Object(h.jsx)("input",{required:!0,type:"number",placeholder:"Age",onChange:function(e){N(e.target.value)},value:L,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Gender:",Object(h.jsxs)("select",{required:!0,onChange:function(e){k(e.target.value)},className:"form-control form-group",children:[Object(h.jsx)("option",{value:"",children:"-- Choose Gender --"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"})]}),Object(h.jsx)("br",{}),"Cadre:",Object(h.jsxs)("select",{required:!0,onChange:function(e){B(e.target.value)},className:"form-control form-group",children:[Object(h.jsx)("option",{value:"",children:"-- Choose Cadre --"}),Object(h.jsx)("option",{value:"Doctor",children:"Doctor"})]}),Object(h.jsx)("br",{}),"Department:",Object(h.jsxs)("select",{required:!0,onChange:function(e){E(e.target.value)},className:"form-control form-group",children:[Object(h.jsx)("option",{value:"",children:"-- Choose Department --"}),Object(h.jsx)("option",{value:"Medicine",children:"Medicine"})]}),Object(h.jsx)("br",{}),"Username:",Object(h.jsx)("input",{required:!0,type:"text",onChange:function(e){i(e.target.value)},value:n,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Password:",Object(h.jsx)("input",{required:!0,type:"password",placeholder:"Password",onChange:function(e){P(e.target.value)},value:U,className:"form-control form-group"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",className:"btn btn-danger btn-block form-control form-group",value:"submit"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(j.b,{to:"/",style:{color:"red"},children:"*Login*"})]})]})]})}),p=s.p+"static/media/power.dca07d43.svg",g=s.p+"static/media/clipboard.09cbb3c1.svg",m=s.p+"static/media/user.28ec5b21.png",f=function(){var e=Object(u.c)((function(e){return e.userReducer})),t=Object(u.c)((function(e){return e.isLoggedIn})),s=Object(u.b)(),c=Object(r.useState)(""),n=Object(a.a)(c,2),i=n[0],d=n[1],x=Object(r.useState)(""),O=Object(a.a)(x,2),f=O[0],y=O[1],v=Object(r.useState)(!1),w=Object(a.a)(v,2),L=w[0],N=w[1],C=Object(r.useState)(!1),S=Object(a.a)(C,2),A=S[0],k=S[1],T=Object(r.useState)(""),R=Object(a.a)(T,2),D=R[0],B=R[1],q=Object(r.useState)(""),G=Object(a.a)(q,2),_=G[0],E=G[1],I=Object(r.useState)(""),M=Object(a.a)(I,2),U=M[0],P=M[1],F=Object(r.useState)(!1),H=Object(a.a)(F,2),W=(H[0],H[1]),V=Object(r.useState)(""),X=Object(a.a)(V,2),J=X[0],z=X[1],K=Object(r.useState)(""),Q=Object(a.a)(K,2),Y=Q[0],Z=Q[1],$=Object(r.useState)(""),ee=Object(a.a)($,2),te=(ee[0],ee[1]),se=Object(r.useState)(""),re=Object(a.a)(se,2),ce=re[0],ne=re[1],ie=Object(r.useState)(""),ae=Object(a.a)(ie,2),de=ae[0],le=ae[1],oe=Object(r.useState)(""),je=Object(a.a)(oe,2),be=je[0],ue=je[1],he=Object(r.useState)(""),xe=Object(a.a)(he,2),Oe=xe[0],pe=xe[1],ge=Object(r.useState)(""),me=Object(a.a)(ge,2),fe=me[0],ye=me[1],ve=Object(r.useState)(""),we=Object(a.a)(ve,2),Le=we[0],Ne=we[1],Ce=Object(r.useState)(""),Se=Object(a.a)(Ce,2),Ae=Se[0],ke=Se[1],Te=Object(r.useState)(""),Re=Object(a.a)(Te,2),De=Re[0],Be=Re[1],qe=Object(r.useState)(""),Ge=Object(a.a)(qe,2),_e=Ge[0],Ee=Ge[1],Ie=Object(r.useState)(""),Me=Object(a.a)(Ie,2),Ue=Me[0],Pe=Me[1],Fe=Object(r.useState)(""),He=Object(a.a)(Fe,2),We=He[0],Ve=He[1],Xe=Object(r.useState)(""),Je=Object(a.a)(Xe,2),ze=Je[0],Ke=Je[1],Qe=Object(r.useState)(""),Ye=Object(a.a)(Qe,2),Ze=Ye[0],$e=Ye[1],et=Object(r.useState)(""),tt=Object(a.a)(et,2),st=tt[0],rt=tt[1];return Object(h.jsxs)("div",{children:[!1===t?Object(h.jsx)(o.a,{to:"/"}):null,Object(h.jsxs)("div",{className:"container",style:{paddingTop:"5%"},children:[Object(h.jsxs)("h5",{children:[Object(h.jsx)("img",{src:m,alt:"",style:{height:"2rem",width:"2rem",borderRadius:"50%"}})," ",e.username]}),Object(h.jsxs)("div",{style:{backgroundColor:"rgb(15, 15, 15)",borderRadius:"10px",padding:"1%",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(h.jsxs)("h6",{children:[Object(h.jsx)("img",{src:g,alt:"",style:{height:"2rem"}}),"Dashboard"]}),Object(h.jsxs)("h6",{children:[Object(h.jsx)("button",{onClick:function(){s({type:"LOGGED_OUT"}),s(b({username:" ",patients:0,patientsList:[],encounters:0,encountersList:[]}))},className:"btn btn-success btn-sm",style:{borderRadius:"50%"},children:Object(h.jsx)("img",{src:p,alt:"",style:{height:"1rem"}})})," Log out"]})]}),Object(h.jsx)("hr",{style:{border:"1px solid white"}}),Object(h.jsxs)("div",{id:"dashboard",className:"row",style:{marginTop:"5%"},children:[Object(h.jsx)("div",{className:"col-sm-6",style:{margin:"0%"},children:Object(h.jsxs)("div",{id:"dashboard-item",style:{borderRadius:"10px",marginTop:"5%",padding:"5%",margin:"5%",backgroundColor:"rgb(15, 15, 15)"},children:[Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(h.jsx)("h3",{style:{padding:"5px"},children:Object(h.jsx)(j.b,{to:"/patients",children:Object(h.jsxs)("button",{className:"btn btn-success btn-lg",children:[Object(h.jsx)("img",{src:m,alt:"",style:{height:"2rem",width:"2rem",borderRadius:"50%"}})," Patients"]})})}),Object(h.jsx)("h3",{style:{textAlign:"right",padding:"5px"},children:e.patients})]}),Object(h.jsx)("hr",{style:{border:"1px solid white"}}),e.patientsList.slice(0,3).map((function(e){return Object(h.jsx)("ul",{children:Object(h.jsx)("li",{style:{background:"blue",borderRadius:"10px",paddingLeft:"2%"},children:e.surname+" "+e.name})},e._id)})).reverse(),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{id:"addspan",style:{marginTop:"10%"},children:[Object(h.jsx)("button",{onClick:function(){N(!L)},id:"addbtn",className:"btn btn-success btn-sm",style:{borderRadius:"50%",paddingLeft:"3%",paddingRight:"3%"},children:"+"})," "]}),Object(h.jsxs)("div",{id:"addpform",style:{marginTop:"10%",display:L?"block":"none"},children:[Object(h.jsx)("hr",{style:{border:"1px solid white"}}),Object(h.jsx)("h2",{style:{textAlign:"center"},children:"Add Patient"}),Object(h.jsx)("hr",{style:{border:"1px solid white"}}),Object(h.jsxs)("div",{className:"form-div",children:[Object(h.jsx)("span",{style:{color:"green"},children:_}),Object(h.jsx)("span",{style:{color:"red"},children:U}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),E("*creating...*"),P("");var r={user:e.username,handler:f,username:i,surname:Le,password:D,name:Ae,age:ce,gender:de,height:J,weight:Y,bmi:Y/J,ward:be,lga:Oe,state:fe};l.a.post("/addpatient",r).then((function(t){console.log(t.data),W(t.data.success),!1===t.data.success&&(E(""),P(t.data.message)),!0===t.data.success&&(E("*Success*"),P(""),s(b({username:e.username,patients:t.data.patients,patientsList:t.data.patientsList,encounters:e.encounters,encountersList:e.encountersList})))})).catch((function(e){console.log(e),E(""),P("Server Error")})),setTimeout((function(){E(""),P("")}),7e3)},children:["Handler:",Object(h.jsx)("input",{required:!0,readOnly:!0,type:"text",placeholder:"Handler",onChange:function(e){y(e.target.value)},value:e.username,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Username:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Username",onChange:function(e){d(e.target.value)},value:i,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Password:",Object(h.jsx)("input",{required:!0,type:"password",placeholder:"Password",onChange:function(e){B(e.target.value)},value:D,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Surname:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Surname",onChange:function(e){Ne(e.target.value)},value:Le,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Name:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Name",onChange:function(e){ke(e.target.value)},value:Ae,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Age:",Object(h.jsx)("input",{required:!0,type:"number",placeholder:"Age",onChange:function(e){ne(e.target.value)},value:ce,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Gender:",Object(h.jsxs)("select",{required:!0,onChange:function(e){le(e.target.value)},className:"form-control form-group",children:[Object(h.jsx)("option",{value:"",children:"-- Choose Gender --"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"})]}),Object(h.jsx)("br",{}),"Height:",Object(h.jsx)("input",{required:!0,type:"number",placeholder:"Height",onChange:function(e){z(e.target.value)},value:J,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Weight:",Object(h.jsx)("input",{required:!0,type:"number",placeholder:"Weight",onChange:function(e){Z(e.target.value)},value:Y,className:"form-control form-group"}),Object(h.jsx)("br",{}),"BMI:",Object(h.jsx)("input",{required:!0,readOnly:!0,type:"number",placeholder:"BMI",onChange:function(e){te(e.target.value)},value:Y/J,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Ward:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Ward",onChange:function(e){ue(e.target.value)},value:be,className:"form-control form-group"}),Object(h.jsx)("br",{}),"L.G.A:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"L.G.A",onChange:function(e){pe(e.target.value)},value:Oe,className:"form-control form-group"}),Object(h.jsx)("br",{}),"State:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"State",onChange:function(e){ye(e.target.value)},value:fe,className:"form-control form-group"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",className:"btn btn-danger btn-block form-control form-group",value:"submit"})]}),Object(h.jsx)("br",{})]})]})]})}),Object(h.jsx)("div",{className:"col-sm-6",style:{margin:"0%"},children:Object(h.jsxs)("div",{id:"dashboard-item",style:{borderRadius:"10px",marginTop:"5%",padding:"5%",margin:"5%",backgroundColor:"rgb(15, 15, 15)"},children:[Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(h.jsx)("h3",{style:{padding:"5px"},children:Object(h.jsx)(j.b,{to:"/encounters",children:Object(h.jsxs)("button",{className:"btn btn-success btn-lg",children:[Object(h.jsx)("img",{src:g,alt:"",style:{height:"2rem"}})," Encounters"]})})}),Object(h.jsx)("h3",{style:{textAlign:"right",padding:"5px"},children:e.encounters})]}),Object(h.jsx)("hr",{style:{border:"1px solid white"}}),e.encountersList.slice(0,3).map((function(e){return Object(h.jsx)("ul",{children:Object(h.jsx)("li",{style:{background:"blue",borderRadius:"10px",paddingLeft:"2%"},children:e.surname+" "+e.name})},e._id)})).reverse(),Object(h.jsx)("br",{}),Object(h.jsx)("span",{id:"addspan",style:{marginTop:"10%"},children:Object(h.jsx)("button",{onClick:function(){k(!A)},id:"addbtn",className:"btn btn-success btn-sm",style:{borderRadius:"50%",paddingLeft:"3%",paddingRight:"3%"},children:"+"})}),Object(h.jsxs)("div",{id:"addpform",style:{marginTop:"10%",display:A?"block":"none"},children:[Object(h.jsx)("hr",{style:{border:"1px solid white"}}),Object(h.jsx)("h2",{style:{textAlign:"center"},children:"Add Encounter"}),Object(h.jsx)("hr",{style:{border:"1px solid white"}}),Object(h.jsxs)("div",{className:"form-div",children:[Object(h.jsx)("span",{style:{color:"green"},children:_}),Object(h.jsx)("span",{style:{color:"red"},children:U}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),E("*creating...*"),P("");var r={user:e.username,surname:Le,name:Ae,age:ce,gender:de,height:J,weight:Y,bmi:Y/J,type:De,bp:_e,temperature:Ue,rr:We,complaint:ze,diagnosis:Ze,treatment:st};l.a.post("/addencounter",r).then((function(t){console.log(t.data),W(t.data.success),!1===t.data.success&&(E(""),P(t.data.message)),!0===t.data.success&&(E("*Success*"),P(""),s(b({username:e.username,patients:e.patients,patientsList:e.patientsList,encounters:t.data.encounters,encountersList:t.data.encountersList})))})).catch((function(e){console.log(e),E(""),P("Server Error")})),setTimeout((function(){E(""),P("")}),7e3)},children:["Surname:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Surname",onChange:function(e){Ne(e.target.value)},value:Le,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Name:",Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Name",onChange:function(e){ke(e.target.value)},value:Ae,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Age:",Object(h.jsx)("input",{required:!0,type:"number",placeholder:"Age",onChange:function(e){ne(e.target.value)},value:ce,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Gender:",Object(h.jsxs)("select",{required:!0,onChange:function(e){le(e.target.value)},className:"form-control form-group",children:[Object(h.jsx)("option",{value:"",children:"-- Choose Gender --"}),Object(h.jsx)("option",{value:"Male",children:"Male"}),Object(h.jsx)("option",{value:"Female",children:"Female"})]}),Object(h.jsx)("br",{}),"Type:",Object(h.jsxs)("select",{required:!0,onChange:function(e){Be(e.target.value)},className:"form-control form-group",children:[Object(h.jsx)("option",{value:"",children:"-- Choose Encounter Type --"}),Object(h.jsx)("option",{value:"First time",children:"First time"}),Object(h.jsx)("option",{value:"Recurring visit",children:"Recurring visit"})]}),Object(h.jsx)("br",{}),"BMI:",Object(h.jsx)("input",{required:!0,readOnly:!0,type:"text",placeholder:"BMI",onChange:function(e){te(e.target.value)},value:Y/J,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Height:",Object(h.jsx)("input",{required:!0,type:"number",placeholder:"Height",onChange:function(e){z(e.target.value)},value:J,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Weight:",Object(h.jsx)("input",{required:!0,type:"number",placeholder:"Weight",onChange:function(e){Z(e.target.value)},value:Y,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Complaint:",Object(h.jsx)("textarea",{required:!0,className:"form-control form-group",onChange:function(e){Ke(e.target.value)},value:ze}),Object(h.jsx)("br",{}),"Blood Pressure:",Object(h.jsx)("input",{required:!0,type:"number",placeholder:"Bp",onChange:function(e){Ee(e.target.value)},value:_e,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Temperature:",Object(h.jsx)("input",{required:!0,type:"number",placeholder:"Temperature",onChange:function(e){Pe(e.target.value)},value:Ue,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Respiratory Rate:",Object(h.jsx)("input",{required:!0,type:"number",placeholder:"Respiratory Rate",onChange:function(e){Ve(e.target.value)},value:We,className:"form-control form-group"}),Object(h.jsx)("br",{}),"Diagnosis:",Object(h.jsxs)("select",{required:!0,onChange:function(e){$e(e.target.value)},className:"form-control form-group",children:[Object(h.jsx)("option",{value:"",children:"-- Choose Diagnosis --"}),Object(h.jsx)("option",{value:"Hypertension",children:"Hypertension"}),Object(h.jsx)("option",{value:"Pneumonia",children:"Pneumonia"}),Object(h.jsx)("option",{value:"Malaria",children:"Malaria"}),Object(h.jsx)("option",{value:"Diabetes",children:"Diabetes"})]}),Object(h.jsx)("br",{}),"Treatment Plan:",Object(h.jsx)("textarea",{required:!0,className:"form-control form-group",onChange:function(e){rt(e.target.value)},value:st}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",className:"btn btn-danger btn-block form-control form-group",value:"submit"})]}),Object(h.jsx)("br",{})]})]})]})})]})]})]})},y=function(){var e=Object(u.c)((function(e){return e.userReducer})),t=Object(u.c)((function(e){return e.isLoggedIn})),s=Object(u.b)();return Object(h.jsxs)("div",{children:[!1===t?Object(h.jsx)(o.a,{to:"/"}):null,Object(h.jsxs)("div",{className:"container",style:{paddingTop:"5%"},children:[Object(h.jsxs)("h5",{children:[Object(h.jsx)("img",{src:m,alt:"",style:{height:"2rem",width:"2rem",borderRadius:"50%"}})," ",e.username]}),Object(h.jsxs)("div",{style:{backgroundColor:"rgb(15, 15, 15)",borderRadius:"10px",padding:"1%",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(h.jsx)(j.b,{to:"/dashboard",style:{color:"white"},children:Object(h.jsxs)("h6",{children:[Object(h.jsx)("img",{src:g,alt:"",style:{height:"2rem"}}),"Dashboard"]})}),Object(h.jsxs)("h6",{children:[Object(h.jsx)("button",{onClick:function(){s({type:"LOGGED_OUT"}),s(b({username:" ",patients:0,patientsList:[],encounters:0,encountersList:[]}))},className:"btn btn-success btn-sm",style:{borderRadius:"50%"},children:Object(h.jsx)("img",{src:p,alt:"",style:{height:"1rem"}})})," Log out"]})]}),Object(h.jsx)("hr",{style:{border:"1px solid white"}})]}),Object(h.jsx)("div",{className:"container",style:{marginTop:"5%"},children:e.patientsList.map((function(e){return Object(h.jsxs)("div",{id:"patient",children:[Object(h.jsxs)("div",{className:"container",style:{background:"rgb(15, 15, 15)",borderRadius:"10px"},children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-sm-6",style:{paddingTop:"3%"},children:[Object(h.jsxs)("p",{style:{background:"blue",paddingLeft:"2%",borderRadius:"10px"},children:["Date: ",e.date]}),Object(h.jsxs)("p",{style:{background:"blue",paddingLeft:"2%",borderRadius:"10px"},children:["Name: ",e.surname+" "+e.name]}),Object(h.jsxs)("p",{style:{background:"blue",paddingLeft:"2%",borderRadius:"10px"},children:["Username: ",e.username]}),Object(h.jsxs)("p",{style:{background:"blue",paddingLeft:"2%",borderRadius:"10px"},children:["B.M.I: ",e.bmi]}),Object(h.jsxs)("p",{id:"gender",style:{background:"blue",paddingLeft:"2%",borderRadius:"10px"},children:["Gender: ",e.gender]})]}),Object(h.jsx)("div",{className:"col-sm-6",style:{paddingTop:"4%",paddingLeft:"30%"},id:"age",children:Object(h.jsx)("button",{className:"btn btn-success btn-xlg",style:{padding:"30%",borderRadius:"50%"},children:e.age})})]}),Object(h.jsx)("hr",{style:{border:"1px solid white"}}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"5%"},children:[Object(h.jsxs)("div",{id:"agee",style:{textAlign:"center",padding:"5%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"10px"},children:[Object(h.jsx)("p",{children:"Age"}),Object(h.jsx)("p",{children:e.age})]}),Object(h.jsxs)("div",{style:{textAlign:"center",padding:"5%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"10px"},children:[Object(h.jsx)("p",{children:"Height"}),Object(h.jsx)("p",{children:e.height})]}),Object(h.jsxs)("div",{style:{textAlign:"center",padding:"5%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"10px"},children:[Object(h.jsx)("p",{children:"Weight"}),Object(h.jsx)("p",{children:e.weight})]}),Object(h.jsxs)("div",{id:"genderr",style:{textAlign:"center",padding:"5%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"10px"},children:[Object(h.jsx)("p",{children:"Gender"}),Object(h.jsx)("p",{children:e.gender})]})]}),Object(h.jsx)("hr",{style:{border:"1px solid white"}}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"5%"},children:[Object(h.jsxs)("div",{style:{textAlign:"center",padding:"5%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"10px"},children:[Object(h.jsx)("p",{children:"Ward"}),Object(h.jsx)("p",{children:e.ward})]}),Object(h.jsxs)("div",{style:{textAlign:"center",padding:"5%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"10px"},children:[Object(h.jsx)("p",{children:"L.G.A"}),Object(h.jsx)("p",{children:e.lga})]}),Object(h.jsxs)("div",{style:{textAlign:"center",padding:"5%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"10px"},children:[Object(h.jsx)("p",{children:"State"}),Object(h.jsx)("p",{children:e.state})]})]})]})]},e._id),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})})).reverse()})]})},v=function(){var e=Object(u.c)((function(e){return e.userReducer})),t=Object(u.c)((function(e){return e.isLoggedIn})),s=Object(u.b)();return Object(h.jsxs)("div",{children:[!1===t?Object(h.jsx)(o.a,{to:"/"}):null,Object(h.jsxs)("div",{className:"container",style:{paddingTop:"5%"},children:[Object(h.jsxs)("h5",{children:[Object(h.jsx)("img",{src:m,alt:"",style:{height:"2rem",width:"2rem",borderRadius:"50%"}})," ",e.username]}),Object(h.jsxs)("div",{style:{backgroundColor:"rgb(15, 15, 15)",borderRadius:"10px",padding:"1%",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(h.jsx)(j.b,{to:"/dashboard",style:{color:"white"},children:Object(h.jsxs)("h6",{children:[Object(h.jsx)("img",{src:g,alt:"",style:{height:"2rem"}}),"Dashboard"]})}),Object(h.jsxs)("h6",{children:[Object(h.jsx)("button",{onClick:function(){s({type:"LOGGED_OUT"}),s(b({username:" ",patients:0,patientsList:[],encounters:0,encountersList:[]}))},className:"btn btn-success btn-sm",style:{borderRadius:"50%"},children:Object(h.jsx)("img",{src:p,alt:"",style:{height:"1rem"}})})," Log out"]})]}),Object(h.jsx)("hr",{style:{border:"1px solid white"}})]}),Object(h.jsxs)("div",{className:"container",style:{marginTop:"5%"},children:[Object(h.jsx)("h5",{children:"Encounters Table"}),Object(h.jsx)("table",{id:"table",className:"container",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Surname"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Gender"}),Object(h.jsx)("th",{children:"Age"}),Object(h.jsx)("th",{children:"View"})]}),e.encountersList.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.surname}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.gender}),Object(h.jsx)("td",{children:e.age}),Object(h.jsx)("td",{children:Object(h.jsx)(j.b,{to:{pathname:"/encounterdetails",state:{id:e._id}},children:Object(h.jsx)("button",{className:"btn btn-success",children:"View"})})})]},e._id)})).reverse()]})})]})]})},w=function(e){var t=Object(u.c)((function(e){return e.userReducer})),s=Object(u.c)((function(e){return e.isLoggedIn})),r=Object(u.b)();return Object(h.jsxs)("div",{children:[!1===s?Object(h.jsx)(o.a,{to:"/"}):null,Object(h.jsxs)("div",{className:"container",style:{paddingTop:"5%"},children:[Object(h.jsxs)("h5",{children:[Object(h.jsx)("img",{src:m,alt:"",style:{height:"2rem",width:"2rem",borderRadius:"50%"}})," ",t.username]}),Object(h.jsxs)("div",{style:{backgroundColor:"rgb(15, 15, 15)",borderRadius:"10px",padding:"1%",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(h.jsx)(j.b,{to:"/dashboard",style:{color:"white"},children:Object(h.jsxs)("h6",{children:[Object(h.jsx)("img",{src:g,alt:"",style:{height:"2rem"}}),"Dashboard"]})}),Object(h.jsxs)("h6",{children:[Object(h.jsx)("button",{onClick:function(){r({type:"LOGGED_OUT"}),r(b({username:" ",patients:0,patientsList:[],encounters:0,encountersList:[]}))},className:"btn btn-success btn-sm",style:{borderRadius:"50%"},children:Object(h.jsx)("img",{src:p,alt:"",style:{height:"1rem"}})})," Log out"]})]}),Object(h.jsx)("hr",{style:{border:"1px solid white"}})]}),t.patientsList.map((function(t){if(t._id===e.location.state.id)return Object(h.jsxs)("div",{className:"container",style:{marginTop:"5%"},children:[Object(h.jsx)("h5",{style:{background:"blue"},children:"Patients Details"}),Object(h.jsx)("br",{}),Object(h.jsx)("table",{className:"container",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Surname"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.surname})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Name"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.name})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Username"}),Object(h.jsxs)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:[t.username,"e"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Age"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.age})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Gender"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.gender})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Height"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.height})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Weight"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.weight})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"BMI"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.bmi})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Ward"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.ward})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"L.G.A"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.lga})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"State"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.state})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Date"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.date})]})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]},t._id)})).reverse()]})},L=function(e){var t=Object(u.c)((function(e){return e.userReducer})),s=Object(u.c)((function(e){return e.isLoggedIn})),r=Object(u.b)();return Object(h.jsxs)("div",{children:[!1===s?Object(h.jsx)(o.a,{to:"/"}):null,Object(h.jsxs)("div",{className:"container",style:{paddingTop:"5%"},children:[Object(h.jsxs)("h5",{children:[Object(h.jsx)("img",{src:m,alt:"",style:{height:"2rem",width:"2rem",borderRadius:"50%"}})," ",t.username]}),Object(h.jsxs)("div",{style:{backgroundColor:"rgb(15, 15, 15)",borderRadius:"10px",padding:"1%",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(h.jsx)(j.b,{to:"/dashboard",style:{color:"white"},children:Object(h.jsxs)("h6",{children:[Object(h.jsx)("img",{src:g,alt:"",style:{height:"2rem"}}),"Dashboard"]})}),Object(h.jsxs)("h6",{children:[Object(h.jsx)("button",{onClick:function(){r({type:"LOGGED_OUT"}),r(b({username:" ",patients:0,patientsList:[],encounters:0,encountersList:[]}))},className:"btn btn-success btn-sm",style:{borderRadius:"50%"},children:Object(h.jsx)("img",{src:p,alt:"",style:{height:"1rem"}})})," Log out"]})]}),Object(h.jsx)("hr",{style:{border:"1px solid white"}})]}),t.encountersList.map((function(t){if(t._id===e.location.state.id)return Object(h.jsxs)("div",{className:"container",style:{marginTop:"5%"},children:[Object(h.jsx)("h5",{style:{background:"blue"},children:"Patients Details"}),Object(h.jsx)("br",{}),Object(h.jsx)("table",{className:"container",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Surname"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.surname})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Name"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.name})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Username"}),Object(h.jsxs)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:[t.username,"e"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Age"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.age})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Gender"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.gender})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Height"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.height})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Weight"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.weight})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"BMI"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.bmi})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Visit Type"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.type})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"B.P"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.bp})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Temperature"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.temperature})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Respiratory Rate"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.rr})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Complaint"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.complaint})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Diagnosis"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.diagnosis})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Treatment"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.treatment})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{width:"20%",borderBottom:"1px solid black"},children:"Date"}),Object(h.jsx)("td",{style:{width:"80%",textAlign:"left",paddingLeft:"2%"},children:t.date})]})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]},t._id)})).reverse()]})};var N=function(){return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(o.b,{exact:!0,path:"/",render:function(e){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(x,{})})}}),Object(h.jsx)(o.b,{exact:!0,path:"/signup",component:O}),Object(h.jsx)(o.b,{exact:!0,path:"/dashboard",component:f}),Object(h.jsx)(o.b,{exact:!0,path:"/patients",component:y}),Object(h.jsx)(o.b,{exact:!0,path:"/encounters",component:v}),Object(h.jsx)(o.b,{exact:!0,path:"/patientdetails",component:w}),Object(h.jsx)(o.b,{exact:!0,path:"/encounterdetails",component:L})]})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,94)).then((function(t){var s=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),r(e),c(e),n(e),i(e)}))},S=s(16),A={username:"",patients:0,patientsList:[],encounters:0,encountersList:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NAME":return t.data;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_IN":return!0;case"LOGGED_OUT":return!1;default:return e}},R=Object(S.a)({userReducer:k,isLoggedIn:T}),D=Object(S.b)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(u.a,{store:D,children:Object(h.jsx)(N,{})})}),document.getElementById("root")),C()}},[[91,1,2]]]);
//# sourceMappingURL=main.127f0653.chunk.js.map