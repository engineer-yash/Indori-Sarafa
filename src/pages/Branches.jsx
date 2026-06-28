import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import SEO from "./components/SEO";
import branches from "./data/branches";
import site from "./data/site";

const BranchesPage = () => {
  return (
    <>
      <SEO
        title="Our Branches"
        description="Visit Indori Sarafa at our two Hinjawadi branches — Opposite Shell Petrol Pump and Fountain Market, Megapolis Circle."
        path="/branches"
        keywords={["Indori Sarafa Hinjawadi", "Indori Sarafa branches Pune", "Megapolis Circle restaurant"]}
        jsonLd={branches.map((b) => ({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: b.name,
          image: `${site.url}${b.image}`,
          telephone: b.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: b.address,
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411057",
            addressCountry: "IN",
          },
          url: b.mapUrl,
          openingHours: "Mo-Su 04:30-22:00",
        }))}
      />

      <section className="pt-32 pb-12 brown-gradient text-[#FFF8F2] text-center">
        <div className="max-w-4xl mx-auto px-5">
          <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Our Branches
          </span>
          <h1 className="!text-[#FFF8F2] font-display text-5xl md:text-7xl font-extrabold mt-4">
            Find us in <span className="gold-text-gradient">Hinjawadi</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid lg:grid-cols-2 gap-8">
        {branches.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden border border-[#5C2C06]/10 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-[0_30px_80px_-30px_rgba(92,44,6,0.3)]"
            data-testid={`branch-card-${b.id}`}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={b.image}
                alt={b.name}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                {b.name}
              </h2>
              <div className="space-y-3 text-sm text-[#5C2C06]/80">
                <div className="flex gap-3">
                  <FiMapPin className="text-[#D4AF37] flex-shrink-0 mt-1" />
                  <p className="leading-relaxed">{b.address}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <FiPhone className="text-[#D4AF37]" />
                  <a href={`tel:${b.phone}`} className="hover:text-[#A52A2A]">
                    {b.phoneDisplay}
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <FiClock className="text-[#D4AF37]" />
                  <span>Open daily · {site.hours}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={b.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                  data-testid={`branch-maps-${b.id}`}
                >
                  <FiMapPin /> Open Maps
                </a>
                <a
                  href={`tel:${b.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#5C2C06]/20 text-[#5C2C06] font-medium hover:bg-[#5C2C06] hover:text-[#FFF8F2] transition-colors"
                  data-testid={`branch-call-${b.id}`}
                >
                  <FiPhone /> Call
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default BranchesPage;