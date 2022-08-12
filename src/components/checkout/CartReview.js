import React, { useContext, useState } from 'react';

import CartContext from '../../redux/cart-context';
import CheckOutContext from '../../redux/checkout-context';
import { useHistory } from 'react-router-dom';

export default function CartReview() {

    const cartCtx = useContext(CartContext);
    const checkOutCtx = useContext(CheckOutContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);

      let history = useHistory();

    let content = <p>Your Cart is Empty.</p>;
    if(cartCtx.items.length !== 0){
        content = cartCtx
        .items.map((item,index) => ( 
            
            <div className="aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 " key={index}>
                <div className='card'>
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--6">
                            <img src={item.image} alt="product-img" className='card-img'/>
                        </div>
                        <div className="aem-GridColumn  aem-GridColumn--default--8 aem-GridColumn--phone--6 pd-lf-20">
                            <h6 className='checkout_view_info checkout_view_info_card_Title'>{item.title}</h6>
                            <h6 className='checkout_view_info checkout_view_info_card_Text'>Size : Medium</h6>
                            <h6 className='checkout_view_info checkout_view_info_card_Text'>Color : Storm</h6>
                            <h6 className='checkout_view_info checkout_view_info_card_Text'>Quantity:{item.amount}</h6>
                        </div>
                    </div>
                </div>
            </div>
           
        ));
      }

  return (
    <div className="view_shipping_info">
        <div className='card border '>
            <div className='card-body '>         
                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn  aem-GridColumn--default--10 aem-GridColumn--phone--10 ">
                        <h2 className='checkout_info'>{numberOfCartItems} items in your order </h2>
                    </div>
                    <div className="aem-GridColumn  aem-GridColumn--default--2 aem-GridColumn--phone--2 ">
                    
                    </div>
                    <div className="aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 ">
                        <div className="aem-Grid aem-Grid--12 ">
                            {/* <div className="aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 ">
                                <h6 className='checkout_view_info'></h6>    
                            </div> */}
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 mr-bt-16 d-flex justify-content-center mr-tp-32 mr-bt-32'>
            <button className='checkout__btn' type="submit" value="Submit" onClick={()=>history.push("/venia/orderPlaced")} >PLACE ORDER</button>
           
        </div>
        <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 mr-bt-16 d-flex justify-content-center mr-tp-32 mr-bt-32'>
            
            <p>By clicking confirm order you agree to our Terms and Conditions</p>
        </div>
    </div>
  )
}
