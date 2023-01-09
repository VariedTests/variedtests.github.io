"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83537],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),p=a(12466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:i,values:c,groupId:m,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,l.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==x&&!g.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,s.U)(),[b,v]=(0,r.useState)(x),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=m){const e=N[m];null!=e&&e!==b&&g.some((t=>t.value===e))&&v(e)}const q=e=>{const t=e.currentTarget,a=C.indexOf(t),n=g[a].value;n!==b&&(w(t),v(n),null!=m&&y(m,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":q(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},h)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>C.push(e),onKeyDown:T,onClick:q},i,{className:(0,o.Z)("tabs__item",u,i?.className,{"tabs__item--active":b===t})}),a??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},37386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),i=a(85162);const l={id:"graphql",title:"GraphQL"},s=void 0,p={unversionedId:"guides-and-concepts/data-provider/graphql",id:"version-2.xx.xx/guides-and-concepts/data-provider/graphql",title:"GraphQL",description:"refine graphql and strapi-graphql data provider built with gql-query-builder and graphql-request is made for GraphQL implemantation. It aims to create a query dynamically with gql-query-builder and send requests with graphql-request.",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/data-provider/graphql.md",sourceDirName:"guides-and-concepts/data-provider",slug:"/guides-and-concepts/data-provider/graphql",permalink:"/docs/2.xx.xx/guides-and-concepts/data-provider/graphql",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/data-provider/graphql.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"graphql",title:"GraphQL"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Interface References",permalink:"/docs/2.xx.xx/api-references/interfaceReferences"},next:{title:"Strapi-v4",permalink:"/docs/2.xx.xx/guides-and-concepts/data-provider/strapi-v4"}},d={},u=[{value:"GraphQL Query Builder",id:"graphql-query-builder",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Create Collections",id:"create-collections",level:2},{value:"List Page",id:"list-page",level:2},{value:"Edit Page",id:"edit-page",level:2},{value:"Show Page",id:"show-page",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/graphql"},"graphql")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-graphql"},"strapi-graphql")," data provider built with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"gql-query-builder")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-request"},"graphql-request")," is made for GraphQL implemantation. It aims to create a query dynamically with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"gql-query-builder")," and send requests with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-request"},"graphql-request"),"."),(0,r.kt)("h2",{id:"graphql-query-builder"},"GraphQL Query Builder"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"GraphQL Query Builder")," allows us to build queries and mutations. The ",(0,r.kt)("inlineCode",{parentName:"p"},"getList"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getOne")," methods in our ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," generate a query to send a request. On the other hand, the ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"createMany"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"updateMany"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteOne")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteMany")," methods generate a mutation to send a request."),(0,r.kt)("p",null,"In order to create a GraphQL query, our ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," has to take some options, such as specifying which fields will come in response, we pass these options to our ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," methods with ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaDataQuery"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder#options"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"MetaDataQuery")," properties for detailed usage. ","\u2192")),(0,r.kt)("p",null,"Hooks and components that support ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaDataQuery"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Supported data hooks"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported other hooks"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported components"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/data/useUpdate"},(0,r.kt)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/components/buttons/delete-button"},(0,r.kt)("inlineCode",{parentName:"a"},"DeleteButton")," ","\u2192"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/data/useUpdateMany"},(0,r.kt)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/form/useModalForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useModalForm")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/components/buttons/refresh-button"},(0,r.kt)("inlineCode",{parentName:"a"},"RefreshButton")," ","\u2192"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/data/useDelete"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/form/useDrawerForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useDrawerForm")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/data/useDeleteMany"},(0,r.kt)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/form/useStepsForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useStepsForm")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/data/useCreate"},(0,r.kt)("inlineCode",{parentName:"a"},"useCreate")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/table/useTable"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/data/useCreateMany"},(0,r.kt)("inlineCode",{parentName:"a"},"useCreateMany")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/table/useEditableTable"},(0,r.kt)("inlineCode",{parentName:"a"},"useEditableTable")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/data/useList"},(0,r.kt)("inlineCode",{parentName:"a"},"useList")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/show/useSimpleList"},(0,r.kt)("inlineCode",{parentName:"a"},"useSimpleList")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/data/useOne"},(0,r.kt)("inlineCode",{parentName:"a"},"useOne")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/show/useShow"},(0,r.kt)("inlineCode",{parentName:"a"},"useShow")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/data/useMany"},(0,r.kt)("inlineCode",{parentName:"a"},"useMany")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/import-export/useExport"},(0,r.kt)("inlineCode",{parentName:"a"},"useExport")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/data/useCustom"},(0,r.kt)("inlineCode",{parentName:"a"},"useCustom")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/field/useCheckboxGroup"},(0,r.kt)("inlineCode",{parentName:"a"},"useCheckboxGroup")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/field/useSelect"},(0,r.kt)("inlineCode",{parentName:"a"},"useSelect")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/hooks/field/useRadioGroup"},(0,r.kt)("inlineCode",{parentName:"a"},"useRadioGroup")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine @pankod/refine-strapi-graphql graphql-request@3\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We used ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-graphql"},"strapi-graphql")," server for this guide. You can customize your data provider for your own GraphQL server.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To activate data provider in ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-strapi-graphql"),", we have to pass the API address with ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLClient"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\n// highlight-start\nimport dataProvider from "@pankod/refine-strapi-graphql";\nimport { GraphQLClient } from "graphql-request";\n// highlight-end\n\nconst client = new GraphQLClient("API_URL");\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n// highlight-next-line\n            dataProvider={dataProvider(client)}\n        />\n    );\n};\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"With ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," you can do things like add headers for authentication. On the other hand, you can send a request with your query.")),(0,r.kt)("h2",{id:"create-collections"},"Create Collections"),(0,r.kt)("p",null,"We created two collections on ",(0,r.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," and added a relation between them. For detailed information on how to create a collection, you can check ",(0,r.kt)("a",{parentName:"p",href:"https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html"},"here"),"."),(0,r.kt)("p",null,"You can see the fields of the collections we created as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="post"',title:'"post"'},'{\n    "id": 1,\n    "title": "Eius ea autem.",\n    "content": "Explicabo nihil delectus. Nam aliquid sunt numquam...",\n    "category": {\n        "id": 24,\n        "title": "Placeat fuga"\n    }\n}\n')),(0,r.kt)("h2",{id:"list-page"},"List Page"),(0,r.kt)("p",null,"When sending the request, we must specify which fields will come, so we send ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"metaData")," to hooks that we will fetch data from."),(0,r.kt)(o.Z,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"usage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'export const PostList: React.FC<IResourceComponentsProps> = () => {\n    const { tableProps, sorter } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n// highlight-start\n        metaData: {\n            fields: [\n                "id",\n                "title",\n                {\n                    category: ["title"],\n                },\n            ],\n        },\n// highlight-end\n    });\n\n    const { selectProps } = useSelect<ICategory>({\n        resource: "categories",\n// highlight-start\n        metaData: {\n            fields: ["id", "title"],\n        },\n// highlight-end\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column\n                    dataIndex="id"\n                    title="ID"\n                    sorter={{ multiple: 2 }}\n                    defaultSortOrder={getDefaultSortOrder("id", sorter)}\n                />\n                <Table.Column\n                    key="title"\n                    dataIndex="title"\n                    title="Title"\n                    sorter={{ multiple: 1 }}\n                />\n                <Table.Column<IPost>\n                    dataIndex="category"\n                    title="Category"\n                    filterDropdown={(props) => (\n                        <FilterDropdown {...props}>\n                            <Select\n                                style={{ minWidth: 200 }}\n                                mode="multiple"\n                                placeholder="Select Category"\n                                {...selectProps}\n                            />\n                        </FilterDropdown>\n                    )}\n                    render={(_, record) => record.category.title}\n                />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <Space>\n                            <EditButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <ShowButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <DeleteButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                        </Space>\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n'))),(0,r.kt)(i.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\nquery ($sort: String, $where: JSON, $start: Int, $limit: Int) {\n    posts (sort: $sort, where: $where, start: $start, limit: $limit) {\n        id,\n        title,\n        category {\n            title\n        }\n    }\n}\n")))),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/graphql-list.png",alt:"GraphQL list page"})),(0,r.kt)("h2",{id:"edit-page"},"Edit Page"),(0,r.kt)("p",null,"On the edit page ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," sends a request with the record id to fill the form. ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," must be sent in ",(0,r.kt)("inlineCode",{parentName:"p"},"metaData")," to determine which fields will come in this request."),(0,r.kt)(o.Z,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"usage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'export const PostEdit: React.FC<IResourceComponentsProps> = () => {\n    const { formProps, saveButtonProps, queryResult } = useForm<\n        IPost,\n        HttpError,\n        IPost\n    >({\n// highlight-start\n        metaData: {\n            fields: [\n                "id",\n                "title",\n                {\n                    category: ["id", "title"],\n                },\n                "content",\n            ],\n        },\n// highlight-end\n    });\n\n    const postData = queryResult?.data?.data;\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n        defaultValue: postData?.category.id,\n// highlight-start\n        metaData: {\n            fields: ["id", "title"],\n        },\n// highlight-end\n    });\n\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <Form\n                {...formProps}\n                layout="vertical"\n                onFinish={(values) =>\n                    formProps.onFinish?.({\n                        ...values,\n                        category: values.category.id,\n                    } as any)\n                }\n            >\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name={["category", "id"]}\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <MDEditor data-color-mode="light" />\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The create page is largely the same as the edit page, there is no need to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"metaData")," to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," on the create page. If you want to use the created record as a response after the request, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"metaData"),"."))),(0,r.kt)(i.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"mutation ($input: updatePostInput) {\n    updatePost (input: $input) {\n        post  {\n            id\n        }\n    }\n}\n")))),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/graphql-edit.png",alt:"GraphQL edit page"})),(0,r.kt)("h2",{id:"show-page"},"Show Page"),(0,r.kt)("p",null,"Show component includes the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/buttons/refresh-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<RefreshButton>"))," by default. We can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"refetch")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"queryResult")," to it's ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick"),". This method repeats the last request made by the query. So it refreshes the data that is shown in page."),(0,r.kt)(o.Z,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"usage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'export const PostShow: React.FC<IResourceComponentsProps> = () => {\n    const { queryResult } = useShow<IPost>({\n        resource: "posts",\n        // highlight-start\n        metaData:{\n            fields: [\n                "id",\n                "title",\n                {\n                    category: ["title"],\n                },\n                "content",\n            ],\n        },\n        // highlight-end\n    });\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show\n            isLoading={isLoading}\n            // highlight-next-line\n            pageHeaderProps={{ extra: <RefreshButton onClick={() => queryResult.refetch()} /> }}\n        >\n            <Title level={5}>Id</Title>\n            <Text>{record?.id}</Text>\n\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n\n            <Title level={5}>Category</Title>\n            <Text>{record?.category.title}</Text>\n\n            <Title level={5}>Content</Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n'))),(0,r.kt)(i.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"mutation ($input: updatePostInput) {\n    updatePost (input: $input) {\n        post  {\n            id\n        }\n    }\n}\n")))),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/graphql-show.png",alt:"GraphQL show page"})))}m.isMDXComponent=!0}}]);