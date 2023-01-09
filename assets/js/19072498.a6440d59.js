"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(n),m=a,h=l["".concat(s,".").concat(m)]||l[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"list",title:"List",sidebar_label:"List",swizzle:!0},i=void 0,p={unversionedId:"api-reference/mui/components/basic-views/list",id:"api-reference/mui/components/basic-views/list",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles.",source:"@site/docs/api-reference/mui/components/basic-views/list.md",sourceDirName:"api-reference/mui/components/basic-views",slug:"/api-reference/mui/components/basic-views/list",permalink:"/docs/api-reference/mui/components/basic-views/list",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/basic-views/list.md",tags:[],version:"current",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"list",title:"List",sidebar_label:"List",swizzle:!0},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/api-reference/mui/components/basic-views/edit"},next:{title:"Show",permalink:"/docs/api-reference/mui/components/basic-views/show"}},s={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canCreate</code> and <code>createButtonProps</code>",id:"cancreate-and-createbuttonprops",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"<del><code>cardProps</code></del>",id:"cardprops",level:3},{value:"<del><code>cardHeaderProps</code></del>",id:"cardheaderprops",level:3},{value:"<del><code>cardContentProps</code></del>",id:"cardcontentprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=(l="PropsTable",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var l;const u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles."),(0,a.kt)("p",null,"We will show what ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("p",null,"It allows adding title inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component. if you don't pass title props it uses the plural resource name by default. For example, for the ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts"),' resource, it will be "Posts".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return <List title="Custom Title">...</List>;\n};\n')),(0,a.kt)("h3",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component in a custom page, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport { List } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-start\nconst CustomPage = () => {\n    return <List resource="posts">...</List>;\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev/")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,a.kt)("h3",{id:"cancreate-and-createbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"canCreate")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"createButtonProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component. If resource is passed a create component, ",(0,a.kt)("strong",{parentName:"p"},"refine")," adds the create button by default. If you want to customize this button you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below."),(0,a.kt)("p",null,"Create button redirects to the create page of the resource according to the value it reads from the URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { usePermissions } from "@pankod/refine-core";\n// highlight-next-line\nimport { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    const { data } = usePermissions<string>();\n\n    return (\n        <List\n            // highlight-start\n            canCreate={data === "admin"}\n            createButtonProps={{ size: "small" }}\n            // highlight-end\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/auth/usePermissions"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,a.kt)("h3",{id:"breadcrumb"},(0,a.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,a.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," package."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/mui-breadcrumb"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            breadcrumb={null}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"wrapperprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,a.kt)("p",null,"If you want to customize the wrapper of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Card")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            wrapperProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"headerprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,a.kt)("p",null,"If you want to customize the header of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CardHeader")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            headerProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"contentprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,a.kt)("p",null,"If you want to customize the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CardContent")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            contentProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"headerbuttons"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,a.kt)("p",null,"You can customize the buttons at the header by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,a.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Button } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"headerbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,a.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/box/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            headerButtonProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"cardprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-card/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<Card>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardProps"),"."),(0,a.kt)("h3",{id:"cardheaderprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardHeaderProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"headerProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardHeader>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardHeaderProps"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/create.tsx"',title:'"src/pages/posts/create.tsx"'},'// highlight-next-line\nimport { List, Typography } from "@pankod/refine-mui";\n\nexport const CreatePage: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            cardHeaderProps={{\n                title: <Typography variant="h5">Custom Title</Typography>,\n            }}\n            // highlight-end\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/basic-views/list/cardHeaderPropsTitle.png",alt:"Card Header Props Usage"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"cardcontentprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardContentProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"contentProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardContent>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardContentProps"),"."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(c,{module:"@pankod/refine-mui/List","wrapperProps-type":"[`CardProps`](https://mui.com/material-ui/api/card/#props)","contentProps-type":"[`CardContentProps`](https://mui.com/material-ui/api/card-content/#props)","headerProps-type":"[`CardHeaderProps`](https://mui.com/material-ui/api/card-header/#props)","headerButtons-default":"[`CreateButton`](https://refine.dev/docs/api-reference/mui/components/buttons/create-button/)","headerButtonProps-type":"[`BoxProps`](https://mui.com/material-ui/api/box/#props)","breadcrumb-default":"[`<Breadcrumb/>`](/docs/api-reference/mui/components/mui-breadcrumb/)","createButtonProps-type":"[`CreateButtonProps`](https://refine.dev/docs/api-reference/mui/components/buttons/create-button/)",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);