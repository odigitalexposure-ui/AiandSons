import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
        <div className="flex justify-center items-center">
    <div className="py-16 max-w-7xl sm:px-16">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Get in touch with us for your interior needs.
        </p>
      </div>

      {/* Content */}
      <div className="mt-12 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          <div className="flex items-start gap-4">
            <Phone />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600 text-sm">9330823581</p>
              <p className="text-gray-600 text-sm">9123033592</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600 text-sm">
                ansarali1042@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600 text-sm">
                Vill + P.O. - Ghoni, Majher Para,<br />
                P.S. - New Town, Kolkata - 700157
              </p>
            </div>
          </div>

        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-6 rounded-2xl shadow space-y-4"
        >

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </motion.form>

      </div>

    </div></div>
  );
};

export default Contact;