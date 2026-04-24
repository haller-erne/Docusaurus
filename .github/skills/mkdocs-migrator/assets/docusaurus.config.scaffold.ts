// Docusaurus v3 config scaffold — generated from MkDocs migration skill.
// Replace placeholder values (marked MIGRATE:) with your mkdocs.yml equivalents.

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // MIGRATE: site_name → title
  title: 'MIGRATE: site_name',
  tagline: 'MIGRATE: site_description or remove',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // MIGRATE: site_url → url + baseUrl
  // Example: site_url: https://example.com/docs/
  //   → url: 'https://example.com', baseUrl: '/docs/'
  url: 'MIGRATE: site_url origin',
  baseUrl: '/',

  // MIGRATE: repo_url → organizationName + projectName (for GitHub Pages deploy)
  organizationName: 'MIGRATE: github-org',
  projectName: 'MIGRATE: repo-name',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // MIGRATE: docs_dir → path (default: 'docs')
          path: 'docs',
          sidebarPath: './sidebars.ts',

          // MIGRATE: edit_uri → editUrl
          // MkDocs: edit_uri: edit/main/docs/
          // Docusaurus: full URL to tree root
          editUrl: 'MIGRATE: repo_url + /tree/main/',

          // MIGRATE: Set routeBasePath to match existing URL prefix
          // If MkDocs served at /docs/, use 'docs'
          // If MkDocs served at /, use '/'
          routeBasePath: 'docs',
        },
        // MIGRATE: Set to false if MkDocs site had no blog
        blog: false,
        theme: {
          // MIGRATE: extra_css → customCss (move CSS files to src/css/)
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // MIGRATE: markdown_extensions that need remark/rehype plugins
  // Example: def_list → add remark-definition-list
  // markdown: {
  //   remarkPlugins: [],
  //   rehypePlugins: [],
  // },

  // MIGRATE: Enable Mermaid if mkdocs.yml had pymdownx.superfences with mermaid
  // markdown: { mermaid: true },
  // themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    navbar: {
      // MIGRATE: site_name
      title: 'MIGRATE: site_name',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        // MIGRATE: repo_url → GitHub link in navbar
        {
          href: 'MIGRATE: repo_url',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // MIGRATE: Add footer links as needed
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MIGRATE: org name.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // MIGRATE: Add languages used in code blocks that aren't included by default
      // additionalLanguages: ['bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,

  // MIGRATE: plugins from mkdocs.yml
  // Common: search (use docusaurus-search-local), social cards, etc.
  plugins: [
    // Uncomment for local search (replaces MkDocs built-in search):
    // [require.resolve('@easyops-cn/docusaurus-search-local'), {
    //   hashed: true,
    // }],
  ],
};

export default config;
