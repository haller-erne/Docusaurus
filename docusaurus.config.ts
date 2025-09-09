import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Haller + Erne ctrlX Solutions',
  tagline: 'Documentation for ctrlX CORE Integration Solutions',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://haller-erne.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'haller-erne', // Usually your GitHub org/user name.
  projectName: 'Docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/haller-erne/Docusaurus/tree/main/docs/',
        },
        blog: false, // Disable blog since we removed it
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  // Enable Mermaid code blocks
  markdown: {
    mermaid: true,
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        docsRouteBasePath: '/docs',
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
  image: 'img/New Logo.png',
    navbar: {
      title: 'Haller + Erne ctrlX Solutions',
      logo: {
        alt: 'Haller + Erne ctrlX Solutions Logo',
        src: 'img/New Logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/haller-erne/Docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Stahlwille 766 App',
          items: [
            {label: 'User Guide', to: '/docs/stahlwille-766/user-guide'},
            {label: 'Installation', to: '/docs/stahlwille-766/installation'},
            {label: 'Configuration', to: '/docs/stahlwille-766/configuration'},
            {label: 'Troubleshooting', to: '/docs/stahlwille-766/troubleshooting'},
          ],
        },
        {
          title: 'Products',
          items: [
            {label: 'Stahlwille 766 Integration', to: '/docs/stahlwille-766/user-guide'},
            {label: 'Opex Solution', to: '/docs/opex/opex-overview'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub Repo', href: 'https://github.com/haller-erne/Docusaurus'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Haller + Erne ctrlX Solutions Documentation`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
