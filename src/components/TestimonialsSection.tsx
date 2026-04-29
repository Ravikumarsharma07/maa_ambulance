"use client";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import SubHeading from "./smallComponents/SubHeading";
import { useEffect, useState, useCallback, useRef } from "react";
import { Number3 } from "@/constants/PhoneNumbers";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    initials: "RK",
    rating: 5,
    text: "Maa Ambulance saved my father's life. Their response time was incredible — they reached us within 8 minutes and the paramedics were highly skilled. Truly grateful for their service.",
    date: "2024-01-10",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    initials: "PS",
    rating: 5,
    text: "Professional service with modern equipment. The ambulance was clean and well-equipped. The medical staff was caring and ensured my mother was comfortable throughout the journey.",
    date: "2024-01-05",
  },
  {
    name: "Dr. Anil Patel",
    location: "Bangalore",
    initials: "AP",
    rating: 5,
    text: "As a doctor, I can vouch for the quality of their medical equipment and trained staff. I regularly refer patients to Maa Ambulance Services for emergency transport. Highly recommended.",
    date: "2023-12-28",
  },
  {
    name: "Meera Singh",
    location: "Chennai",
    initials: "MS",
    rating: 5,
    text: "During a medical emergency at 2 AM, they were our lifeline. The dispatcher was calm and helpful, and the ambulance arrived quickly. Their 24/7 service is truly reliable.",
    date: "2023-12-20",
  },
  {
    name: "Vikram Gupta",
    location: "Hyderabad",
    initials: "VG",
    rating: 5,
    text: "Excellent service with transparent pricing. No hidden charges and the staff explained everything clearly. The ICU ambulance had all necessary equipment for my wife's critical condition.",
    date: "2023-12-15",
  },
  {
    name: "Sunita Reddy",
    location: "Pune",
    initials: "SR",
    rating: 5,
    text: "Fast, reliable, and professional. The paramedics were well-trained and handled the emergency with great care. Would definitely recommend to anyone needing ambulance services.",
    date: "2023-12-10",
  },
];

// Avatar color pool — cycles through distinct hues
const AVATAR_COLORS = [
  { bg: "bg-red-100", text: "text-red-700" },
  { bg: "bg-amber-100", text: "text-amber-700" },
  { bg: "bg-emerald-100", text: "text-emerald-700" },
  { bg: "bg-sky-100", text: "text-sky-700" },
  { bg: "bg-violet-100", text: "text-violet-700" },
  { bg: "bg-rose-100", text: "text-rose-700" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const total = testimonials.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((p) => (p === 0 ? total - 1 : p - 1)),
    [total]
  );

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) dx > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-24 bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading title="What Families Say" />
          <p
            id="testimonials-heading"
            className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Read testimonials from families who trusted us during their medical
            emergencies. Your feedback helps us continue providing the best
            ambulance services across India.
          </p>
        </div>

        {/* ── CAROUSEL ── */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          {/* NAV BUTTONS */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-3 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* TRACK */}
          <div className="overflow-hidden mx-6 sm:mx-8" aria-live="polite">
            <div
              ref={trackRef}
              className="flex gap-5 sm:gap-6 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(calc(-${current * 100}% - ${current * (typeof window !== "undefined" && window.innerWidth >= 640 ? 24 : 20)}px))` }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {testimonials.map((t, idx) => {
                const color = AVATAR_COLORS[idx % AVATAR_COLORS.length];
                const isActive = idx === current;
                return (
                  <article
                    key={idx}
                    aria-hidden={!isActive}
                    className={`
                      shrink-0 w-full bg-white/5 border rounded-2xl p-6 sm:p-8 flex flex-col gap-5
                      transition-all duration-500
                      ${isActive
                        ? "border-red-500/40 bg-white/8 opacity-100"
                        : "border-white/5 opacity-40"
                      }
                    `}
                  >
                    {/* Stars */}
                    <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < t.rating ? "text-amber-400 fill-amber-400" : "text-gray-600"}`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">
                      "{t.text}"
                    </blockquote>

                    {/* Author */}
                    <footer className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${color.bg} flex items-center justify-center shrink-0`}
                          aria-hidden="true"
                        >
                          <span className={`text-xs font-bold ${color.text}`}>{t.initials}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{t.name}</p>
                          <p className="text-xs text-gray-500">{t.location}</p>
                        </div>
                      </div>
                      <time
                        dateTime={t.date}
                        className="text-xs text-gray-600 shrink-0"
                      >
                        {new Date(t.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                    </footer>
                  </article>
                );
              })}
            </div>
          </div>

          {/* DOT INDICATORS */}
          <div className="flex justify-center gap-2 mt-7" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={idx === current}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                  idx === current ? "w-8 bg-red-500" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold text-base sm:text-lg">
              Had a good experience with us?
            </p>
            <p className="text-gray-400 text-sm mt-0.5">
              Your review helps other families in emergencies.
            </p>
          </div>
          <a
            href={`tel:${Number3}`}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 active:scale-95 text-gray-900 font-bold text-sm px-6 py-3.5 rounded-2xl transition-all shadow-sm shrink-0 w-full sm:w-auto justify-center"
            aria-label="Leave a Google review for Maa Ambulance Services"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden="true" />
            Leave a Review
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;