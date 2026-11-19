import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  { title: 'Website Development', desc: 'Custom business websites, landing pages and redesigns built for speed, clarity and conversion.' },
  { title: 'Digital Consulting', desc: 'Practical digital presence assessments, strategy and workflow improvements.' },
  { title: 'Digital Marketing', desc: 'SEO, Google Business Profile optimisation and social media strategy.' },
  { title: 'Photography & Content', desc: 'Commercial photography and AI-assisted creative production.' },
  { title: 'AI & Automation', desc: 'Practical AI workflows, automation and enquiry handling for small business.' },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-16 text-center">
          <h1 className="text-6xl sm:text-7xl leading-tight mb-6 font-bold">digital solutions.<br/>built for business.</h1>
          <p className="text-[var(--muted)] text-xl mb-10 max-w-2xl mx-auto">Helping local Perth businesses build a stronger online presence through website development, digital consulting and practical technology solutions.</p>
        </div>
      </section>

      <section className="bg-[#141416] py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8">Your website and digital presence are often the first impression potential customers have. Find out what's working, what's holding you back and where you could improve.</p>
        <Link to="/assessment" className="btn-primary inline-flex items-center gap-2">Get Your Free Digital Assessment <ArrowRight size={18}/></Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Core services</h2>
        <p className="text-[var(--muted)] max-w-3xl mb-12 mx-auto text-center">Steed Systems provides practical, personalised digital solutions that help small businesses establish, improve and manage their online presence. Direct communication with the owner, transparent pricing and long-term support.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {services.slice(0,3).map(s=>(
            <div key={s.title} className="card p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-[var(--muted)] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 stagger mt-6">
          {services.slice(3).map(s=>(
            <div key={s.title} className="card p-6 text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-[var(--muted)] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why choose Steed Systems</h2>
        <ul className="flex flex-col gap-4 mx-auto w-fit">
          {['Direct communication with the business owner','Personalised solutions, not generic packages','Transparent, accessible pricing','Practical recommendations based on your business','Ongoing support and long-term relationships','Combines web, marketing, photography and AI'].map(i=>(
            <li key={i} className="flex items-center gap-3 text-[var(--muted)] whitespace-nowrap"><CheckCircle2 className="mt-0.5 shrink-0" size={20}/>{i}</li>
          ))}
        </ul>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How it works</h2>
        <div className="grid md:grid-cols-4 gap-6 stagger">
          {['DISCOVER','PLAN','BUILD','SUPPORT'].map((s,i)=>(
            <div key={s} className="card p-6 text-center">
              <div className="font-bold text-3xl mb-2"><span className="text-[var(--accent)]">0{i+1} - </span><span className="text-white">{s}</span></div>
              <p className="text-[var(--muted)] text-sm mt-2">{['Understand your business and goals.','Create a tailored digital strategy.','Design and build your solution.','Ongoing support and improvements.'][i]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#141416] py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-4">Is Your Online Presence Working for Your Business?</h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8">Get a complimentary digital presence assessment. No obligation.</p>
        <Link to="/assessment" className="btn-primary inline-flex items-center gap-2">Get Your Free Digital Assessment <ArrowRight size={18}/></Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Frequently asked questions</h2>
        <div className="grid sm:grid-cols-2 gap-4 stagger">
          {[
            ['How long does a website take?','Typically 2-4 weeks depending on scope and content.'],
            ['Do I need to provide content?','We can work with your content or help create it.'],
            ['Is the assessment really free?','Yes, complimentary with no obligation.'],
            ['What does the assessment include?','A review of design, mobile, SEO, Google Business Profile and enquiry paths.'],
            ['Do you offer ongoing support?','Yes, through tailored monthly arrangements.'],
            ['Can you redesign an existing site?','Yes, redesigns are a core service.'],
          ].map(([q,a])=>(
            <div key={q} className="card p-5 text-center">
              <div className="font-semibold text-[var(--text)] mb-1">{q}</div>
              <div className="text-[var(--muted)] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to improve your digital presence?</h2>
        <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Discuss a digital project <ArrowRight size={18}/></Link>
      </section>
    </>
  )
}
