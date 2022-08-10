import React from 'react';
import Header from './header/Header';
import Banner from './banner/Banner';
import Footer from './footer/Footer';
import ProductList from './productList/ProductList';
import ProductBanner from './banner/ProductBanner';

export default function Products() {
  return (
    <>
    <Header />
        <ProductBanner />
        <ProductList />
    <Footer />
    </>
  )
}
