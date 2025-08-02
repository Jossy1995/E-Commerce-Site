import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import ClothPage from './pages/ClothPage';
import Footer from './components/Footer';
import ClothDetails from './pages/ClothDetails';
import ShopDetails from './pages/ShopDetails';



function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<ShopDetails />} />
          <Route path="/clothing" element={<ClothPage />} />
          <Route path="/clothing/:id" element={<ClothDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;