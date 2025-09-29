"use client";

import Link from "next/link";

export default function Soda() {
  const items = [
    { name: "صن شاين", sizes: [{ price: 35 }] },
    { name: "موهيتو", sizes: [{ price: 40 }] },
    { name: "موخيتو", sizes: [{ price: 40 }] },
    { name: "شيري كولا", sizes: [{ price: 40 }] },
    { name: "ميكس سوفت", sizes: [{ price: 40 }] },
    { name: "ريد بول", sizes: [{ price: 60 }] },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5C3A1A] to-[#CBA34A] p-6 text-right flex flex-col gap-8">
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        • صودا •
      </h1>

      {items.map((item, i) => (
        <div key={i}>
          <div className="bg-[#D9D9D9] rounded-[20px] h-[54px] flex items-center justify-between shadow-md px-4">
            <div className="flex items-center gap-6">
              {item.sizes.map((size, idx) => (
                <span key={idx} className="ml-[40px] text-sm font-bold">
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
      <Link
        href="/drinks"
        className="mt-6 mx-auto px-6 py-3 bg-[#4B2C15] text-white font-bold rounded-xl shadow-md hover:bg-[#3a2410] transition"
      >
        العودة للخلف
      </Link>
    </main>
  );
}
