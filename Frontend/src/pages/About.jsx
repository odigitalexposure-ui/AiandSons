import { motion } from "framer-motion";
// import photo from '../../public/about.png'

const About = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="relative py-16 max-w-7xl sm:px-16 overflow-hidden bg-gradient-to-br from-pink-500 via-blue-500 to-indigo-700">

      {/* 🌈 Pink + Blue Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* ✨ Subtle Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 💡 Center Soft Light */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Top Section */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          About Ali & Sons Interior
        </h1>
        <p className="mt-4 text-white text-sm md:text-base">
          Delivering quality interior solutions since 2002
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-12 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="/about.png"
            alt="About"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-sm md:text-base leading-relaxed">
            Ali & Sons Interior was established in 2002 with a vision to create
            beautiful, comfortable, and functional living spaces. Over the years,
            we have built a strong reputation for delivering high-quality work
            and maintaining long-term relationships with our clients.
          </p>

          <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
            Our expertise includes home interior decoration, furniture work,
            electrical installations, painting, and modern false ceiling designs.
            We focus on attention to detail, premium materials, and customer
            satisfaction in every project we undertake.
          </p>

          <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
            With more than 20 years of experience, we continue to deliver
            excellence and innovation in interior design.
          </p>
        </motion.div>

      </div>

      {/* Stats Section */}
      <div className="mt-16 bg-gray-50/80 backdrop-blur-md py-12 rounded-2xl mx-4 md:mx-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600">20+</h3>
            <p className="text-black text-sm">Years Experience</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600">100+</h3>
            <p className="text-black text-sm">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600">100%</h3>
            <p className="text-black text-sm">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600">5+</h3>
            <p className="text-black text-sm">Services Offered</p>
          </div>

        </div>
      </div>

    </div></div>
  );
};

export default About;