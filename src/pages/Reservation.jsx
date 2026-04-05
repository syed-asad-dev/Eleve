import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, { message: 'Name required' }),
  phone: z.string().min(10, { message: 'Valid phone required' }),
  date: z.string().min(1, { message: 'Date required' }),
  time: z.string().min(1, { message: 'Time required' }),
  guests: z.string().min(1, { message: 'Number of guests required' }),
  specialRequests: z.string().optional()
});

export default function Reservation() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1500));
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="w-full pt-32 pb-24 bg-dark-900 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4">
        
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-bold mb-2">Secure Your Table</p>
          <h1 className="text-4xl md:text-5xl font-heading text-white mb-4">Make a Reservation</h1>
          <div className="w-16 h-1 bg-accent-green mx-auto"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-800 p-8 md:p-12 shadow-2xl border border-white/5"
        >
          {isSuccess && (
            <div className="mb-8 p-4 bg-accent-green/20 border border-accent-green text-accent-green text-center">
              Reservation requested! We will call you to confirm shortly.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                <input {...register('name')} className="w-full bg-dark-900 border border-white/10 p-3 text-white focus:border-gold outline-none" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                <input {...register('phone')} className="w-full bg-dark-900 border border-white/10 p-3 text-white focus:border-gold outline-none" />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Date</label>
                <input type="date" {...register('date')} className="w-full bg-dark-900 border border-white/10 p-3 text-white focus:border-gold outline-none [color-scheme:dark]" />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Time</label>
                <input type="time" {...register('time')} className="w-full bg-dark-900 border border-white/10 p-3 text-white focus:border-gold outline-none [color-scheme:dark]" />
                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Guests</label>
                <select {...register('guests')} className="w-full bg-dark-900 border border-white/10 p-3 text-white focus:border-gold outline-none">
                  {[1,2,3,4,5,6,7,8,'8+'].map(num => <option key={num} value={num}>{num} {num===1?'Person':'People'}</option>)}
                </select>
                {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Special Requests (Optional)</label>
              <textarea {...register('specialRequests')} rows="3" className="w-full bg-dark-900 border border-white/10 p-3 text-white focus:border-gold outline-none"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-gold text-dark-900 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center mt-4"
            >
              {isSubmitting ? 'Processing...' : <><Calendar size={18} className="mr-2" /> Book Table</>}
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
