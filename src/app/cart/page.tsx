"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_ITEMS = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4TOvR15m0APFFaUiBrmq-Lqq0hNlwBOtolxIz_WcyiU0hx5_J5qp8uS-fze23VYyySIe470J82-2bhkVLBBBrZ8GseJ56g9Pj2Yo2bYDQSNuZsGqiQewdeG48ee0O129pFrkBCL1qnbdg51IA0dgmPqNh5GaD7wRTROUv3gqmQfASisxqMzip8qQe8eK4fzHIiNhGRWRhQ125xtzW8hCatrj1wIqgfCeYQz6EJHod8gB2XtCkmTByvPfK6p7C-c3RkuPUKwja3BQ",
    title: "The Silk Slip Dress",
    sku: "ATL-26-004",
    color: "Champagne Gold",
    size: "S",
    price: 15285,
    quantity: 1
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTqVCuYmV-UMlq2il4Lrtx4xWqXOnh21RKy4CCtBVs5-TXRrmJjqT02pZ47verrl-14o15JkvX5wx3OpErPuZ3IX51UpJUefxHIiDESnmMHkqIpE0tO5hPfKi2Hfu_3Ls-vCq2BmTKtenJTggsjAAENJZte8FwEDbgD8kQVE7vPPgK1wfw_alV9VeAn99gqziljtl8ZJEuPydbFK9p493yjd8I0r8XAhcywk7eq1nwzszqSVM9zbFYMiS6160pSAwv-As90lAhq2E",
    title: "Ivory Tailored Blazer",
    sku: "MNM-26-081",
    color: "Soft Bone",
    size: "M",
    price: 8450,
    quantity: 1
  }
];

