export default function ProjectsPreview() {
  const projects = [
    "Renewable Energy Pipeline",
    "Infrastructure Initiatives",
    "Strategic Partnerships",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <p className="text-green-700 font-semibold">PROJECTS</p>

        <h2 className="text-5xl font-bold mt-3">Featured Activities</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <div key={project} className="border rounded-2xl p-8">
              <div className="bg-slate-200 h-48 rounded-xl mb-6" />

              <h3 className="text-xl font-semibold">{project}</h3>

              <p className="mt-3 text-slate-600">
                Ongoing initiatives and development opportunities.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
