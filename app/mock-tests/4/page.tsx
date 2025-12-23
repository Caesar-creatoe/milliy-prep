"use client";

import Link from "next/link";
import { useState } from "react";

const Fraction = ({ n, d }: { n: React.ReactNode, d: React.ReactNode }) => (
    <span className="inline-flex flex-col align-middle text-center text-sm mx-1 font-serif">
        <span className="border-b border-gray-800 px-1">{n}</span>
        <span>{d}</span>
    </span>
);

const Sup = ({ children }: { children: React.ReactNode }) => (
    <sup className="text-xs ml-0.5 font-serif">{children}</sup>
);

const Sub = ({ children }: { children: React.ReactNode }) => (
    <sub className="text-xs ml-0.5 font-serif">{children}</sub>
);

const Sqrt = ({ children }: { children: React.ReactNode }) => (
    <span className="font-serif italic whitespace-nowrap">
        &radic;<span className="border-t border-gray-800 px-0.5">{children}</span>
    </span>
);

const questions = [
    {
        id: 1, // Corresponding to Q25
        text: (
            <>
                <p className="mb-4">ABCD to'g'ri trapetsiyaning AD va DC tomonlari mos ravishda 4 sm, 2 sm ga teng. Trapetsiyaning AC diagonali BC tomoniga perpendikulyar. Chizmadan foydalanib BC tomon uzunligini (sm) toping.</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="180" viewBox="0 0 240 180" className="text-gray-800">
                        <path d="M40,140 L40,60 L80,60 L200,140 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                        <text x="30" y="145" className="text-xs">A</text>
                        <text x="30" y="55" className="text-xs">D</text>
                        <text x="80" y="55" className="text-xs">C</text>
                        <text x="205" y="145" className="text-xs">B</text>
                        <text x="25" y="100" className="text-xs">4</text>
                        <text x="55" y="55" className="text-xs">2</text>
                        <path d="M40,140 L80,60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                        {/* Right angle symbols */}
                        <path d="M40,130 L50,130 L50,140" fill="none" stroke="currentColor" strokeWidth="1" />
                        <path d="M40,70 L50,70 L50,60" fill="none" stroke="currentColor" strokeWidth="1" />
                        {/* Diagonal perp check: AC is diag */}
                        <path d="M75,68 L68,75 L73,82" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
            </>
        ),
        options: ["A) 7", "B) 2√15", "C) 6√2", "D) 4√5"],
        optionsNodes: [
            <>A) 7</>,
            <>B) 2<Sqrt>15</Sqrt></>,
            <>C) 6<Sqrt>2</Sqrt></>,
            <>D) 4<Sqrt>5</Sqrt></>
        ],
        correct: 1 // B
    },
    {
        id: 2, // Q26
        text: (
            <>
                <p className="mb-4">Rasmda har birining tomoni 4 sm ga teng bo'lgan muntazam oltiburchaklar bir-biri bilan qirralari ustma-ust tushadigan tarzda joylashtirilgan. Ko'k rangga bo'yalgan uchburchak yuzasini (sm<Sup>2</Sup>) toping.</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="200" viewBox="0 0 240 200" className="text-gray-800">
                        {/* Hexagon pattern skeleton */}
                        <g transform="translate(120, 100) scale(0.8)">
                            {[0, 60, 120, 180, 240, 300].map((angle) => (
                                <g key={angle} transform={`rotate(${angle}) translate(0, -60)`}>
                                    <path d="M-30,-17 L0,-34 L30,-17 L30,17 L0,34 L-30,17 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                                </g>
                            ))}
                            <path d="M0,0 L30,-51 L-30,-51 Z" fill="rgba(59, 130, 246, 0.2)" stroke="#2563eb" strokeWidth="2" />
                        </g>
                    </svg>
                </div>
            </>
        ),
        options: ["A) 72√3", "B) 54√3", "C) 64√3", "D) 48√3"],
        optionsNodes: [
            <>A) 72<Sqrt>3</Sqrt></>,
            <>B) 54<Sqrt>3</Sqrt></>,
            <>C) 64<Sqrt>3</Sqrt></>,
            <>D) 48<Sqrt>3</Sqrt></>
        ],
        correct: 3 // D
    },
    {
        id: 3, // Q27
        text: (
            <span>
                ABCD parallelogrammning tomonlari AB = 10 va BC = 13 ga teng. E nuqta DC ning o'rtasi. AE kesma BD diagonalni F nuqtada kesib o'tadi va AE \u22a5 DC bo'lsa, AF kesma uzunligini toping.
            </span>
        ),
        options: ["A) 7", "B) 8", "C) 9", "D) 12"],
        correct: 1 // B
    },
    {
        id: 4, // Q28
        text: (
            <span>
                Teng yonli uchburchakka tashqi chizilgan aylana radiusi 4<Sqrt>3</Sqrt> ga teng. Uchburchak asosining o'rtasi va yon tomoni o'rtasini tutashtiruvchi kesma uzunligi tashqi chizilgan aylana radiusidan <Sqrt>2</Sqrt> marta kichik bo'lsa, bu teng yonli uchburchak yuzini toping.
            </span>
        ),
        options: ["A) 24√3", "B) 48√3", "C) 48", "D) 24"],
        optionsNodes: [
            <>A) 24<Sqrt>3</Sqrt></>,
            <>B) 48<Sqrt>3</Sqrt></>,
            <>C) 48</>,
            <>D) 24</>
        ],
        correct: 1 // B
    },
    {
        id: 5, // Q29
        text: (
            <>
                <p className="mb-4">Koordinatalar sistemasida Oy o'qiga A nuqtada urinuvchi Ox o'qini B, C nuqtada kesib o'tuvchi tenglamasi (x - 2<Sqrt>2</Sqrt>)<Sup>2</Sup> + (y - 2)<Sup>2</Sup> = r<Sup>2</Sup> ko'rinishda bo'lgan aylana tasvirlangan. Shtrixlangan soha yuzini toping.</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="200" viewBox="0 0 240 200" className="text-gray-800">
                        <path d="M20,180 L220,180 M40,20 L40,190" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="100" cy="140" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M60,180 A60,60 0 0 0 140,180" fill="rgba(0,0,0,0.1)" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                        <text x="35" y="145" className="text-xs">A</text>
                        <text x="60" y="195" className="text-xs">B</text>
                        <text x="140" y="195" className="text-xs">C</text>
                        <text x="225" y="185" className="text-xs">x</text>
                        <text x="35" y="15" className="text-xs">y</text>
                    </svg>
                </div>
            </>
        ),
        options: ["A) π - 2", "B) π - 3", "C) 2π - 2", "D) 2π - 4"],
        optionsNodes: [
            <>A) π - 2</>,
            <>B) π - 3</>,
            <>C) 2π - 2</>,
            <>D) 2π - 4</>
        ],
        correct: 0 // A
    },
    {
        id: 6, // Q30
        text: (
            <span>
                A nuqtadan α tekislikka AB perpendikulyar va AC, AD teng og'malar o'tkazilgan, bu og'malarning proyeksiyalari orasidagi burchak 90° ga teng. Agar CD = 2 sm va AB = 4 sm bo'lsa, bu og'malar uzunligini (cm) toping.
            </span>
        ),
        options: ["A) 3", "B) 3√2", "C) 2√5", "D) 2√3"],
        optionsNodes: [
            <>A) 3</>,
            <>B) 3<Sqrt>2</Sqrt></>,
            <>C) 2<Sqrt>5</Sqrt></>,
            <>D) 2<Sqrt>3</Sqrt></>
        ],
        correct: 1 // B
    },
    {
        id: 7, // Q33-35 Context
        text: (
            <>
                <p className="mb-4 italic text-sm">Topshiriqlar (33-35) va javob variant (A-F) larni o'zaro moslashtiring.</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="240" viewBox="0 0 240 240" className="text-gray-800">
                        {/* Cut Cone */}
                        <path d="M60,180 L180,180 L140,80 L100,80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                        <ellipse cx="120" cy="180" rx="60" ry="15" fill="none" stroke="currentColor" strokeWidth="1" />
                        <ellipse cx="120" cy="80" rx="20" ry="5" fill="none" stroke="currentColor" strokeWidth="1" />
                        {/* Sphere inside */}
                        <circle cx="120" cy="110" r="30" fill="rgba(0,0,0,0.05)" stroke="currentColor" strokeWidth="1" />
                        <text x="120" y="105" className="text-xs italic">r</text>
                        {/* Dimensions */}
                        <path d="M40,180 L40,80" fill="none" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
                        <text x="25" y="130" className="text-xs">11</text>
                        <path d="M160,180 L160,20" fill="none" stroke="currentColor" strokeWidth="1" />
                        <text x="170" y="100" className="text-xs">20</text>
                    </svg>
                </div>
                <p>Radiusi r bo'lgan shar, rasmda ko'rsatilganidek balandligi 11 sm bo'lgan, usti ochiq kesik konus ichiga joylashtirilgan. Kesik konus kichik asosini (ustini) qoplovchi doira yuzi 9π sm<Sup>2</Sup> va sharni eng yuqori nuqtasidan yergacha bo'lgan masofa 20 sm ga teng. (π=3 deb olinsin)</p>
            </>
        ),
        options: ["Savol 33: Shar diametrini toping. (Javob: D)", "Savol 34: Sharning kesik konus ichida qolgan segmenti hajmini toping. (Javob: F)", "Savol 35: Kesik konus yasovchisi √125 cm bo'lsa, uning katta asosi yuzini toping. (Javob: E)"],
        correct: 0 // Placeholder for matching question
    },
    {
        id: 8, // Q39 Parabola
        text: (
            <>
                <p className="mb-4">Rasmda f(x) = ax<Sup>2</Sup> + bx + c parabola grafigining x = 1 nuqtasiga o'tkazilgan urinma to'g'ri chiziq tasvirlangan.</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="200" viewBox="0 0 240 200" className="text-gray-800">
                        <path d="M20,160 L220,160 M40,20 L40,180" fill="none" stroke="currentColor" strokeWidth="1" />
                        {/* Parabola */}
                        <path d="M40,160 Q100,-20 160,160" fill="none" stroke="currentColor" strokeWidth="2" />
                        {/* Tangent at x=1 (approx) */}
                        <line x1="40" x2="160" y1="40" y2="160" stroke="#ef4444" strokeWidth="2" />
                        <text x="100" y="175" className="text-xs">1</text>
                        <text x="40" y="175" className="text-xs">0</text>
                    </svg>
                </div>
                <p>a) a - c ning qiymatini toping.</p>
                <p>b) OA kesma uzunligini toping.</p>
            </>
        ),
        options: ["A) -3", "B) 2", "C) -5", "D) 0"],
        correct: 1 // Placeholder result
    }
];

