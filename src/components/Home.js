import React from 'react';
import './home.scss';
import Header from './header/Header'
import Banner from './banner/Banner';
import ProductCard from './banner/ProductCard';
import SecondBanner from './banner/SecondBanner';
import ThirdBanner from './banner/ThirdBanner';
import Footer from './footer/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <ProductCard />
    <SecondBanner />
    <ThirdBanner />
    <Footer />
    </>
  )
}
