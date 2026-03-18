import { useState, useCallback, memo } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // ✅ optimized handlers
    const openMenu = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleNavClick = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
<header className="w-full sticky top-0 z-50 backdrop-blur-md shadow-sm bg-gradient-to-r from-[#1e3a8a]/90 via-[#4f46e5]/90 to-[#db2777]/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo / Brand */}
                    <Link to="/" className="text-2xl font-bold text-white">
                        Ali & Sons
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative text-sm font-medium transition-colors duration-300 
  ${isActive
                                        ? "text-yellow-400"
                                        : "text-white "
                                    }

  after:content-[''] after:absolute after:left-0 after:bottom-0 
  after:h-[2px] after:w-full after:bg-amber-300 
  after:origin-left after:scale-x-0 
  after:transition-transform after:duration-300

  ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}
`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Call Button (Desktop) */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="tel:9330823581"
                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
                        >
                            <Phone size={16} />
                            Call Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={openMenu}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-white/80 backdrop-blur-lg z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                        />

                        {/* Sidebar */}
                        <motion.div
                            className="fixed top-0 right-0 w-72 h-full z-[999] shadow-2xl p-0 flex flex-col 
  bg-gradient-to-br from-[#1e3a8a] via-[#4f46e5] to-[#db2777]"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween" }}
                        >
                            {/* Close Button */}
                            <div className="flex justify-between items-center mb-8 pl-4 pt-4 text-white">
                                <h2 className="text-xl font-semibold">Menu</h2>
                                <button onClick={closeMenu}>
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="pt-4 bg-gradient-to-br from-[#1e3a8a] via-[#4f46e5] to-[#db2777]">
                            <div className="flex flex-col gap-6 px-6">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        onClick={handleNavClick}
                                        className="text-lg text-white/90 hover:text-white transition"
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>

                            {/* Contact */}
                            <div className="mt-auto p-6">
                                <a
                                    href="tel:9330823581"
                                    className="w-full flex justify-center items-center gap-2 bg-white text-blue-700 py-3 rounded-lg hover:bg-gray-100 transition"
                                >
                                    <Phone size={18} />
                                    Call Now
                                </a>
                            </div></div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default memo(Navbar);