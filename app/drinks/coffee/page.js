"use client";

import Link from "next/link";

export default function Coffee() {
  const items = [
    {
      name: "قهوة تركي",
      sizes: [
        { label: "S", price: 15 },
        { label: "D", price: 20 },
      ],
    },
    {
      name: "قهوة اسبيشيال",
      sizes: [
        { label: "S", price: 20 },
        { label: "D", price: 25 },
      ],
    },
    { name: "قهوة فرنساوي", sizes: [{ label: "Double", price: 20 }] },
    { name: "قهوة بندق", sizes: [{ label: "Double", price: 20 }] },
    { name: "قهوة بندق قطع", sizes: [{ label: "Double", price: 20 }] },
    { name: "قهوة نوتيلا", sizes: [{ label: "Double", price: 25 }] },
    { name: "قهوة فانيليا", sizes: [{ label: "Double", price: 25 }] },
    { name: "قهوة كراميل", sizes: [{ label: "Double", price: 25 }] },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5C3A1A] to-[#CBA34A] p-6 text-right flex flex-col gap-8">
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        • القهوة •
      </h1>

      {items.map((item, i) => (
        <div key={i} className="relative">
          <div className="absolute -top-6 left-6 flex gap-2">
            {item.sizes.map((size, idx) => (
              <span
                key={idx}
                className="bg-[#FF8800] mr-[20px] text-white font-bold px-3 py-1 rounded-t-md rounded-b-none text-xs shadow-md"
              >
                {size.label}
              </span>
            ))}
          </div>

          <div className="bg-[#D9D9D9] rounded-[20px] h-[54px] flex items-center justify-between shadow-md px-4">
            <div className="flex items-center gap-6">
              {item.sizes.map((size, idx) => (
                <span key={idx} className="text-sm font-bold">
                  <span className="text-2xl">{size.price}</span>L.E
                </span>
              ))}
            </div>
            <span className="font-bold text-lg" dir="rtl">
              • {item.name}
            </span>
          </div>
        </div>
      ))}

      {/* زر العودة */}
      <Link
        href="/drinks"
        className="mt-6 mx-auto px-6 py-3 bg-[#4B2C15] text-white font-bold rounded-xl shadow-md hover:bg-[#3a2410] transition"
      >
        العودة للخلف
      </Link>
    </main>
  );
}
