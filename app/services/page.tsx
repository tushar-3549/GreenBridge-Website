import Link from "next/link";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <p className="uppercase tracking-[3px] text-xs sm:text-sm text-green-400">
            Our Services
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 max-w-4xl leading-tight">
            Supporting Sustainable Development, Infrastructure Growth And
            Strategic Market Expansion
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl">
            GreenBridge provides project support, coordination services and
            strategic facilitation solutions for organizations seeking
            opportunities in Bangladesh.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">What We Do</p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Core Service Areas</h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-600 text-sm sm:text-base">
            Our services are designed to help developers, investors, EPC firms,
            consultants and international partners successfully plan, coordinate
            and execute projects within Bangladesh.
          </p>
        </div>
      </section>

      {/* Renewable Energy */}
      <section className="pb-16 md:pb-28">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Renewable Energy</p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
                Accelerating Sustainable Energy Development
              </h2>

              <p className="mt-6 text-slate-600 text-sm sm:text-base">
                GreenBridge supports renewable energy initiatives through
                project coordination, development support and industry
                collaboration.
              </p>
            </div>

            <div className="grid gap-5 md:gap-6">
              <div className="bg-white border rounded-2xl p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Solar Development</h3>
                <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                  Supporting utility-scale, commercial and industrial solar opportunities.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">EPC Support</h3>
                <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                  Coordination between project stakeholders, engineering teams
                  and implementation partners.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Project Development</h3>
                <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                  Supporting planning, feasibility assessment and project structuring activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-white py-16 md:py-28">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid gap-5 md:gap-6">
                <div className="border rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Engineering Coordination</h3>
                  <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                    Facilitating communication and alignment between technical
                    teams, consultants and project partners.
                  </p>
                </div>

                <div className="border rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Execution Support</h3>
                  <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                    Assisting project implementation, monitoring and stakeholder coordination.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Infrastructure</p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
                Supporting Complex Infrastructure Initiatives
              </h2>

              <p className="mt-6 text-slate-600 text-sm sm:text-base">
                GreenBridge works alongside project stakeholders to support
                engineering, coordination and execution activities across
                infrastructure sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Entry */}
      <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Market Entry Facilitation
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 max-w-3xl mx-auto leading-tight">
              Our Strategic Differentiator
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-slate-300 text-sm sm:text-base md:text-lg">
              GreenBridge helps international organizations navigate the
              Bangladesh market by connecting them with the right partners,
              vendors and execution resources.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20">
            <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Foreign Partnerships</h3>
              <p className="mt-3 md:mt-4 text-slate-300 text-sm sm:text-base">
                Identifying and facilitating strategic collaboration
                opportunities between local and international organizations.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Vendor Coordination</h3>
              <p className="mt-3 md:mt-4 text-slate-300 text-sm sm:text-base">
                Supporting supplier identification, evaluation and engagement processes.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Bangladesh Execution Support</h3>
              <p className="mt-3 md:mt-4 text-slate-300 text-sm sm:text-base">
                Providing local coordination, stakeholder engagement and
                practical implementation assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-28">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            Looking For A Reliable Partner In Bangladesh?
          </h2>

          <p className="mt-5 md:mt-6 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base">
            Discuss renewable energy projects, infrastructure initiatives and
            strategic market-entry opportunities with our team.
          </p>

          <Link
            href="/contact"
            className="mt-8 md:mt-10 inline-flex items-center justify-center bg-green-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-green-800 transition-colors text-sm sm:text-base"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
