import { Link } from 'react-router-dom'
import { ArrowRight, Target, HeartHandshake, Lightbulb } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Portrait from '../components/Portrait.jsx'
import { teamList } from '../data/team.js'

const numbers = [
  { n: '2019', l: 'Founded' },
  { n: '2,390+', l: 'Businesses served' },
  { n: '14', l: 'Countries' },
  { n: '98%', l: 'Client retention' },
]

const values = [
  { icon: Target, title: 'Results first', text: 'We measure success by your growth — revenue, customers and time saved.' },
  { icon: HeartHandshake, title: 'True partnership', text: 'We work as an extension of your team, with honest advice and clear reporting.', tone: 'teal' },
  { icon: Lightbulb, title: 'Simple by design', text: 'Powerful tools should feel effortless. We remove complexity, not capability.', tone: 'dark' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow"><span className="dot" />About us</span>
        <h1>We help businesses <span className="grad-text">grow with clarity</span></h1>
        <p className="lead">BizGrowth was founded to give every ambitious business the data, tools and expertise once reserved for large enterprises.</p>
      </section>

      <section className="section-sm">
        <div className="stats">
          {numbers.map((x, i) => (
            <Reveal key={x.l} delay={i * 80} className="stat glass" style={{ display: 'block' }}>
              <div className="values-num">{x.n}</div>
              <div className="label">{x.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Meet the team</h2>
          <p>Strategists, marketers and engineers united by one goal: your growth.</p>
        </div>
        <div className="team">
          {teamList.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className="member glass glass-hover">
              <Portrait person={p} dark={i % 2 === 1} />
              <div className="name">{p.name}</div>
              <div className="role">{p.role}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>What we stand for</h2>
        </div>
        <div className="grid-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="feature glass">
              <span className={`feature-ico ${v.tone || ''}`}><v.icon size={24} /></span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="section">
        <div className="cta glass glass-dark">
          <h2>Let’s build your growth story</h2>
          <p>Tell us where you want to be — we’ll show you how to get there.</p>
          <div className="row">
            <Link to="/contact" className="btn btn-primary">Get in touch <ArrowRight size={16} /></Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}
