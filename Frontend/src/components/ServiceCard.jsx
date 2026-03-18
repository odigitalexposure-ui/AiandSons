import { memo } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, desc }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* 🔵 Animated Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-md opacity-20"></div>
      </div>

      {/* ✨ Top Accent Line Animation */}
      <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500"></div>

      {/* 🌟 Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
          {desc}
        </p>
      </div>

      {/* 💡 Soft Radial Hover Light */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute top-[-30%] left-[-30%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]"></div>
      </div>
    </motion.div>
  );
};

export default memo(ServiceCard);