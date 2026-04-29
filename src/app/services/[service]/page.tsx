import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Shield, Clock, Heart, MapPin, ChevronDown } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallBtn from "@/components/FloatingCallBtn";
import ContactSection from "@/components/ContactSection";
import ServiceAreas from "@/components/ServiceAreas";
import ServicesSection from "@/components/ServicesSection";

import { Services, getServiceBySlug } from "@/constants/Services";
import { Number2 } from "@/constants/PhoneNumbers";
import { SITE_URL } from "@/constants/SiteURL";

// ─── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.service);

  if (!service) {
    return { title: "Service Not Found - Maa Ambulance Services" };
  }

  const siteUrl = SITE_URL;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: `${service.name}, ${service.name} in India, emergency ambulance, Maa Ambulance Services`,
    alternates: { canonical: `${siteUrl}/services/${service.slug}` },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${siteUrl}/services/${service.slug}`,
      title: service.metaTitle,
      description: service.metaDescription,
      siteName: "Maa Ambulance Services",
      images: [{ url: `${siteUrl}${service.imageURL}`, width: 1200, height: 630, alt: service.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${siteUrl}${service.imageURL}`],
    },
  };
}

export function generateStaticParams() {
  return Services.map((service) => ({ service: service.slug }));
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.service);
  if (!service) notFound();

  const relatedServicesData = Services.filter((s) =>
    service.relatedServices?.includes(s.slug)
  );

  const PHONE_NUMBER =`${Number2}`;
  const siteUrl = SITE_URL;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    image: `${siteUrl}${service.imageURL}`,
    provider: {
      "@type": "EmergencyService",
      name: "Maa Ambulance Services",
      telephone: PHONE_NUMBER,
      url: siteUrl,
    },
    areaServed: { "@type": "Country", name: "India" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      service.faqs?.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })) || [],
  };

  return (
    <main className="bg-[#F8F7F4] mt-8 min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {service.faqs && service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <FloatingCallBtn />
      <Header />

      {/* ── MOBILE STICKY CALL BAR ── */}
      {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-2 bg-white border-t border-gray-100 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center justify-center gap-3 bg-red-600 text-white font-bold text-base py-3 rounded-2xl w-full tracking-wide active:scale-95 transition-transform"
          aria-label={`Call Maa Ambulance at ${PHONE_NUMBER}`}
        >
          <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
          Call {PHONE_NUMBER}
        </a>
      </div> */}

      <article className="pt-24 md:pt-36 pb-28 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── BREADCRUMB ── */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1 text-xs text-gray-400 mb-6 font-medium tracking-wide"
          >
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <Link href="/services" className="hover:text-red-600 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <span className="text-gray-700">{service.name}</span>
          </nav>

          {/* ── MAIN GRID ── */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">

            {/* ══ LEFT COLUMN ══ */}
            <div className="w-full lg:w-[65%] min-w-0">

              {/* Live badge */}
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                </span>
                Emergency Medical Transport
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {service.name}
              </h1>

              <p className="text-sm sm:text-base text-gray-500 font-medium mb-4">
                Pan-India Emergency Response · Maa Ambulance Services
              </p>

              {/* Verified bar */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-l-4 border-amber-500 bg-amber-50 px-4 py-2.5 rounded-r-xl mb-6 text-xs sm:text-sm text-amber-800 font-medium">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" aria-hidden="true" />
                  Verified Medical Transport
                </span>
                <span className="hidden sm:inline text-amber-300">|</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  Available 24/7 Across India
                </span>
                <span className="hidden sm:inline text-amber-300">|</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  DGCA Certified Fleet
                </span>
              </div>

              {/* HERO IMAGE */}
              <div className="relative h-56 sm:h-72 md:h-[380px] w-full rounded-2xl overflow-hidden mb-8 border border-gray-100">
                <Image
                  src={service.imageURL}
                  alt={`${service.name} — Maa Ambulance Services`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 sm:p-5">
                  <span className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    📍 Nationwide Coverage
                  </span>
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                    ⚡ 30–60 Min Response
                  </span>
                </div>
              </div>

              {/* TRUST BADGES */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10" role="list" aria-label="Service highlights">
                {[
                  { icon: <Clock className="w-6 h-6 text-red-600" aria-hidden="true" />, label: "24/7 Dispatch" },
                  { icon: <Heart className="w-6 h-6 text-red-600" aria-hidden="true" />, label: "ICU-Level Care" },
                  { icon: <Shield className="w-6 h-6 text-red-600" aria-hidden="true" />, label: "Safe Transit" },
                  { icon: <MapPin className="w-6 h-6 text-red-600" aria-hidden="true" />, label: "Pan-India Reach" },
                ].map((item) => (
                  <div
                    key={item.label}
                    role="listitem"
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-white border border-gray-100 rounded-2xl text-center"
                  >
                    {item.icon}
                    <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* BODY CONTENT */}
              <div
                className="
                  prose prose-sm sm:prose-base max-w-none text-gray-600
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-3
                  prose-h3:text-xl prose-h3:mt-7
                  prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
                  prose-li:marker:text-red-500
                  prose-strong:text-gray-800
                "
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                dangerouslySetInnerHTML={{ __html: service.content }}
              />

              {/* STATS STRIP */}
              <div className="mt-10 grid grid-cols-3 divide-x divide-gray-100 bg-gray-900 rounded-2xl overflow-hidden" aria-label="Service statistics">
                {[
                  { value: "500+", label: "Missions Completed" },
                  { value: "98%", label: "Patient Safety Rate" },
                  { value: "28", label: "States Covered" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center justify-center py-5 px-2 text-center">
                    <span
                      className="text-2xl sm:text-3xl font-extrabold text-red-400 leading-none"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 font-medium mt-1 leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CERTIFICATIONS */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {[
                  { icon: "🏥", text: "DGCA Approved Aircraft Operations" },
                  { icon: "📋", text: "ACLS & PALS Certified Crew" },
                  { icon: "🔒", text: "HIPAA-Compliant Data Handling" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 flex-1 bg-white border border-gray-100 rounded-xl px-4 py-3"
                  >
                    <span className="text-xl shrink-0" aria-hidden="true">{item.icon}</span>
                    <span className="text-xs text-gray-600 font-medium leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <section className="mt-12" aria-labelledby="faq-heading">
                  <div className="flex items-center gap-3 mb-6">
                    <h2
                      id="faq-heading"
                      className="text-2xl sm:text-3xl font-extrabold text-gray-900"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white divide-y divide-gray-100">
                    {service.faqs.map((faq, idx) => (
                      <details key={idx} className="group">
                        <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none hover:bg-red-50 transition-colors">
                          <span className="font-semibold text-sm sm:text-base text-gray-800 leading-snug">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className="w-5 h-5 text-red-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </summary>
                        <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* ══ RIGHT SIDEBAR ══ */}
            <aside
              className="hidden lg:flex w-full lg:w-[35%] flex-col gap-6 lg:sticky top-28 h-fit"
              aria-label="Quick contact and related services"
            >
              {/* CTA CARD */}
              <div className="bg-gray-900 rounded-3xl overflow-hidden">
                <div className="h-1 bg-red-600" aria-hidden="true" />
                <div className="p-6">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400 mb-2">
                    Emergency Line · Available 24/7
                  </p>
                  <h3
                    className="text-2xl font-extrabold text-white leading-tight mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Need Help Right Now?
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    Our dispatch coordinators are standing by. One call mobilizes the nearest ambulance to your location immediately.
                  </p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-5 rounded-2xl w-full text-base transition-colors active:scale-95"
                    aria-label={`Call emergency line at ${PHONE_NUMBER}`}
                  >
                    <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
                    {PHONE_NUMBER}
                  </a>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-xs text-gray-500">Dispatchers online now</span>
                  </div>
                </div>
              </div>

              {/* STATS (sidebar) */}
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-gray-100">
                  {[
                    { value: "500+", label: "Missions Flown" },
                    { value: "98%", label: "Safety Rate" },
                  ].map((stat) => (
                    <div key={stat.label} className="py-5 text-center">
                      <p
                        className="text-3xl font-extrabold text-red-600 leading-none"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-400 font-medium mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 px-5 py-3 text-center text-xs text-gray-500 font-medium bg-gray-50">
                  Serving 28 States · All Major Airports
                </div>
              </div>

              {/* RELATED SERVICES */}
              {relatedServicesData && relatedServicesData.length > 0 && (
                <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                      Related Services
                    </h4>
                    <span className="text-[10px] bg-red-50 text-red-600 font-semibold px-2.5 py-1 rounded-full border border-red-100">
                      {relatedServicesData.length} available
                    </span>
                  </div>
                  <ul className="divide-y divide-gray-50">
                    {relatedServicesData.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={related.link}
                          className="group flex items-center justify-between px-5 py-3.5 hover:bg-red-50 transition-colors"
                        >
                          <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">
                            {related.name}
                          </span>
                          <ChevronRight
                            className="w-4 h-4 text-gray-300 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CERTIFICATIONS (sidebar) */}
              <div className="bg-white border border-gray-100 rounded-3xl p-5">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                  Certifications & Trust
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: "🏥", text: "DGCA Approved Aircraft Operations" },
                    { icon: "📋", text: "ACLS & PALS Certified Medical Crew" },
                    { icon: "🔒", text: "HIPAA-Compliant Patient Data" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-sm shrink-0"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                      <span className="text-xs text-gray-600 font-medium leading-snug">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </article>

      <ServicesSection />
      <ServiceAreas />
      <ContactSection />
      <Footer />
    </main>
  );
}