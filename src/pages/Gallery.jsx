import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    '/images/hero_bg_1_1775325452663.png',
    '/images/food_steak_luxury_1775324465478.png',
    '/images/food_sushi_luxury_1775325269167.png',
    '/images/chef_portrait_1_1775324688981.png',
    '/images/food_pasta_luxury_1775325850281.png',
    '/images/chef_portrait_2_1775325736248.png'
  ];

  return (
    <div className="w-full pt-24 bg-dark-900 min-h-screen">
      
      <div className="text-center py-16">
        <p className="text-accent-green tracking-[0.2em] uppercase text-sm font-bold">Visual Journey</p>
        <h1 className="text-5xl md:text-6xl font-heading text-white mt-4 mb-6">Our Gallery</h1>
        <div className="w-24 h-1 bg-gold mx-auto"></div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
               className="break-inside-avoid relative group overflow-hidden"
             >
               <img src={src} alt="Gallery" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
