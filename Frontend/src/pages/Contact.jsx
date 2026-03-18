import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // WhatsApp number to send messages to (your number)
  const whatsappNumber = "919330823581";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Please enter your name and message.");
      return;
    }
    const text = `Hello! My name is ${name}. Email: ${email || "N/A"} Message: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919330823581");
  };

  return (
    <div className="flex justify-center items-center px-4 sm:px-16">
      <div className="py-16 max-w-7xl w-full">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Get in touch with us for your interior needs.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

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
                <button
                  onClick={handleCall}
                  className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Call Now
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600 text-sm">ansarali1042@gmail.com</p>
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
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send on WhatsApp
            </button>
          </motion.form>

        </div>

        {/* Map */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Our Location
          </h2>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Ghoni, Majher Para, New Town, Kolkata"
              src="https://www.google.com/maps?q=Ghoni,+Majher+Para,+New+Town,+Kolkata+700157&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;