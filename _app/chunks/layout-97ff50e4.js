import{S as q,i as H,s as D,v as P,w as Z,x as J,p as S,n as L,A as K,e as b,t as w,c as y,a as p,g as k,d as m,f as E,H as v,h as I,D as O,j as A,l as B,b as g,T as R,N as U,E as V,F as z,G as F,O as Q,u as W,U as X}from"./vendor-0e8cf8c4.js";import{H as Y}from"./HoverableArea-77f2d3d5.js";const G=a=>a.replace("'","").split(/[^0-9a-zA-Z]+/g).map(e=>e.toLowerCase()).join("_");function $(a){let e,t;return e=new Y({props:{coords:a[0],href:a[2],alt:a[1]}}),{c(){P(e.$$.fragment)},l(s){Z(e.$$.fragment,s)},m(s,i){J(e,s,i),t=!0},p(s,[i]){const o={};i&1&&(o.coords=s[0]),i&4&&(o.href=s[2]),i&2&&(o.alt=s[1]),e.$set(o)},i(s){t||(S(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){K(e,s)}}}function x(a,e,t){let s,i,{title:o=""}=e,{author:r=""}=e,{coords:n=[]}=e;return a.$$set=l=>{"title"in l&&t(3,o=l.title),"author"in l&&t(4,r=l.author),"coords"in l&&t(0,n=l.coords)},a.$$.update=()=>{a.$$.dirty&8&&t(2,s=`#${G(o)}`),a.$$.dirty&24&&t(1,i=`${o} by ${r}`)},[n,i,s,o,r]}class ne extends q{constructor(e){super();H(this,e,x,$,D,{title:3,author:4,coords:0})}}const{window:ee}=X;function M(a){let e,t,s,i,o;return{c(){e=b("span"),t=w("by"),s=w("\xA0"),i=b("b"),o=w(a[1])},l(r){e=y(r,"SPAN",{});var n=p(e);t=k(n,"by"),n.forEach(m),s=k(r,"\xA0"),i=y(r,"B",{});var l=p(i);o=k(l,a[1]),l.forEach(m)},m(r,n){E(r,e,n),v(e,t),E(r,s,n),E(r,i,n),v(i,o)},p(r,n){n&2&&I(o,r[1])},d(r){r&&m(e),r&&m(s),r&&m(i)}}}function te(a){let e,t,s,i,o,r,n,l,f,d,N,c=a[1]&&M(a);const j=a[6].default,h=O(j,a,a[5],null);return{c(){e=b("div"),t=b("button"),s=w("\xD7"),i=A(),o=b("h2"),r=w(a[0]),n=A(),c&&c.c(),l=A(),h&&h.c(),this.h()},l(u){e=y(u,"DIV",{class:!0});var _=p(e);t=y(_,"BUTTON",{class:!0});var T=p(t);s=k(T,"\xD7"),T.forEach(m),i=B(_),o=y(_,"H2",{class:!0});var C=p(o);r=k(C,a[0]),C.forEach(m),n=B(_),c&&c.l(_),l=B(_),h&&h.l(_),_.forEach(m),this.h()},h(){g(t,"class","close svelte-g3qr3y"),g(o,"class","svelte-g3qr3y"),g(e,"class","svelte-g3qr3y"),R(e,"display",a[2])},m(u,_){E(u,e,_),v(e,t),v(t,s),v(e,i),v(e,o),v(o,r),v(e,n),c&&c.m(e,null),v(e,l),h&&h.m(e,null),f=!0,d||(N=[U(ee,"hashchange",a[3]),U(t,"click",a[4])],d=!0)},p(u,[_]){(!f||_&1)&&I(r,u[0]),u[1]?c?c.p(u,_):(c=M(u),c.c(),c.m(e,l)):c&&(c.d(1),c=null),h&&h.p&&(!f||_&32)&&V(h,j,u,u[5],f?F(j,u[5],_,null):z(u[5]),null),_&4&&R(e,"display",u[2])},i(u){f||(S(h,u),f=!0)},o(u){L(h,u),f=!1},d(u){u&&m(e),c&&c.d(),h&&h.d(u),d=!1,Q(N)}}}function se(a,e,t){let{$$slots:s={},$$scope:i}=e,{title:o}=e,{author:r=""}=e,n=!1;const l=()=>{t(2,n=window.location.hash.slice(1)==G(o))};W(l);const f=()=>{t(2,n=!1),window.history.replaceState("",document.title,window.location.pathname+window.location.search+"#")};return a.$$set=d=>{"title"in d&&t(0,o=d.title),"author"in d&&t(1,r=d.author),"$$scope"in d&&t(5,i=d.$$scope)},[o,r,n,l,f,i,s]}class ie extends q{constructor(e){super();H(this,e,se,te,D,{title:0,author:1})}}function le(a){let e,t,s,i,o;const r=a[2].default,n=O(r,a,a[1],null);return{c(){n&&n.c(),e=A(),t=b("div"),s=b("a"),i=w("goodreads"),this.h()},l(l){n&&n.l(l),e=B(l),t=y(l,"DIV",{class:!0});var f=p(t);s=y(f,"A",{href:!0,target:!0,referrerpolicy:!0});var d=p(s);i=k(d,"goodreads"),d.forEach(m),f.forEach(m),this.h()},h(){g(s,"href",a[0]),g(s,"target","_blank"),g(s,"referrerpolicy","no-referrer"),g(t,"class","svelte-1yrjn1q")},m(l,f){n&&n.m(l,f),E(l,e,f),E(l,t,f),v(t,s),v(s,i),o=!0},p(l,[f]){n&&n.p&&(!o||f&2)&&V(n,r,l,l[1],o?F(r,l[1],f,null):z(l[1]),null),(!o||f&1)&&g(s,"href",l[0])},i(l){o||(S(n,l),o=!0)},o(l){L(n,l),o=!1},d(l){n&&n.d(l),l&&m(e),l&&m(t)}}}function ae(a,e,t){let{$$slots:s={},$$scope:i}=e,{goodreads:o}=e;return a.$$set=r=>{"goodreads"in r&&t(0,o=r.goodreads),"$$scope"in r&&t(1,i=r.$$scope)},[o,i,s]}class fe extends q{constructor(e){super();H(this,e,ae,le,D,{goodreads:0})}}export{ne as B,fe as L,ie as a};
