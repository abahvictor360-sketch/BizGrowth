import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Check, Loader2, PartyPopper } from 'lucide-react'
import AuthShell, { SocialButtons, PasswordField } from '../components/AuthShell.jsx'
import { isEmail } from '../components/validate.js'
import usePageMeta from '../components/usePageMeta.js'

const PLANS = { starter: 'Starter', growth: 'Growth', scale: 'Scale' }

function strength(pw) {
  let s = 0
  if (pw.length >= 8) s++
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++
  if (/\d/.test(pw)) s++
  if (/[^A-Za-z0-9]/.test(pw) || pw.length >= 14) s++
  return s
}
const LEVELS = ['Too short', 'Weak', 'Fair', 'Good', 'Strong']

export default function Signup() {
  usePageMeta('Create your account', 'Create a free BizGrowth account and start your 14-day trial. No credit card required.')
  const [params] = useSearchParams()
  const plan = PLANS[params.get('plan')] || 'Growth'
  const [form, setForm] = useState({ name: '', email: '', company: '', password: '', terms: false })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [note, setNote] = useState('')
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const score = form.password ? strength(form.password) : 0

  function onSubmit(e) {
    e.preventDefault()
    const errs = {}
    if (form.name.trim().length < 2) errs.name = 'Enter your full name.'
    if (!isEmail(form.email)) errs.email = 'Enter a valid work email.'
    if (form.password.length < 8) errs.password = 'Use at least 8 characters.'
    if (!form.terms) errs.terms = 'Please accept the terms to continue.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    // No auth backend yet: simulate account creation.
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1200)
  }

  if (done) {
    return (
      <AuthShell>
        <div className="auth-step auth-success" role="status">
          <span className="success-ico"><PartyPopper size={30} /></span>
          <h1>Welcome, {form.name.trim().split(' ')[0]}!</h1>
          <p className="muted">Your <b>{plan}</b> trial has started. We’ve sent a confirmation to <b>{form.email}</b>.</p>
          <Link to="/" className="btn btn-primary">Go to homepage <ArrowRight size={16} /></Link>
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell>
      <form onSubmit={onSubmit} noValidate className="auth-step">
        <span className="eyebrow"><span className="dot" />{plan} plan · 14-day free trial</span>
        <h1>Create your <span className="grad-text">account</span></h1>
        <p className="muted">Start growing in minutes. No credit card required.</p>

        <SocialButtons onPick={(p) => setNote(`${p} sign-up is coming soon. Use your email for now.`)} />
        {note && <p className="auth-note" role="status">{note}</p>}
        <div className="divider"><span>or sign up with email</span></div>

        <div className="auth-grid">
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" autoComplete="name" placeholder="Jane Doe" value={form.name} onChange={set('name')}
              aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
            {errors.name && <span className="field-err" id="name-err">{errors.name}</span>}
          </div>
          <div className="field">
            <label htmlFor="company">Company <span className="optional">(optional)</span></label>
            <input id="company" autoComplete="organization" placeholder="Company Ltd" value={form.company} onChange={set('company')} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" type="email" autoComplete="email" placeholder="jane@company.com" value={form.email} onChange={set('email')}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
          {errors.email && <span className="field-err" id="email-err">{errors.email}</span>}
        </div>
        <PasswordField id="password" label="Password" value={form.password} onChange={set('password')} autoComplete="new-password" error={errors.password} />
        <div className="meter" data-score={score} aria-live="polite">
          <div className="meter-bars">{[1, 2, 3, 4].map((i) => <span key={i} className={i <= score ? 'on' : ''} />)}</div>
          <span className="meter-label">{form.password ? LEVELS[score] : 'Use 8+ characters with a mix of letters, numbers and symbols'}</span>
        </div>

        <label className="check">
          <input type="checkbox" checked={form.terms} onChange={set('terms')} aria-describedby={errors.terms ? 'terms-err' : undefined} />
          <span className="box"><Check size={13} /></span>
          <span>I agree to the <a href="#terms" onClick={(e) => e.preventDefault()}>Terms</a> and <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a></span>
        </label>
        {errors.terms && <span className="field-err" id="terms-err">{errors.terms}</span>}

        <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
          {loading ? <Loader2 size={18} className="spin" /> : <>Create account <ArrowRight size={16} /></>}
        </button>
        <p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p>
      </form>
    </AuthShell>
  )
}
