"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,o,i,u=e(5861),s=e(9439),p=e(4687),x=e.n(p),f=e(2791),d=e(7689),l=e(265),h=e(168),v=e(5706),g=v.Z.ul(r||(r=(0,h.Z)(["\npadding-top: 40px;\ndisplay: flex;\njustify-content: center;\nflex-wrap: wrap;\nlist-style: none;\ngap: 45px;"]))),b=v.Z.img(a||(a=(0,h.Z)(["\nborder-radius: 50px;\n-webkit-box-shadow: 5px 5px 15px 5px #000000;\n    box-shadow: 5px 5px 15px 5px #000000;\n    margin-bottom: 20px;"]))),m=v.Z.div(c||(c=(0,h.Z)(["\nborder: 1px solid transparent;\nborder-radius: 30px;\npadding: 8px;\nbackground-color: rgb(8, 140, 247);"]))),w=v.Z.span(o||(o=(0,h.Z)(["\ntext-align: center;\nfont-size: 14px;\ncolor: rgba(254, 99, 134, 80);\ntext-shadow: 1px 5px 7px rgba(0, 0, 0, 0.6);\n"]))),Z=v.Z.span(i||(i=(0,h.Z)(["\ntext-align: center;\nfont-size: 18px;\ncolor: rgb(163 238 23);\ntext-shadow: 1px 5px 7px rgba(0, 0, 0, 0.6);\n"]))),y=e(184),k=function(){var n=(0,d.UO)().movieId,t=(0,f.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1];return(0,f.useEffect)((function(){var t=function(){var t=(0,u.Z)(x().mark((function t(){var e,r;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.y)(n);case 3:e=t.sent,r=e.cast,a(r),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,y.jsx)("div",{children:r.length?(0,y.jsx)(g,{children:r.map((function(n){return(0,y.jsxs)("li",{children:[n.profile_path?(0,y.jsx)(b,{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name," profile")}):(0,y.jsx)(b,{src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(n.name," profile")}),(0,y.jsxs)(m,{children:[(0,y.jsx)(w,{children:"Actor"})," : ",(0,y.jsx)(Z,{children:n.name})," ",(0,y.jsx)("br",{}),(0,y.jsx)(w,{children:"Character"})," : ",(0,y.jsx)(Z,{children:n.character})]})]},n.id)}))}):(0,y.jsx)("p",{children:"We don't have any information about the cast yet."})})}},265:function(n,t,e){e.d(t,{Bt:function(){return f},Y5:function(){return d},_k:function(){return s},vw:function(){return p},y:function(){return x}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243),i="https://api.themoviedb.org",u="7510784cb92b403b6cb85c091d4aabc9",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&page=1&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,console.log(r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,console.log(r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.44903a9d.chunk.js.map