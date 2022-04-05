"use strict";(self.webpackChunkcomputerization_website=self.webpackChunkcomputerization_website||[]).push([[5598],{2897:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var i=n(9149),r=n(8332),a=(n(6687),n(2897)),o=["components"],l={id:"CI-CD",title:"\u6301\u7eed\u96c6\u6210/\u6301\u7eed\u90e8\u7f72",license:"Creative Commons Attribution 4.0 International License"},u=void 0,p={unversionedId:"infra/CI-CD",id:"infra/CI-CD",title:"\u6301\u7eed\u96c6\u6210/\u6301\u7eed\u90e8\u7f72",description:"CI/CD \u662f\u4ec0\u4e48",source:"@site/docs/infra/CI-CD.md",sourceDirName:"infra",slug:"/infra/CI-CD",permalink:"/docs/infra/CI-CD",tags:[],version:"current",frontMatter:{id:"CI-CD",title:"\u6301\u7eed\u96c6\u6210/\u6301\u7eed\u90e8\u7f72",license:"Creative Commons Attribution 4.0 International License"},sidebar:"docs",previous:{title:"Enspire\u7684\u6280\u672f\u6808",permalink:"/docs/enspire/techstack"}},c={},m=[{value:"CI/CD \u662f\u4ec0\u4e48",id:"what-is-cicd",level:2},{value:"\u6211\u4eec\u4e3a\u4ec0\u4e48\u4f7f\u7528 CI/CD",id:"why-do-we-use-cicd",level:2},{value:"\u6211\u4eec\u4f7f\u7528\u4e86\u54ea\u4e9b CI/CD \u5de5\u5177",id:"what-cicd-toolsets-do-we-use",level:2},{value:"Circle CI",id:"circle-ci",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Netlify",id:"netlify",level:3},{value:"LGTM",id:"lgtm",level:3},{value:"WIP",id:"wip",level:3},{value:"<del>Dependabot</del>",id:"dependabot",level:3},{value:"Renovate",id:"renovate",level:3}],s={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-cicd"},"CI/CD \u662f\u4ec0\u4e48"),(0,a.kt)("p",null,"CI/CD \u662f ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_integration"},"Continuous Integration")," / ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_delivery"},"Continuous Delivery"),"\uff08\u6301\u7eed\u96c6\u6210/\u6301\u7eed\u4ea4\u4ed8\uff09\uff0c\u6216\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_deployment"},"Continuous Deployment"),"\uff08\u6301\u7eed\u90e8\u7f72\uff09\u7684\u7f29\u5199\u3002"),(0,a.kt)("p",null,"\u5b83\u4eec\u662f\u4e00\u6574\u5957\u8f6f\u4ef6\u5de5\u7a0b\u7684\u54f2\u5b66\uff0c\u7528\u4e8e\u5728\u4e00\u4e2a\u5927\u7684\u5408\u4f5c\u9879\u76ee\u4e2d\u4fdd\u8bc1\u6240\u6709\u4eba\u7684\u4ee3\u7801\u63d0\u4ea4\u90fd\u53ef\u4ee5\u88ab\u9891\u7e41\u4ee5\u53ca\u9ad8\u6548\u5730\u5408\u5e76\u8fdb\u4ee3\u7801\u7684 base branch\uff08\u901a\u5e38\u4e3a main \u6216 master\uff09\uff0c\u5e76\u4f7f\u5f97\u8f6f\u4ef6\u53ef\u4ee5\u6301\u7eed\u5730\u5904\u4e8e\u7a33\u5b9a\u3001\u53ef\u4ee5\u88ab\u7f16\u8bd1\u4ee5\u53ca\u53d1\u5e03\u7684\u72b6\u6001\u3002"),(0,a.kt)("h2",{id:"why-do-we-use-cicd"},"\u6211\u4eec\u4e3a\u4ec0\u4e48\u4f7f\u7528 CI/CD"),(0,a.kt)("p",null,"\u5728 C \u793e\u7684\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u5927\u91cf\u8fd0\u7528\u81ea\u52a8\u5316\u6784\u5efa (Automated Build) \u4e0e\u81ea\u52a8\u5316\u6d4b\u8bd5 (Automated Testing) \u6765\u4fdd\u8bc1\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u6b21\u4ee3\u7801\u63d0\u4ea4 (commit) \u4e2d\u4ea7\u751f\u7684\u9519\u8bef\u90fd\u4f1a\u88ab\u5feb\u901f\u5730\u53d1\u73b0\uff0c\u907f\u514d\u9519\u8bef\u88ab\u5f15\u5165\u751f\u4ea7\u7cfb\u7edf\u4e2d"),(0,a.kt)("li",{parentName:"ol"},"\u6574\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u98ce\u683c\uff08\u683c\u5f0f\u3001\u547d\u540d\u3001\u89c4\u5219\u7b49\uff09\u4fdd\u6301\u4e00\u81f4\uff0c\u589e\u52a0\u4ee3\u7801\u7684\u53ef\u8bfb\u6027")),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u901a\u8fc7\u81ea\u52a8\u4f9d\u8d56\u66f4\u65b0 (Automated Dependency Update) \u6765\u4fdd\u8bc1\u4ee3\u7801\u4e2d\u7684\u4f9d\u8d56\u968f\u65f6\u5904\u4e8e\u6700\u65b0\u7248\u672c\uff0c\u5c3d\u53ef\u80fd\u5feb\u901f\u5730\u4fee\u590d\u4f9d\u8d56\u5305\u5f15\u5165\u7684\u5b89\u5168\u6f0f\u6d1e\u3002"),(0,a.kt)("h2",{id:"what-cicd-toolsets-do-we-use"},"\u6211\u4eec\u4f7f\u7528\u4e86\u54ea\u4e9b CI/CD \u5de5\u5177"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a\u7f51\u7ad9\u9879\u76ee\u4e2d\uff0c\u4f60\u7684\u6bcf\u4e00\u4e2a PR \u901a\u5e38\u90fd\u4f1a\u7ecf\u5386\u8fd9\u4e9b\u5de5\u5177\u7684\u9a8c\u8bc1\uff1a"),(0,a.kt)("h3",{id:"circle-ci"},"Circle CI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Circle CI \u4e0e GitHub Actions \u5177\u6709\u76f8\u8fd1\u7684\u4f5c\u7528\uff0c\u90fd\u53ef\u4ee5\u57fa\u4e8e docker \u8fd0\u884c\u4e00\u7cfb\u5217\u81ea\u5b9a\u4e49\u7684 jobs"),(0,a.kt)("li",{parentName:"ul"},"\u4e14\u4e24\u8005\u5bf9\u4e8e\u5f00\u6e90\u7684\u4ed3\u5e93\u90fd\u63d0\u4f9b\u6bcf\u6708\u4e00\u90e8\u5206\u514d\u8d39\u7684\u8fd0\u884c\u65f6\u95f4"),(0,a.kt)("li",{parentName:"ul"},"Circle CI \u7684\u914d\u7f6e\u6587\u4ef6\u4e00\u822c\u4f4d\u4e8e\u4ed3\u5e93\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},".circleci")," \u76ee\u5f55\u4e0b\u3002\u53ef\u4ee5\u4f7f\u7528\u4f60\u7684 GitHub \u5e10\u53f7\u767b\u5f55 ",(0,a.kt)("a",{parentName:"li",href:"https://app.circleci.com"},"circleci.com")," \u540e\u8bbf\u95ee\u6240\u6709\u7684\u8fd0\u884c\u5386\u53f2\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u88ab\u7528\u4e8e\u68c0\u67e5\u7f16\u8bd1\u662f\u5426\u901a\u8fc7\uff0c\u5e76\u5bf9\u4e3b\u5206\u652f\u4e2d\u7684\u63d0\u4ea4\u8fdb\u884c\u81ea\u52a8\u5316\u90e8\u7f72")),(0,a.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub Actions \u7684\u914d\u7f6e\u6587\u4ef6\u4e00\u822c\u4f4d\u4e8e\u4ed3\u5e93\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},".github/workflows")," \u76ee\u5f55\u4e0b\u3002\u53ef\u4ee5\u901a\u8fc7\u6bcf\u4e2a\u4ed3\u5e93\u4e2d\u7684 Actions \u9875\u9762\u8bbf\u95ee\u6240\u6709\u7684\u8fd0\u884c\u5386\u53f2\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u662f\u5728 GitHub \u88ab\u5fae\u8f6f\u6536\u8d2d\u4e4b\u540e\u624d\u63a8\u51fa\u7684\uff0c\u6240\u4ee5\u5728\u6211\u4eec\u7684\u9879\u76ee\u4e2d\u4f7f\u7528\u7684\u4e0d\u662f\u5f88\u591a"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4e3b\u8981\u88ab\u7528\u6765\u68c0\u67e5\u4e00\u4e9b\u8bed\u6cd5\u548c\u4ee3\u7801\u98ce\u683c\u4e0a\u7684\u95ee\u9898\uff08\u6bd4\u5982 ESLint \u4e0e Prettier\uff09")),(0,a.kt)("h3",{id:"netlify"},"Netlify"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u81ea\u52a8\u7f16\u8bd1\u5e76\u642d\u5efa\u9759\u6001\u7f51\u7ad9\u9884\u89c8\u7684\u5de5\u5177\u3002\u914d\u7f6e\u540e\uff0cNetlify \u4f1a\u5728 PR \u4e0b\u6dfb\u52a0\u4e00\u6761\u5305\u542b\u9884\u89c8\u7f51\u7ad9\u5730\u5740\u7684\u7559\u8a00\uff0c\u4f7f\u5ba1\u6838\u8005\u80fd\u591f\u9884\u89c8\u8fd9\u4e2a PR \u5f15\u5165\u7684\u6539\u53d8"),(0,a.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u514d\u8d39\u7248\u7684 Netlify \u53ea\u5141\u8bb8\u6bcf\u4e2a\u9879\u76ee\u62e5\u6709\u4e00\u4e2a\u7ba1\u7406\u5458\uff0c\u9700\u8981\u66f4\u6539\u9879\u76ee\u914d\u7f6e\u7684\u8bf7\u8054\u7cfb",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Computerization/computerization.github.io"},"computerization.io \uff08\u672c\u7f51\u7ad9\uff09")," \u7684\u6240\u6709\u8005\u662f ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/computerization-bot"},"@computerization-bot")," \uff08\u7531 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/yechs"},"@yechs")," \u7ba1\u7406\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Computerization/Enspire"},"Enspire")," \u7684\u7ba1\u7406\u5458\u662f ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Josh-Cena"},"@Josh-Cena"))))),(0,a.kt)("h3",{id:"lgtm"},"LGTM"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u81ea\u52a8\u7684\u5bf9\u4ee3\u7801\u8d28\u91cf\u8fdb\u884c\u6253\u5206\u7684\u5de5\u5177"),(0,a.kt)("li",{parentName:"ul"},"\uff08\u8001\u5b9e\u8bf4\u7528\u5904\u4e0d\u662f\u5f88\u5927\uff0c\u770b\u770b\u5c31\u597d\uff09")),(0,a.kt)("h3",{id:"wip"},"WIP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"W"),"ork ",(0,a.kt)("strong",{parentName:"li"},"I"),"n ",(0,a.kt)("strong",{parentName:"li"},"P"),"rogress \u7684\u7f29\u5199\uff0c\u8868\u793a\u4e00\u4e2a PR \u8fd8\u672a\u5b8c\u6210\uff0c\u4e0d\u5e94\u88ab\u5408\u5e76"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4ecd\u5904\u4e8e\u672a\u5b8c\u6210\u72b6\u6001\u7684 Pull Request\uff0c\u53ef\u4ee5\u5728\u6807\u9898\u4e2d\u6807\u6ce8 ",(0,a.kt)("inlineCode",{parentName:"li"},"[WIP]"),"\uff0cWIP \u4f1a\u907f\u514d\u8fd9\u4e9b PR \u88ab\u5408\u5e76\u8fdb\u5165\u4e3b\u5206\u652f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6ce8"),"\uff1a\u73b0\u5728 GitHub \u81ea\u5df1\u7684 draft PR \u529f\u80fd\u5df2\u7ecf\u975e\u5e38\u5b8c\u5584\u4e86\u3002\u5bf9\u4e8e\u4ecd\u7136\u5904\u4e8e WIP \u72b6\u6001\u7684 PR\uff0c\u5e94\u5f53\u8003\u8651",(0,a.kt)("a",{parentName:"li",href:"https://github.blog/changelog/2020-04-08-convert-pull-request-to-draft/"},"\u6807\u6ce8\u5176\u4e3a draft PR"),"\u3002")),(0,a.kt)("h3",{id:"dependabot"},(0,a.kt)("del",{parentName:"h3"},"Dependabot")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u901a\u8fc7 dependabot \u6765\u81ea\u52a8\u66f4\u65b0\u4f9d\u8d56")," \u6211\u4eec\u76ee\u524d\u5df2\u7ecf\u629b\u5f03 Dependabot \u8f6c\u5411\u4f7f\u7528 Renovate \uff08\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Computerization/computerization.github.io/pull/381"},"computerization.github.io#381"),"\uff09",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f46\u96c6\u6210\u5728 GitHub \u4e2d\u7684 Dependabot \u4ecd\u53ef\u80fd\u81ea\u52a8\u5f00 PR \u66f4\u65b0\u5df2\u77e5\u6f0f\u6d1e\u7684\u4f9d\u8d56\u9879\u76ee"))),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u662f\u4e00\u4e2a\u88ab GitHub \u6536\u8d2d\u4e86\u7684\u5de5\u5177\uff0c\u4f1a\u5728\u4f60\u7684\u4f9d\u8d56\u9879\u76ee\u51fa\u73b0\u65b0\u7248\u672c\u4e4b\u540e\u5f00 PR \u6765\u66f4\u65b0\u8fd9\u4e9b\u4f9d\u8d56\u9879\u76ee\u7684\u7248\u672c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6ce8"),"\uff1a\u56e0\u4e3a dependabot \u5f80\u5f80\u4f1a\u63d0\u4ea4\u5927\u91cf\u7684 PR\uff0c\u56e0\u6b64\u4e5f\u4f1a\u7ed9\u9879\u76ee\u7684\u63d0\u4ea4\u8bb0\u5f55\u5e26\u6765\u5927\u91cf\u7684\u566a\u97f3"))),(0,a.kt)("li",{parentName:"ul"},"Dependabot \u8fd8\u88ab\u7528\u4e8e\u4f9d\u8d56\u9879\u76ee\u4e2d\u6f0f\u6d1e\u7684\u53d1\u73b0\u4e0e\u81ea\u52a8\u4fee\u590d"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u7684\u914d\u7f6e\u6587\u4ef6\u901a\u5e38\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},".github/dependabot.yml"),"\u3002\u53ef\u4ee5\u5728\u9879\u76ee\u7684 Insights \u9875\u9762\u4e2d\u7684 Dependency graph \u67e5\u770b dependabot \u7684\u5f53\u524d\u72b6\u6001\u3002\u5982\u679c\u4f60\u662f\u9879\u76ee\u7ba1\u7406\u5458\u7684\u8bdd\uff0c\u5728\u9879\u76ee\u7684 Security \u9875\u9762\u4e2d\u4e5f\u80fd\u770b\u5230 dependabot \u7684\u5b89\u5168\u6f0f\u6d1e\u8b66\u544a\u3002")),(0,a.kt)("h3",{id:"renovate"},"Renovate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Renovate \u662f\u4e00\u4e2a\u7c7b\u4f3c Dependabot \u7684\u5de5\u5177\uff0c\u7528\u4e8e\u81ea\u52a8\u66f4\u65b0\u4f9d\u8d56\u9879\u76ee"),(0,a.kt)("li",{parentName:"ul"},"\u4f46 Renovate \u652f\u6301 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/noise-reduction/#package-grouping"},"\u4f9d\u8d56\u5305\u5206\u7ec4"),"\uff0c\u53ef\u4ee5\u5728\u4e00\u4e2a PR \u4e2d\u540c\u65f6\u66f4\u65b0\u591a\u4e2a\u4f9d\u8d56\uff0c\u4ee5\u51cf\u5c11\u9879\u76ee PR \u7684\u566a\u97f3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u7684\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"renovate.json")," \u6216\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},".github/renovate.json"),"\u3002\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u914d\u7f6e\u4e13\u95e8\u7684 issue \u4f5c\u4e3a dependency dashboard \uff08\u5982 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Computerization/computerization.github.io/issues/422"},"computerization.github.io#422"),"\uff09 \u4ee5\u8ffd\u8e2a\u6240\u6709\u4f9d\u8d56\u9879\u76ee\u7684\u7248\u672c\u72b6\u6001")))}d.isMDXComponent=!0}}]);