import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SideButtons from './components/Jsx/Sidebuttons';
import Home from './components/Home';
import Product from './components/Jsx/Products/Product';
import Aboutus from './components/Jsx/Aboutus';
import Contact from './components/Jsx/Contact';
import ProductDetail from './components/Jsx/Products/Productdetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <SideButtons/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:categorySlug" element={<ProductDetail />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;