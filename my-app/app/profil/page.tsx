"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
    // Variasi animasi untuk memunculkan elemen secara berurutan (Stagger)
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // Variasi animasi untuk tiap baris/elemen teks
    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        },
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-white overflow-hidden">
            {/* 1. BACKGROUND VIDEO */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/kedua.mp4" type="video/mp4" />
            </video>

            {/* 2. OVERLAY GRADASI (Memperkuat kontras teks) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-10" />

            {/* 3. INTERACTIVE GLASS CARD */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="relative z-20 border border-white/20 backdrop-blur-md bg-white/5 shadow-2xl rounded-2xl p-8 md:p-10 max-w-md w-full border-b-white/10 border-r-white/10"
            >
                {/* Kontainer dengan Efek Muncul Berurutan */}
                <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col items-center">

                    {/* FOTO PROFIL (Menggunakan Next.js Image) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="relative w-32 h-32 mb-6 rounded-full p-1 bg-gradient-to-tr from-white/40 to-transparent shadow-xl cursor-pointer"
                    >
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/60">
                            <Image
                                src="/profil.jpeg"
                                alt="Profil Yahya"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* NAMA UTAMA */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 drop-shadow-md"
                    >
                        Yahya Fahmi Abdillah
                    </motion.h1>

                    {/* BIODATA / DETAILS */}
                    <motion.div variants={itemVariants} className="space-y-3 text-left w-full border-t border-b border-white/10 py-5 my-2">
                        {[
                            { label: "Umur", val: ": 17 Tahun" },
                            { label: "Cita-cita", val: ": Pemain Sepak Bola" },
                            { label: "Hobi", val: " : Belajar Mtk Fisika" },
                            { label: "Sekolah", val: " : SMK Telkom Malang" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-2 text-sm md:text-base font-mono tracking-wide text-white/90">
                                <span className="font-semibold w-24 text-white/60">{item.label}</span>
                                <span>{item.val}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* DESKRIPSI SINGKAT */}
                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-md leading-relaxed font-sans mt-6 text-center text-white/80"
                    >
                        Hii nama akuh Yahya Fahmi Abdillah, akuh lahir di Malang pada tanggal 31 Oktober 2008.
                        Akuh suka banget belajar <span className="font-semibold text-white underline decoration-white/30 decoration-2 underline-offset-4">MATEMATIKA</span> karena menurut akuh matematika itu asik banget!
                    </motion.p>

                </motion.div>
            </motion.div>
        </div>
    );
}