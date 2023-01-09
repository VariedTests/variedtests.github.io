"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43722],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:"useCreate",title:"useCreate",siderbar_label:"useCreate",description:"useCreate data hook from refine is a modified version of react-query's useMutation for create mutations"},o=void 0,l={unversionedId:"api-references/hooks/data/useCreate",id:"version-2.xx.xx/api-references/hooks/data/useCreate",title:"useCreate",description:"useCreate data hook from refine is a modified version of react-query's useMutation for create mutations",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/data/useCreate.md",sourceDirName:"api-references/hooks/data",slug:"/api-references/hooks/data/useCreate",permalink:"/docs/2.xx.xx/api-references/hooks/data/useCreate",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/data/useCreate.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"useCreate",title:"useCreate",siderbar_label:"useCreate",description:"useCreate data hook from refine is a modified version of react-query's useMutation for create mutations"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Router Provider",permalink:"/docs/2.xx.xx/api-references/providers/router-provider"},next:{title:"useCreateMany",permalink:"/docs/2.xx.xx/api-references/hooks/data/useCreateMany"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useCreate")," is a modified version of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation#"},(0,n.kt)("inlineCode",{parentName:"a"},"useMutation"))," for create mutations. "),(0,n.kt)("p",null,"It uses ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method as mutation function from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/data-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Shows notifications after the mutation succeeds or fails.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Automatically invalidates the ",(0,n.kt)("inlineCode",{parentName:"p"},"list")," queries after mutation is succesfully run.\n",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/invalidations-from-mutations"},"Refer to React Query docs for detailed information ","\u2192")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Let'say we have a resource named ",(0,n.kt)("inlineCode",{parentName:"p"},"categories")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n        },\n        {\n            id: 3,\n            title: "Unbranded",\n        },\n    ];\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'type CategoryMutationResult = {\n    id: string;\n    title: string;\n}\n\nimport { useCreate } from "@pankod/refine";\n\nconst { mutate } = useCreate<CategoryMutationResult>();\n\nmutate({\n    resource: "categories",\n    values: {\n        title: "New Category",\n    }\n});\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," can also accept lifecycle methods like ",(0,n.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"onError"),"."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/mutations#mutation-side-effects"},"Refer to react-query docs for further information. ","\u2192"))),(0,n.kt)("p",null,"After the mutation runs ",(0,n.kt)("inlineCode",{parentName:"p"},"categories")," will be updated as below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n        },\n        {\n            id: 3,\n            title: "Unbranded",\n        },\n        {\n            id: 4,\n            title: "New Category",\n        },\n    ];\n}\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Queries that use ",(0,n.kt)("inlineCode",{parentName:"p"},"/categories")," endpoint will be automatically invalidated to show the updated data. For example, data returned from ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/data/useList"},"useList")," will be automatically updated.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"useCreate")," returns ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"useMutation")," result which includes ",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"a lot properties"),", one of which being ",(0,n.kt)("inlineCode",{parentName:"p"},"mutate"),".")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Variables passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," must have these types."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n    resource: string;\n    values: TVariables = {};\n}\n"))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"required-block"},(0,n.kt)("div",null,"resource")," ",(0,n.kt)("div",{className:"required"},"Required"))),(0,n.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"values  ",(0,n.kt)("div",{className:" required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TVariables")),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,n.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#successerrornotification"},(0,n.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,n.kt)("td",{parentName:"tr",align:null},'"Successfully created ',(0,n.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,n.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#successerrornotification"},(0,n.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,n.kt)("td",{parentName:"tr",align:null},'"There was an error creating ',(0,n.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,n.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metaData"),(0,n.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,n.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#metadataquery"},(0,n.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,n.kt)("td",{parentName:"tr",align:null},"{}")))),(0,n.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Desription"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TData"),(0,n.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TError"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,n.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{}")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,n.kt)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,n.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"},"TError,"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"},"  { resource: string; values: TVariables; },"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"}," unknown>")))))))}u.isMDXComponent=!0}}]);