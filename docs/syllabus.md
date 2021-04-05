---
id: syllabus
title: C社前端开发培训
license: Creative Commons Attribution 4.0 International License
---

import useBaseUrl from '@docusaurus/useBaseUrl';

每年，社团的新同学们在加入前端开发部门后，都要经过一系列的培训。由于加入部门并不要求任何前置知识，因此对于一些零基础的同学们来说，是个挑战。但即使有一定编程基础，也同样要面对**完全崭新的规范和工具**，因此系统的教学必不可少。

## 第一阶段：熟悉基础工具（10 周）

### Git（3 周）

整个社团的项目都在 GitHub 上开源，实现版本控制、持续部署、代码管理，等等。因此，学习 git 技巧是成为开发者的第一步。

我们为新成员们准备了一个 [playground](https://github.com/Computerization/New-member-practice-commit)。每年，社长将新建一个以年份命名的文件夹，而社员们将完成如下任务：

1. **安装 git。**Unix 系统自带 git，而 Windows 系统可以在[这里](https://git-scm.com/download/win)下载。
2. **熟悉命令行工具。**在 Windows 上，使用 PowerShell；MacOS 上，使用 Terminal。
   - 学会 `cd` 和 `ls` 指令。
   - 通过 `git --version` 检查 git 是否成功安装。几乎所有命令行工具都提供 `--version` 参数，可以检查安装状态。
3. **创建 GitHub 账号。**将自己的 email 或 GitHub id 发给社长，社长将把新成员加入社团的 GitHub 组织，并授予相应的读写权限。
4. 按照我们撰写的 [git 指南](https://github.com/Computerization/New-member-practice-commit/blob/master/README.md)**选择适合自己的 git 工具**。推荐全社团使用 Visual Studio Code 作为编辑器及 git 管理工具。
5. Clone repo 之后，**新建 branch。**
6. 在对应年份文件夹下**新建以自己的 GitHub id 命名的文件夹。**在文件夹中上传一份代码文件，任意语言均可，只要能够展现自己的代码水平；
7. 在 `Signatures.txt` 中**写下自己的 GitHub id。**
8. Commit, publish branch, and create pull request!

这一部分往往是最具挑战性的。如果 GitHub 连接不畅，社长将提供相应的技术帮助。我们也推荐使用代理服务器连接。这一部分的操作会在社团活动时间开展，以便社长作一对一指导。由于 New-member-practice-commit 仅仅是一个 playground，即使发生了混乱（如直接向主分支 commit），也不会导致严重的后果，但请务必保证在后续的 GitHub 使用中，不会产生类似的问题。

### HTML / CSS / JavaScript（3 周）

前端的基础是 HTML / CSS / JavaScript。它们分别负责了网页的结构、式样、功能。由于它们都是在浏览器中被解析的，因此这一部分不需要安装任何东西。任务是：**完成一个单页 Todo list 应用。**具体的任务要求，可以参考过往成员们的成品。

如果需要帮助，既可以参考 repo 中的所有项目，也可以利用搜索引擎寻找答案。搜索引擎和技术社区的使用是开发者必备的技能。

在这一部分，大多数社员将会使用 DOM 操作（`document.innerHTML = ...`），但在后续的开发中，需要避免这种写法。社长的关注重点应放在页面布局与设计、业务逻辑规划、以及代码规范上，而非具体的操作实现上。

### Vue（4 周）

我们的 [Enspire](./enspire/what-is-enspire.md) 平台是使用 Vue 开发的，因此掌握 Vue 语法对于参与社团项目开发非常重要。

认真阅读 [Vue 的文档](https://vuejs.org/v2/guide/)，**把自己的 todo list 用 Vue 重构。**建议整个 JavaScript 文件只包含一个 Vue 实例的定义，而没有任何全局变量或函数，整个 HTML 也应用 Vue 根组件 `<div id="app">` 包裹，这样能最大程度地体验 Vue 的思维。

社员们很可能会需要了解以下 Vue 语法：

- 双向数据绑定 `v-model`；
- 列表渲染 `v-for`；
- 事件绑定 `v-on`；
- 组件生命周期 `created` / `mounted`；
- 监听器 `watch`
- ……

在这一部分，社长需要注意社员们是否最大程度地利用了 Vue 的语法。Vue 拥有浩如烟海的 API 和语法糖，每一个功能可能都有数种实现，因此我们不规定具体的实现，但希望尽可能地利用 Vue 的语法特性。建议保留原始的文档结构和式样表，这样可以节约开发时间，并更好地理解 Vue 在响应式渲染数据、基于组件树的动态更新等方面的优势。

---

这一阶段总共将安排 8 小时的社团活动，总持续时间不小于 8 周，如果一切按计划进行，将在第三次月考后完成（考试周不安排活动或作业上传）。其中最重要的是学习各项语法，如果 GitHub 相关的技术问题始终无法解决，社长可以考虑替代方案，但保证成员们仍能参与开发。

## 第二阶段：项目开发相关（10 周）

### Vue-CLI（4 周）

[Vue-CLI](https://cli.vuejs.org/zh/guide/) 是一套命令行工具，可以快速搭建 Vue 项目，并提供解析、集成、部署等其他功能。为了参与 Enspire 开发，需要学会 Vue-CLI 相关操作。

首先，安装包管理软件 [npm](https://www.npmjs.com/get-npm)；然后，通过 npm 安装 yarn：

```bash
$ npm -g install yarn
```

最后，安装 Vue-CLI：

```bash
$ yarn global add @vue/cli
```

（请保证安装的是新版的 `@vue/cli`。）

到了这一部分，社员们将拥有更大的自主探索机会。我们鼓励社员们新建一个 Vue 项目，比如一个个人网站，以此了解基于 Webpack 的完整 Vue 项目的结构与逻辑。我们也会为有服务器需求的社员们提供相应资源。

社员们还需要对代码规范工具有所了解，比如 ESLint 和 Prettier。

### 阅读源代码（4 周）

在寒假中，社员们需要 clone [Enspire](https://github.com/Computerization/Enspire) 与 [docusaurus](https://github.com/Computerization/docusaurus) 两个 repo，运行它们，并理解源代码的逻辑。

Docusaurus 是我们的社团网页（也就是你现在正在浏览的）源码。它使用了 Docusaurus 框架，这是一个基于 React 的静态网页生成器。如果想要贡献，如撰写 docs 或 blog，只需要在对应文件夹中新建 Markdown 文件即可；如果想制作像 <a href={useBaseUrl("/Alumni")}>Alumni</a> 一样的页面，则需要学习 React 语法。这不是必学内容。

Enspire 使用了 TypeScript，这是一种带类型标注与静态检查的 JavaScript。开学后，社长会详细介绍 TS 语法与其优势。

### GitHub 开发、集成与部署（2 周）

社团的项目安装了一系列的 GitHub 工具，帮助完成集成与部署。在这一步，社员们要更加深入地了解 GitHub 的功能。包括：

- 如何 review and merge pull requests（如果还不会 Markdown，这也是时候学习一下了）；
- 负责集成与检查的 GitHub actions (build, check...)；
- 负责部署的 Netlify, CircleCI；
- 负责依赖项更新的 Dependabot。

---

在学年过去 60% 后，社员们都应当成长为了有一定经验的开发者。他们掌握如下技能：

- 通过搜索引擎与社区寻找需要的帮助与信息；
- 在命令行中调用、配置、执行程序；
- 通过 GitHub 完成协作开发；
- 了解并掌握前端开发的技术栈，如 Vue, TypeScript, Webpack 等；
- 熟悉代码写作规范；
- 能够独立完成小型项目，为业务逻辑建模并实现。

接下来，社员们除了需要接起社团内的日常技术维护事务，还要投身于系统的开发。
