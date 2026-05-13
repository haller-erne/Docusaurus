import * as React from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  const logoUrl = useBaseUrl('img/He logo.png');
  return (
    <header className="hero hero--primary" style={{padding: '4rem 0'}}>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
        }}>
        <div style={{flex: '1 1 420px', minWidth: 320}}>
          <Heading as="h1" className="hero__title" style={{marginBottom: '1rem'}}>
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle" style={{fontSize: '1.25rem', maxWidth: 820}}>
            {siteConfig.tagline}
          </p>
        </div>
        <div style={{flex: '0 0 auto', display: 'flex', justifyContent: 'center'}}>
          <img
            src={logoUrl}
            alt="Haller + Erne Logo"
            style={{width: 260, height: 'auto', maxWidth: '100%'}}
          />
        </div>
      </div>
    </header>
  );
}

interface ProductCard {
  title: string;
  description: string;
  to: string;
  buttonLabel: string;
  badge?: string;
  icon?: string;
}

const products: ProductCard[] = [
  {
    title: 'Stahlwille 766 Integration',
    description:
      'Integrate Stahlwille 766 WiFi torque wrenches with ctrlX CORE. Real-time monitoring, configurable parameter sets, and DataLayer integration.',
    to: '/docs/shared/stahlwille/user-guide',
    buttonLabel: 'User Guide',
    icon: '🔧',
  },
  {
    title: 'GWK Operator App',
    description:
      'Integrate GWK Operator tools with ctrlX CORE. Dashboard widget, Data Layer control, and result reporting.',
    to: '/docs/shared/opex-gwk/user-guide',
    buttonLabel: 'Learn More',
    icon: '📊',
  },
  {
    title: 'OGS — Operator Guidance System',
    description:
      'Low-level developer documentation for OGS V3: Lua scripting API, tool drivers, data output, and system configuration.',
    to: '/ogs/',
    buttonLabel: 'OGS Docs',
    icon: '🖥️',
  },
  {
    title: 'OpenProtocol Tester',
    description:
      'Test and debug tightening controllers over Open Protocol (Rexroth, BMW, Ford). Lua scripting, automated test suites, and protocol analysis.',
    to: '/heoptester/',
    buttonLabel: 'OP Tester Docs',
    badge: 'Beta',
    icon: '🧪',
  },
];

function Products() {
  return (
    <section className="container" style={{marginTop: '3rem'}}>
      <Heading as="h2" style={{textAlign: 'center', marginBottom: '2rem'}}>
        Products &amp; Tools
      </Heading>
      <div className="row">
        {products.map((p) => (
          <div key={p.title} className="col col--6 margin-bottom--lg">
            <div
              className="card"
              style={{
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                height: '100%',
                ...(p.badge === 'Coming Soon' ? {opacity: 0.7} : {}),
              }}>
              <div
                className="card__body"
                style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '2rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                  <span style={{fontSize: '1.5rem'}}>{p.icon}</span>
                  <Heading as="h3" style={{margin: 0}}>
                    {p.title}
                  </Heading>
                </div>
                <p style={{margin: 0, fontSize: '0.95rem', lineHeight: 1.5}}>{p.description}</p>
                <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto'}}>
                  <Link className="button button--primary button--md" to={p.to}>
                    {p.buttonLabel}
                  </Link>
                  {p.badge && (
                    <span className="badge badge--secondary" style={{alignSelf: 'center'}}>
                      {p.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuickLinks() {
  const links: {title: string; description: string; to: string}[] = [
    {
      title: 'Installation',
      description: 'Setup guides for Stahlwille 766 App.',
      to: '/docs/shared/stahlwille/installation',
    },
    {
      title: 'Configuration',
      description: 'Configure apps for your use case.',
      to: '/docs/shared/stahlwille/configuration',
    },
    {
      title: 'OGS Tool Drivers',
      description: 'OpenProtocol, BLE, positioning, and more.',
      to: '/ogs/tools/',
    },
    {
      title: 'OP Tester Scripting',
      description: 'Automate tests with Lua scripting.',
      to: '/heoptester/lua-scripting',
    },
    {
      title: 'Data Layer',
      description: 'ctrlX DataLayer integration for PLC connectivity.',
      to: '/docs/shared/stahlwille/data-layer',
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and diagnostic procedures.',
      to: '/docs/shared/stahlwille/troubleshooting',
    },
  ];
  return (
    <section className="container margin-vert--xl">
      <Heading as="h2" style={{textAlign: 'center', marginBottom: '2rem'}}>
        Quick Links
      </Heading>
      <div className="row">
        {links.map((link) => (
          <div key={link.title} className="col col--4 margin-bottom--lg">
            <div className="card" style={{height: '100%'}}>
              <div className="card__body">
                <Heading as="h3" style={{marginTop: 0}}>
                  {link.title}
                </Heading>
                <p style={{fontSize: '0.9rem'}}>{link.description}</p>
              </div>
              <div className="card__footer">
                <Link className="button button--sm button--primary" to={link.to}>
                  Open
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Documentation portal for Haller + Erne GmbH: product guides, developer resources, and tool documentation.">
      <Hero />
      <main>
        <Products />
        <QuickLinks />
      </main>
    </Layout>
  );
}
