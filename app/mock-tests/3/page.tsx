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
        id: 1,
        text: (
            <span>
                x, y va z sonlari x &lt; y &lt; z tengsizlikni qanoatlantiruvchi ketma-ket toq sonlar.
                <Fraction n={<>(z-x) \u00b7 (x-y)<Sup>2</Sup></>} d={<>(y-z)</>} />
                ifodaning qiymatini toping.
            </span>
        ),
        options: ["A) -16", "B) -8", "C) -4", "D) 4"],
        correct: 1 // B
    },
    {
        id: 2,
        text: (
            <span>
                Hisoblang: {"(("} <Fraction n="7" d="9" /> - <Fraction n="47" d="72" /> {") : 1.25 + "} <Fraction n="7" d="40" /> {") : (0.358 - 0.108) \u00d7 1.6 - "} <Fraction n="9" d="25" />
            </span>
        ),
        options: ["A) 7/5", "B) 1", "C) 2/5", "D) 9/5"],
        optionsNodes: [
            <>A) <Fraction n="7" d="5" /></>,
            <>B) 1</>,
            <>C) <Fraction n="2" d="5" /></>,
            <>D) <Fraction n="9" d="5" /></>
        ],
        correct: 0 // A
    },
    {
        id: 3,
        text: (
            <>
                <p className="mb-4">Agar rasmda ko'rsatilgan A va C nuqtalarda joylashgan ikkita avtomobil bir vaqtda o'zaro qarama-qarshi yo'nalishda harakatlana boshlasa B nuqtada uchrashadi. Agar ikkala avtomobil bir vaqtda bir yo'nalishda harakatlana boshlasa D nuqtasida yonma-yon keladi. |CD| masofani (km) toping.</p>
                <div className="my-6 flex justify-center bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300">
                    <img src="/images/q3-motion-diagram.png" alt="Q3 Motion Diagram" className="max-w-full h-auto" />
                </div>
            </>
        ),
        options: ["A) 80", "B) 100", "C) 120", "D) 140"],
        correct: 2 // C
    },
    {
        id: 4,
        text: (
            <span>
                20% foyda bilan x so'mga sotilgan bir mahsulot, 40% zarar bilan y so'mga sotilmoqda. Shunga ko'ra,
                <Fraction n="x" d="y" />
                nisbat nechaga teng bo'ladi?
            </span>
        ),
        options: ["A) 1.5", "B) 3", "C) 2", "D) 2.5"],
        correct: 2 // C
    },
    {
        id: 5,
        text: (
            <span>
                Ifodani soddalashtiring:
                <Fraction n={<>x<Sup>n+1</Sup> + x<Sup>n</Sup></>} d={<>x<Sup>n-2</Sup></>} /> :
                <Fraction n={<>x<Sup>n+2</Sup> - x<Sup>n-1</Sup></>} d={<>x<Sup>n+1</Sup></>} />
            </span>
        ),
        options: ["A) x^4", "B) 1/(x+1)", "C) x(x + 1)", "D) 1 - 1/x"],
        optionsNodes: [
            <>A) x<Sup>4</Sup></>,
            <>B) <Fraction n="1" d={<>x+1</>} /></>,
            <>C) x(x + 1)</>,
            <>D) 1 - <Fraction n="1" d="x" /></>
        ],
        correct: 0 // A
    },
    {
        id: 6,
        text: (
            <span>
                Umumiy hadi a<Sub>n</Sub> = <Fraction n="1" d={<>n<Sup>2</Sup> + n</>} /> bo'lgan {"{an}"} ketma-ketligida
                a<Sub>1</Sub> + a<Sub>2</Sub> + a<Sub>3</Sub> + ... + a<Sub>12</Sub> yig'indining natijasi nechaga teng?
            </span>
        ),
        options: ["A) 8/9", "B) 9/10", "C) 10/11", "D) 12/13"],
        optionsNodes: [
            <>A) <Fraction n="8" d="9" /></>,
            <>B) <Fraction n="9" d="10" /></>,
            <>C) <Fraction n="10" d="11" /></>,
            <>D) <Fraction n="12" d="13" /></>
        ],
        correct: 3 // D
    },
    {
        id: 7,
        text: (
            <span>
                a, b, c musbat haqiqiy sonlar uchun <Fraction n="a+b" d="a+c" /> &lt; 1 va <Fraction n="a+b" d="b+c" /> &gt; 1 tengsizlik o'rinli bo'lsa,
                |a - c| + |b - a| - |c - b| ifodani soddalashtiring.
            </span>
        ),
        options: ["A) 2a", "B) -2b", "C) -2a", "D) 2a - 2c"],
        correct: 2 // C
    },
    {
        id: 8,
        text: (
            <span>
                A = cos <Fraction n="π" d="4" />, B = cos<Sup>2</Sup> <Fraction n="π" d="4" /> + sin<Sup>2</Sup> <Fraction n="π" d="4" /> bo'lsa,
                2 \u00b7 (B<Sup>3</Sup> - B) \u00b7 A ifoda qiymati nimaga teng?
            </span>
        ),
        options: ["A) cos x", "B) sin x", "C) 0", "D) cos 2x"],
        correct: 2 // C (since B=1, B^3-B=0)
    },
    {
        id: 9,
        text: (
            <span>
                x natural soni uchun <Fraction n="240" d="x" /> + <Fraction n="x" d="6" />
                soni ham natural son bo'lsa, x nechta farqli qiymat qabul qila oladi?
            </span>
        ),
        options: ["A) 8", "B) 5", "C) 6", "D) 7"],
        correct: 0 // A
    },
    {
        id: 10,
        text: (
            <span>
                <Sqrt><>log<Sub>2</Sub>(x-1) + 1</></Sqrt> - <Sqrt><>log<Sub>2</Sub>(2x-2)</></Sqrt> ifodaning
                x = 7 + 2<Sqrt>10</Sqrt> uchun qiymatini toping.
            </span>
        ),
        options: ["A) log2(√2 + √5)", "B) 1", "C) √10", "D) log2 10"],
        optionsNodes: [
            <>A) log<Sub>2</Sub>(<Sqrt>2</Sqrt> + <Sqrt>5</Sqrt>)</>,
            <>B) 1</>,
            <>C) <Sqrt>10</Sqrt></>,
            <>D) log<Sub>2</Sub> 10</>
        ],
        correct: 1 // B
    },
    {
        id: 11,
        text: (
            <span>
                {"{b"}
                <Sub>n</Sub>
                {"}"} o'suvchi geometrik progressiya uchun
                b<Sub>1</Sub> + b<Sub>2</Sub> + b<Sub>3</Sub> = 21 va
                b<Sub>1</Sub> \u00b7 b<Sub>2</Sub> \u00b7 b<Sub>3</Sub> = 64 tenglik o'rinli bo'lsa, S<Sub>5</Sub> ni toping.
            </span>
        ),
        options: ["A) 189", "B) 93", "C) 341", "D) 432"],
        correct: 2 // C
    },
    {
        id: 12,
        text: (
            <span>
                (<Sqrt><><Sqrt>3</Sqrt> + <Sqrt>2</Sqrt></></Sqrt> - <Sqrt><><Sqrt>3</Sqrt> - <Sqrt>2</Sqrt></></Sqrt>)
                ( <Sqrt><><Sqrt>3</Sqrt> + <Sqrt>2</Sqrt></></Sqrt> + <Sqrt><><Sqrt>3</Sqrt> - <Sqrt>2</Sqrt></></Sqrt> )<Sup>-1</Sup>
                + <Fraction n="1" d={<Sqrt>2</Sqrt>} /> ifodaning qiymatini toping.
            </span>
        ),
        options: ["A) √0.5", "B) √1.5", "C) √3", "D) √2"],
        optionsNodes: [
            <>A) <Sqrt>0.5</Sqrt></>,
            <>B) <Sqrt>1.5</Sqrt></>,
            <>C) <Sqrt>3</Sqrt></>,
            <>D) <Sqrt>2</Sqrt></>
        ],
        correct: 3 // D
    },
    {
        id: 13,
        text: (
            <span>
                Birinchi hadi 16 ga, ikkinchi hadi 13 ga teng bo'lgan arifmetik progressiyaning nechinchi hadi -41 ga teng?
            </span>
        ),
        options: ["A) 18", "B) 19", "C) 20", "D) 21"],
        correct: 2 // C
    },
    {
        id: 14,
        text: (
            <span>
                Tengsizlikni yeching: log<Sub>0.5</Sub> log<Sub>16</Sub>(x<Sup>2</Sup> - 1) &lt; 2
            </span>
        ),
        options: ["A) (-3; 1)", "B) (-∞; -√3) U (√3; ∞)", "C) (-∞; -3) U (3; ∞)", "D) (-3; -1)"],
        optionsNodes: [
            <>A) (-3; 1)</>,
            <>B) (-∞; -<Sqrt>3</Sqrt>) ∪ (<Sqrt>3</Sqrt>; ∞)</>,
            <>C) (-∞; -3) ∪ (3; ∞)</>,
            <>D) (-3; -1)</>
        ],
        correct: 2 // C
    },
    {
        id: 15,
        text: (
            <span>
                (<Fraction n="4" d="15" />)<Sup>x+2<Sqrt>x</Sqrt>-1</Sup> = (<Fraction n="15" d="4" />)<Sup>x+<Sqrt>x</Sqrt>+1</Sup> tenglamaning barcha haqiqiy ildizlari yig'indisini toping.
            </span>
        ),
        options: ["A) 3/2", "B) 0", "C) 1/2", "D) 1"],
        optionsNodes: [
            <>A) <Fraction n="3" d="2" /></>,
            <>B) 0</>,
            <>C) <Fraction n="1" d="2" /></>,
            <>D) 1</>
        ],
        correct: 1 // B
    },
    {
        id: 16,
        text: (
            <span>
                x<Sup>2</Sup> - 4x + k = 0 tenglamaning ildizlari kvadratlarining farqi 24 ga teng bo'lsa, k ni toping.
            </span>
        ),
        options: ["A) -3", "B) 5", "C) -5", "D) 3"],
        correct: 2 // C
    },
    {
        id: 17,
        text: (
            <span>
                cos x + (2 + <Sqrt>2</Sqrt>) sin<Sup>2</Sup> x = 1 tenglamaning [0; 2π] kesmada nechta ildizi bor?
            </span>
        ),
        options: ["A) 4", "B) 3", "C) 2", "D) 1"],
        correct: 1 // B
    },
    {
        id: 18,
        text: (
            <span>
                Tengsizlikni qanoatlantiruvchi butun sonlar nechta? |x - 10| \u00b7 |1 - x| - |30 - 3x| \u2264 0
            </span>
        ),
        options: ["A) 7", "B) 8", "C) 12", "D) 17"],
        correct: 1 // B
    },
    {
        id: 19,
        text: (
            <span>
                <Fraction n={<>x<Sup>17</Sup>-1</>} d={<>1-x<Sup>15</Sup></>} /> = <Fraction n={<>1-x<Sup>15</Sup></>} d={<>x<Sup>15</Sup>-1</>} /> tenglamaning haqiqiy ildizlari yig'indisini toping.
            </span>
        ),
        options: ["A) 13", "B) 1", "C) 0", "D) -1"],
        correct: 2 // C
    },
    {
        id: 20,
        text: (
            <span>
                f(x) = x<Sup>2</Sup> + 4x - 3 + m funksiyaning eng kichik qiymati 2 ga teng. m ning qiymatini toping.
            </span>
        ),
        options: ["A) 7", "B) -3", "C) 9", "D) 11"],
        correct: 2 // C
    }
];

export default function MockTest3() {
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
                <h1 className="text-4xl font-display font-extrabold text-gray-900 mb-4">2025 Namunaviy Test: Algebra</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">Milliy sertifikat darajasidagi namunaviy test vazifalari.</p>
            </div>

            {result && (
                <div className="mb-12 bg-blue-50 border-2 border-blue-100 p-8 rounded-[2.5rem] text-center animate-in">
                    <h2 className="text-3xl font-display font-extrabold text-blue-900 mb-2">Natijangiz: {result.score} / {result.total}</h2>
                    <p className="text-blue-700 text-lg">Siz {Math.round((result.score / result.total) * 100)}% natija qayd etdingiz.</p>
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
                                        <div className="text-lg text-gray-800 font-medium">
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
                        className="bg-blue-600 text-white px-16 py-5 rounded-[2rem] font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 active:scale-95"
                    >
                        Testni Yakunlash &rarr;
                    </button>
                </div>
            )}
        </div>
    );
}
