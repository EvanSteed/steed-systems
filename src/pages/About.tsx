import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'About Steed Systems | Digital Consulting Perth & Melville'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta) }
    meta.setAttribute('content', 'Meet Evan, founder. Helping small businesses across Melville and Perth grow through website development, SEO, digital marketing and practical technology solutions.')
  }, [])
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About Steed Systems</h1>
      <p className="text-[var(--muted)] mb-6 text-lg">Helping small businesses realise their full potential.</p>
      <p className="text-[var(--muted)] mb-6">It was established with a simple goal: to help small businesses make better use of technology, strengthen their online presence and unlock opportunities for growth.</p>
      <p className="text-[var(--muted)] mb-6">Every business, regardless of its size or budget, deserves access to the digital tools and expertise that can help it succeed. Technology shouldn't be unnecessarily complicated or feel out of reach. It should be practical, accessible and provide genuine value.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Meet Evan</h2>
      <img src="/meetevan.png" alt="Evan Steed" className="w-64 h-64 object-cover rounded-lg border-4 border-black mb-6" style={{ filter: 'contrast(1.15) saturate(1.2)' }} />
      <p className="text-[var(--muted)] mb-6">Locally based in Melville, supporting businesses across Perth.</p>
      <p className="text-[var(--muted)] mb-6">With a Bachelor of Commerce from The University of Western Australia, majoring in Management, Marketing, Entrepreneurship and Innovation, Evan has developed a broad understanding of business operations, customer behaviour and the role effective marketing plays in business growth.</p>
      <p className="text-[var(--muted)] mb-6">This is complemented by previous IT experience with Wesfarmers, practical website development experience and years of working directly with customers and businesses.</p>
      <p className="text-[var(--muted)] mb-6">Having lived and worked in the Melville area for many years, Evan has developed a strong connection to the local community and an appreciation for the challenges faced by small business owners. This local understanding helps shape a more personal approach to consulting, with an emphasis on building genuine relationships and delivering solutions that meet the needs of individual businesses.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">A practical approach to digital growth.</h2>
      <p className="text-[var(--muted)] mb-6">Good digital consulting starts with understanding the business, not simply selling technology.</p>
      <p className="text-[var(--muted)] mb-6">We provide practical digital solutions designed to improve how businesses operate, present themselves and connect with customers. From professional website development and search engine optimisation (SEO) to digital marketing, AI and workflow automation, the focus is on identifying opportunities that provide meaningful benefits.</p>
      <p className="text-[var(--muted)] mb-6">Every business has different requirements, challenges and objectives. Recommendations are therefore tailored to the individual business, with an emphasis on sensible investments, transparent pricing and solutions that can grow alongside the business.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Built on trust, transparency and long-term relationships.</h2>
      <p className="text-[var(--muted)] mb-6">Investing in digital services is an important decision, particularly for small business owners who need to make every dollar count.</p>
      <p className="text-[var(--muted)] mb-6">We place a strong emphasis on honest advice, clear communication, dependable service and delivering on commitments. Clients should understand what they're investing in, why it matters and what they can realistically expect.</p>
      <p className="text-[var(--muted)] mb-6">The aim isn't simply to complete a project and move on. It's to establish lasting relationships, become a trusted point of contact and continue helping businesses adapt as their needs and opportunities evolve.</p>

      <p className="text-[var(--text)] font-semibold mt-10">Your business has potential. Steed Systems is here to help you make the most of it.</p>
      <p className="text-[var(--muted)] mt-4 text-sm">Steed Systems | Digital Solutions Built for Business.</p>
    </div>
  )
}