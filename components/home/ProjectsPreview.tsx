import Link from "next/link";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "Renewable Energy Pipeline",
      description: "Utility-scale solar, commercial PV integration, and sustainable power development opportunities.",
      tag: "Solar & Wind",
      bgClass: "bg-green-50 text-green-700",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      )
    },
    {
      title: "Infrastructure Initiatives",
      description: "Engineering coordination and project execution support for modern public and private initiatives.",
      tag: "Execution Support",
      bgClass: "bg-blue-50 text-blue-700",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Strategic Partnerships",
      description: "Connecting global technology providers, OEMs, and consultants with Bangladesh implementation networks.",
      tag: "Market Entry",
      bgClass: "bg-amber-50 text-amber-700",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <p className="text-green-700 font-semibold uppercase tracking-wider">PROJECTS</p>

        <h2 className="text-5xl font-bold mt-3 text-slate-900">Featured Activities</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <div key={project.title} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <div className={`w-16 h-16 rounded-2xl ${project.bgClass} flex items-center justify-center mb-6`}>
                  {project.icon}
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {project.tag}
                </span>

                <h3 className="text-2xl font-semibold mt-2 text-slate-800">{project.title}</h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link href="/projects" className="text-green-700 hover:text-green-800 font-semibold inline-flex items-center gap-2 group text-sm">
                  Learn More 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
