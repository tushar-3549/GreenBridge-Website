export default function PartnersPage() {
  return (
    <main>
      {/* Hero */}

      {/* <section className="bg-slate-900 text-white py-32"> */}
      <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <p className="uppercase tracking-[4px] text-green-400">
            Partners & Network
          </p>

          {/* <h1 className="text-6xl font-bold mt-4 max-w-5xl"> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 max-w-5xl leading-tight">
            Building Strong Partnerships Across Industries And Markets
          </h1>

          {/* <p className="mt-8 text-xl text-slate-300 max-w-3xl"> */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl">
            GreenBridge collaborates with industry stakeholders, technology
            providers, consultants and project partners to support successful
            project development and execution.
          </p>
        </div>
      </section>

      {/* Intro */}

      <section className="section-padding">
        <div className="container-custom text-center">
          <p className="text-green-700 font-semibold">OUR NETWORK</p>

          {/* <h2 className="text-5xl font-bold mt-3">Collaborative Ecosystem</h2> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Collaborative Ecosystem</h2>

          {/* <p className="max-w-3xl mx-auto mt-8 text-slate-600"> */}
          <p className="max-w-3xl mx-auto mt-6 text-slate-600 text-sm sm:text-base">
            We believe sustainable growth is built through strong partnerships.
            Our network includes technical experts, EPC firms, consultants and
            strategic collaborators who contribute to successful outcomes.
          </p>
        </div>
      </section>

      {/* OEMs */}

      <section className="pb-28">
        <div className="container-custom text-center">
          <p className="text-green-700 font-semibold">OEM NETWORK</p>

          {/* <h2 className="text-5xl font-bold mt-3"> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Technology & Equipment Partners
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              {
                name: "SolTech Modules",
                category: "Tier-1 PV Modules",
                icon: (
                  <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" />
                  </svg>
                )
              },
              {
                name: "AeroWind Systems",
                category: "Wind Turbines",
                icon: (
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                )
              },
              {
                name: "InvertPower",
                category: "String & Central Inverters",
                icon: (
                  <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                name: "GridVolt",
                category: "Substation Transformers",
                icon: (
                  <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
                  </svg>
                )
              }
            ].map((partner) => (
              <div
                key={partner.name}
                className="
                  bg-white
                  border
                  border-slate-100
                  rounded-3xl
                  p-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  shadow-sm
                  hover:shadow-md
                  transition
                  duration-300
                "
              >
                <div className="bg-slate-50 p-4 rounded-full mb-4">
                  {partner.icon}
                </div>
                <h4 className="font-semibold text-slate-800">{partner.name}</h4>
                <p className="text-xs text-slate-400 mt-1">{partner.category}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-slate-600 max-w-3xl text-center mx-auto">
            GreenBridge seeks collaboration with reputable equipment
            manufacturers and technology providers supporting renewable energy
            and infrastructure development.
          </p>
        </div>
      </section>

      {/* EPC Associates */}

      <section className="bg-white py-28">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-green-700 font-semibold">EPC ASSOCIATES</p>

              {/* <h2 className="text-5xl font-bold mt-3"> */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
                Engineering, Procurement And Construction Network
              </h2>

              {/* <p className="mt-8 text-slate-600"> */}
              <p className="mt-6 md:mt-8 text-slate-600 text-sm sm:text-base">
                We engage with EPC organizations and technical specialists to
                support project planning, coordination and implementation
                activities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold">
                  Renewable Energy EPC Partners
                </h3>

                <p className="mt-4 text-slate-600">
                  Supporting solar and sustainable energy development
                  initiatives.
                </p>
              </div>

              <div className="border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold">
                  Infrastructure EPC Partners
                </h3>

                <p className="mt-4 text-slate-600">
                  Assisting engineering and infrastructure execution projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultants */}

      <section className="py-28">
        <div className="container-custom">
          <p className="text-green-700 font-semibold">CONSULTANTS</p>

          {/* <h2 className="text-5xl font-bold mt-3"> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Advisory & Technical Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white border rounded-3xl p-8">
              <h3 className="text-2xl font-semibold">Technical Advisors</h3>

              <p className="mt-4 text-slate-600">
                Supporting engineering evaluation, project planning and
                technical coordination.
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-8">
              <h3 className="text-2xl font-semibold">Industry Consultants</h3>

              <p className="mt-4 text-slate-600">
                Providing sector-specific knowledge and market insights.
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-8">
              <h3 className="text-2xl font-semibold">Strategic Advisors</h3>

              <p className="mt-4 text-slate-600">
                Assisting business growth, partnerships and project development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Affiliations */}

      {/* <section className="bg-slate-900 text-white py-32"> */}
      <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-green-400 font-semibold">
              STRATEGIC AFFILIATIONS
            </p>

            {/* <h2 className="text-5xl font-bold mt-4"> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Expanding Opportunities Through Collaboration
            </h2>

            {/* <p className="max-w-3xl mx-auto mt-8 text-slate-300"> */}
            <p className="max-w-3xl mx-auto mt-6 md:mt-8 text-slate-300 text-sm sm:text-base">
              GreenBridge actively develops relationships with organizations,
              industry groups and strategic partners that contribute to
              long-term project success and sustainable development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold">
                International Collaboration
              </h3>

              <p className="mt-4 text-slate-300">
                Supporting cross-border business opportunities and partnerships.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold">Industry Engagement</h3>

              <p className="mt-4 text-slate-300">
                Building relationships with stakeholders across multiple
                sectors.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold">
                Development Partnerships
              </h3>

              <p className="mt-4 text-slate-300">
                Facilitating collaboration that supports long-term project
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-28">
        <div className="container-custom text-center">
          {/* <h2 className="text-5xl font-bold"> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Interested In Partnering With GreenBridge?
          </h2>

          {/* <p className="mt-6 max-w-2xl mx-auto text-slate-600"> */}
          <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base">
            We welcome discussions with OEMs, EPC firms, consultants and
            strategic partners seeking opportunities in Bangladesh.
          </p>

          <button
            className="
              mt-10
              bg-green-700
              text-white
              px-8
              py-4
              rounded-xl
              hover:bg-green-800
              transition
            "
          >
            Become A Partner
          </button>
        </div>
      </section>
    </main>
  );
}
