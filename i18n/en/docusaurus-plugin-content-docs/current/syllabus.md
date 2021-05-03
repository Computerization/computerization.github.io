---
id: syllabus
title: C社前端开发培训
license: Creative Commons Attribution 4.0 International License
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Every year, after joining the front-end development (WEB) department, the new studentsb have to go through a series of training. Since joining the Department does not require any prior knowledge, it is a challenge for some students with zero basis. But even if you have certain programming knowleage, you still need to face **completely new specifications and tools**, so the training is essential.

## Phase 1：Get familiar with the basic Tools（10 Weeks）

### Git（3 Weeks）

All of C-club's projects are open sourced on GitHub, to achieve version control, continuous deployment, code management, etc. Therefore, learning git skills is the first step to become a developer.

we pre pared a [playground](https://github.com/Computerization/New-member-practice-commit) for new members. Every year, the club leader will create a new folder named after the year, for the members to complete the following tasks：

1. **installing git** Unix system originally have git, but for Windows you can dowlaod it from [here](https://git-scm.com/download/win)。
2. **Get Familiar with command line tools** On Windows, use PowerShell; On MacOS, use Terminal。
   - Learn to use `cd` and `ls` commamds.
   - Use `git --version` to check the installation of git. Almost every command line tools provides `--version` data, to check the installation status.
3. **Create Github Account** send your email or GitHub id to the leader, so the leader could add the new member into the organization, and grant reading or writing permissions。
4. Reffering to the [git giude](https://github.com/Computerization/New-member-practice-commit/blob/master/README.md) written by us and **Choose a suitable git tool for you**. We recommend everyone to use Visual Studio Code as the editor and git management tool.
5. after Cloning the repo (repository)，**create a new branch**
6. **Create a new folder named after your GitHub id in the folder of corresponding year** and upload any code file into the folder, using any language, as long as it can show your progarmming ability；
7. **Writedown your GitHub id** in the `Signatures.txt`
8. Commit, publish branch, and create pull request!

This part is often the most challenging. If GitHub connection is not smooth, the leader **should** provide corresponding technical help. We also recommend to use proxy connection. This part of the operation will be carried out during the club activities, so that the leader can give one-to-one guidance. Since new member practice commit is only a playground, even if there is confusion (such as direct commit to the main branch), it will not lead to serious consequences. However, please ensure that similar problems will not occur in the subsequent works on GitHub.

### HTML / CSS / JavaScript（3 Weeks）

The basic for front-end are HTML / CSS / JavaScript. They are responsible for the structure, style and function of web pages respectively. Since they are all parsed in the browser, there is no need to install anything in this section. The task is: **to complete a todo list website** after learning the basic syntax, you can refer to the finished products of past members.

If you need help, you can refer to all the things in repo., or use search engines to find the answer. To use search engines and online technology communities is a necessary skill for developers.

In this section, most members will use DOM operation ('document.innerHTML = ...'), but this should to be avoided in subsequent works.
The leader should focus on the page layout and design, logic planning, and code specification, but not on specific programming.

### Vue（4 Weeks）

Our [Enspire](./enspire/what-is-enspire.md) platform is developed by Vue, thus, it is very important to learn Vue syntax for participating in the project development.

Thoroughly read [Vue document](https://vuejs.org/v2/guide/) **And use Vue to reconfigurate your To-do-list website**, we recommand to use only one Vue app defined in the JavaScript file, without any global variables or functions. The whole html should also be wrapped with Vue root element '<div id = "app">', so that you can experience the full Vue logic.

Members might need to understand the following Vue syntax:

- Bidirectional data binding `v-model`；
- List rendering `v-for`；
- Event binding `v-on`；
- Component life cycle `created` / `mounted`；
- Monitors `watch`
- etc.

In this section, the leader needs to pay attention to whether members made the most use of Vue. Vue has a vast number of APIs and syntactic sugar, every function may have several ways of implementation, so we do not specify the specific method, but we hope to make full use of the syntax features of Vue. It is suggested to keep the original document structure and style table, which can save a lot of development time and to better understand the Vue's advantages in responsive rendering data and dynamic updating based on the element tree.

---

In this stage, a total of 8 hours of activities **should** be arranged, with a total duration of no less than 8 weeks. If everything goes as planned, it will be completed after the third monthly exam (no activities or assignments will be uploaded in the exam week). The most important thing is to learn various syntax. If the technical problems related to GitHub cannot be solved, the president could consider alternative solutions, just ensure that members can still participate in the development.

## Phase 2: Development related（10 Weeks）

### Vue-CLI（4 Weeks）

[Vue-CLI](https://cli.vuejs.org/zh/guide/) is a command line tool，It can quickly build Vue projects, and provide functions such as parsing, integration, and deployment. in order to participate in Enspire development, Vue-CLI is needed.

First，install the package management software [npm](https://www.npmjs.com/get-npm)；and use npm to install yarn：

```bash
$ npm -g install yarn
```

At last，install Vue-CLI：

```bash
$ yarn global add @vue/cli
```

（make sure `@vue/cli` is in the latest version）

In this part, members will have greater opportunities for independent exploration. We encourage members to create a new Vue project, such as a personal website, so as to understand the structure and logic of a complete Vue project based on webpack. We will also provide resources for members with server requirements.

Members would also need to know something about code specification tools, such as Eslint and Prettier.

### Unserstand source codes（4 weeks）

During the winter holiday，members would need to clone the tweo repos of [Enspire](https://github.com/Computerization/Enspire) and [docusaurus](https://github.com/Computerization/docusaurus). Run them and understand the code.

Docusaurus is the source code of our club website (which you are browsing now). It uses the docusaurus framework, which is a static web page generator based on react. If you want to contribute, such as by writing a doc or blog, you just need to create a new markdown file in the corresponding folder; If you want to make a page like <a href={useBaseUrl("/Alumni")}>Alumni</a> , you need to learn the react syntax. But this is not a must.

Enspire used TypeScript，This is a JavaScript with type annotation and static checking. When the school started, the leader will introduce TS syntax and its advantages.

### GitHub Development, integration and deployment（2 weeks）

The C-club project has installed a series of GitHub tools to help complete the integration and deployment. In this step, members should have a deeper understanding of GitHub's functions. includes：

- how to review and merge pull requests (plus you also need to learn about Markdown if you still don't know how it works) ；
- GitHub actions (build, check...) which are responsible for integration and inspection；
- Netlify, CircleCI which are responsible for deplyments；
- Dependabot which is responsible for dependency updates.

---

After 60% of the school year, all members should grow into experienced developers. Having the following skills:

- Search for information through search engines and communities;
- Invoke, configure, and execute programs in the command line;
- Complete collaborative developments through GitHub;
- Understand and master the technology stack of front-end development, such as Vue, TypeScript, and Webpack；
- Familiarred with code writing standard；
- Be able to complete small projects independently, providing solutions.

Next, members not only need to take up the daily technical maintenance affairs in the community, but also need to participate in the development of the projects.
