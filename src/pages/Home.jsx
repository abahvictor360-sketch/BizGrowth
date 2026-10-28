import { Link } from 'react-router-dom'
import { ArrowRight, Search, Layers, Sparkles, Hexagon, Triangle, Circle, Square, Check, MoreHorizontal, ArrowUpRight } from 'lucide-react'
import HeroArt from '../components/HeroArt.jsx'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import Portrait from '../components/Portrait.jsx'
import CountUp from '../components/CountUp.jsx'
import { team, teamList } from '../data/team.js'

const stats = [
  { label: 'Active clients', num: '2,390+' },
  { label: 'Leads generated', num: '202,833' },
  { label: 'Avg. ROI', num: '10.8x' },
  { label: 'Revenue tracked', num: '$38.7M' },
]

export default function Home() {
  usePageMeta(null, 'Grow your business with smart digital solutions. BizGrowth combines business analytics, digital marketing and automation in one workspace for small and growing businesses.')
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div>
          <span className="eyebrow enter" style={{ '--i': 0 }}><span className="dot" />New: AI-powered growth insights</span>
          <h1 className="hero-title">
            {['Grow', 'your', 'business', 'with'].map((w, i) => <span key={w}><span className="word" style={{ '--i': i + 1 }}>{w}</span> </span>)}
            <span className="word grad-text" style={{ '--i': 5 }}>smart digital</span>{' '}
            <span className="word" style={{ '--i': 6 }}>solutions</span>
          </h1>
          <p className="lead enter" style={{ '--i': 7 }}>BizGrowth brings your analytics, marketing and automation into one clear workspace, so you can spot opportunities faster and scale with confidence.</p>
          <div className="hero-actions enter" style={{ '--i': 8 }}>
            <Link to="/pricing" className="btn btn-primary"><span className="ico"><Sparkles size={14} /></span>Get started</Link>
            <Link to="/solutions" className="btn btn-glass"><Search size={16} />Explore solutions</Link>
          </div>
          <div className="hero-proof enter" style={{ '--i': 9 }}>
            <div className="avatars">
              {teamList.map((p) => (
                <span key={p.name}><img src={p.face} alt="" width="38" height="38" /></span>
              ))}
            </div>
            <div>
              <div className="stars">★★★★★</div>
              Trusted by 2,000+ growing teams
            </div>
          </div>
        </div>
        <HeroArt />
      </section>

      {/* Dashboard strip */}
      <Reveal className="section-sm">
        <div className="dash glass glass-dark">
          <div className="dash-left">
            <div className="donut" />
            <div>
              <div className="dash-title"><Layers size={18} />Traffic sources</div>
              <div className="legend" style={{ marginTop: 10 }}>
                <span><i style={{ background: 'var(--brand-2)' }} />Organic 38%</span>
                <span><i style={{ background: 'var(--teal)' }} />Paid 24%</span>
                <span><i style={{ background: 'var(--brand-3)' }} />Referral 20%</span>
              </div>
            </div>
          </div>
          <div className="dash-chart">
            <svg viewBox="0 0 400 110" preserveAspectRatio="none">
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#7d70ff" stopOpacity=".55" />
                  <stop offset="1" stopColor="#7d70ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="chart-area" d="M0 80 C40 70 60 90 100 72 S160 30 200 48 S270 82 310 40 S370 18 400 22 L400 110 L0 110Z" fill="url(#area)" />
              <path className="chart-line" pathLength="1" d="M0 80 C40 70 60 90 100 72 S160 30 200 48 S270 82 310 40 S370 18 400 22" fill="none" stroke="#a99cff" strokeWidth="2.5" />
              <circle className="chart-dot" r="5" fill="#fff" stroke="#7d70ff" strokeWidth="3" cx="400" cy="22" />
              <path d="M0 95 C50 90 90 98 140 86 S240 70 290 76 S360 60 400 58" fill="none" stroke="#5fc7c0" strokeWidth="2" strokeDasharray="4 6" />
            </svg>
          </div>
          <div className="dash-stats">
            <span className="muted" style={{ color: 'rgba(255,255,255,.6)', fontSize: 13 }}>Net revenue · this month</span>
            <span className="big"><CountUp value="$38,350" /></span>
            <span className="up">▲ 18.4% vs last month</span>
          </div>
        </div>
      </Reveal>

      {/* Stats */}
      <section className="section-sm">
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="stat glass glass-hover tilt">
              <div>
                <div className="label">{s.label}</div>
                <div className="num"><CountUp value={s.num} /></div>
              </div>
              <span className="pill">View</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bento */}
      <section className="section">
        <div className="section-head">
          <h2>Everything you need to grow, in one place</h2>
          <p>From strategy to execution, BizGrowth gives every team the tools and talent to move faster.</p>
        </div>
        <div className="bento">
          <Reveal className="tile tile-solutions glass glass-dark tilt">
            <Sparkles size={22} color="#b7aeff" />
            <h3>Tailored solutions</h3>
            <p>We design a growth plan around your goals, market and budget, then build the dashboards and automations to execute it.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontSize: 14, color: 'rgba(255,255,255,.8)' }}>
              <li><Check size={14} color="#b7aeff" /> Growth audit &amp; roadmap</li>
              <li><Check size={14} color="#b7aeff" /> Custom KPI tracking</li>
              <li><Check size={14} color="#b7aeff" /> Dedicated strategist</li>
            </ul>
            <Link to="/solutions" className="btn btn-primary btn-sm">Explore solutions <ArrowRight size={14} /></Link>
          </Reveal>

          <Reveal delay={80} className="tile tile-feature glass">
            <Portrait person={team.zainab} />
            <div style={{ display: 'grid', gap: 16 }}>
              <span className="eyebrow" style={{ justifySelf: 'start' }}><span className="dot" />Marketing</span>
              <h3>Marketing dashboards that drive decisions</h3>
              <p className="muted" style={{ fontSize: 15 }}>Every campaign, channel and conversion in one live view. Know what works, and double down on it.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <Link to="/solutions" className="btn btn-glass btn-sm">See dashboards</Link>
                <span className="toggle" aria-hidden="true" />
              </div>
            </div>
          </Reveal>

          <div className="stack">
            <Reveal delay={160} className="mini-dash glass glass-dark" style={{ background: 'linear-gradient(160deg, #6b5cf6, #3a2dc0)' }}>
              <div className="row"><span>Campaign ROI</span><MoreHorizontal size={16} /></div>
              <div className="row" style={{ marginTop: 6, alignItems: 'baseline' }}>
                <span className="val">$32,600</span>
                <span className="val" style={{ fontSize: 15, opacity: .8 }}>+12.6%</span>
              </div>
              <div className="bars">
                {[40, 65, 50, 80, 58, 92, 70, 100].map((h, i) => <span key={i} style={{ height: `${h}%`, '--i': i }} />)}
              </div>
            </Reveal>
            <Reveal delay={240} className="person-card glass tilt">
              <Portrait person={team.david} dark />
              <div>
                <div className="name">{team.david.name}</div>
                <div className="role">{team.david.role}</div>
                <p className="muted" style={{ fontSize: 13, marginTop: 8 }}>“We turn your data into a plan you can act on this week.”</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Growth + showcase */}
      <section className="section">
        <div className="split">
          <Reveal className="growth glass">
            <span className="pill pill-dark" style={{ alignSelf: 'flex-end' }}>Plans</span>
            <h2>Grow your business with <span className="grad-text">personalized</span> strategies</h2>
            <p className="muted">Pick a plan that fits where you are today. Upgrade, downgrade or cancel any time. No lock-in.</p>
            <div className="price-row">
              {[
                { name: 'Starter', p: '$29' },
                { name: 'Growth', p: '$79', featured: true },
                { name: 'Scale', p: '$199' },
              ].map((x) => (
                <div key={x.name} className={`price-mini glass ${x.featured ? 'featured' : ''}`}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{x.name}</span>
                  <span className="p">{x.p}<small style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)' }}>/mo</small></span>
                  <Link to="/pricing" className={`btn btn-sm ${x.featured ? 'btn-primary' : 'btn-glass'}`}>Choose</Link>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="showcase glass glass-dark" style={{ position: 'relative' }}>
            <div className="glass-bars back">{[50, 80, 40, 95, 65].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
            <div className="glass-bars">{[35, 60, 45, 85, 55, 100, 70].map((h, i) => <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }} />)}</div>
            <div className="badge-float glass"><strong>$22.4k</strong>Saved this quarter</div>
            <div className="float-stat glass glass-tint">
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)' }}>Growth score</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginTop: 8 }}>
                <span className="n"><CountUp value="58" /></span>
                <span className="fab" style={{ position: 'static', width: 36, height: 36, background: 'var(--night)' }}><ArrowUpRight size={16} /></span>
              </div>
            </div>
            <h2>Pricing that scales with you</h2>
            <p>Only pay for what you use. Every plan includes analytics, automation and expert support.</p>
            <div style={{ marginTop: 22 }}>
              <Link to="/pricing" className="btn btn-ghost-light">Compare plans <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Logos */}
      <Reveal className="section-sm">
        <div className="logos glass">
          <div className="marquee">
            {[0, 1].map((k) => (
              <div className="marquee-track" key={k} aria-hidden={k === 1}>
                <span><Hexagon size={20} />Lumina</span>
                <span><Triangle size={20} />Vertex</span>
                <span><Circle size={20} />Orbit&amp;Co</span>
                <span><Square size={20} />Blocklabs</span>
                <span><Sparkles size={20} />Nova</span>
                <span><Layers size={20} />Stackwise</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Testimonial */}
      <section className="section">
        <Reveal className="testimonial glass">
          <Portrait person={team.amara} />
          <div>
            <div className="stars">★★★★★</div>
            <blockquote style={{ marginTop: 14 }}>
              “BizGrowth gave us a single source of truth. Within one quarter we doubled qualified leads and finally knew exactly where every naira of our marketing budget was going.”
            </blockquote>
            <cite><b>{team.amara.name}</b> · {team.amara.role}</cite>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal className="section">
        <div className="cta glass glass-dark" style={{ position: 'relative' }}>
          <span className="orb" style={{ width: 70, height: 70, left: '8%', top: 40 }} />
          <span className="orb" style={{ width: 36, height: 36, right: '10%', bottom: 50, animationDelay: '-4s' }} />
          <h2>Ready to grow smarter?</h2>
          <p>Start your free 14-day trial today. No credit card required, set up in minutes.</p>
          <div className="row">
            <Link to="/pricing" className="btn btn-primary">Start free trial <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn btn-ghost-light">Talk to sales</Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}
