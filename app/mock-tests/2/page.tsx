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
    <span className="font-serif">
        &radic;<span className="border-t border-gray-800 px-0.5">{children}</span>
    </span>
);

const questions: { id: number, text: React.ReactNode, options: string[], optionsNodes?: React.ReactNode[], correct: number }[] = [
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
                b<Sub>1</Sub> × b<Sub>2</Sub> × b<Sub>3</Sub> = 64 tenglik o'rinli bo'lsa, S<Sub>5</Sub> ni toping.
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
                × (<Sqrt><><Sqrt>3</Sqrt> + <Sqrt>2</Sqrt></></Sqrt> + <Sqrt><><Sqrt>3</Sqrt> - <Sqrt>2</Sqrt></></Sqrt>)<Sup>-1</Sup>
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
                Tengsizlikni yeching: log<Sub>2</Sub> log<Sub>16</Sub>(x<Sup>2</Sup> - 1) &lt; 2
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
                (<Fraction n="4" d="15" />)<Sup>x + 2<Sqrt>x</Sqrt> - 1</Sup> = (<Fraction n="15" d="4" />)<Sup>x + <Sqrt>x</Sqrt> + 1</Sup>
                tenglamaning barcha haqiqiy ildizlari yig'indisini (agar u bitta bo'lsa, shu haqiqiy ildizni) toping.
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
                x<Sup>2</Sup> - 4x + k = 0 tenglamaning ildizlari kvadratlarining farqi 24 ga teng bo'lsa, k ning qiymatini toping.
            </span>
        ),
        options: ["A) -3", "B) 5", "C) -5", "D) 3"],
        correct: 2 // C
    }
];

export default function MockTest2() {
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [result, setResult] = useState<{ score: number, total: number } | null>(null);

    const handleSelect = (questionId: number, optionIndex: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) {
                score++;
            }
        });
        setResult({ score, total: questions.length });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <Link href="/mock-tests" className="text-blue-600 hover:text-blue-800">
                    &larr; Testlarga qaytish
                </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">2-Sinov Testi: Geometriya va Trig</h1>

            {result && (
                <div className="mb-8 bg-green-50 border border-green-200 p-6 rounded-lg text-center shadow-sm">
                    <h2 className="text-2xl font-bold text-green-800 mb-2">Natija: {result.score} / {result.total}</h2>
                    <p className="text-green-700">Siz {Math.round((result.score / result.total) * 100)}% natija qayd etdingiz.</p>
                </div>
            )}

            <div className="space-y-8">
                {questions.map((q) => (
                    <div key={q.id} className={`bg-white shadow overflow-hidden sm:rounded-lg border ${result && answers[q.id] === q.correct ? 'border-green-500 ring-1 ring-green-500' : result && answers[q.id] !== q.correct ? 'border-red-500 ring-1 ring-red-200' : 'border-gray-200'}`}>
                        <div className="px-4 py-5 sm:px-6 flex justify-between bg-gray-50/50">
                            <h3 className="text-lg leading-6 font-semibold text-gray-900">{q.id}-Savol</h3>
                            {result && (
                                <span className={`text-sm font-bold ${answers[q.id] === q.correct ? 'text-green-600' : 'text-red-600'}`}>
                                    {answers[q.id] === q.correct ? 'To\'g\'ri' : `Xato (To'g'ri: ${q.options[q.correct]})`}
                                </span>
                            )}
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                            <div className="space-y-4">
                                <div className="text-gray-900 text-xl font-medium leading-relaxed font-serif">{q.text}</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    {q.options.map((opt, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${answers[q.id] === idx
                                                ? 'bg-blue-50 border-blue-500'
                                                : 'bg-white border-gray-200 hover:border-blue-300'
                                                } ${result ? 'pointer-events-none opacity-80' : ''}`}
                                            onClick={() => !result && handleSelect(q.id, idx)}
                                        >
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${answers[q.id] === idx
                                                ? 'bg-blue-600 border-blue-600'
                                                : 'bg-white border-gray-300'
                                                }`}>
                                                {answers[q.id] === idx && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                            <div className="text-base text-gray-800 font-medium">
                                                {q.optionsNodes ? q.optionsNodes[idx] : opt}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!result && (
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={calculateScore}
                        className="bg-blue-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 active:scale-95"
                    >
                        Javoblarni Yuborish
                    </button>
                </div>
            )}
        </div>
    );
}
