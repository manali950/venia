import React from 'react'
import './productBanner.scss';

export default function ProductBanner() {
  return (
    <section className='ProductBanner'>
        <div className="container">
            <div className="row">
                <div className="aem-Grid aem-Grid--default--8 aem-Grid--phone--12 reverse">
                <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--12 phn-container d-flex">
                    <div className='card'>
                    <p className='text'>Women’s Outerwear
                    <div className='line'></div>
                    </p>
                    
                    </div>
                </div>
                <div className="aem-GridColumn  aem-GridColumn--default--5 aem-GridColumn--phone--12">
                <img className="banner-img" src={process.env.PUBLIC_URL + `/assets/img/productBanner.jpg`} alt="banner img" />
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
