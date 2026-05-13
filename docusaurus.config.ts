import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Haller + Erne Documentation',
  tagline: 'Product documentation, guides, and developer resources',
  favicon: 'img/He logo.png',

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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-nB0miv6/jRmo5ULSR2KuILx0daez8e6jB/+mULCbDIqV6Gm6BO/ZoEPFzT5ltRi',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: ({docPath}) => {
            if (docPath.startsWith('shared/')) {
              // Submodule content — link to the shared-docs repo
              return `https://github.com/MaherMakerHallerErne/Ctrlx-Shared-Docs/edit/main/${docPath.replace('shared/', '')}`;
            }
            return `https://github.com/haller-erne/Docusaurus/edit/main/docs/${docPath}`;
          },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  clientModules: [
    './src/clientModules/scrollToHash.js',
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ogs',
        path: 'ogs-docs',
        routeBasePath: 'ogs',
        sidebarPath: './sidebarsOgs.ts',
        editUrl: 'https://github.com/haller-erne/Docusaurus/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'heoptester',
        path: 'heOPTester',
        routeBasePath: 'heoptester',
        sidebarPath: './sidebarsHeOPTester.ts',
        editUrl: 'https://github.com/haller-erne/Docusaurus/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        docsRouteBasePath: ['/docs', '/ogs', '/heoptester'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
      },
    ],
    'docusaurus-plugin-image-zoom',
  ],

  themeConfig: {
    // Replace with your project's social card
  image: 'img/He logo.png',
    navbar: {
      title: 'Haller + Erne Documentation',
      logo: {
        alt: 'Haller + Erne Logo',
        src: 'img/He logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'ctrlX Apps',
        },
        {
          to: '/ogs/',
          label: 'OGS Docs',
          position: 'left',
          activeBaseRegex: '/ogs/',
        },
        {
          to: '/heoptester/',
          label: 'OP Tester',
          position: 'left',
          activeBaseRegex: '/heoptester/',
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
            {label: 'User Guide', to: '/docs/shared/stahlwille/user-guide'},
            {label: 'Installation', to: '/docs/shared/stahlwille/installation'},
            {label: 'Configuration', to: '/docs/shared/stahlwille/configuration'},
            {label: 'Troubleshooting', to: '/docs/shared/stahlwille/troubleshooting'},
          ],
        },
        {
          title: 'Products',
          items: [
            {label: 'Stahlwille 766 Integration', to: '/docs/shared/stahlwille/user-guide'},
            {label: 'GWK Operator App', to: '/docs/shared/opex-gwk/overview'},
            {label: 'OpenProtocol Tester', to: '/heoptester/'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub Repo', href: 'https://github.com/haller-erne/Docusaurus'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Haller + Erne GmbH — Documentation`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['lua', 'json', 'bash', 'ini', 'toml', 'csharp'],
    },
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
