"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[760],{2383:function(e,t,n){var r=n(4942),i=n(5861),u=n(5671),s=n(3144),a=n(7757),c=n.n(a),o=n(1912),f=function(){function e(){(0,u.Z)(this,e),this._queryToFetch=null,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025"}return(0,s.Z)(e,[{key:"basicFetch",value:function(){var e=(0,i.Z)(c().mark((function e(t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)(t,{baseURL:this.BASE_URL,params:(0,r.Z)({api_key:this.API_KEY},n,this.queryToFetch)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getTrendingMovies",value:function(){var e=(0,i.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending/movie/day",e.next=3,this.basicFetch("trending/movie/day");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchMoviesByID",value:function(){var e=(0,i.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t),e.next=3,this.basicFetch(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSearchMoviesCredits",value:function(){var e=(0,i.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/credits"),e.next=3,this.basicFetch(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSearchMoviesReview",value:function(){var e=(0,i.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/reviews"),e.next=3,this.basicFetch(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMoviesByKeyWord",value:function(){var e=(0,i.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"search/movie",e.next=3,this.basicFetch("search/movie","query");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryToFetch",get:function(){return this._queryToFetch},set:function(e){this._queryToFetch=e}}]),e}(),p=new f;t.Z=p},4584:function(e,t,n){n.d(t,{Z:function(){return a}});var r,i=n(168),u=n(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 0 auto;\n  max-width: 1440px;\n"]))),s=n(184),a=function(e){var t=e.children;return(0,s.jsx)(u,{children:t})}},4447:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r,i=n(168),u=n(6444).ZP.p(r||(r=(0,i.Z)(["\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n"]))),s=n(2007),a=n.n(s),c=n(184),o=function(e){var t=e.text;return(0,c.jsx)(u,{children:t})},f=o;o.propType={text:a().string.isRequired}},1544:function(e,t,n){n.d(t,{a:function(){return u}});var r,i=n(168),u=n(6444).ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 250px);\n  gap: 16px;\n"])))},6078:function(e,t,n){n.d(t,{FB:function(){return p},Vk:function(){return o},ck:function(){return f}});var r,i,u,s=n(168),a=n(6444),c=n(1087),o=(0,a.iv)(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  background-color: #ffffff;\n  transition: box-shadow 300ms ease-in-out, transform 300ms ease-in-out;\n  border: 1px solid #2e2e2e70;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & img {\n    object-fit: cover;\n    min-height: 400px;\n  }\n\n  & div {\n    padding: 4px;\n    display: inherit;\n    flex-direction: column;\n    justify-content: end;\n    flex-grow: 1;\n  }\n"]))),f=a.ZP.li(i||(i=(0,s.Z)(["\n  ","\n"])),o),p=(0,a.ZP)(c.rU)(u||(u=(0,s.Z)(["\n  &:hover {\n    box-shadow: 0 0 3px 2px #db8f2cac;\n    transform: scale(1.2);\n  }\n"])))},3258:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(6078),i=n(2007),u=n.n(i),s=n(184),a=function(e){var t=e.movieId,n=e.title,i=e.poster;return(0,s.jsx)(r.ck,{children:(0,s.jsxs)(r.FB,{to:"/movies/".concat(t),children:[(0,s.jsx)("img",{src:i,alt:n}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:n})})]})})},c=a;a.propType={movieId:u().number.isRequired,title:u().string.isRequired,poster:u().string.isRequired};var o=n(1544),f=function(e){var t=e.movies;return(0,s.jsx)(o.a,{children:t.map((function(e){var t=e.id,n=e.title,r=e.poster;return(0,s.jsx)(c,{movieId:t,title:n,poster:r},t)}))})},p=f;f.propType={movies:u().arrayOf(u().shape({id:u().number.isRequired,title:u().string.isRequired,poster:u().string.isRequired}))}},6447:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r,i=n(5861),u=n(9439),s=n(7757),a=n.n(s),c=n(2791),o=n(2383),f=n(4584),p=n(168),h=n(6444).ZP.form(r||(r=(0,p.Z)(["\n  width: fit-content;\n  margin: 0 auto;\n"]))),d=n(2007),v=n.n(d),l=n(184),m=function(e){var t=e.onFormSubmit,n=(0,c.useState)(""),r=(0,u.Z)(n,2),i=r[0],s=r[1];return(0,l.jsxs)(h,{onSubmit:function(e){e.preventDefault(),t(i)},children:[(0,l.jsx)("input",{type:"text",value:i,onChange:function(e){var t=e.target;s(t.value)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})},x=m;m.propType={onFormSubmit:v().func.isRequired};var y=n(3258),g=n(7116),Z=n(4447),b=function(){var e=(0,c.useState)(null),t=(0,u.Z)(e,2),n=t[0],r=t[1],s=(0,c.useState)([]),p=(0,u.Z)(s,2),h=p[0],d=p[1],v=(0,c.useState)(!1),m=(0,u.Z)(v,2),b=m[0],w=m[1],k=(0,c.useState)(!1),j=(0,u.Z)(k,2),q=j[0],_=j[1];(0,c.useEffect)((function(){if(n&&n!==o.Z.queryToFetch){var e=function(){var e=(0,i.Z)(a().mark((function e(){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),o.Z.queryToFetch=n,e.prev=2,e.next=5,o.Z.getMoviesByKeyWord();case 5:t=e.sent,r=t.data.results,i=r.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n,poster:r?"https://image.tmdb.org/t/p/original".concat(r):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Zco_AzlB5030ccqs-SkdHxO_PmzfBw5sjXSKCjfaX46A9-YEg-9_vjqAHsvgQTw3kbw&usqp=CAU"}})),_(!0),d(i),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:return e.prev=15,w(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){return o.Z.queryToFetch=null}}}),[n]);var F=h.length<1&&q;return(0,l.jsx)("main",{children:(0,l.jsxs)(f.Z,{children:[(0,l.jsx)(x,{onFormSubmit:function(e){r(e)}}),!!h.length&&(0,l.jsx)(y.Z,{movies:h}),F&&(0,l.jsx)(Z.default,{text:"Movies not found. Try again."}),!q&&(0,l.jsx)(Z.default,{text:"Enter the name of the movie to search"}),b&&(0,l.jsx)(g.Z,{})]})})}}}]);
//# sourceMappingURL=760.84d2127d.chunk.js.map