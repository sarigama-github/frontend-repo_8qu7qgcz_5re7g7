function Research() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Groundbreaking Research</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          We didn't just reinvent the pill—we reverse-engineered the concept of wellness. Our pipeline includes therapies so innovative that sliced bread is filing a cease-and-desist for the phrase "best thing since." From nanoparticle couriers that politely knock before delivering to cells, to AI-guided molecules that can parallel-park in the bloodstream, our work is clinically serious with a clinically unserious success rate of 100% in our dreams.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'TealShield mRNA 2.0', desc: 'A platform that whispers in RNA so mitochondria actually listen.' },
            { title: 'Pill-ar XR Bead Matrix', desc: 'Controlled release beads that are prettier than they should be.' },
            { title: 'Cat-alyzed Therapies', desc: 'Feline-inspired self-grooming polymers that reduce biofouling.' },
            { title: 'HIPAA-Adjacent Cloud', desc: 'Looks compliant. Sounds compliant. Is very respectful of privacy UI/UX.' },
            { title: 'Quantum Placebo', desc: 'Collapses symptoms by observing them with extreme confidence.' },
            { title: 'Sliced Bread v2', desc: 'We call it croutons. Smaller. Crunchier. Disruptive.' }
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-teal-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{card.desc}</p>
              <div className="mt-4 text-xs text-teal-700/70">Whitepaper available upon dramatically whispered NDA.</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Research