export default function Cart() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const FREE_SHIPPING_THRESHOLD = 25000;

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => items.reduce((acc, item) => acc + item.price * item.quantity, 0), [items]);
  const gst = Math.round(subtotal * 0.12);
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 450;
  const total = subtotal + shipping;
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <main className="max-w-screen-2xl mx-auto px-6 md:px-16 py-24">
        
        {/* Editorial Heading */}
        <div className="mb-24 flex flex-col md:flex-row items-baseline justify-between gap-4 border-b border-black/5 pb-12">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-serif text-black leading-none tracking-tighter">
              Shopping <span className="italic font-light">Bag</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400">Inventory Reserved for 15:00 minutes</p>
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-stone-300">
            <span>Bag — 0{items.length}</span>
            <span>Est. Delivery — Oct 24</span>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-24">
            
            {/* Main Content Area */}
            <div className="xl:col-span-8 space-y-20">
              
              {/* Free Shipping Tracker */}
              <div className="bg-white p-8 border border-stone-100 shadow-sm relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black uppercase tracking-widest">
                      {subtotal >= FREE_SHIPPING_THRESHOLD 
                        ? "Complimentary Shipping Unlocked" 
                        : "Complimentary Shipping Progress"}
                    </h4>
                    <p className="text-xs text-stone-400 font-medium italic">
                      {subtotal >= FREE_SHIPPING_THRESHOLD 
                        ? "Your order qualifies for free global atelier delivery." 
                        : `Add ₹${(FREE_SHIPPING_THRESHOLD - subtotal).toLocaleString()} more to unlock free shipping.`}
                    </p>
                  </div>
                  <div className="w-full md:w-64 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-black"
                    />
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-0">
                <AnimatePresence initial={false}>
                  {items.map((item, index) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="group py-12 border-b border-stone-200 grid grid-cols-1 md:grid-cols-12 gap-12"
                    >
                      <div className="md:col-span-1 hidden md:block">
                        <span className="text-stone-200 text-6xl font-serif italic leading-none opacity-50">0{index+1}</span>
                      </div>

                      <div className="md:col-span-3">
                        <div className="aspect-[3/4] relative bg-stone-100 overflow-hidden mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.02]">
                          <Image src={item.image} alt={item.title} fill className="object-cover transition-all duration-1000 grayscale-[40%] group-hover:grayscale-0" />
                        </div>
                      </div>

                      <div className="md:col-span-5 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-300">Piece {item.sku}</span>
                            <h3 className="text-3xl font-serif text-black leading-tight">{item.title}</h3>
                          </div>
                          
                          <div className="flex flex-wrap gap-8 text-[11px] font-bold uppercase tracking-widest text-stone-400">
                            <div>Color <span className="text-black ml-2">{item.color}</span></div>
                            <div>Size <span className="text-black ml-2">{item.size}</span></div>
                          </div>
                        </div>

                        <div className="flex items-center gap-12 mt-12">
                          <div className="flex items-center border border-black rounded-full px-6 py-2 gap-8">
                             <button onClick={() => updateQuantity(item.id, -1)} className="text-black hover:opacity-40 transition-all text-xs font-black">—</button>
                             <span className="text-sm font-black w-6 text-center">{item.quantity}</span>
                             <button onClick={() => updateQuantity(item.id, 1)} className="text-black hover:opacity-40 transition-all text-xs font-black">+</button>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-[10px] font-black uppercase tracking-widest text-rose-300 hover:text-rose-600 transition-colors underline underline-offset-8"
                          >
                            Discard
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-3 flex flex-col items-end justify-between py-2">
                        <span className="text-2xl font-serif">₹{(item.price * item.quantity).toLocaleString()}</span>
                        <div className="md:text-right text-[10px] text-stone-300 font-bold uppercase tracking-widest leading-relaxed">
                          Ethically Sourced <br /> Hand-Finished
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                <div className="bg-white p-10 border border-stone-100 space-y-4">
                  <span className="material-symbols-outlined text-stone-300 text-3xl">spa</span>
                  <h5 className="font-serif text-xl tracking-tight">Atelier Assurance</h5>
                  <p className="text-xs text-stone-400 font-medium leading-relaxed">Each piece is inspected by our senior artisans. Your order includes a signed certificate of authenticity and a bespoke storage dust-bag.</p>
                </div>
                <div className="bg-white p-10 border border-stone-100 space-y-4">
                  <span className="material-symbols-outlined text-stone-300 text-3xl">verified</span>
                  <h5 className="font-serif text-xl tracking-tight">Luxury concierge</h5>
                  <p className="text-xs text-stone-400 font-medium leading-relaxed">Have questions about fit or styling? Our concierge is available 24/7 to ensure your selection is nothing short of perfection.</p>
                </div>
              </div>
            </div>

            {/* Sidebar Summary */}
            <div className="xl:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-white border border-stone-200 p-12 shadow-[40px_40px_80px_-40px_rgba(0,0,0,0.05)]">
                <h2 className="text-4xl font-serif mb-16 tracking-tighter">Check out</h2>
                
                <div className="space-y-8 pb-12 border-b border-stone-100">
                  <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                    <span className="text-stone-300">Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                    <span className="text-stone-300">GST (12%)</span>
                    <span>₹{gst.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                    <span className="text-stone-300">Shipping</span>
                    <span className={shipping === 0 ? "text-emerald-500 italic" : "text-black"}>
                      {shipping === 0 ? "Included" : `₹${shipping}`}
                    </span>
                  </div>
                </div>

                <div className="py-12 flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-widest text-stone-300">Total payable</span>
                    <h3 className="text-5xl font-serif">₹{total.toLocaleString()}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-black text-white py-8 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-stone-800 transition-all shadow-xl hover:-translate-y-1">
                    Secure checkout
                  </button>
                  <p className="text-center text-[9px] font-bold text-stone-300 uppercase tracking-widest mt-4">
                    Accepted: Visa, Amex, UPI, Crypto
                  </p>
                </div>

                <div className="mt-16 space-y-6">
                   <div className="flex items-start gap-4 text-stone-300">
                     <span className="material-symbols-outlined text-sm">lock</span>
                     <p className="text-[9px] font-bold uppercase tracking-widest leading-loose">Encrypted transactional layer secured by 24L Vault Protocol.</p>
                   </div>
                   <div className="flex items-start gap-4 text-stone-300">
                     <span className="material-symbols-outlined text-sm">public</span>
                     <p className="text-[9px] font-bold uppercase tracking-widest leading-loose">Eco-friendly carbon-neutral delivery on all global curations.</p>
                   </div>
                </div>
              </div>

              {/* Promo Section */}
              <div className="mt-8 p-8 border border-stone-200 border-dashed group cursor-pointer hover:border-black transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Have a promo?</span>
                  <span className="material-symbols-outlined text-stone-300 group-hover:text-black transition-colors">add</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-60 text-center space-y-12">
            <h2 className="text-5xl font-serif text-stone-200 italic tracking-tighter">The bag is holding nothingness.</h2>
            <Link href="/shop" className="inline-block border-b-2 border-black pb-2 text-sm font-black uppercase tracking-[0.3em] hover:text-stone-500 hover:border-stone-500 transition-all">
              Discover Collections
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
