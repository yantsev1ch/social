(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return u}));var a=n(145),r=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"7e5b4528-2880-4677-b629-b878b7697787"}}),c={me:function(){return r.get("/auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return r.delete("/auth/login").then((function(e){return e.data}))}},o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("/users?page=".concat(e,"&count=").concat(t,"&sortOrder=asc")).then((function(e){return e.data}))}},i={getUser:function(e){return r.get("/profile/".concat(e))},getStatus:function(e){return r.get("/profile/status/".concat(e))},updateStatus:function(e){return r.put("/profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return r.put("/profile",e)}},s={unfollowUser:function(e){return r.delete("/follow/".concat(e))},followUser:function(e){return r.post("/follow/".concat(e))}},u={getCaptchaUrl:function(){return r.get("/security/get-captcha-url")}}},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(44),r=n(4),c=n(20),o={dialogs:[{id:Object(c.a)(),name:"Jack"},{id:Object(c.a)(),name:"Nick"},{id:Object(c.a)(),name:"Alex"}],messages:[{id:Object(c.a)(),message:"Hi! How are you?"},{id:Object(c.a)(),message:"I am fine! And you?"},{id:Object(c.a)(),message:"Me too. Have a nice day!"},{id:Object(c.a)(),message:":)"}]},i=function(e){return{type:"dialogs/ADD_MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD_MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:Object(c.a)(),message:t.newMessageBody}])});default:return e}}},134:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"e",(function(){return _}));var a=n(6),r=n.n(a),c=n(10),o=n(44),i=n(4),s=n(11),u=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),a):e}))},l="users/FOLLOW",f={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(e){return{type:l,userId:e}},p=function(e){return{type:"users/UNFOLLOW",userId:e}},d=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},h=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"users/TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}},g=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(h(!0)),a(d(e)),n.next=4,s.e.getUsers(e,t);case 4:c=n.sent,a(h(!1)),a({type:"users/SET_USERS",users:c.items}),a({type:"users/SET_TOTAL_COUNT",totalCount:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,+n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(b(!1,+n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(n,e,s.b.followUser.bind(s.b),m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(n,e,s.b.unfollowUser.bind(s.b),p);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case"users/SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"users/SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"users/SET_TOTAL_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalCount});case"users/TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},135:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__1oiXV"}},136:function(e,t,n){e.exports=n.p+"static/media/profile.6be79ee3.jpg"},137:function(e,t,n){e.exports=n.p+"static/media/dialogs.6fe6dff8.jpg"},138:function(e,t,n){e.exports=n.p+"static/media/users.9a90444d.jpg"},139:function(e,t,n){e.exports=n.p+"static/media/news.de3167ce.jpg"},140:function(e,t,n){e.exports=n.p+"static/media/music.3e4441df.jpg"},141:function(e,t,n){e.exports=n.p+"static/media/friends.50d16565.jpg"},142:function(e,t,n){e.exports={banner:"Banner_banner__1ox2x"}},146:function(e,t,n){e.exports={socialLinks:"SocialLinks_socialLinks__38whE"}},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},15:function(e,t,n){e.exports={nav:"Nav_nav__3C39h",link:"Nav_link__2qWFD",activeLink:"Nav_activeLink__394vJ"}},151:function(e,t,n){e.exports=n.p+"static/media/loader.5613c226.svg"},180:function(e,t,n){e.exports=n(305)},185:function(e,t,n){},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f}));var a=n(98),r=n(0),c=n.n(r),o=n(27),i=n.n(o),s=n(89),u=function(e){var t=e.input,n=e.meta,r=n.touched,o=n.error,s=Object(a.a)(e,["input","meta"]),u=r&&o;return c.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},c.a.createElement("textarea",Object.assign({},t,{className:i.a.textarea},s)),c.a.createElement("span",{className:i.a.errorMsg},u&&o))},l=function(e){var t=e.input,n=e.meta,r=n.touched,o=n.error,s=(e.text,Object(a.a)(e,["input","meta","text"])),u=r&&o;return c.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},c.a.createElement("input",Object.assign({},t,{className:i.a.inputText},s)),c.a.createElement("span",{className:i.a.errorMsg},u&&o))},f=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4?arguments[4]:void 0;return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,Object.assign({name:e,validate:t,component:n},a)),r)}},25:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),function(e){e[e.success=0]="success",e[e.error=1]="error"}(a||(a={}));var r={userId:1,lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",aboutMe:"",contacts:{github:"",vk:"",facebook:"",instagram:"",twitter:"",website:"",youtube:"",mainLink:""},photos:{small:"",large:""}}},26:function(e,t,n){e.exports={formRow:"LoginForm_formRow__run0D",button:"LoginForm_button__3uNqO",errorMsg:"LoginForm_errorMsg__1OYMz"}},27:function(e,t,n){e.exports={textarea:"FormControls_textarea__2XnMZ",inputText:"FormControls_inputText__Jsp5o",formControl:"FormControls_formControl__1_tJx",error:"FormControls_error__jcdfe",errorMsg:"FormControls_errorMsg__1A9DO"}},305:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),c=n(69),o=n.n(c),i=(n(185),n(56)),s=n(57),u=n(59),l=n(58),f=n(38),m=n.n(f),p=n(32),d=n(135),h=n.n(d),b=n(136),g=n.n(b),E=n(137),v=n.n(E),_=n(138),O=n.n(_),w=n(139),j=n.n(w),k=n(140),N=n.n(k),y=n(141),S=n.n(y),x=n(142),C=n.n(x),L=function(e){return r.a.createElement("div",{className:C.a.banner},r.a.createElement("img",{src:e.image,alt:e.title}))},A=n(15),T=n.n(A),U=n(13),P=function(){return r.a.createElement("nav",{className:T.a.nav},r.a.createElement(U.b,{to:"/profile",className:T.a.link,activeClassName:T.a.activeLink},"Profile"),r.a.createElement(U.b,{to:"/dialogs",className:T.a.link,activeClassName:T.a.activeLink},"Dialogs"),r.a.createElement(U.b,{to:"/users",className:T.a.link,activeClassName:T.a.activeLink},"Users"),r.a.createElement(U.b,{to:"/news",className:T.a.link,activeClassName:T.a.activeLink},"News"),r.a.createElement(U.b,{to:"/music",className:T.a.link,activeClassName:T.a.activeLink},"Music"),r.a.createElement(U.b,{to:"/friends",className:T.a.link,activeClassName:T.a.activeLink},"Friends"))},F=n(45),I=n.n(F),M=function(e){return r.a.createElement("header",{className:I.a.header},r.a.createElement("h3",{className:I.a.title},"Social Network ",r.a.createElement("span",null,"by Andrei Yantsevich")),r.a.createElement("div",{className:I.a.loginBlock},e.isAuth?r.a.createElement("div",null,"Hello, ",e.login,"! ",r.a.createElement("br",null),r.a.createElement("span",{onClick:e.logout,className:I.a.logout},"Logout")):r.a.createElement(U.b,{className:I.a.loginLink,to:"/login"},"Login")))},R=n(18),G=n(6),D=n.n(G),H=n(10),z=n(4),B=n(11),W=n(25),J=n(33),q={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Y=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{userId:e,email:t,login:n,isAuth:a}}},Z=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},V=function(){return function(){var e=Object(H.a)(D.a.mark((function e(t){var n,a,r,c,o;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.me();case 2:(n=e.sent).resultCode===W.a.success&&(a=n.data,r=a.id,c=a.login,o=a.email,t(Y(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X=function(){return function(){var e=Object(H.a)(D.a.mark((function e(t){var n,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.d.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(Z(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(z.a)(Object(z.a)({},e),t.data);case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(z.a)(Object(z.a)({},e),t.payload);default:return e}},Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(M,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(r.a.Component),$=Object(R.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(H.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.logout();case 2:e.sent.resultCode===W.a.success&&t(Y(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Q),ee=function(){return r.a.createElement("div",{className:h.a.sidebar},r.a.createElement(p.b,{path:"/profile",render:function(){return r.a.createElement(L,{image:g.a,title:"Profile"})}}),r.a.createElement(p.b,{path:"/dialogs",render:function(){return r.a.createElement(L,{image:v.a,title:"Dialogs"})}}),r.a.createElement(p.b,{path:"/users",render:function(){return r.a.createElement(L,{image:O.a,title:"Users"})}}),r.a.createElement(p.b,{path:"/news",render:function(){return r.a.createElement(L,{image:j.a,title:"News"})}}),r.a.createElement(p.b,{path:"/music",render:function(){return r.a.createElement(L,{image:N.a,title:"Music"})}}),r.a.createElement(p.b,{path:"/friends",render:function(){return r.a.createElement(L,{image:S.a,title:"Friends"})}}),r.a.createElement($,null),r.a.createElement(P,null))},te=n(92),ne=n.n(te),ae=n(146),re=n.n(ae),ce=n(93),oe=n.n(ce),ie=function(e){var t=e.link,n=e.title;return r.a.createElement("div",{className:oe.a.socialLink},r.a.createElement("a",{className:oe.a.link,href:t,target:"_blank",rel:"noopener noreferrer"},n))},se=function(){return r.a.createElement("section",{className:re.a.socialLinks},r.a.createElement(ie,{link:"https://www.linkedin.com/in/andrei-yantsevich/",title:"LinkedIn"}),r.a.createElement(ie,{link:"https://github.com/AndreiYantsevich",title:"Github"}),r.a.createElement(ie,{link:"https://t.me/yantsev1ch",title:"Telegram"}))},ue=function(){return r.a.createElement("div",{className:ne.a.footer},r.a.createElement(se,null),r.a.createElement("p",{className:ne.a.copyright},"\xa9 Created by Andrei Yantsevich"))},le=n(147),fe=n.n(le),me=function(){return r.a.createElement("div",{className:fe.a.news},r.a.createElement("h1",null,"News"))},pe=n(148),de=n.n(pe),he=function(){return r.a.createElement("div",{className:de.a.music},r.a.createElement("h1",null,"Music"))},be=n(149),ge=n.n(be),Ee=function(){return r.a.createElement("div",{className:ge.a.friends},r.a.createElement("h1",null,"Friends"))},ve=n(94),_e=n.n(ve),Oe=n(26),we=n.n(Oe),je=n(132),ke=n(24),Ne=n(67),ye=Object(je.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.captchaUrl,a=e.error;return r.a.createElement("form",{className:we.a.form,onSubmit:t},a&&r.a.createElement("p",{className:we.a.errorMsg},a),n&&r.a.createElement("img",{src:n}),n&&Object(ke.c)("captcha",[Ne.b],ke.a),r.a.createElement("div",{className:we.a.formRow},r.a.createElement("label",{htmlFor:"login_login"},"Login"),Object(ke.c)("email",[Ne.b],ke.a)),r.a.createElement("div",{className:we.a.formRow},r.a.createElement("label",{htmlFor:"login_psw"},"Password"),Object(ke.c)("password",[Ne.b],ke.a,{type:"password"})),r.a.createElement("div",{className:we.a.formRow},Object(ke.c)("rememberMe",[],ke.a,{type:"checkbox",className:we.a.inputCheckbox},"Remember me")),r.a.createElement("div",{className:we.a.formRow},r.a.createElement("button",{type:"submit",className:we.a.button},"Send")))})),Se={login:function(e,t,n,a){return function(){var r=Object(H.a)(D.a.mark((function r(c){var o,i;return D.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,B.a.login(e,t,n,a);case 2:(o=r.sent).resultCode===W.a.success?c(V()):(10===o.resultCode&&c(X()),i=o.messages.length>0?o.messages[0]:"Some Error",c(Object(J.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}},xe=Object(R.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),Se)((function(e){var t=e.login,n=e.captchaUrl;return e.isAuth?r.a.createElement(p.a,{to:"/profile"}):r.a.createElement("div",{className:_e.a.login},r.a.createElement("h1",null,"Login"),r.a.createElement("section",{className:_e.a.section},r.a.createElement(ye,{captchaUrl:n,onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)}})))})),Ce=n(8),Le={initialized:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(z.a)(Object(z.a)({},e),{},{initialized:!0});default:return e}},Te=n(51),Ue=r.a.lazy((function(){return n.e(4).then(n.bind(null,324))})),Pe=r.a.lazy((function(){return n.e(3).then(n.bind(null,323))})),Fe=r.a.lazy((function(){return n.e(5).then(n.bind(null,325))})),Ie=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){console.log("Some error occured"),console.log(e)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandlesrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandlesrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:m.a.app},r.a.createElement("main",{className:m.a.main},r.a.createElement("div",{className:m.a.sidebar},r.a.createElement(ee,null)),r.a.createElement("div",{className:m.a.content},r.a.createElement("div",{className:m.a.contentMain},r.a.createElement(p.d,null,r.a.createElement(p.a,{exact:!0,from:"/",to:"/profile"}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(p.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(Te.a,null)},r.a.createElement(Pe,null))}}),r.a.createElement(p.b,{path:"/dialogs",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(Te.a,null)},r.a.createElement(Ue,null))}}),r.a.createElement(p.b,{path:"/users",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(Te.a,null)},r.a.createElement(Fe,null))}}),r.a.createElement(p.b,{path:"/news",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(p.b,{path:"/music",render:function(){return r.a.createElement(he,null)}}),r.a.createElement(p.b,{path:"/friends",render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(p.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}}))),r.a.createElement("div",{className:m.a.footer},r.a.createElement(ue,null))))):r.a.createElement(Te.a,null)}}]),n}(r.a.Component),Me=Object(Ce.compose)(p.g,Object(R.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(H.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(V()),e.next=3,Promise.all([n]);case 3:t({type:"app/INITIALIZED_SUCCESS"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Ie),Re=n(99),Ge=n(131),De=n(134),He=n(152),ze=n(153),Be=n(133),We=Object(Ce.combineReducers)({profilePage:Re.b,messagesPage:Ge.b,usersPage:De.a,auth:K,form:Be.a,app:Ae}),Je=Object(Ce.createStore)(We,Object(He.composeWithDevTools)(Object(Ce.applyMiddleware)(ze.a))),qe=Je;window.store=Je,o.a.render(r.a.createElement(U.a,null,r.a.createElement(R.a,{store:qe},r.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){e.exports={app:"App_app__1Je8e",main:"App_main__2Bb2U",sidebar:"App_sidebar__2aZqf",content:"App_content__2C8oy",contentMain:"App_contentMain__3n_89",footer:"App_footer__cC4pk"}},45:function(e,t,n){e.exports={header:"Header_header__3N5LP",title:"Header_title__2MH6S",loginBlock:"Header_loginBlock__1_lba",loginLink:"Header_loginLink__16unK",logout:"Header_logout__Y-sqo"}},51:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(97),o=n.n(c),i=n(151),s=n.n(i);t.a=function(){return r.a.createElement("div",{className:o.a.wrapper},r.a.createElement("img",{src:s.a,className:o.a.img,alt:"loader"}))}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},92:function(e,t,n){e.exports={copyright:"Footer_copyright__19Rzc"}},93:function(e,t,n){e.exports={socialLink:"SocialLink_socialLink__3h2HL"}},94:function(e,t,n){e.exports={section:"Login_section__1CXTH"}},97:function(e,t,n){e.exports={wrapper:"Preloader_wrapper__2h-ht",img:"Preloader_img__2_Qxq"}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"f",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return E})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return _}));var a=n(6),r=n.n(a),c=n(10),o=n(44),i=n(4),s=n(20),u=n(11),l=n(25),f=n(33),m="profile/ADD_POST",p={posts:[{id:Object(s.a)(),message:"Hi World! How are you?",likesCounter:75},{id:Object(s.a)(),message:"Today is a good day!",likesCounter:57}],profile:l.b,status:""},d=function(e){return{type:m,newPostBody:e}},h=function(e){return{type:"profile/SET_STATUS",status:e}},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getUser(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:a=t.sent,n(h(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.c.updateStatus(e);case 3:t.sent.data.resultCode===l.a.success&&n(h(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.savePhoto(e);case 2:(a=t.sent).data.resultCode===l.a.success&&n({type:"profile/SAVE_PHOTO",photos:a.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.saveProfile(e);case 2:if(c=t.sent,o=a().auth.userId,c.data.resultCode!==l.a.success){t.next=8;break}o&&n(b(o)),t.next=11;break;case 8:return i=c.data.messages.length>0?c.data.messages[0]:"Some Error",n(Object(f.a)("edit-profile",{_error:i})),t.abrupt("return",Promise.reject(i));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n={id:Object(s.a)(),message:t.newPostBody,likesCounter:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[n].concat(Object(o.a)(e.posts))});case"profile/SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"profile/SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"profile/SAVE_PHOTO":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[180,1,2]]]);
//# sourceMappingURL=main.9c3998bb.chunk.js.map