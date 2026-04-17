import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">


      <main className="max-w-screen-2xl mx-auto px-8 pt-8 font-body">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-8 text-xs capitalize tracking-[0.2em] text-stone-400 font-bold">
          <Link className="hover:text-primary transition-colors" href="/">Home</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link className="hover:text-primary transition-colors" href="/shop">Women's Fashion</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link className="hover:text-primary transition-colors" href="/shop">Dresses</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-on-surface">Silk Satin Slip Dress</span>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Product Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
            <div className="flex md:flex-col gap-4 order-2 md:order-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 md:w-20 md:h-20 rounded-[0.5rem] overflow-hidden border-2 border-transparent hover:border-primary cursor-pointer transition-all bg-stone-50 relative">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX2b1m9q7afO3DKAKKn0Z1_ZMtHNYEtAwVoGCniQkv2QIWIfWEp1V-GTvsmS-L1qMFlg1CPeef3sRaojh7SQjRXO5vCW-GQceuDdZ34wC7LGsJZgiN6KUrW5FVj72qToFLE3CemnpqxxlMOqoamFnq8YKYbsKlhjQwxmxpElM9p_HywFH6dHekfwrCzr6AhMrQuE0F9tku2WdCrth132oAbFnLeBudboN-I30A3InjhNLbTvWes566izlbUNOhMHAnu_CweS0V70Q" alt="Thumbnail" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="flex-grow aspect-[3/4] rounded-[1rem] overflow-hidden bg-stone-50 relative order-1 md:order-2 shadow-sm group">
              <Image
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRgLg8uXj-ZioM6qx_CGxm1BYSif-QdRtnnXZHfapyPMf77QsIJOW6M0hBiJL1tmq0VK8u0FeuCXAy0z8Yg_Kr4uWAleFRMljkGC-Bh3dnrBAv7LOPRaENrzv_9k-s7Nfng4UGysk9clLHhRUAIDyp1wSdo7vbj96vMSJ1dnMedSys1n7IR12lEfZE0QDCmkXKFzxdhr2yndZ4Z0r3b1g-uW1GsgNgL7WMeqsy2wcuIn82WYyFMyijtykDjGDVavrUGoG3yqzviqo"
                alt="Main Product"
                fill
                priority
              />
              <button className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg border border-white transition-transform hover:scale-110">
                <span className="material-symbols-outlined text-2xl">favorite</span>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-sm font-bold text-primary capitalize tracking-[0.2em]">24Loop Atelier</span>
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-amber-700 font-bold text-xs ring-1 ring-amber-200">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  4.8
                </div>
                <span className="text-xs text-stone-400 font-bold capitalize tracking-widest">(2,450 Reviews)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-on-surface leading-tight mb-2">Silk Satin Slip Dress</h1>
              <p className="text-stone-500 ">Limited Edition Champagne Collection</p>
            </div>

            <div className="py-6 border-y border-stone-100">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-4xl font-bold text-on-surface">$340.00</span>
                <span className="text-xl text-stone-400 line-through font-light">$850.00</span>
                <span className="text-lg font-bold text-green-600">60% OFF</span>
              </div>
              <p className="text-sm text-on-surface-variant font-medium">Inclusive of all taxes</p>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-secondary-container/30 px-4 py-3 rounded-lg border border-secondary-container/50">
                  <p className="text-[10px] capitalize tracking-widest font-bold text-secondary mb-1">Bank Offer</p>
                  <p className="text-xs text-on-surface font-semibold">10% Instant Discount on SBI Cards</p>
                </div>
                <div className="bg-tertiary-container/30 px-4 py-3 rounded-lg border border-tertiary-container/50">
                  <p className="text-[10px] capitalize tracking-widest font-bold text-tertiary mb-1">EMI Option</p>
                  <p className="text-xs text-on-surface font-semibold">No Cost EMI starts at $28/mo</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold capitalize tracking-[0.2em] text-on-surface-variant">Select Size</span>
                  <button className="text-xs font-bold capitalize tracking-widest text-primary underline underline-offset-4">Size Guide</button>
                </div>
                <div className="flex gap-3">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button key={size} className={`w-14 h-14 rounded-full border-2 transition-all font-bold flex items-center justify-center ${size === "M" ? "border-primary bg-primary text-white shadow-lg" : "border-stone-100 bg-white hover:border-primary text-stone-600"}`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cart" className="flex-1 bg-primary text-white text-center py-5 rounded-full font-bold capitalize tracking-[0.2em] shadow-xl shadow-primary/20 hover:bg-primary-dim transition-all active:scale-[0.98]">
                  Add to Bag
                </Link>
                <Link href="/checkout" className="flex-1 bg-on-surface text-surface text-center py-5 rounded-full font-bold capitalize tracking-[0.2em] shadow-xl hover:bg-on-surface-variant transition-all active:scale-[0.98]">
                  Buy It Now
                </Link>
              </div>

              {/* Delivery Info */}
              <div className="bg-stone-50 rounded-[1rem] p-6 space-y-4 border border-stone-100">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Free Delivery</p>
                    <p className="text-xs text-stone-500">Processing: 24 hrs • Delivery: 3-5 Business Days</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">cached</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">7 Days Return</p>
                    <p className="text-xs text-stone-500">Easy returns if the fit isn't right for you.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-tertiary">verified_user</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Quality Assured</p>
                    <p className="text-xs text-stone-500">100% Genuine 19mm Mulberry Silk.</p>
                  </div>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-serif">Product Details</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> 100% Heavy Mulberry Silk</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Bias-cut for fluid drape</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Adjustable spaghetti straps</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> French seams for durability</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Gold-tone hardware</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Eco-friendly dyes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Products */}
        <section className="py-16 border-t border-stone-100">
          <h2 className="text-3xl font-serif mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <SimilarCard image="https://lh3.googleusercontent.com/aida-public/AB6AXuC1kdNVJ8eGrDg9YO6ZBeQ1IhBlan8wD3m-hvm50cfY-U7kwhZJR2s0f5M-041dZ1T5LZXM3t05kUSQJhVWExC3Sdc_CnI7kfRssiNiDH2Olp_z0C4anaCE9tBoeCkycImIkmVLAgi5Im61IINHYPYF2VPoDpjsfcQ7zqMjZfUy8szemNRKUdIEVjMerKaQc_AihQJkmK9XZQc723HUQu7WObkydEXjr2jJt_fn-5HYWR7hkxHfaBtRZe11IGq927VEVZjB8j82eKU" title="Silk Wrap Dress" price="$285.00" />
            <SimilarCard image="https://lh3.googleusercontent.com/aida-public/AB6AXuCMSP1NJaKl04xGwEEDdZCJytxn9RiHfSSbK2o3XtqIgPz3thckS9tafUUkoP99_JJRjkl13X0WuayM4mlcvfLsAjc68cWWfeBB3qJ_8AgNsWNSF3UqySnxPa7v-02jooGM1S59r_RZlOENfIFBVO-KYgZ_etmvmTuPHLu9iPoC5rpxZFf47MIKhLqyP_b9uxxFBhcWiYgaaZOguNvv_obMfdWAC6XWB6j-EIgETtD3ny-CTSZXyEARRKejA2VmUGucDbRDgFWXEoU" title="Linen Whisper Blouse" price="$145.00" />
            <SimilarCard image="https://lh3.googleusercontent.com/aida-public/AB6AXuAzs2JZ7vE9GCh769Y4LH3AM1rnFgPwAuBfdvLxXnGmyO97ENvG2TpKmS9mLsHOxOMcJazc0RR0OopGZuIZI6ZTADbU-3CGlPUCh8fbZo9H2bfvccELa7FGG9dmWOyDHTWI63wgRmlxM7gyFFJM9PG_plrigoZREB1Wlq9DdtvZgTEKlD8khQEa_kw-zOpAmQNNAlMJ6SNUpK8ZfEoGgOufTbiwmUdKRtxZmMoJ9U1Rq-gYZsMLKlgNisdvPZHiBbEcyZvSFrAWAv8" title="Orchid Evening Gown" price="$490.00" />
            <SimilarCard image="https://lh3.googleusercontent.com/aida-public/AB6AXuB2NI7HUhs01rahyPKc4XO-NiAnJ2WAPKX_fuMPJWrGHbwhqfgU6QKZHt6IjtIf9S6bc3NM8EpPL-UZY7Qp75TSpTiCEuBl_viW2Q-kdMsSh-WLLtiXB5PxpIqNU4OOIEy9vcwUjd6IVQurC8tSW5mTncL-6691089SdLpUOWz6i89ffjptFzcTT7tpFPmt8uVL80PjRb4_qAZ9NjUT9_AjJJGRjrr_O7Mhhyt0_-RhbgewXyxc-w_1msLaXL9S4LErdvKTu1dRCDY" title="Cashmere Cardigan" price="$320.00" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white rounded-t-[3rem] mt-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 md:px-12 py-20 w-full max-w-screen-2xl mx-auto">
          <div className="flex flex-col space-y-6">
            <Link className="text-2xl font-serif " href="/">24Loop</Link>
            <p className="text-sm leading-relaxed text-white/60">Defining modern luxury through curated silhouettes and ethical craftsmanship since 2022.</p>
            <div className="flex space-x-6 text-white/40">
              <Link className="hover:text-white transition-all duration-200 material-symbols-outlined" href="#">camera_alt</Link>
              <Link className="hover:text-white transition-all duration-200 material-symbols-outlined" href="#">share</Link>
              <Link className="hover:text-white transition-all duration-200 material-symbols-outlined" href="#">public</Link>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 font-bold capitalize tracking-widest text-xs opacity-50">Shop</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link className="hover:text-white transition-all" href="/shop">Dresses</Link></li>
              <li><Link className="hover:text-white transition-all" href="/shop">Outerwear</Link></li>
              <li><Link className="hover:text-white transition-all" href="/shop">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 font-bold capitalize tracking-widest text-xs opacity-50">Support</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link className="hover:text-white transition-all" href="#">Shipping</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Returns</Link></li>
              <li><Link className="hover:text-white transition-all" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 font-bold capitalize tracking-widest text-xs opacity-50">Newsletter</h4>
            <div className="relative">
              <input className="w-full bg-transparent border-b border-white/20 focus:border-primary py-2 text-sm focus:ring-0 outline-none px-0 text-white transition-colors" placeholder="Email Address" type="email" />
              <button className="absolute right-0 bottom-2 text-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 py-8 px-12 text-center">
          <p className="text-[10px] text-white/30 capitalize tracking-[0.4em]">© 2026 24Loop Digital Atelier. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SimilarCard({ image, title, price }: { image: string, title: string, price: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] bg-stone-50 rounded-xl overflow-hidden mb-4 relative">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <h4 className="font-serif font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-sm font-bold text-stone-500">{price}</p>
    </div>
  );
}
