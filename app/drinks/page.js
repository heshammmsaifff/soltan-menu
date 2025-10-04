"use client";

import Image from "next/image";
import Link from "next/link";

export default function Drinks() {
  const categories = [
    { name: "القهوة", slug: "coffee", image: "/coffee.svg", count: 8 },
    { name: "ميلك شيك", slug: "milkshake", image: "/milk.svg", count: 17 },
    { name: "عصائر فريش", slug: "fresh-juices", image: null, count: 9 },
    { name: "عصائر موسمية", slug: "seasonal-juices", image: null, count: 11 },
    { name: "سموزي", slug: "smoothie", image: null, count: 11 },
    { name: "مثلجات", slug: "ice", image: null, count: 5 },
    { name: "صودا", slug: "soda", image: null, count: 6 },
    { name: "زبادي", slug: "yogurt", image: null, count: 5 },
    { name: "وافل", slug: "waffle", image: null, count: 7 },
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

              <div className="[box-shadow:0_0_25px_0_#00000040] w-[90px] h-[90px] rounded-[20px] border-2 border-white  flex items-center justify-center overflow-visible">
                <Image
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.name}
                  width={90}
                  height={90}
                  priority={i === 0}
                  className="object-cover"
                />
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
