---
id: CI-CD
title: CI/CD
license: Creative Commons Attribution 4.0 International License
---

## CI/CD 是什么 {#cicd-是什么}

CI/CD 是 [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) / [Continuous Delivery](https://en.wikipedia.org/wiki/Continuous_delivery) (或是 [Continuous Deployment](https://en.wikipedia.org/wiki/Continuous_deployment)) 的缩写。

它们是一整套软件工程的哲学，用于在一个大的合作项目中保证所有人的代码提交都可以被频繁以及高效地 merge 进代码的 base branch（通常为 main 或 master），并使得软件可以持续地处于稳定、可以被编译以及 release 的状态。

TODO...

## 我们为什么使用 CI/CD {#我们为什么使用-cicd}

在 C 社的项目中，我们通过大量运用自动化构建 (Automated Build) 与自动化测试 (Automated Testing) 来保证

1. 每一次代码提交 (commit) 中产生的错误都会被快速地发现，避免错误被引入生产系统中
2. 整个项目的代码风格（格式、命名、规则等）保持一致，增加代码的可读性

此外，我们还通过自动依赖更新 (Automated Dependency Update) 来保证代码中的依赖随时处于最新版本，尽可能快速地修复依赖包引入的安全漏洞。

TODO...

## 我们使用了哪些 CI/CD 工具 {#我们使用了哪些-cicd-工具}

在一个网站项目中，你的每一个 PR 通常都会经历这些工具的验证：

### Circle CI {#circle-ci}

- Circle CI 与 GitHub Actions 具有相近的作用，都可以基于 docker 运行一系列自定义的 jobs
- 且两者对于开源的 repo 都提供每月一部分免费的运行时间
- Circle CI 的配置文件一般位于 repo 中的 `.circleci` 目录下。可以使用你的 GitHub 帐号登录 [circleci.com](https://app.circleci.com) 后访问所有的运行历史。
- 被用于检查编译是否通过，并对 main/master branch 中的 commit 进行自动化部署

### GitHub Actions {#github-actions}

- GitHub Actions 的配置文件一般位于 repo 中的 `.github/workflows` 目录下。可以通过每个 repo 中的 "Actions" tab 访问所有的运行历史。
- 因为是在 GitHub 被微软 acquire 之后才推出的，所以在我们的项目中使用的不是很多
- 目前主要被用来检查一些语法和代码风格上的问题（比如 eslint 与 prettier）

### Netlify {#netlify}

- 是一个自动编译并搭建静态网站预览的工具。配置后，Netlify 会在 PR 下 comment 预览网站的地址，使 reviewer 能够预览这个 PR 引入的改变
- 由于免费版的 Netlify 只允许每个项目拥有一个管理员，需要更改项目配置的请联系
  - [Computerization-website](https://github.com/Computerization/Computerization-website) 的管理员是 [@yechs](https://github.com/yechs)
  - [Enspire](https://github.com/Computerization/Enspire) 的管理员是 [@Josh-Cena](https://github.com/Josh-Cena)

### LGTM {#lgtm}

- 一个自动的对代码质量进行打分的工具
- （honestly 用处不是很大，看看就好）

### WIP {#wip}

- **W**ork **I**n **P**rogress 的缩写，表示一个 PR 还未完成，不应被 merge
- 对于仍处于未完成状态的 Pull Request，可以在 title 中标注 `[WIP]`，WIP 会避免这些 PR 被 merge 进入 main/master branch
- **注**：现在 GitHub 自己的 draft PR 功能已经非常完善了。对于仍然处于 WIP 状态的 PR，应当考虑 [标注其为 draft PR](https://github.blog/changelog/2020-04-08-convert-pull-request-to-draft/)

### Dependabot {#dependabot}

- 此外，我们还通过 dependabot 来自动更新依赖
- 它是一个被 GitHub acquire 了的工具，会在你的依赖项目出现新版本之后 open PR 更新这些依赖项目的版本
  - **注**：因为 dependabot 往往会 open 大量的 PR，因此也会给项目的 commit history 带来大量的噪音
- Dependabot 还被用于依赖项目中 vulnerability 的发现与自动修复
- 它的配置文件通常位于 `.github/dependabot.yml`。可以在项目的 Insights tab 中的 Dependency graph 查看 dependabot 的当前状态。如果你是项目管理员的话，在项目的 Security tab 中也会有 dependabot 的 vulnerability alert。
