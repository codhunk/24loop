"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ProductCard";

const PRODUCT_DATA = {
  id: "丝-2026-004",
  title: "The Silk Satin Slip Dress",
  category: "Edition 2026",
  price: "15,285",
  originalPrice: "35,000",
  discount: "56% OFF",
  rating: 4.9,
  reviews: 128,
  description: "A masterclass in minimalist luxury. Bias-cut from 19mm heavy mulberry silk for a silhouette that glides with your movement. Designed for the discerning, hand-finished by master artisans in our signature atelier.",
  details: [
    { title: "Composition & Care", content: "100% Grade A Mulberry Silk. Dry clean only. Iron on low heat with a silk-safe barrier." },
    { title: "The Craftsmanship", content: "Each piece undergoes a 48-hour hand-finishing process, including French seams and individually hand-wrapped hardware." },
    { title: "Shipping & Privacy", content: "Complimentary global shipping. Arrives in our signature magnetic-closure gift box with a silk dust bag." }
  ],
  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBRgLg8uXj-ZioM6qx_CGxm1BYSif-QdRtnnXZHfapyPMf77QsIJOW6M0hBiJL1tmq0VK8u0FeuCXAy0z8Yg_Kr4uWAleFRMljkGC-Bh3dnrBAv7LOPRaENrzv_9k-s7Nfng4UGysk9clLHhRUAIDyp1wSdo7vbj96vMSJ1dnMedSys1n7IR12lEfZE0QDCmkXKFzxdhr2yndZ4Z0r3b1g-uW1GsgNgL7WMeqsy2wcuIn82WYyFMyijtykDjGDVavrUGoG3yqzviqo",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBX2b1m9q7afO3DKAKKn0Z1_ZMtHNYEtAwVoGCniQkv2QIWIfWEp1V-GTvsmS-L1qMFlg1CPeef3sRaojh7SQjRXO5vCW-GQceuDdZ34wC7LGsJZgiN6KUrW5FVj72qToFLE3CemnpqxxlMOqoamFnq8YKYbsKlhjQwxmxpElM9p_HywFH6dHekfwrCzr6AhMrQuE0F9tku2WdCrth132oAbFnLeBudboN-I30A3InjhNLbTvWes566izlbUNOhMHAnu_CweS0V70Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAMYofS-WuRzk-bBhN3d6oTiBsSj0JUJYRkgHZRHlfeKE-zfoDARE5wvXShsqTgltJZ4LrfAsfRC_x1OCAglbRpmJoL_8NAqvuyKUCn_gB45CaB4gweWutBvu5s0_TzERxmA8fHeIyZoYYYD9CFGWxNRwF4JYcj2pW6ItI3sCwd1GeMX-YlzrIhgG0shGVK7eS0Kcd6totPj79L28eNUYpnH_uwvxfnMKJAaOG_O1GJq-NQpnOgloVcWyBFTtDgfsja64JfIWOraJI"
  ]
};

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Dynamic Navigation Spacer */}
      <div className="h-20 lg:h-32"></div>

      <main className="max-w-screen-2xl mx-auto px-6 md:px-16">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left: Experimental Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-8">
            {/* Desktop Side Navigation */}
            <div className="hidden md:flex flex-col gap-4 w-20">
              {PRODUCT_DATA.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-[3/4] border-b-2 overflow-hidden transition-all duration-500 ${selectedImage === idx ? 'border-black' : 'border-transparent grayscale opacity-50'}`}
                >
                  <Image src={img} alt="thumb" fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Immersive Main Display */}
            <div className="flex-grow aspect-[3/4] bg-stone-100 relative group overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image src={PRODUCT_DATA.images[selectedImage]} alt="Main" fill className="object-cover" priority />
                </motion.div>
              </AnimatePresence>

              {/* Editorial Overlays */}
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                <span className="bg-black text-white text-[9px] font-black uppercase tracking-[0.4em] px-4 py-1.5 w-fit">Reserved Edition</span>
                <span className="text-black/30 text-[9px] font-black uppercase tracking-widest leading-none">ID: {PRODUCT_DATA.id}</span>
              </div>

              <button className="absolute bottom-8 right-8 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-xl">favorite</span>
              </button>
            </div>

            {/* Mobile Thumbnails */}
            <div className="flex md:hidden gap-4 overflow-x-auto no-scrollbar pb-4">
              {PRODUCT_DATA.images.map((img, idx) => (
                <button key={idx} onClick={() => setSelectedImage(idx)} className={`flex-none w-20 aspect-[3/4] relative ${selectedImage === idx ? 'ring-2 ring-black' : 'opacity-50'}`}>
                  <Image src={img} alt="thumb" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Sophisticated Info Panel */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 space-y-16">

              {/* Header */}
              <div className="space-y-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-300">{PRODUCT_DATA.category}</span>
                  <Link href="/shop" className="text-[10px] font-black uppercase tracking-widest text-black underline underline-offset-8">Discover More</Link>
                </div>
                <h1 className="text-5xl md:text-6xl font-serif text-black leading-[0.85] tracking-tighter">
                  THE SILK <br /> <span className="italic font-light">SATIN</span> SLIP
                </h1>
                <div className="flex items-center gap-6 pt-4 border-t border-stone-100">
                  <div className="text-3xl font-serif">₹{PRODUCT_DATA.price}</div>
                  <div className="text-stone-300 line-through text-lg font-light">₹{PRODUCT_DATA.originalPrice}</div>
                </div>
              </div>

              {/* Interaction Block */}
              <div className="space-y-12">
                {/* Size Selector */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em]">
                    <span>Silhouette Selection:</span>
                    <button className="text-stone-300 hover:text-black transition-colors">Digital Tape Measure</button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-14 h-14 rounded-full text-sm font-black transition-all border ${selectedSize === size ? 'bg-black text-white border-black shadow-[0_10px_30px_rgba(0,0,0,0.15)] scale-110' : 'bg-white text-stone-600 border-stone-600 hover:border-stone-600'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Action */}
                <div className="grid grid-cols-1 gap-4 pt-4">
                  <button className="w-full bg-black text-white py-5 text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-[#111] transition-all relative overflow-hidden group">
                    <span className="relative z-10">Add to Curation</span>
                    <span className="material-symbols-outlined text-sm relative z-10 transition-transform group-hover:translate-x-2">arrow_forward</span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  <p className="text-center text-[9px] font-bold text-stone-300 uppercase tracking-widest mt-2">Personalized Concierge Delivery Available</p>
                </div>
              </div>

              {/* Informative Tabs (Editorial Accordion) */}
              <div className="pt-16 border-t border-stone-100 space-y-8">
                {PRODUCT_DATA.details.map((tab, i) => (
                  <div key={i} className="group border-b border-stone-100 pb-8 last:border-0">
                    <button
                      onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                      className="w-full flex justify-between items-center text-[11px] font-black uppercase tracking-[0.3em] text-black group-hover:text-stone-400 transition-colors"
                    >
                      {tab.title}
                      <span className={`material-symbols-outlined transition-transform duration-500 ${activeTab === i ? 'rotate-180' : ''}`}>expand_more</span>
                    </button>
                    <AnimatePresence>
                      {activeTab === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-6 text-sm text-stone-400 leading-relaxed font-medium">{tab.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="bg-white p-8 border border-stone-100 rounded-2xl flex items-center gap-8">
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest">Heritage Guarantee</h5>
                  <p className="text-[10px] text-stone-300 font-bold uppercase tracking-widest mt-1">Sourced via the London Silk Syndicate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cinematic Scroll Reveal Section */}
        <section className="py-16 px-6 md:px-0">
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="space-y-12">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-300 block text-center">Atelier Craft</span>
              <h2 className="text-4xl md:text-6xl font-serif text-black leading-none text-center tracking-tighter">
                Hand-Finished <br /> <span className="italic font-light">to Perfection</span>
              </h2>
              <div className="aspect-video relative overflow-hidden bg-stone-100 group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMYofS-WuRzk-bBhN3d6oTiBsSj0JUJYRkgHZRHlfeKE-zfoDARE5wvXShsqTgltJZ4LrfAsfRC_x1OCAglbRpmJoL_8NAqvuyKUCn_gB45CaB4gweWutBvu5s0_TzERxmA8fHeIyZoYYYD9CFGWxNRwF4JYcj2pW6ItI3sCwd1GeMX-YlzrIhgG0shGVK7eS0Kcd6totPj79L28eNUYpnH_uwvxfnMKJAaOG_O1GJq-NQpnOgloVcWyBFTtDgfsja64JfIWOraJI"
                  alt="Craft Detail"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-12 border-t border-stone-100">
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest">Natural Drape</h4>
                <p className="text-sm text-stone-500 leading-relaxed font-medium italic">"We unlock the silk's natural elasticity by cutting at a 45-degree angle. This bias-cut architecture ensures the fabric moves not just with you, but for you."</p>
                <span className="text-[9px] font-black uppercase tracking-widest text-stone-300">— Atelier Director</span>
              </div>
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest">Thermal Intelligence</h4>
                <p className="text-sm text-stone-500 leading-relaxed font-medium">Mulberry silk is nature's most advanced fiber. It breathes during summer and insulates in winter, maintaining a constant state of comfort regardless of the environment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Recommendations */}
        <section className="py-16 border-t border-stone-100">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
            <h3 className="text-4xl font-serif text-black leading-none">Curated <span className="italic font-light">Complementaries</span></h3>
            <Link href="/shop" className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-2 hover:opacity-50 transition-all">View All Masterpieces</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <ProductCard image="https://lh3.googleusercontent.com/aida-public/AB6AXuC1kdNVJ8eGrDg9YO6ZBeQ1IhBlan8wD3m-hvm50cfY-U7kwhZJR2s0f5M-041dZ1T5LZXM3t05kUSQJhVWExC3Sdc_CnI7kfRssiNiDH2Olp_z0C4anaCE9tBoeCkycImIkmVLAgi5Im61IINHYPYF2VPoDpjsfcQ7zqMjZfUy8szemNRKUdIEVjMerKaQc_AihQJkmK9XZQc723HUQu7WObkydEXjr2jJt_fn-5HYWR7hkxHfaBtRZe11IGq927VEVZjB8j82eKU" title="Silk Wrap Dress" price="₹15,285" subtitle="Royal Crimson" brand="ATELIER" />
            <ProductCard image="https://lh3.googleusercontent.com/aida-public/AB6AXuCMSP1NJaKl04xGwEEDdZCJytxn9RiHfSSbK2o3XtqIgPz3thckS9tafUUkoP99_JJRjkl13X0WuayM4mlcvfLsAjc68cWWfeBB3qJ_8AgNsWNSF3UqySnxPa7v-02jooGM1S59r_RZlOENfIFBVO-KYgZ_etmvmTuPHLu9iPoC5rpxZFf47MIKhLqyP_b9uxxFBhcWiYgaaZOguNvv_obMfdWAC6XWB6j-EIgETtD3ny-CTSZXyEARRKejA2VmUGucDbRDgFWXEoU" title="Linen Blouse" price="₹2,645" subtitle="Ocean Teal" brand="MODERN" />
            <ProductCard image="https://lh3.googleusercontent.com/aida-public/AB6AXuAzs2JZ7vE9GCh769Y4LH3AM1rnFgPwAuBfdvLxXnGmyO97ENvG2TpKmS9mLsHOxOMcJazc0RR0OopGZuIZI6ZTADbU-3CGlPUCh8fbZo9H2bfvccELa7FGG9dmWOyDHTWI63wgRmlxM7gyFFJM9PG_plrigoZREB1Wlq9DdtvZgTEKlD8khQEa_kw-zOpAmQNNAlMJ6SNUpK8ZfEoGgOufTbiwmUdKRtxZmMoJ9U1Rq-gYZsMLKlgNisdvPZHiBbEcyZvSFrAWAv8" title="Evening Gown" price="₹4,890" subtitle="Emerald Green" brand="GLAM" />
            <ProductCard image="https://lh3.googleusercontent.com/aida-public/AB6AXuB2NI7HUhs01rahyPKc4XO-NiAnJ2WAPKX_fuMPJWrGHbwhqfgU6QKZHt6IjtIf9S6bc3NM8EpPL-UZY7Qp75TSpTiCEuBl_viW2Q-kdMsSh-WLLtiXB5PxpIqNU4OOIEy9vcwUjd6IVQurC8tSW5mTncL-6691089SdLpUOWz6i89ffjptFzcTT7tpFPmt8uVL80PjRb4_qAZ9NjUT9_AjJJGRjrr_O7Mhhyt0_-RhbgewXyxc-w_1msLaXL9S4LErdvKTu1dRCDY" title="Luxury Wrap" price="₹3,120" subtitle="Sandy Beige" brand="HERITAGE" />
          </div>
        </section>
      </main>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-100 p-6 z-50 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div>
          <span className="text-[10px] font-black uppercase text-stone-300 block tracking-widest">Total Valuation</span>
          <span className="text-xl font-serif">₹{PRODUCT_DATA.price}</span>
        </div>
        <button className="bg-black text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-transform">
          Curate Now
        </button>
      </div>
    </div>
  );
}
