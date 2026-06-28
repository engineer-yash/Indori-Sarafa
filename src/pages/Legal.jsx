import SEO from "../components/SEO";

const LegalPage = ({ title, children, path }) => (
  <>
    <SEO title={title} description={`${title} of Indori Sarafa.`} path={path} />
    <section className="pt-32 pb-12 brown-gradient text-[#FFF8F2] text-center">
      <div className="max-w-4xl mx-auto px-5">
        <h1 className="!text-[#FFF8F2] font-display text-5xl md:text-6xl font-extrabold">
          {title}
        </h1>
      </div>
    </section>
    <section className="max-w-3xl mx-auto px-5 md:px-10 py-16 space-y-6 text-[#5C2C06]/85 leading-relaxed">
      {children}
    </section>
  </>
);

export const Privacy = () => (
  <LegalPage title="Privacy Policy" path="/privacy-policy">
    <p>
      At Indori Sarafa, we respect your privacy. We do not collect personal
      data through this website. Any information shared via our contact form is
      used solely to respond to your enquiry and is never sold or shared with
      third parties.
    </p>
    <h2 className="font-display text-2xl">Information We Collect</h2>
    <p>
      When you fill out our contact form, we receive the name, email, phone and
      message you provide. We do not place tracking cookies on this site.
    </p>
    <h2 className="font-display text-2xl">How We Use It</h2>
    <p>
      The information is used to answer your questions, take reservations or
      respond to feedback about your dining experience.
    </p>
    <h2 className="font-display text-2xl">Contact</h2>
    <p>
      For any privacy-related queries, call us at +91 95456 37022 or visit any
      of our branches in Hinjawadi.
    </p>
  </LegalPage>
);

export const Terms = () => (
  <LegalPage title="Terms & Conditions" path="/terms">
    <p>
      By accessing this website you agree to the following terms. Indori Sarafa
      reserves the right to modify these terms at any time.
    </p>
    <h2 className="font-display text-2xl">Content</h2>
    <p>
      All content, images and recipes on this site are property of Indori
      Sarafa and may not be reproduced without written permission.
    </p>
    <h2 className="font-display text-2xl">Pricing</h2>
    <p>
      Menu prices on this website are indicative. Final pricing applies at the
      branch at the time of order and may change without prior notice.
    </p>
    <h2 className="font-display text-2xl">Limitation</h2>
    <p>
      Indori Sarafa is not liable for any external links, third-party platforms
      or services accessed through this website.
    </p>
  </LegalPage>
);

export default LegalPage;