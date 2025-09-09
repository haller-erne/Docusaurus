## ctrlX Communication Software Documentation Portal

This repository hosts the technical documentation site for the ctrlX Communication Software platform. It provides:

* Getting started guidance
* Architecture overviews
* API reference entry points
* Backend / Frontend / Communication layer documentation
* Configuration & licensing details

The site is powered by Docusaurus but all starter template examples have been removed and replaced with product‑specific content.

## Prerequisites

* Node.js 22+
* npm (bundled with Node)

## Install Dependencies

```bash
npm install
```

## Start Local Dev Server

```bash
npm start
```
The site will open in your browser (hot reload enabled).

## Build Static Site

```bash
npm run build
```
Output is written to `build/`.

## Preview Production Build Locally

```bash
npm run serve
```

## Deployment (GitHub Pages)

Configure `url`, `baseUrl`, `organizationName`, and `projectName` in `docusaurus.config.ts`, then:

```bash
npm run deploy
```

This runs a build and publishes to the `gh-pages` branch.

## Contributing Content

1. Add or edit Markdown files under `docs/`
2. Update `sidebars.ts` if adding new sections
3. Run `npm start` to verify
4. Submit a pull request

## License

Documentation © Bosch Rexroth AG (ctrlX Communication Software). All rights reserved.
