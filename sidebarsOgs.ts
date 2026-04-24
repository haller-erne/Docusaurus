import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * OGS Documentation sidebar — generated from mkdocs.yml nav tree.
 * This sidebar is used by the 'ogs' docs plugin instance.
 */
const sidebars: SidebarsConfig = {
  ogsSidebar: [
    {type: 'doc', id: 'index', label: 'Home'},
    {
      type: 'category',
      label: 'Tool configuration',
      collapsed: false,
      items: [
        {type: 'doc', id: 'tools/README', label: 'Overview'},
        {
          type: 'category',
          label: 'Remote Tool Gateway',
          items: [{type: 'doc', id: 'tools/remote-tool', label: 'Overview'}],
        },
        {
          type: 'category',
          label: 'OpenProtocol tools',
          items: [
            {type: 'doc', id: 'tools/openprotocol/README', label: 'Overview'},
            {type: 'doc', id: 'tools/openprotocol/nexo', label: 'Nexo/Nexo2'},
            {type: 'doc', id: 'tools/openprotocol/sys350-cs351', label: 'CS351'},
            {type: 'doc', id: 'tools/openprotocol/sys350-ke350', label: 'KE350'},
            {type: 'doc', id: 'tools/openprotocol/opexplus', label: 'OPEXplus'},
            {type: 'doc', id: 'tools/openprotocol/gwk', label: 'GWK OP22/OP+'},
            {type: 'doc', id: 'tools/openprotocol/sturtevant', label: 'Sturtevant 400mp/TCVe2'},
            {type: 'doc', id: 'tools/openprotocol/amt', label: 'AMT/EST SX Wifi tools'},
            {type: 'doc', id: 'tools/openprotocol/cleco', label: 'Cleco Wifi tools'},
            {type: 'doc', id: 'tools/openprotocol/makita', label: 'Makita Wifi tools'},
            {type: 'doc', id: 'tools/openprotocol/hstechnik', label: 'HS-Technik NutBee riveting tool'},
          ],
        },
        {
          type: 'category',
          label: 'Non-OpenProtocol tightening tools',
          items: [
            {type: 'doc', id: 'tools/non-openprotocol/ngineric', label: 'n-gineric'},
            {type: 'doc', id: 'tools/non-openprotocol/doga-wifi', label: 'Doga BM-series'},
            {type: 'doc', id: 'tools/non-openprotocol/stahlwille', label: 'Stahlwille Manoskop 766 WiFi'},
          ],
        },
        {
          type: 'category',
          label: 'Misc tools',
          items: [
            {type: 'doc', id: 'tools/misc/gui-input', label: 'OGS GUI input'},
            {type: 'doc', id: 'tools/misc/aioi-pick2light', label: 'AIOI Pick2Light'},
            {type: 'doc', id: 'tools/misc/gesipa-mqtt', label: 'Gesipa riveting tool'},
            {type: 'doc', id: 'tools/misc/keyence-iv4', label: 'Keyence IV4 AI Vision sensor'},
            {type: 'doc', id: 'tools/misc/sylvac', label: 'Sylvac Meters'},
            {type: 'doc', id: 'tools/misc/oetiker', label: 'Oetiker EPC01 pincer'},
            {type: 'doc', id: 'tools/misc/wenglor-weqube', label: 'Wenglor weQube Smart camera'},
          ],
        },
        {
          type: 'category',
          label: 'Positioning',
          items: [
            {type: 'doc', id: 'tools/positioning/README', label: 'Overview'},
            {type: 'doc', id: 'tools/positioning/positioning-referencing', label: 'Referencing'},
            {type: 'doc', id: 'tools/positioning/positioning-art-dtrack', label: 'ART SmartTrack/DTrack'},
            {type: 'doc', id: 'tools/positioning/positioning-art-verpose', label: 'ART Verpose'},
            {type: 'doc', id: 'tools/positioning/positioning-robot-urdf', label: 'URDF Robot FK Positioning'},
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Additional configuration',
      items: [
        {type: 'doc', id: 'tools/misc/socket-tray', label: 'Socket trays'},
        {type: 'doc', id: 'tools/misc/projector', label: 'Projector'},
      ],
    },
    {
      type: 'category',
      label: 'Data output',
      items: [
        {type: 'doc', id: 'dataoutput/xmlfile', label: 'End-of-process (XML) file'},
        {type: 'doc', id: 'dataoutput/printout', label: 'Printout and label printing'},
        {type: 'doc', id: 'dataoutput/traceability', label: 'Traceability'},
        {type: 'doc', id: 'dataoutput/eventlog', label: 'Event logging'},
      ],
    },
    {
      type: 'category',
      label: 'Scripting',
      items: [
        {type: 'doc', id: 'v3/getting-started', label: 'Getting Started'},
        {
          type: 'category',
          label: 'LUA interfaces',
          items: [
            {type: 'doc', id: 'v3/lua/eventlog', label: 'Eventlog'},
            {type: 'doc', id: 'v3/lua/webbrowser', label: 'Web browsers'},
            {type: 'doc', id: 'v3/lua/webserver', label: 'Webserver (and REST API)'},
            {type: 'doc', id: 'v3/lua/bluetooth-le', label: 'Bluetooth LE'},
            {type: 'doc', id: 'v3/lua/sidepanel', label: 'Sidepanel'},
            {type: 'doc', id: 'v3/lua/lean-button', label: 'Lean button'},
          ],
        },
        {type: 'doc', id: 'v3/lua/customtools', label: 'LUA custom tools'},
      ],
    },
    {
      type: 'category',
      label: 'LUA helper libraries',
      items: [
        {type: 'doc', id: 'libs/lua-ads', label: 'ADS communication (TwinCat, Nexeed, Beckhoff)'},
        {type: 'doc', id: 'libs/lua-opcua', label: 'OpcUA communication'},
        {type: 'doc', id: 'libs/lua-modbus', label: 'Modbus/TCP/UDP communication'},
        {type: 'doc', id: 'libs/lua-hid', label: 'USB HID Devices (Buttons, Arduino, etc.)'},
        {type: 'doc', id: 'libs/lua-dpapi', label: 'Data Protection API (safe secrets storage)'},
        {type: 'doc', id: 'libs/lua-ostools', label: 'LUA Windows OS tools'},
        {type: 'doc', id: 'libs/lua-net', label: 'LUA network helpers (REST/OpenAPI)'},
      ],
    },
    {
      type: 'category',
      label: 'Enterprise functionality',
      items: [
        {type: 'doc', id: 'appnotes/databanking', label: 'Databanking and multi-station rework'},
        {type: 'doc', id: 'appnotes/userdb', label: 'Central user administration'},
        {type: 'doc', id: 'appnotes/toolgateway', label: 'Tool roaming and dynamic parameters'},
        {type: 'doc', id: 'appnotes/traceability', label: 'Traceability'},
      ],
    },
    {
      type: 'category',
      label: 'Application notes',
      items: [
        {type: 'doc', id: 'appnotes/gui-layout-runtime', label: 'OGS runtime screen layout'},
        {type: 'doc', id: 'appnotes/debugging', label: 'Debugging LUA Scripts'},
        {type: 'doc', id: 'appnotes/station_io', label: 'Station IO'},
        {
          type: 'category',
          label: 'Using BLE Gateways',
          items: [
            {type: 'doc', id: 'appnotes/blegateway-openmqttgateway', label: 'OpenMQTT-Gateway'},
            {type: 'doc', id: 'appnotes/blegateway-minew-mg6', label: 'Minew MG6 Gateway'},
          ],
        },
      ],
    },
  ],
};

export default sidebars;
