import React, { useState } from 'react';
import { FaEnvelope, FaGift, FaBell, FaCheckCircle, FaRocket } from 'react-icons/fa';

const NewsletterCTASection = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSubscribed(true);
            setEmail('');
        }, 1500);
    };

    const benefits = [
        {
            icon: FaGift,
            title: 'Diskon Eksklusif',
            description: 'Dapatkan kupon diskon hingga 30% khusus untuk subscriber'
        },
        {
            icon: FaBell,
            title: 'Update Produk Terbaru',
            description: 'Jadilah yang pertama tahu tentang produk dan koleksi terbaru'
        },
        {
            icon: FaRocket,
            title: 'Early Access',
            description: 'Akses lebih dulu ke flash sale dan event special lainnya'
        }
    ];

    if (isSubscribed) {
        return (
            <section className="py-16 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <FaCheckCircle className="text-white text-4xl" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Terima Kasih! 🎉
                        </h2>
                        <p className="text-xl text-gray-600 mb-6">
                            Anda telah berhasil berlangganan newsletter kami. Cek email Anda untuk konfirmasi dan dapatkan kupon diskon 20% untuk pembelian pertama!
                        </p>
                        <button
                            onClick={() => setIsSubscribed(false)}
                            className="bg-gradient-to-r from-gray-800 to-indigo-900 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Subscribe Lagi
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400 to-gray-600 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full font-medium text-sm mb-6">
                                <FaEnvelope className="text-indigo-300" />
                                <span>Newsletter Eksklusif</span>
                            </div>

                            <h2 className="text-5xl font-bold mb-6 leading-tight">
                                Jangan Lewatkan
                                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent block">
                                    Penawaran Terbaik!
                                </span>
                            </h2>

                            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                                Bergabunglah dengan lebih dari 50,000 pelanggan cerdas yang selalu update dengan promo terbaru, diskon eksklusif, dan rekomendasi produk personal dari Zentro.
                            </p>

                            <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 shadow-md">
                                            <benefit.icon className="text-indigo-300 text-2xl group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                                            <p className="text-indigo-200">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">Subscribe Sekarang</h3>
                            <p className="text-indigo-100 mb-8 text-center">Masukkan email Anda dan dapatkan diskon 20% untuk pembelian pertama!</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Masukkan email Anda"
                                        className="w-full bg-white/5 border border-white/20 rounded-xl py-4 px-6 text-white placeholder-indigo-200 focus:outline-none focus:border-indigo-400 transition-all duration-300"
                                        required
                                    />
                                    <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-300" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading || !email}
                                    className={`w-full bg-gradient-to-r from-gray-800 to-indigo-900 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 ${isLoading || !email ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Mendaftar...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaRocket />
                                            <span>Daftar Newsletter</span>
                                        </>
                                    )}
                                </button>
                            </form>

                            <p className="text-sm text-indigo-200 mt-6 text-center">
                                Kami menghargai privasi Anda. Tidak akan ada spam!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCTASection;