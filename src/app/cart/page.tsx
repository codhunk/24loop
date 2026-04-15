import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container">


      <main className="max-w-screen-2xl mx-auto px-8 pt-12 pb-24 font-body">
        <div className="mb-12">
          <h1 className="text-5xl font-serif  tracking-tight text-on-background mb-2">Shopping Bag</h1>
          <p className="font-body text-stone-500">2 items in your curation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-12">
            <CartItem 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuD4TOvR15m0APFFaUiBrmq-Lqq0hNlwBOtolxIz_WcyiU0hx5_J5qp8uS-fze23VYyySIe470J82-2bhkVLBBBrZ8GseJ56g9Pj2Yo2bYDQSNuZsGqiQewdeG48ee0O129pFrkBCL1qnbdg51IA0dgmPqNh5GaD7wRTROUv3gqmQfASisxqMzip8qQe8eK4fzHIiNhGRWRhQ125xtzW8hCatrj1wIqgfCeYQz6EJHod8gB2XtCkmTByvPfK6p7C-c3RkuPUKwja3BQ"
              title="Silk Slip Dress"
              color="Champagne Gold"
              size="Small"
              price="$240.00"
            />
            <CartItem 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDTqVCuYmV-UMlq2il4Lrtx4xWqXOnh21RKy4CCtBVs5-TXRrmJjqT02pZ47verrl-14o15JkvX5wx3OpErPuZ3IX51UpJUefxHIiDESnmMHkqIpE0tO5hPfKi2Hfu_3Ls-vCq2BmTKtenJTggsjAAENJZte8FwEDbgD8kQVE7vPPgK1wfw_alV9VeAn99gqziljtl8ZJEuPydbFK9p493yjd8I0r8XAhcywk7eq1nwzszqSVM9zbFYMiS6160pSAwv-As90lAhq2E"
              title="Tailored Blazer"
              color="Soft Bone"
              size="Medium"
              price="$480.00"
            />

            {/* Complete the Look */}
            <div className="pt-12">
              <h4 className="font-serif  text-xl mb-6">Complete the Look</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <LookItem image="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ddggRRU5UXiFnuiAM9n1w96_zOU6cf5-3Evm5RzXrtaEogJ9UtEFhts03LTl0wYqeIh6XBwMDH1FoIc5o-FNtRWHq-SoUsTyNQNWHsdefw2mahRQ96E_UkDL858Q449LishDccHd9lKY7nir90iilsC3cgDoy_WLIj1IfCy9nrhHEQLEV1LG_JFJx8i_FZHXlokOeqGj4LqSQArk5TBATP8OqgE9K3y3FypKqapzCJqMe1F_9XnpPldRMPpVAxiQl6CoUljfjrU" title="Nude Pumps" />
                <LookItem image="https://lh3.googleusercontent.com/aida-public/AB6AXuC8y5h0P314Fi7l8rpft69AevaiNaeIzAxqXTOkEtN5BFEoGJLaCQ-O95wRbf1PizvMLCuWvkNm9ulhdmfO9_7dh1VRdwsON75q-UuD-XkCXBZZGKaBFaQS7neZctoqrOS0Z2uHBTuix1-rVr7Ibz5KeyExQJlRBPO8h5oApvqNQlsQpX2b4shH_1yN5joSR1T9HWlB1cWUtcCkpqrRX84288Soq5nuWbLxvc47PFpLOs2YeHhhg2uXKQ3jzPan0xLO-kUV_cwGvhE" title="Pearl Drop" />
              </div>
            </div>
          </div>

          {/* Summary Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-white p-10 rounded-[1rem] shadow-[0_40px_60px_-5px_rgba(54,59,16,0.06)] border border-stone-200">
              <h2 className="text-3xl font-serif  text-rose-900 mb-8 text-center">Summary</h2>
              <div className="space-y-6 text-on-surface">
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Subtotal</span>
                  <span className="font-medium">$720.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Estimated Shipping</span>
                  <span className="font-medium">$15.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Tax</span>
                  <span className="font-medium">$57.60</span>
                </div>
                <div className="pt-6 mt-6 border-t border-stone-200 flex justify-between items-end">
                  <span className="text-xl font-serif ">Total</span>
                  <span className="text-3xl font-serif text-rose-900">$792.60</span>
                </div>
              </div>
              <div className="mt-10 space-y-4">
                <Link href="/checkout" className="w-full bg-gradient-to-br from-primary to-primary-dim text-white font-bold capitalize tracking-[0.2em] py-5 rounded-full text-sm shadow-lg hover:opacity-90 active:scale-[0.98] transition-all text-center block">
                  Proceed to Checkout
                </Link>
                <button className="w-full text-stone-500 hover:text-primary text-xs capitalize tracking-widest py-2 transition-all">
                  Continue Shopping
                </button>
              </div>
              <div className="mt-8 pt-8 border-t border-stone-100">
                <div className="flex items-center gap-4 text-stone-400">
                  <span className="material-symbols-outlined text-lg">verified_user</span>
                  <p className="text-[10px] capitalize tracking-widest leading-relaxed">Secure SSL encrypted checkout. 30-day elegant returns guaranteed.</p>
                </div>
              </div>
            </div>
            {/* Promo Code */}
            <div className="mt-6 bg-surface-container-high/30 p-6 rounded-[1rem]">
              <label className="block text-xs capitalize tracking-widest text-stone-500 mb-3 font-bold">Promo Code</label>
              <div className="flex gap-2">
                <input className="flex-grow bg-white border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary/20 outline-none" placeholder="ENTERYOURCODE" type="text" />
                <button className="bg-secondary/10 text-secondary px-6 rounded-full text-xs font-bold capitalize tracking-widest hover:bg-secondary hover:text-white transition-all py-2">Apply</button>
              </div>
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
            <h4 className="font-serif text-xl mb-6 font-bold capitalize tracking-widest text-xs opacity-50">Shop</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link className="hover:text-white transition-all" href="/shop">New Arrivals</Link></li>
              <li><Link className="hover:text-white transition-all" href="/categories">All Categories</Link></li>
              <li><Link className="hover:text-white transition-all" href="/contact">Store Locator</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 font-bold capitalize tracking-widest text-xs opacity-50">Support</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link className="hover:text-white transition-all" href="#">Customer Care</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Shipping & Returns</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 font-bold capitalize tracking-widest text-xs opacity-50">Newsletter</h4>
            <p className="text-sm text-white/60 mb-6">Join for invitations to private events and collection launches.</p>
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

