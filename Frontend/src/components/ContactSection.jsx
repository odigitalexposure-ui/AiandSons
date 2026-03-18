import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-16 sm:px-16 bg-blue-600 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm md:text-base text-blue-100">
            Contact us today for complete home interior solutions.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center">
            <Phone className="mx-auto mb-3" />
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-sm mt-1">9330823581</p>
            <p className="text-sm">9123033592</p>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center">
            <Mail className="mx-auto mb-3" />
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm mt-1">ansarali1042@gmail.com</p>
          </div>

          {/* Address */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center">
            <MapPin className="mx-auto mb-3" />
            <h3 className="font-semibold">Address</h3>
            <p className="text-sm mt-1">
              Vill + P.O. - Ghoni, Majher Para,<br />
              New Town, Kolkata - 700157
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="tel:9330823581"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Call Now
          </a>
        </div>

      </div>

    </section>
  );
};

export default ContactSection;