import { useEffect } from 'react'

const base = 'https://steed-systems-seven.vercel.app'

export default function useSEO(title: string, description: string) {
  useEffect(() => {
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
    let og = document.querySelector('meta[property="og:title"]')
    if (!og) {
      og = document.createElement('meta')
      og.setAttribute('property', 'og:title')
      document.head.appendChild(og)
    }
    og.setAttribute('content', title)
    let ogd = document.querySelector('meta[property="og:description"]')
    if (!ogd) {
      ogd = document.createElement('meta')
      ogd.setAttribute('property', 'og:description')
      document.head.appendChild(ogd)
    }
    ogd.setAttribute('content', description)
    let canon = document.querySelector('link[rel="canonical"]')
    if (!canon) {
      canon = document.createElement('link')
      canon.setAttribute('rel', 'canonical')
      document.head.appendChild(canon)
    }
    canon.setAttribute('href', base + window.location.pathname)
  }, [title, description])
}