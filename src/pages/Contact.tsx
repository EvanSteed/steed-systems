import React from 'react'
export default function Contact() {
  const [form, setForm] = React.useState({ name:'', business:'', email:'', phone:'', website:'', services:'', budget:'', desc:'' })
  const [status, setStatus] = React.useState<string|null>(null)
  const [errors, setErrors] = React.useState<Record<string,string>>({})
  const validate = () => {
    const e: Record<string,string> = {}
    if (!form.name.trim()) e.name='Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email='Valid email required'
    if (!form.desc.trim()) e.desc='Required'
    return e
  }
  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    try {
      await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus('Thanks! Your enquiry has been received.')
    } catch {
      setStatus('Sorry, something went wrong.')
    }
  }
  const field = (k: keyof typeof form, label: string, type='text', required=false) => (
    <div className="flex flex-col">
      <label className="field-label">{label}{required?' *':''}</label>
      <input type={type} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} className="field-input" />
      {errors[k] && <div className="field-error">{errors[k]}</div>}
    </div>
  )
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-[var(--muted)] text-sm mb-8">Fill out the form below for general enquiries.</p>
      <form onSubmit={submit} className="card p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          {field('name','Name','text',true)}
          {field('business','Business name')}
          {field('email','Email','email',true)}
          {field('phone','Phone')}
          {field('website','Website')}
          {field('services','Services required')}
          {field('budget','Estimated budget')}
        </div>
        <div className="flex flex-col">
          <label className="field-label">Project description *</label>
          <textarea value={form.desc} onChange={e=>setForm({...form,desc:e.target.value})} rows={4} className="field-input" />
          {errors.desc && <div className="field-error">{errors.desc}</div>}
        </div>
        <button type="submit" className="btn-primary">Send enquiry</button>
        {status && <div className="text-[var(--text)] text-sm mt-3">{status}</div>}
      </form>
    </div>
  )
}
