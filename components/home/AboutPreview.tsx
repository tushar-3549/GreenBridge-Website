import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative h-64 sm:h-80 md:h-[400px] w-full overflow-hidden rounded-2xl border bg-slate-50">
            <Image
              src="/corporate-solar.webp"
              alt="GreenBridge Corporate Office"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-green-700 font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">Who We Are</p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Building Partnerships For Sustainable Growth
            </h2>

            <p className="mt-6 text-slate-600 text-sm sm:text-base lg:text-lg">
              GreenBridge is a Bangladesh-based company supporting renewable
              energy development, infrastructure projects, and strategic
              market-entry initiatives.
            </p>

            <p className="mt-4 text-slate-600 text-sm sm:text-base">
              We connect international partners, EPC firms, consultants and
              investors with reliable local execution support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
