"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/green-bridge.jpg"
            alt="GreenBridge Logo"
            width={40}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
          <span className="font-bold text-xl md:text-2xl">
            <span className="text-green-700">Green</span>
            <span className="text-slate-900">Bridge</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-green-700 ${
                pathname === link.href ? "text-green-700" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-green-50 hover:text-green-700 ${
                  pathname === link.href
                    ? "bg-green-50 text-green-700"
                    : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 bg-green-700 text-white text-center text-base font-semibold px-5 py-3 rounded-lg hover:bg-green-800 transition-colors"
            >
              Get In Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
