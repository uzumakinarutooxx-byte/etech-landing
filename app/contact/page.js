'use client';

import Reveal from '../../components/Reveal';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <>
      <div className="pageHero">
        <h1>Let's <span className="grad">Talk</span></h1>
        <p>Tell us about your project — we reply within 24 hours.</p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="contactWrap">
          <Reveal>
            <div className="contactInfo">
              <h3>Ready to innovate? 🚀</h3>
              <p>
                Whether it's a startup MVP or an enterprise platform, our team is
                ready. Drop your details and our admin team will get your message
                straight to their inbox.
              </p>
              <p style={{ marginTop: 16 }}>
                📧 admin@etech.com
                <br />
                📍 Silicon Valley, CA
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="footer">© 2026 ETech. All rights reserved.</footer>
    </>
  );
}