function CartItem({ image, title, color, size, price }: { image: string, title: string, color: string, size: string, price: string }) {
  return (
    <div className="group flex flex-col md:flex-row gap-8 items-center bg-surface-container-low/40 p-6 rounded-[1rem] hover:bg-surface-container-low transition-all duration-500">
      <div className="w-full md:w-48 h-64 overflow-hidden rounded-[1rem] bg-stone-100 relative">
        <Link href="/product">
          <Image src={image} alt={title} fill className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </Link>
      </div>
      <div className="flex-grow flex flex-col justify-between h-full py-2 w-full">
        <div className="flex justify-between items-start w-full">
          <div>
            <Link href="/product">
              <h3 className="text-2xl font-serif text-on-background mb-1 hover:text-primary transition-colors cursor-pointer">{title}</h3>
            </Link>
            <p className="text-sm text-stone-500 capitalize tracking-widest">Color: {color}</p>
            <p className="text-sm text-stone-500 capitalize tracking-widest mt-1">Size: {size}</p>
          </div>
          <button className="text-stone-400 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-end mt-8">
          <div className="flex items-center bg-surface-container-high rounded-full px-4 py-2 space-x-6">
            <button className="w-6 h-6 flex items-center justify-center text-on-surface hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <span className="text-sm font-bold">1</span>
            <button className="w-6 h-6 flex items-center justify-center text-on-surface hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>
          <div className="text-xl font-serif text-secondary">{price}</div>
        </div>
      </div>
    </div>
  );
}

function LookItem({ image, title }: { image: string, title: string }) {
  return (
    <div className="space-y-3">
      <div className="aspect-[3/4] bg-surface-container-low rounded-[1rem] overflow-hidden relative">
        <Link href="/product">
          <Image src={image} alt={title} fill className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
        </Link>
      </div>
      <p className="text-xs capitalize tracking-widest text-center font-bold">{title}</p>
    </div>
  );
}
