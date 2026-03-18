import gallery from "../data/gallery";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="py-16 sm:px-16">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Work
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Take a look at some of our completed interior projects.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-4 max-w-7xl mx-auto">

        {gallery.map((item, index) => (
          <motion.div
            key={item.id}
            className="overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <img
              src={item.img}
              alt="work"
              loading="lazy"  // 🔥 optimization
              className="w-full h-40 sm:h-44 md:h-48 object-cover hover:scale-110 transition duration-300"
            />
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Gallery;