import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Chef() {
  const chefs = [
    { 
      name: 'Alexander Volkov', title: 'Executive Head Chef', 
      image: 'https://loremflickr.com/600/800/chef,portrait,male?lock=51', 
      bio: 'With 20 years of Michelin-star experience in Paris and Tokyo.' 
    },
    { 
      name: 'Sarah Jenkins', title: 'Pastry Chef', 
      image: 'https://loremflickr.com/600/800/chef,portrait,female?lock=52', 
      bio: 'Master of delicate pastries and artistic dessert plating.' 
    },
    { 
      name: 'David Chen', title: 'Sous Chef', 
      image: 'https://loremflickr.com/600/800/chef,portrait,male?lock=53', 
      bio: 'Specialist in pan-Asian fusion and exotic flavor profiles.' 
    },
    { 
      name: 'Elena Rossi', title: 'Grill Master', 
      image: 'https://loremflickr.com/600/800/chef,portrait,female?lock=54', 
      bio: 'Renowned for perfect cuts and wood-fired mastery.' 
    }
  ];

  return (
    <div className="w-full pt-24 bg-dark-900 min-h-screen">
      
      <div className="text-center py-16">
        <p className="text-accent-green tracking-[0.2em] uppercase text-sm font-bold">The Masters</p>
        <h1 className="text-5xl md:text-6xl font-heading text-white mt-4 mb-6">Meet Our Chefs</h1>
        <div className="w-24 h-1 bg-gold mx-auto"></div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden flex flex-col items-center"
            >
              <div className="w-full h-[400px] overflow-hidden">
                <img 
                  src={chef.image} 
                  alt={chef.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-500" 
                />
              </div>
              <div className="absolute bottom-0 w-full bg-dark-900/40 backdrop-blur-md p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-center rounded-t-2xl shadow-[0_-15px_30px_rgba(212,175,55,0.2)]">
                <h3 className="text-2xl font-heading text-white mb-1">{chef.name}</h3>
                <p className="text-gold text-sm uppercase tracking-wider mb-3">{chef.title}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{chef.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-white hover:text-gold transition-colors"><FaInstagram size={20} /></a>
                  <a href="#" className="text-white hover:text-gold transition-colors"><FaTwitter size={20} /></a>
                </div>
              </div>
              
              <div className="w-full bg-dark-900/80 backdrop-blur-sm p-6 text-center group-hover:opacity-0 transition-opacity duration-300">
                 <h3 className="text-xl font-heading text-white mb-1">{chef.name}</h3>
                 <p className="text-gold text-sm uppercase tracking-wider">{chef.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
