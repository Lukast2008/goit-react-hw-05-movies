"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{289:function(n,t,e){e.d(t,{Av:function(){return f},fk:function(){return y},fy:function(){return v},jX:function(){return o},rz:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(388),i="https://api.themoviedb.org/3/",s="62527f4fbcbc619de4f3bda00e915376";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"discover/movie?sort_by=popularity.desc&api_key=").concat(s,"&page=").concat("12","&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(s,"&page=1&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"?language=en-US&api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},186:function(n,t,e){e.r(t);var r=e(439),a=e(791),c=e(689),u=e(289),i=e(184);t.default=function(){var n=(0,c.UO)(),t=(0,a.useState)([]),e=(0,r.Z)(t,2),s=e[0],o=e[1],p=n.id;return(0,a.useEffect)((function(){(0,u.fk)(p).then((function(n){return o(n.data.results)}))}),[p,o]),0===s.length?(0,i.jsx)("h2",{children:"Reviewer not found"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Reviews"}),(0,i.jsx)("ul",{children:s.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:t}),(0,i.jsx)("p",{children:e})]},r)}))})]})}}}]);
//# sourceMappingURL=186.b0ea6f94.chunk.js.map