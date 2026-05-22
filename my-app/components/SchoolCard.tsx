// components
type Props = {
    level: string;
    name: string;
    year: string;
    img: string;
    url: string;
}

export default function SchoolCard({ level, name, year, img, url }: Props) {
    return (
        <div className="bg-white/20 border border-white/20 rounded-xl shadow-lg p-4 max-w-sm">
                
            <div className="flex items-center gap-4">
                <img
                    src={img ?? "/placeholder-school.png"}
                    alt={name}
                    className="w-20 h-20 object-cover rounded-md border-2 border-white/30"
                />
                <div className="text-left">
                    <div className="text-sm text-yellow-300 font-semibold">{level}</div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    {year && <div className="text-sm text-gray-200/80 mt-1">{year}</div>}
                </div>
            </div>

            <div className="mt-3">
                <a
                    href={url}
                    target="blank">
                    <button className="text-sm px-3 py-1 bg-yellow-400/90 rounded-md hover:bg-yellow-500/90 transition-colors">
                        Go to school
                    </button>
                </a>
            </div>
        </div>
    )
}