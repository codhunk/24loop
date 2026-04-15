import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body">


      <main className="max-w-screen-xl mx-auto px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-6xl font-serif  mb-6">Connect with the Atelier</h1>
            <p className="text-lg text-stone-500 mb-12 leading-relaxed">
              Whether you're seeking styling advice or have questions about a special commission, our concierge team is dedicated to providing an ethereal service experience.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                <div>
                  <h4 className="font-bold text-xs capitalize tracking-[0.2em] mb-2 text-stone-400">Email Us</h4>
                  <p className="text-xl font-serif ">concierge@24loop.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="material-symbols-outlined text-secondary text-3xl">call</span>
                <div>
                  <h4 className="font-bold text-xs capitalize tracking-[0.2em] mb-2 text-stone-400">Call Us</h4>
                  <p className="text-xl font-serif ">+1 (212) 555-0198</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="material-symbols-outlined text-tertiary text-3xl">location_on</span>
                <div>
                  <h4 className="font-bold text-xs capitalize tracking-[0.2em] mb-2 text-stone-400">Studio</h4>
                  <p className="text-xl font-serif ">425 Fashion Ave, NY 10018</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[2rem] shadow-xl border border-stone-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
             <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold capitalize tracking-widest text-stone-400 mb-2">First Name</label>
                    <input className="w-full bg-stone-50 border-none rounded-xl px-4 py-3 focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all" type="text" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold capitalize tracking-widest text-stone-400 mb-2">Last Name</label>
                    <input className="w-full bg-stone-50 border-none rounded-xl px-4 py-3 focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all" type="text" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold capitalize tracking-widest text-stone-400 mb-2">Subject</label>
                  <select className="w-full bg-stone-50 border-none rounded-xl px-4 py-3 focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all">
                    <option>Product Inquiry</option>
                    <option>Order Support</option>
                    <option>Sponsorship</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold capitalize tracking-widest text-stone-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-stone-50 border-none rounded-xl px-4 py-3 focus:bg-white focus:ring-1 focus:ring-primary/20 outline-none transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-full font-bold capitalize tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Send Message
                </button>
             </form>
          </div>
        </div>
      </main>
    </div>
  );
}
