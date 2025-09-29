"use client";

import Link from "next/link";

export default function Milkshake() {
  const items = [
    { name: "مانجو", sizes: [{ price: 40 }] },
    { name: "فراولة", sizes: [{ price: 40 }] },
    { name: "موز حليب", sizes: [{ price: 40 }] },
    { name: "كيوي", sizes: [{ price: 50 }] },
    { name: "ليمون نعناع", sizes: [{ price: 35 }] },
    { name: "بطيخ", sizes: [{ price: 40 }] },
    { name: "جوافة", sizes: [{ price: 40 }] },
    { name: "أفوكادو", sizes: [{ price: 60 }] },
    { name: "ليمون", sizes: [{ price: 30 }] },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5C3A1A] to-[#CBA34A] p-6 text-right flex flex-col gap-8">
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        • عصائر فريش •
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

      <div
        className="bg-black text-white w-[316px] h-[51px] items-center flex justify-between mx-auto"
        dir="rtl"
      >
        <p className="text-right ml-[47px] mr-[10px]">
          • فلايفور (جوافة-كيوي-بطيخ)
        </p>{" "}
        <span className="text-left text-2xl ml-[17px]" dir="ltr">
          5 <span className="text-sm">L.E</span>
        </span>
      </div>
      <Link
        href="/drinks"
        className="mt-6 mx-auto px-6 py-3 bg-[#4B2C15] text-white font-bold rounded-xl shadow-md hover:bg-[#3a2410] transition"
      >
        العودة للخلف
      </Link>
    </main>
  );
}
