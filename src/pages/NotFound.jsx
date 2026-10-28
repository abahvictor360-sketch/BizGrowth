import { Link } from 'react-router-dom'
import usePageMeta from '../components/usePageMeta.js'

export default function NotFound() {
  usePageMeta('Page not found', null, { noindex: true })
  return (
    <section className="page-hero" style={{ paddingBottom: 80 }}>
      <span className="eyebrow"><span className="dot" />404</span>
      <h1>This page took a <span className="grad-text">different route</span></h1>
      <p className="lead" style={{ marginBottom: 28 }}>The page you’re looking for doesn’t exist or has moved.</p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </section>
  )
}
