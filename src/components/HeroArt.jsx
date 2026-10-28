import { Plus } from 'lucide-react'

// Pure-CSS liquid-glass composition: floating glass tiles + glass cylinders on a dish.
export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <span className="fab" style={{ top: 10, right: 6 }}><Plus size={20} /></span>

      <div className="cube dark k4">
        <span className="blk" style={{ width: 42, height: 22, top: 30, left: 30, background: '#f08bb6' }} />
        <span className="blk" style={{ width: 42, height: 22, top: 56, left: 30, background: '#5fc7c0' }} />
      </div>
      <div className="cube k1">
        <span className="blk" style={{ width: 30, height: 30, top: 26, left: 24, borderRadius: '50%', background: '#5fc7c0' }} />
        <span className="blk" style={{ width: 0, height: 0, top: 24, left: 56, borderRadius: 0, boxShadow: 'none', borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '34px solid #6d5ff5' }} />
        <span className="blk" style={{ width: 34, height: 26, top: 66, left: 40, background: '#3fb3a8' }} />
      </div>
      <div className="cube k2">
        <span className="blk" style={{ width: 46, height: 12, top: 44, left: 24, borderRadius: 6, background: '#7d70ff', transform: 'rotate(-30deg)' }} />
        <span className="blk" style={{ width: 16, height: 16, top: 30, left: 30, borderRadius: '50%', background: '#a99cff' }} />
      </div>
      <div className="cube k3">
        <span className="blk" style={{ width: 40, height: 28, top: 52, left: 22, background: '#f08bb6' }} />
        <span className="blk" style={{ width: 40, height: 36, top: 44, left: 64, borderRadius: 12, background: '#ffc95c' }} />
      </div>

      <div className="dish" />
      <div className="cyl c1" />
      <div className="cyl c2" />
      <div className="cyl c3" />
      <div className="cyl c4" />

      <span className="orb" style={{ width: 34, height: 34, left: '8%', bottom: 210 }} />
      <span className="orb" style={{ width: 18, height: 18, right: '6%', bottom: 60, animationDelay: '-3s' }} />
    </div>
  )
}
