import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/75 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="group flex items-center space-x-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
                                M
                            </div>
                            <span className="text-2xl font-display font-bold text-gray-900 tracking-tight">
                                Milliy<span className="text-blue-600">Prep</span>
                            </span>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link href="/mock-tests" className="inline-flex items-center px-1 pt-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                            Testlar
                        </Link>
                        <Link href="/problems" className="inline-flex items-center px-1 pt-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                            Masalalar
                        </Link>
                        <Link href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                            Biz haqimizda
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
