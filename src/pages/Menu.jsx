import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiStar, FiX } from "react-icons/fi";
import SEO from "../components/SEO";
import MenuModal from "../components/MenuModal";
import menu, { categories } from "../data/menu";
import site from "../data/site";

const MenuPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [popularOnly, setPopularOnly] = useState(false);
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    return menu.filter((m) => {
      if (category !== "All" && m.category !== category) return false;
      if (popularOnly && !m.popular) return false;
      if (query) {
        const q = query.toLowerCase();
        if (
          !m.name.toLowerCase().includes(q) &&
          !m.description.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [query, category, popularOnly]);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Menu",
      name: "Indori Sarafa Menu",
      hasMenuSection: categories
        .filter((c) => c !== "All")
        .map((cat) => ({
          "@type": "MenuSection",
          name: cat,
          hasMenuItem: menu
            .filter((m) => m.category === cat)
            .map((m) => ({
              "@type": "MenuItem",
              name: m.name,
              description: m.description,
              offers: {
                "@type": "Offer",
                price: m.price,
                priceCurrency: "INR",
              },
            })),
        })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Menu",
          item: `${site.url}/menu`,
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Menu"
        description="Explore the full menu of Indori Sarafa — Poha, Jalebi, Kachori, Chat, Sweets, Beverages and Namkeen."
        path="/menu"
        keywords={["Indori Sarafa menu", "Poha Jalebi menu Hinjawadi", "street food menu Pune"]}
        jsonLd={jsonLd}
      />

      {/* Header */}
      <section className="pt-32 pb-12 brown-gradient text-[#FFF8F2] text-center">
        <div className="max-w-4xl mx-auto px-5">
          <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Our Menu
          </span>
          <h1 className="!text-[#FFF8F2] font-display text-5xl md:text-7xl font-extrabold mt-4">
            Made fresh, served with <span className="gold-text-gradient">love</span>
          </h1>
          <p className="font-hindi text-xl text-[#D4AF37] mt-4">
            "स्वाद इंदौर की गलियों से"
          </p>
        </div>
      </section>

      {/* Filters */}
      <section
        className="sticky top-20 z-30 bg-[#FFF8F2]/95 backdrop-blur-xl border-b border-[#5C2C06]/10"
        data-testid="menu-filters"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex flex-row items-center gap-4">
          <div className="relative flex-1 min-w-0">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5C2C06]/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes..."
              className="w-full pl-11 pr-12 py-4 rounded-full bg-white border border-[#5C2C06]/15 focus:border-[#D4AF37] outline-none text-sm"
              data-testid="menu-search"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C2C06]/50 hover:text-[#5C2C06]"
                aria-label="Clear search"
              >
                <FiX />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={() => setPopularOnly((v) => !v)}
            className={`inline-flex flex-shrink-0 items-center gap-2 px-5 py-4 rounded-full text-sm font-medium transition-colors shadow-sm ${
              popularOnly
                ? "bg-[#A52A2A] text-[#FFF8F2]"
                : "bg-white border border-[#5C2C06]/15 text-[#5C2C06]"
            }`}
            data-testid="menu-popular-toggle"
          >
            <FiStar /> Popular Only
          </button>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-10 pb-4 flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              data-testid={`menu-cat-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-[#5C2C06] text-[#FFF8F2]"
                  : "bg-white border border-[#5C2C06]/15 text-[#5C2C06] hover:border-[#D4AF37]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-[#5C2C06]/65">
            <p className="font-display text-2xl">Nothing matches that search.</p>
            <p className="text-sm mt-2">Try a different keyword or category.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((dish, i) => (
              <motion.article
                key={dish.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                className="group bg-white rounded-3xl overflow-hidden border border-[#5C2C06]/10 hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-25px_rgba(92,44,6,0.3)]"
                data-testid={`menu-card-${dish.id}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(dish)}
                  className="block w-full aspect-square bg-gradient-to-br from-[#FFF1E0] to-[#FFE0BB] grid place-items-center p-6 overflow-hidden"
                  aria-label={`View ${dish.name}`}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-lg"
                  />
                </button>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {dish.veg && (
                      <span
                        className="w-3.5 h-3.5 border-2 border-green-700 grid place-items-center"
                        aria-label="Pure veg"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
                      </span>
                    )}
                    {dish.popular && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#A52A2A] bg-[#A52A2A]/10 px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5C2C06]/70">
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
                    <button
                      type="button"
                      onClick={() => setActive(dish)}
                      className="text-xs uppercase tracking-wider font-semibold text-[#5C2C06] hover:text-[#A52A2A]"
                    >
                      View →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      <MenuModal item={active} onClose={() => setActive(null)} />
    </>
  );
};

export default MenuPage;