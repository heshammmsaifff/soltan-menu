"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-main-gradient min-h-screen flex items-center justify-center overflow-hidden">
      {!showMain && (
        <motion.div
          initial={{ y: "-100vh", opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 13,
            duration: 1,
          }}
        >
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 8, opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="relative w-40 h-40"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
            />
          </motion.div>
        </motion.div>
      )}

      {showMain && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <Image
            src="/soltan.svg"
            alt="Soltan"
            width={362}
            height={206}
            priority
          />
          <Link href="/drinks">
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hover:cursor-pointer w-[244px] h-[75px] rounded-[20px] text-lg font-bold text-white relative overflow-hidden mt-[79px]"
            >
              <span className="relative z-10 text-[30px] font-bold">
                منيو المشروبات
              </span>

              <span
                className="absolute inset-[1px] rounded-[19px]"
                style={{ background: "#493A2599" }}
              ></span>
            </motion.button>
          </Link>
          <Link href="/coffee">
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hover:cursor-pointer w-[244px] h-[75px] rounded-[20px] text-lg font-bold text-white relative overflow-hidden mt-[40px]"
            >
              <span className="relative z-10 text-[30px] font-bold">
                منيو البن
              </span>

              {/* الخلفية الداخلية */}
              <span
                className="absolute inset-[1px] rounded-[19px]"
                style={{ background: "#493A2599" }}
              ></span>
            </motion.button>
          </Link>
        </motion.div>
      )}
    </main>
  );
}
