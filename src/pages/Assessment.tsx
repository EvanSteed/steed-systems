import React from 'react'
export default function Assessment() {
  const [form, setForm] = React.useState({ name:'', business:'', email:'', url:'', industry:'', challenge:'', info:'' })
  const [status, setStatus] = React.useState<string|null>(null)
  const [errors, setErrors] = React.useState<Record<string,string>>({})
  const validate = () => {
    const e: Record<string,string> = {}
    if (!form.name.trim()) e.name='Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email='Valid email required'
    if (!form.business.trim()) e.business='Required'
    return e
  }
  const submit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setStatus('Thanks! Your assessment request has been received. We will be in touch.')
  }
  const field = (k: keyof typeof form, label: string, type='text', required=false) => (
    <div>
      <label className="field-label">{label}{required?' *':''}</label>
      <input type={type} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} className="field-input" />
      {errors[k] && <div className="field-error">{errors[k]}</div>}
    </div>
  )
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">Is Your Online Presence Working for Your Business?</h1>
      <p className="text-[var(--muted)] mb-8">Your website and digital presence are often the first impression potential customers have. Find out what's working, what's holding you back and where you could improve. Complimentary, no obligation.</p>
      <div className="card p-4 mb-8 text-sm text-[var(--muted)]">
        <div className="font-semibold text-[var(--text)] mb-2">The assessment examines:</div>
        <ol className="list-decimal list-inside space-y-1">
          <li>Website design and usability</li><li>Mobile responsiveness</li><li>Website functionality</li><li>Search engine visibility</li><li>Google Business Profile</li><li>Social media presence</li><li>Customer enquiry pathways</li><li>Opportunities for improvement</li>
        </ol>
      </div>
      <form onSubmit={submit} className="space-y-4">
        {field('name','Name', 'text', true)}
        {field('business','Business name', 'text', true)}
        {field('email','Email', 'email', true)}
        {field('url','Website URL')}
        {field('industry','Industry')}
        <div>
          <label className="field-label">Main business challenge</label>
          <textarea value={form.challenge} onChange={e=>setForm({...form,challenge:e.target.value})} rows={3} className="field-input" />
        </div>
        <div>
          <label className="field-label">Additional information</label>
          <textarea value={form.info} onChange={e=>setForm({...form,info:e.target.value})} rows={3} className="field-input" />
        </div>
        <button type="submit" className="btn-primary">Request assessment</button>
        {status && <div className="text-[var(--text)] text-sm mt-3">{status}</div>}
      </form>
    </div>
  )
}
