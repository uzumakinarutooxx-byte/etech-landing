'use client';

import Reveal from '../../components/Reveal';
import Counter from '../../components/Counter';

const values = [
  { icon: '⚡', title: 'Speed', desc: 'We ship fast without cutting corners. Momentum matters.' },
  { icon: '🎯', title: 'Precision', desc: 'Every pixel and every query is intentional.' },
  { icon: '🤝', title: 'Partnership', desc: 'Your goals become our roadmap. We win together.' },
  { icon: '🔍', title: 'Transparency', desc: 'Clear pricing, honest timelines, no surprises.' },
];

const milestones = [
  { year: '2018', title: 'Founded', desc: 'ETech started with three engineers and one big idea: make enterprise-grade tech accessible.' },
  { year: '2020', title: 'First 50 Clients', desc: 'Expanded into cloud consulting and crossed 50 active clients across 5 countries.' },
  { year: '2022', title: 'AI Division Launched', desc: 'Opened a dedicated AI/ML practice and shipped our first production LLM integration.' },
  { year: '2024', title: '250+ Projects', desc: 'Celebrated our 250th delivered project with a 99% client satisfaction rate.' },
  { year: '2026', title: 'Global Reach', desc: 'Now serving clients in 15+ countries with a distributed team across 4 time zones.' },
];

const stats = [
  { target: 250, label: 'Projects Delivered' },
  { target: 120, label: 'Happy Clients' },
  { target: 15, label: 'Countries Served' },
  { target: 99, label: '% Uptime SLA' },
];

export default function About() {
  return (
    <>
      <div className="pageHero">
        <h1>About <span className="grad">ETech</span></h1>
        <p>
          We're a team of engineers, designers, and strategists obsessed with
          building technology that moves businesses forward.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="sectionTitle">Our Values</h2>
        <p className="sectionSub">The principles behind every line of code we write.</p>
        <div className="valuesGrid">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="card">
                <div className="cardIcon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Our Journey</h2>
        <p className="sectionSub">From a garage startup to a global tech partner.</p>
        <div className="timeline">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.08}>
              <div className="timelineItem">
                <h3>{m.year} — {m.title}</h3>
                <p>{m.desc}</p>
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
