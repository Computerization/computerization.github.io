---
id: syllabus
title: Front-end developer training syllabus
license: Creative Commons Attribution 4.0 International License
---

Every year, after joining the front-end development (WEB) department, the new students have to go through a series of training. Since joining the department does not require any prior programming knowledge, it is a challenge for starters. But even if you have some programming knowledge beforehand, you still need to face **completely new conventions and tools**, so systematic training is essential.

## Phase 1: Getting familiar with the basic Tools（10 Weeks）

### Git（3 Weeks）

All of Computerization's projects are open sourced on GitHub for version control, continuous deployment, code management, etc. Therefore, learning git skills is the first step to becoming a developer.

We prepared a [playground](https://github.com/Computerization/New-member-practice-commit) for new members. Every year, the club leader will create a new folder named by the year, and the members will complete the following tasks:

1. **Install git.** Unix systems have git pre-installed, and for Windows you can download it from [here](https://git-scm.com/download/win).
2. **Get familiar with command line tools.** On Windows, use PowerShell; On MacOS, use the Terminal.
   - Learn the usage `cd` and `ls` commands.
   - Use `git --version` to check the installation status of git. Almost every command line tool provides the `--version` flag which can be leveraged to check the installation status.
3. **Create Github account.** Send your email or GitHub id to the leader so the leader could add the new member to the organization and grant read or write permissions.
4. Refer to the [git guide](https://github.com/Computerization/New-member-practice-commit/blob/master/README.md) written by us and **choose a suitable git tool for you**. We recommend everyone to use Visual Studio Code as the editor and git management tool.
5. After cloning the repo (repository), **create a new branch.**
6. **Create a new folder named after your GitHub id** in the year-named folder and commit any code file. It can be in any language, as long as it can show your programming ability.
7. **Write down your GitHub id** in the `Signatures.txt`.
8. Commit, publish branch, and create pull request!

This part is often the most challenging. If you cannot connect well to GitHub, the leader should provide appropriate technical help. We also recommend connecting through proxy. Operations should be carried out during the club activities, so that the leader can give one-to-one guidance. Since new member practice commit is only a playground, even if there is some confusion (such as directly committing to the main branch), there won't be serious consequences. However, please ensure that similar problems will not occur again during subsequent work on GitHub.

### HTML / CSS / JavaScript（3 Weeks）

The foundation of front-end are HTML / CSS / JavaScript. They are responsible for the structure, style and function of web pages, respectively. Since they are all parsed in the browser, there is no need to install anything in this section. The task is: **complete a todo list application**. You can refer to the finished products of past members for more detailed requirements.

If you need help, you can refer to all works in repo, or use search engines to find the answer. Using search engines and online technology communities are essential skills for developers.

In this section, most members will use DOM operation (`document.innerHTML = ...`), but this should be avoided in subsequent works.
The leader should focus on the page layout and design, logic planning, and code conventions, but not on implementations.

### Vue（4 Weeks）

Our [Enspire](./enspire/what-is-enspire.md) platform is developed with Vue. Thus, it is very important to learn Vue syntax to participate in the project development.

Thoroughly read [Vue document](https://vuejs.org/v2/guide/) **and use Vue to refactor your Todo list application**. We recommend that the entire JavaScript file should only contain definition of one Vue instance, without any global variables or functions. The entire HTML should also be wrapped with the Vue root component `<div id="app">`, so that you can experience the logic of Vue to the greatest extent.

Members might need to understand the following Vue syntax:

- Bidirectional data binding `v-model`;
- List rendering `v-for`;
- Event binding `v-on`;
- Component life cycle `created` / `mounted`;
- Monitors `watch`
- etc.

In this section, the leader needs to pay attention to whether members made the most use of Vue syntax. Vue has a vast number of APIs and syntactic sugar and every feature may have several ways of implementation, so we will not specify how everything should be implemented, but we hope to make full use of the syntax features of Vue. It is suggested to keep the original document structure and stylesheet, which can save a lot of development time and help to better understand Vue's advantages in responsive data rendering and dynamic updating based on the component tree.

---

In this stage, a total of 8 hours of activities will be arranged, with a total duration of no less than 8 weeks. If everything goes as planned, it will be completed after the third monthly exam (no activities or assignment uploads will be arranged in the exam week). The most important thing is to learn the syntax. If the GitHub-related technical problems cannot be resolved, the leader could consider alternative solutions to ensure that members can still participate in the development.

## Phase 2: Development related（10 Weeks）

### Vue-CLI（4 Weeks）

[Vue-CLI](https://cli.vuejs.org/zh/guide/) is a command line tool to quickly build Vue projects, and provides functions such as parsing, integration, and deployment. In order to participate in Enspire development, Vue-CLI is needed.

First, install the package management software [npm](https://www.npmjs.com/get-npm); and use npm to install yarn:

```bash
$ npm -g install yarn
```

At last, install Vue-CLI:

```bash
$ yarn global add @vue/cli
```

(Make sure that the latest version `@vue/cli` is installed.)

In this part, members will have greater opportunities for independent exploration. We encourage members to create a new Vue project, such as a personal website, so as to understand the structure and logic of a complete Webpack-based Vue project. We will also provide server resources for members in need.

Members will also need to know about code styling tools, such as ESLint and Prettier.

### Understand source codes（4 weeks）

During the winter holiday, members would need to clone the two repos: [Enspire](https://github.com/Computerization/Enspire) and [Computerization website](https://github.com/Computerization/Computerization-website), run them, and understand their logic.

Computerization-website is the source code of our club website (which you are browsing now). It uses the docusaurus framework, which is a static webpage generator based on React. If you want to contribute, such as by writing a doc or blog, you just need to create a new Markdown file in the corresponding folder; if you want to make a page like [Alumni](/Alumni), you need to learn the React syntax, but this is not a must.

Enspire uses TypeScript, which is JavaScript with type annotation and static checking. When the new semester starts, the leader will introduce TS syntax and its advantages.

### GitHub Development, integration and deployment（2 weeks）

The Computerization projects have a series of GitHub tools installed to help complete the integration and deployment. In this step, members should have a deeper understanding of GitHub's functions. including:

- How to review and merge pull requests (plus, you also need to learn about Markdown if you still don't know how it works);
- GitHub actions (build, check...), which are responsible for integration and checks;
- Netlify, CircleCI, which are responsible for deployments;
- Dependabot, which is responsible for dependency updates.

---

After 60% of the school year has elapsed, all members should have grown into experienced developers equipped with the following skills:

- Search for information through search engines and forums;
- Invoke, configure, and execute programs through the command line;
- Develop collaboratively through GitHub;
- Understand and master the technology stack of front-end development, such as Vue, TypeScript, and Webpack;
- Be familiarized with code conventions;
- Be able to complete small projects independently, model and implement the service logic.

Next, members not only need to take up the routine technical maintenance chores, but also need to participate in development of the platforms.
