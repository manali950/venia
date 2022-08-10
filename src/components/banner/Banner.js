import React from 'react';
import './banner.scss';
import { useHistory } from 'react-router-dom';

export default function Banner() {
    let history = useHistory();
  return (
    <section className='banner'>
        <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1 aem-GridColumn--phone--hide  ">
                <div className='banner__container'>
                    <div className='banner__content'>
                        <div className='banner__text'>
                            <h1 className='banner__title'>Shop the new Signature Collection</h1>
                            <p className='banner__info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                            <button className="banner__btn uppercase" 
                             onClick={()=>history.push("/venia/products")}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1 aem-GridColumn--phone--hide ">
                <div className='banner__wrapper'>
                    <img src={process.env.PUBLIC_URL + `/assets/img/firstBanner.png`} alt="img" />
                </div>
            </div>
            <div className="phone_banner custom--desktop--hide">
                <div className="phone_banner__content">
                    <h2>Shop the new Signature Collection</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor </p>
                    <button className="banner__btn uppercase">Shop Now</button>
                    <div className="dot-container custom--desktop--hide">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + `/assets/img/firstBanner.png`} alt="banner img" />
            </div>
        </div>
    </section>
  )
}
