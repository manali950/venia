import React from 'react';
import './home.scss';

import Banner from './banner/Banner';
import ProductCard from './banner/ProductCard';
import SecondBanner from './banner/SecondBanner';
import ThirdBanner from './banner/ThirdBanner';


export default function Home() {
  return (
    <>
    
    <Banner />
    <ProductCard />
    <SecondBanner />
    <ThirdBanner />
    
    </>
  )
}
