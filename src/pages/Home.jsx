import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPhone, FiMapPin, FiStar } from "react-icons/fi";
import SEO from "../components/SEO";
import FloatingSpices, { SteamPlume } from "../components/FloatingSpices";
import menu from "../data/menu";
import branches from "../data/branches";
import reviews from "../data/reviews";
import gallery from "../data/gallery";
import site from "../data/site";

const popularDishes = menu.filter((m) => m.popular).slice(0, 8);

const features = [
  { title: "Fresh Ingredients", desc: "Sourced daily, prepared fresh.", icon: "🌿" },
  { title: "Authentic Indori Taste", desc: "Recipes straight from Sarafa Bazaar.", icon: "🔥" },
  { title: "Since 2019", desc: "Trusted by thousands of Punekars.", icon: "🏆" },
  { title: "Affordable Pricing", desc: "Street-food prices, restaurant comfort.", icon: "💰" },
  { title: "Family Friendly", desc: "Pure veg, hygienic, welcoming space.", icon: "👨‍👩‍👧" },
];

const Home = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: site.name,
      image: `${site.url}${site.ogImage}`,
      "@id": site.url,
      url: site.url,
      telephone: site.phone,
      priceRange: "₹₹",
      servesCuisine: ["Indian", "Indori Street Food", "Vegetarian"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Opposite Shell Petrol Pump, Hinjawadi",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411057",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lon,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        opens: "04:30",
        closes: "22:00",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "650",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: `${site.url}/images/logo/logo.svg`,
      sameAs: [site.social.instagram, site.social.facebook],
    },
  ];

  return (
    <>
      <SEO
        title="Authentic Indori Street Food in Hinjawadi, Pune"
        description={site.description}
        keywords={[
          "Indori Sarafa",
          "Indori street food Pune",
          "Poha Jalebi Hinjawadi",
          "best street food Hinjawadi",
          "kachori garadu Pune",
        ]}
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden grain"
        data-testid="hero-section"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero.jpg"
            alt="Authentic Indori street food spread"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a02]/85 via-[#3a1c04]/70 to-[#1a0a02]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a02]/80 via-transparent to-transparent" />
        </div>
        <FloatingSpices />
        <SteamPlume left="68%" />
        <SteamPlume left="78%" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-7 text-[#FFF8F2]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/40 bg-white/5 backdrop-blur text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-6"
            >
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
              Since 2019 · Hinjawadi, Pune
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display !text-[#FFF8F2] text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              The taste of{" "}
              <span className="gold-text-gradient">Indori gallis</span>,
              <br />
              now in Hinjawadi.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-hindi mt-6 text-2xl md:text-3xl text-[#D4AF37]"
            >
              "स्वाद इंदौर की गलियों से"
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 max-w-xl text-base md:text-lg text-[#FFF8F2]/75 leading-relaxed"
            >
              Crispy kachoris, hot jalebis, soft poha and the unmistakable
              Indori shikanji — served fresh from 4:30 AM every single day.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/menu"
                className="btn-gold text-sm px-4 py-2 md:text-base md:px-5 md:py-3"
                data-testid="hero-view-menu"
              >
                View Menu <FiArrowUpRight />
              </Link>
              <Link
                to="/branches"
                className="btn-outline-gold text-sm px-4 py-2 md:text-base md:px-5 md:py-3"
                data-testid="hero-visit-branch"
              >
                <FiMapPin /> Visit Branch
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="btn-outline-gold text-sm px-4 py-2 md:text-base md:px-5 md:py-3"
                data-testid="hero-call-now"
              >
                <FiPhone /> Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex items-center gap-6 text-sm"
            >
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} fill="#D4AF37" />
                ))}
              </div>
              <span className="text-[#FFF8F2]/80">
                4.8 · 650+ Google reviews
              </span>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FFF8F2]/60 text-[10px] tracking-[0.4em] uppercase flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-px h-10 bg-[#D4AF37]"
          />
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-24" data-testid="why-section">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.35em] text-[#A52A2A] font-semibold">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
              Five reasons we’ve been the
              <br />
              <span className="gold-text-gradient">favourite Indori</span>{" "}
              of Hinjawadi since 2019.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#5C2C06]/75 leading-relaxed text-base">
            Every plate is a tribute to the bylanes of Indore — built on family
            recipes, slow craft and ingredients you can actually taste.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white p-6 rounded-3xl border border-[#5C2C06]/10 hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(92,44,6,0.25)]"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-display text-lg font-bold mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-[#5C2C06]/70 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* POPULAR DISHES */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFF8F2 0%, #FFEFDD 60%, #FFF8F2 100%)",
        }}
        data-testid="popular-section"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-[#A52A2A] font-semibold">
                Popular Dishes
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
                The plates everyone
                <br />
                keeps coming back for.
              </h2>
            </div>
            <Link to="/menu" className="btn-gold">
              See Full Menu <FiArrowUpRight />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish, i) => (
              <motion.article
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#5C2C06]/10 hover:border-[#D4AF37] transition-all duration-500"
                data-testid={`popular-card-${dish.id}`}
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#FFF1E0] to-[#FFE0BB] grid place-items-center p-6">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-lg"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3.5 h-3.5 border-2 border-green-700 grid place-items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#A52A2A] font-semibold">
                      {dish.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold leading-tight">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#5C2C06]/65 mt-2 line-clamp-2">
                    {dish.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-2xl font-extrabold gold-text-gradient">
                      ₹{dish.price}
                    </span>
                    <Link
                      to="/menu"
                      className="text-xs uppercase tracking-wider font-semibold text-[#5C2C06] hover:text-[#A52A2A] inline-flex items-center gap-1"
                    >
                      View <FiArrowUpRight />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-24" data-testid="reviews-section">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-[#A52A2A] font-semibold">
            Google Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-3">
            Loved by Hinjawadi.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white rounded-3xl p-7 border border-[#5C2C06]/10 hover:border-[#D4AF37] transition-colors"
            >
              <div className="flex gap-1 text-[#D4AF37] mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <FiStar key={i} fill="#D4AF37" />
                ))}
              </div>
              <blockquote className="text-sm md:text-base text-[#5C2C06]/85 leading-relaxed">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-[#5C2C06]/10">
                <div className="font-semibold text-[#5C2C06]">{r.name}</div>
                <div className="text-xs text-[#5C2C06]/55">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section
        className="relative py-24"
        style={{
          background: "linear-gradient(180deg, #FFF8F2 0%, #FFEFDD 100%)",
        }}
        data-testid="gallery-preview-section"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-[#A52A2A] font-semibold">
                Gallery
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
                A peek at the
                <br />
                <span className="gold-text-gradient">spread.</span>
              </h2>
            </div>
            <Link to="/gallery" className="btn-gold">
              View More <FiArrowUpRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.slice(0, 8).map((g, i) => (
              <motion.div
                key={g.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFF1E0] to-[#FFE0BB] ${
                  i % 5 === 0 ? "md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-contain p-4 transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCHES PREVIEW */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-24" data-testid="branches-preview-section">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-[#A52A2A] font-semibold">
            Our Branches
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-3">
            Two homes in Hinjawadi.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {branches.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#5C2C06]/10 hover:border-[#D4AF37] transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {b.name}
                </h3>
                <p className="text-sm text-[#5C2C06]/70 leading-relaxed mb-5">
                  {b.address}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold !py-2.5 !px-5 text-sm"
                  >
                    <FiMapPin /> Open Maps
                  </a>
                  <a
                    href={`tel:${b.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#5C2C06]/20 text-[#5C2C06] text-sm font-medium hover:bg-[#5C2C06] hover:text-[#FFF8F2] transition-colors"
                  >
                    <FiPhone /> Call
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;