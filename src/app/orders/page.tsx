import Image from "next/image";
import Link from "next/link";

export default function Orders() {
  const orders = [
    { 
      id: "#ORD-9921", 
      date: "Oct 12, 2026", 
      status: "Delivered", 
      total: "$459.00",
      items: [
        { title: "Silk Pleated Midi Skirt", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3UlfxMNSr9BfwwZcJPISRcfOdWwj4Nf4S7hIG7hTnRMROzU9Pf7Plby76HBilNlJo80_cH5lyC2kmcNQoTjdE6GfNVS4gCeP5OkPJGtfaTgiZYTyGrE7Mc6RjpGQ1JwI_KAMiMbwbI6voB5GrCtHvRyHxAli8mZWAyD_jaQCqQt6qOCOXldveJVyPRO9wvEijS9j_Z95nQ9QXGtPAr177qgx1tS7bJLAbtSV8lWahc_KmNCZe62WmwSvVaGqBj8CLFcrjUbwDxpM" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50/50">


      <main className="max-w-screen-xl mx-auto px-8 py-20 font-body">
        <div className="mb-12">
          <h1 className="text-4xl font-serif italic mb-2">My Orders</h1>
          <p className="text-stone-500">Track and manage your ethereal purchases.</p>
        </div>

        <div className="space-y-8">
          {orders.map((order, i) => (
            <div key={i} className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-stone-100">
              <div className="bg-stone-50 px-8 py-4 flex flex-wrap justify-between items-center gap-4 text-sm font-bold border-b border-stone-100">
                <div className="flex gap-8">
                  <div>
                    <p className="text-stone-400 uppercase tracking-widest text-[10px] mb-1">Order Placed</p>
                    <p className="text-on-surface">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-stone-400 uppercase tracking-widest text-[10px] mb-1">Total Amount</p>
                    <p className="text-on-surface">{order.total}</p>
                  </div>
                </div>
                <div>
                  <p className="text-stone-400 uppercase tracking-widest text-[10px] mb-1">Order {order.id}</p>
                  <p className="text-primary hover:underline cursor-pointer">View Details</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <p className="font-bold text-on-surface">Order {order.status}</p>
                  <p className="text-stone-500 text-sm ml-auto">Updated 2 days ago</p>
                </div>

                {order.items.map((item, j) => (
                  <div key={j} className="flex gap-6 items-center">
                    <div className="w-24 h-32 relative rounded-lg overflow-hidden bg-stone-50">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                      <p className="text-sm text-stone-500 mb-4 italic">Champagne Silk Edition</p>
                      <div className="flex gap-4">
                        <button className="px-6 py-2 bg-on-surface text-surface text-[10px] font-bold uppercase rounded-full hover:bg-primary transition-colors">
                          Buy it again
                        </button>
                        <button className="px-6 py-2 border border-stone-100 text-[10px] font-bold uppercase rounded-full hover:bg-stone-50 transition-colors">
                          Track Order
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
