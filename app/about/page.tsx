export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}

      <section className="bg-slate-900 text-white py-32">
        <div className="container-custom">
          <p className="uppercase tracking-[4px] text-green-400">
            About GreenBridge
          </p>

          <h1 className="text-6xl font-bold mt-4 max-w-4xl">
            Building Sustainable Growth Through Strategic Partnerships And Local
            Expertise
          </h1>

          <p className="mt-8 text-xl text-slate-300 max-w-3xl">
            GreenBridge supports renewable energy, infrastructure development,
            and market-entry initiatives by connecting international
            opportunities with reliable local execution.
          </p>
        </div>
      </section>

      {/* Company Background */}

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-slate-200 h-[450px] rounded-3xl" />
            </div>

            <div>
              <p className="text-green-700 font-semibold">COMPANY BACKGROUND</p>

              <h2 className="text-5xl font-bold mt-3">
                A Bridge Between Opportunity And Execution
              </h2>

              <p className="mt-6 text-slate-600 text-lg">
                GreenBridge is a Bangladesh-based company focused on renewable
                energy, infrastructure support, and strategic market-entry
                facilitation.
              </p>

              <p className="mt-4 text-slate-600">
                We work with project developers, investors, EPC firms,
                consultants, technology providers, and strategic partners
                seeking reliable support in Bangladesh.
              </p>

              <p className="mt-4 text-slate-600">
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-3xl p-10">
              <p className="text-green-700 font-semibold">OUR MISSION</p>

              <h3 className="text-4xl font-bold mt-4">Mission</h3>

              <p className="mt-6 text-slate-600">
                To accelerate renewable energy, infrastructure development and
                strategic investment opportunities through effective
                partnerships, project coordination and local execution
                excellence.
              </p>
            </div>

            <div className="border rounded-3xl p-10">
              <p className="text-green-700 font-semibold">OUR VISION</p>

              <h3 className="text-4xl font-bold mt-4">Vision</h3>

              <p className="mt-6 text-slate-600">
                To become a trusted platform connecting global expertise,
                technology and investment with Bangladesh’s long-term growth
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-green-700 font-semibold">LEADERSHIP</p>

            <h2 className="text-5xl font-bold mt-3">Leadership & Management</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white border rounded-3xl p-8">
              <div className="bg-slate-200 h-64 rounded-2xl" />

              <h3 className="text-2xl font-semibold mt-6">Managing Director</h3>

              <p className="text-green-700 mt-2">Leadership Team</p>

              <p className="mt-4 text-slate-600">
                Responsible for strategic direction, partnership development and
                company growth initiatives.
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-8">
              <div className="bg-slate-200 h-64 rounded-2xl" />

              <h3 className="text-2xl font-semibold mt-6">Project Advisory</h3>

              <p className="text-green-700 mt-2">Technical Support</p>

              <p className="mt-4 text-slate-600">
                Supporting project planning, engineering coordination and
                execution oversight.
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-8">
              <div className="bg-slate-200 h-64 rounded-2xl" />

              <h3 className="text-2xl font-semibold mt-6">
                Strategic Partnerships
              </h3>

              <p className="text-green-700 mt-2">Business Development</p>

              <p className="mt-4 text-slate-600">
                Building local and international collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incorporation */}

      <section className="bg-slate-900 text-white py-28">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-green-400 font-semibold">
              INCORPORATION DETAILS
            </p>

            <h2 className="text-5xl font-bold mt-3">Corporate Information</h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <p className="text-slate-400">Company Name</p>

                <p className="mt-2 text-xl">GreenBridge Limited</p>
              </div>

              <div>
                <p className="text-slate-400">Registered Office</p>

                <p className="mt-2 text-xl">Uttara Tower, Dhaka</p>
              </div>

              <div>
                <p className="text-slate-400">Industry Focus</p>

                <p className="mt-2 text-xl">
                  Renewable Energy & Infrastructure
                </p>
              </div>

              <div>
                <p className="text-slate-400">Business Activities</p>

                <p className="mt-2 text-xl">
                  Development, Coordination, Facilitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
