'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setSending(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          subject: form.subject.value,
          message: form.message.value,
        }),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus({
        type: 'ok',
        message: '✅ Message sent! Our team will reach out soon.',
      });
      form.reset();
    } catch {
      setStatus({
        type: 'err',
        message: '❌ Something went wrong. Please email us directly.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea name="message" rows="5" placeholder="Your Message" required />
      <button type="submit" className="btn btnPrimary" disabled={sending}>
        {sending ? 'Sending…' : 'Send Message'}
      </button>
      <p className={`formStatus ${status.type}`}>{status.message}</p>
    </form>
  );
}
