# Website

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FComputerization%2Fdocusaurus.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FComputerization%2Fdocusaurus?ref=badge_shield)

This website is the homepage of [Computerization](https://github.com/Computerization) club, a high school student club in [Shanghai World Foreign Language Academy](http://www.wflms.cn). 

It is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Licensing & Re-Using the Contents

All documents (e.g. `.md` files inside `docs/` and `blog/` path) are licensed under [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/) as in [LICENSE-docs](/LICENSE-docs).

The rest codes, unless stated otherwise, are licensed under [GNU Affero General Public License v3.0](/LICENSE).

### Re-Using the Documents

As for a human-readable explanation (and not a substitute for the [license](/LICENSE-docs) itself) by [Creative Commons](https://creativecommons.org/licenses/by/4.0/):

> You are free to:  
>
> Share — copy and redistribute the material in any medium or format  
> Adapt — remix, transform, and build upon the material for any purpose, even commercially.  

> Under the following terms:  
>
> Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

## Developing & Testing

### Installation

```shell
$ yarn
```

This command installs all depedendencies specified by the [`yarn.lock`](/yarn.lock) file.

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. You can preview your changes instantly with the development server as you edit the  files. Most changes are reflected live without having to restart the server.

### Directory Structure

You may want to read the [Docusaurus v2 documents](https://v2.docusaurus.io/) beforehand.

```bash
.
├── .circleci
│       # Configuration file for Continuous Integration & Testing
├── .dependabot
│       # Configuration file for auto-bumping dependencies
├── blog
│       # Markdown files for blog contents
│       # Refer to https://v2.docusaurus.io/docs/blog#adding-posts for help
├── build
│       # Generated by `yarn build`; Used for deployment
├── docs
│       # Markdown files for documentation
│       # Refer to https://v2.docusaurus.io/docs/markdown-features for available features
├── node_modules
│       # Stores the dependency files installed by `yarn`
│       # Required for testing & deploying
├── src
│   │   # All pages except those in docs or blog goes here
│   ├── components
│   │   # React components that are reused
│   ├── css
│   │   # Global CSS files for theming
│   │   # (though most of the CSS are written at the component-level)
│   └── pages
│       # React codes for actual pages
└── static
    │   # All static files goes here
    │   # Refer to https://v2.docusaurus.io/docs/static-assets
    └── img
```

## Building & Deploying

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=1 yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## License Scan

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FComputerization%2Fdocusaurus.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FComputerization%2Fdocusaurus?ref=badge_large)
