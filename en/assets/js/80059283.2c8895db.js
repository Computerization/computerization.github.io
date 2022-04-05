"use strict";(self.webpackChunkcomputerization_website=self.webpackChunkcomputerization_website||[]).push([[1306],{2897:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2180:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var i=n(9149),a=n(8332),o=(n(6687),n(2897)),r=["components"],l={id:"CI-CD",title:"CI/CD",license:"Creative Commons Attribution 4.0 International License"},s=void 0,u={unversionedId:"infra/CI-CD",id:"infra/CI-CD",title:"CI/CD",description:"What is CI/CD",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/infra/CI-CD.md",sourceDirName:"infra",slug:"/infra/CI-CD",permalink:"/en/docs/infra/CI-CD",tags:[],version:"current",frontMatter:{id:"CI-CD",title:"CI/CD",license:"Creative Commons Attribution 4.0 International License"},sidebar:"docs",previous:{title:"Enspire\u7684\u6280\u672f\u6808",permalink:"/en/docs/enspire/techstack"}},c={},p=[{value:"What is CI/CD",id:"what-is-cicd",level:2},{value:"Why do we use CI/CD",id:"why-do-we-use-cicd",level:2},{value:"What CI/CD toolsets do we use",id:"what-cicd-toolsets-do-we-use",level:2},{value:"Circle CI",id:"circle-ci",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Netlify",id:"netlify",level:3},{value:"LGTM",id:"lgtm",level:3},{value:"WIP",id:"wip",level:3},{value:"<del>Dependabot</del>",id:"dependabot",level:3},{value:"Renovate",id:"renovate",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-cicd"},"What is CI/CD"),(0,o.kt)("p",null,"CI/CD is the abbereviation for ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_integration"},"Continuous Integration")," / ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_delivery"},"Continuous Delivery")," (alternatively, ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_deployment"},"Continuous Deployment"),")."),(0,o.kt)("p",null,"They are a system of software engineering philosophy and is used in large collaborative projects to ensure that everyone's commits could be frequently and efficiently merged into the base branch (usually ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),"). It also keeps the software main branch in a stable, compilable state so that it can be released whenever necessary."),(0,o.kt)("h2",{id:"why-do-we-use-cicd"},"Why do we use CI/CD"),(0,o.kt)("p",null,"Throughout Computerization's projects, we've extensively made use of Automated Build and Automated Testing to ensure that"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Bugs introduced in each new commits are found out quickly before they are merged, so as to avoid breaking the production system"),(0,o.kt)("li",{parentName:"ol"},"The code styles (format, naming, conventions) are consistent, making the codes more readable")),(0,o.kt)("p",null,"Besides, we also make use of Automated Dependency Update to keep all dependencies in our codebase at the newest version, so we can fix security vulnerabilities introduced by dependencies as soon as possible."),(0,o.kt)("h2",{id:"what-cicd-toolsets-do-we-use"},"What CI/CD toolsets do we use"),(0,o.kt)("p",null,"In a typical web project, each of your PR will be examined by the following tools:"),(0,o.kt)("h3",{id:"circle-ci"},"Circle CI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Circle CI and GitHub Actions serves a similar function. Both can be used to run a series of custom jobs within docker containers."),(0,o.kt)("li",{parentName:"ul"},"Worth mentioning, both of them offers some amount of free credits to open source projects"),(0,o.kt)("li",{parentName:"ul"},"The configuration file for Circle CI is usually located under the ",(0,o.kt)("inlineCode",{parentName:"li"},".circleci")," directory in the repo. You can log into ",(0,o.kt)("a",{parentName:"li",href:"https://app.circleci.com"},"circleci.com")," via your GitHub account to have access to all the historical build statuses and logs."),(0,o.kt)("li",{parentName:"ul"},"In our existing projects, it is used to check whether the build passes/fails, and to automatically deploy commits in main/master branch/")),(0,o.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The configuration file for GitHub Actions is usually located under ",(0,o.kt)("inlineCode",{parentName:"li"},".github/workflows"),' directory in the repo. You can visit the "Actions" tab in each repo to have access to all the historical buil statuses and logs.'),(0,o.kt)("li",{parentName:"ul"},"Since it is released only after Microsoft acquired GitHub, it is not used as much as Circle CI in some of our old projects"),(0,o.kt)("li",{parentName:"ul"},"It is now used to check syntax and enforce format/code conventions (e.g. through eslint and prettier)")),(0,o.kt)("h3",{id:"netlify"},"Netlify"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is a tool used to automatically build and preview static websites. With some configuration, it will comment the preview address under PRs, so that reviewers can preview the changes introduced by the PR."),(0,o.kt)("li",{parentName:"ul"},"Since the free plan of Netlify allows only one member in each organization, you should contact these people if you want to change the configurations",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Computerization/computerization.github.io"},"computerization.io (this website)")," ==> ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/computerization-bot"},"@computerization-bot")," (managed by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/yechs"},"@yechs"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Computerization/Enspire"},"Enspire")," ==> ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Josh-Cena"},"@Josh-Cena"))))),(0,o.kt)("h3",{id:"lgtm"},"LGTM"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A tool that automatically grades your code quality"),(0,o.kt)("li",{parentName:"ul"},"(honestly it's not as useful as others, so just take it as a reference)")),(0,o.kt)("h3",{id:"wip"},"WIP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Short for ",(0,o.kt)("strong",{parentName:"li"},"W"),"ork ",(0,o.kt)("strong",{parentName:"li"},"I"),"n ",(0,o.kt)("strong",{parentName:"li"},"P"),"rogress. Used to indicate that a PR is still under development and should not be merged."),(0,o.kt)("li",{parentName:"ul"},"For unfinished Pull Requests, one can add ",(0,o.kt)("inlineCode",{parentName:"li"},"[WIP]")," in the title, and WIP will prevent these PRs from being merged."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note"),": Now that GitHub's built-in draft PR functionality is much more usable, you should consider ",(0,o.kt)("a",{parentName:"li",href:"https://github.blog/changelog/2020-04-08-convert-pull-request-to-draft/"},"marking the PR as draft")," instead.")),(0,o.kt)("h3",{id:"dependabot"},(0,o.kt)("del",{parentName:"h3"},"Dependabot")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"In addition, we use dependabot to automatically update the dependencies.")," We have now switched from Dependabot to Renovate (See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Computerization/computerization.github.io/pull/381"},"computerization.github.io#381"),")",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"However, GitHub-integrated Dependabot may still open PRs to upgrade dependencies with known vulnerabilities."))),(0,o.kt)("li",{parentName:"ul"},"It is a tool now acquired by (and integrated into) GitHub. It'll open PRs to update your project dependencies when they are outdated",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note"),"\uff1aSince dependabot usually opens large amounts of PRs, it'll also bring huge amounts of noise to the project's commit history"))),(0,o.kt)("li",{parentName:"ul"},"It is also used to automatically detect and fix vulnerabilities introduced by dependencies."),(0,o.kt)("li",{parentName:"ul"},"The configuration file is usually located in ",(0,o.kt)("inlineCode",{parentName:"li"},".github/dependabot.yml"),'. You can visit the dependency graph in repo\'s "Insights" tab to check the current status of dependabot. If you are the repo administrator, you can also view dependaboit vulnerability alert under the repo\'s "Security" tab.')),(0,o.kt)("h3",{id:"renovate"},"Renovate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Renovate is a tool similar to Dependabot that automatically updates the dependencies"),(0,o.kt)("li",{parentName:"ul"},"with the addition of ",(0,o.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/noise-reduction/#package-grouping"},"package grouping"),", that allows it to update multiple dependency packages in one PR to reduce the noise in project PRs."),(0,o.kt)("li",{parentName:"ul"},"Its configuration file iis located at ",(0,o.kt)("inlineCode",{parentName:"li"},"renovate.json")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".github/renovate.json"),". In addition, it can be configured to open an issue as dependency dashboard (e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Computerization/computerization.github.io/issues/422"},"computerization.github.io#422"),") to track the status of all dependency upgrades.")))}m.isMDXComponent=!0}}]);