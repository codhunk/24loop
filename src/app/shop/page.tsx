import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container">


      <main className="max-w-screen-2xl mx-auto px-8 pt-12 pb-24">
        {/* Editorial Header Section */}
        <section className="mb-16">
          <h1 className="font-black  text-6xl md:text-8xl text-primary leading-none mb-4">Curated Collection</h1>
          <p className="text-lg text-tertiary max-w-2xl leading-relaxed">
            Discover pieces that whisper elegance and scream sophistication. From sun-drenched linens to evening silks, find your next ethereal statement.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
            <div className="bg-surface-container-low p-6 rounded-[1rem] lg:bg-transparent lg:p-0">
              <h3 className="font-serif text-xl text-primary mb-6">Category</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 font-body">
                <FilterCheckbox label="Dresses" />
                <FilterCheckbox label="Blouses & Tops" checked />
                <FilterCheckbox label="Knitwear" />
                <FilterCheckbox label="Outerwear" />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-primary mb-6">Size</h3>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button key={size} className={`w-10 h-10 rounded-sm ${size === "S" ? "bg-primary text-white shadow-sm" : "bg-surface-container-high text-on-surface-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-primary mb-6">Palette</h3>
              <div className="flex flex-wrap gap-3">
                <button className="w-6 h-6 rounded-full ring-2 ring-offset-2 ring-primary bg-[#fdf5f5]" title="Blush"></button>
                <button className="w-6 h-6 rounded-full bg-[#f5f5dc]" title="Beige"></button>
                <button className="w-6 h-6 rounded-full bg-[#e6e6fa]" title="Lavender"></button>
                <button className="w-6 h-6 rounded-full bg-[#faf0e6]" title="Linen"></button>
                <button className="w-6 h-6 rounded-full bg-[#363b10]" title="Olive"></button>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-primary mb-6">Price Range</h3>
              <input className="w-full h-1 bg-surface-container-high rounded-full appearance-none accent-primary cursor-pointer" type="range" />
              <div className="flex justify-between mt-4 text-xs text-tertiary">
                <span>$50</span>
                <span>$500+</span>
              </div>
            </div>

            <div className="bg-primary-container/20 p-6 rounded-[1rem] border border-primary/10">
              <p className="text-[10px] capitalize font-black text-primary mb-2">Member Exclusive</p>
              <p className="font-serif text-lg leading-snug mb-4 text-on-surface">Get 15% off your first atelier purchase.</p>
              <button className="w-full py-2.5 bg-primary text-white rounded-full text-xs font-bold capitalize transition-transform hover:scale-[1.02] active:scale-[0.98]">Join Now</button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <p className="text-sm text-tertiary">Showing <span className="font-bold text-primary">24</span> ethereal pieces</p>
              <div className="flex items-center space-x-2 bg-surface-container px-4 py-2 rounded-full">
                <span className="text-[10px] capitalize  text-on-surface-variant font-bold">Sort By:</span>
                <select className="bg-transparent border-none text-xs font-bold text-primary focus:ring-0 cursor-pointer outline-none">
                  <option>Featured</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
              <ShopCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuC1kdNVJ8eGrDg9YO6ZBeQ1IhBlan8wD3m-hvm50cfY-U7kwhZJR2s0f5M-041dZ1T5LZXM3t05kUSQJhVWExC3Sdc_CnI7kfRssiNiDH2Olp_z0C4anaCE9tBoeCkycImIkmVLAgi5Im61IINHYPYF2VPoDpjsfcQ7zqMjZfUy8szemNRKUdIEVjMerKaQc_AihQJkmK9XZQc723HUQu7WObkydEXjr2jJt_fn-5HYWR7hkxHfaBtRZe11IGq927VEVZjB8j82eKU" 
                title="The Silk Wrap Dress" 
                color="Blush Rose" 
                price="$285" 
                originalPrice="$712"
              />
              <ShopCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCMSP1NJaKl04xGwEEDdZCJytxn9RiHfSSbK2o3XtqIgPz3thckS9tafUUkoP99_JJRjkl13X0WuayM4mlcvfLsAjc68cWWfeBB3qJ_8AgNsWNSF3UqySnxPa7v-02jooGM1S59r_RZlOENfIFBVO-KYgZ_etmvmTuPHLu9iPoC5rpxZFf47MIKhLqyP_b9uxxFBhcWiYgaaZOguNvv_obMfdWAC6XWB6j-EIgETtD3ny-CTSZXyEARRKejA2VmUGucDbRDgFWXEoU" 
                title="Linen Whisper Blouse" 
                color="Ivory" 
                price="$145" 
                originalPrice="$362"
              />
              <ShopCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAzs2JZ7vE9GCh769Y4LH3AM1rnFgPwAuBfdvLxXnGmyO97ENvG2TpKmS9mLsHOxOMcJazc0RR0OopGZuIZI6ZTADbU-3CGlPUCh8fbZo9H2bfvccELa7FGG9dmWOyDHTWI63wgRmlxM7gyFFJM9PG_plrigoZREB1Wlq9DdtvZgTEKlD8khQEa_kw-zOpAmQNNAlMJ6SNUpK8ZfEoGgOufTbiwmUdKRtxZmMoJ9U1Rq-gYZsMLKlgNisdvPZHiBbEcyZvSFrAWAv8" 
                title="Orchid Evening Gown" 
                color="Evening Dusk" 
                price="$490" 
                originalPrice="$1225"
              />
              <ShopCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuB2NI7HUhs01rahyPKc4XO-NiAnJ2WAPKX_fuMPJWrGHbwhqfgU6QKZHt6IjtIf9S6bc3NM8EpPL-UZY7Qp75TSpTiCEuBl_viW2Q-kdMsSh-WLLtiXB5PxpIqNU4OOIEy9vcwUjd6IVQurC8tSW5mTncL-6691089SdLpUOWz6i89ffjptFzcTT7tpFPmt8uVL80PjRb4_qAZ9NjUT9_AjJJGRjrr_O7Mhhyt0_-RhbgewXyxc-w_1msLaXL9S4LErdvKTu1dRCDY" 
                title="Cashmere Cloud Cardigan" 
                color="Taupe" 
                price="$320" 
                originalPrice="$800"
              />
              <ShopCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAvU8TotjkqqTgzK2bITDbabdbvUIx0kzccQAfMyWK0Ot0O-vhVR9R3LIjS-NlFgNN2MNdFSriagcYOTIrWLkpmIYfvGc17wclnhnFlYG05OT4OBGmkY0sNlA89-IZeh0L8ATmVwQBIN0O7dfU8bPk-bXRerjT484e-cw6cMHpCBaFt7GmC78QdzQIJGIsFu6pasPYZNxMW1uZo7sLff6Z2F2npV40S5gIGg-BMs0RCD4EK8rcMMLKTvZcMGoVwguQ1OxsGAMfXI50" 
                title="Petal Sun Dress" 
                color="Floral Mist" 
                price="$195" 
                originalPrice="$485"
              />
              <ShopCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAeHV8hOAlM7OEqYDXF2l8WId0VGlALfdcUis9cw300hV1S27oJMc0cSn9k4GXaCZ_M3WZ6hHMpyMA4IKcbPFAngmMlI-FVdtUOP3qFwYsE1ZdDQD9ZExB8akXDSZVSOMoZxiKoXczgY8jSBUb-j23b_EJo90VGHhGW1PmzBhFKZqb1UcukPgg8nCwQoUm6gqLaoEm6K97MyEAQS8hhfn6OVP3XiHSvrBH-qnB8_czZE_M9YVAdxLNA0IyEQ49O1Zd2PZfpm-EWMjs" 
                title="Satin Slip Skirt" 
                color="Champagne" 
                price="$110" 
                originalPrice="$275"
              />
            </div>

            {/* Pagination */}
            <div className="mt-20 flex justify-center items-center space-x-4">
              <button className="p-2 text-primary hover:bg-primary-container rounded-full transition-colors">
                <span className="material-symbols-outlined">arrow_back_ios</span>
              </button>
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">1</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-primary hover:bg-primary-container font-medium">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-primary hover:bg-primary-container font-medium">3</button>
              <button className="p-2 text-primary hover:bg-primary-container rounded-full transition-colors">
                <span className="material-symbols-outlined">arrow_forward_ios</span>
              </button>
            </div>
          </div>
        </div>
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
            <h4 className="font-serif text-xl mb-6 font-bold capitalize  text-xs opacity-50">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link className="text-sm text-white/60 hover:text-white transition-all font-body" href="#">About Us</Link>
              <Link className="text-sm text-white/60 hover:text-white transition-all font-body" href="/shop">Our Shop</Link>
              <Link className="text-sm text-white/60 hover:text-white transition-all font-body" href="#">Editorial</Link>
              <Link className="text-sm text-white/60 hover:text-white transition-all font-body" href="#">Sustainability</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 font-bold capitalize  text-xs opacity-50">Customer Care</h4>
            <nav className="flex flex-col space-y-3">
              <Link className="text-sm text-white/60 hover:text-white transition-all font-body" href="#">Shipping & Returns</Link>
              <Link className="text-sm text-white/60 hover:text-white transition-all font-body" href="#">Sizing Guide</Link>
              <Link className="text-sm text-white/60 hover:text-white transition-all font-body" href="#">Contact Us</Link>
              <Link className="text-sm text-white/60 hover:text-white transition-all font-body" href="#">FAQ</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 font-bold capitalize  text-xs opacity-50">Newsletter</h4>
            <p className="text-sm text-white/60 font-body mb-4">Receive private invitations and new collection updates.</p>
            <div className="flex items-center bg-white/10 rounded-full overflow-hidden border border-white/20 p-1">
              <input className="bg-transparent border-none focus:ring-0 px-4 py-2 w-full text-sm text-white outline-none" placeholder="Email Address" type="email" />
              <button className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold capitalize transition-all hover:opacity-90">Join</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 py-8 px-12 text-center">
          <p className="text-[10px] text-white/30 capitalize ">© 2026 24Loop Digital Atelier. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ShopCard({ image, title, color, price, originalPrice = "$400", rating = 4.2 }: { image: string, title: string, color: string, price: string, originalPrice?: string, rating?: number }) {
  return (
    <div className="group bg-white rounded-[1rem] p-4 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-stone-100 relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[0.8rem] mb-5 bg-stone-50">
        <button className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-400 transition-all hover:bg-rose-50 hover:text-rose-600 shadow-sm">
          <span className="material-symbols-outlined text-[20px]">favorite</span>
        </button>
        <Link href="/product">
          <Image src={image} alt={title} fill className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </Link>
        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          <Link href="/cart" className="w-full bg-on-surface text-surface py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-lg">
            <span className="material-symbols-outlined text-sm">shopping_bag</span>
            Quick Add
          </Link>
        </div>
      </div>
      <div className="px-1">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[10px] font-bold text-stone-400 capitalize ">24Loop</span>
          <div className="flex text-amber-400 ml-auto">
            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-[11px] font-bold text-on-surface ml-0.5">{rating}</span>
          </div>
        </div>
        <Link href="/product">
          <h4 className="font-serif text-lg text-primary leading-tight hover:underline cursor-pointer line-clamp-1">{title}</h4>
        </Link>
        <p className="text-xs text-tertiary capitalize  mt-1 mb-3">{color}</p>
        
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-on-surface">{price}</span>
          <span className="text-sm text-stone-400 line-through">{originalPrice}</span>
        </div>
        
        <p className="text-[10px] text-green-700 font-bold mt-2 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">local_shipping</span>
          FREE Delivery by Tomorrow
        </p>
      </div>
    </div>
  );
}

function FilterCheckbox({ label, checked = false }: { label: string, checked?: boolean }) {
  return (
    <label className="flex items-center group cursor-pointer">
      <input defaultChecked={checked} className="w-4 h-4 rounded-sm border-stone-300 text-primary focus:ring-primary/20 bg-surface-container transition-all" type="checkbox" />
      <span className="ml-3 text-on-surface-variant font-body text-sm group-hover:text-primary transition-colors">{label}</span>
    </label>
  );
}
