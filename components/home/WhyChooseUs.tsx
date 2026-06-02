export default function WhyChooseUs() {
  const items = [
    {
      title: "Local Expertise",
      desc: "Deep understanding of Bangladesh's project environment.",
    },
    {
      title: "Strategic Network",
      desc: "Strong connections with industry stakeholders.",
    },
    {
      title: "Execution Focus",
      desc: "Practical support from planning to implementation.",
    },
    {
      title: "Long-Term Partnerships",
      desc: "Building sustainable business relationships.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Why GreenBridge</p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Strategic Positioning</h2>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-16">
          {items.map((item) => (
            <div key={item.title} className="bg-white border p-6 md:p-8 rounded-2xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-slate-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
