"use client";

const products = [
  { name: "فرنساوي لاتيه", spr: 115 },
  { name: "فرنساوي بندق", spr: 115 },
  { name: "فرنساوي كراميل", spr: 115 },
  { name: "بندق قطع", spr: 120 },
  { name: "نسكافية 3x1", spr: 125 },
  { name: "نسكافيه بلاك", spr: 250 },
  { name: "نسكافيه جولد", spr: 275 },
  { name: "بن أخضر تخسيس", spr: 125 },
];

export default function CoffeeMenu() {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center">
      <h1 className="flex items-center justify-center gap-3 text-3xl font-bold text-white mb-6">
        <span className="w-[15px] h-[15px] bg-white rounded-full"></span>
        منتجات أخري
        <span className="w-[15px] h-[15px] bg-white rounded-full"></span>
      </h1>

      <div className="flex flex-col gap-6 w-full max-w-md">
        {products.map((item, i) => (
          <div key={i} className="flex flex-col gap-1">
            {/* النص فوق الكارت */}
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-black"></span>
              <span className="text-black font-bold text-[10px]">
                السعر يتوافق مع وزن 1/4 كيلو
              </span>
              <span className="h-[1px] w-[120px] bg-black"></span>
            </div>

            {/* الكارت */}
            <div
              dir="trl"
              className="bg-[#d9d9d9] rounded-[20px] shadow-md px-5 py-4 flex flex-col gap-3"
            >
              {/* العنوان */}
              <div className="flex justify-end items-center gap-2 text-xl font-bold">
                <span dir="rtl">{item.name} </span>
                <span className="text-2xl">•</span>
              </div>

              {/* الأسعار */}
              <div dir="rtl" className="flex justify-between items-center">
                {item.spr && (
                  <div className="flex items-center gap-2">
                    <span className="bg-orange-500 w-[13px] h-[36px] text-white rounded-[10px] text-sm ml-[-5px]"></span>
                    <span className="bg-orange-500 w-[13px] h-[36px] text-white rounded-[10px] text-sm ml-[-5px]"></span>
                    <span className="bg-orange-500 w-[13px] h-[36px] text-white rounded-[10px] text-sm "></span>
                    <span className="font-bold">{item.spr} L.E</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
