'use client';

import Link from 'next/link';
import ThreeBackground from '../components/ThreeBackground';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';

const services = [
  { icon: '🤖', title: 'AI & Machine Learning', desc: 'Custom models, intelligent automation, and data pipelines that turn raw data into decisions.' },
  { icon: '☁️', title: 'Cloud Solutions', desc: 'Cloud-native architecture, migration, and DevOps on AWS, Azure, and GCP.' },
  { icon: '📱', title: 'Web & Mobile Apps', desc: 'Beautiful, high-performance applications built with modern frameworks.' },
  { icon: '🔐', title: 'Cybersecurity', desc: 'Audits, penetration testing, and 24/7 monitoring to keep your business protected.' },
  { icon: '⛓️', title: 'Blockchain', desc: 'Smart contracts, DeFi platforms, and Web3 integrations built securely.' },
  { icon: '📊', title: 'Data Analytics', desc: 'Dashboards and BI systems that make your KPIs crystal clear in real time.' },
];

const stats = [
  { target: 250, label: 'Projects Delivered' },
  { target: 120, label: 'Happy Clients' },
  { target: 15, label: 'Countries Served' },
  { target: 99, label: '% Uptime SLA' },
];

export default function Home() {
  const spotlight = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <>
      <ThreeBackground />

      <header className="hero">
        <h1>
          Building the <span className="grad">Digital Future</span>,<br />
          One Innovation at a Time
        </h1>
        <p>
          ETech delivers cutting-edge software, cloud, and AI solutions that help
          ambitious businesses move faster and smarter.
        </p>
        <div>
          <Link href="/contact" className="btn btnPrimary">Get Started</Link>
          <Link href="/services" className="btn btnGhost">Explore Services</Link>
        </div>
      </header>

      <section className="section">
        <h2 className="sectionTitle">What We Do</h2>
        <p className="sectionSub">
          End-to-end technology services engineered for scale and speed.
        </p>
        <div className="grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="card" onMouseMove={spotlight}>
                <div className="cardIcon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="stats">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="stat">
                <Counter target={s.target} />
                <p>{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="footer">© 2026 ETech. All rights reserved.</footer>
    </>
  );
}
