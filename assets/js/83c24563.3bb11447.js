"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43897],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"useApiUrl",title:"useApiUrl"},i=void 0,l={unversionedId:"api-reference/core/hooks/data/useApiUrl",id:"api-reference/core/hooks/data/useApiUrl",title:"useApiUrl",description:"useApiUrl lets you access the API URL of the dataProvider that was configured in `` component.",source:"@site/docs/api-reference/core/hooks/data/useApiUrl.md",sourceDirName:"api-reference/core/hooks/data",slug:"/api-reference/core/hooks/data/useApiUrl",permalink:"/docs/api-reference/core/hooks/data/useApiUrl",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useApiUrl.md",tags:[],version:"current",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"useApiUrl",title:"useApiUrl"},sidebar:"someSidebar",previous:{title:"useBreadcrumb",permalink:"/docs/api-reference/core/hooks/useBreadcrumb"},next:{title:"useCreate",permalink:"/docs/api-reference/core/hooks/data/useCreate"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Return value",id:"return-value",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useApiUrl")," lets you access the API URL of the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," that was configured in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,a.kt)("p",null,"This hook uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"getApiUrl")," method of the used ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"An example use case might be using it with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useCustom"},(0,a.kt)("inlineCode",{parentName:"a"},"useCustom"))," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    // highlight-next-line\n    useCustom,\n    useApiUrl\n} from "@pankod/refine-core";\n\ninterface PostUniqueCheckResponse {\n    isAvailable: boolean;\n}\n\nconst apiUrl = useApiUrl();\n\n// highlight-start\nconst { data, isLoading } = useCustom<PostUniqueCheckResponse>({\n    url: `${apiUrl}/posts-unique-check`,\n    method: "get",\n    config: {\n        query: {\n            title: "Foo bar",\n        },\n    },\n});\n// highlight-end\n')),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))))}u.isMDXComponent=!0}}]);