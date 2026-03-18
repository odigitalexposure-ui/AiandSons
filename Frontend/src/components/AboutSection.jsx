import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-16 sm:px-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <img
            src="/about.png" // 👉 add later
            alt="About"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Ali & Sons Interior was established in 2002 with a vision to transform
            homes into beautiful and functional spaces. With over two decades of
            experience, we have successfully completed numerous projects and
            earned the trust of our clients.
          </p>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            We specialize in home interior decoration, furniture work, electrical
            installations, painting, and false ceiling design. Our focus is always
            on quality, detail, and customer satisfaction.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-2 gap-4">

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold text-blue-600">20+</h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold text-blue-600">100+</h3>
              <p className="text-sm text-gray-600">Projects Done</p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutSection;