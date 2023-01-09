"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:o,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={id:"show",title:"Show"},i=void 0,d={unversionedId:"api-references/components/basic-views/show",id:"version-2.xx.xx/api-references/components/basic-views/show",title:"Show",description:"`` provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button or giving title to the page.",source:"@site/versioned_docs/version-2.xx.xx/api-references/components/basic-views/show.md",sourceDirName:"api-references/components/basic-views",slug:"/api-references/components/basic-views/show",permalink:"/docs/2.xx.xx/api-references/components/basic-views/show",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/components/basic-views/show.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"show",title:"Show"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Create",permalink:"/docs/2.xx.xx/api-references/components/basic-views/create"},next:{title:"Edit",permalink:"/docs/2.xx.xx/api-references/components/basic-views/edit"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>canDelete</code> and <code>canEdit</code>",id:"candelete-and-canedit",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>actionButtons</code>",id:"actionbuttons",level:3},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>pageHeaderProps</code>",id:"pageheaderprops",level:3},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button or giving title to the page."),(0,o.kt)("p",null,"We will show what ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," does using properties with examples."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"candelete-and-canedit"},(0,o.kt)("inlineCode",{parentName:"h3"},"canDelete")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"canEdit")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"canDelete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"canEdit")," allows us to add the delete and edit buttons inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component. If the resource has ",(0,o.kt)("inlineCode",{parentName:"p"},"canDelete")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"canEdit")," property refine adds the buttons by default."),(0,o.kt)("p",null,"When clicked on, delete button executes the ",(0,o.kt)("inlineCode",{parentName:"p"},"useDelete")," method provided by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/data-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"dataProvider"))," and the edit button redirects the user to the record edit page."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/buttons/delete-button"},(0,o.kt)("inlineCode",{parentName:"a"},"<DeleteButton>"))," and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/buttons/edit-button"},(0,o.kt)("inlineCode",{parentName:"a"},"<EditButton>"))," documentation for detailed usage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show, usePermissions } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    const { data } = usePermissions<string>();\n\n    return (\n        <Show\n            canDelete={data === "admin"}\n            canEdit={data === "editor" || data === "admin"}\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/usePermissions"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,o.kt)("h3",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h3"},"title")),(0,o.kt)("p",null,"It allows adding a title for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>"),' component. if you don\'t pass title props it uses the "Show" prefix and the singular resource name by default. For example, for the "posts" resource, it will be "Show post".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    return <Show title="Custom Title">...</Show>;\n};\n')),(0,o.kt)("h3",{id:"actionbuttons"},(0,o.kt)("inlineCode",{parentName:"h3"},"actionButtons")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/card/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Card>"))," component so you can customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," property with the properties of ",(0,o.kt)("inlineCode",{parentName:"p"},"actionButtons"),". By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Card>")," component shows nothing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show, Space, Button } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            actionButtons={\n                <Space>\n                    <Button type="primary">Custom Button 1</Button>\n                    <Button type="default">Custom Button 2</Button>\n                </Space>\n            }\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/basic-views/show/actionButtonsUsage.png",alt:"actionButton Usage"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"isloading"},(0,o.kt)("inlineCode",{parentName:"h3"},"isLoading")),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/card/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Card>"))," component, the ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading")," property can be set like the below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { Show, Modal, ShowButton, useShow } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    const { queryResult } = useShow();\n    const { isLoading } = queryResult;\n\n    return <Show isLoading="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/basic-views/show/isLoading.png">...</Show>;\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/basic-views/show/isLoading.png",alt:"isLoading"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"pageheaderprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"pageHeaderProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/page-header/#API"},(0,o.kt)("inlineCode",{parentName:"a"},"<PageHeader>"))," components so you can customize it with the properties of ",(0,o.kt)("inlineCode",{parentName:"p"},"pageHeaderProps"),". By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"extra")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PageHeader>")," component shows ",(0,o.kt)("inlineCode",{parentName:"p"},"<RefreshButton>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<ListButton>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<EditButton>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," based on your resource definition in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," property you pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            pageHeaderProps={{\n                onBack: () => console.log("Hello, refine"),\n                subTitle: "Subtitle",\n            }}\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/basic-views/show/pageHeaderPropsUsage.png",alt:"pageHeaderProps Usage"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"recorditemid"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," information from the route by default. ",(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used when it cannot read from the URL (when used on a custom page, modal or drawer)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { Show, Modal, ShowButton, useShow } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    const [visibleShowModal, setVisibleShowModal] = useState<boolean>(false);\n\n    const { queryResult, showId, setShowId } = useShow();\n    const { data, isLoading } = queryResult;\n\n    return (\n        <>\n            <ShowButton\n                size="small"\n                onClick={() => {\n                    setShowId(data?.data.id);\n                    setVisibleShowModal(true);\n                }}\n            />\n            <Modal\n                visible={visibleShowModal}\n                onCancel={() => setVisibleShowModal(false)}\n            >\n                <Show recordItemId={showId} isLoading={isLoading}>\n                    // show something with `data`\n                </Show>\n            </Modal>\n        </>\n    );\n};\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component needs the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," information for ",(0,o.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," to work properly.")),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component in a custom page, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/guides-and-concepts/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, Show } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\n// highlight-start\nconst CustomPage = () => {\n    return (\n        <Show resource="posts" recordItemId="postId">\n            ...\n        </Show>\n    );\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        exact: true,\n                        component: CustomPage,\n                        path: "/custom",\n                    },\n                ]\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev/")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component needs the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," information for work properly, so if you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component in custom pages, you should pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," property.")),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"canDelete"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a delete button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"If the resource has ",(0,o.kt)("inlineCode",{parentName:"td"},"canDelete")," prop it is ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," else ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"canEdit"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds an edit button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"If the resource has ",(0,o.kt)("inlineCode",{parentName:"td"},"canEdit")," prop it is ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," else ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"title"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a title"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"Show"')," prefix and singular of ",(0,o.kt)("inlineCode",{parentName:"td"},"resource.name"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"actionButtons"),(0,o.kt)("td",{parentName:"tr",align:null},"Gets passed to the ",(0,o.kt)("inlineCode",{parentName:"td"},"extra")," prop of the ",(0,o.kt)("inlineCode",{parentName:"td"},"<Card>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<SaveButton>")," and depending on your resource configuration (",(0,o.kt)("inlineCode",{parentName:"td"},"canDelete")," prop)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"isLoading"),(0,o.kt)("td",{parentName:"tr",align:null},"Gets passed to the ",(0,o.kt)("inlineCode",{parentName:"td"},"loading")," prop of the ",(0,o.kt)("inlineCode",{parentName:"td"},"<Card>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pageHeaderProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Passes props for ",(0,o.kt)("inlineCode",{parentName:"td"},"<PageHeader>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/page-header/#API"},"PageHeaderProps")),(0,o.kt)("td",{parentName:"tr",align:null},"{ ghost: false, ",(0,o.kt)("a",{parentName:"td",href:"#title"},"title"),", extra: ",(0,o.kt)("inlineCode",{parentName:"td"},"<ListButton>")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"<RefreshButton>")," }")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"recordItemId"),(0,o.kt)("td",{parentName:"tr",align:null},"Record id for ",(0,o.kt)("inlineCode",{parentName:"td"},"<RefreshButton>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resource"),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the URL.")))))}c.isMDXComponent=!0}}]);