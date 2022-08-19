import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductListItems(props) {
    const {item} = props;
  return (
    <div className="aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--6 d-flex">
        <div className='card'>

            <Link to={`/venia/products/ProductDetails/${item.id}`}>
                <div className='card-body'>
                    <img src={item.image} alt="product-img" className='img-wrapper' />

                    <p className='title'>{item.title.slice(0, 17 - 3) + '...'}</p>
                    <p className='price'>${item.price}</p>
                    <img className="icon" src={process.env.PUBLIC_URL + `/assets/icons/heart.svg`} alt="wishlist icon" />
                </div>
            </Link>

        </div>
    </div>
  )
}
