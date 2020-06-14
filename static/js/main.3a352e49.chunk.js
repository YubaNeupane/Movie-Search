(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),i=t.n(o),c=(t(75),t(14)),l=t.n(c),s=t(20),A=t(50),u=t(51),p=t(62),m=t(61),d=t(32),v=t(133),g=t(135),h=t(103),f=t(143),E=t(131),b=t(10),w=t(57),k=t.n(w),y=t(52),O=t.n(y),x=Object(E.a)((function(e){return{root:{flexGrow:1,marginBottom:80},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function I(e){var a=x();return r.a.createElement("div",{className:a.root},r.a.createElement(v.a,{position:"fixed"},r.a.createElement(g.a,null,r.a.createElement(h.a,{className:a.title,variant:"h6",noWrap:!0},r.a.createElement("a",{href:"/",className:O.a.mainLink},"Movie Search")),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(k.a,null)),r.a.createElement(f.a,{placeholder:"Search\u2026",onKeyPress:function(a){"Enter"===a.key&&e.handleNewMovie(a.target.value)},classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})))))}var J=t(30),j=t(102),B=t(24),C=t.n(B),M=t(141),N=t(58),S=t.n(N),R=t(59),Q=t.n(R),z=t(140),L=t(63),K=t(4),Y=t(142),G=t(136),H=t(138),W=t(139),_=t(137),q=t(60),F=t.n(q),D=Object(K.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,o=Object(L.a)(e,["children","classes","onClose"]);return r.a.createElement(G.a,Object.assign({disableTypography:!0,className:t.root},o),r.a.createElement(h.a,{variant:"h6"},a),n?r.a.createElement(_.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(F.a,null)):null)})),X=Object(K.a)((function(e){return{root:{padding:e.spacing(2)}}}))(H.a);Object(K.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(W.a);function P(e){var a=r.a.useState(!1),t=Object(J.a)(a,2),n=t[0],o=t[1],i=function(){o(!1)};return r.a.createElement("div",null,r.a.createElement(z.a,{elevation:5,variant:"outlined",color:"primary",onClick:function(){o(!0)}},"More Info"),r.a.createElement(Y.a,{onClose:i,"aria-labelledby":"customized-dialog-title",open:n},r.a.createElement(D,{id:"customized-dialog-title",onClose:i},e.title),r.a.createElement(X,{dividers:!0},r.a.createElement(h.a,{gutterBottom:!0},r.a.createElement("strong",null,"Overview:"),r.a.createElement("br",null),e.overview),r.a.createElement(h.a,{gutterBottom:!0},"WORK IN PROGRESS"),r.a.createElement(h.a,{gutterBottom:!0},"WORK IN PROGRESS"))))}var U=Object(E.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"center","& > *":{margin:e.spacing(3),width:e.spacing(40),height:e.spacing(50)}},loading:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function Z(e){var a=e.data,t=r.a.useState(!1),n=Object(J.a)(t,2),o=(n[0],n[1]),i=function(){o(!0)},c=U();return a[0]?(console.log(a[0]),r.a.createElement("div",{className:c.root},a.map((function(e){return r.a.createElement(j.a,{key:e.id,className:S()(C.a.paperShadow),onClick:i},r.a.createElement("img",{className:C.a.movieImg,src:null!=e.poster_path?"https://image.tmdb.org/t/p/original"+"".concat(e.poster_path):Q.a,alt:""}),r.a.createElement("div",{className:C.a.titleAndYearContainer},r.a.createElement("h3",null,e.title),r.a.createElement("h5",null,e.vote_average),r.a.createElement(P,{title:e.title,overview:e.overview})))})))):a[0]?r.a.createElement("div",{className:C.a.loading},r.a.createElement(M.a,{size:280,color:"secondary"}),r.a.createElement("h1",null,"Loading...")):r.a.createElement("div",{className:C.a.loading},r.a.createElement(M.a,{size:280,color:"secondary"}),r.a.createElement("h1",null,"No Result Found!"),r.a.createElement("a",{href:"/"},r.a.createElement(z.a,{variant:"contained",color:"primary",disableElevation:!0},"GO BACK")))}var T=t(35),V=t.n(T),$="api_key=dc431dc887ae9c4133d35d16320bced8",ee=["/popular?","&query="],ae=function(){var e=Object(s.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get("".concat("https://api.themoviedb.org/3/movie"+ee[0]+$));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(s.a)(l.a.mark((function e(a){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a){e.next=13;break}return t="https://api.themoviedb.org/3/search/movie?"+$+ee[1]+a,e.prev=2,e.next=5,V.a.get(t);case 5:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),ne=(t(99),t(36)),re=t.n(ne),oe=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={popularMovies:{},searchMovies:null},e.newMovieTyped=function(){var a=Object(s.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==t){a.next=4;break}e.setState({searchMovies:null}),a.next=9;break;case 4:return a.next=6,te(t);case 6:n=a.sent,e.setState({searchMovies:n}),console.log(e.state.searchMovies);case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:a=e.sent,this.setState({popularMovies:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showSerchedMovieTag",value:function(e){return void 0!==e?r.a.createElement("div",null,r.a.createElement("h1",null,"Searched Movies"),r.a.createElement(Z,{className:re.a.MovieCard,data:e})):null}},{key:"render",value:function(){var e=this.state.popularMovies;return r.a.createElement("div",{className:"App"},r.a.createElement(I,{searchState:this.state.searchInput,handleNewMovie:this.newMovieTyped}),null==this.state.searchMovies?r.a.createElement("div",null,r.a.createElement(Z,{className:re.a.MovieCard,data:e})):this.showSerchedMovieTag(this.state.searchMovies))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,a,t){e.exports={movieImg:"movieCard_movieImg__3Nfd1",fadeIn:"movieCard_fadeIn__-wsRk",titleAndYearContainer:"movieCard_titleAndYearContainer__391lJ",loading:"movieCard_loading__2XXUO",paperShadow:"movieCard_paperShadow__38MEZ",moreInfo:"movieCard_moreInfo__2z6ZV","fade-in":"movieCard_fade-in__1Pe3L"}},36:function(e,a,t){},52:function(e,a,t){e.exports={mainLink:"navbar_mainLink__3SYQt"}},59:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABMVJREFUeJzt3V2O21Qch+FfpSIuWA+wClArKPRrJ9zMbkAq66pKWyoKt63KRSaF8RzHPvY4dnyeR7JUJRmNT/R/q3gc2QkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAZt273oCOJ0neJXmb5OHK+wKb8jzJxySfrrdX6+4ObEc3jk9JXq66R7ARz3I7jg/xEWuXfsjh8/Onxrc3GTfgfXE8GvGzXCBx/Le9HnivxNGgtYdya1ufpxFHk9YeyK1tJeJo2Nj/QfdqaP3iaJxA+tcvDgSS8vrFQRKBlNb/JOLg2lAgezlP8ibJgxHrFwc3DAWyhziOW+k8R/c14uCGoUDWHuq73mrWJw4E0rOJgyT1A3RppgQiDj5rOZDHhefFwQ2tBvI4DsgZocVAxMForQUiDqq0Fog4qNJaIOKgSquBiINRWgykL477Z9wvLsSeA6k5z3E/yYvz7RqXYq+B1Py16hjHJa2PM7mkQMZeA3dqHGuvjw26lEAeJ/kzh6/fnzq4rj3P8SLbWB8bdQmBdC/z+TGHELqmnATcwvrYsK0HUroGbimSqWfI114fG7flQPri6EYy5+sjAuGkrQbSd5nPD7kdydg4vig8JhBO2mIgp66B+1NuRzI2jt8LjwuEk7YWyJgLRP9ceM2YOLawPi7MXQbyVZIvZ+zL2Iu11Rxz/D8OgVDtrgL5JYch/SeHj0G1logjuRmHQKh2F4FcdV7Td56iz1JxjNl/gXDS3AG6KrymJpKlPlb9lsOxikCYZc4AXRWer4lk6WOO0oF8zfpg8gBdFZ77O7eHsi+SsdfArf1Y9WthvwTCZFMG6Krw+F9Jvk55oLuRLBVHrp87dZ6kdv00rnaArgqPHeM4OhXJknEcnYqkdv00rnaASnF8U/i5vkiWjuOoL5Kh9cENcwJ5n3IcR6VBP0ccR48Kv7NLIJw0NZChOI76Ilk6jr79r32exk0JZGwcR93BP1cciUCYqXaA3if5dsLv+THJqyQvkzzsPLfk5UAFwiy1AzQljlOWvlauQJhlzQE6x4WkBcIsaw3Qua6yLhBmWWOAznkLAoEwy7kH6Nz35xAIs5xzgNa4eY1AmOVcA7TWnZ0EwiznGKA1b3smEGZZeoDWviegQJhlyQFaO45EIMy01ABtIY5EIMy0xABtJY5EIMxUO0BTtrEXdTvHVrt+Grd0IFuKQyBUGxqQN4XXXGocf0xYP40bGpAHSV4XXneJcXw/Yf00bu6AbOmAfAqBcNKcAbn0OBKBMGDqgOwhjkQgDJgyIHuJIxEIA2oHZE9xJAJhQM2A7C2ORCAMGDsge4wjEQgDxgzIXuNIBMKAoQHZcxyJQBhwakD2HkciEAb0DUgLcSQCYUBpQFqJIxEIA7oD0lIciUAY0B2QluJIBMKA7oC0FEciEAa0HEciEAbUxHE/yYuen9nLBp89iTgEQtHY+5Un7cTxqvpdZJfEUY7ju9o3kv15mvb+lAujiAN6PIs4oEgc0EMc0ON5xAFF4oAe4oAeNScBoSn3kryLOKDoXpK3EQf0epjD94peXv8bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgg/wJgwYHw6lyUjAAAAABJRU5ErkJggg=="},70:function(e,a,t){e.exports=t(100)},75:function(e,a,t){},99:function(e,a,t){}},[[70,1,2]]]);
//# sourceMappingURL=main.3a352e49.chunk.js.map