import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import Logo from "./Logo";
import site from "../data/site";
import branches from "../data/branches";

const Footer = () => {
  return (
    <footer
      className="relative mt-24 text-[#FFF8F2] grain"
      style={{
        background:
          "linear-gradient(180deg, #5C2C06 0%, #3a1c04 60%, #2a1402 100%)",
      }}
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo size={56} variant="dark" />
            <div>
              <div className="font-display text-2xl font-extrabold text-[#FFF8F2]">
                Indori Sarafa
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Since 2019
              </div>
            </div>
          </div>
          <p className="text-sm text-[#FFF8F2]/70 leading-relaxed font-hindi">
            {site.hindiTagline}
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 grid place-items-center rounded-full border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#3a1c04] transition-colors"
              data-testid="footer-instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 grid place-items-center rounded-full border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#3a1c04] transition-colors"
              data-testid="footer-facebook"
            >
              <FaFacebook />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 grid place-items-center rounded-full border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#3a1c04] transition-colors"
              data-testid="footer-whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-[#D4AF37] mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/menu", "Menu"],
              ["/gallery", "Gallery"],
              ["/branches", "Our Branches"],
              ["/contact", "Contact"],
              ["/privacy-policy", "Privacy Policy"],
              ["/terms", "Terms & Conditions"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-[#FFF8F2]/75 hover:text-[#D4AF37] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-[#D4AF37] mb-5">
            Working Hours
          </h4>
          <div className="flex items-start gap-3 text-sm text-[#FFF8F2]/80 mb-5">
            <FiClock className="mt-0.5 text-[#D4AF37]" />
            <div>
              <div className="font-medium text-[#FFF8F2]">Open Daily</div>
              <div>{site.hours}</div>
            </div>
          </div>
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-2 text-sm text-[#FFF8F2]/80 hover:text-[#D4AF37]"
          >
            <FiPhone className="text-[#D4AF37]" />
            {site.phoneDisplay}
          </a>
        </div>

        <div>
          <h4 className="font-display text-lg text-[#D4AF37] mb-5">Branches</h4>
          <ul className="space-y-4 text-sm">
            {branches.map((b) => (
              <li key={b.id} className="flex items-start gap-3">
                <FiMapPin className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a
                  href={b.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FFF8F2]/75 hover:text-[#D4AF37] leading-relaxed"
                >
                  {b.short}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#FFF8F2]/65">
          <p>
            © {new Date().getFullYear()} Indori Sarafa. All rights reserved.
          </p>
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="https://ygwebstudio.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              data-testid="footer-credit"
            >
              <span className="text-[#D4AF37] font-semibold">YG</span>{" "}
              <span className="text-[#FFF8F2]">Web Studio</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;