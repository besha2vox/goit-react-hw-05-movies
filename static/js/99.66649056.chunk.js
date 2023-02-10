"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[99],{2383:function(e,n,t){var r=t(4942),i=t(5861),s=t(5671),c=t(3144),a=t(7757),u=t.n(a),o=t(1912),p=function(){function e(){(0,s.Z)(this,e),this._queryToFetch=null,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025"}return(0,c.Z)(e,[{key:"basicFetch",value:function(){var e=(0,i.Z)(u().mark((function e(n,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)(n,{baseURL:this.BASE_URL,params:(0,r.Z)({api_key:this.API_KEY},t,this.queryToFetch)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"getTrendingMovies",value:function(){var e=(0,i.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending/movie/day",e.next=3,this.basicFetch("trending/movie/day");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchMoviesByID",value:function(){var e=(0,i.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n),e.next=3,this.basicFetch(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getSearchMoviesCredits",value:function(){var e=(0,i.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/credits"),e.next=3,this.basicFetch(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getSearchMoviesReview",value:function(){var e=(0,i.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/reviews"),e.next=3,this.basicFetch(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMoviesByKeyWord",value:function(){var e=(0,i.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"search/movie",e.next=3,this.basicFetch("search/movie","query");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryToFetch",get:function(){return this._queryToFetch},set:function(e){this._queryToFetch=e}}]),e}(),f=new p;n.Z=f},4584:function(e,n,t){t.d(n,{Z:function(){return a}});var r,i=t(168),s=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 0 auto;\n  max-width: 1440px;\n"]))),c=t(184),a=function(e){var n=e.children;return(0,c.jsx)(s,{children:n})}},1544:function(e,n,t){t.d(n,{a:function(){return s}});var r,i=t(168),s=t(6444).ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 250px);\n  gap: 16px;\n"])))},6078:function(e,n,t){t.d(n,{V:function(){return a},c:function(){return u}});var r,i,s=t(168),c=t(6444),a=(0,c.iv)(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  background-color: #ffffff;\n  transition: box-shadow 300ms ease-in-out, transform 300ms ease-in-out;\n  border: 1px solid #2e2e2e70;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & img {\n    object-fit: cover;\n    min-height: 400px;\n  }\n\n  & div {\n    padding: 4px;\n    display: inherit;\n    flex-direction: column;\n    justify-content: end;\n    flex-grow: 1;\n  }\n\n  &:hover {\n    box-shadow: 0 0 3px 2px #db8f2cac;\n    transform: scale(1.2);\n  }\n"]))),u=c.ZP.li(i||(i=(0,s.Z)(["\n  ","\n"])),a)},3258:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(6078),i=t(1087),s=t(2007),c=t.n(s),a=t(7689),u=t(184),o=function(e){var n=e.movieId,t=e.title,s=e.poster,c=(0,a.TH)();return(0,u.jsx)(r.c,{children:(0,u.jsxs)(i.rU,{to:"/movies/".concat(n),state:{from:c},children:[(0,u.jsx)("img",{src:s,alt:t}),(0,u.jsx)("div",{children:(0,u.jsx)("p",{children:t})})]})})},p=o;o.propType={movieId:c().number.isRequired,title:c().string.isRequired,poster:c().string.isRequired};var f=t(1544),h=function(e){var n=e.movies;return(0,u.jsx)(f.a,{children:n.map((function(e){var n=e.id,t=e.title,r=e.poster;return(0,u.jsx)(p,{movieId:n,title:t,poster:r},n)}))})},d=h;h.propType={movies:c().arrayOf(c().shape({id:c().number.isRequired,title:c().string.isRequired,poster:c().string.isRequired}))}},5099:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(5861),i=t(9439),s=t(7757),c=t.n(s),a=t(2791),u=t(3258),o=t(4584),p=t(2383),f=t(184),h=function(){var e=(0,a.useState)([]),n=(0,i.Z)(e,2),t=n[0],s=n[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.getTrendingMovies();case 3:n=e.sent,t=n.data.results,r=t.map((function(e){var n=e.id,t=e.title,r=e.poster_path;return{id:n,title:t,poster:r?"https://image.tmdb.org/t/p/original".concat(r):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Zco_AzlB5030ccqs-SkdHxO_PmzfBw5sjXSKCjfaX46A9-YEg-9_vjqAHsvgQTw3kbw&usqp=CAU"}})),s(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsx)("main",{children:(0,f.jsx)(o.Z,{children:(0,f.jsx)(u.Z,{movies:t})})})}}}]);
//# sourceMappingURL=99.66649056.chunk.js.map