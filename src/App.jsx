import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Menu = lazy(() => import("./pages/Menu"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Branches = lazy(() => import("./pages/Branches"));
const Contact = lazy(() => import("./pages/Contact"));
const Legal = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen grid place-items-center bg-[#FFF8F2]">
    <div className="w-12 h-12 rounded-full border-4 border-[#D4AF37]/30 border-t-[#5C2C06] animate-spin" />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/privacy-policy"
                element={<LegalRoute kind="privacy" />}
              />
              <Route path="/terms" element={<LegalRoute kind="terms" />} />
              <Route path="/thank-you" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#5C2C06",
              color: "#FFF8F2",
              border: "1px solid #D4AF37",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

const LegalRoute = ({ kind }) => {
  const LegalMod = lazy(() =>
    import("@/pages/Legal").then((m) => ({
      default: kind === "privacy" ? m.Privacy : m.Terms,
    })),
  );
  return (
    <Suspense fallback={<PageLoader />}>
      <LegalMod />
    </Suspense>
  );
};

export default App;