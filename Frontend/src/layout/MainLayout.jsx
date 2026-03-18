import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappButton";
import PageWrapper from "../scroll/PageWrapper";
import ScrollToTop from "../scroll/ScrollToTop";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">

      <ScrollToTop />

      <Navbar />

      {/* 🔥 Animated Page Content */}
      <main className="flex-grow w-full max-w-full mx-auto">
        <AnimatePresence mode="wait">
          <PageWrapper key={location.pathname}>
            <Outlet />
          </PageWrapper>
        </AnimatePresence>
      </main>

      <WhatsAppButton />

      <Footer />

    </div>
  );
};

export default MainLayout;