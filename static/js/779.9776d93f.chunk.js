"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{269:function(n,r,e){e.d(r,{Df:function(){return s},IQ:function(){return f},Jh:function(){return d},RL:function(){return o},s_:function(){return p}});var t=e(861),a=e(757),u=e.n(a),c=e(44),i="53b17a0d0ffee53cfb4c8768c7c3aa3a";c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,t.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("trending/movie/day",{params:{page:1,api_key:i}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("search/movie",{params:{api_key:i,query:r}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(r),{params:{api_key:i}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(r,"/credits"),{params:{api_key:i}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(r,"/reviews"),{params:{api_key:i}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},779:function(n,r,e){e.r(r),e.d(r,{default:function(){return w}});var t,a,u,c,i=e(861),s=e(885),o=e(757),p=e.n(o),f=e(689),d=e(269),l=e(791),v=e(168),x=e(444),h=x.ZP.div(t||(t=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 20px 20px;\n"]))),m=x.ZP.ul(a||(a=(0,v.Z)(["\n  padding: 0 20px;\n  display: flex;\n  margin: 0 -10px;\n  flex-wrap: wrap;\n  gap: 3px;\n  list-style: disc;\n"]))),g=x.ZP.li(u||(u=(0,v.Z)(["\n  padding: 5px 5px;\n  flex: 1 1 auto;\n  margin: 0 10px;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 5px;\n  background-color: #ff4500;\n"]))),Z=x.ZP.p(c||(c=(0,v.Z)(["\n  display: block;\n\n  font-weight: 500;\n  margin-bottom: 3px;\n"]))),k=e(184),w=function(){var n,r=null!==(n=(0,l.useState)([]))&&void 0!==n?n:{},e=(0,s.Z)(r,2),t=e[0],a=e[1],u=(0,l.useState)(null),c=(0,s.Z)(u,2),o=c[0],v=c[1],x=(0,f.UO)().id;return(0,l.useEffect)((function(){var n=function(){var n=(0,i.Z)(p().mark((function n(){var r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Jh)(x);case 3:r=n.sent,a(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),v("Oops... \ud83d\ude25. Please try again \ud83d\ude0a");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]),(0,k.jsxs)(h,{children:[o&&(0,k.jsx)("p",{children:o}),0===(null===t||void 0===t?void 0:t.length)&&(0,k.jsx)("p",{children:"We don't have any reviews for this movie."}),(null===t||void 0===t?void 0:t.length)>0&&(0,k.jsx)(m,{children:t.map((function(n){var r=n.id,e=n.author,t=n.content;return(0,k.jsxs)(g,{children:[(0,k.jsxs)(Z,{children:["Author: ",e]}),(0,k.jsx)("p",{children:t})]},r)}))})]})}}}]);
//# sourceMappingURL=779.9776d93f.chunk.js.map