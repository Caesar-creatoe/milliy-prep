import Link from "next/link";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Decor */}
      <div className="absolute inset-0 math-bg opacity-5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-50/20 rounded-full blur-[120px] pointer-events-none" />

      <main className="relative">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-in">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-blue-100 shadow-sm">
              2025 Yangilangan Testlar
            </span>
            <h1 className="text-6xl md:text-7xl font-display font-extrabold text-gray-900 tracking-tight mb-8">
              Milliy Sertifikatga <br />
              <span className="text-blue-600">Ishonchli Qadam</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed mb-12 font-light">
              Matematika fanidan milliy sertifikat imtihonlariga eng samarali va bepul tayyorlanish platformasi. Real darajadagi testlar va eksklyuziv masalalar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/mock-tests"
                className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
              >
                Shug'ullanishni boshlash
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 text-lg font-bold rounded-2xl border border-gray-200 shadow-sm hover:bg-gray-50 transition-all hover:-translate-y-1"
              >
                Batafsil ma'lumot
              </Link>
            </div>
          </div>

          {/* Stats/Features Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card text-center p-10">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">DTM</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Ekspert Kontent</h3>
              <p className="text-gray-500 leading-relaxed">Savollarimiz real sertifikat imtihon darajasiga to'liq mos keladi.</p>
            </div>
            <div className="premium-card text-center p-10">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">0$</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Butkul Bepul</h3>
              <p className="text-gray-500 leading-relaxed">Hech qanday to'lovlarsiz barcha testlardan foydalanish imkoniyati.</p>
            </div>
            <div className="premium-card text-center p-10">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">∞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Cheksiz Urinish</h3>
              <p className="text-gray-500 leading-relaxed">Bilimingizni oshirish uchun testlarni xohlagancha qayta yeching.</p>
            </div>
          </div>
        </div>

        {/* Featured Card Section */}
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-2">Eng Ko'p Yechilayotgan Testlar</h2>
              <p className="text-lg text-gray-500">Tayyorgarlikni eng talabgor bo'limlardan boshlang.</p>
            </div>
            <Link href="/mock-tests" className="text-blue-600 font-bold hover:underline">
              Barcha testlarni ko'rish &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <Card
              number="1"
              title="Namunaviy Algebra (2025)"
              description="Jamshid Saidxonovning 2025-yilgi namunaviy testi. Algebra bo'limidan 20 ta professional masala."
              href="/mock-tests/3"
              actionText="Testni Boshlash"
            />
            <Card
              number="2"
              title="Namunaviy Geometriya (2025)"
              description="Geometriya, sterometriya va oliy matematika elementlari bo'yicha 2025-yilgi namunaviy test (20 ta masala)."
              href="/mock-tests/4"
              actionText="Testni Boshlash"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
