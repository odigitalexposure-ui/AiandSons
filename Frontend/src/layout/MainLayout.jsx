import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-full mx-auto ">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default MainLayout;