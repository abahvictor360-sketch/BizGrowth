import { useState } from 'react'
import { Eye, EyeOff, MoreHorizontal } from 'lucide-react'
import { team, teamList } from '../data/team.js'

// Two-panel layout shared by the login and sign-up pages: form on a light glass card,
// liquid-glass showcase on a dark panel (hidden on small screens).
export default function AuthShell({ children }) {
  return (
    <section className="auth">
      <div className="auth-card glass">
        <div className="auth-form">{children}</div>
        <aside className="auth-side glass glass-dark" aria-hidden="true">
          <span className="orb" style={{ width: 54, height: 54, top: 36, right: 40 }} />
          <span className="orb" style={{ width: 22, height: 22, top: 300, left: 150, animationDelay: '-4s' }} />
          <div className="cube auth-cube">
            <span className="blk" style={{ width: 30, height: 30, top: 22, left: 20, borderRadius: '50%', background: '#5fc7c0' }} />
            <span className="blk" style={{ width: 34, height: 24, top: 56, left: 46, background: '#7d70ff' }} />
          </div>

          <div className="mini-dash glass auth-dash" style={{ background: 'linear-gradient(160deg, #6b5cf6, #3a2dc0)' }}>
            <div className="row"><span>Revenue this month</span><MoreHorizontal size={16} /></div>
            <div className="row" style={{ marginTop: 6, alignItems: 'baseline' }}>
              <span className="val">$38,350</span>
              <span className="val" style={{ fontSize: 14, opacity: 0.85 }}>+18.4%</span>
            </div>
            <div className="bars">
              {[38, 60, 46, 74, 55, 88, 66, 100].map((h, i) => <span key={i} style={{ height: `${h}%`, animation: `rise .9s cubic-bezier(.2,.9,.2,1) ${i * 70 + 200}ms both` }} />)}
            </div>
          </div>

          <figure className="auth-quote">
            <blockquote>“BizGrowth gave us one clear view of the business. We doubled qualified leads in a single quarter.”</blockquote>
            <figcaption>
              <img src={team.amara.face} alt="" width="44" height="44" />
              <span><b>{team.amara.name}</b>{team.amara.role}</span>
            </figcaption>
          </figure>

          <div className="auth-proof">
            <div className="avatars">
              {teamList.map((p) => <span key={p.name}><img src={p.face} alt="" width="38" height="38" /></span>)}
            </div>
            <span>Join 2,000+ growing teams</span>
          </div>
        </aside>
      </div>
    </section>
  )
}

export function SocialButtons({ onPick }) {
  return (
    <div className="social-row">
      <button type="button" className="btn btn-glass social-btn" onClick={() => onPick('Google')}>
        <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
          <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
        </svg>
        Google
      </button>
      <button type="button" className="btn btn-glass social-btn" onClick={() => onPick('Apple')}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.37 12.73c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.23 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.38.81 1.4-.02 2.28-1.27 3.13-2.53.99-1.45 1.39-2.86 1.42-2.93-.03-.01-2.72-1.04-2.75-4.14zM13.78 5.1c.71-.87 1.19-2.07 1.06-3.27-1.03.04-2.27.69-3 1.55-.66.76-1.24 1.98-1.08 3.16 1.14.09 2.31-.58 3.02-1.44z" />
        </svg>
        Apple
      </button>
    </div>
  )
}

export function PasswordField({ id, label, value, onChange, autoComplete, error, children }) {
  const [show, setShow] = useState(false)
  return (
    <div className="field">
      <div className="field-top">
        <label htmlFor={id}>{label}</label>
        {children}
      </div>
      <div className="input-wrap">
        <input id={id} name={id} type={show ? 'text' : 'password'} value={value} onChange={onChange} autoComplete={autoComplete}
          placeholder="••••••••" aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} />
        <button type="button" className="eye" onClick={() => setShow((s) => !s)} aria-label={show ? 'Hide password' : 'Show password'}>
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {error && <span className="field-err" id={`${id}-err`}>{error}</span>}
    </div>
  )
}

