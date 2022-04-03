"use strict";(self.webpackChunkcomputerization_website=self.webpackChunkcomputerization_website||[]).push([[7326],{2897:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(9149),i=n(8332),o=(n(6687),n(2897)),r=["components"],l={title:"Git usage guide: understanding working principles of Git",authors:"josh-cena",tags:["git","guide"]},s=void 0,c={permalink:"/en/blog/2020/09/23/git-usage",source:"@site/i18n/en/docusaurus-plugin-content-blog/2020-09-23-git-usage.md",title:"Git usage guide: understanding working principles of Git",description:"This article is migrated from the first section of the README.md file in the new member practice commit repo.",date:"2020-09-23T00:00:00.000Z",formattedDate:"September 23, 2020",tags:[{label:"git",permalink:"/en/blog/tags/git"},{label:"guide",permalink:"/en/blog/tags/guide"}],readingTime:7.025,truncated:!0,authors:[{name:"Josh Cena",title:"Leader of Computerization '22",url:"https://github.com/Josh-Cena",imageURL:"https://github.com/Josh-Cena.png",key:"josh-cena"}],frontMatter:{title:"Git usage guide: understanding working principles of Git",authors:"josh-cena",tags:["git","guide"]},prevItem:{title:"Fibonacci sequence",permalink:"/en/blog/2020/10/10/algorithm1"},nextItem:{title:"Welcome",permalink:"/en/blog/2020/09/02/welcome"}},p={authorsImageUrls:[void 0]},m=[{value:"Basic operations: clone, branch, commit, push, pull request",id:"basic-operations-clone-branch-commit-push-pull-request",level:2},{value:"Resolving conflicts",id:"resolving-conflicts",level:2},{value:"Further Reading",id:"further-reading",level:2}],u={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article is migrated from the first section of the README.md file in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Computerization/New-member-practice-commit"},"new member practice commit repo"),".")),(0,o.kt)("p",null,"You can either add a file via Graphical-User-Interface(GUI)-powered GitHub Desktop or command line. You may begin with GUI, but you will someday get into command lines since they offer better control over your repo. Furthermore, Visual Studio Code users can try out the built-in source control."),(0,o.kt)("p",null,"We find it necessary to tell you what you are actually doing each step instead of having you follow the written instructions mechanically. This especially helps since things hardly go as beautifully as the tutorial expects. This section assumes no prior knowledge of any git operations."),(0,o.kt)("p",null,"You can understand git as a version control system. It keeps track of how each file has been created, modified, and deleted, and the repository owner can switch to any saved version (commit), just like the save files in a game."),(0,o.kt)("h2",{id:"basic-operations-clone-branch-commit-push-pull-request"},"Basic operations: clone, branch, commit, push, pull request"),(0,o.kt)("p",null,"Suppose there's a repository out on GitHub named ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello"),", created by Alice to host perhaps ",(0,o.kt)("em",{parentName:"p"},"the")," most famous piece of code in history. Its directory looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 Hello.cpp\n\u2502\n\u251c\u2500\u2500 Contributors.txt\n\u2502\n\u2514\u2500\u2500 README.md\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Hello.cpp\n#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello world!" << endl;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"// Contributors.txt\nXiaoLi\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"// README.md\n\n# Hello world\n\nA piece of C++ code that prints `Hello world!`\n")),(0,o.kt)("p",null,"View each commmit as a snapshot of the entire repo. In fact it's much more lightweight than a complete copy, but in essence it contains all the information at that moment. And this version can be viewed as commit ",(0,o.kt)("inlineCode",{parentName:"p"},"C0"),". (Every commit has a unique hash that's too long to be human-readable, so ",(0,o.kt)("inlineCode",{parentName:"p"},"C0")," will suffice.) We also call it the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch. ",(0,o.kt)("em",{parentName:"p"},"A branch is a series of commits that form a linear relationship of succession, with the ",(0,o.kt)("inlineCode",{parentName:"em"},"master"),' branch being the "main" branch. In essence, it\'s a pointer to a commit.')),(0,o.kt)("img",{alt:"Git tree 1",src:"/img/blog/2020-09-23/Git-tree-1.png"}),(0,o.kt)("p",null,"Bob the linguist finds this repo. He finds great interest in it, but his strong objection to the clich\xe9d ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello world!")," motivates him to make a contribution. To do this, he needs to download this folder (or repository, as people call it) first. This is basically what ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"cloning"))," does."),(0,o.kt)("p",null,"After he has a complete copy of the code on his own machine, Bob sets out to make edits. He updates all three files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Hello.cpp\n#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Bonjour le monde!" << endl;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"// Contributors.txt\nXiaoLi\nXiaoMing\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"// README.md\n\n# Hello world\n\nA piece of C++ code that prints `Bonjour le monde!`\n")),(0,o.kt)("p",null,"And now he needs to send it back to GitHub, as his instinct tells him. This is done by directly making a commit. However there's a critical problem here: ",(0,o.kt)("em",{parentName:"p"},"Alice has zero control over Bob's action"),". In fact, most public repos (including Computerization's) restrict people from commiting directly to ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),", because there's no point of authentication. Once the commit is made, Alice would be back and surprisedly find her code becoming French. And it's bad practice anyways: ",(0,o.kt)("strong",{parentName:"p"},"In any collaborative repository, never commit directly to master.")," ",(0,o.kt)("del",{parentName:"p"},"(Unless you are resigning in a week)")," There's another problem with commiting to ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),", which we will shortly see."),(0,o.kt)("p",null,"So to fix this problem, Bob ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"creates a new branch")),", and names it ",(0,o.kt)("inlineCode",{parentName:"p"},"Bob/change-output-language"),". We may see this as Bob working on a separate but identical folder, and anything he does will not affect ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),". This not only clarifies his purpose, identifies his position as an author, but also prevents conflict and/or confusion."),(0,o.kt)("p",null,"He made the said changes. But then he remembered another code of honor:\n",(0,o.kt)("strong",{parentName:"p"},"one commit should only serve one purpose"),". Looking back at his changes, he believes that changing the language and adding his name in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contributors.txt")," should be separate things (the difference is minute here, but in real projects it gets obvious). Therefore he ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"makes two commits"))," called ",(0,o.kt)("inlineCode",{parentName:"p"},"Change output to French")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Bob's name to Contributors.txt"),", which will be neatly given hashes ",(0,o.kt)("inlineCode",{parentName:"p"},"C1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"C2"),". Note he did not necessarily work on them sequentially, but git treats ",(0,o.kt)("inlineCode",{parentName:"p"},"C2")," as a successor of ",(0,o.kt)("inlineCode",{parentName:"p"},"C1")," since it's a more recent commit. Now the branch ",(0,o.kt)("inlineCode",{parentName:"p"},"Bob/change-output-language")," refers to the commit ",(0,o.kt)("inlineCode",{parentName:"p"},"C2"),"."),(0,o.kt)("img",{alt:"Git tree 2",src:"/img/blog/2020-09-23/Git-tree-2.png"}),(0,o.kt)("p",null,"At this point his changes have remained local -- no one can see it on the GitHub page. So then he ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"publishes the branch and pushes it to the origin")),". This uploads this branch, ",(0,o.kt)("inlineCode",{parentName:"p"},"Bob/change-output-language"),", with all the commits it contains, to the GitHub remote."),(0,o.kt)("p",null,"After he has published the branch, any further commits he makes on this branch will be automatically synchronized with GitHub as well."),(0,o.kt)("p",null,"Directly after, he ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"makes a pull request"))," to ask the code owner (a.k.a. Alice) to merge this branch. ",(0,o.kt)("em",{parentName:"p"},"When a branch is merged, all the changes will now be reflected in ",(0,o.kt)("inlineCode",{parentName:"em"},"master"),".")),(0,o.kt)("p",null,"This sounds really simple when there's only one branch, because git simply adds everything to ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," when all commits are successors of ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),", which is now ",(0,o.kt)("inlineCode",{parentName:"p"},"C0"),". So Git moves the ",(0,o.kt)("inlineCode",{parentName:"p"},"C0")," pointer:"),(0,o.kt)("img",{alt:"Git tree 3",src:"/img/blog/2020-09-23/Git-tree-3.png"}),(0,o.kt)("p",null,"And in fact, above is all for new git users to understand. But as future GitHub admins, you deserve to think a little deeper."),(0,o.kt)("h2",{id:"resolving-conflicts"},"Resolving conflicts"),(0,o.kt)("p",null,"So to make thing more fun, Cindy the orthodox comes simultaneously with Bob. Outraged by Alice dropping the ",(0,o.kt)("inlineCode",{parentName:"p"},"return 0")," in the cpp file, she decides to fix it. Similarly, she creates a new branch ",(0,o.kt)("inlineCode",{parentName:"p"},"Cindy/improve-code-style")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),", which at this point is still ",(0,o.kt)("inlineCode",{parentName:"p"},"C0"),". The files are changed as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Hello.cpp\n#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello world!" << endl;\n  return 0;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"// Contributors.txt\nXiaoLi\nXiaoHong\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"// README.md\n\n# Hello world\n\nA piece of C++ code that prints `Hello world!`\n")),(0,o.kt)("p",null,"She publishes the branch and opens a pull request."),(0,o.kt)("img",{alt:"Git tree 4",src:"/img/blog/2020-09-23/Git-tree-4.png"}),(0,o.kt)("p",null,"Alice, after her tea break, comes back to find the two pull requests. She happily merges Bob's one;"),(0,o.kt)("img",{alt:"Git tree 5",src:"/img/blog/2020-09-23/Git-tree-5.png"}),(0,o.kt)("p",null,"but then Cindy's one she can not merge on click of a button. GitHub throws a warning, telling her there's a conflict with ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),". She has to resolve the conflict manually, because git didn't know which version to keep when they are made parallelly. The resolving page shows something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Hello.cpp\n #include <iostream>\n using namespace std;\n int main() {\n <<<<<<< master\n   cout << "Bonjour le monde!" << endl;\n =======\n   cout << "Hello world!" << endl;\n   return 0;\n >>>>>>> XiaoHong/improve-code-style\n }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"// Contributors.txt\n XiaoLi\n <<<<<<< master\n XiaoMing\n =======\n XiaoHong\n >>>>>>> XiaoHong/improve-code-style\n")),(0,o.kt)("p",null,"Note that the README.md file needs no resolution because only Bob had made a change; git is smart enough to realize that. But the above issues are pressing. How to resolve them are pretty apparent to humans like Alice, though, so she quickly fixed these, and merged Cindy's branch with no conflict. The files are now (",(0,o.kt)("inlineCode",{parentName:"p"},"C4"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Hello.cpp\n#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Bonjour le monde!" << endl;\n  return 0;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"// Contributors.txt\nXiaoLi\nXiaoMing\nXiaoHong\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"// README.md\n\n# Hello world\n\nA piece of C++ code that prints `Bonjour le monde!`\n")),(0,o.kt)("p",null,"And to merge a branch into a branch that is not a successor, Git will create a new commit:"),(0,o.kt)("img",{alt:"Git tree 6",src:"/img/blog/2020-09-23/Git-tree-6.png"}),(0,o.kt)("p",null,"And Alice, Bob, and Cindy are happy about their successful collaboration over GitHub on an open-source project."),(0,o.kt)("p",null,"To understand more about git and its tree structure (as already implied above), check this out: ",(0,o.kt)("a",{parentName:"p",href:"https://learngitbranching.js.org"},"Learn Git Branching")),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("p",null,"To discover what happens when you ",(0,o.kt)("inlineCode",{parentName:"p"},"pull"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"commit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"add"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"checkout"),", you can refer to the following sites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v1/Getting-Started-Git-Basics"},"Git SCM - Getting Started: Git Basics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell"},"Git SCM - Git Branching: Branches in a Nutshell")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows"},"Git SCM - Git Branching: Branching Workflows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/3689838/whats-the-difference-between-head-working-tree-and-index-in-git"},"Stack Overflow - What's the difference between HEAD, working tree and index, in Git?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackernoon.com/https-medium-com-zspajich-understanding-git-data-model-95eb16cc99f5"},"Understanding Git: Data Model")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackernoon.com/understanding-git-branching-2662f5882f9"},"Understanding Git: Branching")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackernoon.com/understanding-git-index-4821a0765cf"},"Understanding Git: Index"))),(0,o.kt)("p",null,"Alternatively, if you don't like reading long texts, you can watch this YouTube video (about 82-min long):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ZDR433b0HJY"},"[","VIDEO","]"," Introduction to Git with Scott Chacon of GitHub"))),(0,o.kt)("p",null,"Or try the commands out on this visualized webpage:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learngitbranching.js.org"},"Learn Git Branching"))))}h.isMDXComponent=!0}}]);