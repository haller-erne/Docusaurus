import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  heoptesterSidebar: [
    {type: 'doc', id: 'README', label: 'Home'},
    {type: 'doc', id: 'getting-started', label: 'Getting Started'},
    {type: 'doc', id: 'connection', label: 'Connection'},
    {type: 'doc', id: 'mid-panels', label: 'MID Panels'},
    {type: 'doc', id: 'log-viewer', label: 'Log Viewer'},
    {
      type: 'category',
      label: 'Scripting & Testing',
      collapsed: false,
      items: [
        {type: 'doc', id: 'lua-scripting', label: 'Lua Scripting'},
        {type: 'doc', id: 'lua-api-reference', label: 'Lua API Reference'},
        {type: 'doc', id: 'test-suites', label: 'Test Suites'},
      ],
    },
    {type: 'doc', id: 'tools', label: 'Tools'},
    {type: 'doc', id: 'settings', label: 'Settings'},
    {type: 'doc', id: 'licensing', label: 'Licensing'},
    {type: 'doc', id: 'troubleshooting', label: 'Troubleshooting'},
  ],
};

export default sidebars;
