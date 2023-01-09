"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4424],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(t),u=r,m=h["".concat(p,".").concat(u)]||h[u]||c[u]||a;return t?o.createElement(m,i(i({ref:n},d),{},{components:t})):o.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={id:"show",title:"Show",swizzle:!0},i=void 0,s={unversionedId:"api-reference/antd/components/basic-views/show",id:"api-reference/antd/components/basic-views/show",title:"Show",description:"`` provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button or giving title to the page.",source:"@site/docs/api-reference/antd/components/basic-views/show.md",sourceDirName:"api-reference/antd/components/basic-views",slug:"/api-reference/antd/components/basic-views/show",permalink:"/docs/api-reference/antd/components/basic-views/show",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/basic-views/show.md",tags:[],version:"current",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"show",title:"Show",swizzle:!0},sidebar:"someSidebar",previous:{title:"List",permalink:"/docs/api-reference/antd/components/basic-views/list"},next:{title:"Breadcrumb",permalink:"/docs/api-reference/antd/components/breadcrumb"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canDelete</code> and <code>canEdit</code>",id:"candelete-and-canedit",level:3},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>goBack</code>",id:"goback",level:3},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"<code>footerButtons</code>",id:"footerbuttons",level:3},{value:"<code>footerButtonProps</code>",id:"footerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(h="PropsTable",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const c={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button or giving title to the page."),(0,r.kt)("p",null,"We will show what ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," does using properties with examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/posts/show/2",live:!0,hideCode:!0,url:"http://localhost:3000/posts/show/2"},'// visible-block-start\nimport { Show, Typography, MarkdownField } from "@pankod/refine-antd";\nimport { useShow, IResourceComponentsProps, useOne } from "@pankod/refine-core";\n\nconst { Title, Text } = Typography;\n\nconst PostShow: React.FC<IResourceComponentsProps> = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: record?.category.id || "",\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n    return (\n        <Show isLoading={isLoading}>\n            <Title level={5}>Id</Title>\n            <Text>{record?.id}</Text>\n\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n\n            <Title level={5}>Category</Title>\n            <Text>\n                {categoryIsLoading ? "Loading..." : categoryData?.data.title}\n            </Text>\n\n            <Title level={5}>Content</Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show/2"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton recordItemId="2">Edit Item 2</ShowButton>\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")),(0,r.kt)("p",null,"It allows adding a title for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>"),' component. if you don\'t pass title props it uses the "Show" prefix and the singular resource name by default. For example, for the "posts" resource, it will be "Show post".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\nconst { default: simpleRest } = RefineSimpleRest;\n\nconst dataProvider = simpleRest("https://api.fake-rest.refine.dev");\n\nconst customDataProvider = {\n    ...dataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n        return {\n            data: {},\n        };\n    },\n};\n\n// visible-block-start\nimport { Show } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Show title="Custom Title">\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show/2"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton recordItemId="2">Show Item 2</ShowButton>\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component in a custom page, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/custom/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/custom/2"},'setInitialRoutes(["/custom/2"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Show } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst CustomPage: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Show resource="posts">\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom/:id",\n                    },\n                ],\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\n\nrender(<App />);\n')),(0,r.kt)("h3",{id:"candelete-and-canedit"},(0,r.kt)("inlineCode",{parentName:"h3"},"canDelete")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"canEdit")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"canEdit")," allows us to add the delete and edit buttons inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component. If the resource has ",(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"canEdit")," property refine adds the buttons by default."),(0,r.kt)("p",null,"When clicked on, delete button executes the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," method provided by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," and the edit button redirects the user to the record edit page."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/delete-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<DeleteButton>"))," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/edit-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<EditButton>"))," documentation for detailed usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton, Edit } = RefineAntd;\nconst { usePermissions } = RefineCore;\n\nconst { default: simpleRest } = RefineSimpleRest;\n\nconst dataProvider = simpleRest("https://api.fake-rest.refine.dev");\n\nconst customDataProvider = {\n    ...dataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n        return {\n            data: {},\n        };\n    },\n};\n\nconst authProvider = {\n    login: () => Promise.resolve(),\n    logout: () => Promise.resolve(),\n    checkAuth: () => Promise.resolve(),\n    checkError: () => Promise.resolve(),\n    getPermissions: () => Promise.resolve("admin"),\n    getUserIdentity: () => Promise.resolve(),\n};\n\n// visible-block-start\nimport { Show } from "@pankod/refine-antd";\nimport { usePermissions } from "@pankod/refine-core";\n\nconst PostShow: React.FC = () => {\n    const { data: permissionsData } = usePermissions();\n    return (\n        <Show\n            /* highlight-start */\n            canDelete={permissionsData?.includes("admin")}\n            canEdit={permissionsData?.includes("admin")}\n            /* highlight-end */\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        authProvider={authProvider}\n        dataProvider={customDataProvider}\n        initialRoutes={["/posts/show/2"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton>Show Item 2</ShowButton>\n                    </div>\n                ),\n                show: PostShow,\n                edit: () => {\n                    return <Edit>Edit Page</Edit>;\n                },\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/auth/usePermissions"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,r.kt)("h3",{id:"recorditemid"},(0,r.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," information from the route by default. ",(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used when it cannot read from the URL (when used on a custom page, modal or drawer)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show, useModalForm, Modal, Button } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    const { modalProps, id, show } = useModalForm({\n        action: "show",\n    });\n\n    return (\n        <div>\n            <Button onClick={() => show()}>Show Button</Button>\n            <Modal {...modalProps}>\n                {/* highlight-next-line */}\n                <Show recordItemId={id}>\n                    <p>Rest of your page here</p>\n                </Show>\n            </Modal>\n        </div>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show/2"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton recordItemId="2">Show Item 2</ShowButton>\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," information for ",(0,r.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," to work properly.")),(0,r.kt)("h3",{id:"dataprovidername"},(0,r.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,r.kt)("p",null,"If not specified, Refine will use the default data provider. If you have multiple data providers and want to use a different one, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProviderName")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport { Show } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-start\nconst PostShow = () => {\n    return <Show dataProviderName="other">...</Show>;\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            // highlight-start\n            dataProvider={{\n                default: dataProvider("https://api.fake-rest.refine.dev/"),\n                other: dataProvider("https://other-api.fake-rest.refine.dev/"),\n            }}\n            // highlight-end\n            resources={[{ name: "posts", show: PostShow }]}\n        />\n    );\n};\n')),(0,r.kt)("h3",{id:"goback"},(0,r.kt)("inlineCode",{parentName:"h3"},"goBack")),(0,r.kt)("p",null,"To customize the back button or to disable it, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show, Icons } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Show goBack={<Icons.SmileOutlined />}>\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts", "/posts/show/2"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton>Show Item 2</ShowButton>\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"isloading"},(0,r.kt)("inlineCode",{parentName:"h3"},"isLoading")),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/card/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Card>"))," component, the ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading")," property can be set like the below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Show isLoading={true}>\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show/2"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton />\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"breadcrumb"},(0,r.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,r.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," package."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/breadcrumb"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show, Breadcrumb } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-start\n            breadcrumb={\n                <div\n                    style={{\n                        padding: "3px 6px",\n                        border: "2px dashed cornflowerblue",\n                    }}\n                >\n                    <Breadcrumb />\n                </div>\n            }\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton />\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"wrapperprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,r.kt)("p",null,"If you want to customize the wrapper of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property. For ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," wrapper elements are simple ",(0,r.kt)("inlineCode",{parentName:"p"},"<div/>"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," can get every attribute that ",(0,r.kt)("inlineCode",{parentName:"p"},"<div/>")," can get."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-start\n            wrapperProps={{\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton />\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"headerprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,r.kt)("p",null,"If you want to customize the header of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/page-header/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"PageHeader")," documentation from Ant Design for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-start\n            headerProps={{\n                subTitle: "This is a subtitle",\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show/2"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton />\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"contentprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,r.kt)("p",null,"If you want to customize the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/card/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Card")," documentation from Ant Design for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-start\n            contentProps={{\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton />\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"headerbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,r.kt)("p",null,"You can customize the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,r.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show, Button } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-start\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show/2"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton />\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"headerbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,r.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/space/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Space")," documentation from Ant Design for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/edit/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/edit/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show, Button } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-start\n            headerButtonProps={{\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n            headerButtons={<Button type="primary">Custom Button</Button>}\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton />\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"footerbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"footerButtons")),(0,r.kt)("p",null,"You can customize the buttons at the footer by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"footerButtons")," property. It accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,r.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show, Button } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-start\n            footerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton />\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"footerbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"footerButtonProps")),(0,r.kt)("p",null,"You can customize the wrapper element of the buttons at the footer by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"footerButtonProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/space/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Space")," documentation from Ant Design for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/2",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/2"},'const { ShowButton } = RefineAntd;\n\n// visible-block-start\nimport { Show, Button } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            footerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-start\n            footerButtonProps={{\n                style: {\n                    // hide-start\n                    float: "right",\n                    marginRight: 24,\n                    // hide-end\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <ShowButton />\n                    </div>\n                ),\n                show: PostShow,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(d,{module:"@pankod/refine-antd/Show","contentProps-type":"[`CardProps`](https://ant.design/components/card/#API)","headerProps-type":"[`PageHeaderProps`](https://procomponents.ant.design/en-US/components/page-header)","headerButtons-default":"[`ListButton`](https://refine.dev/docs/api-reference/antd/components/buttons/list-button/), [`RefreshButton`](https://refine.dev/docs/api-reference/antd/components/buttons/refresh-button/), [`EditButton`](https://refine.dev/docs/api-reference/antd/components/buttons/edit-button/) and [`DeleteButton`](https://refine.dev/docs/api-reference/antd/components/buttons/delete-button/)","headerButtonProps-type":"[`SpaceProps`](https://ant.design/components/space/)","deleteButtonProps-type":"[`DeleteButtonProps`](/docs/api-reference/antd/components/buttons/delete-button/)","saveButtonProps-type":"[`SaveButtonProps`](https://refine.dev/docs/api-reference/antd/components/buttons/save-button/)","footerButtonsProps-type":"[`SpaceProps`](https://ant.design/components/space/)","breadcrumb-default":"[`<Breadcrumb>`](https://ant.design/components/breadcrumb/)","goBack-default":"`<ArrowLeft />`","goBack-type":"`ReactNode`",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);