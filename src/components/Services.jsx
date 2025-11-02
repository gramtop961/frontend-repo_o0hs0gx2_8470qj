import { Scissors, Ruler, Star, Check } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Custom Suits",
    desc: "Hand-tailored suits designed to your silhouette, style, and lifestyle.",
    points: ["Premium fabrics", "Floating canvas", "Personal styling"],
  },
  {
    icon: Ruler,
    title: "Expert Alterations",
    desc: "Pin-point adjustments for a flawless, comfortable fit on any garment.",
    points: ["Hems & tapering", "Jacket shaping", "Dress resizing"],
  },
  {
    icon: Star,
    title: "Bridal & Formal",
    desc: "Impeccable finishes for life’s biggest moments — from gowns to tuxedos.",
    points: ["Delicate fabrics", "Corset adjustments", "Beadwork care"],
  },
  {
    icon: Check,
    title: "Made-to-Measure Shirts",
    desc: "Everyday elegance with shirts built to move with you.",
    points: ["Collar options", "Cuff styles", "Monogramming"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Services</h2>
          <p className="mt-3 text-gray-600">Precision tailoring that blends tradition and modern style. Crafted to last, designed for you.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 grid place-items-center rounded-xl bg-gray-900 text-white">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
