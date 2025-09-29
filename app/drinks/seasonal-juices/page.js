"use client";

import Link from "next/link";

export default function SeasonalJuices() {
  const items = [
    { name: "برقوق", sizes: [{ price: 40 }] },
    { name: "برقوق عنب", sizes: [{ price: 40 }] },
    { name: "مانجو كيوي", sizes: [{ price: 45 }] },
    { name: "مانجو برقوق ", sizes: [{ price: 45 }] },
    { name: "مانجو آيس كريم", sizes: [{ price: 45 }] },
    { name: "بــلــح ", sizes: [{ price: 40 }] },
    { name: "بــلــح حليب", sizes: [{ price: 50 }] },
    { name: "بــلــح قهوة", sizes: [{ price: 60 }] },
    { name: "أفوكادو كيوي", sizes: [{ price: 65 }] },
    { name: "أفوكادو مانجو", sizes: [{ price: 65 }] },
    { name: "أفوكادو مكسرات", sizes: [{ price: 150 }] },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5C3A1A] to-[#CBA34A] p-6 text-right flex flex-col gap-8">
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        • عصائر موسمية •
      </h1>

      {items.map((item, i) => (
        <div key={i}>
          <div className="bg-[#D9D9D9] rounded-[20px] h-[54px] flex items-center justify-between shadow-md px-4">
            <div className="flex items-center gap-6">
              {item.sizes.map((size, idx) => (
                <div
                  key={idx}
                  className="ml-[40px] flex items-baseline font-bold w-[70px] justify-center"
                >
                  <span className="text-2xl">{size.price}</span>
                  <span className="text-sm ml-1">L.E</span>
                </div>
              ))}
            </div>
            <span className="font-bold text-lg" dir="rtl">
              • {item.name}
            </span>
          </div>
        </div>
      ))}
      <Link
        href="/drinks"
        className="mt-6 mx-auto px-6 py-3 bg-[#4B2C15] text-white font-bold rounded-xl shadow-md hover:bg-[#3a2410] transition"
      >
        العودة للخلف
      </Link>
    </main>
  );
}
