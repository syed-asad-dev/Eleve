import { motion } from 'framer-motion';

export default function Menu1() {
  const appetizers = Array(8).fill(null).map((_, i) => ({
    id: i + 1,
    name: ['Truffle Arancini', 'Wagyu Beef Carpaccio', 'Oysters Rockefeller', 'Gold Leaf Scallops'][i % 4] + ` ${i > 3 ? 'II' : ''}`,
    desc: 'Served with signature micro-greens and artisanal foam styling.',
    price: '$' + (25 + (i * 2)),
    image: `https://loremflickr.com/800/600/food,appetizer,luxury?lock=${i === 3 ? 122 : i === 5 ? 999 : i + 50}`
  }));

  const mains = Array(8).fill(null).map((_, i) => ({
    id: i + 100,
    name: ['Imperial Wagyu Ribeye', 'Dark Truffle Linguine', 'Golden Saffron Risotto', 'Supreme Salmon Steak'][i % 4] + ` ${i > 3 ? 'Reserve' : ''}`,
    desc: 'Prepared by our Master Chefs with authentic traditional techniques.',
    price: '$' + (45 + (i * 5)),
    image: `https://loremflickr.com/800/600/food,steak,fish?lock=${i + 20}`
  }));

  const desserts = Array(6).fill(null).map((_, i) => ({
    id: i + 200,
    name: ['24k Chocolate Dome', 'Matcha Brûlée', 'White Truffle Soufflé', 'Saffron Panna Cotta', 'Berries Pavilion', 'Dark Espresso Tiramisu'][i],
    desc: 'The perfect sweet finish to your ÉLEVÉ experience.',
    price: '$' + (18 + (i * 2)),
    image: `https://loremflickr.com/800/600/food,dessert?lock=${i + 40}`
  }));

  const renderCard = (item, idx) => (
    <motion.div 
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
      className="group flex flex-col backdrop-blur-md bg-white/10 rounded-xl overflow-hidden border border-gold/20 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 right-4 bg-dark-900/80 px-3 py-1 rounded text-gold font-bold backdrop-blur-md">
          {item.price}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-heading text-white mb-2 font-bold transition-colors">{item.name}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-medium">{item.desc}</p>
        </div>
        <button className="w-full py-3 border border-white/20 text-light uppercase tracking-wider text-sm font-bold group-hover:bg-gold group-hover:text-dark-900 group-hover:border-gold transition-all">
          Add to Custom Order
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full pt-24 bg-dark-900 min-h-screen">
      
      <div className="text-center py-16 bg-dark-800 border-b border-white/5">
        <p className="text-accent-green tracking-[0.2em] uppercase text-sm font-bold">The Complete Experience</p>
        <h1 className="text-5xl md:text-6xl font-heading text-white mt-4 mb-6">Our Full Menu</h1>
        <div className="w-24 h-1 bg-gold mx-auto"></div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-heading text-gold mb-10 border-b border-gold/20 pb-4">Starters & Appetizers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {appetizers.map((item, idx) => renderCard(item, idx))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-heading text-gold mb-10 border-b border-gold/20 pb-4">Signature Mains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mains.map((item, idx) => renderCard(item, idx))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-heading text-gold mb-10 border-b border-gold/20 pb-4">Desserts & Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {desserts.map((item, idx) => renderCard(item, idx))}
        </div>
      </section>

    </div>
  );
}
