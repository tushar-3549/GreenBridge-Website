import { services } from "@/data/services";

export default function ServiceCards() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <p className="text-green-700 font-semibold text-center text-xs sm:text-sm uppercase tracking-wider">Services</p>

        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Core Services</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 md:p-8 rounded-2xl border bg-white hover:shadow-xl transition"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-slate-600 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
