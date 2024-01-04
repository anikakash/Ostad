import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import TeamPage from './Pages/TeamPage';
import ServicePage from './Pages/ServicePage';
import ProjectPage from './Pages/ProjectPage';
import TestimonialPage from './Pages/TestimonialPage';
import Subscribe from './Components/Subscribe';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductPage from './Pages/ProductPage';
import ContactPage from './Pages/ContactPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import FAQPage from './Pages/FAQPage';
import BlogArchivePage from './Pages/BlogArchivePage';
import RegistrationPage from './Pages/AccountRegister';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/faq" element={<FAQPage/>} />
          <Route path="/blog" element={<BlogArchivePage/>} />
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Subscribe/>
        <Footer />
      
      
      </BrowserRouter>
  );
};

export default App;