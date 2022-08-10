import React from 'react';
import { Link } from 'react-router-dom';
import './productCard.scss';

export default function ProductCard() {
  return (
    <div className="row">
        <div className="aem-Grid aem-Grid--default--1 aem-Grid--phone--1 ">
          <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12">
            <div className='productCard'>
            
              <div className='card'>
              <div className='card__body'>
              <Link to="/venia/products">
                <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" alt="card-img" className='card__img_wrapper' />
                  <div className="card__content">
                    <h5 className='card__title'>Shop Women</h5>
                    <p className='card__info'>Lorem ipsum dolor sit amet</p>
                  
                  </div>
                  </Link>
                </div>
              </div>
             
              <div className='card'>
              <div className='card__body'>
              <Link to="/venia/products">
                <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="card-img" className='card__img_wrapper' />
                  <div className="card__content">
                    <h5 className='card__title'>Shop Men</h5>
                    <p className='card__info'>Lorem ipsum dolor sit amet</p>
                    
                  </div>
                </Link>  
                </div>
              </div>
              <div className='card'>
              <div className='card__body'>
              <Link to="/venia/products">
                <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="card-img" className='card__img_wrapper' />
                  <div className="card__content">
                    <h5 className='card__title'>Jewellery</h5>
                    <p className='card__info'>Lorem ipsum dolor sit amet</p>
                    
                  </div>
                  </Link>
                </div>
              </div>
              <div className='card'>
              <div className='card__body'>
              <Link to="/venia/products">
                <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="card-img" className='card__img_wrapper' />
                  <div className="card__content">
                    <h5 className='card__title'>Electronics</h5>
                    <p className='card__info'>Lorem ipsum dolor sit amet</p>
                    
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
