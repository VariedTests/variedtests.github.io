"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81751],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=d(a),N=r,g=u["".concat(m,".").concat(N)]||u[N]||k[N]||l;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},4784:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={id:"comparison",title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool"},i=void 0,p={unversionedId:"comparison",id:"version-2.xx.xx/comparison",title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool",description:'This comparison table strives to be as accurate and as unbiased as possible. If you use any of these libraries and feel the information could be improved, feel free to suggest changes (with notes or evidence of claims) using the "Edit this page" link at the bottom of this page.',source:"@site/versioned_docs/version-2.xx.xx/comparison.md",sourceDirName:".",slug:"/comparison",permalink:"/docs/2.xx.xx/comparison",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/comparison.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"comparison",title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Overview",permalink:"/docs/2.xx.xx/getting-started/overview"},next:{title:"Tutorial",permalink:"/docs/2.xx.xx/"}},m={},d=[],o={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'This comparison table strives to be as accurate and as unbiased as possible. If you use any of these libraries and feel the information could be improved, feel free to suggest changes (with notes or evidence of claims) using the "Edit this page" link at the bottom of this page.')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 ","\xa0","1st-class, built-in, and ready to use with no added configuration or code"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udfe1 ","\xa0","Supported, but as an unofficial 3rd party or community library/contribution"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd36 ","\xa0","Supported and documented, but requires extra user-code to implement"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\uded1 ","\xa0","Not officially supported or documented.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Features"),(0,r.kt)("th",{parentName:"tr",align:null},"Refine"),(0,r.kt)("th",{parentName:"tr",align:null},"React-Admin ",(0,r.kt)("a",{parentName:"th",href:"https://marmelab.com/react-admin/"},(0,r.kt)("em",{parentName:"a"},"(Website)"))),(0,r.kt)("th",{parentName:"tr",align:null},"AdminBro",(0,r.kt)("a",{parentName:"th",href:"https://adminbro.com/index.html"},(0,r.kt)("em",{parentName:"a"},"(Website)"))),(0,r.kt)("th",{parentName:"tr",align:null},"Retool",(0,r.kt)("a",{parentName:"th",href:"https://retool.com/"},(0,r.kt)("em",{parentName:"a"},"(Website)"))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Github Repo / Stars"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/refinedev/refine"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/refinedev/refine?label=%F0%9F%8C%9F",alt:null}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/marmelab/react-admin"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/marmelab/react-admin?label=%F0%9F%8C%9F",alt:null}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/SoftwareBrothers/adminjs"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/SoftwareBrothers/adminjs?label=%F0%9F%8C%9F",alt:null}))),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bundle Size"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bundlephobia.com/result?p=@pankod/refine"},(0,r.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/@pankod/refine?label=%F0%9F%92%BE",alt:null}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bundlephobia.com/result?p=react-admin"},(0,r.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/react-admin?label=%F0%9F%92%BE",alt:null}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bundlephobia.com/result?p=admin-bro"},(0,r.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/admin-bro?label=%F0%9F%92%BE",alt:null}))),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pricing"),(0,r.kt)("td",{parentName:"tr",align:null},"Open Source"),(0,r.kt)("td",{parentName:"tr",align:null},"Open Source / Enterprise Edition"),(0,r.kt)("td",{parentName:"tr",align:null},"Open Source"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://retool.com/pricing/"},(0,r.kt)("em",{parentName:"a"},"Pricing")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Platform Requirements"),(0,r.kt)("td",{parentName:"tr",align:null},"React"),(0,r.kt)("td",{parentName:"tr",align:null},"React"),(0,r.kt)("td",{parentName:"tr",align:null},"Node.js - React"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud / Self-hosted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Access Control"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"RBAC, LDAP, ACL, ABAC, ...etc")),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Live/Realtime"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes with two mode ",(0,r.kt)("inlineCode",{parentName:"td"},"auto")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"manual")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes - just Immediately(Enterprise Edition)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Audit Log"),(0,r.kt)("td",{parentName:"tr",align:null},"No - Coming Soon"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes - Enterprise Edition"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSR Support"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")," \ud83d\ude80"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"State Management"),(0,r.kt)("td",{parentName:"tr",align:null},"React Query"),(0,r.kt)("td",{parentName:"tr",align:null},"Redux - Redux Saga"),(0,r.kt)("td",{parentName:"tr",align:null},"Redux"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Routing"),(0,r.kt)("td",{parentName:"tr",align:null},"React Router, React Location, Next.js Router or Any Routing Library"),(0,r.kt)("td",{parentName:"tr",align:null},"React Router"),(0,r.kt)("td",{parentName:"tr",align:null},"React Router"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant Design"),(0,r.kt)("td",{parentName:"tr",align:null},"Material-UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Styled-Components"),(0,r.kt)("td",{parentName:"tr",align:null},"Own Design Model(drag-and-drop)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Devtools"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes - React Query Devtool"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes - Redux DevTools"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Own Advanced Tutorial Examples"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes - 50+ Examples"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes - Few Examples"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Architecture"),(0,r.kt)("td",{parentName:"tr",align:null},"Hooks Based"),(0,r.kt)("td",{parentName:"tr",align:null},"Component Based"),(0,r.kt)("td",{parentName:"tr",align:null},"Hooks Based"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auth Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i18n"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Router Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GraphQL Support"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customization"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Basic Form"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Editable Table"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ","\xa0","Enterprise Edition"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tree Select"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ","\xa0","Enterprise Edition"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Markdown"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ","\xa0","Enterprise Edition"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Calendar"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ","\xa0","Enterprise Edition"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Caching"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API Caching"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multi Level Menu"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ","\xa0","Enterprise Edition"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Typescript"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modal Form"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ","\xa0","Enterprise Edition"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Drawer Form"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Step Form"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ","\xa0","Enterprise Edition"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theming"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd36"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSV Import/Export"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project Creator CLI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ","\xa0",(0,r.kt)("a",{parentName:"td",href:"https://pankod.github.io/superplate/"},(0,r.kt)("em",{parentName:"a"},"(Superplate)"))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uded1")))))}u.isMDXComponent=!0}}]);