function Team() {
  const people = [
    { name: 'Dr. Joy Smiles-A-Lot', role: 'Chief Optimism Officer', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop' },
    { name: 'Prof. Grin Wide', role: 'Head of Beaming', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Dr. Sunny Glow', role: 'Director of Radiance', img: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=800&auto=format&fit=crop' },
    { name: 'Ms. Cheer Beam', role: 'VP of Enthusiasm', img: 'https://images.unsplash.com/photo-1529665253569-6d02b7812375?q=80&w=800&auto=format&fit=crop' },
    { name: 'Mr. Bliss Face', role: 'Manager, Smiles-per-Minute', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
    { name: 'Dr. Happy Vibes', role: 'Senior Delight Engineer', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop' },
  ]

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Meet the Team</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">The happiest researchers you have ever seen. Their smiles are peer-reviewed and clinically significant.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <div key={p.name} className="rounded-xl border border-teal-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={p.img} alt={p.name} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="text-sm text-teal-700">{p.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-xs text-slate-500">Stock photos may be happier than your average lab day. Results not typical.</div>
      </section>
    </main>
  )
}

export default Team
