import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
}

export default function Button({ label, href = "#" }: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        px-8
        py-4
        rounded-xl
        bg-green-700
        text-white
        font-medium
        hover:bg-green-800
        transition
      "
    >
      {label}
    </Link>
  );
}
