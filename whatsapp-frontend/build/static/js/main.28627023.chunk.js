(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{110:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(30),i=c.n(n),r=(c(81),c(13)),o=(c(82),c(25)),j=c.n(o),l=c(33),d=(c(84),c(69)),b=c.n(d),h=c(68),u=c.n(h),p=c(70),O=c.n(p),m=c(74),x=c(140),f=c(131),v=c(132),g=c(63),N=c.n(g).a.create({baseURL:"http://localhost:9000"}),_=c(45),w=(_.a.initializeApp({apiKey:"AIzaSyDYxKyE9oW-Ne854_GWEzewLfHlVe1ZHd8",authDomain:"whatsapp-mern-b65cd.firebaseapp.com",projectId:"whatsapp-mern-b65cd",storageBucket:"whatsapp-mern-b65cd.appspot.com",messagingSenderId:"61497501443",appId:"1:61497501443:web:8c1b448914c7aa6ce82b36"}).firestore(),_.a.auth()),C=new _.a.auth.GoogleAuthProvider,y=c(3);var k=function(e){var t=e.user,c=e.setProfileBar,s=Object(a.useState)(!1),n=Object(r.a)(s,2),i=n[0],o=n[1],d=Object(a.useState)([]),h=Object(r.a)(d,2),p=h[0],g=h[1],_=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(c=prompt("Please enter name for chat"))){e.next=6;break}return a={headers:{"Content-Type":"application/json"}},e.next=6,N.post("/rooms/new",{name:c},a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){N.get("/rooms").then((function(e){g(e.data)}))}),[p]),Object(y.jsxs)("div",{className:"sidebar",children:[Object(y.jsxs)("div",{className:"sidebar_header",children:[Object(y.jsx)(m.a,{children:Object(y.jsx)(x.a,{src:t.photoURL,onClick:function(){c(!0)}})}),Object(y.jsxs)("div",{className:"sidebar_headerRight",children:[Object(y.jsx)(f.a,{children:Object(y.jsx)(u.a,{})}),Object(y.jsx)(f.a,{onClick:function(e){return _(e)},children:Object(y.jsx)(b.a,{})}),Object(y.jsxs)("div",{className:"vertIcon",children:[Object(y.jsx)(f.a,{onClick:function(){o(!i)},children:Object(y.jsx)(O.a,{})}),i&&Object(y.jsx)("div",{className:"dropmenu_one",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{onClick:function(e){return _(e)},children:"Add new chat"}),Object(y.jsx)("li",{onClick:function(){c(!0),o(!1)},children:"Profile"}),Object(y.jsx)("li",{children:"Archived"}),Object(y.jsx)("li",{children:"Settings"}),Object(y.jsx)("li",{onClick:function(){w.signOut().then((function(){console.log("signout Successful")}),(function(e){console.log(e)}))},children:"Log out"})]})})]})]})]}),Object(y.jsx)("div",{className:"sidebar_search",children:Object(y.jsxs)("div",{className:"sidebar_searchContainer",children:[Object(y.jsx)(v.a,{}),Object(y.jsx)("input",{type:"text",placeholder:"Search or start new chat"})]})}),Object(y.jsxs)("div",{className:"sidebar_chats",children:[Object(y.jsx)(B,{addNewChat:!0,createChat:_}),p.map((function(e){return Object(y.jsx)(B,{id:e._id,name:e.name},e._id)}))]})]})},S=c(72),A=c(133),I=c(134),W=c(135),D=c(136),P=c(71),E=c.n(P),L=(c(110),c(10));var M=function(e){var t=e.user,c=Object(a.useState)(""),s=Object(r.a)(c,2),n=s[0],i=s[1],o=Object(L.f)().roomId,d=Object(L.f)().seed,b=Object(a.useState)(""),h=Object(r.a)(b,2),u=h[0],p=h[1],O=Object(a.useState)([]),m=Object(r.a)(O,2),g=m[0],_=m[1],w=Object(a.useState)(!1),C=Object(r.a)(w,2),k=C[0],P=C[1],M=Object(a.useState)(!1),R=Object(r.a)(M,2),B=R[0],H=R[1],T=Object(a.useState)(null),U=Object(r.a)(T,2),z=U[0],F=U[1],G=Object(a.useState)(!1),J=Object(r.a)(G,2),K=J[0],V=J[1],Z=Object(a.useState)("0.7"),q=Object(r.a)(Z,2),Q=q[0],X=q[1];Object(a.useEffect)((function(){o&&N.get("messages/sync/".concat(o)).then((function(e){_(e.data)}))}),[o]),Object(a.useEffect)((function(){var e=new E.a("1c8efe6427d0e8bf5a05",{cluster:"eu"}).subscribe("messages");return e.bind("inserted",(function(e){_([].concat(Object(S.a)(g),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[g]),Object(a.useEffect)((function(){o&&N.get("/room/".concat(o)).then((function(e){p(e.data[0].name)}))}),[o]);var $=new Date,ee=function(){var e=Object(l.a)(j.a.mark((function e(c){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),a={headers:{"Content-Type":"application/json"}},e.next=4,N.post("messages/new",{message:n,name:t.displayName,timestamp:$.getHours()+":"+$.getMinutes(),received:t.email,roomId:o},a);case 4:i("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(t.target.files[0]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(l.a)(j.a.mark((function e(c){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),!z){e.next=13;break}return(a=new FormData).append("name",t.displayName),a.append("timestamp",$.getHours()+":"+$.getMinutes()),a.append("received",t.email),a.append("roomId",o),a.append("doc",z),e.next=10,N.post("/messages/fileupload",a);case 10:F(null),e.next=15;break;case 13:return alert("Please add a file"),e.abrupt("return");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"chat",style:{flex:"".concat(Q)},children:[Object(y.jsxs)("div",{className:"chat_header",children:[Object(y.jsx)(x.a,{src:"https://avatars.dicebear.com/api/human/".concat(d,".svg")}),Object(y.jsxs)("div",{className:"chat_headerInfo",children:[Object(y.jsx)("h3",{children:u}),Object(y.jsxs)("p",{children:["Last seen at"," ",$.getHours()+":"+$.getMinutes()]})]}),Object(y.jsxs)("div",{className:"chat_headerRight",children:[Object(y.jsx)(f.a,{children:Object(y.jsx)(v.a,{})}),Object(y.jsxs)("div",{className:"vertIcon",children:[Object(y.jsx)(f.a,{onClick:function(){P(!k)},children:Object(y.jsx)(A.a,{})}),k&&Object(y.jsx)("div",{className:"dropmenu",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{onClick:function(){V(!0),P(!1),X("0.4")},children:"Contact Info"}),Object(y.jsx)("li",{onClick:function(e){e.preventDefault(),N.delete("messages/clear/".concat(o)),_([])},children:"Clear Messages"})]})})]})]})]}),Object(y.jsx)("div",{className:"chat_body",children:g&&g.map((function(e,c){return Object(y.jsxs)("p",{className:"chat_message ".concat(e.received===t.email?"chat_receiver":""),children:[Object(y.jsx)("span",{className:"chat_name",children:e.name}),e.message,e.doc&&Object(y.jsxs)(a.Fragment,{children:[Object(y.jsxs)("div",{className:"doc",children:[Object(y.jsx)("img",{className:"doc-icon",alt:"doc",src:"https://icon-library.com/images/document-icon-images/document-icon-images-2.jpg"}),Object(y.jsx)("a",{href:"http://localhost:9000/".concat(e.doc),children:e.doc})]}),Object(y.jsx)("span",{className:"chat_timestamp_2",children:e.timestamp})]}),!e.doc&&Object(y.jsx)("span",{className:"chat_timestamp",children:e.timestamp})]},c)}))}),Object(y.jsxs)("div",{className:"chat_footer",children:[Object(y.jsx)(f.a,{children:Object(y.jsx)(I.a,{})}),Object(y.jsxs)("div",{className:"attachment",children:[B&&Object(y.jsx)("div",{className:"attachement_optns",children:Object(y.jsxs)("form",{onSubmit:ce,children:[Object(y.jsx)("label",{htmlFor:"doc-input",children:Object(y.jsx)("img",{src:"https://i.pinimg.com/originals/e2/6f/33/e26f33f35d71a5c5c23b8291d7a2b212.png",alt:"addDoc"})}),Object(y.jsx)("input",{type:"file",name:"file",id:"doc-input",onChange:function(e){return te(e)}}),Object(y.jsx)("button",{type:"Submit",children:"Upload Doc"})]})}),Object(y.jsx)(f.a,{className:"attach_file",onClick:function(){H(!B)},children:Object(y.jsx)(W.a,{})})]}),Object(y.jsxs)("form",{children:[Object(y.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Type a message"}),Object(y.jsx)("button",{onClick:ee,type:"submit",children:"Send a message"})]}),Object(y.jsx)(f.a,{children:Object(y.jsx)(D.a,{})})]}),K&&Object(y.jsx)(Y,{setContactSec:V,setWidth:X,roomName:u,seed:d})]})},R=(c(112),c(36));var B=function(e){var t,c=e.id,s=e.name,n=e.addNewChat,i=e.createChat,o=Object(a.useState)(""),j=Object(r.a)(o,2),l=j[0],d=j[1],b=Object(a.useState)([]),h=Object(r.a)(b,2),u=h[0],p=h[1];return Object(a.useEffect)((function(){d(Math.floor(5e3*Math.random()))}),[]),Object(a.useEffect)((function(){N.get("messages/sync/".concat(c)).then((function(e){e.data.reverse(),p(e.data)}))}),[c]),n?Object(y.jsx)("div",{onClick:function(e){return i(e)},className:"sidebarChat",children:Object(y.jsx)("h2",{children:"Add new Chat"})}):Object(y.jsx)(R.b,{to:"/rooms/".concat(c,"/").concat(l),children:Object(y.jsxs)("div",{className:"sidebarChat",children:[Object(y.jsx)(x.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),Object(y.jsxs)("div",{className:"sidebarChat_info",children:[Object(y.jsx)("h2",{children:s}),Object(y.jsx)("p",{children:null===(t=u[0])||void 0===t?void 0:t.message})]})]})})},H=c(137);c(113);var T=function(e){var t=e.addUser;return Object(y.jsx)("div",{className:"login",children:Object(y.jsxs)("div",{className:"login_container",children:[Object(y.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png",alt:"whatsapp-logo"}),Object(y.jsx)("div",{className:"login_text",children:Object(y.jsx)("h1",{children:"Sign in to whatsapp"})}),Object(y.jsx)("br",{}),Object(y.jsx)(H.a,{onClick:function(){w.signInWithPopup(C).then((function(e){console.log(e),t(e.user)})).catch((function(e){alert(e.message)}))},children:"Sign in with Google"})]})})};c(114);var U=function(){return Object(y.jsxs)("div",{className:"formal",children:[Object(y.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png",alt:"whatsapp-logo"}),Object(y.jsx)("br",{}),"Hi!",Object(y.jsx)("br",{}),"Welcome To whatsapp"]})},z=c(138);c(115);var F={button:{color:"white",height:"40px",width:"40px",position:"relative",top:"8px",marginRight:"10px",paddingLeft:0},icon:{fontSize:"40px"}},G=function(e){var t=e.user,c=e.setProfileBar;return Object(y.jsxs)("div",{className:"profile",children:[Object(y.jsxs)("div",{className:"profile_header",children:[Object(y.jsx)(f.a,{onClick:function(){return c(!1)},style:F.button,children:Object(y.jsx)(z.a,{style:F.icon})}),Object(y.jsx)("span",{children:"Profile"})]}),Object(y.jsxs)("div",{className:"profile_body",children:[Object(y.jsx)("div",{className:"profile_pic",children:Object(y.jsx)("img",{alt:"profile_pic",src:t.photoURL})}),Object(y.jsxs)("div",{className:"name_sec",children:[Object(y.jsx)("span",{children:"Your Name"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{className:"text",children:t.displayName})]}),Object(y.jsx)("div",{className:"useless_text",children:"This is not your username or pin. This name will be visible to your WhatsApp contacts."}),Object(y.jsxs)("div",{className:"name_sec about_sec",children:[Object(y.jsx)("span",{children:"About"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{className:"text",children:"Available"})]})]})]})},J=c(139);c(116);var K={button:{height:"40px",width:"40px",position:"relative",top:"8px",marginRight:"10px",paddingLeft:0},icon:{fontSize:"40px"}},Y=function(e){var t=e.setContactSec,c=e.setWidth,a=e.roomName,s=e.seed;return Object(y.jsxs)("div",{className:"contact",children:[Object(y.jsxs)("div",{className:"contact_header",children:[Object(y.jsx)(f.a,{onClick:function(){t(!1),c("0.7")},style:K.button,children:Object(y.jsx)(J.a,{style:K.icon})}),Object(y.jsx)("span",{children:"Contact"})]}),Object(y.jsxs)("div",{className:"profile_body",children:[Object(y.jsx)("div",{className:"profile_pic",children:Object(y.jsx)("img",{alt:"profile_pic",src:"https://avatars.dicebear.com/api/human/".concat(s,".svg")})}),Object(y.jsxs)("div",{className:"name_sec",children:[Object(y.jsx)("span",{children:"Contact Name"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{className:"text",children:a})]}),Object(y.jsxs)("div",{className:"name_sec about_sec",children:[Object(y.jsx)("span",{children:"About"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{className:"text",children:"Available"})]})]})]})};var V=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),i=Object(r.a)(n,2),o=i[0],j=i[1];return Object(y.jsx)("div",{className:"App",children:c?Object(y.jsx)("div",{className:"app_body",children:Object(y.jsxs)(R.a,{children:[Object(y.jsx)(k,{user:c,setProfileBar:j}),o&&Object(y.jsx)(G,{user:c,setProfileBar:j}),Object(y.jsxs)(L.c,{children:[Object(y.jsx)(L.a,{exact:!0,path:"/",children:Object(y.jsx)(U,{})}),Object(y.jsx)(L.a,{path:"/rooms/:roomId/:seed",children:Object(y.jsx)(M,{user:c})})]})]})}):Object(y.jsx)(T,{addUser:function(e){s(e),console.log(e)}})})};i.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(V,{})}),document.getElementById("root"))},81:function(e,t,c){},82:function(e,t,c){},84:function(e,t,c){}},[[117,1,2]]]);
//# sourceMappingURL=main.28627023.chunk.js.map