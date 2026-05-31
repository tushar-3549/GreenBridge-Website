import { services } from "@/data/services";

export default function ServiceCards() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <p className="text-green-700 font-semibold text-center">SERVICES</p>

        <h2 className="text-center text-5xl font-bold mt-3">Core Services</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                p-8
                rounded-2xl
                border
                bg-white
                hover:shadow-xl
                transition
              "
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>

              <p className="mt-4 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
