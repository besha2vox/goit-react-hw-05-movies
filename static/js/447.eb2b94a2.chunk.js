"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[447,854],{2383:function(t,n,e){var r=e(4942),i=e(5861),u=e(5671),a=e(3144),c=e(7757),s=e.n(c),o=e(1912),f=function(){function t(){(0,u.Z)(this,t),this._queryToFetch=null,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025"}return(0,a.Z)(t,[{key:"basicFetch",value:function(){var t=(0,i.Z)(s().mark((function t(n,e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)(n,{baseURL:this.BASE_URL,params:(0,r.Z)({api_key:this.API_KEY},e,this.queryToFetch)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(n,e){return t.apply(this,arguments)}}()},{key:"getTrendingMovies",value:function(){var t=(0,i.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"trending/movie/day",t.next=3,this.basicFetch("trending/movie/day");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getSearchMoviesByID",value:function(){var t=(0,i.Z)(s().mark((function t(n){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n),t.next=3,this.basicFetch(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"getSearchMoviesCredits",value:function(){var t=(0,i.Z)(s().mark((function t(n){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n,"/credits"),t.next=3,this.basicFetch(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"getSearchMoviesReview",value:function(){var t=(0,i.Z)(s().mark((function t(n){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n,"/reviews"),t.next=3,this.basicFetch(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"getMoviesByKeyWord",value:function(){var t=(0,i.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"search/movie",t.next=3,this.basicFetch("search/movie","query");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"queryToFetch",get:function(){return this._queryToFetch},set:function(t){this._queryToFetch=t}}]),t}(),h=new f;n.Z=h},4584:function(t,n,e){e.d(n,{Z:function(){return c}});var r,i=e(168),u=e(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 0 auto;\n  max-width: 1440px;\n"]))),a=e(184),c=function(t){var n=t.children;return(0,a.jsx)(u,{children:n})}},4447:function(t,n,e){e.r(n),e.d(n,{default:function(){return c}});var r,i=e(168),u=e(6444).ZP.p(r||(r=(0,i.Z)(["\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n"]))),a=e(184),c=function(t){var n=t.text;return(0,a.jsx)(u,{children:n})}},1544:function(t,n,e){e.d(n,{a:function(){return u}});var r,i=e(168),u=e(6444).ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 250px);\n  gap: 16px;\n"])))},6078:function(t,n,e){e.d(n,{V:function(){return s},c:function(){return o}});var r,i,u=e(168),a=e(6444),c=e(1087),s=(0,a.iv)(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  background-color: #ffffff;\n  transition: box-shadow 300ms ease-in-out, transform 300ms ease-in-out;\n  border: 1px solid #2e2e2e70;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & img {\n    object-fit: cover;\n    min-height: 400px;\n  }\n\n  & div {\n    padding: 4px;\n    display: inherit;\n    flex-direction: column;\n    justify-content: end;\n  }\n"]))),o=(0,a.ZP)(c.rU)(i||(i=(0,u.Z)(["\n  ","\n\n  &:hover {\n    box-shadow: 0 0 3px 2px #db8f2cac;\n    transform: scale(1.2);\n  }\n"])),s)},3258:function(t,n,e){e.d(n,{Z:function(){return c}});var r=e(6078),i=e(184),u=function(t){var n=t.movieId,e=(t.votes,t.title),u=(t.date,t.poster);return(0,i.jsxs)(r.c,{to:"/movies/".concat(n),children:[(0,i.jsx)("img",{src:u,alt:e}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:e})})]})},a=e(1544),c=function(t){var n=t.movies;return(0,i.jsx)(a.a,{children:n.map((function(t){var n=t.id,e=t.votes,r=t.title,a=t.date,c=t.poster;return(0,i.jsx)(u,{movieId:n,votes:e,title:r,date:a,poster:c},n)}))})}},6447:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,i=e(5861),u=e(9439),a=e(7757),c=e.n(a),s=e(2791),o=e(2383),f=e(4584),h=e(168),p=e(6444).ZP.form(r||(r=(0,h.Z)(["\n  width: fit-content;\n  margin: 0 auto;\n"]))),v=e(184),d=function(t){var n=t.onFormSubmit,e=(0,s.useState)(""),r=(0,u.Z)(e,2),i=r[0],a=r[1];return(0,v.jsxs)(p,{onSubmit:function(t){t.preventDefault(),n(i)},children:[(0,v.jsx)("input",{type:"text",value:i,onChange:function(t){var n=t.target;a(n.value)}}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})},l=e(3258),x=e(7116),m=e(4447),y=function(){var t=(0,s.useState)(null),n=(0,u.Z)(t,2),e=n[0],r=n[1],a=(0,s.useState)([]),h=(0,u.Z)(a,2),p=h[0],y=h[1],g=(0,s.useState)(!1),Z=(0,u.Z)(g,2),b=Z[0],w=Z[1],j=(0,s.useState)(!1),k=(0,u.Z)(j,2),_=k[0],F=k[1];(0,s.useEffect)((function(){if(e&&e!==o.Z.queryToFetch){var t=function(){var t=(0,i.Z)(c().mark((function t(){var n,r,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),o.Z.queryToFetch=e,t.prev=2,t.next=5,o.Z.getMoviesByKeyWord();case 5:n=t.sent,r=n.data.results,i=r.map((function(t){var n=t.id,e=t.title,r=t.poster_path;return{id:n,title:e,poster:r?"https://image.tmdb.org/t/p/original".concat(r):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Zco_AzlB5030ccqs-SkdHxO_PmzfBw5sjXSKCjfaX46A9-YEg-9_vjqAHsvgQTw3kbw&usqp=CAU"}})),F(!0),y(i),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0);case 15:return t.prev=15,w(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return o.Z.queryToFetch=null}}}),[e]);var S=p.length<1&&_;return(0,v.jsx)("main",{children:(0,v.jsxs)(f.Z,{children:[(0,v.jsx)(d,{onFormSubmit:function(t){r(t)}}),!!p.length&&(0,v.jsx)(l.Z,{movies:p}),S&&(0,v.jsx)(m.default,{text:"Movies not found. Try again."}),!_&&(0,v.jsx)(m.default,{text:"Enter the name of the movie to search"}),b&&(0,v.jsx)(x.Z,{})]})})}}}]);
//# sourceMappingURL=447.eb2b94a2.chunk.js.map