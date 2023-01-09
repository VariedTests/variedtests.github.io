"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67553],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,m=u["".concat(s,".").concat(g)]||u[g]||h[g]||a;return r?t.createElement(m,i(i({ref:n},d),{},{components:r})):t.createElement(m,i({ref:n},d))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},72570:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const a={id:"mui-auth-page",title:"<AuthPage>",sidebar_label:"<AuthPage>",description:"<AuthPage> component from refine is a authentication page that can be used to login, register, forgot password and update password.",swizzle:!0},i=void 0,p={unversionedId:"api-reference/mui/components/mui-auth-page",id:"api-reference/mui/components/mui-auth-page",title:"<AuthPage>",description:"<AuthPage> component from refine is a authentication page that can be used to login, register, forgot password and update password.",source:"@site/docs/api-reference/mui/components/auth-page.md",sourceDirName:"api-reference/mui/components",slug:"/api-reference/mui/components/mui-auth-page",permalink:"/docs/api-reference/mui/components/mui-auth-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/auth-page.md",tags:[],version:"current",lastUpdatedBy:"Daniel Monettelli",lastUpdatedAt:1673291592,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"mui-auth-page",title:"<AuthPage>",sidebar_label:"<AuthPage>",description:"<AuthPage> component from refine is a authentication page that can be used to login, register, forgot password and update password.",swizzle:!0},sidebar:"someSidebar",previous:{title:"useDataGrid",permalink:"/docs/api-reference/mui/hooks/useDataGrid"},next:{title:"Inferencer",permalink:"/docs/api-reference/mui/components/inferencer"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:2},{value:"Login",id:"login",level:3},{value:"Register",id:"register",level:3},{value:"ForgotPassword",id:"forgotpassword",level:3},{value:"UpdatePassword",id:"updatepassword",level:3},{value:"Props",id:"props",level:2},{value:"<code>providers</code>",id:"providers",level:3},{value:"<code>rememberMe</code>",id:"rememberme",level:3},{value:"<code>loginLink</code>",id:"loginlink",level:3},{value:"<code>registerLink</code>",id:"registerlink",level:3},{value:"<code>forgotPasswordLink</code>",id:"forgotpasswordlink",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>formProps</code>",id:"formprops",level:3},{value:"<code>renderContent</code>",id:"rendercontent",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Interface",id:"interface",level:3}],d=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const h={toc:l};function g(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component from ",(0,o.kt)("strong",{parentName:"p"},"refine")," for ",(0,o.kt)("strong",{parentName:"p"},"Material UI")," contains authentication pages that can be used to login, register, forgot password and update password."),(0,o.kt)("p",null,"Before using ",(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component you need to add ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},"authProvider")," that will be used to handle authentication."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'\nconst { default: dataProvider } = RefineSimpleRest;\nconst { useNavigation: useNavigationShared, useLogout: useLogoutShared } = RefineCore;\nconst {\n    Typography: { Title: SharedTitle },\n    Button,\n} = RefineMui;\n\nwindow.__refineAuthStatus = false;\n\nconst authProvider = {\n    login: () => { \n        window.__refineAuthStatus = true; \n        return Promise.resolve(); \n    },\n    register: () => Promise.resolve(),\n    forgotPassword: () => Promise.resolve(),\n    updatePassword: () => Promise.resolve(),\n    logout: () => { window.__refineAuthStatus = false },\n    checkAuth: () => window.__refineAuthStatus ? Promise.resolve() : Promise.reject(),\n    checkError: () => Promise.resolve(),\n    getPermissions: () => Promise.resolve(),\n    getUserIdentity: () => Promise.resolve(),\n};\n\nsetRefineProps({ Sider: () => null, dataProvider: dataProvider(\'api\') });\n\nconst DashboardPage = () => {\n    const { mutate } = useLogoutShared();\n\n    return (\n        <div\n            style={{\n                width: "100%",\n                maxWidth: "400px",\n                margin: "0 auto",\n                textAlign: "center",\n            }}\n        >\n            <SharedTitle level={2}>Home Page</SharedTitle>\n            <br />\n            <button\n                onClick={() => {\n                    mutate();\n                }}\n            >\n                Logout\n            </button>\n        </div>\n    );\n};\n\nconst GoogleIcon = (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="24"\n        height="24"\n        viewBox="0 0 24 24"\n    >\n        <path\n            fill="#4285F4"\n            d="m23.7 12.3-.1-2.3H12.3v4.5h6.4a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.2 3.5-8.8Z"\n        />\n        <path\n            fill="#34A853"\n            d="M12.3 24c3.2 0 6-1 7.9-3l-3.9-3a7.2 7.2 0 0 1-10.8-3.7h-4v3c2 4 6 6.7 10.8 6.7Z"\n        />\n        <path\n            fill="#FBBC05"\n            d="M5.5 14.3a7 7 0 0 1 0-4.6v-3h-4a11.9 11.9 0 0 0 0 10.7l4-3.1Z"\n        />\n        <path\n            fill="#EA4335"\n            d="M12.3 4.8c1.7 0 3.3.6 4.6 1.8L20.3 3A12 12 0 0 0 1.6 6.6l4 3.1c.9-2.8 3.5-5 6.7-5Z"\n        />\n    </svg>\n);\n\nconst GithubIcon = (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="24"\n        height="24"\n        viewBox="0 0 24 24"\n    >\n        <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0z" />\n    </svg>\n);\n\nconst Wrapper = ({children}) => {\n    return (\n        <RefineMui.ThemeProvider theme={RefineMui.LightTheme}>\n            <RefineMui.CssBaseline />\n            <RefineMui.GlobalStyles\n                styles={{ html: { WebkitFontSmoothing: "auto" } }}\n            />\n            <RefineMui.RefineSnackbarProvider>\n                {children}\n            </RefineMui.RefineSnackbarProvider>\n        </RefineMui.ThemeProvider>\n    );\n}\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component can be used like below \ud83d\udc47\ud83c\udffb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=460px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"460px",hideCode:!0},'setInitialRoutes(["/login"]);\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    // highlight-start\n                    {\n                        path: "/register",\n                        element: <AuthPage type="register" />,\n                    },\n                    {\n                        path: "/forgot-password",\n                        element: <AuthPage type="forgotPassword" />,\n                    },\n                    // highlight-end\n                ],\n            }}\n            authProvider={authProvider}\n            // highlight-next-line\n            LoginPage={AuthPage}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h2",{id:"types"},"Types"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component has the following types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#login"},(0,o.kt)("inlineCode",{parentName:"a"},"login"))," - a type of login page and default type."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#register"},(0,o.kt)("inlineCode",{parentName:"a"},"register"))," - a type of registration page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#forgotpassword"},(0,o.kt)("inlineCode",{parentName:"a"},"forgotPassword"))," - a type of forgot password page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#updatepassword"},(0,o.kt)("inlineCode",{parentName:"a"},"updatePassword"))," - type of update password page.")),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"login")," will be used as the default type of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component. The login page will be used to log in to the system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/login previewHeight=460px",live:!0,url:"http://localhost:3000/login",previewHeight:"460px"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            authProvider={authProvider}\n            // highlight-next-line\n            LoginPage={AuthPage}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"register"},"Register"),(0,o.kt)("p",null,"The register page will be used to register new users. You can use the following props for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component when the type is ",(0,o.kt)("inlineCode",{parentName:"p"},'"register"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/register previewHeight=460px",live:!0,url:"http://localhost:3000/register",previewHeight:"460px"},'setInitialRoutes(["/register"]);\n\n// visible-block-start\nimport { Refine, useNavigation } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    // highlight-start\n                    {\n                        path: "/register",\n                        element: <AuthPage type="register" />,\n                    },\n                    // highlight-end\n                ],\n            }}\n            LoginPage={AuthPage}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"forgotpassword"},"ForgotPassword"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"forgotPassword")," type is a page that allows users to reset their passwords. You can use this page to reset your password."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/forgot-password",live:!0,url:"http://localhost:3000/forgot-password"},'setInitialRoutes(["/forgot-password"]);\n\n// visible-block-start\nimport { Refine, useNavigation } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    // highlight-start\n                    {\n                        path: "/forgot-password",\n                        element: <AuthPage type="forgotPassword" />,\n                    },\n                    // highlight-end\n                ],\n            }}\n            LoginPage={AuthPage}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"updatepassword"},"UpdatePassword"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"updatePassword")," type is the page used to update the password of the user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/update-password",live:!0,url:"http://localhost:3000/update-password"},'setInitialRoutes(["/update-password"]);\n\n// visible-block-start\nimport { Refine, useNavigation } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    // highlight-start\n                    {\n                        path: "/update-password",\n                        element: <AuthPage type="updatePassword" />,\n                    },\n                    // highlight-end\n                ],\n            }}\n            LoginPage={AuthPage}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"providers"},(0,o.kt)("inlineCode",{parentName:"h3"},"providers")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"providers")," property is only available for types ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"register"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"providers")," property defines the list of providers used to handle login authentication. ",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," accepts an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," type. Check out the ",(0,o.kt)("a",{parentName:"p",href:"#interface"},"Interface")," section for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=560px url=http://localhost:3000/login",live:!0,previewHeight:"560px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, useRouterContext, useNavigation } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            routerProvider={routerProvider}\n            // highlight-start\n            LoginPage={() => (\n                <AuthPage\n                    providers={[\n                        {\n                            name: "google",\n                            icon: GoogleIcon,\n                            label: "Sign in with Google",\n                        },\n                        {\n                            name: "github",\n                            icon: GithubIcon,\n                            label: "Sign in with GitHub",\n                        },\n                    ]}\n                />\n            )}\n            // highlight-end\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"rememberme"},(0,o.kt)("inlineCode",{parentName:"h3"},"rememberMe")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"rememberMe")," property is only available for type ",(0,o.kt)("inlineCode",{parentName:"p"},"login"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rememberMe")," property defines to render your own remember me component or you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," to don't render it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login",live:!0,previewHeight:"500px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, useNavigation } from "@pankod/refine-core";\nimport { AuthPage, Layout, Form, FormControlLabel, Checkbox } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport { useFormContext } from "@pankod/refine-react-hook-form";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst RememberMe = () => {\n    const { register } = useFormContext();\n\n    return (\n        <FormControlLabel\n            sx={{\n                span: {\n                    fontSize: "12px",\n                    color: "text.secondary",\n                },\n            }}\n            color="secondary"\n            control={\n                <Checkbox\n                    size="small"\n                    id="rememberMe"\n                    {...register("rememberMe")}\n                />\n            }\n            label="Remember me"\n        />\n    );\n};\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            authProvider={authProvider}\n            // highlight-start\n            LoginPage={() => (\n                <AuthPage\n                    rememberMe={<RememberMe />}\n                />\n            )}\n            // highlight-end\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"loginlink"},(0,o.kt)("inlineCode",{parentName:"h3"},"loginLink")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"loginLink")," property is only available for types ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"forgotPassword"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"loginLink")," property defines the link to the login page and also you can give a node to render. Default value is ",(0,o.kt)("inlineCode",{parentName:"p"},'"/login"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/register",live:!0,previewHeight:"500px",url:"http://localhost:3000/register"},'setInitialRoutes(["/register"]);\n\n// visible-block-start\nimport { Refine, useRouterContext } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst Auth = (props) => {\n    const { Link } = useRouterContext();\n\n    return (\n        <AuthPage\n            {...props}\n            // highlight-start\n            loginLink={\n                <span\n                    style={{\n                        border: "1px dashed cornflowerblue",\n                        padding: 3,\n                    }}\n                >\n                    <Link to="/login">Login</Link>\n                </span>\n            }\n            // highlight-end\n        />\n    );\n};\n\nconst App = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            // highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    {\n                        path: "/register",\n                        element: <Auth type="register" />,\n                    },\n                ],\n            }}\n            // highlight-end\n            LoginPage={Auth}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"registerlink"},(0,o.kt)("inlineCode",{parentName:"h3"},"registerLink")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"registerLink")," property is only available for type ",(0,o.kt)("inlineCode",{parentName:"p"},"login"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"registerLink")," property defines the link to the registration page and also you can give a node to render. Default value is ",(0,o.kt)("inlineCode",{parentName:"p"},'"/register"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login",live:!0,previewHeight:"500px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, useRouterContext } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst Auth = (props) => {\n    const { Link } = useRouterContext();\n\n    return (\n        <AuthPage\n            {...props}\n            // highlight-start\n            registerLink={\n                <div\n                    style={{\n                        border: "1px dashed cornflowerblue",\n                        marginTop: 5,\n                        padding: 5,\n                    }}\n                >\n                    <Link to="/register">Register</Link>\n                </div>\n            }\n            // highlight-end\n        />\n    );\n};\n\nconst App = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    { path: "/register", element: <Auth type="register" /> },\n                ]\n            }}\n            // highlight-next-line\n            LoginPage={Auth}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"forgotpasswordlink"},(0,o.kt)("inlineCode",{parentName:"h3"},"forgotPasswordLink")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"forgotPasswordLink")," property is only available for type ",(0,o.kt)("inlineCode",{parentName:"p"},"login"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"forgotPasswordLink")," property defines the link to the forgot password page and also you can give a node to render. Default value is ",(0,o.kt)("inlineCode",{parentName:"p"},'"/forgot-password"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login",live:!0,previewHeight:"500px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, useRouterContext } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst Auth = (props) => {\n    const { Link } = useRouterContext();\n\n    return (\n        <AuthPage\n            {...props}\n            // highlight-start\n            forgotPasswordLink={\n                <div\n                    style={{\n                        border: "1px dashed cornflowerblue",\n                        marginTop: 5,\n                        padding: 5,\n                    }}\n                >\n                    <Link to="/register">Forgot Password</Link>\n                </div>\n            }\n            // highlight-end\n        />\n    );\n};\n\nconst App = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    { path: "/forgot-password", element: <Auth type="forgotPassword" /> },\n                ]\n            }}\n            // highlight-next-line\n            LoginPage={Auth}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"wrapperprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wrapperProps")," uses for passing props to the wrapper component. In the example below you can see that the background color is changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapperProps")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login",live:!0,previewHeight:"500px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, useNavigation } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            routerProvider={routerProvider}\n            LoginPage={() => (\n                <AuthPage\n                    // highlight-start\n                    wrapperProps={{\n                        style: {\n                            background: "#331049",\n                        },\n                    }}\n                    // highlight-end\n                />\n            )}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"contentprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"contentProps")," uses for passing props to the content component which is the card component. In the example below you can see that the title, header and content styles are changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"contentProps"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login",live:!0,previewHeight:"500px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, useNavigation } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            authProvider={authProvider}\n            LoginPage={() => (\n                <AuthPage\n                    // highlight-start\n                    contentProps={{\n                        title: "Login",\n                        headStyle: {\n                            background: "cornflowerblue",\n                            color: "white",\n                        },\n                        bodyStyle: {\n                            background: "#673ab742",\n                        },\n                    }}\n                    // highlight-end\n                />\n            )}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"formprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"formProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"formProps")," uses for passing props to the form component. In the example below you can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialValues")," are changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"formProps")," and also the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSubmit")," function is changed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login",live:!0,previewHeight:"500px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, useNavigation } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            authProvider={authProvider}\n            LoginPage={() => (\n                <AuthPage\n                    // highlight-start\n                    formProps={{\n                        onSubmit: (formValues) => {\n                            alert(JSON.stringify(formValues, null, 2));\n                        },\n                        defaultValues: {\n                            email: "test@mail.com",\n                        },\n                    }}\n                    // highlight-end\n                />\n            )}\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h3",{id:"rendercontent"},(0,o.kt)("inlineCode",{parentName:"h3"},"renderContent")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"renderContent")," uses to render the form content. You can use this property to render your own content or ",(0,o.kt)("inlineCode",{parentName:"p"},"renderContent")," gives you default content you can use to add some extra elements to the content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login",live:!0,previewHeight:"500px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, useRouterContext } from "@pankod/refine-core";\nimport { AuthPage, Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            authProvider={authProvider}\n            // highlight-start\n            LoginPage={() => (\n                <AuthPage\n                    contentProps={{\n                        style: {\n                            width: "400px",\n                        },\n                    }}\n                    renderContent={(content: React.ReactNode) => {\n                        return (\n                            <div\n                                style={{\n                                    display: "flex",\n                                    flexDirection: "column",\n                                    justifyContent: "center",\n                                    alignItems: "center",\n                                }}\n                            >\n                                <h1 style={{ color: "white" }}>Extra Header</h1>\n                                {content}\n                                <h1 style={{ color: "white" }}>Extra Footer</h1>\n                            </div>\n                        );\n                    }}\n                />\n            )}\n            // highlight-end\n            DashboardPage={DashboardPage}\n            Layout={Layout}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\nrender(<Wrapper><App /></Wrapper>);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)(d,{module:"@pankod/refine-mui/AuthPage","wrapperProps-type":"[`CardProps`](https://mui.com/material-ui/api/card/#props)","contentProps-type":"[`CardContentProps`](https://mui.com/material-ui/api/card-content/#props)","headerProps-type":"[`CardHeaderProps`](https://mui.com/material-ui/api/card-header/#props)","rememberMe-default":"[`<Checkbox>Remember me</Checkbox>`](/docs/api-reference/mui/components/mui-auth-page/#rememberme)",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface IProvider {\n    name: string;\n    icon?: React.ReactNode;\n    label?: string;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { UseFormProps } from "@pankod/refine-react-hook-form";\n\ninterface FormPropsType extends UseFormProps {\n    onSubmit?: (values: any) => void;\n}\n')))}g.isMDXComponent=!0}}]);