import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    { title: "Dresses", count: "128 Items", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7rtBFnCpVhMkuTXZSrnmMZsRkFfPdyFP8S4vtiSbTF2hKnZVpDBG-4FpM6GYhqP2o7ymN3LR9JM1LtZNJ2sn-v9leqHEUNk1uf2z8nnV7c8vgyWPcVX78CmO7LhdelpyWZI0D76sCt0l6EWs_pDRsvlFq4HlVNKf1D23ornwiqb1BN5qdREY7xBsQn9Nl94vJTxPtR7xngQntmKRgphIxbQfijs_T4Vy8PR0_Iey8ds1eQVPi-nB0NUB7E-0ZGQb3UQJtCHrZlQY" },
    { title: "Western Wear", count: "245 Items", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CJIMKIk0mJmfNDjDyXVLn19iY0GjBNZJwqgbG-2txwbgM1k-rn0EJmoiuWhuXdsMGOcA7lRhDI6LiMFLjuJ4w_nycvJ2SuK4jX-VU71jFySPhGQZxelvnZ_WmgRR9mcR8mj_IKpKe-t50CeMeFQ5aNnMHk5o5n6xpv-i3TbBYzIphvOOx57vjckmOCBUVWWkR5pPCV6BNlQKoVPbR33tRTaRN4dam1kINpAU5lbhjL6CJG4hkm0wrB46K0vPhcTXPIpc8ZPB_Cw" },
    { title: "Ethnic Wear", count: "89 Items", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0CAdWuflS1AVtt4eD-pQJpqesxG-lMoISpioFKSw39BUOM462yDBLFtEV_-2M_5Pp-1xEEJuCYxY8DS5fpWcgdjZTdZOssNZOFQLXJA-tizXlX5lU_8c8aXUouWbuWw20zD6LR1fYzxhxMjFcdG8MXIVAtWovVcE1eTH-pZVYTqWGV0iz-sooocAGc0lmdnYsxHSDWH3HTqUzLxWulrrQyTpBo3-vd62xuyXzhZC-LhorBRP2nw1Ffypto1ZZCQbVIh0A-yIBvhU" },
    { title: "Accessories", count: "312 Items", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFMyqbNvXTCutQNFaxKxRhwPQW6Oo77ZcZrhFzRehnco0XDUZIzILuHLurEV_TVtHET9LOLiqdJF73tbJAZyAyjjIlZcrywaKsk7A7PkhHNyzAb-qjPhNRxivakwHVmbFbUp_AbS2AOwl1kSLChdU9Hau9Z0WSNVmHXGVXTijlo-f9cm74paLaS97kJVYJ5xOa22TE7KC1D63B9VrfbmznFj6Qylk_sXFENk-EYV2AFaoLSqTrXEpk4HCxmb4wvd2Njp2J8ppiNqM" },
    { title: "Activewear", count: "56 Items", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMSP1NJaKl04xGwEEDdZCJytxn9RiHfSSbK2o3XtqIgPz3thckS9tafUUkoP99_JJRjkl13X0WuayM4mlcvfLsAjc68cWWfeBB3qJ_8AgNsWNSF3UqySnxPa7v-02jooGM1S59r_RZlOENfIFBVO-KYgZ_etmvmTuPHLu9iPoC5rpxZFf47MIKhLqyP_b9uxxFBhcWiYgaaZOguNvv_obMfdWAC6XWB6j-EIgETtD3ny-CTSZXyEARRKejA2VmUGucDbRDgFWXEoU" },
    { title: "Jewelry", count: "94 Items", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmnP-HRJyZLDNp8vi7jJzf2W0knmSkG6jcw0kls9GXY_RLLhDbvPuEWmI7ln7TZUU8mhAxqDjj9d2XCT5qGkghwCWoiLwARvENoFMdoEv4b6G0LM9RbuCHg0aoBz3c6tP44nyYZg4EKBJNHCTZIOYp8xDJwe6EbYllXKDA2XBuVZVZEp7XPU-rUEIPP4ZM9OfcI1rnNGrQXVa0k0uav3ShnrbtgHMSsRU7bhQWzxuKNAA0WTFhcKYg8z5qspuDb8b1-8Vaoid1qt8" },
  ];

  return (
    <div className="min-h-screen bg-background">

      
      <main className="max-w-screen-2xl mx-auto px-8 py-20 font-body">
        <div className="mb-16">
          <h1 className="text-5xl font-serif  mb-4 text-primary">Our Departments</h1>
          <p className="text-stone-500 max-w-2xl">Explore our curated collections, each designed with a unique narrative and artisanal attention to detail.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Link key={i} href="/shop" className="group relative h-[400px] rounded-[1.5rem] overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
              <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-white/60 text-xs font-bold capitalize tracking-[0.2em] mb-2">{cat.count}</span>
                <h3 className="text-3xl font-serif text-white">{cat.title}</h3>
                <div className="w-12 h-1 bg-primary rounded-full mt-4 group-hover:w-24 transition-all duration-500"></div>
              </div>
            </Link>
          ))}
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
            <h4 className="font-serif text-xl mb-6 font-bold capitalize tracking-widest text-xs opacity-50">Discovery</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link className="hover:text-white transition-all" href="/shop">New Collection</Link></li>
              <li><Link className="hover:text-white transition-all" href="/categories">All Departments</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Lookbook</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6 font-bold capitalize tracking-widest text-xs opacity-50">Support</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link className="hover:text-white transition-all" href="#">Customer Care</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Returns</Link></li>
              <li><Link className="hover:text-white transition-all" href="/contact">Contact Us</Link></li>
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
