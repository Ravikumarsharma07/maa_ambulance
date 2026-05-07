import { citiesCovered, clientsServed } from "@/constants/CompanyInfo";
import Image from "next/image";

// ── Partner data ───────────────────────────────────────────────────────────────
// imageUrl: path inside /public/partners/ — copy your logos there.
// Partners without a logo yet use the text monogram fallback automatically.

const ROW_ONE = [
  { name: "IFIE Delhi / Ludhiana",       short: "IFIE", location: "Delhi · Ludhiana",  imageUrl: "/partners/ifie.png" },
  { name: "GAIL Gas Ltd.",               short: "GAIL", location: "Delhi · Ludhiana",  imageUrl: "/partners/gail.png" },
  { name: "NTPC Ltd.",                   short: "NTPC", location: "Jharkhand",         imageUrl: "/partners/ntpc.png" },
  { name: "Indraprastha Gas Ltd.",       short: "IGL",  location: "Delhi",             imageUrl: "/partners/igl.png" },
  { name: "DFM Foods Ltd.",              short: "DFM",  location: "Delhi NCR",         imageUrl: "/partners/dfm.png" },
  { name: "Air India",                   short: "AI",   location: "Gurugram",          imageUrl: "/partners/air-india.png" },
  { name: "Apollo Hospital",             short: "APL",  location: "Greater Noida",     imageUrl: "/partners/apollo-hospital.png" },
  { name: "Allianz Partners",            short: "ALZ",  location: "Delhi",             imageUrl: "/partners/allianz-partners.png" },
];

const ROW_TWO = [
  { name: "Mahanadi Coalfields Ltd.",    short: "MCL",  location: "Odisha",            imageUrl: "/partners/mcl.png" },
  { name: "Sugar Mill Farms",            short: "SMF",  location: "Uttar Pradesh",     imageUrl: "/partners/sugar-mill.png" },
  { name: "DS Blood Bank",               short: "DSB",  location: "Ghaziabad",         imageUrl: "/partners/ds-blood-bank.png" },
  { name: "Ministry of External Affairs",short: "MEA",  location: "India",             imageUrl: "/partners/mea.png" },
  { name: "Bangladeshi Ministry",        short: "BGD",  location: "Delhi",             imageUrl: "/partners/bangladesh.png" },
  { name: "ESS KAY Furnishers",          short: "ESK",  location: "Delhi",             imageUrl: "/partners/ess-kay.png" },
  { name: "Shailchandra Enterprises",    short: "SCE",  location: "Bihar",             imageUrl: "/partners/shailchandra.png" },
  { name: "Health Care Pvt. Ltd.",       short: "HCL",  location: "India",             imageUrl: "/partners/hcl.png" },
];

const ROW_ONE_LOOP = [...ROW_ONE, ...ROW_ONE];
const ROW_TWO_LOOP = [...ROW_TWO, ...ROW_TWO];

// ── Card ──────────────────────────────────────────────────────────────────────
type Partner = { name: string; short: string; location: string; imageUrl: string | null };

const PartnerCard = ({ name, short, location, imageUrl }: Partner) => (
  <div
    className="flex items-center gap-3.5 bg-white/8 hover:bg-white/12 border border-white/8 hover:border-red-500/30 rounded-2xl px-5 py-4 shrink-0 select-none min-w-[210px] transition-all duration-200"
    aria-label={`Partner: ${name}`}
  >
    {/* Logo / monogram */}
    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white flex items-center justify-center shrink-0 border border-gray-100">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`${name} logo`}
          width={68}
          height={68}
          className="w-full h-full object-contain"
          unoptimized
        />
      ) : (
        <span className="text-xs font-extrabold text-red-600 tracking-tight leading-none text-center px-1">
          {short}
        </span>
      )}
    </div>

    {/* Text */}
    <div className="min-w-0">
      <p className="text-sm font-bold text-white whitespace-nowrap leading-snug truncate max-w-[150px]">
        {name}
      </p>
      <p className="text-xs text-gray-500 whitespace-nowrap font-medium mt-0.5">
        {location}
      </p>
    </div>
  </div>
);

// ── Section ───────────────────────────────────────────────────────────────────
const PartnersSection = () => {
  return (
    <section
      className="py-16 sm:py-24 bg-gray-900 overflow-hidden"
      aria-labelledby="partners-heading"
    >
      {/* ── HEADER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">

        <div className="inline-flex items-center gap-2 bg-red-900/40 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          Verified Partnerships
        </div>

        <h2
          id="partners-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Trusted by Leading{" "}
          <span className="text-red-400">Organizations Across India</span>
        </h2>

        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Maa Ambulance has formal tie-ups with government bodies, PSUs,
          hospitals, and private enterprises — ensuring priority dispatch,
          faster response, and dedicated ambulance allocation for their
          employees and operations nationwide.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-9">
          {[
            { value: "16+", label: "Corporate Partners" },
            { value: `${citiesCovered}+`, label: "Cities Covered" },
            { value: `${clientsServed.toLocaleString()}+`, label: "Patients Served" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-2xl sm:text-3xl font-extrabold text-red-400 leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {value}
              </p>
              <p className="text-xs text-gray-500 font-medium mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div className="relative space-y-7">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0  h-full w-20 sm:w-44 z-10 bg-gradient-to-r from-gray-900 to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-20 sm:w-44 z-10 bg-gradient-to-l from-gray-900 to-transparent" aria-hidden="true" />

        {/* Row 1 → left to right */}
        <div className="flex gap-4 w-max animate-marquee-ltr" role="list" aria-label="Partners row 1">
          {ROW_ONE_LOOP.map((p, i) => (
            <div key={`r1-${i}`} role="listitem"><PartnerCard {...p} /></div>
          ))}
        </div>

        {/* Row 2 → right to left */}
        <div className="flex gap-4 w-max animate-marquee-rtl" role="list" aria-label="Partners row 2">
          {ROW_TWO_LOOP.map((p, i) => (
            <div key={`r2-${i}`} role="listitem"><PartnerCard {...p} /></div>
          ))}
        </div>
      </div>

      {/* ── TRUST STRIP ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 border-t border-white/5 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-gray-500 font-medium">
          {[
            { icon: "🏛️", label: "Govt. PSU Tie-Ups" },
            { icon: "✈️", label: "Aviation & Logistics" },
            { icon: "🏥", label: "Hospital Network" },
            { icon: "🤝", label: "Corporate Contracts" },
            { icon: "🩸", label: "Blood Bank Partners" },
          ].map(({ icon, label }) => (
            <span key={label} className="flex items-center gap-1.5">
              <span aria-hidden="true">{icon}</span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;