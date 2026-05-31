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
        <p className="text-green-700 font-semibold">WHY GREENBRIDGE</p>

        <h2 className="text-5xl font-bold mt-3">Strategic Positioning</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {items.map((item) => (
            <div key={item.title} className="bg-white border p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
