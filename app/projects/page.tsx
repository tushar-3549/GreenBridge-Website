import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <p className="uppercase tracking-[3px] text-xs sm:text-sm text-green-400">
            Projects &amp; Activities
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 max-w-5xl leading-tight">
            Building Opportunities Through Strategic Development And Collaboration
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl">
            GreenBridge actively explores renewable energy opportunities,
            infrastructure initiatives and strategic partnerships that contribute
            to sustainable growth and long-term value creation.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Project Portfolio</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Areas Of Engagement</h2>
          <p className="max-w-3xl mx-auto mt-6 text-slate-600 text-sm sm:text-base">
            While GreenBridge continues to expand its project portfolio, our
            current activities focus on opportunity development, partnership
            building and project facilitation across key sectors.
          </p>
        </div>
      </section>

      {/* Pipeline Projects */}
      <section className="pb-16 md:pb-28">
        <div className="container-custom">
          <div className="mb-8 md:mb-12">
            <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Pipeline Projects</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2">Development Opportunities</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border rounded-3xl p-6 md:p-8">
              <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">Pipeline</span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-5 md:mt-6">Utility-Scale Solar Development</h3>
              <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                Exploring renewable energy opportunities and project development initiatives within Bangladesh.
              </p>
            </div>
            <div className="bg-white border rounded-3xl p-6 md:p-8">
              <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">Pipeline</span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-5 md:mt-6">Commercial Solar Solutions</h3>
              <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                Supporting commercial and industrial solar adoption through project planning and coordination.
              </p>
            </div>
            <div className="bg-white border rounded-3xl p-6 md:p-8">
              <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">Pipeline</span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-5 md:mt-6">Infrastructure Support Programs</h3>
              <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                Identifying opportunities to support engineering and infrastructure execution initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptual Projects */}
      <section className="bg-white py-16 md:py-28">
        <div className="container-custom">
          <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Conceptual Projects</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Strategic Development Concepts</h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-16">
            <div className="border rounded-3xl p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Renewable Energy Expansion</h3>
              <p className="mt-4 md:mt-6 text-slate-600 text-sm sm:text-base">
                Conceptual initiatives focused on expanding sustainable energy infrastructure and
                supporting long-term energy transition goals.
              </p>
            </div>
            <div className="border rounded-3xl p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Infrastructure Collaboration</h3>
              <p className="mt-4 md:mt-6 text-slate-600 text-sm sm:text-base">
                Exploring opportunities for engineering support, stakeholder coordination and
                project execution partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 md:py-28">
        <div className="container-custom">
          <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Partnerships</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Strategic Collaboration Initiatives</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
            <div className="bg-white border rounded-3xl p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">International Partners</h3>
              <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                Engaging with international organizations seeking opportunities in Bangladesh.
              </p>
            </div>
            <div className="bg-white border rounded-3xl p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">EPC &amp; Technical Associates</h3>
              <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                Building relationships with EPC firms and technical specialists.
              </p>
            </div>
            <div className="bg-white border rounded-3xl p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Industry Consultants</h3>
              <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                Collaborating with experienced advisors to support project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Activities */}
      <section className="bg-slate-900 text-white py-16 md:py-28">
        <div className="container-custom">
          <p className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Ongoing Activities</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Current Focus Areas</h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-16">
            <div className="border border-white/10 rounded-3xl p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Opportunity Assessment</h3>
              <p className="mt-3 md:mt-4 text-slate-300 text-sm sm:text-base">
                Evaluating renewable energy and infrastructure opportunities for future development.
              </p>
            </div>
            <div className="border border-white/10 rounded-3xl p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Partnership Development</h3>
              <p className="mt-3 md:mt-4 text-slate-300 text-sm sm:text-base">
                Expanding local and international networks to support long-term project success.
              </p>
            </div>
            <div className="border border-white/10 rounded-3xl p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Market Engagement</h3>
              <p className="mt-3 md:mt-4 text-slate-300 text-sm sm:text-base">
                Supporting organizations exploring entry into the Bangladesh market.
              </p>
            </div>
            <div className="border border-white/10 rounded-3xl p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Strategic Planning</h3>
              <p className="mt-3 md:mt-4 text-slate-300 text-sm sm:text-base">
                Developing frameworks for future renewable energy and infrastructure initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
