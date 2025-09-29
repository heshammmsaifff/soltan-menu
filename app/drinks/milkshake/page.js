"use client";

import Link from "next/link";

export default function Milkshake() {
  const items = [
    { name: "ميلك فانيليا", sizes: [{ price: 40 }] },
    { name: "ميلك شوكليت", sizes: [{ price: 40 }] },
    { name: "ميلك مانجو", sizes: [{ price: 40 }] },
    { name: "ميلك فراولة", sizes: [{ price: 40 }] },
    { name: "ميلك توت أزرق", sizes: [{ price: 40 }] },
    { name: "ميلك توت أحمر", sizes: [{ price: 40 }] },
    { name: "ميلك كيوي", sizes: [{ price: 45 }] },
    { name: "ميلك بطيخ", sizes: [{ price: 40 }] },
    { name: "ميلك أوريو", sizes: [{ price: 45 }] },
    { name: "ميلك جالاكسي", sizes: [{ price: 60 }] },
    { name: "ميلك كيت كات", sizes: [{ price: 60 }] },
    { name: "ميلك لوتس", sizes: [{ price: 45 }] },
    { name: "ميلك نوتيلا", sizes: [{ price: 40 }] },
    { name: "ميلك هوهوز", sizes: [{ price: 45 }] },
    { name: "ميلك بستاشيو", sizes: [{ price: 60 }] },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5C3A1A] to-[#CBA34A] p-6 text-right flex flex-col gap-8">
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        • ميلك شيك •
      </h1>

      {items.map((item, i) => (
        <div key={i}>
          <div className="bg-[#D9D9D9] rounded-full h-[54px] flex items-center justify-between shadow-md px-4">
            <div className="flex items-center gap-6">
              {item.sizes.map((size, idx) => (
                <span key={idx} className="ml-[56px] text-sm font-bold">
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
