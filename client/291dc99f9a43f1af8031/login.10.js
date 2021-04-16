(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{33:function(e,t,c){"use strict";(function(e){var n=c(47),a=c(36),i=c(35),b=c.n(i),s=c(8);let o,r,l;const O=t=>{const a=new(void 0!==e.env.JEST_WORKER_ID?c(28):c(28).default)(t).setMaxListeners(n.a.database.maxNumberOfListeners);return a.changes({since:"now",live:!0,include_docs:!0}).on("change",()=>{if(void 0!==e.env.JEST_WORKER_ID)return;c(31).default.update(e=>({...e,dbUpdatedAt:Date.now()}))}),a};if(!0===Object(s.a)()){const e=c(31).default,t=c(28).default;r=new t(`${n.a.database.remote}/${b.a.get("loginDb")}`,{skip_setup:!0,live:!0}),o=O(n.a.database.local),window._DB=o,b.a.get("loginDb")===Object(a.a)("---fakeUser")&&e.update(e=>({...e,user:{name:"---fakeUser"},online:!0})),b.a.get("loginDb")&&n.a.features.authEnabled?fetch(n.a.database.remote+"/_session",{credentials:"include"}).then(e=>e.json()).then(t=>{null!==t.userCtx.name&&(e.update(e=>({...e,user:{name:t.userCtx.name}})),i())}):e.update(e=>({...e,online:!1})),window._fakeLogin=()=>{b.a.set("loginDb",Object(a.a)("---fakeUser"),{expires:n.a.database.auth.expireDays}),window.location.href="/course/spanish-from-english/"},window._Login=async(t,c)=>{if(!1===window._test_credentials_correct)throw new Error("Incorrect username or password");if(!0===window._test_credentials_correct)return window._fakeLogin();const i=await(await fetch(n.a.database.remote+"/_session",{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:c})})).json();if(i.error){if("unauthorized"===i.error)throw new Error("Username or password is incorrect");throw new Error("Couldn't log in. Please try again later")}e.update(e=>({...e,online:null})),b.a.set("loginDb",Object(a.a)(t),{expires:n.a.database.auth.expireDays}),window.location.reload(!1),window.location.href="/course/spanish-from-english/"},window._Logout=async()=>{try{l&&(await l.cancel(),await fetch(n.a.database.remote+"/_session",{method:"delete"}))}finally{b.a.remove("loginDb"),e.update(e=>({...e,user:null,online:null})),await o.destroy(),window.location.reload(!1)}};const i=()=>{l=o.sync(r).on("complete",(function(){e.update(e=>({...e,online:!0}))})).on("error",(function(){e.update(e=>({...e,online:!1}))}))}}void 0!==e.env.JEST_WORKER_ID&&(o=O(n.a.database.local),o.__reset=async()=>{const e=await o.allDocs();await Promise.all(e.rows.map((function(e){return o.remove(e.id,e.value.rev)})))}),t.a=o}).call(this,c(20))},36:function(e,t,c){"use strict";t.a=e=>"userdb-"+(e=>e.split("").map(e=>e.charCodeAt(0).toString(16)).join(""))(e)},370:function(e,t,c){"use strict";c.r(t);var n=c(0),a=(c(33),c(34)),i=c(29),b=c(91);function s(e){let t,c;return{c(){t=Object(n.A)("p"),c=Object(n.cb)(e[0]),this.h()},l(a){t=Object(n.o)(a,"P",{class:!0});var i=Object(n.m)(t);c=Object(n.q)(i,e[0]),i.forEach(n.z),this.h()},h(){Object(n.i)(t,"class","help is-danger")},m(e,a){Object(n.I)(e,t,a),Object(n.g)(t,c)},p(e,t){1&t&&Object(n.X)(c,e[0])},d(e){e&&Object(n.z)(t)}}}function o(e){let t;return{c(){t=Object(n.cb)("Log in")},l(e){t=Object(n.q)(e,"Log in")},m(e,c){Object(n.I)(e,t,c)},d(e){e&&Object(n.z)(t)}}}function r(e){let t,c,r,l,O,j,u,d,f,p,m,h,g,w,$,v,y,_,x,z;function E(t){e[4](t)}c=new a.a({props:{dark:!0}});let I={name:"Username",icon:"user",id:"username"};function D(t){e[5](t)}void 0!==e[1]&&(I.value=e[1]),p=new b.a({props:I}),n.k.push(()=>Object(n.j)(p,"value",E));let L={name:"Password",icon:"lock",id:"password",type:"password"};void 0!==e[2]&&(L.value=e[2]),g=new b.a({props:L}),n.k.push(()=>Object(n.j)(g,"value",D));let A=null!==e[0]&&s(e);return y=new i.a({props:{submit:!0,$$slots:{default:[o]},$$scope:{ctx:e}}}),y.$on("click",e[3]),{c(){t=Object(n.ab)(),Object(n.t)(c.$$.fragment),r=Object(n.ab)(),l=Object(n.A)("section"),O=Object(n.A)("div"),j=Object(n.A)("form"),u=Object(n.A)("h2"),d=Object(n.cb)("Log in"),f=Object(n.ab)(),Object(n.t)(p.$$.fragment),h=Object(n.ab)(),Object(n.t)(g.$$.fragment),$=Object(n.ab)(),A&&A.c(),v=Object(n.ab)(),Object(n.t)(y.$$.fragment),this.h()},l(e){Object(n.T)('[data-svelte="svelte-nuxzs8"]',document.head).forEach(n.z),t=Object(n.p)(e),Object(n.n)(c.$$.fragment,e),r=Object(n.p)(e),l=Object(n.o)(e,"SECTION",{class:!0});var a=Object(n.m)(l);O=Object(n.o)(a,"DIV",{class:!0});var i=Object(n.m)(O);j=Object(n.o)(i,"FORM",{});var b=Object(n.m)(j);u=Object(n.o)(b,"H2",{class:!0});var s=Object(n.m)(u);d=Object(n.q)(s,"Log in"),s.forEach(n.z),f=Object(n.p)(b),Object(n.n)(p.$$.fragment,b),h=Object(n.p)(b),Object(n.n)(g.$$.fragment,b),$=Object(n.p)(b),A&&A.l(b),v=Object(n.p)(b),Object(n.n)(y.$$.fragment,b),b.forEach(n.z),i.forEach(n.z),a.forEach(n.z),this.h()},h(){document.title="Log in - LibreLingo",Object(n.i)(u,"class","is-size-2"),Object(n.i)(O,"class","container"),Object(n.i)(l,"class","section")},m(a,i){Object(n.I)(a,t,i),Object(n.M)(c,a,i),Object(n.I)(a,r,i),Object(n.I)(a,l,i),Object(n.g)(l,O),Object(n.g)(O,j),Object(n.g)(j,u),Object(n.g)(u,d),Object(n.g)(j,f),Object(n.M)(p,j,null),Object(n.g)(j,h),Object(n.M)(g,j,null),Object(n.g)(j,$),A&&A.m(j,null),Object(n.g)(j,v),Object(n.M)(y,j,null),_=!0,x||(z=Object(n.K)(j,"submit",Object(n.S)(e[3])),x=!0)},p(e,[t]){const c={};!m&&2&t&&(m=!0,c.value=e[1],Object(n.d)(()=>m=!1)),p.$set(c);const a={};!w&&4&t&&(w=!0,a.value=e[2],Object(n.d)(()=>w=!1)),g.$set(a),null!==e[0]?A?A.p(e,t):(A=s(e),A.c(),A.m(j,v)):A&&(A.d(1),A=null);const i={};128&t&&(i.$$scope={dirty:t,ctx:e}),y.$set(i)},i(e){_||(Object(n.eb)(c.$$.fragment,e),Object(n.eb)(p.$$.fragment,e),Object(n.eb)(g.$$.fragment,e),Object(n.eb)(y.$$.fragment,e),_=!0)},o(e){Object(n.fb)(c.$$.fragment,e),Object(n.fb)(p.$$.fragment,e),Object(n.fb)(g.$$.fragment,e),Object(n.fb)(y.$$.fragment,e),_=!1},d(e){e&&Object(n.z)(t),Object(n.x)(c,e),e&&Object(n.z)(r),e&&Object(n.z)(l),Object(n.x)(p),Object(n.x)(g),A&&A.d(),Object(n.x)(y),x=!1,z()}}}function l(e,t,c){var n=this&&this.__awaiter||function(e,t,c,n){return new(c||(c=Promise))((function(a,i){function b(e){try{o(n.next(e))}catch(e){i(e)}}function s(e){try{o(n.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof c?t:new c((function(e){e(t)}))).then(b,s)}o((n=n.apply(e,t||[])).next())}))};let a=null,i="",b="";return[a,i,b,()=>n(void 0,void 0,void 0,(function*(){try{yield window._Login(i,b)}catch(e){c(0,a=e)}})),function(e){i=e,c(1,i)},function(e){b=e,c(2,b)}]}class O extends n.b{constructor(e){super(),Object(n.H)(this,e,l,r,n.V,{})}}t.default=O},62:function(e,t){},91:function(e,t,c){"use strict";var n=c(0),a=c(39);function i(e){let t,c,a;return{c(){t=Object(n.A)("input"),this.h()},l(e){t=Object(n.o)(e,"INPUT",{class:!0,type:!0,name:!0,id:!0}),this.h()},h(){Object(n.i)(t,"class","input"),Object(n.i)(t,"type","text"),Object(n.i)(t,"name",e[2]),Object(n.i)(t,"id",e[2]),Object(n.db)(t,"is-danger",null!=e[5])},m(i,b){Object(n.I)(i,t,b),Object(n.Y)(t,e[0]),c||(a=Object(n.K)(t,"input",e[7]),c=!0)},p(e,c){4&c&&Object(n.i)(t,"name",e[2]),4&c&&Object(n.i)(t,"id",e[2]),1&c&&t.value!==e[0]&&Object(n.Y)(t,e[0]),32&c&&Object(n.db)(t,"is-danger",null!=e[5])},d(e){e&&Object(n.z)(t),c=!1,a()}}}function b(e){let t,c,a;return{c(){t=Object(n.A)("input"),this.h()},l(e){t=Object(n.o)(e,"INPUT",{class:!0,type:!0,name:!0,id:!0}),this.h()},h(){Object(n.i)(t,"class","input"),Object(n.i)(t,"type","password"),Object(n.i)(t,"name",e[2]),Object(n.i)(t,"id",e[2]),Object(n.db)(t,"is-danger",null!=e[5])},m(i,b){Object(n.I)(i,t,b),Object(n.Y)(t,e[0]),c||(a=Object(n.K)(t,"input",e[8]),c=!0)},p(e,c){4&c&&Object(n.i)(t,"name",e[2]),4&c&&Object(n.i)(t,"id",e[2]),1&c&&t.value!==e[0]&&Object(n.Y)(t,e[0]),32&c&&Object(n.db)(t,"is-danger",null!=e[5])},d(e){e&&Object(n.z)(t),c=!1,a()}}}function s(e){let t,c;return{c(){t=Object(n.A)("p"),c=Object(n.cb)(e[5]),this.h()},l(a){t=Object(n.o)(a,"P",{class:!0});var i=Object(n.m)(t);c=Object(n.q)(i,e[5]),i.forEach(n.z),this.h()},h(){Object(n.i)(t,"class","help is-danger")},m(e,a){Object(n.I)(e,t,a),Object(n.g)(t,c)},p(e,t){32&t&&Object(n.X)(c,e[5])},d(e){e&&Object(n.z)(t)}}}function o(e){let t,c,o,r,l,O,j,u,d,f,p="text"===e[4]&&i(e),m="password"===e[4]&&b(e);u=new a.a({props:{size:"small",icon:e[3],left:!0}});let h=null!=e[5]&&s(e);return{c(){t=Object(n.A)("div"),c=Object(n.A)("label"),o=Object(n.cb)(e[1]),r=Object(n.ab)(),l=Object(n.A)("div"),p&&p.c(),O=Object(n.ab)(),m&&m.c(),j=Object(n.ab)(),Object(n.t)(u.$$.fragment),d=Object(n.ab)(),h&&h.c(),this.h()},l(a){t=Object(n.o)(a,"DIV",{class:!0});var i=Object(n.m)(t);c=Object(n.o)(i,"LABEL",{class:!0,for:!0});var b=Object(n.m)(c);o=Object(n.q)(b,e[1]),b.forEach(n.z),r=Object(n.p)(i),l=Object(n.o)(i,"DIV",{class:!0});var s=Object(n.m)(l);p&&p.l(s),O=Object(n.p)(s),m&&m.l(s),j=Object(n.p)(s),Object(n.n)(u.$$.fragment,s),s.forEach(n.z),d=Object(n.p)(i),h&&h.l(i),i.forEach(n.z),this.h()},h(){Object(n.i)(c,"class","label"),Object(n.i)(c,"for",e[2]),Object(n.i)(l,"class","control has-icons-left"),Object(n.i)(t,"class","field")},m(e,a){Object(n.I)(e,t,a),Object(n.g)(t,c),Object(n.g)(c,o),Object(n.g)(t,r),Object(n.g)(t,l),p&&p.m(l,null),Object(n.g)(l,O),m&&m.m(l,null),Object(n.g)(l,j),Object(n.M)(u,l,null),Object(n.g)(t,d),h&&h.m(t,null),f=!0},p(e,[a]){(!f||2&a)&&Object(n.X)(o,e[1]),(!f||4&a)&&Object(n.i)(c,"for",e[2]),"text"===e[4]?p?p.p(e,a):(p=i(e),p.c(),p.m(l,O)):p&&(p.d(1),p=null),"password"===e[4]?m?m.p(e,a):(m=b(e),m.c(),m.m(l,j)):m&&(m.d(1),m=null);const r={};8&a&&(r.icon=e[3]),u.$set(r),null!=e[5]?h?h.p(e,a):(h=s(e),h.c(),h.m(t,null)):h&&(h.d(1),h=null)},i(e){f||(Object(n.eb)(u.$$.fragment,e),f=!0)},o(e){Object(n.fb)(u.$$.fragment,e),f=!1},d(e){e&&Object(n.z)(t),p&&p.d(),m&&m.d(),Object(n.x)(u),h&&h.d()}}}function r(e,t,c){let{name:n}=t,{id:a}=t,{icon:i}=t,{type:b="text"}=t,{value:s}=t,{formStatus:o={}}=t,r=null;return e.$$set=e=>{"name"in e&&c(1,n=e.name),"id"in e&&c(2,a=e.id),"icon"in e&&c(3,i=e.icon),"type"in e&&c(4,b=e.type),"value"in e&&c(0,s=e.value),"formStatus"in e&&c(6,o=e.formStatus)},e.$$.update=()=>{68&e.$$.dirty&&c(5,r=o[a])},[s,n,a,i,b,r,o,function(){s=this.value,c(0,s)},function(){s=this.value,c(0,s)}]}class l extends n.b{constructor(e){super(),Object(n.H)(this,e,r,o,n.V,{name:1,id:2,icon:3,type:4,value:0,formStatus:6})}}t.a=l}}]);