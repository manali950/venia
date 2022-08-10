import React from 'react';
import './thirdBanner.scss';
import { useHistory } from 'react-router-dom';

export default function ThirdBanner() {
    let history = useHistory();
  return (
    <section className='third_banner'>
        <div className="container">
            <div className="row">
                <div className="aem-Grid aem-Grid--default--8 aem-Grid--phone--12 reverse">
                
                <div className="aem-GridColumn  aem-GridColumn--default--5 aem-GridColumn--phone--12 ">
                    <img className="banner-img" src={process.env.PUBLIC_URL + `/assets/img/third_banner.png`} alt="banner img" />
                </div>
                <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--12 phn-container d-flex">
                    <div className='card'>
                        <p className='text'>Conquer your next adventure </p>
                        <p className='text-info'>Lorem Ipsum Dolor Tempor </p>
                        <button className="btn "
                        onClick={()=>history.push("/venia/products")}>SHOP DEVICES </button>
                        {/* <div className='locpin_line'>
                            <img src={process.env.PUBLIC_URL + `/assets/icons/pin.png`} />
                            <div className='line'></div>
                        </div> */}
                    </div>
                        
                </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