export default function MockTest4() {
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [result, setResult] = useState<{ score: number, total: number } | null>(null);

    const handleSelect = (questionId: number, optionIndex: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) score++;
        });
        setResult({ score, total: questions.length });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
            <div className="mb-8">
                <Link href="/mock-tests" className="text-blue-600 hover:text-blue-800 font-bold flex items-center">
                    &larr; Chiqish
                </Link>
            </div>

            <div className="mb-12 text-center">
                <h1 className="text-4xl font-display font-extrabold text-gray-900 mb-4">2025 Namunaviy Test: Geometriya</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">Milliy sertifikat darajasidagi murakkab geometriya masalalari.</p>
            </div>

            {result && (
                <div className="mb-12 bg-indigo-50 border-2 border-indigo-100 p-8 rounded-[2.5rem] text-center animate-in">
                    <h2 className="text-3xl font-display font-extrabold text-indigo-900 mb-2">Natijangiz: {result.score} / {result.total}</h2>
                    <p className="text-indigo-700 text-lg">Siz {Math.round((result.score / result.total) * 100)}% natija qayd etdingiz.</p>
                </div>
            )}

            <div className="space-y-12">
                {questions.map((q) => (
                    <div key={q.id} className={`premium-card p-0 overflow-hidden border-2 transition-all ${result && answers[q.id] === q.correct ? 'border-green-500 ring-4 ring-green-50' : result && answers[q.id] !== q.correct ? 'border-red-500 ring-4 ring-red-50' : 'border-gray-100'}`}>
                        <div className="px-8 py-4 bg-gray-50/50 flex justify-between items-center border-b border-gray-100">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{q.id}-SAVOL</span>
                            {result && (
                                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${answers[q.id] === q.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {answers[q.id] === q.correct ? 'To\'g\'ri' : 'Xato'}
                                </span>
                            )}
                        </div>
                        <div className="p-8">
                            <div className="text-2xl text-gray-900 font-serif leading-relaxed mb-10">{q.text}</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {q.options.map((opt, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => !result && handleSelect(q.id, idx)}
                                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center space-x-4 ${answers[q.id] === idx ? 'border-blue-500 bg-blue-50/50' : 'border-gray-100 hover:border-blue-200 bg-white'}`}
                                    >
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${answers[q.id] === idx ? 'border-blue-500 bg-blue-500' : 'border-gray-200'}`}>
                                            {answers[q.id] === idx && <div className="w-2 h-2 bg-white rounded-full" />}
                                        </div>
                                        <div className="text-lg text-gray-800 font-medium font-serif">
                                            {idx < q.optionsNodes?.length ? q.optionsNodes[idx] : opt}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!result && (
                <div className="mt-16 flex justify-center pb-24">
                    <button
                        onClick={calculateScore}
                        className="bg-indigo-600 text-white px-16 py-5 rounded-[2rem] font-bold text-xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 active:scale-95"
                    >
                        Testni Yakunlash &rarr;
                    </button>
                </div>
            )}
        </div>
    );
}
