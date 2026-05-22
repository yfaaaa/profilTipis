import SchoolCard from "../../components/SchoolCard";
export default function Page() {
    return (
        <main
            className="relative min-h-screen bg-cover bg-center p-10 text-white"
            style={{ backgroundImage: "url('/Bg2.jpg')" }}>
                
            {/*Overlay gradasi gelap → terang*/}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/*Isi konten =*/}
            <div className="relative max-w-5xl mx-auto mt-10">
                <h1 className="text-3xl font-semibold mb-6 text-center">My Education</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <SchoolCard
                        level="SD"
                        name="SD Islam Baitul Makmur"
                        year="2015 - 2020"
                        img="/SD.png"
                        url="https://maps.app.goo.gl/7oJSEPSZMPb9DmJN6"/>

                    <SchoolCard
                        level="SMP"
                        name="MTSN 2 Kota Malang"
                        year="2020 - 2023"
                        img="/SMP.png"
                        url="https://maps.app.goo.gl/CzLbA1cD6NzbvWSx8"/>
                </div>
            </div>
        </main>
    )
}