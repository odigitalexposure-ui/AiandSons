import { useState } from "react";
import gallery from "../data/gallery";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="flex justify-center items-center">
    <div className="py-8 max-w-7xl sm:px-8">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Our Gallery
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Explore our completed interior projects and designs.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-4 max-w-7xl mx-auto">

        {gallery.map((item, index) => (
          <motion.div
            key={item.id}
            className="overflow-hidden rounded-xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImg(item.img)}
          >
            <img
  src={item.img}
  alt="work"
  loading="lazy"
  className="w-full h-60 sm:h-64 md:h-72 object-cover hover:scale-110 transition duration-300"
/>
          </motion.div>
        ))}

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="preview"
              className="max-w-full max-h-[90vh] rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div></div>
  );
};

export default Gallery;