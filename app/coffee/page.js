"use client";

import Image from "next/image";
import Link from "next/link";

export default function Coffee() {
  const categories = [
    { name: "البن التركي", slug: "turkish", image: null },
    { name: "منتجات أخري", slug: "others", image: null },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5C3A1A] to-[#CBA34A] p-6 flex flex-col gap-6">
      {categories.map((cat, i) => (
        <Link href={`/coffee/${cat.slug}`} key={i}>
          <main className=" flex items-center justify-center">
            <div className="relative w-[387px] h-[136px] rounded-3xl overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={cat.image || "/placeholder.png"}
                alt={cat.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 387px"
              />
              <div className="absolute bottom-0 right-0 bg-[#4B2C15] text-white px-4 py-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl text-sm font-bold">
                {cat.name}
              </div>
            </div>
          </main>
        </Link>
      ))}
      <Link
        href="/"
        className="mt-6 mx-auto px-6 py-3 bg-[#4B2C15] text-white font-bold rounded-xl shadow-md hover:bg-[#3a2410] transition"
      >
        العودة للخلف
      </Link>
    </main>
  );
}
