import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export function Layout() {
  const [open, setOpen] = React.useState(false)
  const loc = useLocation()
  const nav = [
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur bg-black/80 border-b border-[#2a2a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-32 flex flex-col md:flex-row items-center justify-between relative">
          <Link to="/" className="flex items-center z-10">
            <img src="/headerlogo-small.png" alt="Steed Systems" className="h-24 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {nav.map(n => (
              <Link key={n.to} to={n.to} className={`text-sm font-medium tracking-wide transition-colors ${loc.pathname===n.to?'text-red-400':'text-zinc-300 hover:text-white'}`}>{n.label}</Link>
            ))}
          </nav>
          <div className="hidden md:block z-10">
            <Link to="/assessment" className="btn-primary text-sm">Free Assessment</Link>
          </div>
          <button className="md:hidden text-white -mt-[10px]" onClick={()=>setOpen(!open)} aria-label="menu">{open?<X size={32}/>:<Menu size={32}/>}</button>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
        {open && (
          <div className="md:hidden border-t border-[#2a2a2e] bg-black/95 px-4 py-4 flex flex-col gap-3 items-center text-center">
            {nav.map(n=>(
              <Link key={n.to} to={n.to} onClick={()=>setOpen(false)} className="text-zinc-200">{n.label}</Link>
            ))}
          </div>
        )}
      </header>
      <main className="flex-1"><Outlet/></main>
      <footer className="border-t border-[#2a2a2e] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm text-zinc-400">
          <div>
            <div className="font-bold text-white text-lg mb-2">STEED SYSTEMS</div>
            <p>Digital solutions built for business. Melville, Perth WA.</p>
          </div>
          <div className="flex gap-6">
            {nav.map(n=><Link key={n.to} to={n.to} className="hover:text-white">{n.label}</Link>)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 text-xs text-zinc-600">© {new Date().getFullYear()} Steed Systems. All rights reserved.</div>
      </footer>
    </div>
  )
}