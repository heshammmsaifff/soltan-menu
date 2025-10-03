"use client";

const products = [
  { name: "شرقي", type: "فاتح", ground: 140, beans: 125 },
  { name: "شرقي", type: "وسط", ground: 145, beans: 130 },
  { name: "شرقي", type: "غامق", ground: 150, beans: 135 },
  { name: "عميد", type: "فاتح", ground: 145, beans: 130 },
  { name: "عميد", type: "وسط", ground: 150, beans: 135 },
  { name: "عميد", type: "غامق", ground: 155, beans: 140 },
  { name: "السلطان", type: "فاتح", ground: 150, beans: 135 },
  { name: "السلطان", type: "وسط", ground: 155, beans: 140 },
  { name: "السلطان", type: "غامق", ground: 160, beans: 145 },
  { name: "السلطان اكستر", type: "فاتح", ground: 155, beans: 140 },
  { name: "السلطان اكستر", type: "وسط", ground: 160, beans: 145 },
  { name: "السلطان اكستر", type: "غامق", ground: 165, beans: 150 },
  { name: "اسبريسو", spr: 145 },
  { name: "كولومبي", type: "وسط", ground: 215, beans: 200 },
  { name: "كولومبي", type: "غامق", ground: 220, beans: 205 },
  { name: "برازيلي", type: "وسط", ground: 210, beans: 180 },
  { name: "حبشي", type: "وسط", ground: 150, beans: 135 },
  { name: "يمني", type: "وسط", ground: 278.5, beans: 275 },
];

export default function CoffeeMenu() {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center">
      <h1 className="flex items-center justify-center gap-3 text-3xl font-bold text-white mb-6">
        <span className="w-[15px] h-[15px] bg-white rounded-full"></span>
        بن تركي
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
                <span>
                  {item.name}{" "}
                  <span
                    className={
                      item.type === "فاتح"
                        ? "text-[#C58940]"
                        : item.type === "وسط"
                        ? "text-[#724115]"
                        : item.type === "غامق"
                        ? "text-[#351D08]"
                        : ""
                    }
                  >
                    {item.type}
                  </span>
                </span>
                <span className="text-2xl">•</span>
              </div>

              {/* الأسعار */}
              <div dir="rtl" className="flex justify-between items-center">
                {item.beans && (
                  <div className="flex items-center gap-2">
                    <span className="bg-orange-500 text-white rounded-md px-2 py-1 text-sm">
                      سادة
                    </span>
                    <span className="font-bold">{item.beans} L.E</span>
                  </div>
                )}
                {item.ground && (
                  <div className="flex items-center gap-2">
                    <span className="bg-orange-500 text-white rounded-md px-2 py-1 text-sm">
                      محوج
                    </span>
                    <span className="font-bold">{item.ground} L.E</span>
                  </div>
                )}
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
