"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[u]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={id:"edit",title:"Edit"},i=void 0,d={unversionedId:"api-references/components/basic-views/edit",id:"version-2.xx.xx/api-references/components/basic-views/edit",title:"Edit",description:"`` provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button.",source:"@site/versioned_docs/version-2.xx.xx/api-references/components/basic-views/edit.md",sourceDirName:"api-references/components/basic-views",slug:"/api-references/components/basic-views/edit",permalink:"/docs/2.xx.xx/api-references/components/basic-views/edit",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/components/basic-views/edit.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"edit",title:"Edit"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Show",permalink:"/docs/2.xx.xx/api-references/components/basic-views/show"},next:{title:"<Authenticated>",permalink:"/docs/2.xx.xx/api-references/components/auth/authenticated"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"<code>canDelete</code> and <code>deleteButtonProps</code>",id:"candelete-and-deletebuttonprops",level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>actionButtons</code>",id:"actionbuttons",level:3},{value:"<code>pageHeaderProps</code>",id:"pageheaderprops",level:3},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>mutationMode</code>",id:"mutationmode",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button."),(0,r.kt)("p",null,"We will show what ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," does using properties with examples."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"candelete-and-deletebuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"canDelete")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"deleteButtonProps")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," allows us to add the delete button inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component. If the resource has the ",(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," property,refine adds the delete button by default. If you want to customize this button you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteButtonProps")," property like the code below."),(0,r.kt)("p",null,"When clicked on, the delete button executes the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," method provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/buttons/delete-button"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<DeleteButton>")," documentation for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit, usePermissions } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    const { data } = usePermissions<string>();\n\n    return (\n        <Edit\n            canDelete={data === "admin"}\n            deleteButtonProps={{ size: "small" }}\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/auth/usePermissions"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,r.kt)("h3",{id:"savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component has a save button by default. If you want to customize this button you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," property like the code below."),(0,r.kt)("p",null,"Clicking on the save button will submit your form."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/buttons/save-button"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<SaveButton>")," documentation for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    return <Edit saveButtonProps={{ size: "small" }}>...</Edit>;\n};\n')),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")),(0,r.kt)("p",null,"It allows adding titles inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>"),' component. if you don\'t pass title props it uses the "Edit" prefix and singular resource name by default. For example, for the "posts" resource, it will be "Edit post".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    return <Edit title="Custom Title">...</Edit>;\n};\n')),(0,r.kt)("h3",{id:"actionbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"actionButtons")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," uses the Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/card"},(0,r.kt)("inlineCode",{parentName:"a"},"<Card>"))," component. The ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Card>")," component shows ",(0,r.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," based on your resource definition in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," property you pass to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),". If you want to use other things instead of these buttons, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"actionButton")," property like the code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit, Button } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            actionButtons={\n                <>\n                    <Button type="primary">Custom Button 1</Button>\n                    <Button size="small">Custom Button 2</Button>\n                </>\n            }\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/basic-views/edit/actionButtonsUsage.png",alt:"actionButton Usage"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"pageheaderprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"pageHeaderProps")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," uses the Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/page-header/#API"},(0,r.kt)("inlineCode",{parentName:"a"},"<PageHeader>"))," components, which means that you can customize the properties of ",(0,r.kt)("inlineCode",{parentName:"p"},"pageHeaderProps"),".\nBy default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"extra")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<PageHeader>")," component shows ",(0,r.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<ListButton>")," based on your resource definition in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," property you pass to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            pageHeaderProps={{\n                onBack: () => console.log("Hello, refine"),\n                subTitle: "Subtitle",\n            }}\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/basic-views/edit/pageHeaderPropsUsage.png",alt:"pageHeaderProps Usage"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"recorditemid"},(0,r.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," information from the route by default. ",(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used when it cannot read from the URL(when used on a custom page, modal or drawer)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit, Modal, useModalForm } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    const { modalProps, editId } = useModalForm({\n        action: "edit",\n    });\n\n    return (\n        <>\n            ...\n            <Modal {...modalProps}>\n                <Edit recordItemId={editId}>...</Edit>\n            </Modal>\n        </>\n    );\n};\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," information for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," to work properly.")),(0,r.kt)("h3",{id:"mutationmode"},(0,r.kt)("inlineCode",{parentName:"h3"},"mutationMode")),(0,r.kt)("p",null,"Determines which mode mutation will have while executing ",(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," ."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/guides-and-concepts/mutation-mode"},"Refer to the mutation mode docs for further information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    return <Edit mutationMode="undoable">...</Edit>;\n};\n')),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component in a custom page, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/guides-and-concepts/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, Edit } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-start\nconst CustomPage = () => {\n    return <Edit resource="posts">...</Edit>;\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        exact: true,\n                        component: CustomPage,\n                        path: "/custom",\n                    },\n                ]\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev/")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," information for work properly so if you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component in custom pages, you should pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," property.")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"canDelete"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a delete button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If the resource has ",(0,r.kt)("inlineCode",{parentName:"td"},"canDelete")," prop it is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," else ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deleteButtonProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds properties for delete button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#delete-button-props"},(0,r.kt)("inlineCode",{parentName:"a"},"DeleteButtonProps"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<DeleteButton>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds properties for create button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; loading: boolean; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<SaveButton>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds the title"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Edit"')," prefix and singular of ",(0,r.kt)("inlineCode",{parentName:"td"},"resource.name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actionButtons"),(0,r.kt)("td",{parentName:"tr",align:null},"Passes properties for ",(0,r.kt)("inlineCode",{parentName:"td"},"<PageHeader>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<SaveButton>")," and depending on your resource configuration (",(0,r.kt)("inlineCode",{parentName:"td"},"canDelete")," prop)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageHeaderProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Passes properties for ",(0,r.kt)("inlineCode",{parentName:"td"},"<PageHeader>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/page-header/#API"},"PageHeaderProps")),(0,r.kt)("td",{parentName:"tr",align:null},"{ ghost: false, ",(0,r.kt)("a",{parentName:"td",href:"#title"},"title"),", extra: ",(0,r.kt)("inlineCode",{parentName:"td"},"<ListButton>")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"<RefreshButton>")," }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recordItemId"),(0,r.kt)("td",{parentName:"tr",align:null},"The record id for ",(0,r.kt)("inlineCode",{parentName:"td"},"<RefreshButton>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/guides-and-concepts/mutation-mode"},"Determines when mutations are executed")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},' "pessimistic')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"optimistic')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"pessimistic"'),"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the URL.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*"),": These properties have default values in ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on the ",(0,r.kt)("strong",{parentName:"p"},"<",(0,r.kt)("a",{parentName:"strong",href:"/docs/2.xx.xx/api-references/components/refine-config"},"Refine"),">")," component.")))}u.isMDXComponent=!0}}]);