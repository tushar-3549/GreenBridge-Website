import Link from "next/link";
import Image from "next/image";

const links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Partners",
    href: "/partners",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="container-custom h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/green-bridge.jpg"
            alt="GreenBridge Logo"
            width={56}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="font-bold text-2xl text-green-700">GreenBridge</span>
        </Link>

        <nav className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-green-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
