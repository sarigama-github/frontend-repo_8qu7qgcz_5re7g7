import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-teal-700 font-semibold tracking-wide uppercase">Pill-ar of Health Pharmaceuticals</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Medicine so advanced, it looks peer-reviewed
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Trusted by clinicians, admired by journals, and accompanied by a tasteful 3D DNA helix. We engineer therapies with the precision of a pipette and the charm of a teal accent.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/research" className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-3 text-white font-semibold shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Explore Research</Link>
            <Link to="/team" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-teal-700 font-semibold border border-teal-200 shadow-sm hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Meet the Team</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 right-3 text-[10px] text-teal-800/60 select-none">Loads fast, even on ancient desktops</div>
    </section>
  )
}

export default Hero
