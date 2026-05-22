"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  // Konfigurasi animasi untuk kontainer utama (membuat efek muncul berurutan)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda waktu antar elemen muncul (0.2 detik)
      },
    },
  };

  // Konfigurasi animasi untuk masing-masing elemen di dalamnya
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    },
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white p-6 overflow-hidden">
      {/* 1. BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/awal.mp4" type="video/mp4" />
      </video>

      {/* 2. OVERLAY GRADASI (Membuat teks lebih mudah dibaca) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 z-10" />

      {/* 3. KONTEN UTAMA */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col items-center text-center max-w-sm w-full"
      >
        {/* FOTO PROFIL (profil.jpeg dari folder public) */}
        <motion.div 
          variants={itemVariants}
          className="relative w-28 h-28 mb-6 rounded-full p-1 bg-gradient-to-tr from-white/40 to-white/10 backdrop-blur-sm shadow-2xl"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/30">
            <Image
              src="/profil.jpeg"
              alt="Foto Profil"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* JUDAL UTAMA */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-extrabold mb-3 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 drop-shadow-xl"
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p 
          variants={itemVariants}
          className="text-sm md:text-base mb-8 text-white/60 font-light tracking-wide"
        >
          Pilih halaman yang mau kamu kunjungi :
        </motion.p>

        {/* TOMBOL NAVIGASI */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full px-2">
          {[
            { name: "Profile", href: "/profil" },
            { name: "Timeline", href: "/Timeline" },
            { name: "Education", href: "/Education" },
          ].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link
                href={link.href}
                className="block py-3.5 w-full bg-white/10 hover:bg-white/15 rounded-2xl border border-white/10 hover:border-white/20 text-center font-medium tracking-wide backdrop-blur-md transition-colors shadow-lg"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* PEMUTAR MUSIK */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 w-full px-2 flex justify-center"
        >
          <div className="bg-black/40 backdrop-blur-lg p-3 rounded-2xl border border-white/5 shadow-inner w-full flex justify-center">
            <audio controls className="w-full max-w-xs h-9 opacity-75 hover:opacity-100 transition-opacity">
              <source src="/SheilaOn7.mp3" type="audio/mpeg" />
              Browser kamu tidak mendukung audio.
            </audio>
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}