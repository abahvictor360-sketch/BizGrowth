import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)
  // No backend yet: open the visitor's mail client with the message pre-filled.
  function onSubmit(e) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nCompany: ${f.get('company')}\nInterest: ${f.get('interest')}\n\n${f.get('message')}`
    window.location.href = `mailto:hello@bizgrowth.com?subject=${encodeURIComponent('BizGrowth enquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow"><span className="dot" />Contact</span>
        <h1>Let’s talk about <span className="grad-text">your growth</span></h1>
        <p className="lead">Book a demo, ask a question or request a free growth audit. We reply within one business day.</p>
      </section>

      <section className="section-sm">
        <div className="contact">
          <Reveal className="contact-info glass glass-dark">
            <h3 style={{ fontSize: 26 }}>Get in touch</h3>
            <p style={{ color: 'rgba(255,255,255,.65)' }}>Our team is ready to help you find the right solution.</p>
            <div className="item"><span className="feature-ico"><Mail size={20} /></span><div><small>Email</small>hello@bizgrowth.com</div></div>
            <div className="item"><span className="feature-ico teal"><Phone size={20} /></span><div><small>Phone</small>+234 800 000 0000</div></div>
            <div className="item"><span className="feature-ico"><MapPin size={20} /></span><div><small>Office</small>Victoria Island, Lagos</div></div>
          </Reveal>

          <Reveal delay={80} as="form" className="contact-form glass" onSubmit={onSubmit}>
            <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" required placeholder="Jane Doe" /></div>
            <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" required placeholder="jane@company.com" /></div>
            <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" placeholder="Company Ltd" /></div>
            <div className="field">
              <label htmlFor="interest">I’m interested in</label>
              <select id="interest" name="interest" defaultValue="Business analytics">
                <option>Business analytics</option>
                <option>Digital marketing</option>
                <option>Process automation</option>
                <option>Web &amp; e-commerce</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field full"><label htmlFor="message">Message</label><textarea id="message" name="message" required placeholder="Tell us about your goals…" /></div>
            {sent && <div className="form-ok">Thanks! Your email app should open with your message ready to send.</div>}
            <div className="field full"><button className="btn btn-primary btn-block" type="submit"><Send size={16} />Send message</button></div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
