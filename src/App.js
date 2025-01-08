import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import ProductsPage from "./Components/ProductPage/ProductsPage";
import InsecticidePage from "./Components/ProductPage/InsecticidePage";
import FertilizerPage from "./Components/ProductPage/FertilizerPage";
import PGRPage from "./Components/ProductPage/PGRPage";
import HerbicidePage from "./Components/ProductPage/HerbicidePage";
import FungicidePage from "./Components/ProductPage/FungicidePage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/insecticide" element={<InsecticidePage />} />
          <Route path="/products/fungicide" element={<FungicidePage />} />
          <Route path="/products/herbicide" element={<HerbicidePage />} />
          <Route path="/products/pgr" element={<PGRPage />} />
          <Route path="/products/fertilizer" element={<FertilizerPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
      
  );
}

export default App;
