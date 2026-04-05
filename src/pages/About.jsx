import { motion } from 'framer-motion';
import { Star, Award, Heart, Clock } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Star size={32} className="text-gold" />, title: 'Premium Quality', desc: 'Sourcing only the finest ingredients globally.' },
    { icon: <Award size={32} className="text-gold" />, title: 'Master Chefs', desc: 'Culinary experts with decades of experience.' },
    { icon: <Heart size={32} className="text-gold" />, title: 'Passionate Service', desc: 'Delivering memories, not just meals.' },
    { icon: <Clock size={32} className="text-gold" />, title: 'Timeless Recipes', desc: 'Classic traditions mixed with modern flair.' }
  ];

  return (
    <div className="w-full pt-24 bg-dark-900">
      
      {/* Title Banner */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/hero_bg_1_1775325452663.png" alt="About" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-4">Our Story</h1>
          <p className="text-gold tracking-[0.2em] uppercase text-sm">The Legacy of ÉLEVÉ</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">A Journey of Culinary Excellence</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded in the luxurious heart of Clifton, Karachi, ÉLEVÉ began with a simple philosophy: to elevate the standard of fine dining. Our founders traveled the globe to master international cuisines, bringing back authentic flavors and marrying them with local sensibilities.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Every dish served is a testament to our dedication to quality, precision, and passion. We don't just cook food; we craft unforgettable experiences.
            </p>
            <img src="/eleve.png" alt="Signature" className="w-32 opacity-50" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="/images/food_pasta_luxury_1775325850281.png" alt="Prep 1" className="w-full h-64 object-cover rounded-tl-3xl opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/chef_portrait_1_1775324688981.png" alt="Prep 2" className="w-full h-64 object-cover rounded-tr-3xl mt-8 opacity-80 hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-16">The Pillars of ÉLEVÉ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 border border-white/5 bg-dark-900 shadow-2xl hover:border-gold/50 transition-colors"
              >
                <div className="flex justify-center mb-6">{val.icon}</div>
                <h3 className="text-xl font-heading text-white mb-4">{val.title}</h3>
                <p className="text-gray-400 text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
