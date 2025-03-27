import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'

import AboutPage from '../AboutPage/AboutPage';
import ServicePage from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import CareerPage from "../CareerPage/CareerPage"
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import QuotePage from '../QuotePage/QuotePage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          {/* <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} /> */}
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicePage />} /> 
          <Route path='quote' element={<QuotePage/>}/>
          <Route path="service-details/:slug" element={<ServiceSinglePage />} />
          {/* <Route path="project" element={<ProjectPage />} />
          <Route path="project-details/:slug" element={<ProjectSinglePage />} /> */}
          {/* <Route path="shop" element={<ShopPage />} />
          <Route path='shop-details/:slug' element={<ShopSinglePage />} /> */}
          {/* <Route path='shop-cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='news' element={<BlogPage />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} /> */}
          <Route path='contact' element={<ContactPage />} />
          <Route path='career' element={<CareerPage />} />
          <Route path='404' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
