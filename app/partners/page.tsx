export default function PartnersPage() {
  return (
    <main>
      {/* Hero */}

      <section className="bg-slate-900 text-white py-32">
        <div className="container-custom">
          <p className="uppercase tracking-[4px] text-green-400">
            Partners & Network
          </p>

          <h1 className="text-6xl font-bold mt-4 max-w-5xl">
            Building Strong Partnerships Across Industries And Markets
          </h1>

          <p className="mt-8 text-xl text-slate-300 max-w-3xl">
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

          <h2 className="text-5xl font-bold mt-3">Collaborative Ecosystem</h2>

          <p className="max-w-3xl mx-auto mt-8 text-slate-600">
            We believe sustainable growth is built through strong partnerships.
            Our network includes technical experts, EPC firms, consultants and
            strategic collaborators who contribute to successful outcomes.
          </p>
        </div>
      </section>

      {/* OEMs */}

      <section className="pb-28">
        <div className="container-custom">
          <p className="text-green-700 font-semibold">OEM NETWORK</p>

          <h2 className="text-5xl font-bold mt-3">
            Technology & Equipment Partners
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="
                  bg-white
                  border
                  rounded-3xl
                  h-40
                  flex
                  items-center
                  justify-center
                "
              >
                <span className="text-slate-400">OEM Partner</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-slate-600 max-w-3xl">
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

              <h2 className="text-5xl font-bold mt-3">
                Engineering, Procurement And Construction Network
              </h2>

              <p className="mt-8 text-slate-600">
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

          <h2 className="text-5xl font-bold mt-3">
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

      <section className="bg-slate-900 text-white py-32">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-green-400 font-semibold">
              STRATEGIC AFFILIATIONS
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Expanding Opportunities Through Collaboration
            </h2>

            <p className="max-w-3xl mx-auto mt-8 text-slate-300">
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
          <h2 className="text-5xl font-bold">
            Interested In Partnering With GreenBridge?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600">
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
