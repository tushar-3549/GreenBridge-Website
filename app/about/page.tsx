import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <p className="uppercase tracking-[3px] text-xs sm:text-sm text-green-400">
            About GreenBridge
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 max-w-4xl leading-tight">
            Building Sustainable Growth Through Strategic Partnerships And Local
            Expertise
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl">
            GreenBridge supports renewable energy, infrastructure development,
            and market-entry initiatives by connecting international
            opportunities with reliable local execution.
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="relative h-72 sm:h-80 md:h-[450px] rounded-3xl overflow-hidden border border-slate-100 bg-slate-50">
                <Image
                  src="/sustainable-grid.webp"
                  alt="GreenBridge Sustainable Grid Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Company Background</p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
                A Bridge Between Opportunity And Execution
              </h2>

              <p className="mt-6 text-slate-600 text-sm sm:text-base lg:text-lg">
                GreenBridge is a Bangladesh-based company focused on renewable
                energy, infrastructure support, and strategic market-entry
                facilitation.
              </p>

              <p className="mt-4 text-slate-600 text-sm sm:text-base">
                We work with project developers, investors, EPC firms,
                consultants, technology providers, and strategic partners
                seeking reliable support in Bangladesh.
              </p>

              <p className="mt-4 text-slate-600 text-sm sm:text-base">
                Through strong local knowledge and professional coordination,
                GreenBridge helps transform opportunities into practical and
                sustainable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="border rounded-3xl p-6 md:p-10">
              <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Mission</p>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">Mission</h3>

              <p className="mt-6 text-slate-600 text-sm sm:text-base">
                To accelerate renewable energy, infrastructure development and
                strategic investment opportunities through effective
                partnerships, project coordination and local execution
                excellence.
              </p>
            </div>

            <div className="border rounded-3xl p-6 md:p-10">
              <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Vision</p>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">Vision</h3>

              <p className="mt-6 text-slate-600 text-sm sm:text-base">
                Accelerate Bangladesh's transition toward sustainable energy
                infrastructure by connecting global renewable energy expertise
                with efficient local execution, while creating long-term
                economic, environmental, and social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Leadership</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Leadership &amp; Management</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="bg-slate-50 h-36 md:h-48 rounded-2xl flex items-center justify-center text-green-700 mb-6">
                <svg className="w-12 md:w-16 h-12 md:h-16 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800">Managing Director</h3>
              <p className="text-green-700 mt-1 text-xs font-medium uppercase tracking-wider">Leadership Team</p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Responsible for strategic direction, partnership development and company growth initiatives.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="bg-slate-50 h-36 md:h-48 rounded-2xl flex items-center justify-center text-blue-700 mb-6">
                <svg className="w-12 md:w-16 h-12 md:h-16 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800">Project Advisory</h3>
              <p className="text-green-700 mt-1 text-xs font-medium uppercase tracking-wider">Technical Support</p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Supporting project planning, engineering coordination and execution oversight.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="bg-slate-50 h-36 md:h-48 rounded-2xl flex items-center justify-center text-amber-700 mb-6">
                <svg className="w-12 md:w-16 h-12 md:h-16 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800">Strategic Partnerships</h3>
              <p className="text-green-700 mt-1 text-xs font-medium uppercase tracking-wider">Business Development</p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Building local and international collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Information */}
      <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-28">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Incorporation Details
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Corporate Information</h2>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12">
              <div>
                <p className="text-slate-400 text-sm">Company Name</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl">GreenBridge Energy &amp; Infra Ltd.</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Registered Office</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl">Uttara Tower, Dhaka</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Industry Focus</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl">Renewable Energy &amp; Infrastructure</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Business Activities</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl">Development, Coordination, Facilitation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
