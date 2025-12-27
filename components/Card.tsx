import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    href: string;
    actionText?: string;
    difficulty?: "Oson" | "O'rta" | "Murakkab";
    topics?: string[];
    number?: string | number;
}

export default function Card({ title, description, href, actionText = "Boshlash", difficulty, topics, number }: CardProps) {
    const isAvailable = href !== "#";

    const difficultyColors = {
        "Oson": "text-green-600 bg-green-50 border-green-100",
        "O'rta": "text-yellow-600 bg-yellow-50 border-yellow-100",
        "Murakkab": "text-red-600 bg-red-50 border-red-100"
    };

    return (
        <div className={`premium-card group flex flex-col justify-between ${!isAvailable ? 'opacity-70 grayscale-[0.5]' : ''}`}>
            <div>
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${isAvailable ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-gray-200 text-gray-500'}`}>
                        {number || (title.includes('#') ? title.split('#')[1] : title.split(' ')[0][0])}
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                        {isAvailable && (
                            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">MAVJUD</span>
                        )}
                        {difficulty && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${difficultyColors[difficulty]}`}>
                                {difficulty.toUpperCase()}
                            </span>
                        )}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {description}
                </p>

                {topics && topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {topics.map((topic, idx) => (
                            <span key={idx} className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                                {topic}
                            </span>
                        ))}
                    </div>
                )}
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
