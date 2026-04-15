import Image from "next/image";
import Link from "next/link";

export default function Wishlist() {
  const items = [
    { title: "Silk Wrap Dress", price: "$285", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1kdNVJ8eGrDg9YO6ZBeQ1IhBlan8wD3m-hvm50cfY-U7kwhZJR2s0f5M-041dZ1T5LZXM3t05kUSQJhVWExC3Sdc_CnI7kfRssiNiDH2Olp_z0C4anaCE9tBoeCkycImIkmVLAgi5Im61IINHYPYF2VPoDpjsfcQ7zqMjZfUy8szemNRKUdIEVjMerKaQc_AihQJkmK9XZQc723HUQu7WObkydEXjr2jJt_fn-5HYWR7hkxHfaBtRZe11IGq927VEVZjB8j82eKU" },
    { title: "Fine Pearl Necklace", price: "$120", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMYofS-WuRzk-bBhN3d6oTiBsSj0JUJYRkgHZRHlfeKE-zfoDARE5wvXShsqTgltJZ4LrfAsfRC_x1OCAglbRpmJoL_8NAqvuyKUCn_gB45CaB4gweWutBvu5s0_TzERxmA8fHeIyZoYYYD9CFGWxNRwF4JYcj2pW6ItI3sCwd1GeMX-YlzrIhgG0shGVK7eS0Kcd6totPj79L28eNUYpnH_uwvxfnMKJAaOG_O1GJq-NQpnOgloVcWyBFTtDgfsja64JfIWOraJI" },
  ];

  return (
    <div className="min-h-screen bg-background">


      <main className="max-w-screen-2xl mx-auto px-8 py-20 font-body">
        <h1 className="text-4xl font-serif italic mb-12">My Wishlist</h1>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all border border-stone-100 relative">
                <button className="absolute top-6 right-6 z-10 text-rose-500 hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                </button>
                <div className="aspect-[3/4] relative rounded-xl overflow-hidden mb-4 bg-stone-50">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                <p className="text-primary font-bold mb-4">{item.price}</p>
                <button className="w-full py-3 bg-on-surface text-surface rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                  Move to Bag
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <span className="material-symbols-outlined text-6xl text-stone-200 mb-4 font-light">favorite</span>
            <p className="text-stone-500 text-lg italic">Your wishlist is currently empty.</p>
            <Link href="/shop" className="inline-block mt-8 text-primary font-bold underline underline-offset-8">Explore Collections</Link>
          </div>
        )}
      </main>
    </div>
  );
}
