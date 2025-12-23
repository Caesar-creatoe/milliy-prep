"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface TestLink {
    id: string;
    name: string;
    href: string;
    topics: string[];
}

interface DifficultyGroup {
    level: "Oson" | "O'rta" | "Murakkab" | "Namunaviy Test (2025)";
    tests: TestLink[];
}

interface Subject {
    id: string;
    name: string;
    icon: string;
    description: string;
    difficulties: DifficultyGroup[];
}

const subjects: Subject[] = [
    {
        id: "algebra",
        name: "Algebra",
        icon: "/images/algebra-logo.png",
        description: "Algebraik ifodalar, tenglamalar, tengsizliklar va funksiyalar.",
        difficulties: [
            {
                level: "Oson",
                tests: [
                    { id: "1", name: "1-Sinov Testi", href: "/mock-tests/1", topics: ["Algebra", "Tenglamalar"] },
                ]
            },
            {
                level: "O'rta",
                tests: [
                    { id: "3", name: "3-Sinov Testi (Tez orada)", href: "#", topics: ["Logarifm", "Funksiyalar"] },
                ]
            },
            {
                level: "Murakkab",
                tests: [
                    { id: "5", name: "Murakkab Sinov", href: "#", topics: ["Integrallar", "Parametrlar"] },
                ]
            },
            {
                level: "Namunaviy Test (2025)",
                tests: [
                    { id: "3", name: "Milliy Sertifikat Namunaviy Testi", href: "/mock-tests/3", topics: ["Algebra", "Ehtimollar", "Funksiyalar"] },
                ]
            }
        ]
    },
    {
        id: "geometry",
        name: "Geometriya",
        icon: "/images/geometry-logo.png",
        description: "Planimetriya, stereometriya va trigonometrik masalalar.",
        difficulties: [
            {
                level: "Oson",
                tests: [
                    { id: "4", name: "Boshlang'ich Geometriya", href: "#", topics: ["Burchaklar", "Uchburchaklar"] },
                ]
            },
            {
                level: "O'rta",
                tests: [
                    { id: "2", name: "2-Sinov Testi", href: "/mock-tests/2", topics: ["Logarifm", "Shtrixli geometriya"] },
                ]
            },
            {
                level: "Murakkab",
                tests: [
                    { id: "6", name: "Murakkab Geometriya", href: "#", topics: ["Vektorlar", "Stereometriya"] },
                ]
            },
            {
                level: "Namunaviy Test (2025)",
                tests: [
                    { id: "4", name: "Milliy Sertifikat Namunaviy Testi", href: "/mock-tests/4", topics: ["Geometriya", "Sterometriya", "Trigonometriya"] },
                ]
            }
        ]
    }
];

export default function MockTests() {
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyGroup | null>(null);

    const reset = () => {
        setSelectedSubject(null);
        setSelectedDifficulty(null);
    };

    const backToSubject = () => {
        setSelectedDifficulty(null);
    };

    return (
        <div className="relative min-h-screen bg-white">
            <div className="absolute inset-0 math-bg opacity-5 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                {!selectedSubject && (
                    <div className="text-center mb-20 animate-in">
                        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6 italic">Sertifikat sari yo'l</span>
                        <h1 className="text-5xl font-display font-extrabold text-gray-900 tracking-tight mb-6">Tayyorgarlik Bo'limini Tanlang</h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light leading-relaxed">
                            Avvalo o'zingizni sinab ko'rmoqchi bo'lgan fan sohasini tanlang. Biz har bir bo'limni darajalarga bo'lib chiqdik.
                        </p>
                    </div>
                )}

                {/* Step 1: Select Subject */}
                {!selectedSubject && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in items-stretch">
                        {subjects.map((sub) => (
                            <div
                                key={sub.id}
                                onClick={() => setSelectedSubject(sub)}
                                className="premium-card cursor-pointer group hover:border-blue-500 transition-all flex flex-col min-h-[140px]"
                            >
                                <div className="flex items-center space-x-6 h-full py-2">
                                    <div className="relative w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-md transition-all group-hover:scale-105 duration-300">
                                        <Image
                                            src={sub.icon}
                                            alt={sub.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{sub.name}</h3>
                                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 pr-4">{sub.description}</p>
                                    </div>
                                    <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 pr-2 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Step 2: Select Difficulty */}
                {selectedSubject && !selectedDifficulty && (
                    <div className="animate-in">
                        <button onClick={reset} className="mb-8 text-blue-600 font-bold flex items-center hover:underline">
                            &larr; Bo'limlarga qaytish
                        </button>
                        <div className="mb-12">
                            <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-4">{selectedSubject.name}: Darajani Tanlang</h2>
                            <p className="text-gray-500">Ushbu fan bo'yicha qiyinchilik darajasini tanlang.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {selectedSubject.difficulties.map((diff) => (
                                <div
                                    key={diff.level}
                                    onClick={() => setSelectedDifficulty(diff)}
                                    className={`p-8 rounded-[2rem] border-2 cursor-pointer transition-all ${diff.level === "Oson" ? "border-green-100 hover:bg-green-50" :
                                        diff.level === "O'rta" ? "border-yellow-100 hover:bg-yellow-50" :
                                            "border-red-100 hover:bg-red-50"
                                        }`}
                                >
                                    <h4 className={`text-2xl font-bold mb-4 ${diff.level === "Oson" ? "text-green-600" :
                                        diff.level === "O'rta" ? "text-yellow-600" :
                                            "text-red-600"
                                        }`}>{diff.level}</h4>
                                    <p className="text-sm text-gray-500 mb-6">Ushbu darajada {diff.tests.length} ta test mavjud.</p>
                                    <div className="flex items-center text-gray-900 font-bold uppercase tracking-widest text-xs">
                                        Kirish &rarr;
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Select Test */}
                {selectedSubject && selectedDifficulty && (
                    <div className="animate-in">
                        <button onClick={backToSubject} className="mb-8 text-blue-600 font-bold flex items-center hover:underline">
                            &larr; Darajalarga qaytish
                        </button>
                        <div className="mb-12">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-widest">{selectedSubject.name}</span>
                                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-widest">{selectedDifficulty.level}</span>
                            </div>
                            <h2 className="text-4xl font-display font-extrabold text-gray-900">Mavjud Testlar</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {selectedDifficulty.tests.map((test) => (
                                <div key={test.id} className="premium-card glass flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{test.name}</h3>
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {test.topics.map((t, i) => (
                                                <span key={i} className="text-[10px] font-bold text-gray-500 bg-white/50 border border-gray-100 px-3 py-1 rounded-full uppercase tracking-widest">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link
                                        href={test.href}
                                        className={`px-8 py-4 rounded-xl font-bold text-center transition-all ${test.href === "#" ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-blue-600 text-white shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-95"
                                            }`}
                                    >
                                        {test.href === "#" ? "Tez orada" : "Testni Boshlash"}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
