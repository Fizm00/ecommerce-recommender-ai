import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-16 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 border border-indigo-400/30 rounded-xl flex items-center justify-center shadow-xl">
                                <span className="text-white font-bold text-xl">ZC</span>
                            </div>
                            <span className="text-2xl font-bold">Zentro</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Platform e-commerce cerdas yang memberikan pengalaman berbelanja terdepan dengan teknologi AI untuk rekomendasi produk yang personal.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: FaFacebook, color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/20' },
                                { icon: FaTwitter, color: 'hover:text-sky-400', bg: 'hover:bg-sky-500/20' },
                                { icon: FaInstagram, color: 'hover:text-pink-400', bg: 'hover:bg-pink-500/20' },
                                { icon: FaLinkedin, color: 'hover:text-indigo-400', bg: 'hover:bg-indigo-500/20' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-300 ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 border border-gray-600/30 hover:border-indigo-400/50`}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white flex items-center">
                            <span className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full mr-3"></span>
                            Jelajahi
                        </h4>
                        <ul className="space-y-3">
                            {['Home', 'Produk Terbaru', 'Kategori', 'Penawaran Khusus', 'Tentang Kami'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-indigo-300 hover:translate-x-2 transition-all duration-300 inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-400 rounded-full mr-0 group-hover:mr-3 transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white flex items-center">
                            <span className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full mr-3"></span>
                            Dukungan
                        </h4>
                        <ul className="space-y-3">
                            {['Pusat Bantuan', 'FAQ', 'Kebijakan Privasi', 'Syarat & Ketentuan', 'Hubungi Kami'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-indigo-300 hover:translate-x-2 transition-all duration-300 inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-400 rounded-full mr-0 group-hover:mr-3 transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white flex items-center">
                            <span className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full mr-3"></span>
                            Informasi Perusahaan
                        </h4>
                        <div >
                            <div className="flex items-start space-x-3 group hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300">
                                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                                <div>
                                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                                        <span className="font-semibold text-white">Alamat:</span><br />
                                        Jl. Teknologi No. 123, Jakarta 12345
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 group hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300">
                                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                                <div>
                                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                                        <span className="font-semibold text-white">Email:</span><br />
                                        <a href="mailto:info@zentro.com" className="hover:text-indigo-300 transition-colors">
                                            info@zentro.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 group hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300">
                                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                                <div>
                                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                                        <span className="font-semibold text-white">Telepon:</span><br />
                                        <a href="tel:+622112345678" className="hover:text-indigo-300 transition-colors">
                                            +62 21 1234 5678
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 group hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300">
                                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                                <div>
                                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                                        <span className="font-semibold text-white">Jam Operasional:</span><br />
                                        Senin - Jumat: 08:00 - 17:00 WIB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-700/50 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                            <p className="text-gray-400 text-center md:text-left font-medium">
                                © {currentYear} Zentro Enterprise. All rights reserved. Built for the future of commerce.
                            </p>
                        </div>
                        <div className="flex items-center space-x-8 text-sm text-gray-400 font-medium">
                            <a href="#" className="hover:text-indigo-300 transition-colors duration-300 relative group">
                                Privacy Policy
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a href="#" className="hover:text-indigo-300 transition-colors duration-300 relative group">
                                Terms of Service
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a href="#" className="hover:text-indigo-300 transition-colors duration-300 relative group">
                                Security
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a href="#" className="hover:text-indigo-300 transition-colors duration-300 relative group">
                                Compliance
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;