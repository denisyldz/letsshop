import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='product' element={<OurStore />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path='product/:id' element={<SingleProduct />} />
          <Route path='cart' element={<Cart />} />
          <Route path='compare-product' element={<CompareProduct />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='login' element={<Login />} />
          <Route path='profile' element={<Profile />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='signup' element={<Signup />} />
          <Route path='reset-password' element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
