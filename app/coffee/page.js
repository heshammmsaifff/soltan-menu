"use client";

import Image from "next/image";
import Link from "next/link";

export default function Coffee() {
  const categories = [
    { name: "البن التركي", slug: "turkish", image: null, count: 18 },
    { name: "منتجات أخري", slug: "others", image: null, count: 8 },
  ];

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-[#5C3A1A] to-[#CBA34A] p-6 flex flex-col gap-6"
      dir="rtl"
    >
      {categories.map((cat, i) => (
        <Link href={`/coffee/${cat.slug}`} key={cat.slug}>
          <div className="flex items-center justify-between bg-[#D9D9D9] rounded-3xl shadow-lg p-4 cursor-pointer">
            {/* النص */}
            <div className="flex flex-col items-end text-right" dir="ltr">
              <h2 className="text-[28px] font-bold text-[#060606]">
                {cat.name}
              </h2>
              <span className="text-[20px] text-[#060606] self-end" dir="rtl">
                {cat.count}{" "}
                {cat.count >= 3 && cat.count <= 10 ? "منتجات" : "منتج"}
              </span>
            </div>

            {/* المربع بالصورة */}
            <div className="[box-shadow:0_0_25px_0_#00000040] w-[90px] h-[90px] rounded-[20px] border-2 border-white/100 bg-white/10 flex items-center justify-center overflow-visible p-1">
              <Image
                src={cat.image || "/placeholder.svg"}
                alt={cat.name}
                width={96}
                height={96}
                priority={i === 0}
                className="object-contain "
              />
            </div>
          </div>
        </Link>
      ))}

      {/* زر العودة */}
      <Link
        href="/"
        className="mt-6 mx-auto px-6 py-3 bg-[#4B2C15] text-white font-bold rounded-xl shadow-md hover:bg-[#3a2410] transition"
      >
        العودة للخلف
      </Link>
    </main>
  );
}
