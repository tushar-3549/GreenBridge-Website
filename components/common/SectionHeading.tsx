interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-green-700 font-semibold uppercase tracking-wide">
        {eyebrow}
      </p>

      <h2 className="text-5xl font-bold mt-3">{title}</h2>

      {description && (
        <p
          className={`
            mt-6
            text-slate-600
            max-w-3xl
            ${center ? "mx-auto" : ""}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}
