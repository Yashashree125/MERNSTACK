(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(17),s=a(35),o=a(81),l=a(82),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b="LIKE",f=Object(s.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case u:return[].concat(Object(l.a)(e),[t.payload]);case d:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case p:return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),m=a(50),h=a(165),x=a(166),O=a(160),g=a(169),v=a(164),y=a(157),C=a(159),w=a(168),k=a(161),N=a(162),I=a(78),E=a.n(I),S=a(79),_=a.n(S),D=a(77),z=a.n(D),T=a(71),W=a.n(T),A=a(13),B=a.n(A),F=a(23),L=a(36),M=a.n(L),P="http://localhost:5000/posts",R=function(e){return M.a.patch("".concat(P,"/").concat(e,"/likePost"))},H=function(e,t){return M.a.patch("".concat(P,"/").concat(e),t)},J=function(e){return M.a.delete("".concat(P,"/").concat(e))},K=function(e){return function(){var t=Object(F.a)(B.a.mark((function t(a){var n,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,M.a.post(P,c);case 3:n=t.sent,r=n.data,a({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},U=function(e,t){return function(){var a=Object(F.a)(B.a.mark((function a(n){var r,c;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,H(e,t);case 3:r=a.sent,c=r.data,n({type:d,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},V=a(154),q=Object(V.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),G=a(5),Q=function(e){var t=e.post,a=e.setCurrentId,n=Object(i.b)(),r=q();return Object(G.jsxs)(y.a,{className:r.card,children:[Object(G.jsx)(C.a,{className:r.media,image:t.selectedFile,title:t.title}),Object(G.jsxs)("div",{className:r.overlay,children:[Object(G.jsx)(O.a,{variant:"h6",children:t.creator}),Object(G.jsx)(O.a,{variant:"body2",children:W()(t.createdAt).fromNow()})]}),Object(G.jsx)("div",{className:r.overlay2,children:Object(G.jsx)(w.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(G.jsx)(z.a,{fontSize:"default"})})}),Object(G.jsx)("div",{className:r.details,children:Object(G.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(G.jsx)(O.a,{className:r.title,gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(G.jsx)(k.a,{children:Object(G.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(G.jsxs)(N.a,{className:r.cardActions,children:[Object(G.jsxs)(w.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(F.a)(B.a.mark((function t(a){var n,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R(e);case 3:n=t.sent,r=n.data,a({type:b,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(G.jsx)(E.a,{fontSize:"small"})," Like ",t.likeCount," "]}),Object(G.jsxs)(w.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(F.a)(B.a.mark((function t(a){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(G.jsx)(_.a,{fontSize:"small"})," Delete"]})]})]})},X=a(163),Y=Object(V.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Z=function(e){var t=e.setCurrentId,a=Y(),n=Object(i.c)((function(e){return e.posts}));return n.length?Object(G.jsx)(v.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(G.jsx)(v.a,{item:!0,xs:12,sm:6,md:6,children:Object(G.jsx)(Q,{post:e,setCurrentId:t})},e._id)}))}):Object(G.jsx)(X.a,{})},$=a(18),ee=a(84),te=a(167),ae=a(80),ne=a.n(ae),re=Object(V.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ce=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(m.a)(r,2),s=c[0],o=c[1],l=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),u=Object(i.b)(),d=re();Object(n.useEffect)((function(){l&&o(l)}),[l]);var p=function(){a(0),o({creator:"",title:"",message:"",tags:"",selectedFile:""})},j=function(){var e=Object(F.a)(B.a.mark((function e(a){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(u(K(s)),p()):(u(U(t,s)),p());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsx)(ee.a,{className:d.paper,children:Object(G.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:j,children:[Object(G.jsx)(O.a,{variant:"h6",children:t?'Editing "'.concat(l.title,'"'):"Creating a Post"}),Object(G.jsx)(te.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:s.creator,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{creator:e.target.value}))}}),Object(G.jsx)(te.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{title:e.target.value}))}}),Object(G.jsx)(te.a,{name:"Description",variant:"outlined",label:"Description",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{message:e.target.value}))}}),Object(G.jsx)(te.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(G.jsx)("div",{className:d.fileInput,children:Object(G.jsx)(ne.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object($.a)(Object($.a)({},s),{},{selectedFile:t}))}})}),Object(G.jsx)(w.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(G.jsx)(w.a,{variant:"contained",color:"secondary",size:"small",onClick:p,fullWidth:!0,children:"Clear"})]})})},ie=Object(V.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}}})),se=a.p+"static/media/memories.8ff8195b.jpg",oe=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],c=ie(),s=Object(i.b)();return Object(n.useEffect)((function(){s(function(){var e=Object(F.a)(B.a.mark((function e(t){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get(P);case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,s]),Object(G.jsxs)(h.a,{maxWidth:"lg",children:[Object(G.jsxs)(x.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(G.jsx)(O.a,{className:c.heading,variant:"h2",align:"center",children:"Celluloid"}),Object(G.jsx)("img",{className:c.image,src:se,alt:"icon",height:"50"})]}),Object(G.jsx)(g.a,{in:!0,children:Object(G.jsx)(h.a,{children:Object(G.jsxs)(v.a,{className:c.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(G.jsx)(v.a,{item:!0,xs:12,sm:7,children:Object(G.jsx)(Z,{setCurrentId:r})}),Object(G.jsx)(v.a,{item:!0,xs:12,sm:4,children:Object(G.jsx)(ce,{currentId:a,setCurrentId:r})})]})})})]})},le=(a(124),Object(s.d)(f,Object(s.c)(Object(s.a)(o.a))));c.a.render(Object(G.jsx)(i.a,{store:le,children:Object(G.jsx)(oe,{})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.b747dabe.chunk.js.map