import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  image,
  tag,
  tagColor = "bg-primary",
  brand = "24Loop",
  title,
  subtitle,
  price,
  originalPrice,
  discount,
  isHotDeal = false
}: {
  image: string,
  tag?: string,
  tagColor?: string,
  brand?: string,
  title: string,
  subtitle: string,
  price: string,
  originalPrice?: string,
  discount?: string,
  isHotDeal?: boolean
}) {
  return (
    <div className="group bg-white flex flex-col h-full transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded-[1rem] overflow-hidden border border-stone-100/30">
      {/* Photo Container - Reduced size using aspect-square and more padding */}
      <div className="relative aspect-square overflow-hidden bg-stone-50/50 m-2 rounded-[0.8rem]">
        {tag && (
          <span className={`absolute top-3 left-3 z-10 ${tagColor} px-2 py-0.5 text-white text-[9px] font-bold uppercase tracking-wider rounded-sm shadow-sm`}>
            {tag}
          </span>
        )}
        <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-stone-400 transition-all duration-300 hover:bg-white hover:text-rose-500 hover:scale-110 shadow-sm opacity-0 group-hover:opacity-100">
          <span className="material-symbols-outlined text-[18px]">favorite</span>
        </button>

        <Link href="/product" className="block h-full w-full">
          <Image
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={image}
            alt={title}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
          />
        </Link>
      </div>

      {/* Content Section - Compact and aligned */}
      <div className="px-4 pb-4 pt-1 flex flex-col flex-grow">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-black tracking-[0.1em] text-stone-400/80 uppercase">{brand}</span>
          <Link href="/product">
            <h3 className="text-[15px] font-extrabold text-on-surface hover:text-primary transition-colors leading-tight line-clamp-1">
              {title}
            </h3>
          </Link>
          <span className="text-[11px] text-on-surface-variant/80 font-medium">{subtitle}</span>
        </div>

        <div className="mt-2.5 flex items-end justify-between gap-2">
                <div className="flex items-center gap-4 bg-stone-100 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-black hover:opacity-40 transition-all font-black">—</button>
                  <span className="text-xs font-black">1</span>
                  <button className="text-black hover:opacity-40 transition-all font-black">+</button>
                </div>
          <div className="flex flex-col gap-1.5 flex-grow">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-on-surface">{price}</span>
              {originalPrice && (
                <span className="text-[11px] text-stone-400 line-through font-medium">
                  {originalPrice}
                </span>
              )}
              {discount && (
                <span className="text-[11px] font-bold text-emerald-600">
                  {discount}
                </span>
              )}
            </div>

            {isHotDeal && (
              <div className="flex">
                <span className="bg-emerald-50 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1 uppercase tracking-wide">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                  Hot Deal
                </span>
              </div>
            )}
          </div>

          <Link href="/cart" className="flex-none w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-black transition-all hover:scale-110 active:scale-95">
            <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
