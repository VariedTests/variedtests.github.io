"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14344],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={id:"supabase",title:"Supabase","example-tags":["antd","supabase","data-provider","live-provider","auth-provider","authentication"]},i=void 0,p={unversionedId:"examples/data-provider/supabase",id:"examples/data-provider/supabase",title:"Supabase",description:"Connect your Supabase database with refine Supabase Data Provider and easily manage all the features that the database offers in your interface. This example will show you how Supabase Data Provider works and is used.",source:"@site/docs/examples/data-provider/supabase.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/supabase",permalink:"/docs/examples/data-provider/supabase",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/data-provider/supabase.md",tags:[],version:"current",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"supabase",title:"Supabase","example-tags":["antd","supabase","data-provider","live-provider","auth-provider","authentication"]},sidebar:"someSidebar",previous:{title:"Strapi v4",permalink:"/docs/examples/data-provider/strapi-v4"},next:{title:"E2E Testing",permalink:"/docs/examples/e2e-testing"}},s={},l=[],d=(u="StackblitzExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const c={toc:l};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Connect your ",(0,n.kt)("a",{parentName:"p",href:"https://supabase.com/"},"Supabase")," database with ",(0,n.kt)("strong",{parentName:"p"},"refine")," Supabase Data Provider and easily manage all the features that the database offers in your interface. This example will show you how Supabase Data Provider works and is used."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"StackBlitz environment does not allow Realtime features to work.")),(0,n.kt)(d,{path:"data-provider-supabase",mdxType:"StackblitzExample"}))}m.isMDXComponent=!0}}]);