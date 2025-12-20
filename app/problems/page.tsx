export default function Problems() {
    const topics = [
        "Algebraik Ifodalar",
        "Tenglamalar va Tengsizliklar",
        "Arifmetik va Geometrik Progressiyalar",
        "Logarifmik Funksiyalar",
        "Trigonometriya",
        "Planimetriya va Geometriya",
        "Hosilalar va Integrallar",
        "Matematik Mantiq"
    ];

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Mavzular Bo'yicha Masalalar</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {topics.map((topic, index) => (
                    <div key={index} className="bg-white overflow-hidden shadow rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200 p-6 flex flex-col justify-between h-32">
                        <h3 className="text-lg font-medium text-gray-900">{topic}</h3>
                        <p className="text-sm text-gray-500 mt-2">Tez orada</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
