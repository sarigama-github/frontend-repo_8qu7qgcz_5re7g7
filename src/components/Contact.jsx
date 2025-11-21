import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact Us</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          Our interface is designed to look extremely compliant. Please do not include sensitive health information. If you must, select "Prefer not to disclose" for blood type.
        </p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-6 sm:grid-cols-2 bg-white p-6 rounded-xl border border-teal-100 shadow-sm">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Full Name</label>
            <input required className="mt-1 w-full rounded-lg border-slate-300 focus:border-teal-500 focus:ring-teal-500" placeholder="Dr. Ada Lovelace" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-teal-500 focus:ring-teal-500" placeholder="you@clinic.com" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Organization</label>
            <input className="mt-1 w-full rounded-lg border-slate-300 focus:border-teal-500 focus:ring-teal-500" placeholder="Prestigious Medical Journal, Inc." />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Blood Type (for scientific vibes)</label>
            <select className="mt-1 w-full rounded-lg border-slate-300 focus:border-teal-500 focus:ring-teal-500">
              <option>Prefer not to disclose</option>
              <option>O+</option>
              <option>O-</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-lg border-slate-300 focus:border-teal-500 focus:ring-teal-500" placeholder="Lets collaborate on something journal-cover-worthy." />
          </div>

          <div className="sm:col-span-2 flex items-start gap-2 text-xs text-slate-600">
            <input id="hipaa-look" type="checkbox" className="mt-1 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
            <label htmlFor="hipaa-look">I acknowledge this form looks HIPAA-compliant. It features locks, teal checkmarks, and a tasteful privacy statement, but avoids collecting actual PHI.</label>
          </div>

          <div className="sm:col-span-2">
            <button type="submit" className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-3 text-white font-semibold shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Submit</button>
          </div>

          {submitted && (
            <div className="sm:col-span-2 text-sm text-teal-700">Thank you! Your message has been received and sanitized for compliance aesthetics.</div>
          )}
        </form>

        <div className="mt-8 text-xs text-slate-500">Disclaimer: This is a demo UI. Do not submit real patient information.</div>
      </section>
    </main>
  )
}

export default Contact
