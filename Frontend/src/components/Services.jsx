import services from "../data/services";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="relative py-16 sm:px-16 items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100">

      {/* 🌈 Soft Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* ✨ Subtle Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 💡 Radial Light Center */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* 🔹 Heading */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          We provide complete interior solutions to make your home beautiful and functional.
        </p>
      </div>

      {/* 🔹 Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              title={service.title}
              desc={service.desc}
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Services;