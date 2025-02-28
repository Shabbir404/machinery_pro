import { useState } from "react";
import { Link, NavLink, } from "react-router-dom";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const handleNavigate = (e) => {
    //     e.preventDefault();
    //     window.location.href = '/about';
    // }

    return (
        <>
            <div className="h-20 w-full"></div>
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40">
                <div className="border-b border-gray-100">
                    <div className="md:w-10/12 mx-auto">
                        <nav className="px-4">
                            <div className="flex items-center justify-between h-20">
                                {/* Logo */}
                                <div className="flex-shrink-0">
                                    <span className="text-orange-500 font-bold text-3xl tracking-tight">
                                        Machina<span className="text-gray-800">Pro</span>
                                    </span>
                                </div>

                                {/* Desktop Navigation */}
                                <div className="hidden md:flex  md:ml-60">
                                    <div className="flex space-x-8">
                                        <NavLink to='/'
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-orange-500 font-medium transition-colors duration-200 relative group"
                                                    : "text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
                                            }

                                        >
                                            Home
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                                        </NavLink>

                                        <NavLink
                                            to="/about"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-orange-500 font-medium transition-colors duration-200 relative group"
                                                    : "text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
                                            }
                                        >
                                            About Us
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                                        </NavLink>

                                        <NavLink
                                            to="/services"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-orange-500 font-medium transition-colors duration-200 relative group"
                                                    : "text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
                                            }
                                        >
                                            Services
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                                        </NavLink>

                                        <NavLink
                                            to="/blog"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-orange-500 font-medium transition-colors duration-200 relative group"
                                                    : "text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
                                            }
                                        >
                                            Blog
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                                        </NavLink>

                                        <NavLink
                                            to="/projects"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-orange-500 font-medium transition-colors duration-200 relative group"
                                                    : "text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
                                            }
                                        >
                                            Projects
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                                        </NavLink>

                                        <NavLink
                                            to="/pricing"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-orange-500 font-medium transition-colors duration-200 relative group"
                                                    : "text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
                                            }
                                        >
                                            Pricing
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                                        </NavLink>

                                        <NavLink
                                            to="/contact"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-orange-500 font-medium transition-colors duration-200 relative group"
                                                    : "text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
                                            }
                                        >
                                            Contact us
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                                        </NavLink>
                                    </div>
                                </div>

                                {/* Contact Info - Desktop start*/}
                                <div className="hidden md:flex items-center space-x-2  px-4 py-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span className="text-gray-700 font-medium">+01123456789</span>
                                </div>
                                {/* Contact Info - Desktop end*/}

                                {/* Mobile Menu Button */}
                                <div className="md:hidden">
                                    <button
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className="p-2 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none"
                                    >
                                        {!isMenuOpen ? (
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        ) : (
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {/* Mobile Menu Button end*/}
                            </div>

                            {/* Mobile Navigation start */}
                            {isMenuOpen && (
                                <div className="md:hidden bg-white">
                                    <div className="px-2 pt-2 pb-3 space-y-2">
                                        <Link to="/" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors duration-200">Home</Link>
                                        <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors duration-200">About Us</Link>
                                        <Link to="/services" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors duration-200">Services</Link>
                                        <Link to="/blog" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors duration-200">Blog</Link>
                                        <Link to="/projects" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors duration-200">Projects</Link>
                                        <Link to="/pricing" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors duration-200">Pages</Link>
                                        <Link to="/contact" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors duration-200">Contact Us</Link>
                                        <div className="flex items-center space-x-2 px-4 py-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                            <span className="text-gray-700 font-medium">+01123456789</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Mobile Navigation end */}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;