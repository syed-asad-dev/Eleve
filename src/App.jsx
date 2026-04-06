import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import OrderModal from './components/OrderModal';

// Page Placeholders (to be implemented)
import Home from './pages/Home';
import About from './pages/About';
import Chef from './pages/Chef';
import Menu1 from './pages/Menu1';
import Menu2 from './pages/Menu2';
import Menu3 from './pages/Menu3';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartSidebar />
      <OrderModal />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/menu-1" element={<Menu1 />} />
          <Route path="/menu-2" element={<Menu2 />} />
          <Route path="/menu-3" element={<Menu3 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
