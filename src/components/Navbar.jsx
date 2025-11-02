import { Menu, X, Scissors } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md/60 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-gray-900">
            <span className="grid place-items-center w-9 h-9 rounded-md bg-gradient-to-br from-rose-500 to-fuchsia-500 text-white">
              <Scissors className="w-5 h-5" />
            </span>
            <span className="text-lg">Stitch & Style</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold px-4 py-2 shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 transition"
            >
              Book a Fitting
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 text-gray-700"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold px-4 py-2 mt-2"
            >
              Book a Fitting
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
