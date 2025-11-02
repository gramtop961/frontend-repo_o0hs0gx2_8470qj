import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />

        <section id="contact" className="py-16 sm:py-24 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Book a Fitting</h2>
                <p className="mt-3 text-gray-600 max-w-xl">
                  Tell us about your occasion and what you’re looking for. We’ll confirm your appointment and prepare fabric swatches tailored to your taste.
                </p>
                <div className="mt-6 space-y-3 text-gray-700">
                  <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-gray-900" /> +1 (555) 123-TAILOR</p>
                  <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-gray-900" /> hello@stitchandstyle.co</p>
                  <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-gray-900" /> 221B Savile Street, Suite 4, London</p>
                  <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                    <Instagram className="w-5 h-5" /> Follow our work
                  </a>
                </div>
              </div>

              <div>
                <form className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900/30" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900/30" placeholder="jane@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <input type="tel" className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900/30" placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Service</label>
                      <select className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900/30">
                        <option>Custom Suit</option>
                        <option>Alterations</option>
                        <option>Bridal / Formal</option>
                        <option>Made-to-Measure Shirt</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900/30" placeholder="Tell us about your event, timeline, and preferences..." />
                    </div>
                  </div>
                  <button type="button" className="mt-6 inline-flex items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold px-6 py-3 shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20">
                    Request Appointment
                  </button>
                  <p className="mt-3 text-xs text-gray-500">We usually reply within 1 business day.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Stitch & Style — All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#gallery" className="hover:text-gray-900">Gallery</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
