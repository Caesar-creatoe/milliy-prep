import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    href: string;
    actionText?: string;
}

export default function Card({ title, description, href, actionText = "Boshlash" }: CardProps) {
    const isAvailable = href !== "#";

    return (
        <div className={`premium-card group flex flex-col justify-between ${!isAvailable ? 'opacity-70 grayscale-[0.5]' : ''}`}>
            <div>
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${isAvailable ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-gray-200 text-gray-500'}`}>
                        {title.includes('#') ? title.split('#')[1] : title.split(' ')[0][0]}
                    </div>
                    {isAvailable && (
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">Mavjud</span>
                    )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                    {description}
                </p>
            </div>

            <div className="mt-auto">
                {isAvailable ? (
                    <Link
                        href={href}
                        className="inline-flex items-center justify-center w-full px-6 py-4 border border-transparent text-base font-bold rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95"
                    >
                        {actionText}
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                ) : (
                    <div className="inline-flex items-center justify-center w-full px-6 py-4 border border-gray-100 text-base font-bold rounded-xl text-gray-400 bg-gray-50 cursor-not-allowed">
                        {actionText}
                    </div>
                )}
            </div>
        </div>
    );
}
