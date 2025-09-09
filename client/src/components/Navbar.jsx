import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUserCircle, FaSearch, FaBars, FaTimes, FaBell, FaHeart, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [cartCount] = useState(3);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showSearch, setShowSearch] = useState(false);

    const navItems = [
        { name: 'Home', href: '#' },
        {
            name: 'Products',
            href: '#',
            dropdown: ['Electronics', 'Fashion', 'Home & Living', 'Sports & Outdoor', 'Books & Media']
        },
        {
            name: 'Categories',
            href: '#',
            dropdown: ['New Arrivals', 'Best Sellers', 'Premium Collection', 'Sale Items']
        },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownEnter = (itemName) => {
        setActiveDropdown(itemName);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    const toggleMobileDropdown = (itemName) => {
        setActiveDropdown(activeDropdown === itemName ? null : itemName);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                ? 'bg-white/90 backdrop-blur-2xl shadow-lg border-b border-gray-100/50'
                : 'bg-white/95 backdrop-blur-xl shadow-sm'
                }`}>

                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 text-white text-center py-2 sm:py-2.5 text-xs sm:text-sm font-medium tracking-wide hidden sm:block">
                    <span className="inline-flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                        <span className="hidden md:inline">Enterprise Solutions Available | Free Consultation</span>
                        <span className="md:hidden">Free Consultation Available</span>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                    </span>
                </div>

                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">

                        <a href="#" className="group flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                            <div className="relative">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 rounded-lg flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                    <span className="text-white font-bold text-sm sm:text-lg lg:text-xl tracking-tight">ZC</span>
                                </div>
                                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-500 rounded-full"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">
                                    Zentro
                                </span>
                                <span className="text-xs sm:text-xs text-gray-500 font-medium uppercase tracking-wider hidden sm:block">
                                    Enterprise Platform
                                </span>
                            </div>
                        </a>

                        <div className="hidden xl:flex items-center space-x-2">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => handleDropdownEnter(item.name)}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <a
                                        href={item.href}
                                        className="flex items-center space-x-2 px-4 lg:px-6 py-3 text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium group relative rounded-lg hover:bg-indigo-50/50"
                                    >
                                        <span className="tracking-wide text-sm lg:text-base">{item.name}</span>
                                        {item.dropdown && (
                                            <FaChevronDown
                                                size={10}
                                                className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        )}
                                        <span className="absolute -bottom-0.5 left-4 lg:left-6 right-4 lg:right-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></span>
                                    </a>

                                    {item.dropdown && activeDropdown === item.name && (
                                        <div
                                            className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-gray-100/50 py-3 z-50 opacity-100 transform translate-y-0 transition-all duration-300"
                                            onMouseEnter={() => handleDropdownEnter(item.name)}
                                            onMouseLeave={handleDropdownLeave}
                                        >
                                            {item.dropdown.map((subItem, index) => (
                                                <a
                                                    key={subItem}
                                                    href="#"
                                                    className="block px-6 py-3 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 hover:translate-x-1"
                                                    style={{ animationDelay: `${index * 50}ms` }}
                                                >
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center space-x-3 xl:space-x-5">
                            <div className="relative group">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="w-64 xl:w-80 bg-gray-50/80 border border-gray-200 rounded-xl py-3 xl:py-3.5 px-4 xl:px-5 pr-12 xl:pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-500 focus:w-72 xl:focus:w-96 text-sm font-medium placeholder-gray-500"
                                    />
                                    <div className="absolute right-3 xl:right-4 top-1/2 transform -translate-y-1/2">
                                        <div className="w-7 h-7 xl:w-8 xl:h-8 bg-gradient-to-r from-gray-800 to-indigo-900 rounded-lg flex items-center justify-center shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 cursor-pointer">
                                            <FaSearch className="text-white" size={12} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 xl:space-x-3">
                                <button className="relative p-3 xl:p-3.5 text-gray-600 hover:text-indigo-600 bg-gray-50/80 hover:bg-indigo-50/50 backdrop-blur-sm rounded-xl transition-all duration-300 shadow-sm hover:shadow-md group">
                                    <FaBell size={15} />
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                                        {cartCount > 9 ? '9+' : cartCount}
                                    </span>
                                </button>

                                <button className="relative p-3 xl:p-3.5 text-gray-600 hover:text-indigo-600 bg-gray-50/80 hover:bg-indigo-50/50 backdrop-blur-sm rounded-xl transition-all duration-300 shadow-sm hover:shadow-md group">
                                    <FaHeart size={15} />
                                </button>

                                <button className="relative p-3 xl:p-3.5 text-gray-600 hover:text-indigo-600 bg-gray-50/80 hover:bg-indigo-50/50 backdrop-blur-sm rounded-xl transition-all duration-300 shadow-sm hover:shadow-md group">
                                    <FaShoppingCart size={15} />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 xl:w-5 xl:h-5 bg-gradient-to-r from-gray-800 to-indigo-900 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                                            {cartCount > 9 ? '9+' : cartCount}
                                        </span>
                                    )}
                                </button>

                                <div className="w-px h-8 bg-gray-200"></div>

                                <button className="flex items-center space-x-2 xl:space-x-3 px-4 xl:px-5 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg font-medium tracking-wide text-sm">
                                    <FaUserCircle size={15} />
                                    <span className="hidden xl:inline">Account</span>
                                </button>
                            </div>
                        </div>

                        <div className="hidden md:flex lg:hidden items-center space-x-3">
                            <button
                                onClick={() => setShowSearch(!showSearch)}
                                className="p-3 bg-gray-50 rounded-xl shadow-sm hover:bg-indigo-50/50 transition-all duration-300"
                            >
                                <FaSearch size={16} className="text-gray-600" />
                            </button>

                            <button className="relative p-3 bg-gray-50 rounded-xl shadow-sm hover:bg-indigo-50/50 transition-all duration-300">
                                <FaShoppingCart size={16} className="text-gray-600" />
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-gray-800 to-indigo-900 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            </button>

                            <button className="p-3 bg-gray-50 rounded-xl shadow-sm hover:bg-indigo-50/50 transition-all duration-300">
                                <FaUserCircle size={16} className="text-gray-600" />
                            </button>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:bg-indigo-50/50 transition-all duration-300"
                            >
                                <div className="w-5 h-5 flex flex-col justify-center items-center">
                                    <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                                    <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                    <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                                </div>
                            </button>
                        </div>

                        <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
                            <button
                                onClick={() => setShowSearch(!showSearch)}
                                className="p-2.5 sm:p-3 bg-gray-50 rounded-xl shadow-sm hover:bg-indigo-50/50 transition-all duration-300"
                            >
                                <FaSearch size={14} className="text-gray-600" />
                            </button>

                            <button className="relative p-2.5 sm:p-3 bg-gray-50 rounded-xl shadow-sm hover:bg-indigo-50/50 transition-all duration-300">
                                <FaShoppingCart size={14} className="text-gray-600" />
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-gray-800 to-indigo-900 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            </button>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2.5 sm:p-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:bg-indigo-50/50 transition-all duration-300"
                            >
                                <div className="w-4 h-4 sm:w-5 sm:h-5 flex flex-col justify-center items-center">
                                    <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-4 sm:w-5 rounded-sm ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                                    <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-4 sm:w-5 rounded-sm my-0.5 sm:my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                    <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-4 sm:w-5 rounded-sm ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className={`lg:hidden transition-all duration-300 ${showSearch ? 'max-h-20 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-sm font-medium placeholder-gray-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <div className="w-7 h-7 bg-gradient-to-r from-gray-800 to-indigo-900 rounded-lg flex items-center justify-center shadow-md cursor-pointer">
                                    <FaSearch className="text-white" size={12} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`xl:hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    } bg-white/95 backdrop-blur-2xl border-t border-gray-100`}>
                    <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-2">
                        {navItems.map((item, index) => (
                            <div key={item.name} className="space-y-2">
                                <button
                                    onClick={() => item.dropdown ? toggleMobileDropdown(item.name) : null}
                                    className="flex items-center justify-between w-full py-3 sm:py-4 px-4 sm:px-5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-all duration-300 font-medium shadow-sm text-left"
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <span className="tracking-wide text-sm sm:text-base">{item.name}</span>
                                    {item.dropdown && (
                                        <FaChevronDown
                                            size={10}
                                            className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                                        />
                                    )}
                                </button>
                                {item.dropdown && activeDropdown === item.name && (
                                    <div className="pl-4 sm:pl-6 space-y-1 animate-in slide-in-from-top-2 duration-300">
                                        {item.dropdown.map((subItem) => (
                                            <a
                                                key={subItem}
                                                href="#"
                                                className="block py-2.5 sm:py-3 px-3 sm:px-4 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg transition-all duration-200"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="pt-4 sm:pt-6 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <button className={`p-3 bg-gray-100 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 rounded-xl shadow-sm transition-all duration-300 transform-gpu hover:scale-105 ${isOpen ? 'animate-in zoom-in fade-in' : ''
                                    }`} style={{ animationDelay: isOpen ? '400ms' : '0ms' }}>
                                    <FaHeart size={15} />
                                </button>
                                <button className={`p-3 bg-gray-100 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 rounded-xl shadow-sm transition-all duration-300 relative transform-gpu hover:scale-105 ${isOpen ? 'animate-in zoom-in fade-in' : ''
                                    }`} style={{ animationDelay: isOpen ? '450ms' : '0ms' }}>
                                    <FaBell size={15} />
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                                        {cartCount > 9 ? '9+' : cartCount}
                                    </span>
                                </button>
                            </div>
                            <button className={`px-4 sm:px-6 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl font-semibold shadow-md tracking-wide transition-all duration-300 text-sm transform-gpu hover:scale-105 hover:shadow-lg ${isOpen ? 'animate-in slide-in-from-right-4 fade-in' : ''
                                }`} style={{ animationDelay: isOpen ? '500ms' : '0ms' }}>
                                Account
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="h-16 sm:h-20 lg:h-24"></div>
            <div className="hidden sm:block h-8 lg:h-10"></div>
        </>
    );
};

export default Navbar;