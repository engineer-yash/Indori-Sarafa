import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => (
  <>
    <SEO
      title="Page Not Found"
      description="The page you’re looking for doesn’t exist."
      path="/thank-you"
    />
    <section className="min-h-[80vh] grid place-items-center pt-24 brown-gradient text-[#FFF8F2] text-center px-5">
      <div>
        <span className="font-display text-[120px] md:text-[180px] leading-none gold-text-gradient font-extrabold">
          404
        </span>
        <h1 className="!text-[#FFF8F2] font-display text-3xl md:text-5xl font-extrabold mt-2">
          This dish isn’t on our menu.
        </h1>
        <p className="font-hindi text-xl text-[#D4AF37] mt-3">
          वापस घर चलते हैं
        </p>
        <Link to="/" className="btn-gold mt-8 inline-flex">
          Back to Home
        </Link>
      </div>
    </section>
  </>
);

export default NotFound;