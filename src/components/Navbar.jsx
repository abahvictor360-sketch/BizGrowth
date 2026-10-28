import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav-wrap">
      <nav className="nav glass" aria-label="Main">
        <Link to="/" className="brand" aria-label="BizGrowth home">
          <Logo />
          <span>Biz<b>Growth</b></span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <Link to="/contact" className="btn btn-glass btn-sm">Sign in</Link>
          <Link to="/pricing" className="btn btn-dark btn-sm">Start for free <ArrowRight size={14} /></Link>
          <button className="nav-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <div className={`mobile-menu glass ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={close}>{l.label}</NavLink>
        ))}
        <Link to="/pricing" className="btn btn-primary btn-block" onClick={close} style={{ marginTop: 8 }}>Start for free</Link>
      </div>
    </header>
  )
}
