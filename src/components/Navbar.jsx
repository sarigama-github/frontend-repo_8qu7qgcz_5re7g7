import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-teal-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-teal-600 grid place-items-center text-white font-bold shadow-sm">
            P
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">Pill-ar of Health</p>
            <p className="text-xs text-teal-700">Pharmaceuticals</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/research" className={({ isActive }) => `${isActive ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Our Groundbreaking Research</NavLink>
          <NavLink to="/team" className={({ isActive }) => `${isActive ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Meet the Team</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Contact</NavLink>
        </nav>

        <Link to="/contact" className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
          Get in touch
        </Link>
      </div>
    </header>
  )
}

export default Navbar
