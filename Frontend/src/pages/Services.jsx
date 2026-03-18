import { motion } from "framer-motion";

const services = [
  {
    title: "Home Interior Design",
    desc: "We provide complete home interior solutions that enhance both beauty and functionality. From planning to execution, we transform your space into a modern and comfortable living environment.",
    img: "/services/1.jpeg",
  },
  {
    title: "Furniture Work",
    desc: "Custom-made furniture designed according to your needs and space. We use high-quality materials to ensure durability and elegance.",
    img: "/services/2.jpeg",
  },
  {
    title: "Electrical Work",
    desc: "Professional electrical installation and maintenance services ensuring safety and efficiency for your home.",
    img: "/services/3.jpeg",
  },
  {
    title: "Painting Services",
    desc: "Premium interior and exterior painting services to give your home a fresh, vibrant, and long-lasting finish.",
    img: "/services/4.jpeg",
  },
  {
    title: "False Ceiling",
    desc: "Stylish and modern false ceiling designs that enhance lighting and overall aesthetics of your home.",
    img: "/services/5.jpeg",
  },
];

const Services = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="py-16 max-w-7xl sm:px-16 ">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Our Services
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          We offer a wide range of interior services to make your home beautiful,
          functional, and comfortable.
        </p>
      </div>

      {/* Services List */}
      <div className="mt-16 max-w-7xl mx-auto px-4 space-y-16">

        {services.map((service, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[280px] md:h-[350px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {service.title}
              </h2>
              <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          </div>
        ))}

      </div>

    </div></div>
  );
};

export default Services;