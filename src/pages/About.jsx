import { motion } from "framer-motion";
import SEO from "../components/SEO";
import site from "../data/site";

const timeline = [
  {
    year: "2019",
    title: "A small kitchen, a big dream",
    text: "Indori Sarafa opened its first counter in Hinjawadi, bringing Indore's famous Sarafa Bazaar flavours to Pune.",
  },
  {
    year: "2021",
    title: "Loved by the neighbourhood",
    text: "Word of our crispy kachoris and Indori shikanji spread across Phase 1, 2 and 3.",
  },
  {
    year: "2023",
    title: "Second branch opens",
    text: "We opened our Fountain Market outlet at Megapolis Circle to reach more food lovers.",
  },
  {
    year: "Today",
    title: "650+ five-star reviews",
    text: "A daily ritual for IT folks, students and families across Hinjawadi.",
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Indori Sarafa brings authentic Indori street food to Hinjawadi, Pune. Our story, mission and the recipes that travelled from Sarafa Bazaar."
        path="/about"
        keywords={["About Indori Sarafa", "Indori food story Pune", "Sarafa Bazaar recipes"]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Indori Sarafa",
            url: `${site.url}/about`,
          },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 brown-gradient grain text-[#FFF8F2] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/menu/menu-2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-5 md:px-10 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Our Story
          </span>
          <h1 className="!text-[#FFF8F2] font-display text-5xl md:text-7xl font-extrabold mt-4 leading-[1.05]">
            From the bylanes of <span className="gold-text-gradient">Sarafa Bazaar</span> to your plate.
          </h1>
          <p className="font-hindi text-xl md:text-2xl text-[#D4AF37] mt-6">
            "स्वाद इंदौर की गलियों से"
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto px-5 md:px-10 py-20 space-y-12 text-[#5C2C06]/85 leading-relaxed text-lg">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Indori Sarafa was born in 2019 with a single mission — to recreate the
          magic of Indore’s Sarafa Bazaar in the heart of Hinjawadi. Every
          recipe on our menu is a memory: the steaming poha at dawn, jalebis
          fried under festive lights, kachoris cracked open with chutney.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white p-8 rounded-3xl border border-[#5C2C06]/10">
            <h2 className="font-display text-2xl mb-3">Our Mission</h2>
            <p className="text-base text-[#5C2C06]/75">
              Bring authentic, hygienic, affordable Indori street food to every
              corner of Pune — without compromising on taste, ingredients or
              tradition.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-[#5C2C06]/10">
            <h2 className="font-display text-2xl mb-3">Our Vision</h2>
            <p className="text-base text-[#5C2C06]/75">
              To become the most loved Indori restaurant brand outside of
              Indore, while keeping the soul of the original Sarafa Bazaar
              alive in every plate.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(180deg, #FFF8F2, #FFEFDD)" }}
      >
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <h2 className="font-display text-4xl md:text-5xl text-center font-extrabold mb-16">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#D4AF37]/40" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative mb-12 md:mb-16 grid md:grid-cols-2 gap-8 md:gap-16 ${
                  i % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                <div className="md:[direction:ltr] pl-12 md:pl-0">
                  <div
                    className={`absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4AF37] ring-4 ring-[#FFF8F2]`}
                  />
                  <span className="font-display text-5xl md:text-6xl font-extrabold gold-text-gradient">
                    {t.year}
                  </span>
                </div>
                <div className="md:[direction:ltr] pl-12 md:pl-0">
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {t.title}
                  </h3>
                  <p className="text-[#5C2C06]/75 leading-relaxed">{t.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;