import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container">


      {/* Hero Section */}
      <header className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <Image 
            className="w-full h-full object-cover opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMilxxhgbn4amUrRDbHxttBrzrWUxrlLs0F2AnQc7EgNrA3d83XkraMBfzFKxKJ4M_e1bIo4QGklEcVqdc_fEpecIBSkVNt10a-o-_fLtbzcM4gB3Hm8-zoQ-az31WrExemnFKAPj9JKZLPdmYRkXItslJj4KRLWi4l95Scfukl9exL2DpS4WntjKNlevVrm3MmZHDCYpWeAQe8pYO19PmkbRqxs7i0JK1SJxYEN_e05HIcV7dVZnkvH-5wS5EVjip8C8tlGjK72U"
            alt="high fashion editorial shot"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-2xl bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[1.5rem] border border-white/20 text-white">
            <h1 className="text-4xl md:text-7xl font-serif  leading-tight mb-4 text-black font-black">Summer Collection 2026</h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-md">Discover effortless elegance for every moment. A curated selection of light silhouettes and premium fabrics.</p>
            <Link href="/shop" className="inline-block group relative px-10 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 text-center w-full md:w-auto">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        </div>
      </header>

      {/* Categories Section: Bento Style */}
      <section className="py-24 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-on-surface mb-4">Curated Departments</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[600px] md:min-h-[800px]">
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[1rem] bg-surface-container-low transition-transform hover:-translate-y-2 h-[400px] md:h-auto">
            <Image 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7rtBFnCpVhMkuTXZSrnmMZsRkFfPdyFP8S4vtiSbTF2hKnZVpDBG-4FpM6GYhqP2o7ymN3LR9JM1LtZNJ2sn-v9leqHEUNk1uf2z8nnV7c8vgyWPcVX78CmO7LhdelpyWZI0D76sCt0l6EWs_pDRsvlFq4HlVNKf1D23ornwiqb1BN5qdREY7xBsQn9Nl94vJTxPtR7xngQntmKRgphIxbQfijs_T4Vy8PR0_Iey8ds1eQVPi-nB0NUB7E-0ZGQb3UQJtCHrZlQY"
              alt="Dresses"
              fill
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex flex-col justify-end p-8">
              <span className="text-white text-3xl font-serif mb-2">Dresses</span>
              <Link className="text-white font-black text-sm capitalize hover:text-white transition-colors" href="/shop">Explore Collection</Link>
            </div>
          </div>
          <div className="md:col-span-2 group relative overflow-hidden rounded-[1rem] bg-surface-container-low transition-transform hover:-translate-y-2 h-[300px] md:h-auto">
            <Image 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7CJIMKIk0mJmfNDjDyXVLn19iY0GjBNZJwqgbG-2txwbgM1k-rn0EJmoiuWhuXdsMGOcA7lRhDI6LiMFLjuJ4w_nycvJ2SuK4jX-VU71jFySPhGQZxelvnZ_WmgRR9mcR8mj_IKpKe-t50CeMeFQ5aNnMHk5o5n6xpv-i3TbBYzIphvOOx57vjckmOCBUVWWkR5pPCV6BNlQKoVPbR33tRTaRN4dam1kINpAU5lbhjL6CJG4hkm0wrB46K0vPhcTXPIpc8ZPB_Cw"
              alt="Western Wear"
              fill
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex flex-col justify-end p-8">
              <span className="text-white text-2xl font-serif mb-2">Western Wear</span>
              <Link className="text-white/80 text-sm capitalize " href="/shop">Explore</Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-[1rem] bg-surface-container-low transition-transform hover:-translate-y-2 h-[300px] md:h-auto">
            <Image 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0CAdWuflS1AVtt4eD-pQJpqesxG-lMoISpioFKSw39BUOM462yDBLFtEV_-2M_5Pp-1xEEJuCYxY8DS5fpWcgdjZTdZOssNZOFQLXJA-tizXlX5lU_8c8aXUouWbuWw20zD6LR1fYzxhxMjFcdG8MXIVAtWovVcE1eTH-pZVYTqWGV0iz-sooocAGc0lmdnYsxHSDWH3HTqUzLxWulrrQyTpBo3-vd62xuyXzhZC-LhorBRP2nw1Ffypto1ZZCQbVIh0A-yIBvhU"
              alt="Ethnic Wear"
              fill
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex flex-col justify-end p-6">
              <span className="text-white text-xl font-serif mb-1">Ethnic Wear</span>
              <Link className="text-white/80 text-xs capitalize " href="/shop">Explore</Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-[1rem] bg-surface-container-low transition-transform hover:-translate-y-2 h-[300px] md:h-auto">
            <Image 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFMyqbNvXTCutQNFaxKxRhwPQW6Oo77ZcZrhFzRehnco0XDUZIzILuHLurEV_TVtHET9LOLiqdJF73tbJAZyAyjjIlZcrywaKsk7A7PkhHNyzAb-qjPhNRxivakwHVmbFbUp_AbS2AOwl1kSLChdU9Hau9Z0WSNVmHXGVXTijlo-f9cm74paLaS97kJVYJ5xOa22TE7KC1D63B9VrfbmznFj6Qylk_sXFENk-EYV2AFaoLSqTrXEpk4HCxmb4wvd2Njp2J8ppiNqM"
              alt="Accessories"
              fill
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex flex-col justify-end p-6">
              <span className="text-white text-xl font-serif mb-1">Accessories</span>
              <Link className="text-white/80 text-xs capitalize " href="/shop">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="mx-6 md:mx-8 mb-24">
        <div className="max-w-screen-2xl mx-auto rounded-[1rem] overflow-hidden relative h-64 flex items-center justify-center bg-secondary-container">
          <div className="absolute inset-0 opacity-40">
            <Image 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArCKFVRMkr2UtJdtYulJHNfPq17HKLfG-mcqsvbm__AFeWGCyQAU1kacBGzEyNveDfxI_kdnkT2_fmZ0GNZIwBTGyo5rHA-udYX3SZvRjzymzkxQ4ojWVrWA5hH01X7eZlytsHGCkjv3UGnm7mEbTDMHz3eG6Fjs6KGdpm-oLLL0DYFv5OzHm0reE4SHISAq_Tbg298yxicb2wZfseYcleQLu6E0StSKp7EWfNFAD4EZX9BSyheAm4Z84n9CKtx7IDfz97xGFhy1E"
              alt="Banner background"
              fill
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h2 className="text-3xl md:text-6xl font-serif text-on-secondary-container  mb-2">Flat 50% Off on Women's Collection</h2>
            <p className=" md: text-on-secondary-container/80 capitalize text-xs md:text-sm font-semibold">Limited Time Celebration • Use Code: 24LOOP50</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-primary text-sm capitalize  font-bold">The Atelier's Choice</span>
              <h2 className="text-4xl md:text-5xl font-serif text-on-surface mt-2">Featured Pieces</h2>
            </div>
            <Link className="text-primary hover:text-primary/80 font-bold border-b-2 border-primary/20 pb-1" href="/shop">View All Collection</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAbMMKjT9Hnm0IM9vjzgY0kG3wmWHzFJGHNKGJpbPMgKEI0D-1EXClXg5HbPChY-cUByInsUJhXDqR8TCSPzxeIAe0JmkebQrP-OEkAi6knOujdS9NFrq2v8ReNwcJ4sMd3arUXQk19scwBapTT0Smqm6EDI_dBM-JokZrSfaQm42Z-dB_OSF93wsMxDVh0B1gWOnGP_ot89YBrT03sLh3dknthNpJfqZa_14EfeyymzOxQEptQwiJ7YXc90RU8r85k8m0a55KNveM"
              tag="New"
              title="Silk Satin Slip Dress"
              subtitle="Champagne Mist"
              price="$280"
              originalPrice="$700"
            />
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuC1gE8Y9Vf-tTCbolxbrKaPMh3-OepwCVWaYax84brsFb8o1jazCJDjZEWEmESZBvzG-L2HJW91ghKrY7rTsjY3VRAf3Ou7cAmc8rycpmIIlbh9DFXhThL4jDSuWvWtra1uZ3vqP7T6UaFphnYXOlbqbXDeMi9ihr2VbG81mPRl5bcMf-mqdXlr1DNwzUS-uZ91N1J_E3kPLfnAiGpXnDe8KNYLjw_VqSf2S6akb5Nc2kfhGaD9db97uWD79zt4mITC92kRTppmwmk"
              title="Tailored Atelier Blazer"
              subtitle="Oatmeal"
              price="$420"
              originalPrice="$1050"
            />
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAcSCTFl0v9oGpsdAEMxITzIpu5xLFw-PPBwDYOeqJCy_X9IOMKh5g9c5RaDbQEGc7YyPXCDX8_kdyqCSLTpychuOFqDKpwDf_aMjaeXMr6fma_H2P-Vwumn9u0-l1jEQ1MfKDW4ZA5PmxxhbFXIzKtWH1QpCyofnqWmwCJnvhtNNDR1PXee9eHd-oz5KdnZGmG41h6u9dA7cakMTUYBAgv5jX7yi_Caa_hpIqWHk7PZc7KG5bgdorfg9xMCZW7Kp8osisl1F_57js"
              tag="Trending"
              tagColor="bg-secondary"
              title="Meadow Midi Skirt"
              subtitle="Floral Blush"
              price="$195"
              originalPrice="$485"
            />
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuB-TNqViJdVgK050XRR9xyVaNmPuPWSYCwbXF6-wkntl3XoxLJ0jOgtG963V6lf8rdFMX_p33qg75x40vTYb7K0rQktaSyvQ3LobhH2Iw9gIwS1pTFv406o21igxLcUXcbgj73v7XuqpMhchu6pQrs1quTJw1mcLyMw8tZVsQazuoxZEwqEFJF8nl9fL5V5sQECRh05OgaZmXBpOkYmrKHLAyxqIHG73EVisQThHB8lpyJTuW2Pyp7YcFPBM_Fqz1EdPqMMwjyZkNQ"
              title="Luxe Cami & Trouser"
              subtitle="Sandstone"
              price="$310"
              originalPrice="$775"
            />
            {/* Added 4 more cards */}
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuC1kdNVJ8eGrDg9YO6ZBeQ1IhBlan8wD3m-hvm50cfY-U7kwhZJR2s0f5M-041dZ1T5LZXM3t05kUSQJhVWExC3Sdc_CnI7kfRssiNiDH2Olp_z0C4anaCE9tBoeCkycImIkmVLAgi5Im61IINHYPYF2VPoDpjsfcQ7zqMjZfUy8szemNRKUdIEVjMerKaQc_AihQJkmK9XZQc723HUQu7WObkydEXjr2jJt_fn-5HYWR7hkxHfaBtRZe11IGq927VEVZjB8j82eKU" 
              title="Silk Wrap Dress" 
              subtitle="Blush Rose" 
              price="$285" 
              originalPrice="$712"
            />
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCMSP1NJaKl04xGwEEDdZCJytxn9RiHfSSbK2o3XtqIgPz3thckS9tafUUkoP99_JJRjkl13X0WuayM4mlcvfLsAjc68cWWfeBB3qJ_8AgNsWNSF3UqySnxPa7v-02jooGM1S59r_RZlOENfIFBVO-KYgZ_etmvmTuPHLu9iPoC5rpxZFf47MIKhLqyP_b9uxxFBhcWiYgaaZOguNvv_obMfdWAC6XWB6j-EIgETtD3ny-CTSZXyEARRKejA2VmUGucDbRDgFWXEoU" 
              title="Linen Whisper Blouse" 
              subtitle="Ivory" 
              price="$145" 
              originalPrice="$362"
            />
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAzs2JZ7vE9GCh769Y4LH3AM1rnFgPwAuBfdvLxXnGmyO97ENvG2TpKmS9mLsHOxOMcJazc0RR0OopGZuIZI6ZTADbU-3CGlPUCh8fbZo9H2bfvccELa7FGG9dmWOyDHTWI63wgRmlxM7gyFFJM9PG_plrigoZREB1Wlq9DdtvZgTEKlD8khQEa_kw-zOpAmQNNAlMJ6SNUpK8ZfEoGgOufTbiwmUdKRtxZmMoJ9U1Rq-gYZsMLKlgNisdvPZHiBbEcyZvSFrAWAv8" 
              title="Orchid Evening Gown" 
              subtitle="Evening Dusk" 
              price="$490" 
              originalPrice="$1225"
            />
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuB2NI7HUhs01rahyPKc4XO-NiAnJ2WAPKX_fuMPJWrGHbwhqfgU6QKZHt6IjtIf9S6bc3NM8EpPL-UZY7Qp75TSpTiCEuBl_viW2Q-kdMsSh-WLLtiXB5PxpIqNU4OOIEy9vcwUjd6IVQurC8tSW5mTncL-6691089SdLpUOWz6i89ffjptFzcTT7tpFPmt8uVL80PjRb4_qAZ9NjUT9_AjJJGRjrr_O7Mhhyt0_-RhbgewXyxc-w_1msLaXL9S4LErdvKTu1dRCDY" 
              title="Cashmere Cloud Cardigan" 
              subtitle="Taupe" 
              price="$320" 
              originalPrice="$800"
            />
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-on-surface mb-4 ">Trending Now</h2>
            <p className="text-on-surface-variant capitalize  text-xs font-bold">Most Loved by the Community</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAeHV8hOAlM7OEqYDXF2l8WId0VGlALfdcUis9cw300hV1S27oJMc0cSn9k4GXaCZ_M3WZ6hHMpyMA4IKcbPFAngmMlI-FVdtUOP3qFwYsE1ZdDQD9ZExB8akXDSZVSOMoZxiKoXczgY8jSBUb-j23b_EJo90VGHhGW1PmzBhFKZqb1UcukPgg8nCwQoUm6gqLaoEm6K97MyEAQS8hhfn6OVP3XiHSvrBH-qnB8_czZE_M9YVAdxLNA0IyEQ49O1Zd2PZfpm-EWMjs" 
              title="Satin Slip Skirt" 
              subtitle="Champagne" 
              price="$110" 
              originalPrice="$275"
            />
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAvU8TotjkqqTgzK2bITDbabdbvUIx0kzccQAfMyWK0Ot0O-vhVR9R3LIjS-NlFgNN2MNdFSriagcYOTIrWLkpmIYfvGc17wclnhnFlYG05OT4OBGmkY0sNlA89-IZeh0L8ATmVwQBIN0O7dfU8bPk-bXRerjT484e-cw6cMHpCBaFt7GmC78QdzQIJGIsFu6pasPYZNxMW1uZo7sLff6Z2F2npV40S5gIGg-BMs0RCD4EK8rcMMLKTvZcMGoVwguQ1OxsGAMfXI50" 
              title="Petal Sun Dress" 
              subtitle="Floral Mist" 
              price="$195" 
              originalPrice="$485"
            />
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAvs2JZ7vE9GCh769Y4LH3AM1rnFgPwAuBfdvLxXnGmyO97ENvG2TpKmS9mLsHOxOMcJazc0RR0OopGZuIZI6ZTADbU-3CGlPUCh8fbZo9H2bfvccELa7FGG9dmWOyDHTWI63wgRmlxM7gyFFJM9PG_plrigoZREB1Wlq9DdtvZgTEKlD8khQEa_kw-zOpAmQNNAlMJ6SNUpK8ZfEoGgOufTbiwmUdKRtxZmMoJ9U1Rq-gYZsMLKlgNisdvPZHiBbEcyZvSFrAWAv8" 
              title="Orchid Evening Gown" 
              subtitle="Indigo Dusk" 
              price="$490" 
              originalPrice="$1225"
            />
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuB2NI7HUhs01rahyPKc4XO-NiAnJ2WAPKX_fuMPJWrGHbwhqfgU6QKZHt6IjtIf9S6bc3NM8EpPL-UZY7Qp75TSpTiCEuBl_viW2Q-kdMsSh-WLLtiXB5PxpIqNU4OOIEy9vcwUjd6IVQurC8tSW5mTncL-6691089SdLpUOWz6i89ffjptFzcTT7tpFPmt8uVL80PjRb4_qAZ9NjUT9_AjJJGRjrr_O7Mhhyt0_-RhbgewXyxc-w_1msLaXL9S4LErdvKTu1dRCDY" 
              title="Cashmere Cloud Cardigan" 
              subtitle="Taupe" 
              price="$320" 
              originalPrice="$800"
            />
          </div>
        </div>
      </section>

      {/* New Arrivals Section: Horizontal Scroll */}
      <section className="py-24 overflow-hidden bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-on-surface">The Fresh Edit</h2>
          <p className="text-on-surface-variant mt-2">Just landed in the atelier.</p>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-8 px-6 md:px-8 pb-12">
          <ScrollItem image="https://lh3.googleusercontent.com/aida-public/AB6AXuB7W5wvoJaQcmrube-gOFsu1MBNn0o2HhCCtRVwVzic9RdRW4rff46NXAXHhX-NlfmTvjA6_1wj2669q_QkHH4QvN72HADYt5wln7ea1iBSRljVBjw_DrvctiFOTUnYJ1qFo6LScspO1xLmEeyp6RBD6HYF5DAYZnpNkPsbN1cy9US6kPBaN45mc09LyNgvK3_9wIQNMi_2XVvg7LONjuaP0eW2qIIjzCm4fRyvHs0T93MszBkPZyCaY40cXGs2ZU1NRsIyWIJZOOc" title="Lavendar Ribbed Knit" />
          <ScrollItem image="https://lh3.googleusercontent.com/aida-public/AB6AXuCBcF1Os13_KcG20HPboQ_Kg1p3Drtcwzn_v3uF7nNq_8BSyLpTjstp0goNWMDR3tpF-sUnx7FPwsDzQD-JafOnHJjb-yZyDsTR0mZalVQm24rhNn1Qopmyh8haO8mKKTYkIKBnkMpnnyyRYKbC17NwWfWq8tJLh0xzF1Rko0vmmAoCzDL7iWTWrTkFMBxU0GgE26BRdFgN2vwV0mnF-1mgpIgDDDwZ_QOAKY1ars7d3ougcnDW6z_NXac6MdIuXUWiZraxeuDg0iA" title="Dusty Rose Wool Coat" />
          <ScrollItem image="https://lh3.googleusercontent.com/aida-public/AB6AXuDsnF4rxG0P9zcuO1U7SNIFTyhq9AtyeSO4MQPYadl2i1LKHBazQ2a2F3zhusmc2jhLJNHX7YS9AXXtUWuhMD8wk3hSsLmr8N4AnGPAdVLa2l2llBSlH0iTqWxie278kn082PMMDGQQimzMS5JHG2EQEt9qdFa6scoZju-C6ZpMNB7RK1tjoP2mK178qWO5zxheJVgdD8uxiXVWFfzkKn_7teiOqIyuNmdgp1bHfVqhWEYMERl0fFzJ5IcWvzuRfXPF2ju7nCGex88" title="Heritage Silk Blouse" />
          <ScrollItem image="https://lh3.googleusercontent.com/aida-public/AB6AXuAZnHKMn3Qq0hNznJKWguGSgVqqcZ8_AnTPrpVrhoGBRrkTmlVhE0HcZUppmv5xI8UOHdjQK_4ARRr_UT6vFV3pMcQpq5n02aqzsAcZrgs3FvKSOq8KcHuiLHTjHoYAyHyfCZtf_Z4Rblo7gmKYcznY_HTHc_b5BBF4LC5zT-VvlAOCHvvenlhv__uCj9pZ8U26CSM_Vb8oX1iBqfL-ID_2k3qyy2qk8llT5crkh0zLePiH81fd48MR5r9uq_6HvM8PsRjRs-2JELY" title="Sunrise Petal Gown" />
          <ScrollItem image="https://lh3.googleusercontent.com/aida-public/AB6AXuAQmPtbrItWr4WN5bqGgyl0BVGmv_1sDYNZvpDoA8v2lIX1xNb6dvtTJBVoPNb1PZBvqGWe4Lt6HW9nTsMEhfQp2H6tXrBzv7chg1eXcyyzUUnxATgHJMR0vwx_qBkpMxBrFhYZVLk4VRdYqHh1RElivCjk7MisXgNcHI2cvYQAiu-GCLEAvSkc0Zf-FP1rlZcF-JR7rKoNBbGY1_bm8xb6-7Tm99Da0psZlXvPxsFqMM7MrJAxQ0R22LE15NGZUkJOKE6NHqAvbf0" title="Ornate Lace Detail" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container-high/30">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <span className="text-secondary text-sm capitalize  mb-4 block font-bold">The 24Loop Community</span>
          <h2 className="text-4xl md:text-5xl font-serif text-on-surface mb-16">What Our Icons Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <TestimonialCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCmnP-HRJyZLDNp8vi7jJzf2W0knmSkG6jcw0kls9GXY_RLLhDbvPuEWmI7ln7TZUU8mhAxqDjj9d2XCT5qGkghwCWoiLwARvENoFMdoEv4b6G0LM9RbuCHg0aoBz3c6tP44nyYZg4EKBJNHCTZIOYp8xDJwe6EbYllXKDA2XBuVZVZEp7XPU-rUEIPP4ZM9OfcI1rnNGrQXVa0k0uav3ShnrbtgHMSsRU7bhQWzxuKNAA0WTFhcKYg8z5qspuDb8b1-8Vaoid1qt8"
              text="The quality of the silk is unmatched. I felt like I was wearing a work of art at my gallery opening."
              author="Elena Moretti"
            />
            <TestimonialCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuACDD3gMvsOJSsKWh4r_qpNFKg0y8NqJTuErw4qNW9J9olddFlJFKTTT5Yf-pIgorTBJqguUfrHLGZSrNAFGMJhO4V7-rUAriSfxO_HCGJNukK91VrQkuon2UQ5BBqIkeCFRHrVp66l0a7VNJwXE9G02dBNlCVod764InDL33By9ggF9hSGV5oygmGPfqgeMRs8yxsExNdHy2hASMVJoy45ael1QChnjwUOpgctq8j4OTgKzKqr0VU-kFe5KNYaI0Lz9KfWzkV3RPE"
              text="Finally, a brand that understands modern elegance without being overly flashy. Simply ethereal."
              author="Sarah J. Westwood"
            />
            <TestimonialCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDq__SQiqGIUMVt_8Pt-S5Zc9UQSG8RI8JT0K9nVTiCje4GOnwSMDL9qK095x3iYxAb9j6Mlt5nm--nEBx_RgJOqxJBPQKfVIbFggMT3pKYjqtrMkoAeGxTarFndAEapggA9Jha_j9UufBTWYvUaZmol2FUPcdR-HoPn3vQmlfoYQzqcnMFzM_nMU44dnTMxWZVCWMcwy3GHUgnspPhur2aegHTgANlBTQhnlzhfBab_ZRUJOeEG5NCAMyljEvnAuaDlCeHVTlZZtM"
              text="The shopping experience was as premium as the products. The packaging is absolutely beautiful."
              author="Maya Al-Fayed"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center bg-primary-container/20 rounded-[1.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-on-surface mb-4">Stay in Vogue</h2>
          <p className="text-on-surface-variant mb-10">Subscribe for the latest fashion updates and exclusive atelier previews.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input className="flex-1 bg-white border-2 border-stone-100 rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 text-on-surface outline-none shadow-sm" placeholder="Your email address" type="email" />
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold capitalize  hover:opacity-90 transition-all">Join the Atelier</button>
          </form>
        </div>
      </section>

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
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link className="hover:text-white transition-all" href="#">About Our Story</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Sustainability</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Track My Order</Link></li>
              <li><Link className="hover:text-white transition-all" href="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6">Categories</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link className="hover:text-white transition-all" href="/shop">The Signature Dress</Link></li>
              <li><Link className="hover:text-white transition-all" href="/shop">Atelier Blouses</Link></li>
              <li><Link className="hover:text-white transition-all" href="/shop">Modern Ethnic</Link></li>
              <li><Link className="hover:text-white transition-all" href="/shop">Curated Jewels</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-white/20">location_on</span> 425 Fashion Ave, NY 10018</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-white/20">call</span> +1 (212) 555-0198</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-white/20">mail</span> care@24loop.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 py-8 px-12 text-center">
          <p className="text-[10px] text-white/30 capitalize ">© 2026 24Loop Digital Atelier. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ image, tag, tagColor = "bg-primary", title, subtitle, price, originalPrice, rating = 4.5, reviewCount = 120 }: { image: string, tag?: string, tagColor?: string, title: string, subtitle: string, price: string, originalPrice?: string, rating?: number, reviewCount?: number }) {
  return (
    <div className="group bg-white rounded-[1rem] p-4 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-stone-100 relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[0.8rem] mb-5 bg-stone-50">
        {tag && <span className={`absolute top-3 left-3 z-10 ${tagColor} px-2 py-0.5 text-white text-[10px] font-bold capitalize rounded-sm`}>{tag}</span>}
        <button className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-400 transition-all hover:bg-rose-50 hover:text-rose-600 shadow-sm">
          <span className="material-symbols-outlined text-[20px]">favorite</span>
        </button>
        <Link href="/product">
          <Image 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src={image} 
            alt={title}
            fill
          />
        </Link>
        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          <Link href="/cart" className="w-full bg-on-surface text-surface py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-lg">
            <span className="material-symbols-outlined text-sm">shopping_bag</span>
            Add to Cart
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
          <h3 className="text-base font-serif text-on-surface hover:text-primary transition-colors cursor-pointer line-clamp-1">{title}</h3>
        </Link>
        <p className="text-xs text-on-surface-variant mb-3">{subtitle}</p>
        
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-on-surface">{price}</span>
          {originalPrice && (
            <>
              <span className="text-sm text-stone-400 line-through">{originalPrice}</span>
              <span className="text-xs font-bold text-green-600">60% OFF</span>
            </>
          )}
        </div>
        
        <p className="text-[10px] text-green-700 font-bold mt-2 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">local_shipping</span>
          FREE Delivery by Tue, Apr 21
        </p>
      </div>
    </div>
  );
}

function ScrollItem({ image, title }: { image: string, title: string }) {
  return (
    <div className="flex-none w-[350px] space-y-4">
      <div className="h-[450px] rounded-[1rem] overflow-hidden shadow-lg relative">
        <Image className="w-full h-full object-cover" src={image} alt={title} fill />
      </div>
      <p className="font-serif  text-xl">{title}</p>
    </div>
  );
}

function TestimonialCard({ image, text, author }: { image: string, text: string, author: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-primary/10 relative">
        <Image className="w-full h-full object-cover" src={image} alt={author} fill />
      </div>
      <div className="flex text-primary mb-4">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        ))}
      </div>
      <p className="font-serif  text-xl text-on-surface mb-6">"{text}"</p>
      <span className="text-sm capitalize  text-on-surface-variant">— {author}</span>
    </div>
  );
}
