import { useEffect, useRef, useState } from 'react'

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Animates the numeric part of a string like "$38.7M", "2,390+" or "10.8x" when it scrolls into view.
export default function CountUp({ value, duration = 1600 }) {
  const match = value.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/)
  const ref = useRef(null)
  const [text, setText] = useState(() => (match && !reduced() ? value.replace(match[2], '0') : value))

  useEffect(() => {
    if (!match) return
    const [, pre, num, post] = match
    const target = parseFloat(num.replace(/,/g, ''))
    const decimals = (num.split('.')[1] || '').length
    const fmt = (n) => pre + n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + post
    if (reduced()) return

    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 4)
        setText(fmt(target * eased))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(ref.current)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref} aria-label={value}>{text}</span>
}
