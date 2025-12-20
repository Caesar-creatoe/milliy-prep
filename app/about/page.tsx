export default function About() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Math Pattern Background */}
            <div className="absolute inset-0 math-bg opacity-10 pointer-events-none" />

            {/* Gradient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 animate-in">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">BIZ HAQIMIZDA</span>
                    <h1 className="text-5xl md:text-6xl font-display font-extrabold text-gray-900 mb-6">
                        Milliy Sertifikatga <br /> Professional Tayyorgarlik
                    </h1>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8" />
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed font-light">
                        Bizning maqsadimiz — har bir abituriyentga matematika fanidan milliy sertifikat imtihonlariga sifatli va samarali tayyorlanish imkoniyatini yaratishdir.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <div className="premium-card bg-white/80 glass">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sifatli Kontent</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Barcha test savollari Davlat Test Markazi (DTM) standartlari asosida, tajribali mutaxassislar tomonidan saralab olingan. Har bir masala imtihon darajasiga to'liq mos keladi.
                            </p>
                        </div>
                        <div className="premium-card bg-white/80 glass">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interaktiv Yondashuv</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Testlarni yechish davomida siz nafaqat o'z bilimingizni sinaysiz, balki xatolaringiz ustida ishlash imkoniyatiga ham ega bo'lasiz. Natijalar darhol hisoblanadi.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl rotate-3 shadow-2xl flex items-center justify-center p-12 overflow-hidden">
                            <div className="absolute inset-0 math-bg opacity-20" />
                            <div className="relative text-white text-center">
                                <span className="text-8xl font-bold block mb-4">100%</span>
                                <span className="text-xl font-medium uppercase tracking-widest">Bepul Platforma</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 premium-card glass p-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                                <div>
                                    <div className="font-bold text-gray-900">Ro'yxatdan o'tish shart emas</div>
                                    <div className="text-sm text-gray-500">Hoziroq boshlang</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center glass p-12 rounded-3xl border border-blue-50">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Tayyorgarlikni Bugundanoq Boshlang!</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Vaqtingizni unumli sarflang. Bizning bazamizda yuzlab real imtihon darajasidagi masalalar sizni kutmoqda.
                    </p>
                    <a
                        href="/mock-tests"
                        className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-lg font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl hover:shadow-blue-200 transition-all active:scale-95"
                    >
                        Testlarni Boshlash
                    </a>
                </div>
            </div>
        </div>
    );
}
