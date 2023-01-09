"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"appwrite",title:"Appwrite"},i=void 0,s={unversionedId:"guides-and-concepts/data-provider/appwrite",id:"version-2.xx.xx/guides-and-concepts/data-provider/appwrite",title:"Appwrite",description:"Introduction",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/data-provider/appwrite.md",sourceDirName:"guides-and-concepts/data-provider",slug:"/guides-and-concepts/data-provider/appwrite",permalink:"/docs/2.xx.xx/guides-and-concepts/data-provider/appwrite",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/data-provider/appwrite.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"appwrite",title:"Appwrite"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Strapi-v4",permalink:"/docs/2.xx.xx/guides-and-concepts/data-provider/strapi-v4"},next:{title:"SSR-Next.js",permalink:"/docs/2.xx.xx/guides-and-concepts/ssr-nextjs"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Appwrite Client",id:"appwrite-client",level:3},{value:"Authprovider",id:"authprovider",level:3},{value:"Create Collections",id:"create-collections",level:2},{value:"Permissions",id:"permissions",level:3},{value:"Login page\u200b",id:"login-page",level:2},{value:"List Page",id:"list-page",level:2},{value:"Create Page",id:"create-page",level:2},{value:"Edit Page",id:"edit-page",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," and ",(0,a.kt)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite")," work in harmony, offering you quick development options. You can use your data (API, Database) very simply by using ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s Appwrite data provider."),(0,a.kt)("p",null,"You can only focus on your UI as we can handle your data quickly and simply."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This guide has been prepared assuming you know the basics of ",(0,a.kt)("strong",{parentName:"p"},"refine"),". If you haven't learned these basics yet, we recommend reading the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Tutorial"),".")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pankod/refine-appwrite\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"It is very simple to use and consists of two steps. First, define your Appwrite project id and then give it to the dataprovider."),(0,a.kt)("h3",{id:"appwrite-client"},"Appwrite Client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="appwriteClient.ts"',title:'"appwriteClient.ts"'},'import { Appwrite } from "@pankod/refine-appwrite";\n\nconst APPWRITE_URL = "http://localhost/v1";\n//highlight-start\nconst APPWRITE_PROJECT = "YOUR_APPWRITE_PROJECT_ID";\n//highlight-end\n\nconst appwriteClient = new Appwrite();\n\nappwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);\n\nexport appwriteClient;\n')),(0,a.kt)("h3",{id:"authprovider"},"Authprovider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="authProvider.ts"',title:'"authProvider.ts"'},'import { AuthProvider } from "@pankod/refine";\n\nimport appwriteClient from "./appwriteClient";\n\nexport const authProvider: AuthProvider = {\n    login: ({ email, password }) => {\n        return appwriteClient.account.createSession(email, password);\n    },\n    logout: async () => {\n        await appwriteClient.account.deleteSession("current");\n\n        return "/";\n    },\n    checkError: () => Promise.resolve(),\n    checkAuth: async () => {\n        const session = await appwriteClient.account.getSession("current");\n\n        if (session) {\n            return Promise.resolve();\n        }\n\n        return Promise.reject();\n    },\n    getPermissions: () => Promise.resolve(),\n    getUserIdentity: async () => {\n        const user = await appwriteClient.account.get();\n\n        if (user) {\n            return user;\n        }\n    },\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, AuthProvider } from "@pankod/refine";\n//highlight-start\nimport { dataProvider } from "@pankod/refine-appwrite";\n//highlight-end\nimport routerProvider from "@pankod/refine-react-router";\n\n//highlight-start\nimport appwriteClient from "./appwriteClient";\nimport authProvider from "./authProvider";\n//highlight-end\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            //highlight-start\n            dataProvider={dataProvider(appwriteClient)}\n            authProvider={authProvider}\n            //highlight-end\n            routerProvider={routerProvider}\n        />\n    );\n};\n')),(0,a.kt)("h2",{id:"create-collections"},"Create Collections"),(0,a.kt)("p",null,"We created two collections on Appwrite Database as ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," and added a relation between them."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Category Collection"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Title: text")),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/category.png",alt:"category"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Post Collection"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Title: text"),(0,a.kt)("li",{parentName:"ul"},"CategoryId: text"),(0,a.kt)("li",{parentName:"ul"},"Content: text"),(0,a.kt)("li",{parentName:"ul"},"Images: wilcard")),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/posts.png",alt:"posts"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Then we need to create an appwrite user to be able to login with ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/user.png",alt:"user"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"In order to list posts and categories, you need to give read and write permission by Appwrite."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"Post Collection Permissons")),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/permission.png",alt:"permission"})),(0,a.kt)("br",null),(0,a.kt)("p",null,'We indicate that the read and write permission is open to everyone by giving the "',"*",'" parameter.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://appwrite.io/docs/permissions"},"Refer to the Appwrite Permissions documentation for detailed information.\u2192")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#create-page"},"Check out how you can use permissions when creating posts with ",(0,a.kt)("strong",{parentName:"a"},"refine")," \u2192")),(0,a.kt)("h2",{id:"login-page"},"Login page\u200b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," default login screen allows you to login with username. Appwrite allows login with email, therefore we need to override the login page."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/login.tsx"',title:'"pages/login.tsx"'},'import React from "react";\nimport {\n    Row,\n    Col,\n    AntdLayout,\n    Card,\n    Typography,\n    Form,\n    Input,\n    Button,\n    Checkbox,\n} from "@pankod/refine";\nimport "./styles.css";\n\nimport { useLogin } from "@pankod/refine";\n\nconst { Text, Title } = Typography;\n\nexport interface ILoginForm {\n    username: string;\n    password: string;\n    remember: boolean;\n}\n\nexport const Login: React.FC = () => {\n    const [form] = Form.useForm<ILoginForm>();\n\n    const { mutate: login } = useLogin<ILoginForm>();\n\n    const CardTitle = (\n        <Title level={3} className="title">\n            Sign in your account\n        </Title>\n    );\n\n    return (\n        <AntdLayout className="layout">\n            <Row\n                justify="center"\n                align="middle"\n                style={{\n                    height: "100vh",\n                }}\n            >\n                <Col xs={22}>\n                    <div className="container">\n                        <div className="imageContainer">\n                            <img src="./refine.svg" alt="Refine Logo" />\n                        </div>\n                        <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>\n                            <Form<ILoginForm>\n                                layout="vertical"\n                                form={form}\n                                onFinish={(values) => {\n                                    login(values);\n                                }}\n                                requiredMark={false}\n                            >\n                                <Form.Item\n                                    name="email"\n                                    label="Email"\n                                    rules={[{ required: true, type: "email" }]}\n                                >\n                                    <Input size="large" placeholder="Email" />\n                                </Form.Item>\n                                <Form.Item\n                                    name="password"\n                                    label="Password"\n                                    rules={[{ required: true }]}\n                                    style={{ marginBottom: "12px" }}\n                                >\n                                    <Input\n                                        type="password"\n                                        placeholder="\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf"\n                                        size="large"\n                                    />\n                                </Form.Item>\n                                <div style={{ marginBottom: "12px" }}>\n                                    <Form.Item\n                                        name="remember"\n                                        valuePropName="checked"\n                                        noStyle\n                                    >\n                                        <Checkbox\n                                            style={{\n                                                fontSize: "12px",\n                                            }}\n                                        >\n                                            Remember me\n                                        </Checkbox>\n                                    </Form.Item>\n\n                                    <a\n                                        style={{\n                                            float: "right",\n                                            fontSize: "12px",\n                                        }}\n                                        href="#"\n                                    >\n                                        Forgot password?\n                                    </a>\n                                </div>\n                                <Button\n                                    type="primary"\n                                    size="large"\n                                    htmlType="submit"\n                                    block\n                                >\n                                    Sign in\n                                </Button>\n                            </Form>\n                            <div style={{ marginTop: 8 }}>\n                                <Text style={{ fontSize: 12 }}>\n                                    Don\u2019t have an account?{" "}\n                                    <a href="#" style={{ fontWeight: "bold" }}>\n                                        Sign up\n                                    </a>\n                                </Text>\n                            </div>\n                        </Card>\n                    </div>\n                </Col>\n            </Row>\n        </AntdLayout>\n    );\n};\n')))),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/login.png",alt:"login"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Now we can login with the user we created by Appwrite. We can then list, create and edit posts."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," resource name must be the same as Appwrite Collection ID. You can change your label with resource options."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(appwriteClient)}\n            authProvider={authProvider}\n            routerProvider={routerProvider}\n            LoginPage={Login}\n            resources={[\n                {\n                    //highlight-start\n                    name: "61bc3660648a6",\n                    //highlight-end\n                    options: {\n                        //highlight-start\n                        label: "Post",\n                        //highlight-end\n                    },\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n'))),(0,a.kt)("h2",{id:"list-page"},"List Page"),(0,a.kt)("p",null,"Now that we've created our collections, we can create and list documents. Let's list the posts and categories that we have created by Appwrite with ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    List,\n    Table,\n    TextField,\n    useTable,\n    IResourceComponentsProps,\n    Space,\n    EditButton,\n    ShowButton,\n    useMany,\n    getDefaultSortOrder,\n} from "@pankod/refine";\n\nimport { IPost, ICategory } from "interfaces";\n\nexport const PostsList: React.FC<IResourceComponentsProps> = () => {\n    const { tableProps, sorter } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n    });\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.categoryId) ?? [];\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "61bc4afa9ee2c",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column\n                    dataIndex="id"\n                    title="ID"\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("id", sorter)}\n                />\n                <Table.Column dataIndex="title" title="Title" sorter />\n                <Table.Column\n                    dataIndex="categoryId"\n                    title="Category"\n                    render={(value) => {\n                        if (isLoading) {\n                            return <TextField value="Loading..." />;\n                        }\n\n                        return (\n                            <TextField\n                                value={\n                                    data?.data.find((item) => item.id === value)\n                                        ?.title\n                                }\n                            />\n                        );\n                    }}\n                />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <Space>\n                            <EditButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <ShowButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                        </Space>\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n')))),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/list.png",alt:"list"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"create-page"},"Create Page"),(0,a.kt)("p",null,"We can now create posts and set categories from our ",(0,a.kt)("strong",{parentName:"p"},"refine")," UI."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport {\n    Create,\n    Form,\n    Input,\n    IResourceComponentsProps,\n    Select,\n    Upload,\n    useForm,\n    useSelect,\n    RcFile,\n} from "@pankod/refine";\n\nimport MDEditor from "@uiw/react-md-editor";\n\nimport { IPost, ICategory } from "interfaces";\nimport { appwriteClient, normalizeFile } from "utility";\n\nexport const PostsCreate: React.FC<IResourceComponentsProps> = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "61bc4afa9ee2c",\n        optionLabel: "title",\n        optionValue: "id",\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name="categoryId"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <MDEditor data-color-mode="light" />\n                </Form.Item>\n                <Form.Item label="Images">\n                    <Form.Item\n                        name="images"\n                        valuePropName="fileList"\n                        normalize={normalizeFile}\n                        noStyle\n                    >\n                        <Upload.Dragger\n                            name="file"\n                            listType="picture"\n                            multiple\n                            customRequest={async ({\n                                file,\n                                onError,\n                                onSuccess,\n                            }) => {\n                                try {\n                                    const rcFile = file as RcFile;\n\n                                    const { $id } =\n                                        await appwriteClient.storage.createFile(\n                                            rcFile,\n                                        );\n\n                                    const url =\n                                        appwriteClient.storage.getFileView($id);\n\n                                    onSuccess?.({ url }, new XMLHttpRequest());\n                                } catch (error) {\n                                    onError?.(new Error("Upload Error"));\n                                }\n                            }}\n                        >\n                            <p className="ant-upload-text">\n                                Drag &amp; drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n')))),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/create.gif",alt:"create"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"As we mentioned above, we need permissions to list or create documents in Appwrite. By default, Read Access and Write Access are public when creating documents from ",(0,a.kt)("strong",{parentName:"p"},"refine")," UI."),(0,a.kt)("p",{parentName:"admonition"},"If you want to restrict permissions and only allow specific users, you need to specify it in metaData."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { formProps, saveButtonProps } = useForm<IPost>({\n    metaData: {\n        writePermissions: ["User ID, Team ID, or Role"],\n        readPermissions: ["User ID, Team ID, or Role"],\n    },\n});\n'))),(0,a.kt)("h2",{id:"edit-page"},"Edit Page"),(0,a.kt)("p",null,"You can edit the posts and categories we have created update your data."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n    Edit,\n    Form,\n    Input,\n    IResourceComponentsProps,\n    RcFile,\n    Select,\n    Upload,\n    useForm,\n    useSelect,\n} from "@pankod/refine";\n\nimport MDEditor from "@uiw/react-md-editor";\n\nimport { IPost, ICategory } from "interfaces";\nimport { appwriteClient, normalizeFile } from "utility";\n\nexport const PostsEdit: React.FC<IResourceComponentsProps> = () => {\n    const { formProps, saveButtonProps, queryResult } = useForm<IPost>();\n\n    const postData = queryResult?.data?.data;\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "61bc4afa9ee2c",\n        defaultValue: postData?.categoryId,\n        optionLabel: "title",\n        optionValue: "id",\n    });\n\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name="categoryId"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <MDEditor data-color-mode="light" />\n                </Form.Item>\n                <Form.Item label="Images">\n                    <Form.Item\n                        name="images"\n                        valuePropName="fileList"\n                        normalize={normalizeFile}\n                        noStyle\n                    >\n                        <Upload.Dragger\n                            name="file"\n                            listType="picture"\n                            multiple\n                            customRequest={async ({\n                                file,\n                                onError,\n                                onSuccess,\n                            }) => {\n                                try {\n                                    const rcFile = file as RcFile;\n\n                                    const { $id } =\n                                        await appwriteClient.storage.createFile(\n                                            rcFile,\n                                        );\n\n                                    const url =\n                                        appwriteClient.storage.getFileView($id);\n\n                                    onSuccess?.({ url }, new XMLHttpRequest());\n                                } catch (error) {\n                                    onError?.(new Error("Upload Error"));\n                                }\n                            }}\n                        >\n                            <p className="ant-upload-text">\n                                Drag &amp; drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n')))),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/edit.png",alt:"edit"})),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("p",null,"Username: ",(0,a.kt)("inlineCode",{parentName:"p"},"demo@refine.dev")),(0,a.kt)("p",null,"Password: ",(0,a.kt)("inlineCode",{parentName:"p"},"demodemo")),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/refine-appwrite-example-kuzqr?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-appwrite-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0}}]);