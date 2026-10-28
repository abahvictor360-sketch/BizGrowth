import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer glass glass-dark">
      <div>
        <Link to="/" className="brand"><Logo /><span>Biz<b>Growth</b></span></Link>
        <p className="about">Smart digital solutions that help ambitious businesses measure, automate and grow, all from one beautiful workspace.</p>
      </div>
      <div>
        <p className="footer-h">Product</p>
        <ul>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/solutions">Integrations</Link></li>
        </ul>
      </div>
      <div>
        <p className="footer-h">Company</p>
        <ul>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/about">Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <p className="footer-h">Resources</p>
        <ul>
          <li><Link to="/pricing">FAQ</Link></li>
          <li><Link to="/contact">Support</Link></li>
          <li><Link to="/contact">Book a demo</Link></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <span>© {year} BizGrowth. All rights reserved.</span>
        <span>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  )
}
