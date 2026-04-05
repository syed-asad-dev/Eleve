import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { title: 'Fine Dining', desc: 'Experience our award-winning menu in our luxurious main hall.', img: '/images/hero_bg_1_1775325452663.png' },
    { title: 'Private Events', desc: 'Exclusive rooms for your intimate gatherings and celebrations.', img: '/images/hero_bg_1_1775325452663.png' },
    { title: 'Premium Catering', desc: 'Bring the ÉLEVÉ experience to your chosen venue.', img: '/images/food_sushi_luxury_1775325269167.png' }
  ];

  return (
    <div className="w-full pt-24 bg-dark-900 min-h-screen">
      
      <div className="text-center py-16">
        <p className="text-accent-green tracking-[0.2em] uppercase text-sm font-bold">What We Offer</p>
        <h1 className="text-5xl md:text-6xl font-heading text-white mt-4 mb-6">Our Services</h1>
        <div className="w-24 h-1 bg-gold mx-auto"></div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="space-y-16">
          {services.map((srv, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 bg-dark-800 rounded-xl overflow-hidden shadow-2xl`}
             >
               <div className="w-full md:w-1/2 h-80 md:h-[400px]">
                 <img src={srv.img} alt={srv.title} className="w-full h-full object-cover" />
               </div>
               <div className="w-full md:w-1/2 p-8 md:p-16">
                 <h2 className="text-3xl font-heading text-white mb-4">{srv.title}</h2>
                 <p className="text-gray-400 mb-8 leading-relaxed">{srv.desc}</p>
                 <button className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-dark-900 transition-colors uppercase tracking-wider text-sm font-bold">
                   Inquire Now
                 </button>
               </div>
             </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
