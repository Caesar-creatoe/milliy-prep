"use client";

import Link from "next/link";
import { useState } from "react";

const Fraction = ({ n, d }: { n: React.ReactNode, d: React.ReactNode }) => (
    <span className="inline-flex flex-col align-middle text-center text-sm mx-1">
        <span className="border-b border-gray-800 px-1">{n}</span>
        <span>{d}</span>
    </span>
);

const Sup = ({ children }: { children: React.ReactNode }) => (
    <sup className="text-xs ml-0.5">{children}</sup>
);

const Sub = ({ children }: { children: React.ReactNode }) => (
    <sub className="text-xs ml-0.5">{children}</sub>
);

const questions: { id: number, text: React.ReactNode, options: string[], optionsNodes?: React.ReactNode[], correct: number }[] = [
    {
        id: 1,
        text: (
            <span>
                x, y va z sonlari x &lt; y &lt; z tengsizlikni qanoatlantiruvchi ketma-ket toq sonlar.
                <Fraction n={<>(z-x)(z-y)</>} d={<>(y-x)</>} />
                ifodaning qiymatini toping.
            </span>
        ),
        options: ["A) -16", "B) -8", "C) -4", "D) 4"],
        correct: 3 // D
    },
    {
        id: 2,
        text: (
            <span>
                Hisoblang: {"(("} <Fraction n="7" d="12" /> - <Fraction n="1" d="8" /> {") : 0.25 + "} <Fraction n="7" d="10" /> {") : (0.358 - 0.108) \u00d7 1.6 - "} <Fraction n="1" d="15" />
            </span>
        ),
        options: ["A) 7/8", "B) 1", "C) 2/5", "D) 9/5"],
        optionsNodes: [
            <>A) <Fraction n="7" d="8" /></>,
            <>B) 1</>,
            <>C) <Fraction n="2" d="5" /></>,
            <>D) <Fraction n="9" d="5" /></>
        ],
        correct: 1 // B
    },
    {
        id: 3,
        text: (
            <>
                <p className="mb-4">Agar rasmda ko'rsatilgan A va C nuqtalarda joylashgan ikkita avtomobil bir vaqtda o'zaro qarama-qarshi yo'nalishda harakatlana boshlasa B nuqtada uchrashadi. Agar ikkala avtomobil bir vaqtda bir yo'nalishda harakatlana boshlasa D nuqtasida yonma-yon keladi. |CD| masofani (km) toping.</p>
                <div className="my-6 flex justify-center bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300">
                    <img src="/images/q3-diagram.png" alt="Q3 Diagram" className="max-w-full h-auto rounded-lg shadow-sm" style={{ maxHeight: '200px' }} />
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
                a, b, c musbat haqiqiy sonlar uchun
                <Fraction n="a" d="a+c" /> &lt; 1 va
                <Fraction n="b" d="b+c" /> &gt; 1 tengsizlik o'rinli bo'lsa,
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
                A = cos <Fraction n="π" d="4" /> - sin <Fraction n="π" d="4" />,
                B = cos <Fraction n="π" d="4" /> + sin <Fraction n="π" d="4" /> bo'lsa,
                2 × (B<Sup>2</Sup> - B) × A ifoda qiymati nimaga teng?
            </span>
        ),
        options: ["A) cos x", "B) sin x", "C) sin 2x", "D) cos 2x"],
        correct: 1 // B
    }
];

export default function MockTest1() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">1-Sinov Testi: Algebra Asoslari</h1>

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
                                <div className="text-gray-900 text-xl font-medium leading-relaxed">{q.text}</div>
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
