'use client';

import Link from 'next/link';
import Reveal from '../../components/Reveal';

const services = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    desc: 'Custom models, intelligent automation, and data pipelines that turn raw data into decisions.',
    features: ['Custom LLM integrations', 'Predictive analytics', 'Process automation'],
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    desc: 'Cloud-native architecture, migration, and DevOps on AWS, Azure, and GCP.',
    features: ['Zero-downtime migration', 'Kubernetes & Docker', 'Cost optimization'],
  },
  {
    icon: '📱',
    title: 'Web & Mobile Apps',
    desc: 'Beautiful, high-performance applications built with modern frameworks.',
    features: ['Next.js / React Native', 'Progressive Web Apps', 'API-first design'],
  },
  {
    icon: '🔐',
    title: 'Cybersecurity',
    desc: 'Audits, penetration testing, and 24/7 monitoring to keep your business protected.',
    features: ['Penetration testing', 'SOC 2 compliance', 'Threat monitoring'],
  },
  {
    icon: '⛓️',
    title: 'Blockchain',
    desc: 'Smart contracts, DeFi platforms, and Web3 integrations built securely.',
    features: ['Smart contract audits', 'Token platforms', 'Wallet integrations'],
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    desc: 'Dashboards and BI systems that make your KPIs crystal clear in real time.',
    features: ['Real-time dashboards', 'ETL pipelines', 'Warehouse design'],
  },
];

export default function Services() {
  const spotlight = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <>
      <div className="pageHero">
        <h1>Our <span className="grad">Services</span></h1>
        <p>Everything you need to build, scale, and secure your digital product.</p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="card" onMouseMove={spotlight}>
                <div className="cardIcon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul style={{ marginTop: 14, listStyle: 'none' }}>
                  {s.features.map((f) => (
                    <li key={f} style={{ color: 'var(--accent)', fontSize: '0.9rem', marginTop: 6 }}>
                      ▸ {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center', paddingTop: 20 }}>
        <Reveal>
          <h2 className="sectionTitle">Have a project in mind?</h2>
          <p className="sectionSub">Let's turn your idea into a product that ships.</p>
          <Link href="/contact" className="btn btnPrimary">Start a Project</Link>
        </Reveal>
      </section>

      <footer className="footer">© 2026 ETech. All rights reserved.</footer>
    </>
  );
}
