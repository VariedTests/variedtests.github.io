"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30626],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},h=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),m=l(i),d=a,u=m["".concat(s,".").concat(d)]||m[d]||g[d]||o;return i?n.createElement(u,r(r({ref:t},h),{},{components:i})):n.createElement(u,r({ref:t},h))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=i[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},10055:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const o={title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",slug:"git-switch-and-git-checkout",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/social.png",hide_table_of_contents:!1},r=void 0,c={permalink:"/blog/git-switch-and-git-checkout",source:"@site/blog/2022-12-20-git-switch.md",title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",date:"2022-12-20T00:00:00.000Z",formattedDate:"December 20, 2022",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.41,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",slug:"git-switch-and-git-checkout",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/social.png",hide_table_of_contents:!1},prevItem:{title:"rem vs em - Everything you need to know",permalink:"/blog/rem-vs-em"},nextItem:{title:"How to use Material UI Checkbox",permalink:"/blog/material-ui-checkbox-component"},relatedPosts:[{title:"How to Delete Local and Remote Git Branches",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"November 27, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.75,date:"2022-11-27T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.155,date:"2022-11-13T00:00:00.000Z"},{title:"How to Install and Use NVM?",permalink:"/blog/install-nvm-mac-and-windows",formattedDate:"November 9, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:7.48,date:"2022-11-09T00:00:00.000Z"}],authorPosts:[{title:"Why you should prefer using pnpm over npm and yarn?",permalink:"/blog/pnpm-vs-npm-and-yarn",formattedDate:"October 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.86,date:"2022-10-13T00:00:00.000Z"},{title:"esbuild - Next-generation JavaScript bundler",permalink:"/blog/what-is-esbuild",formattedDate:"November 3, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.075,date:"2022-11-03T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.155,date:"2022-11-13T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"Using git checkout to switch branches",id:"using-git-checkout-to-switch-branches",level:2},{value:"Switch to an existing branch",id:"switch-to-an-existing-branch",level:3},{value:"Switch to a new branch",id:"switch-to-a-new-branch",level:3},{value:"Switching to a remote branch",id:"switching-to-a-remote-branch",level:3},{value:"Using git switch vs git checkout",id:"using-git-switch-vs-git-checkout",level:2},{value:"Why git switch was needed?",id:"why-git-switch-was-needed",level:3},{value:"Difference between git checkout and git reset",id:"difference-between-git-checkout-and-git-reset",level:2},{value:"Difference between git checkout and git restore",id:"difference-between-git-checkout-and-git-restore",level:2},{value:"Difference between git checkout and git Clone",id:"difference-between-git-checkout-and-git-clone",level:2}],h=(m="PromotionBanner",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const g={toc:l};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"When working on a project, you usually work on more than one branch at a time. You also switch branches frequently based on priorities. Efficient branch switching is important to safely switch from one branch and commit your changes to the desired branch. The most famous command for switching branches has always been ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," however the newer versions of Git divided its features into specific commands. Today, we will go through different use cases and examples for using ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch"),". We will also go through some of the similar commands of Git. After reading this article, you will have strong knowledge of how to switch branches in Git and what are its companion commands. "),(0,a.kt)("p",null,"Note that the command ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," is a multi-feature command which performs multiple functions like:"),(0,a.kt)("p",null,"\u2022   If it is a local branch or an explicit remote branch, it will switch to it\n\u2022   If it is a tracked path, reset it\n\u2022   If it is a remote branch, it will create a tracking branch and will switch to it\nLet's go through some examples of switching branches through ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout"),", and then we will touch upon the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch"),". "),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#using-git-checkout-to-switch-branches"},"Using git checkout to switch branches"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#switch-to-an-existing-branch"},"Switch to an existing branch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#switch-to-a-new-branch"},"Switch to a new branch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#switching-to-a-remote-branch"},"Switching to a remote branch")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#using-git-switch-vs-git-checkout"},"Using git switch vs git checkout"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#why-git-switch-was-needed"},"Why git switch was needed?")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#difference-between-git-checkout-and-git-reset"},"Difference between git checkout and git reset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#difference-between-git-checkout-and-git-restore"},"Difference between git checkout and git restore")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#difference-between-git-checkout-and-git-clone"},"Difference between git checkout and git Clone"))),(0,a.kt)("h2",{id:"using-git-checkout-to-switch-branches"},"Using git checkout to switch branches"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," command allows you to navigate between different branches created through the command ",(0,a.kt)("inlineCode",{parentName:"p"},"git branch"),". When you checkout a branch, it updates all the files in your working directory to match the version stored in that branch. It also informs Git to preserve all the new commits on that branch. "),(0,a.kt)("p",null,"Let's try different versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," command. "),(0,a.kt)("h3",{id:"switch-to-an-existing-branch"},"Switch to an existing branch"),(0,a.kt)("p",null,"First, get the list of the branches through ",(0,a.kt)("inlineCode",{parentName:"p"},"git branch")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image1.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("p",null,'The "*" shows your currently selected branch, which is "test_branch". Now let\'s switch to BranchB. '),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image2.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"To confirm the successful branch switch, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"git branch")," and you will see that your current branch is now BranchB"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image3.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"switch-to-a-new-branch"},"Switch to a new branch"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout"),' command also comes with a "-b" argument which creates a new branch and automatically switches to it. Let\'s try it. '),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image4.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The above example shows that the new branch created is the currently selected branch as well.\nWhen switching branch using ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," you might see an error as below. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image5.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The above error appears when you have changed a file, and the branch that you are switching to also has changes for the same file too (from the latest merge point). Git will not allow switching branch until you do one of the following:"),(0,a.kt)("p",null,"\u2022   Use stash to locally stash your changes temporarily without commit\n\u2022   Force checkout, which will discard your local changes\n\u2022   Commit your changes, and then update this commit with extra changes (you can modify commits in Git until they are pushed)"),(0,a.kt)("h3",{id:"switching-to-a-remote-branch"},"Switching to a remote branch"),(0,a.kt)("p",null,"To checkout a remote branch, you will need to fetch the contents of the branch using ",(0,a.kt)("inlineCode",{parentName:"p"},"git fetch \u2013all")," first. Then use the same command ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout RemoteBranchName")," to switch to remote branch. You might have noticed that it is the same command used to switch to a local branch. "),(0,a.kt)("p",null,"If you want to switch to a remote branch that does not exist as local branch in your local working directory, you can simply execute ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch remoteBranch"),". When Git is unable to find this branch in your local repository, it will assume that you want to checkout the respective remote branch with the same name. It will then create a local branch with the same name. It will also set up a tracking relationship between your remote and local branch so that ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"git push")," will work as intended. "),(0,a.kt)("h2",{id:"using-git-switch-vs-git-checkout"},"Using git switch vs git checkout"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch")," command replaced ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," in 2020, although ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," is still a supported command. The ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout"),' command performs two functionalities; "switch branch" and "restore working tree files". To separate these two functionalities, Git introduced the ',(0,a.kt)("inlineCode",{parentName:"p"},"git switch"),' command, which replaces the "switch branch" feature of "git checkout". '),(0,a.kt)("h3",{id:"why-git-switch-was-needed"},"Why git switch was needed?"),(0,a.kt)("p",null,'Let\'s assume you have a file named "test.txt" and at the same time, you have a branch named "test". If you are on master branch and you want to checkout to branch "test", you would use the command "git checkout test" but this would checkout the file "test", this is where ',(0,a.kt)("inlineCode",{parentName:"p"},"git switch")," comes in. "),(0,a.kt)("p",null,"\u2022   ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch test"),' will switch to branch "test" even if you have a file "test"\n\u2022   ',(0,a.kt)("inlineCode",{parentName:"p"},"git restore"),' will discard uncommitted local changes in the file "test" even if you have a branch "test".'),(0,a.kt)("p",null,"Let's try this command. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image6.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The above command works just the same way ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," switched branches.\nSwitching to a branch that does not exist will throw an error:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image7.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"To create a new branch and switch to it in one go, try the following example:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image8.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"To verify, just run the ",(0,a.kt)("inlineCode",{parentName:"p"},"git branch")," command to see if your current branch has been successfully switched to the newly created branch. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image9.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Another interesting argument of this command is ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch -"),". If you have to frequently switch between two branches and typing the branch name every time is cumbersome, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch -")," version, which switches to the previously checked out branch. Let's try. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image10.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"difference-between-git-checkout-and-git-reset"},"Difference between git checkout and git reset"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset")," moves the current branch reference, whereas ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," just moves the head instead of the current branch reference.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"reset")," resets the index without changing the working tree. The below example will reset the index to match HEAD, without touching the working tree:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image11.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Note that you will use reset to undo the staging of a modified file.\n",(0,a.kt)("inlineCode",{parentName:"p"},"checkout")," is mostly used with a branch, tag, or commit. It will reset HEAD and index to a specified commit, as well as perform the checkout of the index into the working tree at the same time. It is mostly used to discard the changes to your unstaged file(s). "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image12.png",alt:"git switch"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"If your HEAD is currently set to the master branch, running ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset 8e3f6r5"),' will point the master to "9e5e6a4". ',(0,a.kt)("inlineCode",{parentName:"p"},"Checkout")," on the other hand, changes the head itself. "),(0,a.kt)("hr",null),(0,a.kt)(h,{title:"Building a side project?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/diagram.png",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"difference-between-git-checkout-and-git-restore"},"Difference between git checkout and git restore"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git restore")," was introduced when the functionality of ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," was broken into two separate commands ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"git restore"),". Apart from switching branches, ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," can also restore files to a specific commit state. This latter functionality has been extracted into ",(0,a.kt)("inlineCode",{parentName:"p"},"git restore"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git restore")," restores the files in the working tree from index or any other commit you specify. You can also use it to restore files in index from some other commit. Note that it does not update your branch. You would use ",(0,a.kt)("inlineCode",{parentName:"p"},"git restore")," to revert non-committed changes. These changes can be in the form of the update in your working copy or the content in your index (i.e. staging area). "),(0,a.kt)("p",null,'The below command will restore "test.txt" in the index so that it matches the version in HEAD. Basically, you are telling Git to copy from HEAD to staging area / index, which is how Git reset works.\n',(0,a.kt)("inlineCode",{parentName:"p"},"git restore --staged test.txt")),(0,a.kt)("p",null,"If you want to restore both index and the working tree, then you would use the following version:\n",(0,a.kt)("inlineCode",{parentName:"p"},"git restore --source=HEAD --staged --worktree test.txt ")),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"difference-between-git-checkout-and-git-clone"},"Difference between git checkout and git Clone"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git clone")," is used to fetch repositories you do not have. It will fetch your repositories from the remote git server. ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," is a powerful command with different uses, like switching branches in your current repository and restoring files file from a particular revision."))}d.isMDXComponent=!0}}]);