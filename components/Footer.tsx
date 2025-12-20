export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            M
                        </div>
                        <span className="text-xl font-display font-bold text-gray-900">
                            Milliy<span className="text-blue-600">Prep</span>
                        </span>
                    </div>

                    <div className="flex space-x-12">
                        <div className="flex flex-col space-y-3">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Platforma</span>
                            <a href="/mock-tests" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">Testlar</a>
                            <a href="/problems" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">Masalalar</a>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Ma'lumot</span>
                            <a href="/about" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">Biz haqimizda</a>
                            <a href="https://t.me/milliy_sertifikat" target="_blank" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">Telegram Kanal</a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Milliy Sertifikat Prep. Barcha huquqlar himoyalangan.
                    </p>
                    <p className="flex items-center">
                        Made with <span className="text-red-500 mx-1">❤</span> for Uzbek students
                    </p>
                </div>
            </div>
        </footer>
    );
}
