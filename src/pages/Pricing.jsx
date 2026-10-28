import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Plus } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const plans = [
  { name: 'Starter', monthly: 29, desc: 'For solo founders and small teams getting organised.', features: ['1 workspace, 3 users', 'Core analytics dashboards', '5 automations', 'Email support'] },
  { name: 'Growth', monthly: 79, desc: 'For growing businesses ready to scale marketing and sales.', features: ['Unlimited users', 'Advanced analytics & forecasting', '50 automations', 'CRM & lead scoring', 'Priority chat support'], featured: true },
  { name: 'Scale', monthly: 199, desc: 'For established companies with complex operations.', features: ['Everything in Growth', 'Unlimited automations', 'Dedicated growth strategist', 'SSO & audit logs', 'Custom integrations'] },
]

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes, every plan comes with a 14-day free trial. No credit card is required to start.' },
  { q: 'Can I change plans later?', a: 'Absolutely. Upgrade or downgrade at any time and we will prorate the difference automatically.' },
  { q: 'Do you offer done-for-you services?', a: 'Yes. Our strategists can set up dashboards, campaigns and automations for you. Talk to our team for a custom quote.' },
  { q: 'Which payment methods do you accept?', a: 'All major cards, bank transfer and mobile money for annual plans.' },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow"><span className="dot" />Pricing</span>
        <h1>Simple pricing, <span className="grad-text">serious growth</span></h1>
        <p className="lead">Start free, then choose the plan that fits. Every plan includes analytics, automation and support.</p>
        <div className="billing glass" role="group" aria-label="Billing period">
          <button className={!yearly ? 'on' : ''} onClick={() => setYearly(false)} aria-pressed={!yearly}>Monthly</button>
          <button className={yearly ? 'on' : ''} onClick={() => setYearly(true)} aria-pressed={yearly}>Yearly<span className="save">-20%</span></button>
        </div>
      </section>

      <section className="section-sm">
        <div className="plans">
          {plans.map((p, i) => {
            const price = yearly ? Math.round(p.monthly * 0.8) : p.monthly
            return (
              <Reveal key={p.name} delay={i * 80} className={`plan glass glass-hover tilt ${p.featured ? 'glass-dark' : ''}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3>{p.name}</h3>
                  {p.featured && <span className="pill plan-tag">Most popular</span>}
                </div>
                <div className="price" key={price}><span className="price-num">${price}</span><small> /month{yearly ? ', billed yearly' : ''}</small></div>
                <p className="desc">{p.desc}</p>
                <ul>{p.features.map((f) => <li key={f}><Check size={16} />{f}</li>)}</ul>
                <Link to="/contact" className={`btn btn-block ${p.featured ? 'btn-primary' : 'btn-glass'}`}>Start 14-day trial</Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q} className="glass">
              <summary>{f.q}<Plus size={20} /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
