import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Research from './components/Research'
import Team from './components/Team'
import Contact from './components/Contact'
import CatCorner from './components/CatCorner'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="rounded-xl border border-teal-100 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-900">Clinically Clean Design</h3>
                    <p className="mt-2 text-slate-700">A white-and-teal interface calibrated for trust, clarity, and very serious nodding.</p>
                  </div>
                  <div className="rounded-xl border border-teal-100 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-900">Looks HIPAA-Compliant</h3>
                    <p className="mt-2 text-slate-700">We feature tasteful locks and privacy notes. Real compliance still encouraged.</p>
                  </div>
                  <div className="rounded-xl border border-teal-100 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-900">Optimized to Load Fast</h3>
                    <p className="mt-2 text-slate-700">Lean assets, modern bundling, and no waiting room magazines required.</p>
                  </div>
                </div>
                <CatCorner />
              </section>
            </>
          }
        />
        <Route path="/research" element={<Research />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="border-t border-teal-100 py-10 text-center text-sm text-slate-500 bg-white">
        © {new Date().getFullYear()} Pill-ar of Health Pharmaceuticals. Tastefully teal since right now.
      </footer>
    </div>
  )
}

export default App
