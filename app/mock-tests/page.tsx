import Card from "@/components/Card";

export default function MockTests() {
    return (
        <div className="relative min-h-screen">
            {/* Background Decor */}
            <div className="absolute inset-0 math-bg opacity-5 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-in">
                    <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6">IMTIHONLAR</span>
                    <h1 className="text-5xl font-display font-extrabold text-gray-900 tracking-tight mb-6">Mavjud Sinov Testlari</h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light leading-relaxed">
                        Bilimingizni sinash uchun o'zingizga mos testni tanlang. Har bir test milliy sertifikat formatida tuzilgan.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-12 animate-in">
                    <Card
                        title="1-Sinov Testi"
                        description="Mavzular: Algebraik ifodalar, tenglamalar va tengsizliklar. Imtihon darajasidagi masalalar."
                        href="/mock-tests/1"
                        actionText="Testni Boshlash"
                    />
                    <Card
                        title="2-Sinov Testi"
                        description="Mavzular: Logarifm, Progressiya, Geometriya. Murakkablik darajasi: Yuqori."
                        href="/mock-tests/2"
                        actionText="Testni Boshlash"
                    />
                    <Card
                        title="3-Sinov Testi"
                        description="Tez orada... Yangi test savollari ustida ish olib borilmoqda."
                        href="#"
                        actionText="Tayyor emas"
                    />
                    <Card
                        title="4-Sinov Testi"
                        description="Tez orada... Platformamizni muntazam kuzatib borishingizni tavsiya qilamiz."
                        href="#"
                        actionText="Tayyor emas"
                    />
                </div>

                {/* Info Box */}
                <div className="mt-24 p-8 bg-blue-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 shadow-2xl shadow-blue-200">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">Platformamiz doimiy yangilanib boradi</h3>
                        <p className="text-blue-100 opacity-90">Har haftada yangi test variantlari qo'shib boriladi.</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold border border-white/20">
                        Jami savollar: 100+
                    </div>
                </div>
            </div>
        </div>
    );
}
