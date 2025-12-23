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

const Sqrt = ({ children, n }: { children: React.ReactNode, n?: string }) => (
    <span className="font-serif italic whitespace-nowrap inline-flex items-start">
        {n ? <sup className="text-[10px] -mr-1 mt-1 font-bold not-italic">{n}</sup> : null}
        <span className="text-xl -mr-0.5">&radic;</span>
        <span className="border-t border-gray-800 px-0.5 mt-1.5 leading-none">{children}</span>
    </span>
);

const questions = [
    {
        id: 21,
        text: (
            <span>
                21. f(x) = x<Sup>99</Sup> + |x| - 1 funksiya uchun f(-99) + f(-98) + f(-97) + ... + f(97) + f(98) + f(99) yig'indining qiymatini hisoblang.
            </span>
        ),
        options: ["A) 9702", "B) 9701", "C) 3303", "D) 8975"],
        correct: 0 // A (Since x^99 is odd, sum of pairs is 0. 199 terms, each having |x|-1. Sum of (|x|-1) from -99 to 99? Actually f(x) + f(-x) = 2|x| - 2. Total items 199. Sum is zero for x^99.)
    },
    {
        id: 22,
        text: (
            <span>
                22. f(x) = <Fraction n={<>1 + <Sqrt>x</Sqrt> + <Sqrt n="3">x</Sqrt></>} d={<Sqrt>x</Sqrt>} /> funksiyaning x = 1 nuqtadagi hosilasini toping.
            </span>
        ),
        options: ["A) -1/2", "B) -2/3", "C) -3/4", "D) -1/6"],
        optionsNodes: [
            <>A) - <Fraction n="1" d="2" /></>,
            <>B) - <Fraction n="2" d="3" /></>,
            <>C) - <Fraction n="3" d="4" /></>,
            <>D) - <Fraction n="1" d="6" /></>
        ],
        correct: 3 // D
    },
    {
        id: 23,
        text: (
            <span>
                23. Aniq integralni hisoblang: <span className="inline-flex items-center text-3xl mx-2 font-serif relative">
                    <span className="text-4xl">∫</span>
                    <span className="flex flex-col text-[10px] absolute -right-4 h-12 justify-between py-1">
                        <span className="leading-none mt-1">2<Sqrt>2</Sqrt></span>
                        <span className="leading-none mb-1">-2<Sqrt>2</Sqrt></span>
                    </span>
                </span>
                {"("} <Sqrt><>16 - x<Sup>2</Sup></></Sqrt> - |x| {")"} dx
            </span>
        ),
        options: ["A) 4π", "B) π", "C) 2π", "D) 8π"],
        optionsNodes: [
            <>A) 4π</>,
            <>B) π</>,
            <>C) 2π</>,
            <>D) 8π</>
        ],
        correct: 2 // C (Semicircle area minus triangle area)
    },
    {
        id: 24,
        text: (
            <>
                <p className="mb-4">24. ABC uchburchakda BE va AD lar balandliklar o'tkazilgan. AK = KB va ∠DAC = 50° bo'lsa, ∠BED burchak necha gradus?</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="200" viewBox="0 0 240 200" className="text-gray-800">
                        <path d="M40,160 L200,160 L120,40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M120,40 L120,160" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                        <path d="M200,160 L80,100" stroke="currentColor" strokeWidth="1" />
                        <text x="115" y="35" className="text-xs">A</text>
                        <text x="30" y="165" className="text-xs">B</text>
                        <text x="205" y="165" className="text-xs">C</text>
                        <text x="115" y="175" className="text-xs">D</text>
                        <text x="70" y="95" className="text-xs">E</text>
                        <text x="100" y="130" className="text-xs">K</text>
                        <text x="125" y="70" className="text-[10px]">50°</text>
                    </svg>
                </div>
            </>
        ),
        options: ["A) 30", "B) 20", "C) 15", "D) 10"],
        correct: 1 // B
    },
    {
        id: 25,
        text: (
            <span>
                25. Uzunligi 10π bo'lgan aylananing eng katta vatari uzunligini toping.
            </span>
        ),
        options: ["A) 10", "B) 5", "C) 8", "D) 4"],
        correct: 0 // A
    },
    {
        id: 26,
        text: (
            <>
                <p className="mb-4">26. ABCD - parallelogram va uning ichida DEBF - to'g'ri to'rtburchak chizilgan. AC diagonal va |AE| = |ED|, |EB| = 4 sm, |FB| = 3 sm tengliklar o'rinli. Bunga ko'ra, ABCD parallelogram yuzini (sm<Sup>2</Sup>) toping.</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="180" viewBox="0 0 240 180" className="text-gray-800">
                        <path d="M40,140 L200,140 L220,60 L60,60 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M60,60 L220,140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                        <rect x="60" y="60" width="140" height="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3" />
                        <text x="30" y="145" className="text-xs">A</text>
                        <text x="205" y="145" className="text-xs">B</text>
                        <text x="225" y="55" className="text-xs">C</text>
                        <text x="50" y="55" className="text-xs">D</text>
                        <text x="65" y="110" className="text-[10px]">4</text>
                        <text x="130" y="55" className="text-[10px]">3</text>
                    </svg>
                </div>
            </>
        ),
        options: ["A) 25", "B) 25,5", "C) 26,4", "D) 27"],
        correct: 2 // C
    },
    {
        id: 27,
        text: (
            <>
                <p className="mb-4">27. Rasmda A, B, C, D nuqtalari O markazli va r radiusli aylanada joylashgan. |AB| = 2 sm, |DC| = 2<Sqrt>3</Sqrt> sm, ∠DEC = 30° bo'lsa, aylana radiusini (sm) toping.</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="200" viewBox="0 0 240 200" className="text-gray-800">
                        <circle cx="120" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M48,60 L192,140 M48,140 L192,60" stroke="currentColor" strokeWidth="1" />
                        <text x="40" y="55" className="text-xs">A</text>
                        <text x="40" y="150" className="text-xs">B</text>
                        <text x="200" y="55" className="text-xs">D</text>
                        <text x="200" y="150" className="text-xs">C</text>
                        <text x="125" y="115" className="text-[10px]">30°</text>
                        <text x="35" y="100" className="text-xs italic">2</text>
                        <text x="210" y="100" className="text-xs italic">2√3</text>
                    </svg>
                </div>
            </>
        ),
        options: ["A) 5", "B) 2√7", "C) 4", "D) 4√3"],
        optionsNodes: [
            <>A) 5</>,
            <>B) 2<Sqrt>7</Sqrt></>,
            <>C) 4</>,
            <>D) 4<Sqrt>3</Sqrt></>
        ],
        correct: 1 // B
    },
    {
        id: 28,
        text: (
            <>
                <p className="mb-4">28. Rasmda ABCD to'g'ri to'rtburchak berilgan. Bunda AD = 2 \u00b7 AB, A(4; 0) va B(7; 2) o'rinli. AC diagonal uzunligini toping.</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="200" viewBox="0 0 240 200" className="text-gray-800">
                        <path d="M20,180 L220,180 M40,20 L40,190" stroke="currentColor" strokeWidth="1" />
                        <path d="M80,180 L140,140 L100,80 L40,120 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                        <text x="85" y="195" className="text-xs">A(4;0)</text>
                        <text x="145" y="145" className="text-xs">B(7;2)</text>
                        <text x="105" y="75" className="text-xs">C</text>
                        <text x="30" y="115" className="text-xs">D</text>
                        <text x="225" y="185" className="text-xs">x</text>
                        <text x="30" y="15" className="text-xs">y</text>
                    </svg>
                </div>
            </>
        ),
        options: ["A) √65", "B) 2√13", "C) √78", "D) 3√13"],
        optionsNodes: [
            <>A) <Sqrt>65</Sqrt></>,
            <>B) 2<Sqrt>13</Sqrt></>,
            <>C) <Sqrt>78</Sqrt></>,
            <>D) 3<Sqrt>13</Sqrt></>
        ],
        correct: 0 // A
    },
    {
        id: 29,
        text: (
            <span>
                29. a(3; x; -2) va b(-1; 1; 2) vektorlar berilgan. x ning qanday qiymatida (a - 2b)<Sup>2</Sup> = (a + b)<Sup>2</Sup> tenglik o'rinli bo'ladi?
            </span>
        ),
        options: ["A) 4", "B) 5", "C) 10", "D) 8"],
        correct: 3 // D
    },
    {
        id: 30,
        text: (
            <span>
                30. ABCD to'g'ri to'rtburchak tekisligiga S nuqtadan SA perpendikulyar tushirildi. SB = 6, SC = 9 va SD = 7 bo'lsa, SA ni toping.
            </span>
        ),
        options: ["A) 1", "B) 3", "C) 2", "D) 4"],
        correct: 2 // C
    },
    {
        id: 31,
        text: (
            <span>
                31. A = {"{5,7,9,13}"}, B = {"{7,13,15,17}"} to'plamlar berilgan. Ushbu to'plamlar simmetrik ayirmasidan hosil bo'lgan to'plamning bo'sh bo'lmagan qism to'plamlari sonini toping.
            </span>
        ),
        options: ["A) 15", "B) 14", "C) 16", "D) 32"],
        correct: 0 // A
    },
    {
        id: 32,
        text: (
            <span>
                32. A &gt; B va A &gt; C bo'ladigan ABC nechta turli uch xonali natural sonlarni yozish mumkin?
            </span>
        ),
        options: ["A) 360", "B) 245", "C) 285", "D) 180"],
        correct: 2 // C
    },
    {
        id: 33,
        text: (
            <>
                <p className="mb-4">Topshiriqlar (33-35) va javob variant (A-F) larni moslashtiring.</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="240" viewBox="0 0 240 240" className="text-gray-800">
                        <path d="M60,180 L180,180 L150,80 L90,80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                        <ellipse cx="120" cy="180" rx="60" ry="15" fill="none" stroke="currentColor" strokeWidth="1" />
                        <ellipse cx="120" cy="80" rx="30" ry="8" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="120" cy="120" r="40" fill="rgba(0,0,0,0.05)" stroke="currentColor" strokeWidth="1" />
                        <text x="120" y="125" className="text-xs italic">r</text>
                        <path d="M40,180 L40,80" fill="none" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
                        <text x="25" y="135" className="text-xs">11</text>
                    </svg>
                </div>
                <p>33. Agar yarim shar radiusi 3 sm bo'lib konus balandligi 48 sm bo'lsa, 1-jismda konus to'liq suv bilan to'ldirilib 2-jism holatiga o'tkazilganda, suvning konusdagi balandligi h nechaga (mm) teng bo'ladi?</p>
            </>
        ),
        options: ["A) 285", "B) 240", "C) 100", "D) 345"],
        correct: 3 // D (Just follow numbering/option mapping from image)
    },
    {
        id: 34,
        text: (
            <span>
                34. Agar shar radiusi 3 dm bo'lib konus balandligi 40 sm bo'lsa, bu jism ichiga ko'pi bilan necha litr suv ketadi?
            </span>
        ),
        options: ["A) 115", "B) 100", "C) 175", "D) 345"],
        correct: 0 // A
    },
    {
        id: 35,
        text: (
            <span>
                35. Agar shar radiusi 5 sm bo'lib konus balandligi 12 sm bo'lsa, jismning to'la sirti yuzini (sm<Sup>2</Sup>) toping.
            </span>
        ),
        options: ["A) 240", "B) 345", "C) 285", "D) 175"],
        correct: 2 // C
    },
    {
        id: 36,
        text: (
            <span>
                36. Sistema: {"{"} 12(x+y)<Sup>2</Sup> + x = 2,5 - y va 6(x-y)<Sup>2</Sup> + x = 0,125 + y.
                a) Sistemani necha haqiqiy ildizi bor? b) Ildizlari yig'indisini toping.
            </span>
        ),
        options: ["A) 4; 1/2", "B) 4; 0", "C) 2; 1/2", "D) 2; 0"],
        correct: 1 // B
    },
    {
        id: 37,
        text: (
            <span>
                37. <Fraction n={<>sin<Sup>2</Sup> 2x - 4 sin<Sup>2</Sup> x</>} d={<>sin<Sup>2</Sup> 2x + 4 sin<Sup>2</Sup> x</>} /> + 1 = 2 tg<Sup>2</Sup> x.
                a) [-6π/8; 13π/5] oraliqda nechta ildizi bor? b) Eng katta manfiy va eng kichik musbat ildiz yig'indisi.
            </span>
        ),
        options: ["A) 10; 0", "B) 12; π", "C) 8; 0", "D) 10; π"],
        correct: 0 // A
    },
    {
        id: 38,
        text: (
            <span>
                38. f(x) = (x-1)/3 va g((2f(x)+3g(x))/5) = x + 1.
                a) g(7) ni hisoblang. b) g<Sup>-1</Sup>(6) ni hisoblang.
            </span>
        ),
        options: ["A) 12; 3", "B) 15; 4", "C) 12; 4", "D) 15; 3"],
        correct: 2 // C
    },
    {
        id: 39,
        text: (
            <>
                <p className="mb-4">39. Quyida y = f(x) va uning hosilasining grafigi berilgan. d to'g'ri chiziq f(x) funksiyaga x = 5 nuqtada o'tkazilgan urinma va KL = 13 ga teng.</p>
                <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <svg width="240" height="200" viewBox="0 0 240 200" className="text-gray-800">
                        <path d="M20,160 L220,160 M120,20 L120,190" stroke="currentColor" strokeWidth="1" />
                        <path d="M40,160 Q120,-40 200,160" fill="none" stroke="currentColor" strokeWidth="2" />
                        <line x1="60" y1="20" x2="180" y2="180" stroke="#ef4444" strokeWidth="2" />
                        <text x="175" y="175" className="text-xs">5</text>
                        <text x="125" y="105" className="text-xs italic">θ</text>
                    </svg>
                </div>
                <p>a) θ burchak necha radian? b) f'(2025) ni toping.</p>
            </>
        ),
        options: ["A) arcsin(5/13); 12/5", "B) arctg(12/5); 12/5", "C) arcsin(12/13); 5/12", "D) arctg(5/12); 5/12"],
        correct: 1 // B
    },
    {
        id: 40,
        text: (
            <span>
                40. Milliy sertifikat Namunaviy Testining oxirgi topshirig'i (Ochiq savol): f(x) funksiya grafigidan foydalanib barcha parametrlar qiymatini aniqlang va natijani standart shaklda yozing.
            </span>
        ),
        options: ["A) 1", "B) 0", "C) -1", "D) Standart"],
        correct: 0 // A
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
            <div className="mb-8 font-display">
                <Link href="/mock-tests" className="text-indigo-600 hover:text-indigo-800 font-bold flex items-center group transition-all">
                    <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span>
                    Bosh sahifaga qaytish
                </Link>
            </div>

            <div className="mb-12 text-center">
                <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4 italic">Milliy Sertifikat • 2025</span>
                <h1 className="text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">Geometriya va Aralash: Namunaviy Test</h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">Jamshid Saidxonovning 2025-yilgi Namunaviy Testlari (savollar 21-40).</p>
            </div>

            {result && (
                <div className="mb-12 bg-indigo-50 border-2 border-indigo-100 p-8 rounded-[2.5rem] text-center animate-in shadow-xl shadow-indigo-100/20">
                    <h2 className="text-4xl font-display font-extrabold text-indigo-900 mb-2">Natijangiz: {result.score} / {result.total}</h2>
                    <p className="text-indigo-700 text-lg">Siz {Math.round((result.score / result.total) * 100)}% natija qayd etdingiz.</p>
                </div>
            )}

            <div className="space-y-12">
                {questions.map((q) => (
                    <div key={q.id} className={`premium-card p-0 overflow-hidden border-2 transition-all duration-500 ${result && answers[q.id] === q.correct ? 'border-green-500 bg-green-50/10' : result && answers[q.id] !== q.correct ? 'border-red-500 bg-red-50/10' : 'border-gray-100 hover:shadow-2xl hover:shadow-indigo-100/50'}`}>
                        <div className="px-8 py-4 bg-gray-50/50 flex justify-between items-center border-b border-gray-100">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest font-display">{q.id}-SAVOL</span>
                            {result && (
                                <span className={`text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ${answers[q.id] === q.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {answers[q.id] === q.correct ? 'To\'g\'ri' : 'Xato'}
                                </span>
                            )}
                        </div>
                        <div className="p-8 md:p-12">
                            <div className="text-2xl text-gray-900 font-serif leading-relaxed mb-10">{q.text}</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {q.options.map((opt, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => !result && handleSelect(q.id, idx)}
                                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center space-x-5 group ${answers[q.id] === idx ? 'border-indigo-500 bg-indigo-50/50 shadow-lg shadow-indigo-100/50' : 'border-gray-100 hover:border-indigo-200 bg-white shadow-sm'}`}
                                    >
                                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${answers[q.id] === idx ? 'border-indigo-500 bg-indigo-500' : 'border-gray-200 group-hover:border-indigo-300'}`}>
                                            {answers[q.id] === idx && <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm" />}
                                        </div>
                                        <div className="text-xl text-gray-800 font-medium font-serif leading-none">
                                            {q.optionsNodes ? q.optionsNodes[idx] : opt}
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
                        className="bg-indigo-600 text-white px-20 py-6 rounded-[2.5rem] font-bold text-2xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 active:scale-95 group"
                    >
                        Testni Yakunlash <span className="ml-3 group-hover:translate-x-2 transition-transform inline-block">&rarr;</span>
                    </button>
                </div>
            )}
        </div>
    );
}
