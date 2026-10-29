import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Weddings from "./pages/Weddings";
import Parties from "./pages/Parties";
import Contact from "./pages/Contact";
import { PAGES } from "./data/site";
import { useHashRoute } from "./hooks/useHashRoute";

const PAGE_COMPONENTS = { home: Home, services: Services, weddings: Weddings, parties: Parties, contact: Contact };

export default function App() {
  const [page, navigate] = useHashRoute();
  const [toast, setToast] = useState(null);
  const timer = useRef();

  const notify = useCallback((message) => {
    setToast(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    const meta = PAGES.find((p) => p.id === page);
    if (meta) document.title = meta.title;
  }, [page]);

  const Page = PAGE_COMPONENTS[page];

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F3EF] selection:bg-[#FF5CDA]/30 overflow-x-clip">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header page={page} navigate={navigate} />
      <main id="main" data-page={page}>
        <Page navigate={navigate} notify={notify} />
      </main>
      <Footer navigate={navigate} />
      <Toast message={toast} />
    </div>
  );
}
