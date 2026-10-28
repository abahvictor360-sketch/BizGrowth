import { useEffect } from 'react'

// Site-wide motion: liquid-glass light that follows the pointer, 3D tilt on `.tilt`
// elements, scroll progress, and a compact navbar once the page scrolls.
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    let tilted = null

    function onMove(e) {
      const el = e.target.closest?.('.glass')
      if (el) {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        el.style.setProperty('--mx', `${x * 100}%`)
        el.style.setProperty('--my', `${y * 100}%`)
        const t = el.closest('.tilt')
        if (t && !reduced) {
          const tr = t.getBoundingClientRect()
          const tx = (e.clientX - tr.left) / tr.width - 0.5
          const ty = (e.clientY - tr.top) / tr.height - 0.5
          t.style.setProperty('--ry', `${tx * 8}deg`)
          t.style.setProperty('--rx', `${-ty * 8}deg`)
          if (tilted && tilted !== t) resetTilt(tilted)
          tilted = t
        }
      } else if (tilted) {
        resetTilt(tilted)
        tilted = null
      }
    }
    function resetTilt(t) {
      t.style.setProperty('--rx', '0deg')
      t.style.setProperty('--ry', '0deg')
    }

    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const max = root.scrollHeight - innerHeight
        root.style.setProperty('--scroll', max > 0 ? (scrollY / max).toFixed(4) : 0)
        root.classList.toggle('scrolled', scrollY > 24)
        ticking = false
      })
    }

    if (finePointer) window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <div className="scroll-progress" aria-hidden="true" />
}
