(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(43),r=n(4),c=n(31),o={dialogs:[{id:Object(c.a)(),name:"Jack"},{id:Object(c.a)(),name:"Nick"},{id:Object(c.a)(),name:"Alex"}],messages:[{id:Object(c.a)(),message:"Hi! How are you?"},{id:Object(c.a)(),message:"I am fine! And you?"},{id:Object(c.a)(),message:"Me too. Have a nice day!"},{id:Object(c.a)(),message:":)"}]},s={addMessage:function(e){return{type:"dialogs/ADD_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD_MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:Object(c.a)(),message:t.newMessageBody}])});default:return e}}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return b}));var a=n(6),r=n.n(a),c=n(11),o=n(43),s=n(4),i=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),a):e}))},u=n(8),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.b.get("/users?page=".concat(e,"&count=").concat(t,"&sortOrder=asc")).then((function(e){return e.data}))},p={unfollowUser:function(e){return u.b.delete("/follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return u.b.post("/follow/".concat(e)).then((function(e){return e.data}))}},f={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m={followSuccess:function(e){return{type:"users/FOLLOW",userId:e}},unFollowSuccess:function(e){return{type:"users/UNFOLLOW",userId:e}},setUsers:function(e){return{type:"users/SET_USERS",users:e}},setCurrentPage:function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},setTotalCount:function(e){return{type:"users/SET_TOTAL_COUNT",totalCount:e}},toggleIsFetching:function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},toggleFollowingInProgress:function(e,t){return{type:"users/TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}}},d=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(m.toggleIsFetching(!0)),a(m.setCurrentPage(e)),n.next=5,l(e,t);case 5:c=n.sent,a(m.toggleIsFetching(!1)),a(m.setUsers(c.items)),a(m.setTotalCount(c.totalCount)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(m.toggleFollowingInProgress(!0,+n)),e.next=4,a(n);case 4:e.sent.resultCode===u.a.success&&t(c(n)),t(m.toggleFollowingInProgress(!1,+n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n,e,p.followUser.bind(p),m.followSuccess);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n,e,p.unfollowUser.bind(p),m.unFollowSuccess);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:i(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:i(e.users,t.userId,"id",{followed:!1})});case"users/SET_USERS":return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case"users/SET_CURRENT_PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case"users/SET_TOTAL_COUNT":return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalCount});case"users/TOGGLE_IS_FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE_FOLLOWING_PROGRESS":return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},134:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__1oiXV"}},135:function(e,t,n){e.exports=n.p+"static/media/profile.6be79ee3.jpg"},136:function(e,t,n){e.exports=n.p+"static/media/dialogs.6fe6dff8.jpg"},137:function(e,t,n){e.exports=n.p+"static/media/users.9a90444d.jpg"},138:function(e,t,n){e.exports=n.p+"static/media/news.de3167ce.jpg"},139:function(e,t,n){e.exports=n.p+"static/media/music.3e4441df.jpg"},140:function(e,t,n){e.exports=n.p+"static/media/friends.50d16565.jpg"},141:function(e,t,n){e.exports={banner:"Banner_banner__1ox2x"}},145:function(e,t,n){e.exports={socialLinks:"SocialLinks_socialLinks__38whE"}},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},15:function(e,t,n){e.exports={nav:"Nav_nav__3C39h",link:"Nav_link__2qWFD",activeLink:"Nav_activeLink__394vJ"}},150:function(e,t,n){e.exports=n.p+"static/media/loader.5613c226.svg"},179:function(e,t,n){e.exports=n(304)},184:function(e,t,n){},23:function(e,t,n){e.exports={settings:"LoginForm_settings__1Q2NN",formRow:"LoginForm_formRow__run0D",button:"LoginForm_button__3uNqO",errorMsg:"LoginForm_errorMsg__1OYMz"}},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return p}));var a=n(97),r=n(0),c=n.n(r),o=n(25),s=n.n(o),i=n(88),u=function(e){var t=e.input,n=e.meta,r=n.touched,o=n.error,i=Object(a.a)(e,["input","meta"]),u=r&&o;return c.a.createElement("div",{className:s.a.formControl+" "+(u?s.a.error:"")},c.a.createElement("textarea",Object.assign({},t,{className:s.a.textarea},i)),c.a.createElement("span",{className:s.a.errorMsg},u&&o))},l=function(e){var t=e.input,n=e.meta,r=n.touched,o=n.error,i=(e.text,Object(a.a)(e,["input","meta","text"])),u=r&&o;return c.a.createElement("div",{className:s.a.formControl+" "+(u?s.a.error:"")},c.a.createElement("input",Object.assign({},t,{className:s.a.inputText},i)),c.a.createElement("span",{className:s.a.errorMsg},u&&o))};function p(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0;return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,Object.assign({name:t,validate:n,component:a,type:s},r)),o)}},25:function(e,t,n){e.exports={textarea:"FormControls_textarea__2XnMZ",inputText:"FormControls_inputText__Jsp5o",formControl:"FormControls_formControl__1_tJx",error:"FormControls_error__jcdfe",errorMsg:"FormControls_errorMsg__1A9DO"}},304:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),c=n(68),o=n.n(c),s=(n(184),n(55)),i=n(56),u=n(58),l=n(57),p=n(37),f=n.n(p),m=n(30),d=n(134),h=n.n(d),g=n(135),b=n.n(g),E=n(136),v=n.n(E),_=n(137),O=n.n(_),w=n(138),j=n.n(w),k=n(139),N=n.n(k),x=n(140),y=n.n(x),S=n(141),C=n.n(S),L=function(e){return r.a.createElement("div",{className:C.a.banner},r.a.createElement("img",{src:e.image,alt:e.title}))},T=n(15),A=n.n(T),U=n(13),P=function(){return r.a.createElement("nav",{className:A.a.nav},r.a.createElement(U.b,{to:"/profile",className:A.a.link,activeClassName:A.a.activeLink},"Profile"),r.a.createElement(U.b,{to:"/dialogs",className:A.a.link,activeClassName:A.a.activeLink},"Dialogs"),r.a.createElement(U.b,{to:"/users",className:A.a.link,activeClassName:A.a.activeLink},"Users"),r.a.createElement(U.b,{to:"/news",className:A.a.link,activeClassName:A.a.activeLink},"News"),r.a.createElement(U.b,{to:"/music",className:A.a.link,activeClassName:A.a.activeLink},"Music"),r.a.createElement(U.b,{to:"/friends",className:A.a.link,activeClassName:A.a.activeLink},"Friends"))},F=n(44),I=n.n(F),R=function(e){return r.a.createElement("header",{className:I.a.header},r.a.createElement("h3",{className:I.a.title},"Social Network ",r.a.createElement("span",null,"by Andrey Yantsevich")),r.a.createElement("div",{className:I.a.loginBlock},e.isAuth?r.a.createElement("div",null,"Hello, ",e.login,"! ",r.a.createElement("br",null),r.a.createElement("span",{onClick:e.logout,className:I.a.logout},"Logout")):r.a.createElement(U.b,{className:I.a.loginLink,to:"/login"},"Login")))},M=n(18),D=n(6),G=n.n(D),H=n(11),z=n(4),W=n(32),B=n(8),q=function(){return B.b.get("/security/get-captcha-url").then((function(e){return e.data}))},J=function(){return B.b.get("/auth/me").then((function(e){return e.data}))},Y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return B.b.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},Z=function(){return B.b.delete("/auth/login").then((function(e){return e.data}))},V={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},X=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{userId:e,email:t,login:n,isAuth:a}}},K=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Q=function(){return function(){var e=Object(H.a)(G.a.mark((function e(t){var n,a,r,c,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J();case 3:(n=e.sent).resultCode===B.a.success&&(a=n.data,r=a.id,c=a.login,o=a.email,t(X(r,o,c,!0))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},$=function(){return function(){var e=Object(H.a)(G.a.mark((function e(t){var n,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q();case 3:n=e.sent,a=n.url,t(K(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(z.a)(Object(z.a)({},e),t.data);case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(z.a)(Object(z.a)({},e),t.payload);default:return e}},te=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(R,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(r.a.Component),ne=Object(M.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(H.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z();case 3:e.sent.resultCode===B.a.success&&t(X(null,null,null,!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})(te),ae=function(){return r.a.createElement("div",{className:h.a.sidebar},r.a.createElement(m.b,{path:"/profile",render:function(){return r.a.createElement(L,{image:b.a,title:"Profile"})}}),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(L,{image:v.a,title:"Dialogs"})}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(L,{image:O.a,title:"Users"})}}),r.a.createElement(m.b,{path:"/news",render:function(){return r.a.createElement(L,{image:j.a,title:"News"})}}),r.a.createElement(m.b,{path:"/music",render:function(){return r.a.createElement(L,{image:N.a,title:"Music"})}}),r.a.createElement(m.b,{path:"/friends",render:function(){return r.a.createElement(L,{image:y.a,title:"Friends"})}}),r.a.createElement(ne,null),r.a.createElement(P,null))},re=n(91),ce=n.n(re),oe=n(145),se=n.n(oe),ie=n(92),ue=n.n(ie),le=function(e){var t=e.link,n=e.title;return r.a.createElement("div",{className:ue.a.socialLink},r.a.createElement("a",{className:ue.a.link,href:t,target:"_blank",rel:"noopener noreferrer"},n))},pe=function(){return r.a.createElement("section",{className:se.a.socialLinks},r.a.createElement(le,{link:"https://www.linkedin.com/in/yantsev1ch/",title:"LinkedIn"}),r.a.createElement(le,{link:"https://github.com/yantsev1ch",title:"Github"}),r.a.createElement(le,{link:"https://t.me/yantsev1ch",title:"Telegram"}))},fe=function(){return r.a.createElement("div",{className:ce.a.footer},r.a.createElement(pe,null),r.a.createElement("p",{className:ce.a.copyright},"\xa9 Created by Andrey Yantsevich"))},me=n(146),de=n.n(me),he=function(){return r.a.createElement("div",{className:de.a.news},r.a.createElement("h1",null,"News"))},ge=n(147),be=n.n(ge),Ee=function(){return r.a.createElement("div",{className:be.a.music},r.a.createElement("h1",null,"Music"))},ve=n(148),_e=n.n(ve),Oe=function(){return r.a.createElement("div",{className:_e.a.friends},r.a.createElement("h1",null,"Friends"))},we=n(93),je=n.n(we),ke=n(23),Ne=n.n(ke),xe=n(131),ye=n(24),Se=n(66),Ce=Object(xe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.captchaUrl,a=e.error;return r.a.createElement("form",{className:Ne.a.form,onSubmit:t},r.a.createElement("div",{className:Ne.a.settings},r.a.createElement("p",null,"To log in get registered ",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null," Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),a&&r.a.createElement("p",{className:Ne.a.errorMsg},a),n&&r.a.createElement("img",{src:n,alt:"captcha"}),n&&Object(ye.c)("","captcha",[Se.b],ye.a),r.a.createElement("div",{className:Ne.a.formRow},r.a.createElement("label",{htmlFor:"login_login"},"Login"),Object(ye.c)("","email",[Se.b],ye.a)),r.a.createElement("div",{className:Ne.a.formRow},r.a.createElement("label",{htmlFor:"login_psw"},"Password"),Object(ye.c)("","password",[Se.b],ye.a,{type:"password"})),r.a.createElement("div",{className:Ne.a.formRow},Object(ye.c)("","rememberMe",[],ye.a,{type:"checkbox",className:Ne.a.inputCheckbox},"Remember me")),r.a.createElement("div",{className:Ne.a.formRow},r.a.createElement("button",{type:"submit",className:Ne.a.button},"Send")))})),Le={login:function(e,t,n,a){return function(){var r=Object(H.a)(G.a.mark((function r(c){var o,s;return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Y(e,t,n,a);case 2:(o=r.sent).resultCode===B.a.success?c(Q()):(o.resultCode===B.a.captchaIsRequired&&c($()),s=o.messages.length>0?o.messages[0]:"Some Error",c(Object(W.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}},Te=Object(M.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),Le)((function(e){var t=e.login,n=e.captchaUrl;return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",{className:je.a.login},r.a.createElement("h1",null,"Login"),r.a.createElement("section",{className:je.a.section},r.a.createElement(Ce,{captchaUrl:n,onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)}})))})),Ae=n(9),Ue={initialized:!1},Pe=function(){return{type:"app/INITIALIZED_SUCCESS"}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(z.a)(Object(z.a)({},e),{},{initialized:!0});default:return e}},Ie=n(50),Re=r.a.lazy((function(){return n.e(4).then(n.bind(null,323))})),Me=r.a.lazy((function(){return n.e(3).then(n.bind(null,322))})),De=r.a.lazy((function(){return n.e(5).then(n.bind(null,324))})),Ge=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){console.log("Some error occured"),console.log(e)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandlesrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandlesrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:f.a.app},r.a.createElement("main",{className:f.a.main},r.a.createElement("div",{className:f.a.sidebar},r.a.createElement(ae,null)),r.a.createElement("div",{className:f.a.content},r.a.createElement("div",{className:f.a.contentMain},r.a.createElement(m.d,null,r.a.createElement(m.a,{exact:!0,from:"/",to:"/profile"}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(Ie.a,null)},r.a.createElement(Me,null))}}),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(Ie.a,null)},r.a.createElement(Re,null))}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(Ie.a,null)},r.a.createElement(De,null))}}),r.a.createElement(m.b,{path:"/news",render:function(){return r.a.createElement(he,null)}}),r.a.createElement(m.b,{path:"/music",render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(m.b,{path:"/friends",render:function(){return r.a.createElement(Oe,null)}}),r.a.createElement(m.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}}))),r.a.createElement("div",{className:f.a.footer},r.a.createElement(fe,null))))):r.a.createElement(Ie.a,null)}}]),n}(r.a.Component),He=Object(Ae.compose)(m.g,Object(M.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(H.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t(Q()),e.next=4,Promise.all([n]);case 4:t(Pe()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}))(Ge),ze=n(98),We=n(130),Be=n(151),qe=n(152),Je=n(133),Ye=n(132),Ze=Object(Ae.combineReducers)({profilePage:ze.b,messagesPage:We.b,usersPage:Ye.b,auth:ee,form:Je.a,app:Fe}),Ve=Object(Ae.createStore)(Ze,Object(Be.composeWithDevTools)(Object(Ae.applyMiddleware)(qe.a))),Xe=Ve;window.store=Ve,o.a.render(r.a.createElement(U.a,null,r.a.createElement(M.a,{store:Xe},r.a.createElement(He,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,n){e.exports={app:"App_app__1Je8e",main:"App_main__2Bb2U",sidebar:"App_sidebar__2aZqf",content:"App_content__2C8oy",contentMain:"App_contentMain__3n_89",footer:"App_footer__cC4pk"}},44:function(e,t,n){e.exports={header:"Header_header__3N5LP",title:"Header_title__2MH6S",loginBlock:"Header_loginBlock__1_lba",loginLink:"Header_loginLink__16unK",logout:"Header_logout__Y-sqo"}},50:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(96),o=n.n(c),s=n(150),i=n.n(s);t.a=function(){return r.a.createElement("div",{className:o.a.wrapper},r.a.createElement("img",{src:i.a,className:o.a.img,alt:"loader"}))}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},8:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var a,r=n(144),c=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"7e5b4528-2880-4677-b629-b878b7697787"}});!function(e){e[e.success=0]="success",e[e.error=1]="error",e[e.captchaIsRequired=10]="captchaIsRequired"}(a||(a={}))},91:function(e,t,n){e.exports={copyright:"Footer_copyright__19Rzc"}},92:function(e,t,n){e.exports={socialLink:"SocialLink_socialLink__3h2HL"}},93:function(e,t,n){e.exports={section:"Login_section__1CXTH"}},96:function(e,t,n){e.exports={wrapper:"Preloader_wrapper__2h-ht",img:"Preloader_img__2_Qxq"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return _})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return w}));var a=n(6),r=n.n(a),c=n(11),o=n(43),s=n(4),i=n(31),u=n(32),l=n(8),p=function(e){return l.b.get("/profile/".concat(e)).then((function(e){return e.data}))},f=function(e){return l.b.get("/profile/status/".concat(e)).then((function(e){return e.data}))},m=function(e){return l.b.put("/profile/status",{status:e}).then((function(e){return e.data}))},d=function(e){var t=new FormData;return t.append("image",e),l.b.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},h=function(e){return l.b.put("/profile",e).then((function(e){return e.data}))},g={posts:[{id:Object(i.a)(),message:"Hi World! How are you?",likesCounter:75},{id:Object(i.a)(),message:"Today is a good day!",likesCounter:57}],profile:null,status:""},b={addPost:function(e){return{type:"profile/ADD_POST",newPostBody:e}},setUserProfile:function(e){return{type:"profile/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"profile/SET_STATUS",status:e}},setPhoto:function(e){return{type:"profile/SAVE_PHOTO",photos:e}}},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:a=t.sent,n(b.setUserProfile(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e);case 3:a=t.sent,n(b.setStatus(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(e);case 3:t.sent.resultCode===l.a.success&&n(b.setStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e);case 3:(a=t.sent).resultCode===l.a.success&&n(b.setPhoto(a.data.photos)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,o,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:if(c=t.sent,o=a().auth.userId,c.resultCode!==l.a.success){t.next=8;break}o&&n(E(o)),t.next=11;break;case 8:return s=c.messages.length>0?c.messages[0]:"Some Error",n(Object(u.a)("edit-profile",{_error:s})),t.abrupt("return",Promise.reject(s));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD_POST":var n={id:Object(i.a)(),message:t.newPostBody,likesCounter:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[n].concat(Object(o.a)(e.posts))});case"profile/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"profile/SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"profile/SAVE_PHOTO":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[179,1,2]]]);
//# sourceMappingURL=main.c645680b.chunk.js.map