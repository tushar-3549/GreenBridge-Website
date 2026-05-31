export default function TrustBar() {
  const items = [
    "Renewable Energy",
    "Infrastructure Development",
    "Strategic Partnerships",
    "Project Coordination",
    "Bangladesh Execution Support",
  ];

  return (
    <section className="bg-white border-y">
      <div className="container-custom">
        <div className="py-8 flex flex-wrap justify-center gap-8">
          {items.map((item) => (
            <span key={item} className="text-slate-600 font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
