import { useEffect, useRef } from 'react'

// Fades/slides children in when they scroll into view.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timer
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
          // Drop the stagger delay once revealed so hover/tilt transitions respond instantly.
          timer = setTimeout(() => { el.style.transitionDelay = '0ms' }, delay + 1000)
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => { io.disconnect(); clearTimeout(timer) }
  }, [delay])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
