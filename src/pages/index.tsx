import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// Minimal custom homepage without Docusaurus template examples
// Add/adjust sections below to tailor landing content.

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  const logoUrl = useBaseUrl('img/New Logo.png');
  return (
  <header className="hero" style={{padding: '4rem 0', background: '#f3f4f6'}}>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
        }}>
        <div style={{flex: '1 1 420px', minWidth: 320}}>
          <Heading as="h1" className="hero__title" style={{marginBottom: '1rem', color: '#1f2937'}}>
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle" style={{fontSize: '1.25rem', maxWidth: 820, color: '#374151'}}>
            {siteConfig.tagline}
          </p>
          <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <Link className="button button--secondary button--lg" style={{fontWeight:600}} to="/docs/stahlwille-766/user-guide">
              Stahlwille 766 App
            </Link>
            <Link className="button button--outline button--lg" to="/docs/opex/opex-overview">
              Opex Solution
            </Link>
          </div>
          <div style={{marginTop: '1.5rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
            <p style={{margin: 0, fontSize: '0.95rem', color: '#495057'}}>
              <strong>Developer Documentation:</strong> Advanced technical documentation including API references, 
              architecture details, and development guides are available in a separate private repository. 
              Contact your system administrator or project lead for access credentials.
            </p>
          </div>
        </div>
    <div style={{flex: '0 0 auto', display: 'flex', justifyContent: 'center'}}>
          <img
            src={logoUrl}
            alt="Haller + Erne ctrlX Solutions Logo"
      style={{width: 260, height: 'auto', maxWidth: '100%'}}
          />
        </div>
      </div>
    </header>
  );
}

function FeaturedProducts() {
  return (
    <section className="container" style={{marginTop: '3rem'}}>
      <div className="row">
        <div className="col col--6 margin-bottom--lg">
          <div className="card" style={{border: '1px solid #e5e7eb', boxShadow: '0 2px 6px rgba(0,0,0,0.04)', height: '100%'}}>
            <div className="card__body" style={{display:'flex', flexDirection:'column', gap:'0.75rem', padding:'2rem'}}>
              <Heading as="h3" style={{margin:0}}>Stahlwille 766 Integration App</Heading>
              <p style={{margin:0, fontSize:'0.95rem', lineHeight:1.5}}>
                Comprehensive solution for integrating Stahlwille 766 WiFi torque wrenches with ctrlX CORE. 
                Features real-time monitoring, configurable parameter sets, and seamless DataLayer integration.
              </p>
              <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap', marginTop:'auto'}}>
                <Link className="button button--primary button--md" to="/docs/stahlwille-766/user-guide">User Guide</Link>
                <Link className="button button--secondary button--md" to="/docs/stahlwille-766/installation">Installation</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col col--6 margin-bottom--lg">
          <div className="card" style={{border: '1px solid #e5e7eb', boxShadow: '0 2px 6px rgba(0,0,0,0.04)', height: '100%', opacity: 0.7}}>
            <div className="card__body" style={{display:'flex', flexDirection:'column', gap:'0.75rem', padding:'2rem'}}>
              <Heading as="h3" style={{margin:0}}>Opex Solution</Heading>
              <p style={{margin:0, fontSize:'0.95rem', lineHeight:1.5}}>
                Industrial optimization and efficiency monitoring solution for ctrlX CORE. 
                Currently in development with advanced analytics and reporting capabilities.
              </p>
              <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap', marginTop:'auto'}}>
                <Link className="button button--outline button--md" to="/docs/opex/opex-overview">Learn More</Link>
                <span className="badge badge--secondary" style={{alignSelf: 'center'}}>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyAreas() {
  const cards: {title: string; description: string; to: string}[] = [
    {
      title: 'Installation Guide',
      description: 'Step-by-step installation guide for Stahlwille 766 App setup.',
      to: '/docs/stahlwille-766/installation',
    },
    {
      title: 'Configuration',
      description: 'Learn how to configure the Stahlwille 766 App for your use case.',
      to: '/docs/stahlwille-766/configuration',
    },
    {
      title: 'UI Widget',
      description: 'Understanding and working with the dashboard widget interface.',
      to: '/docs/stahlwille-766/ui-widget',
    },
    {
      title: 'Data Layer Integration',
      description: 'Working with ctrlX DataLayer for PLC connectivity and control.',
      to: '/docs/stahlwille-766/data-layer',
    },
    {
      title: 'Licensing & Activation',
      description: 'Information about licensing, activation, and compliance.',
      to: '/docs/stahlwille-766/licensing',
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues, solutions, and diagnostic procedures.',
      to: '/docs/stahlwille-766/troubleshooting',
    },
  ];
  return (
    <section className="container margin-vert--xl">
      <div className="row">
        {cards.map(card => (
          <div key={card.title} className="col col--4 margin-bottom--lg">
            <div className="card" style={{height: '100%'}}>
              <div className="card__body">
                <Heading as="h3" style={{marginTop: 0}}>{card.title}</Heading>
                <p style={{fontSize: '0.9rem'}}>{card.description}</p>
              </div>
              <div className="card__footer">
                <Link className="button button--sm button--primary" to={card.to}>
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
      description="Public documentation portal for Haller + Erne ctrlX Solutions: comprehensive guides for industrial automation integration.">
      <Hero />
      <main>
        <FeaturedProducts />
        <KeyAreas />
      </main>
    </Layout>
  );
}
