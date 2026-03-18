import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { memo } from "react";


const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white pt-16 pb-8 mt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ali & Sons Interior</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Established in 2002, Ali & Sons Interior provides complete home interior solutions 
            including furniture, electrical work, painting, and false ceiling services. 
            We are committed to quality and customer satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="flex flex-col gap-4 text-gray-400 text-sm">

            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1" />
              <div>
                <p>9330823581</p>
                <p>9123033592</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-1" />
              <div>
                <p>ansarali1042@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />
              <p>
                Vill + P.O. - Ghoni, Majher Para,<br />
                P.S. - New Town, Kolkata - 700157
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ali & Sons Interior. All rights reserved.
      </div>

    </footer>
  );
};

export default memo(Footer);