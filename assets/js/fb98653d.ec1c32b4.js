"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"general-concepts",title:"General Concepts"},i=void 0,p={unversionedId:"api-reference/general-concepts",id:"api-reference/general-concepts",title:"General Concepts",description:"-   refine core is fully independent of UI. So you can use core components and hooks without any UI dependency.",source:"@site/docs/api-reference/general-concepts.md",sourceDirName:"api-reference",slug:"/api-reference/general-concepts",permalink:"/docs/api-reference/general-concepts",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/general-concepts.md",tags:[],version:"current",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"general-concepts",title:"General Concepts"},sidebar:"someSidebar",previous:{title:"API Reference",permalink:"/docs/api-reference"},next:{title:"Core API",permalink:"/docs/api-reference/core"}},s={},l=[{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>metaData</code>",id:"metadata",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"refine")," core is fully independent of UI. So you can use core components and hooks without any UI dependency."),(0,a.kt)("li",{parentName:"ul"},"All the ",(0,a.kt)("strong",{parentName:"li"},"data")," related hooks(",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useTable"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable")),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm")),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useList"},(0,a.kt)("inlineCode",{parentName:"a"},"useList"))," etc.) of ",(0,a.kt)("strong",{parentName:"li"},"refine")," can be given some common properties like ",(0,a.kt)("inlineCode",{parentName:"li"},"resource"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"metaData"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"queryOptions")," etc.")),(0,a.kt)("h3",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," passes the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a params. This parameter is usually used to as a API endpoint path. It all depends on how to handle the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),". See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider#creating-a-data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"creating a data provider"))," section for an example of how ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," are handled."),(0,a.kt)("p",null,"How does refine know what the resource value is?"),(0,a.kt)("p",null,"1- The resource value is determined from the active route where the component or the hook is used."),(0,a.kt)("p",null,"Like below, if you are using the hook in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," component, the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," value defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},'"posts"'),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { PostList } from "pages/posts/list.tsx";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"2- The resource value is determined from the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop of the hook."),(0,a.kt)("p",null,"You can override the default ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," value hook by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop to the hook like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@pankod/refine-core";\n\nconst PostList: React.FC = () => {\n    const result = useTable({\n        //highlight-next-line\n        resource: "users",\n    });\n\n    return <div>...</div>;\n};\n')),(0,a.kt)("p",null,"How can I request an API with nested route?"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/faq#how-can-i-request-an-api-with-nested-route"},"Refer to how to use resource with nested routes documentation for more information. ","\u2192")),(0,a.kt)("h3",{id:"metadata"},(0,a.kt)("inlineCode",{parentName:"h3"},"metaData")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"metaData")," is used following two purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,a.kt)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON).")),(0,a.kt)("p",null,"How to use ",(0,a.kt)("inlineCode",{parentName:"p"},"metaData")," to pass additional information to data provider methods?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useOne({\n    resource: "posts",\n    id: 1,\n    // highlight-start\n    metaData: {\n        headers: { "x-meta-data": "true" },\n    },\n    // highlight-end\n});\n\nconst myDataProvider = {\n    ...\n    getOne: async ({ resource, id, metaData }) => {\n        // highlight-next-line\n        const headers = metaData?.headers ?? {};\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        //highlight-next-line\n        const { data } = await httpClient.get(url, { headers });\n\n        return {\n            data,\n        };\n    },\n    ...\n};\n')),(0,a.kt)("p",null,"In the above example, we pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"metaData")," object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getOne")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/faq#how-i-can-override-specific-function-of-data-providers"},"Refer to the how to pass ",(0,a.kt)("inlineCode",{parentName:"a"},"metaData")," to your existing ",(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")," methods. ","\u2192")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/data-provider/graphql"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"GraphQL")," guide to learn how to use ",(0,a.kt)("inlineCode",{parentName:"a"},"metaData")," to create GraphQL queries. ","\u2192")))}d.isMDXComponent=!0}}]);