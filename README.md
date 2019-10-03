# Website
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FComputerization%2Fdocusaurus.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FComputerization%2Fdocusaurus?ref=badge_shield)


This website is built using Docusaurus 2, a modern static website generator.

### License

All documents (e.g. `.md` files inside `docs/` and `blog/` path) is licensed under [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/) as in [LICENSE-docs](/LICENSE-docs).

The rest codes, unless stated otherwise, are licensed under [GNU Affero General Public License v3.0](/LICENSE).


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FComputerization%2Fdocusaurus.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FComputerization%2Fdocusaurus?ref=badge_large)
