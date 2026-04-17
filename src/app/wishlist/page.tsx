import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Wishlist() {
  const items = [
    { title: "Silk Wrap Dress", price: "₹15,285", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1kdNVJ8eGrDg9YO6ZBeQ1IhBlan8wD3m-hvm50cfY-U7kwhZJR2s0f5M-041dZ1T5LZXM3t05kUSQJhVWExC3Sdc_CnI7kfRssiNiDH2Olp_z0C4anaCE9tBoeCkycImIkmVLAgi5Im61IINHYPYF2VPoDpjsfcQ7zqMjZfUy8szemNRKUdIEVjMerKaQc_AihQJkmK9XZQc723HUQu7WObkydEXjr2jJt_fn-5HYWR7hkxHfaBtRZe11IGq927VEVZjB8j82eKU", brand: "ATELIER" },
    { title: "Fine Pearl Necklace", price: "₹3,120", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMYofS-WuRzk-bBhN3d6oTiBsSj0JUJYRkgHZRHlfeKE-zfoDARE5wvXShsqTgltJZ4LrfAsfRC_x1OCAglbRpmJoL_8NAqvuyKUCn_gB45CaB4gweWutBvu5s0_TzERxmA8fHeIyZoYYYD9CFGWxNRwF4JYcj2pW6ItI3sCwd1GeMX-YlzrIhgG0shGVK7eS0Kcd6totPj79L28eNUYpnH_uwvxfnMKJAaOG_O1GJq-NQpnOgloVcWyBFTtDgfsja64JfIWOraJI", brand: "JEWELS" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="mb-16">
          <span className="text-stone-400 text-[10px] font-black tracking-widest uppercase mb-2">Saved Pieces</span>
          <h1 className="text-4xl md:text-6xl font-serif text-black leading-none italic">My Wishlist</h1>
        </div>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, i) => (
              <ProductCard 
                key={i}
                image={item.image}
                title={item.title}
                subtitle="Curated from Shop"
                price={item.price}
                brand={item.brand}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <span className="material-symbols-outlined text-6xl text-stone-200 mb-4 font-light">favorite</span>
            <p className="text-stone-500 text-lg italic">Your wishlist is currently empty.</p>
            <Link href="/shop" className="inline-block mt-8 text-black font-black uppercase tracking-[0.2em] text-xs border-b-2 border-black pb-2">Explore Collections</Link>
          </div>
        )}
      </main>
    </div>
  );
}
