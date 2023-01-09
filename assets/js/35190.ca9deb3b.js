"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35190],{31986:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),l=n(67294),r=n(86010),s=n(35281),i=n(53438),o=n(48596),c=n(39960),d=n(44996),m=n(95999);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function v(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l.createElement("span",{className:r,itemProp:"name"},t):n?l.createElement(c.Z,{className:r,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function h(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return l.createElement("li",(0,a.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(s+1)}))}function b(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(c.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",p.breadcrumbsItemLink),href:e},l.createElement(u,{className:p.breadcrumbHomeIcon})))}function f(){const e=(0,i.s1)(),t=(0,o.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(s.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(b,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(h,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(v,{href:t.href,isLast:a},t.label))})))):null}},91419:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),l=n(86010),r=n(35281),s=n(65130),i=n(92503),o=n(45042);function c(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,s.k)();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,l.Z)(r.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(i.Z,{as:"h1"},n)),a.createElement(o.Z,null,t))}},46607:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(67294),l=n(86010),r=n(35281),s=n(65130),i=n(95999);function o(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function c(e){let{lastUpdatedBy:t}=e;return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function d(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:r.k.common.lastUpdated},a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(o,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(c,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var m=n(87462);const u="iconEdit_Z9Sw";function p(e){let{className:t,...n}=e;return a.createElement("svg",(0,m.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(u,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function v(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(p,null),a.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var h=n(9567);const b="tags_jXut",f="tag_QGVx";function E(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(b,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:f},a.createElement(h.Z,{label:t,permalink:n}))}))))}const g="lastUpdated_vwxv";function Z(e){return a.createElement("div",{className:(0,l.Z)(r.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(E,e)))}function L(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return a.createElement("div",{className:(0,l.Z)(r.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(v,{editUrl:t})),a.createElement("div",{className:(0,l.Z)("col",g)},(n||s)&&a.createElement(d,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function N(){const{metadata:e}=(0,s.k)(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:o,tags:c}=e,d=c.length>0,m=!!(t||n||o);return d||m?a.createElement("footer",{className:(0,l.Z)(r.k.docs.docFooter,"docusaurus-mt-lg")},d&&a.createElement(Z,{tags:c}),m&&a.createElement(L,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}},92894:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),l=n(65130),r=n(4966);function s(){const{metadata:e}=(0,l.k)();return a.createElement(r.Z,{previous:e.previous,next:e.next})}},55938:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(35281),r=n(65130),s=n(39407);function i(){const{toc:e,frontMatter:t}=(0,r.k)();return a.createElement(s.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:l.k.docs.docTocDesktop})}},6781:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),l=n(86010),r=n(35281),s=n(65130),i=n(86043),o=n(93743),c=n(87462),d=n(95999);const m="tocCollapsibleButton_TO0P",u="tocCollapsibleButtonExpanded_MG3E";function p(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,c.Z)({type:"button"},n,{className:(0,l.Z)("clean-btn",m,!t&&u,n.className)}),a.createElement(d.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const v="tocCollapsible_ETCw",h="tocCollapsibleContent_vkbj",b="tocCollapsibleExpanded_sAul";function f(e){let{toc:t,className:n,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:c,toggleCollapsed:d}=(0,i.u)({initialState:!0});return a.createElement("div",{className:(0,l.Z)(v,!c&&b,n)},a.createElement(p,{collapsed:c,onClick:d}),a.createElement(i.z,{lazy:!0,className:h,collapsed:c},a.createElement(o.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}const E="tocMobile_ITEo";function g(){const{toc:e,frontMatter:t}=(0,s.k)();return a.createElement(f,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,l.Z)(r.k.docs.docTocMobile,E)})}},86176:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(67294),l=n(10833),r=n(65130);function s(){const{metadata:e,frontMatter:t,assets:n}=(0,r.k)();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var i=n(99200);function o(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(r.b,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(s,null),a.createElement(i.Z,null,a.createElement(n,null))))}},4966:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),l=n(67294),r=n(95999),s=n(86010),i=n(39960);function o(e){const{permalink:t,title:n,subLabel:a,isNext:r}=e;return l.createElement(i.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l.createElement("div",{className:"pagination-nav__sublabel"},a),l.createElement("div",{className:"pagination-nav__label"},n))}function c(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(o,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010),r=n(95999),s=n(35281),i=n(74477);function o(e){let{className:t}=e;const n=(0,i.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},23120:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(67294),l=n(86010),r=n(52263),s=n(39960),i=n(95999),o=n(80143),c=n(35281),d=n(60373),m=n(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function v(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(s.Z,{to:n,onClick:l},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,r.Z)(),{pluginId:i}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(i),{latestDocSuggestion:u,latestVersionSuggestion:h}=(0,o.Jo)(i),b=u??(f=h).docs.find((e=>e.id===f.mainDocId));var f;return a.createElement("div",{className:(0,l.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(p,{siteTitle:s,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(v,{versionLabel:h.label,to:b.path,onClick:()=>m(h.name)})))}function b(e){let{className:t}=e;const n=(0,m.E)();return n.banner?a.createElement(h,{className:t,versionMetadata:n}):null}},92503:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),l=n(67294),r=n(86010),s=n(95999),i=n(86668);const o="anchorWithStickyNavbar_LWe7",c="anchorWithHideOnScrollNavbar_WYt5";function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,i.L)();return"h1"!==t&&n?l.createElement(t,(0,a.Z)({},d,{className:(0,r.Z)("anchor",m?c:o),id:n}),d.children,l.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,a.Z)({},d,{id:void 0}))}},36166:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),l=n(67294),r=n(35742);var s=n(19851);var i=n(62266);var o=n(86010),c=n(72389),d=n(86043);const m="details_lb9f",u="isBrowser_bmU9",p="collapsibleContent_i85q";function v(e){return!!e&&("SUMMARY"===e.tagName||v(e.parentElement))}function h(e,t){return!!e&&(e===t||h(e.parentElement,t))}function b(e){let{summary:t,children:n,...r}=e;const s=(0,c.Z)(),i=(0,l.useRef)(null),{collapsed:b,setCollapsed:f}=(0,d.u)({initialState:!r.open}),[E,g]=(0,l.useState)(r.open);return l.createElement("details",(0,a.Z)({},r,{ref:i,open:E,"data-collapsed":b,className:(0,o.Z)(m,s&&u,r.className),onMouseDown:e=>{v(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;v(t)&&h(t,i.current)&&(e.preventDefault(),b?(f(!1),g(!0)):f(!0))}}),t??l.createElement("summary",null,"Details"),l.createElement(d.z,{lazy:!1,collapsed:b,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),g(!e)}},l.createElement("div",{className:p},n)))}const f="details_b_Ee";function E(e){let{...t}=e;return l.createElement(b,(0,a.Z)({},t,{className:(0,o.Z)("alert alert--info",f,t.className)}))}var g=n(92503);function Z(e){return l.createElement(g.Z,e)}const L="containsTaskList_mC6p";const N="img_ev3q";var k=n(47083);const _={head:function(e){const t=l.Children.map(e.children,(e=>l.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return l.createElement(e.props.originalType,a)}return e}(e):e));return l.createElement(r.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&t.includes(e.props?.mdxType)))?l.createElement("code",e):l.createElement(s.Z,e)},a:i.Z,pre:function(e){return l.createElement(s.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=l.Children.toArray(e.children),n=t.find((e=>l.isValidElement(e)&&"summary"===e.props?.mdxType)),r=l.createElement(l.Fragment,null,t.filter((e=>e!==n)));return l.createElement(E,(0,a.Z)({},e,{summary:n}),r)},ul:function(e){return l.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,o.Z)(t,t?.includes("contains-task-list")&&L))}));var t},img:function(e){return l.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,o.Z)(t,N))}));var t},h1:e=>l.createElement(Z,(0,a.Z)({as:"h1"},e)),h2:e=>l.createElement(Z,(0,a.Z)({as:"h2"},e)),h3:e=>l.createElement(Z,(0,a.Z)({as:"h3"},e)),h4:e=>l.createElement(Z,(0,a.Z)({as:"h4"},e)),h5:e=>l.createElement(Z,(0,a.Z)({as:"h5"},e)),h6:e=>l.createElement(Z,(0,a.Z)({as:"h6"},e)),admonition:k.Z,mermaid:()=>null}},45042:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),l=n(3905),r=n(71796);function s(e){let{children:t}=e;return a.createElement(l.Zo,{components:r.Z},t)}},39407:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),l=n(67294),r=n(86010),s=n(93743);const i="tableOfContents_bqdL";function o(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(s.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),l=n(67294),r=n(86668);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),o=c(i,{anchorTopOffset:n.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=l.memo(u);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const h=(0,r.L)(),b=d??h.tableOfContents.minHeadingLevel,f=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:f});return m((0,l.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:f}}),[o,c,b,f])),l.createElement(p,(0,a.Z)({toc:E,className:n,linkClassName:o},v))}},65130:(e,t,n)=>{n.d(t,{b:()=>s,k:()=>i});var a=n(67294),l=n(902);const r=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocProvider");return e}}}]);