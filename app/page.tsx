export default function BrightsideCleaningWebsite() {
  const services = [
    {
      title: 'Standard Cleaning',
      description: 'Routine home cleaning including kitchens, bathrooms, bedrooms, and living spaces.',
      price: 'Starting at $99',
    },
    {
      title: 'Deep Cleaning',
      description: 'Detailed top-to-bottom cleaning for homes needing extra care and attention.',
      price: 'Starting at $199',
    },
    {
      title: 'Move-In / Move-Out',
      description: 'Complete cleaning services to prepare homes for new tenants or homeowners.',
      price: 'Custom Quote',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      review: 'Brightside Cleaning transformed my home. Professional, punctual, and incredibly thorough.',
    },
    {
      name: 'Daniel R.',
      review: 'The deep cleaning service exceeded expectations. Every room felt brand new.',
    },
    {
      name: 'Jessica T.',
      review: 'Reliable weekly cleaning service that saves me so much time every month.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Brightside Cleaning</h1>
            <p className="text-sm text-slate-500">Professional House Cleaning Services</p>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm font-medium hover:text-blue-600">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-blue-600">
              About
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-blue-600">
              Reviews
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-600">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Trusted by homeowners across the city
            </div>

            <h2 className="text-5xl font-black leading-tight md:text-6xl">
              A Cleaner Home Without the Stress
            </h2>

            <p className="mt-6 max-w-xl text-lg text-blue-50">
              Brightside Cleaning provides dependable, detail-oriented house cleaning services designed to give you more free time and peace of mind.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-4 font-semibold text-blue-700 shadow-xl transition hover:scale-105"
              >
                Book a Cleaning
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
                alt="Professional house cleaning"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
          <h3 className="text-4xl font-black text-blue-600">500+</h3>
          <p className="mt-2 text-slate-600">Homes Cleaned</p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
          <h3 className="text-4xl font-black text-blue-600">4.9★</h3>
          <p className="mt-2 text-slate-600">Average Client Rating</p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
          <h3 className="text-4xl font-black text-blue-600">7 Days</h3>
          <p className="mt-2 text-slate-600">Weekly Availability</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Services
          </p>
          <h2 className="mt-4 text-4xl font-black">Cleaning Packages for Every Home</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Flexible cleaning options tailored to your schedule, lifestyle, and cleaning needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600">
                ✨
              </div>

              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 text-slate-600">{service.description}</p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">{service.price}</span>
                <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop"
              alt="Cleaning team"
              className="rounded-[2rem] shadow-2xl"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Reliable Cleaning Professionals You Can Trust
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Our trained cleaning specialists focus on consistency, professionalism, and attention to detail. We use safe cleaning products and customized checklists to ensure every visit exceeds expectations.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-100 p-5">
                <h3 className="font-bold">Eco-Friendly Products</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Safe cleaning solutions for families and pets.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <h3 className="font-bold">Flexible Scheduling</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Weekly, bi-weekly, monthly, or one-time visits.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <h3 className="font-bold">Fully Insured</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Peace of mind with professional coverage.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <h3 className="font-bold">Satisfaction Guarantee</h3>
                <p className="mt-2 text-sm text-slate-600">
                  We make it right if you're not completely satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Client Reviews
          </p>
          <h2 className="mt-4 text-4xl font-black">What Homeowners Are Saying</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="mb-4 text-3xl">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-600">“{testimonial.review}”</p>
              <p className="mt-6 font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-black leading-tight">
            Ready for a Spotless Home?
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Book your first cleaning today and enjoy a cleaner, healthier living space without the hassle.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold shadow-xl transition hover:bg-blue-700"
          >
            Request Your Free Quote
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 rounded-[2rem] bg-white p-10 shadow-xl md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Get Your Free Cleaning Estimate
            </h2>

            <p className="mt-6 text-slate-600">
              Tell us about your home and cleaning needs. We’ll provide a fast, personalized quote.
            </p>

            <div className="mt-8 space-y-4 text-slate-700">
              <p>📍 Hamilton, Ontario</p>
              <p>📞 416-666-3682</p>
              <p>✉️ BrightSideC@hotmail.com</p>
            </div>
          </div>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your cleaning needs"
              className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-slate-500 md:flex-row">
          <p>© 2026 Brightside Cleaning. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-600">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-600">
              Google Reviews
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
