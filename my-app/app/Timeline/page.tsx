"use client";

import { motion } from "framer-motion";
import TimelineItem from "../../components/TimeLineItem";

export default function Page() {
    // Variasi animasi untuk container utama agar item muncul bergantian
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Jeda waktu kemunculan antar kartu (0.3 detik)
            },
        },
    };

    // Variasi animasi untuk setiap kartu Timeline
    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 70, damping: 15 }
        },
    };

    const timelineData = [
        {
            date: "2015",
            title: "Masuk SD Islam Baitul Makmur",
            desc: "Awal perjalanan pendidikan formal gue.",
            plan: [
                "Belajar baca tulis dengan baik",
                "Mulai belajar hitung-hitungan",
                "Ikut kegiatan ekstrakurikuler",
                "Mengenal banyak teman baru",
                "Belajar disiplin dan mandiri",
            ],
        },
        {
            date: "2020",
            title: "Lulus SD → Masuk MTsN 2 Kota Malang",
            desc: "Mulai masuk jenjang pendidikan baru.",
            plan: [
                "Belajar lebih rajin",
                "Memperdalam Matematika",
                "Meningkatkan ibadah & akhlak",
                "Mulai fokus olahraga",
                "Mulai belajar basic coding",
            ],
        },
        {
            date: "2024",
            title: "Masuk SMK Telkom Malang",
            desc: "Mulai serius belajar programming dan sepak bola.",
            plan: [
                "Belajar Next.js",
                "Ikut lomba UKK/UKL",
                "Bangun portofolio website",
                "Latihan bola tiap minggu",
                "Persiapkan masa depan",
            ],
        },
    ];

    return (
        <main
            className="relative min-h-screen bg-cover bg-center p-6 md:p-12 text-white overflow-x-hidden flex flex-col justify-center"
            style={{ backgroundImage: "url('/Bg3.jpg')" }}
        >
            {/* Overlay Gelap dengan gradasi lembut */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95 z-0"></div>

            {/* Konten Utama */}
            <div className="relative z-10 max-w-5xl w-full mx-auto my-auto">
                {/* Judul Halaman dengan Animasi */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl font-extrabold text-center mb-12 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 drop-shadow-lg"
                >
                    My Timeline
                </motion.h1>

                {/* Grid List Timeline menggunakan Framer Motion */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                >
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                boxShadow: "0 20px 30px -10px rgba(255, 255, 255, 0.05)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-colors shadow-xl"
                        >
                            <TimelineItem
                                date={item.date}
                                title={item.title}
                                desc={item.desc}
                                plan={item.plan}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}