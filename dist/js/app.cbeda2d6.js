(function(t){function e(e){for(var i,n,l=e[0],o=e[1],c=e[2],u=0,p=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},s={app:0},r=[];function n(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"32885ed5"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=s[t]=[e,i]}));e.push(a[2]=i);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=n(t);var c=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,a[1](c)}s[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0240":function(t,e,a){"use strict";var i=a("731e"),s=a.n(i);s.a},"0f7d":function(t,e,a){},"13db":function(t,e,a){"use strict";var i=a("0f7d"),s=a.n(i);s.a},"13e7":function(t,e,a){t.exports=a.p+"img/nc-news.87714e10.jpg"},"23eb":function(t,e,a){"use strict";var i=a("862b"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),s=a("5f5b");a("ab8b"),a("2dd8");i["default"].use(s["a"]);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"},on:{click:t.tune}},[a("router-view")],1)},n=[],l=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=(a("ecfe"),a("70c5")),c=a.n(o);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){Object(l["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={data:function(){return{icons:["fab fa-facebook","fab fa-twitter","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"],clipped:!1,drawer:!0,fixed:!1,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js",OPTS:{fill:"none",radius:55,strokeWidth:{17:0},scale:{0:1},angle:{"rand(-35, -70)":0},duration:700,left:0,top:0,easing:"cubic.out"},circle1:void 0,circle2:void 0}},mounted:function(){this.circle1=new c.a.Shape(d({},this.OPTS,{stroke:"#B71C1C"})),this.circle2=new c.a.Shape(d({},this.OPTS,{radius:{0:15},strokeWidth:{30:0},stroke:"orange",delay:"rand(75, 150)"}))},methods:{tune:function(t){this.circle1.tune({x:t.pageX,y:t.pageY}).replay(),this.circle2.tune({x:t.pageX,y:t.pageY}).replay()}}},f=p,m=(a("5c0b"),a("2877")),v=Object(m["a"])(f,r,n,!1,null,null,null),b=v.exports,h=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Portfolio"),a("AboutMeCards",{attrs:{msg:"Welcome to Your Vue.js App"}}),a("ProjectsParallax"),a("Projects")],1)},C=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parallax"},[a("div",{staticClass:"center-item-middle pb-5"},[a("AnimatedTitle")],1)])},j=[],y=a("31e5"),x=a.n(y),P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:" justify-content-center pb-4"},[a("div",{staticClass:"animatedText d-flex justify-content-center pb-4"},[a("h1",{staticClass:"aniText anim-typewriter"},[t._v("M t l J 1 9 9 1 ")])]),a("div",{staticClass:"animatedText d-flex justify-content-center pb-4"},[a("h1",{staticClass:"aniDescription desc-descwriter"},[t._v("Design and Development.")])])])}],O={components:{Parallax:x.a}},D=O,S=Object(m["a"])(D,P,w,!1,null,null,null),k=S.exports,E={components:{Parallax:x.a,AnimatedTitle:k}},L=E,T=(a("0240"),Object(m["a"])(L,_,j,!1,null,null,null)),M=T.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"animatedText d-flex justify-content-center mt-5"},[a("h1",{},[t._v("A little insight. ")])]),a("div",{staticClass:"pt-5 grid"},[a("div",{staticClass:"mt-5 mt-5 content"},[a("i",{staticClass:"fas fa-fill-drip fa-5x"}),a("h2",{staticClass:"pt-4"},[t._v("Painter")]),a("p",[t._v("Useful articles.")])]),a("div",{staticClass:"mt-5 content"},[a("i",{staticClass:"fas fa-camera fa-5x"}),a("h2",{staticClass:"pt-4"},[t._v("Photographer")]),a("p",[t._v("Useful articles.")])]),a("div",{staticClass:"mt-5 content"},[a("i",{staticClass:"fas fa-hat-wizard fa-5x"}),a("h2",{staticClass:"pt-4"},[t._v("Architect.")]),a("p",[t._v("I buiild and paint model villages.")])])]),a("div",{staticClass:"grid"},[a("div",{staticClass:"mt-5 content"},[a("i",{staticClass:"fas fa-dice-d20 fa-5x"}),a("h2",{staticClass:"pt-4"},[t._v("Game Master")]),a("p",[t._v("Creating worlds and running games of Pathfinder.")])]),a("div",{staticClass:"mt-5 content"},[a("i",{staticClass:"fas fa-cookie-bite fa-5x"}),a("h2",{staticClass:"pt-4"},[t._v("Baker")]),a("p",[t._v("Another addicting hobby, I can make a fierce batch of bagels.")])]),a("div",{staticClass:"mt-5 content"},[a("i",{staticClass:"fas fa-mountain fa-5x"}),a("h2",{staticClass:"pt-4"},[t._v("Outdoorsman")]),a("p",[t._v("Wild camping, hiking and astrophotography.")])])])])}],I={name:"HelloWorld",props:{msg:String}},W=I,H=(a("6c4e"),Object(m["a"])(W,$,A,!1,null,"1a0d6ca3",null)),q=H.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"parallaxBottom"},[a("div",{staticClass:"center-item-middle pb-5"},[a("AnimatedHeader")],1)])])},J=[],N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:" justify-content-center pb-4"},[a("div",{staticClass:"animatedText d-flex justify-content-center pb-4"},[a("h1",{staticClass:"aniHeader header-headerwriter"},[t._v("Projects and programmes")])])])}],Y={components:{Parallax:x.a}},U=Y,X=Object(m["a"])(U,N,V,!1,null,null,null),z=X.exports,G={components:{Parallax:x.a,AnimatedHeader:z}},R=G,F=(a("13db"),Object(m["a"])(R,B,J,!1,null,null,null)),K=F.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",{staticClass:"my-4"},[i("small",{},[t._v("Secondary Text")])]),i("div",{staticClass:"row mt-5 projectDiv"},[i("div",{staticClass:"col-md-8"},[i("img",{staticClass:"img-fluid pb-4",attrs:{src:a("d763"),alt:""}})]),i("div",{staticClass:"col-md-4"},[i("h3",{staticClass:"my-1"},[t._v("Project Description")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.")]),i("div",{staticClass:"pt-5"},[i("h3",{},[t._v("Project Details")]),i("ul",{staticClass:"list-group list-group-flush bootstrapList"},[i("li",{staticClass:"list-group-item bootstrapListItem"},[t._v("Cras justo odio")]),i("li",{staticClass:"list-group-item bootstrapListItem"},[t._v("Dapibus ac facilisis in")]),i("li",{staticClass:"list-group-item bootstrapListItem"},[t._v("Morbi leo risus")])])])])]),i("div",{staticClass:"row mt-5 pt-5 projectDiv"},[i("div",{staticClass:"col-md-4"},[i("h3",{staticClass:"my-3"},[t._v("Project Description")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.")]),i("div",{staticClass:"pt-5"},[i("h3",{},[t._v("Project Details")]),i("ul",{staticClass:"list-group list-group-flush bootstrapList"},[i("li",{staticClass:"list-group-item bootstrapListItem"},[t._v("Cras justo odio")]),i("li",{staticClass:"list-group-item bootstrapListItem"},[t._v("Dapibus ac facilisis in")]),i("li",{staticClass:"list-group-item bootstrapListItem"},[t._v("Morbi leo risus")])])])]),i("div",{staticClass:"col-md-8"},[i("img",{staticClass:"img-fluid pb-3",attrs:{src:a("13e7"),alt:""}})])]),i("div",{staticClass:"row mt-5 projectDiv"},[i("div",{staticClass:"col-md-8"},[i("img",{staticClass:"img-fluid pb-4",attrs:{src:a("6823"),alt:""}})]),i("div",{staticClass:"col-md-4"},[i("h3",{staticClass:"my-1"},[t._v("Project Description")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.")]),i("div",{staticClass:"pt-5"},[i("h3",{},[t._v("Project Details")]),i("ul",{staticClass:"list-group list-group-flush bootstrapList"},[i("li",{staticClass:"list-group-item bootstrapListItem"},[t._v("Cras justo odio")]),i("li",{staticClass:"list-group-item bootstrapListItem"},[t._v("Dapibus ac facilisis in")]),i("li",{staticClass:"list-group-item bootstrapListItem"},[t._v("Morbi leo risus")])])])])]),i("h3",{staticClass:"my-4 mt-5"},[t._v("Related Projects")]),i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col-md-3 col-sm-6 mb-4"},[i("a",{attrs:{href:"#"}},[i("img",{staticClass:"img-fluid",attrs:{src:"http://placehold.it/500x300",alt:""}})])]),i("div",{staticClass:"col-md-3 col-sm-6 mb-4"},[i("a",{attrs:{href:"#"}},[i("img",{staticClass:"img-fluid",attrs:{src:"http://placehold.it/500x300",alt:""}})])]),i("div",{staticClass:"col-md-3 col-sm-6 mb-4"},[i("a",{attrs:{href:"#"}},[i("img",{staticClass:"img-fluid",attrs:{src:"http://placehold.it/500x300",alt:""}})])]),i("div",{staticClass:"col-md-3 col-sm-6 mb-4"},[i("a",{attrs:{href:"#"}},[i("img",{staticClass:"img-fluid",attrs:{src:"http://placehold.it/500x300",alt:""}})])])])])}],tt={components:{Parallax:x.a,AnimatedHeader:z}},et=tt,at=(a("23eb"),Object(m["a"])(et,Q,Z,!1,null,null,null)),it=at.exports,st={name:"home",components:{AboutMeCards:q,Portfolio:M,ProjectsParallax:K,Projects:it}},rt=st,nt=Object(m["a"])(rt,g,C,!1,null,null,null),lt=nt.exports;i["default"].use(h["a"]);var ot=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:lt},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),ct=a("2f62");i["default"].use(ct["a"]);var ut=new ct["a"].Store({state:{},mutations:{},actions:{}}),dt=(a("7922"),a("15f5"),a("7051"),a("f5af")),pt=a.n(dt);a("e829");i["default"].config.productionTip=!1,new i["default"]({router:ot,store:ut,created:function(){pt.a.init()},render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("e332"),s=a.n(i);s.a},6823:function(t,e,a){t.exports=a.p+"img/f1.e3973b63.jpg"},"6c4e":function(t,e,a){"use strict";var i=a("8f5f"),s=a.n(i);s.a},"731e":function(t,e,a){},7922:function(t,e,a){},"862b":function(t,e,a){},"8f5f":function(t,e,a){},d763:function(t,e,a){t.exports=a.p+"img/capture.df8ac9fa.jpg"},e332:function(t,e,a){}});
//# sourceMappingURL=app.cbeda2d6.js.map