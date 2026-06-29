import { Helmet } from "react-helmet-async";
import site from "../data/site";

const SEO = ({ title, description, path = "/", keywords = [], jsonLd = [], image }) => {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Authentic Indori Street Food in Hinjawadi, Pune`;
  const desc = description || site.description;
  const canonical = `${site.url}${path}`;
  const og = image ? `${site.url}${image}` : `${site.url}${site.ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="restaurant" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={og} />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={og} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={site.name} />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;