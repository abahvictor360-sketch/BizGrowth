import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check, Loader2, MailCheck } from 'lucide-react'
import AuthShell, { SocialButtons, PasswordField } from '../components/AuthShell.jsx'
import { isEmail } from '../components/validate.js'
import usePageMeta from '../components/usePageMeta.js'

export default function Login() {
  usePageMeta('Sign in', 'Sign in to your BizGrowth workspace to see your analytics, campaigns and automations.')
  const [mode, setMode] = useState('login') // login | reset | reset-sent | done
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [note, setNote] = useState('')

  // No auth backend yet: validate, then simulate the request.
  function fakeRequest(next) {
    setLoading(true)
    setTimeout(() => { setLoading(false); setMode(next) }, 1100)
  }

  function onLogin(e) {
    e.preventDefault()
    const errs = {}
    if (!isEmail(email)) errs.email = 'Enter a valid email address.'
    if (!password) errs.password = 'Enter your password.'
    setErrors(errs)
    if (!Object.keys(errs).length) fakeRequest('done')
  }

  function onReset(e) {
    e.preventDefault()
    if (!isEmail(email)) return setErrors({ email: 'Enter a valid email address.' })
    setErrors({})
    fakeRequest('reset-sent')
  }

  return (
    <AuthShell>
      {mode === 'login' && (
        <form onSubmit={onLogin} noValidate className="auth-step" key="login">
          <span className="eyebrow"><span className="dot" />Welcome back</span>
          <h1>Sign in to <span className="grad-text">BizGrowth</span></h1>
          <p className="muted">Pick up right where you left off.</p>

          <SocialButtons onPick={(p) => setNote(`${p} sign-in is coming soon. Use your email for now.`)} />
          {note && <p className="auth-note" role="status">{note}</p>}
          <div className="divider"><span>or sign in with email</span></div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" value={email}
              onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
            {errors.email && <span className="field-err" id="email-err">{errors.email}</span>}
          </div>
          <PasswordField id="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" error={errors.password}>
            <button type="button" className="link-btn" onClick={() => { setErrors({}); setMode('reset') }}>Forgot password?</button>
          </PasswordField>

          <label className="check">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <span className="box"><Check size={13} /></span>
            Keep me signed in
          </label>

          <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
            {loading ? <Loader2 size={18} className="spin" /> : <>Sign in <ArrowRight size={16} /></>}
          </button>
          <p className="auth-switch">New to BizGrowth? <Link to="/signup">Create an account</Link></p>
        </form>
      )}

      {mode === 'reset' && (
        <form onSubmit={onReset} noValidate className="auth-step" key="reset">
          <button type="button" className="link-btn back" onClick={() => setMode('login')}><ArrowLeft size={16} />Back to sign in</button>
          <h1>Reset your <span className="grad-text">password</span></h1>
          <p className="muted">Enter the email you use for BizGrowth and we’ll send you a link to choose a new password.</p>
          <div className="field">
            <label htmlFor="reset-email">Email</label>
            <input id="reset-email" type="email" autoComplete="email" placeholder="you@company.com" value={email}
              onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'reset-err' : undefined} />
            {errors.email && <span className="field-err" id="reset-err">{errors.email}</span>}
          </div>
          <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
            {loading ? <Loader2 size={18} className="spin" /> : 'Send reset link'}
          </button>
        </form>
      )}

      {(mode === 'reset-sent' || mode === 'done') && (
        <div className="auth-step auth-success" key={mode} role="status">
          <span className="success-ico">{mode === 'done' ? <Check size={30} /> : <MailCheck size={30} />}</span>
          <h1>{mode === 'done' ? 'You’re signed in' : 'Check your inbox'}</h1>
          <p className="muted">
            {mode === 'done'
              ? 'Welcome back! Your dashboard is on its way.'
              : <>If an account exists for <b>{email}</b>, a reset link is on its way.</>}
          </p>
          {mode === 'done'
            ? <Link to="/" className="btn btn-primary">Go to homepage <ArrowRight size={16} /></Link>
            : <button className="btn btn-glass" onClick={() => setMode('login')}><ArrowLeft size={16} />Back to sign in</button>}
        </div>
      )}
    </AuthShell>
  )
}
