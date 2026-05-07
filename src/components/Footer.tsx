import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import cities from "@/constants/Cities";
import { Services } from "@/constants/Services";
import { Number1, Number2, Number3 } from "@/constants/PhoneNumbers";
import { citiesCovered, foundedYear } from "@/constants/CompanyInfo";

// ── Twitter/X icon (not in lucide-react stable) ──────────────────────────────
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const PHONE_NUMBERS = [
  { label: "Emergency Line 1", number: Number1, href: `tel:${Number1}` },
  { label: "Emergency Line 2", number: Number2, href: `tel:${Number2}` },
  { label: "Emergency Line 3", number: Number3, href: `tel:${Number3}` },
];

const OFFICES = [
  "Rohini Sec 2, Pkt. 4, Delhi",
  "Gaur City 2, Venue 16, Ghaziabad",
  "Mayur Vihar Ph3, DDA Flats, Delhi",
  "Defence Colony, Onco Plus Hospital, Delhi",
];

const SOCIALS = [
  {
    href: "https://www.facebook.com/maaambulanceservice/",
    icon: <Facebook className="w-5 h-5" />,
    label: "Facebook",
  },
  {
    href: "https://x.com/maaambulance",
    icon: <XIcon />,
    label: "X (Twitter)",
  },
  {
    href: "https://www.instagram.com/maaambulanceservices/",
    icon: <Instagram className="w-5 h-5" />,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@maaambulanceservices",
    icon: <Youtube className="w-5 h-5" />,
    label: "YouTube",
  },
];

const Footer = () => {
  const topServices = Services.slice(0, 8);
  const topCities = cities.slice(0, 10);

  return (
    <footer className="bg-gray-900 text-white" aria-label="Site footer">

      {/* ── EMERGENCY BANNER ── */}
      <div className="bg-red-600" role="complementary" aria-label="Emergency contact banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
            <p className="text-sm sm:text-base font-semibold text-white/90">
              24/7 Emergency Ambulance Service · Pan-India
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              {PHONE_NUMBERS.map(({ number, href, label }) => (
                <a
                  key={number}
                  href={href}
                  className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-white hover:text-red-200 transition-colors"
                  aria-label={`${label}: ${number}`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {number}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* ── BRAND COLUMN ── */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                className="inline-block mb-4"
                aria-label="Maa Ambulance Services homepage"
              >
                <span
                  className="text-xl font-extrabold text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Maa <span className="text-red-400">Ambulance</span>
                </span>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
                One of India's most trusted 24/7 ambulance service providers —
                ICU ambulance, ALS ambulance, BLS ambulance, air ambulance, and mobile mortuary services
                across {citiesCovered}+ cities. Founded in {foundedYear} by Mahesh Yadav, Rohini, Delhi.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3" role="list" aria-label="Social media links">
                {SOCIALS.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Maa Ambulance on ${label}`}
                    role="listitem"
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-red-600 border border-white/8 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── SERVICES COLUMN ── */}
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">
                Our Services
              </h4>
              <ul className="space-y-2.5" role="list">
                {topServices.map((service) => (
                  <li key={service.slug} role="listitem">
                    <Link
                      href={`/services/${service.slug.toLowerCase()}`}
                      className="text-sm text-gray-300 hover:text-red-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li role="listitem">
                  <Link
                    href="/services"
                    className="text-sm text-red-400 hover:text-red-300 font-semibold transition-colors"
                  >
                    View all services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* ── CITIES COLUMN ── */}
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">
                Service Areas
              </h4>
              <ul className="space-y-2.5" role="list">
                {topCities.map((city) => (
                  <li key={city.name} role="listitem">
                    <Link
                      href={`/${city.slug.toLowerCase()}`}
                      className="text-sm text-gray-300 hover:text-red-400 transition-colors"
                      title={`Ambulance service in ${city.name}`}
                    >
                      Ambulance in {city.name}
                    </Link>
                  </li>
                ))}
                <li role="listitem">
                  <Link
                    href="/available-areas"
                    className="text-sm text-red-400 hover:text-red-300 font-semibold transition-colors"
                  >
                    View all cities →
                  </Link>
                </li>
              </ul>
            </div>

            {/* ── CONTACT COLUMN ── */}
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">
                Contact & Hours
              </h4>
              <div className="space-y-5">

                {/* Phones */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-red-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      Emergency Hotline
                    </p>
                    {PHONE_NUMBERS.map(({ number, href }) => (
                      <a
                        key={number}
                        href={href}
                        className="block text-sm text-white font-semibold hover:text-red-400 transition-colors"
                        aria-label={`Call ${number}`}
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-red-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                      Email Support
                    </p>
                    <a
                      href="mailto:maaambulance18@gmail.com"
                      className="text-sm text-white hover:text-red-400 transition-colors"
                    >
                      maaambulance18@gmail.com
                    </a>
                  </div>
                </div>

                {/* Offices */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">
                      Our Offices
                    </p>
                    <ul className="space-y-1">
                      {OFFICES.map((addr) => (
                        <li key={addr} className="text-sm text-gray-300 leading-snug">
                          {addr}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-red-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                      Service Hours
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      <p className="text-sm text-white font-semibold">
                        24 / 7 / 365 — Always On
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Office: 24 hours, Emergency: 24 hours
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-gray-600 leading-relaxed max-w-lg">
            Licensed ambulance service provider across India. All ambulances are
            equipped with modern medical equipment and staffed by ACLS-certified
            professionals.
          </p>
          <p className="text-xl text-gray-600 shrink-0">
            Need a website?{" "} <br/>
            <a
              href="https://ravi-kr-sharma.vercel.app/"
              className="text-red-400 hover:text-red-300 font-semibold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact the Developer
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;