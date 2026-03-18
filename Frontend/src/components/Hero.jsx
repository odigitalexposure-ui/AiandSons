import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">

      {/* Background Slides */}
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      ))}

      {/* Overlay for darker effect */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Ali & Sons Interior
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-white"
        >
          Transforming Homes Since 2002 — Interior Design, Furniture, Electrical Work, Painting & False Ceiling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="tel:9330823581"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm sm:text-base font-medium transition"
          >
            Call Now
          </a>

          <a
            href="/services"
            className="border border-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-white hover:text-black transition"
          >
            View Services
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;