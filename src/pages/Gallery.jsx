import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import gallery from "../data/gallery";
import site from "../data/site";

const GalleryPage = () => {
  const [index, setIndex] = useState(-1);
  const slides = gallery.map((g) => ({
    src: g.src,
    alt: g.alt,
    width: g.w,
    height: g.h,
  }));

  return (
    <>
      <SEO
        title="Gallery"
        description="Browse photos of authentic Indori dishes served at Indori Sarafa Hinjawadi, Pune."
        path="/gallery"
        keywords={["Indori Sarafa gallery", "Indori food photos Pune"]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Indori Sarafa Gallery",
            url: `${site.url}/gallery`,
          },
        ]}
      />
      <section className="pt-32 pb-12 brown-gradient text-[#FFF8F2] text-center">
        <div className="max-w-4xl mx-auto px-5">
          <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Gallery
          </span>
          <h1 className="!text-[#FFF8F2] font-display text-5xl md:text-7xl font-extrabold mt-4">
            Every plate is a <span className="gold-text-gradient">portrait</span>.
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4" data-testid="gallery-masonry">
          {gallery.map((g, i) => (
            <motion.button
              type="button"
              key={g.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              onClick={() => setIndex(i)}
              className="block w-full mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFF1E0] to-[#FFE0BB] group relative"
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-auto object-contain p-4 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5C2C06]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[#FFF8F2] text-sm font-medium">
                  {g.alt}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Zoom]}
          carousel={{ finite: false }}
        />
      </section>
    </>
  );
};

export default GalleryPage;