export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container-custom">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[4px] text-green-700 mb-4">
            Renewable Energy • Infrastructure
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Building Sustainable Infrastructure and Strategic Partnerships for
            Bangladesh
          </h1>

          <p className="mt-8 text-xl text-slate-600">
            GreenBridge enables renewable energy development, infrastructure
            execution and international market entry through trusted local
            expertise.
          </p>

          <div className="flex gap-4 mt-10">
            <button
              className="
                bg-green-700
                text-white
                px-8
                py-4
                rounded-lg
              "
            >
              Explore Services
            </button>

            <button
              className="
                border
                px-8
                py-4
                rounded-lg
              "
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
