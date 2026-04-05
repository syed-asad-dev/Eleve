import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Phone must be at least 10 numbers' }),
  subject: z.string().min(5, { message: 'Subject is required' }),
  message: z.string().min(10, { message: 'Message is too short' }),
});

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="w-full pt-24 bg-dark-900 min-h-screen">
      
      <div className="relative h-[30vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/hero_bg_1_1775325452663.png" alt="Contact" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-4">Contact Us</h1>
          <p className="text-gold tracking-[0.2em] uppercase text-sm">We'd love to hear from you</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <MapPin size={32}/>, title: 'Visit Us', desc: '123 Main Street, Clifton, Karachi' },
            { icon: <Phone size={32}/>, title: 'Call Us', desc: '+92 300 1234567' },
            { icon: <Mail size={32}/>, title: 'Email Us', desc: 'info@eleve.com' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-dark-800 border border-white/5 text-center flex flex-col items-center shadow-lg hover:border-gold transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-dark-900 flex items-center justify-center text-gold mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-heading text-white mb-8">Send a Message</h2>
            
            {isSuccess && (
              <div className="mb-6 p-4 bg-accent-green/20 border border-accent-green text-accent-green rounded">
                Message sent successfully! We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input {...register('name')} placeholder="Your Name" className="w-full bg-dark-800 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register('email')} placeholder="Email Address" className="w-full bg-dark-800 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input {...register('phone')} placeholder="Phone Number" className="w-full bg-dark-800 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <input {...register('subject')} placeholder="Subject" className="w-full bg-dark-800 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
              </div>

              <div>
                <textarea {...register('message')} placeholder="Your Message" rows="5" className="w-full bg-dark-800 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#27ae60] hover:bg-[#219653] text-white py-4 font-bold uppercase tracking-widest flex justify-center items-center transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : <><Send size={18} className="mr-2" /> Send Message</>}
              </button>
            </form>
          </motion.div>

          {/* Map Embed (Placeholder visual) */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="h-full min-h-[400px] bg-dark-800 border border-white/5 relative flex items-center justify-center p-2">
             <div className="w-full h-full bg-dark-900 border border-white/5 opacity-50 flex items-center justify-center">
                 {/* Replaced real google maps with a styled placeholder to match dark theme */}
                 <div className="text-center">
                    <MapPin size={48} className="text-gold mx-auto mb-4" />
                    <p className="text-gray-400 font-heading">Clifton, Karachi</p>
                 </div>
             </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
