import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SEO from "../components/SEO";
import site from "../data/site";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Please add your name and a message.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Reach Indori Sarafa Hinjawadi, Pune. Call, WhatsApp or send us a message."
        path="/contact"
        keywords={["Contact Indori Sarafa", "Indori Sarafa phone number", "Hinjawadi restaurant contact"]}
      />

      <section className="pt-32 pb-12 brown-gradient text-[#FFF8F2] text-center">
        <div className="max-w-4xl mx-auto px-5">
          <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Contact Us
          </span>
          <h1 className="!text-[#FFF8F2] font-display text-5xl md:text-7xl font-extrabold mt-4">
            Say <span className="gold-text-gradient">namaste</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid lg:grid-cols-12 gap-10">
        {/* Info */}
        <div className="lg:col-span-5 space-y-5">
          <motion.a
            href={`tel:${site.phone}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-[#5C2C06]/10 hover:border-[#D4AF37] transition-all group"
            data-testid="contact-phone"
          >
            <span className="w-12 h-12 grid place-items-center rounded-full gold-gradient text-[#3a1c04] text-xl">
              <FiPhone />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#5C2C06]/60">
                Call us
              </div>
              <div className="font-display text-xl font-bold text-[#5C2C06]">
                {site.phoneDisplay}
              </div>
            </div>
          </motion.a>

          <motion.a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-[#5C2C06]/10 hover:border-[#D4AF37] transition-all"
            data-testid="contact-whatsapp"
          >
            <span className="w-12 h-12 grid place-items-center rounded-full bg-green-600 text-white text-xl">
              <FaWhatsapp />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#5C2C06]/60">
                WhatsApp
              </div>
              <div className="font-display text-xl font-bold text-[#5C2C06]">
                Chat with us
              </div>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-[#5C2C06]/10"
          >
            <span className="w-12 h-12 grid place-items-center rounded-full bg-[#5C2C06] text-[#D4AF37] text-xl flex-shrink-0">
              <FiMapPin />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#5C2C06]/60 mb-1">
                Visit our branches
              </div>
              <p className="text-sm text-[#5C2C06]/80 leading-relaxed">
                Hinjawadi, Pune — Maharashtra 411057
              </p>
            </div>
          </motion.div>

          <div className="aspect-video rounded-3xl overflow-hidden border border-[#5C2C06]/10">
            <iframe
              title="Indori Sarafa Map"
              src="https://www.google.com/maps?q=Hinjawadi+Phase+3+Pune&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-white rounded-3xl border border-[#5C2C06]/10 p-8 md:p-10 space-y-5"
          data-testid="contact-form"
        >
          <h2 className="font-display text-3xl font-bold">Send us a message</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-[#5C2C06]/70">
                Name *
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#FFF8F2] border border-[#5C2C06]/15 focus:border-[#D4AF37] outline-none text-sm"
                data-testid="form-name"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-[#5C2C06]/70">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#FFF8F2] border border-[#5C2C06]/15 focus:border-[#D4AF37] outline-none text-sm"
                data-testid="form-email"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-wider text-[#5C2C06]/70">
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#FFF8F2] border border-[#5C2C06]/15 focus:border-[#D4AF37] outline-none text-sm"
                data-testid="form-phone"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-wider text-[#5C2C06]/70">
                Message *
              </span>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                required
                className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#FFF8F2] border border-[#5C2C06]/15 focus:border-[#D4AF37] outline-none text-sm resize-none"
                data-testid="form-message"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="btn-gold disabled:opacity-60"
            data-testid="form-submit"
          >
            <FiSend /> {submitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </section>
    </>
  );
};

export default Contact;