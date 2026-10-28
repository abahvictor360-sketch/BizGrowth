import { useEffect } from 'react'

const SITE = 'BizGrowth'

// Sets the document title and meta description for the current page.
export default function usePageMeta(title, description, { noindex = false } = {}) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Smart digital solutions for growing businesses`
    const set = (name, content) => {
      let el = document.head.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    if (description) set('description', description)
    set('robots', noindex ? 'noindex' : 'index, follow')
    const canonical = document.head.querySelector('link[rel="canonical"]')
    if (canonical) canonical.href = window.location.origin + window.location.pathname
  }, [title, description, noindex])
}
