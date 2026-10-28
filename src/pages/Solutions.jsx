import { Link } from 'react-router-dom'
import { BarChart3, Megaphone, Workflow, Globe, ShieldCheck, Users, Check, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Portrait from '../components/Portrait.jsx'
import { team } from '../data/team.js'

const solutions = [
  { icon: BarChart3, title: 'Business analytics', text: 'Live dashboards that connect sales, finance and marketing data into one clear picture.', points: ['Real-time KPIs', 'Custom reports', 'Forecasting'] },
  { icon: Megaphone, title: 'Digital marketing', text: 'Data-led campaigns across search, social and email, optimised for return, not vanity.', points: ['SEO & paid ads', 'Social strategy', 'Email automation'], tone: 'teal' },
  { icon: Workflow, title: 'Process automation', text: 'Remove repetitive work with smart workflows that run quietly in the background.', points: ['No-code builders', '200+ integrations', 'Approval flows'], tone: 'dark' },
  { icon: Globe, title: 'Web & e-commerce', text: 'Fast, beautiful websites and online stores built to convert visitors into customers.', points: ['Conversion design', 'Payments', 'Hosting & care'], tone: 'teal' },
  { icon: Users, title: 'CRM & sales enablement', text: 'Track every lead and relationship so your team always knows the next best action.', points: ['Pipeline views', 'Lead scoring', 'Sales playbooks'], tone: 'dark' },
  { icon: ShieldCheck, title: 'Security & compliance', text: 'Enterprise-grade protection for your data with clear, auditable controls.', points: ['SSO & 2FA', 'Data encryption', 'Audit logs'] },
]

const steps = [
  { t: 'Discover', d: 'We audit your business, data and goals to find the biggest growth levers.' },
  { t: 'Design', d: 'A tailored roadmap with clear milestones, budgets and KPIs.' },
  { t: 'Deploy', d: 'We build dashboards, campaigns and automations, then train your team.' },
  { t: 'Grow', d: 'Continuous optimisation with monthly reviews and expert support.' },
]

export default function Solutions() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow"><span className="dot" />Solutions</span>
        <h1>Digital solutions built for <span className="grad-text">real growth</span></h1>
        <p className="lead">Pick one service or combine them all. Every solution plugs into the same BizGrowth workspace.</p>
      </section>

      <section className="section-sm">
        <div className="grid-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80} className="feature glass glass-hover tilt">
              <span className={`feature-ico ${s.tone || ''}`}><s.icon size={24} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>{s.points.map((p) => <li key={p}><Check size={16} />{p}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>How we work</h2>
          <p>A proven four-step process that takes you from scattered data to predictable growth.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 80} className="step glass">
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="testimonial glass glass-dark">
          <Portrait person={team.kunle} dark />
          <div>
            <span className="pill">Data engineering</span>
            <blockquote style={{ marginTop: 16 }}>
              “Clean data is the foundation of every good decision. We connect your tools, fix the gaps and keep your numbers trustworthy.”
            </blockquote>
            <cite style={{ color: 'rgba(255,255,255,.6)' }}><b style={{ color: '#fff' }}>{team.kunle.name}</b> · {team.kunle.role}</cite>
            <div style={{ marginTop: 24 }}>
              <Link to="/contact" className="btn btn-primary">Book a free audit <ArrowRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
