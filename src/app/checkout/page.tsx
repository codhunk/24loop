import Image from "next/image";
import Link from "next/link";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      <main className="flex-grow max-w-screen-2xl mx-auto w-full px-8 py-12 md:py-20 font-body">
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black  text-primary mb-4">Checkout</h1>
          <p className="text-on-surface-variant text-lg">Complete your order to bring a touch of ethereal beauty home.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Shipping & Payment */}
          <div className="lg:col-span-7 space-y-12">
            {/* Shipping Section */}
            <section className="bg-surface-container-low rounded-[1rem] p-10 shadow-sm border border-stone-200/50">
              <div className="flex items-center gap-4 mb-10">
                <span className="bg-primary-container text-primary w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-inner">1</span>
                <h2 className="text-3xl font-serif text-on-surface ">Shipping Address</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="block text-xs font-black capitalize text-on-surface-variant mb-3">Full Name</label>
                  <input className="w-full bg-slate-50 border-none rounded-full px-8 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" placeholder="Evelyn Rosewood" type="text" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold capitalize  text-on-surface-variant mb-3">Street Address</label>
                  <input className="w-full bg-slate-50 border-none rounded-full px-8 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" placeholder="123 Atelier Lane" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold capitalize  text-on-surface-variant mb-3">City</label>
                  <input className="w-full bg-slate-50 border-none rounded-full px-8 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" placeholder="Paris" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold capitalize  text-on-surface-variant mb-3">Postal Code</label>
                  <input className="w-full bg-slate-50 border-none rounded-full px-8 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" placeholder="75001" type="text" />
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section className="bg-surface-container-low rounded-[1rem] p-10 shadow-sm border border-stone-200/50">
              <div className="flex items-center gap-4 mb-10">
                <span className="bg-primary-container text-primary w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-inner">2</span>
                <h2 className="text-3xl font-serif text-on-surface ">Payment Method</h2>
              </div>
              <div className="space-y-8">
                <div className="flex flex-wrap gap-4 mb-8">
                  <label className="flex-1 min-w-[140px] cursor-pointer group">
                    <input checked readOnly className="hidden peer" name="payment" type="radio" />
                    <div className="p-6 rounded-[1rem] bg-slate-50 text-center transition-all peer-checked:bg-primary peer-checked:text-white border-2 border-transparent peer-checked:shadow-lg">
                      <span className="material-symbols-outlined block mb-2 text-3xl">credit_card</span>
                      <span className="text-xs font-bold capitalize ">Credit Card</span>
                    </div>
                  </label>
                  <label className="flex-1 min-w-[140px] cursor-pointer group">
                    <input className="hidden peer" name="payment" type="radio" />
                    <div className="p-6 rounded-[1rem] bg-slate-50 text-center transition-all peer-checked:bg-primary peer-checked:text-white border-2 border-transparent peer-checked:shadow-lg">
                      <span className="material-symbols-outlined block mb-2 text-3xl">payments</span>
                      <span className="text-xs font-bold capitalize ">PayPal</span>
                    </div>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold capitalize  text-on-surface-variant mb-3">Card Number</label>
                    <div className="relative">
                      <input className="w-full bg-slate-50 border-none rounded-full pl-8 pr-14 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" placeholder="•••• •••• •••• ••••" type="text" />
                      <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-50">lock</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold capitalize  text-on-surface-variant mb-3">Expiry Date</label>
                    <input className="w-full bg-slate-50 border-none rounded-full px-8 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" placeholder="MM / YY" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold capitalize  text-on-surface-variant mb-3">CVV</label>
                    <input className="w-full bg-slate-50 border-none rounded-full px-8 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" placeholder="•••" type="text" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <section className="bg-white rounded-[1.5rem] p-10 shadow-2xl shadow-on-surface/5 border border-stone-100">
                <h2 className="text-3xl font-serif text-on-surface  mb-10">Order Summary</h2>
                <div className="space-y-8 mb-10">
                  <div className="flex gap-6 items-center">
                    <div className="w-24 h-24 bg-surface-container rounded-[1rem] overflow-hidden flex-shrink-0 relative">
                      <Image 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3UlfxMNSr9BfwwZcJPISRcfOdWwj4Nf4S7hIG7hTnRMROzU9Pf7Plby76HBilNlJo80_cH5lyC2kmcNQoTjdE6GfNVS4gCeP5OkPJGtfaTgiZYTyGrE7Mc6RjpGQ1JwI_KAMiMbwbI6voB5GrCtHvRyHxAli8mZWAyD_jaQCqQt6qOCOXldveJVyPRO9wvEijS9j_Z95nQ9QXGtPAr177qgx1tS7bJLAbtSV8lWahc_KmNCZe62WmwSvVaGqBj8CLFcrjUbwDxpM"
                        alt="Silk pleated midi skirt"
                        fill
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-xl text-on-surface">Silk Pleated Midi Skirt</h3>
                      <p className="text-sm text-on-surface-variant capitalize  mt-1">Size: M | Color: Champagne</p>
                      <p className="text-primary font-bold mt-2 text-lg">$240.00</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="w-24 h-24 bg-surface-container rounded-[1rem] overflow-hidden flex-shrink-0 relative">
                      <Image 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-HRDjC73CvDslnOFcJLW75NOKQ0lHNyDMgrm6_Rs-wYJYDAWZpY-Fj4-O8aTZXm_xgMOWD7FokmS8Q5ZjRGf7iJ-Bl-XLr8VCSXWkOsuVbOuFaCXT-seVEEUQ-CFTiEorPA6k2I3fyisibdZiggfGa2h3oXiP7vVBeXiD1y9xNUrhDcTHmud0WX2ZBhNp_TmU9dh23JqqmKIDBz7oD-FZoo90v7yAel5o7x8Hwpe0oEUDantVcYPtD72qHHNK70NpH_S0zkiyDZo"
                        alt="Atelier Leather Clutch"
                        fill
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-xl text-on-surface">Atelier Leather Clutch</h3>
                      <p className="text-sm text-on-surface-variant capitalize  mt-1">One Size | Color: Noir</p>
                      <p className="text-primary font-bold mt-2 text-lg">$185.00</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <label className="block text-[10px] font-bold capitalize  text-on-surface-variant mb-3">Promo Code</label>
                  <div className="flex gap-3">
                    <input className="flex-grow bg-slate-50 border-none rounded-full px-6 py-3 text-sm focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all" placeholder="24LOOP10" type="text" />
                    <button className="px-8 py-3 bg-secondary text-white rounded-full text-xs font-bold capitalize  hover:opacity-90 transition-all shadow-md shadow-secondary/10">Apply</button>
                  </div>
                </div>

                <div className="space-y-5 pt-10 border-t border-stone-100">
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-bold">$425.00</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="font-medium">Shipping</span>
                    <span className="text-secondary font-bold capitalize  text-xs">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="font-medium">Estimated Tax</span>
                    <span className="font-bold">$34.00</span>
                  </div>
                  <div className="flex justify-between text-2xl font-serif text-on-surface pt-6 border-t border-stone-100 ">
                    <span>Total</span>
                    <span className="text-primary font-bold">$459.00</span>
                  </div>
                </div>

                <button className="w-full mt-12 py-6 bg-primary text-white rounded-full font-bold text-sm capitalize  shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Place Order
                </button>
                <div className="flex items-center justify-center gap-3 mt-8 opacity-60">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <p className="text-[10px] capitalize  font-bold">Secure SSL Encrypted Transaction</p>
                </div>
              </section>

              <div className="flex justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="material-symbols-outlined text-4xl">local_shipping</span>
                <span className="material-symbols-outlined text-4xl">inventory_2</span>
                <span className="material-symbols-outlined text-4xl">lock</span>
              </div>
            </div>
          </div>
        </div>
      </main>

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
            <h4 className="font-serif text-xl mb-6 font-bold capitalize  text-xs opacity-50">About</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link className="hover:text-white transition-all" href="#">Our Story</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Ethical Craft</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 font-bold capitalize  text-xs opacity-50">Legal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link className="hover:text-white transition-all" href="#">Privacy Policy</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Terms of Use</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 font-bold capitalize  text-xs opacity-50">Newsletter</h4>
            <div className="relative">
              <input className="w-full bg-transparent border-b border-white/20 focus:border-primary py-2 text-sm focus:ring-0 outline-none px-0 text-white transition-colors" placeholder="Email Address" type="email" />
              <button className="absolute right-0 bottom-2 text-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
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
