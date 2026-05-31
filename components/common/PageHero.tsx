interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="bg-slate-900 text-white py-32">
      <div className="container-custom">
        <p className="uppercase tracking-[4px] text-green-400">{eyebrow}</p>

        <h1 className="text-6xl font-bold mt-4 max-w-5xl">{title}</h1>

        <p className="mt-8 text-xl text-slate-300 max-w-3xl">{description}</p>
      </div>
    </section>
  );
}
