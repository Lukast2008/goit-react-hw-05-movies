"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[565],{848:function(t,e,n){n.d(e,{Av:function(){return p},fk:function(){return _},fy:function(){return m},jX:function(){return o},rz:function(){return d}});var r=n(861),s=n(757),a=n.n(s),c=n(388),i="https://api.themoviedb.org/3/",u="62527f4fbcbc619de4f3bda00e915376";function o(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"discover/movie?sort_by=popularity.desc&api_key=").concat(u,"&page=").concat("12","&language=en-US&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"search/movie?api_key=").concat(u,"&page=1&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"movie/").concat(e,"?language=en-US&api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},565:function(t,e,n){n.r(e),n.d(e,{Modal:function(){return p}});var r=n(439),s=n(984),a=n(791),c=n(689),i=n(87),u=n(848),o=n(223),l=n(184),p=function(){var t=(0,c.UO)(),e=(0,a.useState)([]),n=(0,r.Z)(e,2),p=n[0],f=n[1],d=t.id;(0,a.useEffect)((function(){(0,u.rz)(d).then((function(t){return f(t.data)}))}),[]);var h=p.poster_path,m=p.vote_average,v=p.overview,_=p.genres,x=void 0===_?[]:_,y=p.release_date,g=p.title,k=x.map((function(t){return t.name})).join(" / ");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h2",{children:[g,"(".concat(y,")")]}),(0,l.jsxs)("div",{className:o.Z.mod,children:[(0,l.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w342/").concat(h),alt:g}),(0,l.jsxs)("ul",{className:o.Z.list,children:[(0,l.jsxs)("li",{className:o.Z.listItem,children:[(0,l.jsx)("span",{className:o.Z.listTitle,children:"User score: "}),m]},(0,s.x0)()),(0,l.jsxs)("li",{className:o.Z.listItem,children:[(0,l.jsx)("span",{className:o.Z.listTitle,children:"Overview: "}),v]},(0,s.x0)()),(0,l.jsxs)("li",{className:o.Z.listItem,children:[(0,l.jsx)("span",{className:o.Z.listTitle,children:"Genres: "}),k]},(0,s.x0)())]})]}),(0,l.jsx)("h3",{children:"Additional information"}),(0,l.jsxs)("nav",{className:o.Z.link,children:[(0,l.jsx)(i.rU,{to:"cast",children:"Cast"}),(0,l.jsx)(i.rU,{to:"reviews",children:"Reviews"})]}),(0,l.jsx)(c.j3,{})]})};e.default=p},223:function(t,e){e.Z={mod:"styles_mod__qShSk",list:"styles_list__+i54u",listItem:"styles_listItem__8c1uL",listTitle:"styles_listTitle__PsV3f",listCast:"styles_listCast__E0bqC",listItemCast:"styles_listItemCast__RnPtf",link:"styles_link__E2HOR"}},984:function(t,e,n){n.d(e,{x0:function(){return r}});var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=565.8db7227b.chunk.js.map