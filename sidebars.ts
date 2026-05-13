import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Stahlwille 766 Integration App',
      collapsed: false,
      link: {type: 'doc', id: 'shared/stahlwille/user-guide'},
      items: [
        {type: 'doc', id: 'shared/stahlwille/installation', label: 'Installation'},
        {type: 'doc', id: 'shared/stahlwille/configuration', label: 'Configuration'},
        {type: 'doc', id: 'shared/stahlwille/applying-changes', label: 'Applying Changes'},
        {type: 'doc', id: 'shared/stahlwille/ui-widget', label: 'UI & Widget'},
        {type: 'doc', id: 'shared/stahlwille/data-layer', label: 'Data Layer'},
        {type: 'doc', id: 'shared/stahlwille/outputcurves', label: 'Output Curves Export & Posting'},
        {type: 'doc', id: 'shared/stahlwille/licensing', label: 'Licensing'},
        {type: 'doc', id: 'shared/stahlwille/error-codes', label: 'Error Codes'},
        {type: 'doc', id: 'shared/stahlwille/troubleshooting', label: 'Troubleshooting'},
        {type: 'doc', id: 'shared/stahlwille/quick-reference', label: 'Quick Reference'},
      ],
    },
    {
      type: 'category',
      label: 'GWK Operator App',
      collapsed: true,
      link: {type: 'doc', id: 'shared/opex-gwk/user-guide'},
      items: [
        {type: 'doc', id: 'shared/opex-gwk/installation', label: 'Installation'},
        {type: 'doc', id: 'shared/opex-gwk/configuration', label: 'Configuration'},
        {type: 'doc', id: 'shared/opex-gwk/applying-changes', label: 'Applying Changes'},
        {type: 'doc', id: 'shared/opex-gwk/ui-widget', label: 'UI & Widget'},
        {type: 'doc', id: 'shared/opex-gwk/data-layer', label: 'Data Layer'},
        {type: 'doc', id: 'shared/opex-gwk/outputcurves', label: 'Output Curves Export & Posting'},
        {type: 'doc', id: 'shared/opex-gwk/licensing', label: 'Licensing'},
        {type: 'doc', id: 'shared/opex-gwk/error-codes', label: 'Error Codes'},
        {type: 'doc', id: 'shared/opex-gwk/troubleshooting', label: 'Troubleshooting'},
        {type: 'doc', id: 'shared/opex-gwk/quick-reference', label: 'Quick Reference'},
      ],
    },
  ],
};

export default sidebars;
