import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero" style={{ paddingBottom: 80 }}>
      <span className="eyebrow"><span className="dot" />404</span>
      <h1>This page took a <span className="grad-text">different route</span></h1>
      <p className="lead" style={{ marginBottom: 28 }}>The page you’re looking for doesn’t exist or has moved.</p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </section>
  )
}
