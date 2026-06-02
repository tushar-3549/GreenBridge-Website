import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-28">
      <div className="container-custom text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight">
          Looking To Develop Projects Or Enter The Bangladesh Market?
        </h2>

        <p className="mt-5 md:mt-6 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Discuss renewable energy, infrastructure, or strategic partnership
          opportunities with GreenBridge.
        </p>

        <Link
          href="/contact"
          className="mt-8 md:mt-10 inline-flex items-center justify-center bg-green-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors text-sm sm:text-base"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
