"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[877,854],{2383:function(n,t,e){var r=e(4942),i=e(5861),a=e(5671),c=e(3144),s=e(7757),u=e.n(s),o=e(1912),f=function(){function n(){(0,a.Z)(this,n),this._queryToFetch=null,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025"}return(0,c.Z)(n,[{key:"basicFetch",value:function(){var n=(0,i.Z)(u().mark((function n(t,e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)(t,{baseURL:this.BASE_URL,params:(0,r.Z)({api_key:this.API_KEY},e,this.queryToFetch)});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(t,e){return n.apply(this,arguments)}}()},{key:"getTrendingMovies",value:function(){var n=(0,i.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/movie/day",n.next=3,this.basicFetch("trending/movie/day");case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getSearchMoviesByID",value:function(){var n=(0,i.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t),n.next=3,this.basicFetch(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getSearchMoviesCredits",value:function(){var n=(0,i.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits"),n.next=3,this.basicFetch(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getSearchMoviesReview",value:function(){var n=(0,i.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/reviews"),n.next=3,this.basicFetch(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getMoviesByKeyWord",value:function(){var n=(0,i.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"search/movie",n.next=3,this.basicFetch("search/movie","query");case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"queryToFetch",get:function(){return this._queryToFetch},set:function(n){this._queryToFetch=n}}]),n}(),h=new f;t.Z=h},1877:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,i=e(5861),a=e(9439),c=e(168),s=e(7757),u=e.n(s),o=e(2791),f=e(7689),h=e(2383),p=e(1544),d=e(6444),v=e(6078),l=e(4447),x=e(184),m=d.ZP.li(r||(r=(0,c.Z)(["\n  ","\n"])),v.V),y=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],c=(0,f.UO)().movieId;return(0,o.useEffect)((function(){var n=function(){var n=(0,i.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.Z.getSearchMoviesCredits(c);case 2:t=n.sent,e=t.data,r(e.cast.map((function(n){var t=n.id,e=n.character,r=n.name,i=n.profile_path;return{id:t,character:e,name:r,profile:i?"https://image.tmdb.org/t/p/original".concat(i):"https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[c]),console.log(e),(0,x.jsx)(x.Fragment,{children:e.length?(0,x.jsx)(p.a,{children:e.map((function(n){var t=n.id,e=n.character,r=n.name,i=n.profile;return(0,x.jsxs)(m,{children:[(0,x.jsx)("img",{src:i,alt:r}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:r}),(0,x.jsxs)("p",{children:["Character: ",e]})]})]},t)}))}):(0,x.jsx)(l.default,{text:"Cast of actors not found"})})}},4447:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r,i=e(168),a=e(6444).ZP.p(r||(r=(0,i.Z)(["\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n"]))),c=e(184),s=function(n){var t=n.text;return(0,c.jsx)(a,{children:t})}},1544:function(n,t,e){e.d(t,{a:function(){return a}});var r,i=e(168),a=e(6444).ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 250px);\n  gap: 16px;\n"])))},6078:function(n,t,e){e.d(t,{V:function(){return u},c:function(){return o}});var r,i,a=e(168),c=e(6444),s=e(1087),u=(0,c.iv)(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  background-color: #ffffff;\n  transition: box-shadow 300ms ease-in-out, transform 300ms ease-in-out;\n  border: 1px solid #2e2e2e70;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & img {\n    object-fit: cover;\n    min-height: 400px;\n  }\n\n  & div {\n    padding: 4px;\n    display: inherit;\n    flex-direction: column;\n    justify-content: end;\n  }\n"]))),o=(0,c.ZP)(s.rU)(i||(i=(0,a.Z)(["\n  ","\n\n  &:hover {\n    box-shadow: 0 0 3px 2px #db8f2cac;\n    transform: scale(1.2);\n  }\n"])),u)}}]);
//# sourceMappingURL=877.a5168d8a.chunk.js.map