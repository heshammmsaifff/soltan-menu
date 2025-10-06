"use client";

import Image from "next/image";
import Link from "next/link";

export default function Coffee() {
  const categories = [
    { name: "بن تركي", slug: "turkish", image: "/turkish.svg", count: 18 },
    { name: "منتجات اخري", slug: "others", image: "/others.svg", count: 8 },
  ];

  return (
    <main className="min-h-screen p-6 flex flex-col gap-6" dir="rtl">
      {categories.map((cat, i) => (
        <div
          key={cat.slug} // ✅ key هنا
          className="rounded-2xl p-[2px] bg-gradient-to-b from-[#ECB635] via-[#F7EF8A] to-[#EDC967]"
        >
          <Link href={`/drinks/${cat.slug}`}>
            <div className="flex items-center justify-between bg-[#D9D9D9] rounded-2xl shadow-lg p-4 cursor-pointer">
              <div className="flex flex-col items-end text-right" dir="ltr">
                <h2 className="text-[35px] font-bold text-[#060606]">
                  {cat.name}
                </h2>
                <span className="text-[20px] text-[#060606] self-end" dir="rtl">
                  {cat.count}{" "}
                  {cat.count >= 3 && cat.count <= 10 ? "منتجات" : "منتج"}
                </span>
              </div>

              <div className="relative w-[90px] h-[90px] bg-[#D9D9D9] rounded-[20px] shadow-[0_0_25px_rgba(0,0,0,0.25)]">
                <div className="absolute w-[70px] h-[68px] left-[9px] top-[11px] flex items-center justify-center">
                  <Image
                    src={cat.image || "/placeholder.svg"}
                    alt={cat.name}
                    width={70}
                    height={68}
                    className={`object-contain ${
                      cat.image === "/milk.svg"
                        ? "mr-[25px] overflow-visible scale-150"
                        : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
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
