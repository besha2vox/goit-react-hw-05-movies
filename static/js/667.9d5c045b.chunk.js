"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[667,877,244],{2383:function(n,e,t){var r=t(4942),i=t(5861),s=t(5671),a=t(3144),o=t(7757),c=t.n(o),u=t(1912),p=function(){function n(){(0,s.Z)(this,n),this._queryToFetch=null,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025"}return(0,a.Z)(n,[{key:"basicFetch",value:function(){var n=(0,i.Z)(c().mark((function n(e,t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)(e,{baseURL:this.BASE_URL,params:(0,r.Z)({api_key:this.API_KEY},t,this.queryToFetch)});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"getTrendingMovies",value:function(){var n=(0,i.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/movie/day",n.next=3,this.basicFetch("trending/movie/day");case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getSearchMoviesByID",value:function(){var n=(0,i.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e),n.next=3,this.basicFetch(t);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getSearchMoviesCredits",value:function(){var n=(0,i.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/credits"),n.next=3,this.basicFetch(t);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getSearchMoviesReview",value:function(){var n=(0,i.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/reviews"),n.next=3,this.basicFetch(t);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getMoviesByKeyWord",value:function(){var n=(0,i.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"search/movie",n.next=3,this.basicFetch("search/movie","query");case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"queryToFetch",get:function(){return this._queryToFetch},set:function(n){this._queryToFetch=n}}]),n}(),d=new p;e.Z=d},1877:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,i=t(5861),s=t(9439),a=t(168),o=t(7757),c=t.n(o),u=t(2791),p=t(7689),d=t(2383),l=t(1544),f=t(6444),h=t(6078),x=t(4447),v=t(184),g=f.ZP.li(r||(r=(0,a.Z)(["\n  ","\n"])),h.V),m=function(){var n=(0,u.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,p.UO)().movieId;return(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.Z.getSearchMoviesCredits(a);case 2:e=n.sent,t=e.data,r(t.cast.map((function(n){var e=n.id,t=n.character,r=n.name,i=n.profile_path;return{id:e,character:t,name:r,profile:i?"https://image.tmdb.org/t/p/original".concat(i):"https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,v.jsx)(v.Fragment,{children:t.length?(0,v.jsx)(l.a,{children:t.map((function(n){var e=n.id,t=n.character,r=n.name,i=n.profile;return(0,v.jsxs)(g,{children:[(0,v.jsx)("img",{src:i,alt:r}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:r}),(0,v.jsxs)("p",{children:["Character: ",t]})]})]},e)}))}):(0,v.jsx)(x.default,{text:"Cast of actors not found"})})}},4584:function(n,e,t){t.d(e,{Z:function(){return o}});var r,i=t(168),s=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 0 auto;\n  max-width: 1440px;\n"]))),a=t(184),o=function(n){var e=n.children;return(0,a.jsx)(s,{children:e})}},4447:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r,i=t(168),s=t(6444).ZP.p(r||(r=(0,i.Z)(["\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n"]))),a=t(2007),o=t.n(a),c=t(184),u=function(n){var e=n.text;return(0,c.jsx)(s,{children:e})},p=u;u.propType={text:o().string.isRequired}},1544:function(n,e,t){t.d(e,{a:function(){return s}});var r,i=t(168),s=t(6444).ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 250px);\n  gap: 16px;\n"])))},6078:function(n,e,t){t.d(e,{V:function(){return c},c:function(){return u}});var r,i,s=t(168),a=t(6444),o=t(1087),c=(0,a.iv)(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  background-color: #ffffff;\n  transition: box-shadow 300ms ease-in-out, transform 300ms ease-in-out;\n  border: 1px solid #2e2e2e70;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & img {\n    object-fit: cover;\n    min-height: 400px;\n  }\n\n  & div {\n    padding: 4px;\n    display: inherit;\n    flex-direction: column;\n    justify-content: end;\n  }\n"]))),u=(0,a.ZP)(o.rU)(i||(i=(0,s.Z)(["\n  ","\n\n  &:hover {\n    box-shadow: 0 0 3px 2px #db8f2cac;\n    transform: scale(1.2);\n  }\n"])),c)},6244:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,i,s=t(5861),a=t(9439),o=t(7757),c=t.n(o),u=t(168),p=t(6444),d=p.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),l=p.ZP.li(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border: 1px solid #2e2e2e70;\n  border-radius: 10px;\n  padding-bottom: 8px;\n  overflow: hidden;\n\n  & div {\n    display: inherit;\n    gap: 8px;\n    align-items: end;\n  }\n\n  & img {\n    display: block;\n    max-width: 150px;\n    max-height: 100px;\n    object-fit: contain;\n  }\n\n  & h3 {\n    border-bottom: 2px solid #2e2e2e70;\n  }\n\n  & p {\n    font-size: 16px;\n    padding: 0 8px;\n    font-weight: 700;\n\n    & span {\n      display: block;\n      font-size: 16px;\n      font-weight: 400;\n    }\n  }\n"]))),f=t(2791),h=t(7689),x=t(2383),v=t(4447),g=t(184),m=function(){var n=(0,f.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],i=(0,h.UO)().movieId;return(0,f.useEffect)((function(){var n=function(){var n=(0,s.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.Z.getSearchMoviesReview(i);case 2:e=n.sent,t=e.data,r(t.results.map((function(n){var e=n.id,t=n.author,r=n.author_details.avatar_path;return{id:e,author:t,content:n.content,avatar:r&&!r.includes("http")?"https://image.tmdb.org/t/p/original".concat(r):"https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[i]),(0,g.jsx)(g.Fragment,{children:t.length?(0,g.jsx)(d,{children:t.map((function(n){var e=n.id,t=n.author,r=n.content,i=n.avatar;return(0,g.jsxs)(l,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:i,alt:t}),(0,g.jsxs)("h3",{children:["Author: ",t]})]}),(0,g.jsxs)("p",{children:["Review: ",(0,g.jsx)("span",{children:r})]})]},e)}))}):(0,g.jsx)(v.default,{text:"There are no reviews"})})}},7667:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,i,s,a,o,c,u,p,d,l=t(5861),f=t(9439),h=t(7757),x=t.n(h),v=t(7689),g=t(2791),m=t(2383),j=t(168),w=t(6444),Z=t(1087),y=(0,w.ZP)(Z.rU)(r||(r=(0,j.Z)(["\n  padding: 4px 8px;\n  width: fit-content;\n  display: block;\n  border-radius: 10px;\n  border: 1px solid #2e2e2e70;\n  cursor: pointer;\n  color: #2e2e2e;\n  transition: background-color 300ms ease-in-out;\n\n  &:hover {\n    background-color: #ffa600b9;\n  }\n"]))),b=w.ZP.div(i||(i=(0,j.Z)(["\n  display: flex;\n  flex-direction: row-reverse;\n  gap: 20px;\n\n  & img {\n    display: block;\n    height: auto;\n  }\n"]))),k=w.ZP.div(s||(s=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),_=w.ZP.h2(a||(a=(0,j.Z)(["\n  font-size: 28px;\n  font-weight: 900;\n  text-align: center;\n"]))),P=w.ZP.h3(o||(o=(0,j.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n\n  & span {\n    font-size: 16px;\n    font-weight: 500;\n  }\n"]))),F=w.ZP.p(c||(c=(0,j.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),R=w.ZP.div(u||(u=(0,j.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: baseline;\n"]))),q=t(2007),S=t.n(q),T=t(184),z=function(n){var e=n.movie,t=e.genres,r=e.title,i=e.overview,s=e.poster,a=e.votes;return(0,T.jsxs)(b,{children:[(0,T.jsx)("img",{width:"450",src:s,alt:r}),(0,T.jsxs)(k,{children:[(0,T.jsx)(_,{children:r}),(0,T.jsxs)("div",{children:[(0,T.jsx)(P,{children:"Overview"}),(0,T.jsx)(F,{children:i})]}),(0,T.jsx)(R,{children:(0,T.jsxs)(P,{children:["Genres: ",(0,T.jsx)("span",{children:t})]})}),(0,T.jsxs)(P,{children:["Rating: ",(0,T.jsx)("span",{children:a.toFixed(1)})]})]})]})},M=z;z.propType={movie:S().shape({genres:S().string.isRequired,title:S().string.isRequired,overview:S().string.isRequired,poster:S().string.isRequired,votes:S().number.isRequired})};var U=w.ZP.ul(p||(p=(0,j.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  border-bottom: 1px solid #2e2e2e;\n"]))),C=(0,w.ZP)(Z.OL)(d||(d=(0,j.Z)(["\n  font-size: 20px;\n  color: #2e2e2e;\n\n  &.active {\n    text-shadow: 0 0 10px #ffa600;\n    font-weight: 700;\n  }\n"]))),E=t(7116),I=function(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("h3",{children:"Additional info:"}),(0,T.jsxs)(U,{children:[(0,T.jsx)("li",{children:(0,T.jsx)(C,{to:"cast",children:"Cast"})}),(0,T.jsx)("li",{children:(0,T.jsx)(C,{to:"reviews",children:"Reviews"})})]}),(0,T.jsx)(g.Suspense,{fallback:(0,T.jsx)(E.Z,{}),children:(0,T.jsx)(v.j3,{})})]})},A=t(6244),B=t(1877),O=t(4584),L=function(){var n,e,t=(0,v.UO)().movieId,r=(0,g.useState)(null),i=(0,f.Z)(r,2),s=i[0],a=i[1],o=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,g.useEffect)((function(){var n=function(){var n=(0,l.Z)(x().mark((function n(){var e,r,i,s,o,c,u,p;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.Z.getSearchMoviesByID(t);case 2:e=n.sent,r=e.data,i=r.genres,s=r.original_title,o=r.overview,c=r.poster_path,u=r.vote_average,p={genres:i.map((function(n){return n.name})).join(", "),title:s,overview:o,poster:c?"https://image.tmdb.org/t/p/original".concat(c):"https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg",votes:u},a(p);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t]),s)return(0,T.jsx)("main",{children:(0,T.jsxs)(O.Z,{children:[(0,T.jsx)(y,{to:o,children:"<- Go back"}),(0,T.jsx)(M,{movie:s}),(0,T.jsxs)(I,{children:[(0,T.jsx)(B.default,{}),(0,T.jsx)(A.default,{})]})]})})}}}]);
//# sourceMappingURL=667.9d5c045b.chunk.js.map