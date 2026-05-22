type Props = {
    date: string;      // contoh: "2020"
    title: string;     // contoh: "Masuk SMP"
    desc: string;      // deskripsi singkat
    plan: string[];    // list agenda / rencana
}

export default function TimelineItem({ date, title, desc, plan }: Props) {
    return (
        <div className="backdrop-blur-xs border-t-2 border-l-3 border-white/20 p-5 rounded-2xl mb-6 shadow-2xl">

            {/* Tahun */}
            <div className="text-yellow-300 font-bold text-lg">{date}</div>

            {/* Judul */}
            <h3 className="text-xl font-semibold mt-1 mb-2">{title}</h3>

            {/* Deskripsi */}
            <p className="text-gray-200 mb-3">{desc}</p>

            {/* Daftar Agenda / Plan */}
            <ul className="list-disc ml-5 text-gray-100">
                {plan.map((item, index) => (
                    <li key={index}>{item}</li>
                        ))}
            </ul>
        </div>
)
}
