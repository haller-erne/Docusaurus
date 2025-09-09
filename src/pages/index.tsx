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
            <Link className="button button--secondary button--lg" style={{fontWeight:600}} to="/docs/user-guide/overview">
              User Guide
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
            alt="ctrlX Communication Software Logo"
      style={{width: 260, height: 'auto', maxWidth: '100%'}}
          />
        </div>
      </div>
    </header>
  );
}

function FeaturedUserGuide() {
  return (
    <section className="container" style={{marginTop: '3rem'}}>
      <div className="card" style={{border: '1px solid #e5e7eb', boxShadow: '0 2px 6px rgba(0,0,0,0.04)'}}>
        <div className="card__body" style={{display:'flex', flexDirection:'column', gap:'0.75rem', padding:'2rem'}}>
          <Heading as="h2" style={{margin:0}}>User Guide (Start Here)</Heading>
          <p style={{margin:0, maxWidth:900, fontSize:'1rem', lineHeight:1.5}}>
            The User Guide is the primary entry point for end users and integrators. It walks through core
            concepts, daily workflows, configuration steps, and troubleshooting practices. If you're new or
            need actionable how‑to material, start here.
          </p>
          <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap', marginTop:'0.5rem'}}>
            <Link className="button button--primary button--md" to="/docs/user-guide/overview">Open User Guide</Link>
            <Link className="button button--secondary button--md" to="/docs/user-guide/installation">Installation</Link>
            <Link className="button button--outline button--md" to="/docs/user-guide/configuration">Configuration</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyAreas() {
  const cards: {title: string; description: string; to: string}[] = [
    {
      title: 'Installation',
      description: 'Step-by-step installation guide and setup instructions.',
      to: '/docs/user-guide/installation',
    },
    {
      title: 'Configuration',
      description: 'Learn how to configure the software for your specific use case.',
      to: '/docs/user-guide/configuration',
    },
    {
      title: 'UI Widget',
      description: 'Understanding and working with the user interface components.',
      to: '/docs/user-guide/ui-widget',
    },
    {
      title: 'Data Layer',
      description: 'Working with data exchange and integration patterns.',
      to: '/docs/user-guide/data-layer',
    },
    {
      title: 'Licensing',
      description: 'Information about licensing, activation, and compliance.',
      to: '/docs/user-guide/licensing',
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues, solutions, and diagnostic procedures.',
      to: '/docs/user-guide/troubleshooting',
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
      description="Public documentation portal for ctrlX Communication Software: user guides, installation, configuration, and troubleshooting.">
      <Hero />
      <main>
  <FeaturedUserGuide />
        <KeyAreas />
      </main>
    </Layout>
  );
}
