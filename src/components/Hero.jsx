import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-fuchsia-400" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full blur-3xl opacity-20 bg-rose-400" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Premium Craftsmanship
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Bespoke Tailoring, Perfect Fit
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              From custom suits to expert alterations — we craft garments that elevate your style and fit like a second skin. Hand-tailored with precision, designed for your life.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold px-5 py-3 shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20"
              >
                Book a Fitting
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 text-gray-900 text-sm font-semibold px-5 py-3 hover:bg-gray-50"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=80&auto=format&fit=crop" alt="client" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" />
                <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=80&auto=format&fit=crop" alt="client" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" />
                <img src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=80&auto=format&fit=crop" alt="client" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" />
              </div>
              <p><span className="font-semibold text-gray-900">1,200+ fits</span> perfected since 2016</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-none mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1592878904946-b3cd4a4d5d73?q=80&w=1200&auto=format&fit=crop"
                alt="Tailor at work"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <p className="text-sm uppercase tracking-wider opacity-90">Made by hand</p>
                <p className="text-lg sm:text-xl font-semibold">Cut to your measure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
