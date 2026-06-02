import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[80vh] md:min-h-[90vh] flex items-center py-16 md:py-0">
      <div className="container-custom">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[3px] text-xs sm:text-sm text-green-700 mb-4">
            Renewable Energy • Infrastructure
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building Sustainable Infrastructure and Strategic Partnerships for
            Bangladesh
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl">
            GreenBridge enables renewable energy development, infrastructure
            execution and international market entry through trusted local
            expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-green-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors text-sm sm:text-base"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:border-green-700 hover:text-green-700 transition-colors text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
