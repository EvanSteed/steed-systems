import { Link } from 'react-router-dom'
import { Globe, BarChart3, Megaphone, Camera, Cpu } from 'lucide-react'

const groups = [
  { icon: Globe, title: 'Website Development', items: ['Custom business websites','Landing pages','Website redesigns','Mobile-responsive development','Contact forms and lead generation','Hosting and deployment','Performance optimisation'] },
  { icon: BarChart3, title: 'Digital Consulting', items: ['Digital presence assessments','Online business strategy','Digital workflow improvements','Technology recommendations','Website and conversion optimisation','Ongoing digital support'] },
  { icon: Megaphone, title: 'Digital Marketing', items: ['Search engine optimisation','Google Business Profile optimisation','Social media strategy','Content planning','Online visibility improvements'] },
  { icon: Camera, title: 'Photography & Content', items: ['Commercial photography','Business and product photography','Social media content creation','AI-assisted creative production','Marketing graphics and promotional material'] },
  { icon: Cpu, title: 'AI & Automation', items: ['AI-powered business workflows','Administrative automation','AI assistants and knowledge systems','Customer enquiry automation','Practical AI implementation'] },
]

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Services</h1>
      <p className="text-[var(--muted)] max-w-3xl mb-12">Practical digital services for small businesses, delivered personally. Specialist and emerging services are consultation-based.</p>
      <div className="grid md:grid-cols-2 gap-8 stagger">
        {groups.map(g=>{
          const Icon=g.icon
          return (
            <div key={g.title} className="card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[var(--accent)] text-[var(--text)]"><Icon size={22}/></div>
                <h2 className="text-2xl font-semibold">{g.title}</h2>
              </div>
              <ul className="space-y-2">
                {g.items.map(i=>(<li key={i} className="text-[var(--muted)] text-sm flex gap-2"><span className="text-[var(--muted)]">›</span>{i}</li>))}
              </ul>
            </div>
          )
        })}
      </div>
      <div className="mt-12 text-center">
        <Link to="/assessment" className="btn-primary inline-flex items-center gap-2">Get Your Free Digital Assessment</Link>
      </div>
    </div>
  )
}
