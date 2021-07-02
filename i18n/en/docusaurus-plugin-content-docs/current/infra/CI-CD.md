---
id: CI-CD
title: CI/CD
license: Creative Commons Attribution 4.0 International License
---

## What is CI/CD

CI/CD is the abbereviation for [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) / [Continuous Delivery](https://en.wikipedia.org/wiki/Continuous_delivery) (alternatively, [Continuous Deployment](https://en.wikipedia.org/wiki/Continuous_deployment)).

They are a system of software engineering philosophy and is used in large collaborative projects to ensure that everyone's commits could be frequently and efficiently merged into the base branch (usually `main` or `master`). It also keeps the software main branch in a stable, compilable state so that it can be released whenever necessary.

TODO...

## Why do we use CI/CD

Throughout Computerization's projects, we've extensively made use of Automated Build and Automated Testing to ensure that

1. Bugs introduced in each new commits are found out quickly before they are merged, so as to avoid breaking the production system
2. The code styles (format, naming, conventions) are consistent, making the codes more readable

Besides, we also make use of Automated Dependency Update to keep all dependencies in our codebase at the newest version, so we can fix security vulnerabilities introduced by dependencies as soon as possible.

TODO...

## What CI/CD toolsets do we use

In a typical web project, each of your PR will be examined by the following tools:

### Circle CI

- Circle CI and GitHub Actions serves a similar function. Both can be used to run a series of custom jobs within docker containers.
- Worth mentioning, both of them offers some amount of free credits to open source projects
- The configuration file for Circle CI is usually located under the `.circleci` directory in the repo. You can log into [circleci.com](https://app.circleci.com) via your GitHub account to have access to all the historical build statuses and logs.
- In our existing projects, it is used to check whether the build passes/fails, and to automatically deploy commits in main/master branch/

### GitHub Actions

- The configuration file for GitHub Actions is usually located under `.github/workflows` directory in the repo. You can visit the "Actions" tab in each repo to have access to all the historical buil statuses and logs.
- Since it is released only after Microsoft acquired GitHub, it is not used as much as Circle CI in some of our old projects
- It is now used to check syntax and enforce format/code conventions (e.g. through eslint and prettier)

### Netlify

- It is a tool used to automatically build and preview static websites. With some configuration, it will comment the preview address under PRs, so that reviewers can preview the changes introduced by the PR.
- Since the free plan of Netlify allows only one member in each organization, you should contact these people if you want to change the configurations
  - [Computerization-website](https://github.com/Computerization/Computerization-website) ==> [@yechs](https://github.com/yechs)
  - [Enspire](https://github.com/Computerization/Enspire) ==> [@Josh-Cena](https://github.com/Josh-Cena)

### LGTM

- A tool that automatically grades your code quality
- (honestly it's not as useful as others, so just take it as a reference)

### WIP

- Short for **W**ork **I**n **P**rogress. Used to indicate that a PR is still under development and should not be merged.
- For unfinished Pull Requests, one can add `[WIP]` in the title, and WIP will prevent these PRs from being merged.
- **Note**: Now that GitHub's built-in draft PR functionality is much more usable, you should consider [marking the PR as draft](https://github.blog/changelog/2020-04-08-convert-pull-request-to-draft/) instead.

### Dependabot

- In addition, we use dependabot to automatically update the dependencies.
- It is a tool now acquired by (and integrated into) GitHub. It'll open PRs to update your project dependencies when they are outdated
  - **Note**：Since dependabot usually opens large amounts of PRs, it'll also bring huge amounts of noise to the project's commit history
- It is also used to automatically detect and fix vulnerabilities introduced by dependencies.
- The configuration file is usually located in `.github/dependabot.yml`. You can visit the dependency graph in repo's "Insights" tab to check the current status of dependabot. If you are the repo administrator, you can also view dependaboit vulnerability alert under the repo's "Security" tab.
