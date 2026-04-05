import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const dishes = [
    { name: 'Luxury Grilled Steak', price: '$45', image: '/images/food_steak_luxury_1775324465478.png' },
    { name: 'Squid Ink Pasta', price: '$35', image: '/images/food_pasta_luxury_1775325850281.png' },
    { name: 'Golden Sushi Platter', price: '$55', image: '/images/food_sushi_luxury_1775325269167.png' }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_bg_1_1775325452663.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-900/60 z-10"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-4"
          >
            Welcome to
          </motion.h4>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl font-heading text-white mb-6 tracking-widest drop-shadow-xl"
          >
            ÉLEVÉ
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-10 font-light"
          >
            An Elevated Dining Experience in the Heart of Clifton<br className="hidden md:block" /> where luxury meets culinary perfection.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/menu-1" className="px-8 py-4 bg-gold text-dark-900 font-bold uppercase tracking-wider hover:bg-white transition-colors w-full sm:w-auto text-center">
              Discover Menu
            </Link>
            <Link to="/reservation" className="px-8 py-4 border border-gold text-gold font-bold uppercase tracking-wider hover:bg-gold hover:text-dark-900 transition-colors w-full sm:w-auto text-center">
              Book a Table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats/About Brief */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-y border-white/5 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '10+', label: 'Years Experience' },
              { num: '50+', label: 'Signature Dishes' },
              { num: '4', label: 'Master Chefs' },
              { num: '8K+', label: 'Happy Customers' }
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl md:text-5xl text-gold font-heading mb-2">{stat.num}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-dark-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-green text-sm tracking-[0.2em] uppercase font-bold">Discover</span>
            <h2 className="text-4xl md:text-5xl font-heading text-white mt-4">Our Signature Dishes</h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {dishes.map((dish, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative"
              >
                <div className="overflow-hidden rounded-xl h-[400px]">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80"></div>
                </div>
                
                <div className="absolute bottom-0 w-full p-8 text-center">
                  <h3 className="text-2xl font-heading text-white mb-2">{dish.name}</h3>
                  <p className="text-gold font-semibold text-xl mb-4">{dish.price}</p>
                  <Link to="/menu-1" className="inline-block border-b border-accent-green text-light pb-1 hover:text-accent-green transition-colors text-sm uppercase tracking-wider">
                    View in Menu
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/menu-2" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors inline-block">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
