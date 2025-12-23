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
        id: 1,
        text: (
            <span>
                1. x, y va z raqamlar uchun ushbu x + y = 10, <Fraction n="x" d="y" /> + 2 = z tengliklar o'rinli bo'lsa y ning qabul qilishi mumkin bo'lgan qiymatlari yig'indisini toping.
            </span>
        ),
        options: ["A) 5", "B) 8", "C) 7", "D) 3"],
        correct: 1 // B (y=2, x=8; y=5, x=5 doesn't work for z digit)
    },
    {
        id: 2,
        text: (
            <span>
                2. Hisoblang: 0,4(3) + 0,6(2) \u00b7 2 <Fraction n={<>3 <Fraction n="2" d="5" /> - <Fraction n="1" d="4" /></>} d={<>0,5(8) \u00b7 <Fraction n="50" d="53" /></>} />
            </span>
        ),
        options: ["A) 43/90", "B) 41/92", "C) 13/45", "D) 22/45"],
        optionsNodes: [
            <>A) <Fraction n="43" d="90" /></>,
            <>B) <Fraction n="41" d="92" /></>,
            <>C) <Fraction n="13" d="45" /></>,
            <>D) <Fraction n="22" d="45" /></>
        ],
        correct: 2 // C
    },
    {
        id: 3,
        text: (
            <>
                <p className="mb-4">3. Tezligi v km/soat bo'lgan avtomobil ikki shahar orasidagi masofani t soatda o'tadi. Agar avtomobil qaytishda tezligini 20 km/soat ga oshirsa qancha vaqtda qaytib keladi?</p>
            </>
        ),
        options: ["A) (v-20)t / v", "B) (v+20)v / t", "C) v / (v+20)", "D) vt / (v+20)"],
        optionsNodes: [
            <>A) <Fraction n="(v-20)t" d="v" /></>,
            <>B) <Fraction n="(v+20)v" d="t" /></>,
            <>C) <Fraction n="v" d="v+20" /></>,
            <>D) <Fraction n="vt" d="v+20" /></>
        ],
        correct: 3 // D
    },
    {
        id: 4,
        text: (
            <span>
                4. Zilola juma kuni cho'ntagidagi pulning 20% ini sarfladi. Shanba kuni esa juma kuni sarflamagan pulining 30% icha va juma kuni sarflagan pulining 80% icha pul sarfladi. Yakshanba kuni esa qolgan pulining 70% ini sarfladi. U yakshanba kuni dastlabki jami pulining necha foizini sarflagan?
            </span>
        ),
        options: ["A) 28", "B) 18", "C) 24", "D) 14"],
        correct: 3 // D
    },
    {
        id: 5,
        text: (
            <span>
                5. 0,00024 \u00b7 0,0025 ko'paytmani standart shaklda yozing.
            </span>
        ),
        options: ["A) 0,6 \u00b7 10^-6", "B) 6 \u00b7 10^-6", "C) 6 \u00b7 10^-7", "D) 0,6 \u00b7 10^-7"],
        optionsNodes: [
            <>A) 0,6 \u00b7 10<Sup>-6</Sup></>,
            <>B) 6 \u00b7 10<Sup>-6</Sup></>,
            <>C) 6 \u00b7 10<Sup>-7</Sup></>,
            <>D) 0,6 \u00b7 10<Sup>-7</Sup></>
        ],
        correct: 2 // C (6 \u00b7 10^-7)
    },
    {
        id: 6,
        text: (
            <span>
                6. Ifodani soddalashtiring: {"("} <Fraction n="a" d="a+1" /> + <Fraction n="2a" d={<>a<Sup>2</Sup>-1</>} /> {") \u00b7 a"} <Sup>-1</Sup> + {"("} <Fraction n="a" d="a-1" /> - <Fraction n="1" d={<>a<Sup>2</Sup>-a</>} /> {") : a"} <Sup>-1</Sup>
            </span>
        ),
        options: ["A) a/(a+1)", "B) a^2/(a-1)", "C) (a+1)/(a-1)", "D) a/(a-1)"],
        optionsNodes: [
            <>A) <Fraction n="a" d="a+1" /></>,
            <>B) <Fraction n="a^2" d="a-1" /></>,
            <>C) <Fraction n="a+1" d="a-1" /></>,
            <>D) <Fraction n="a" d="a-1" /></>
        ],
        correct: 3 // D
    },
    {
        id: 7,
        text: (
            <span>
                7. a, b va c tub sonlar, n, m va l natural sonlar. Agar a = <Sqrt n="n">27</Sqrt>, b = <Sqrt n="m">625</Sqrt>, c = <Sqrt n="l">32</Sqrt> bo'lsa, <Fraction n="a" d="n" /> + <Fraction n="b" d="m" /> + <Fraction n="c" d="l" /> ifodaning qiymatini toping.
            </span>
        ),
        options: ["A) 4", "B) 5", "C) 6", "D) 7"],
        correct: 2 // C
    },
    {
        id: 8,
        text: (
            <span>
                8. {"{b"}
                <Sub>n</Sub>
                {"}"} geometrik progressiyada b<Sub>1</Sub> + b<Sub>2</Sub> + b<Sub>3</Sub> = 108, b<Sub>4</Sub> + b<Sub>5</Sub> + b<Sub>6</Sub> = 4 bo'lsa, <Fraction n={<>b<Sub>10</Sub></>} d={<>b<Sub>16</Sub></>} /> ni toping.
            </span>
        ),
        options: ["A) 1/3", "B) 1/9", "C) 3", "D) 9"],
        optionsNodes: [
            <>A) <Fraction n="1" d="3" /></>,
            <>B) <Fraction n="1" d="9" /></>,
            <>C) 3</>,
            <>D) 9</>
        ],
        correct: 3 // D
    },
    {
        id: 9,
        text: (
            <span>
                9. {"{a"}
                <Sub>n</Sub>
                {"}"} arifmetik progressiyada a<Sub>1</Sub> = 3; d = 2 bo'lsa, a<Sub>4</Sub> + a<Sub>8</Sub> + a<Sub>12</Sub> + ... + a<Sub>100</Sub> ni hisoblang.
            </span>
        ),
        options: ["A) 2625", "B) 2725", "C) 2825", "D) 2525"],
        correct: 2 // C
    },
    {
        id: 10,
        text: (
            <span>
                10. a, b, c, d va e sonlari A = {"{2, 4, 5, 6, 10}"} to'plamining bir-biridan farqli elementlaridir. Bunga ko'ra (-2)<Sup>a</Sup> \u00b7 3<Sup>b</Sup> \u00b7 (-4)<Sup>c</Sup> \u00b7 (-5)<Sup>d</Sup> \u00b7 (-7)<Sup>e</Sup> {"> 0"} tengsizlik o'rinli bo'lganda a + d + e yig'indining eng katta qiymati nechaga teng?
            </span>
        ),
        options: ["A) 21", "B) 20", "C) 18", "D) 15"],
        correct: 1 // B
    },
    {
        id: 11,
        text: (
            <span>
                11. <Sqrt><>8 + 2<Sqrt><>10 + 2<Sqrt>5</Sqrt></></Sqrt></Sqrt> + <Sqrt><>8 - 2<Sqrt><>10 + 2<Sqrt>5</Sqrt></></Sqrt></Sqrt> ildizni hisoblang.
                </span>
                    ),
                    options: ["A) √2 + √5", "B) √2 + √3", "C) √2 + √10", "D) √2 + 1"],
                    optionsNodes: [
                    <>A) <Sqrt>2</Sqrt> + <Sqrt>5</Sqrt></>,
                    <>B) <Sqrt>2</Sqrt> + <Sqrt>3</Sqrt></>,
                    <>C) <Sqrt>2</Sqrt> + <Sqrt>10</Sqrt></>,
                    <>D) <Sqrt>2</Sqrt> + 1</>
                    ],
                    correct: 0 // A
    },
                    {
                        id: 12,
                    text: (
                    <span>
                        12. Agar sin α - cos α = <Sqrt><Fraction n="2" d="3" /></Sqrt> bo'lsa, log<Sub>2</Sub> |sin(<Fraction n="π" d="4" /> - α)| + log<Sub>2</Sub> |cos(<Fraction n="π" d="4" /> - α)| ifodaning son qiymatini toping.
                    </span>
                    ),
                    options: ["A) 1", "B) -1", "C) 2/3", "D) -3/2"],
                    optionsNodes: [
                    <>A) 1</>,
                    <>B) -1</>,
                    <>C) <Fraction n="2" d="3" /></>,
                    <>D) - <Fraction n="3" d="2" /></>
                    ],
                    correct: 3 // D
    },
                    {
                        id: 13,
                    text: (
                    <span>
                        13. Agar |c| &lt; |b| &lt; |a| va a &lt; 0, b &gt; 0, c &lt; 0 bo'lsa:
                        <Fraction n={<>a|b-c|</>} d={<>|a|</>} /> + <Fraction n={<>b|c-a|</>} d={<>|b|</>} /> + <Fraction n={<>c|a-b|</>} d={<>|c|</>} />
                        ifodani soddalashtiring.
                    </span>
                    ),
                    options: ["A) 2a - 2b", "B) 0", "C) 2c - 2a", "D) 2c - 2b"],
                    correct: 0 // A
    },
                    {
                        id: 14,
                    text: (
                    <span>
                        14. Tenglama nechta haqiqiy ildizga ega? <Sqrt>x</Sqrt> - <Sqrt>x+3</Sqrt> = 1
                    </span>
                    ),
                    options: ["A) 1", "B) 2", "C) Cheksiz ko'p", "D) Ildizga ega emas"],
                    correct: 3 // D
    },
                    {
                        id: 15,
                    text: (
                    <span>
                        15. Tenglamaning haqiqiy ildizlari yig'indisini toping.
                        x<Sup>2</Sup> log<Sub>5</Sub> <Sqrt><>5x<Sup>2</Sup>-2x-3</></Sqrt> - x log<Sub>5</Sub>(5x<Sup>2</Sup>-2x-3) = x<Sup>2</Sup> + 2x
                    </span>
                    ),
                    options: ["A) 1", "B) -18/5", "C) -8/5", "D) -13/5"],
                    optionsNodes: [
                    <>A) 1</>,
                    <>B) - <Fraction n="18" d="5" /></>,
                    <>C) - <Fraction n="8" d="5" /></>,
                    <>D) - <Fraction n="13" d="5" /></>
                    ],
                    correct: 1 // B
    },
                    {
                        id: 16,
                    text: (
                    <span>
                        16. Tengsizlikni yeching: <Fraction n={<>11 \u00b7 3<Sup>x-1</Sup> - 31</>} d={<>4 \u00b7 9<Sup>x</Sup> - 11 \u00b7 3<Sup>x-1</Sup> - 5</>} /> \u2265 5
                    </span>
                    ),
                    options: ["A) (-∞; -log3 2] U [1 - log3 5; log3 5 - log3 1]", "B) (-∞; -log3 2] U [1 - log3 5; log3 5 + 1]", "C) (-∞; log3 2] U [1 + log3 5; log3 5 - 1]", "D) (-∞; -log3 2] U [1 - log3 5; log3 5 - 1]"],
                    optionsNodes: [
                    <>A) (-∞; -log<Sub>3</Sub> 2] ∪ [1 - log<Sub>3</Sub> 5; log<Sub>3</Sub> 5 - 1]</>,
                    <>B) (-∞; -log<Sub>3</Sub> 2] ∪ [1 - log<Sub>3</Sub> 5; log<Sub>3</Sub> 5 + 1]</>,
                    <>C) (-∞; log<Sub>3</Sub> 2] ∪ [1 + log<Sub>3</Sub> 5; log<Sub>3</Sub> 5 - 1]</>,
                    <>D) (-∞; -log<Sub>3</Sub> 2] ∪ [1 - log<Sub>3</Sub> 5; log<Sub>3</Sub> 5 - 1]</>
                    ],
                    correct: 0 // A
    },
                    {
                        id: 17,
                    text: (
                    <span>
                        17. <Fraction n="2-2x" d="2x+3|x|" /> {"> 0"} tengsizlikni qanoatlantiruvchi butun sonlar yig'indisini toping.
                    </span>
                    ),
                    options: ["A) -2", "B) -1", "C) 0", "D) 1"],
                    correct: 2 // C
    },
                    {
                        id: 18,
                    text: (
                    <span>
                        18. x<Sub>1</Sub> va x<Sub>2</Sub> sonlari ax<Sup>2</Sup> + bx + c = 0 tenglamaning ildizlaridir. Agar Ax<Sup>2</Sup> + Bx + 1 = 0 tenglamaning ildizlari <Fraction n={<>x<Sub>1</Sub></>} d={<>x<Sub>2</Sub></>} /> va <Fraction n={<>x<Sub>2</Sub></>} d={<>x<Sub>1</Sub></>} /> bo'lsa, B quyidagilardan qaysi biriga teng?
                    </span>
                    ),
                    options: ["A) (b^2 - 2ac) / ac", "B) 2 - b^2 / ac", "C) 2 - b^2 / ac^2", "D) b^2 / c - 2"],
                    optionsNodes: [
                    <>A) <Fraction n={<>b<Sup>2</Sup> - 2ac</>} d="ac" /></>,
                    <>B) 2 - <Fraction n={<>b<Sup>2</Sup></>} d="ac" /></>,
                    <>C) 2 - <Fraction n={<>b<Sup>2</Sup></>} d={<>ac<Sup>2</Sup></>} /></>,
                    <>D) <Fraction n={<>b<Sup>2</Sup></>} d="c" /> - 2</>
                    ],
                    correct: 1 // B
    },
                    {
                        id: 19,
                    text: (
                    <span>
                        19. <Fraction n="2" d={<>|x+3|-1</>} /> \u2265 |x+2| tengsizlik nechta butun yechimga ega?
                    </span>
                    ),
                    options: ["A) 1", "B) 2", "C) 3", "D) 5"],
                    correct: 1 // B
    },
                    {
                        id: 20,
                    text: (
                    <>
                        <p className="mb-4">20. Quydagi chizmada y = a<Sup>x</Sup> funksiyaning grafigi tasvirlangan. a ning qiymatini toping.</p>
                        <div className="my-6 flex justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <svg width="240" height="200" viewBox="0 0 240 200" className="text-gray-800">
                                <path d="M20,180 L220,180 M120,20 L120,190" fill="none" stroke="currentColor" strokeWidth="1" />
                                <path d="M40,40 Q110,180 200,180" fill="none" stroke="currentColor" strokeWidth="2" />
                                <text x="110" y="160" className="text-xs">1</text>
                                <text x="125" y="65" className="text-xs">5</text>
                                <text x="125" y="105" className="text-xs">y</text>
                                <text x="225" y="175" className="text-xs">x</text>
                                <path d="M70,70 L120,70" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                                <text x="60" y="75" className="text-xs">-2</text>
                            </svg>
                        </div>
                    </>
                    ),
                    options: ["A) -1/25", "B) -1/5", "C) 1/5", "D) 1/25"],
                    optionsNodes: [
                    <>A) - <Fraction n="1" d="25" /></>,
                    <>B) - <Fraction n="1" d="5" /></>,
                    <>C) <Fraction n="1" d="5" /></>,
                    <>D) <Fraction n="1" d="25" /></>
                    ],
                    correct: 2 // C (Note: a^x where a=1/5, x=-2 gives 25? No, image graph passes through (-2, 25)? Wait graph in image shows (-2, 25) and y-intercept 1. No, y intercept is 1, at x=-2, y=25. So (1/5)^(-2) = 25. Correct.)
    }
                    ];

                    export default function MockTest3() {
    const [answers, setAnswers] = useState<Record<number, number>>({ });
                        const [result, setResult] = useState<{ score: number, total: number } | null>(null);

    const handleSelect = (questionId: number, optionIndex: number) => {
                            setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    };

    const calculateScore = () => {
                            let score = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) score++;
        });
                        setResult({score, total: questions.length });
                        window.scrollTo({top: 0, behavior: "smooth" });
    };

                        return (
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
                            <div className="mb-8 font-display">
                                <Link href="/mock-tests" className="text-blue-600 hover:text-blue-800 font-bold flex items-center group transition-all">
                                    <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span>
                                    Bosh sahifaga qaytish
                                </Link>
                            </div>

                            <div className="mb-12 text-center">
                                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4 italic italic">Milliy Sertifikat • 2025</span>
                                <h1 className="text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">Algebra: Namunaviy Test</h1>
                                <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">Jamshid Saidxonovning 2025-yilgi Namunaviy Testlari asosida tayyorlangan (savollar 1-20).</p>
                            </div>

                            {result && (
                                <div className="mb-12 bg-blue-50 border-2 border-blue-100 p-8 rounded-[2.5rem] text-center animate-in shadow-xl shadow-blue-100/20">
                                    <h2 className="text-4xl font-display font-extrabold text-blue-900 mb-2">Natijangiz: {result.score} / {result.total}</h2>
                                    <p className="text-blue-700 text-lg">Siz {Math.round((result.score / result.total) * 100)}% natija qayd etdingiz.</p>
                                </div>
                            )}

                            <div className="space-y-12">
                                {questions.map((q) => (
                                    <div key={q.id} className={`premium-card p-0 overflow-hidden border-2 transition-all duration-500 ${result && answers[q.id] === q.correct ? 'border-green-500 bg-green-50/10' : result && answers[q.id] !== q.correct ? 'border-red-500 bg-red-50/10' : 'border-gray-100 hover:shadow-2xl hover:shadow-blue-100/50'}`}>
                                        <div className="px-8 py-4 bg-gray-50/50 flex justify-between items-center border-b border-gray-100">
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest font-display">{q.id}-SAVOL</span>
                                            {result && (
                                                <span className={`text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ${answers[q.id] === q.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                    {answers[q.id] === q.correct ? 'To\'g\'ri' : 'Xato'}
                                                </span>
                                            )}
                                        </div>
                                        <div className="p-8 md:p-12">
                                            <div className="text-2xl text-gray-900 font-serif leading-relaxed mb-10 selection:bg-blue-100">{q.text}</div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                {q.options.map((opt, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={() => !result && handleSelect(q.id, idx)}
                                                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center space-x-5 group ${answers[q.id] === idx ? 'border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-100/50' : 'border-gray-100 hover:border-blue-200 bg-white shadow-sm'}`}
                                                    >
                                                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${answers[q.id] === idx ? 'border-blue-500 bg-blue-500' : 'border-gray-200 group-hover:border-blue-300'}`}>
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
                                        className="bg-blue-600 text-white px-20 py-6 rounded-[2.5rem] font-bold text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 active:scale-95 group"
                                    >
                                        Testni Yakunlash <span className="ml-3 group-hover:translate-x-2 transition-transform inline-block">&rarr;</span>
                                    </button>
                                </div>
                            )}
                        </div>
                        );
}
