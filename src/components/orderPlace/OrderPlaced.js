import React from 'react';
import './orderPlaced.scss';
import CartContext from '../../redux/cart-context';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CheckOutContext from '../../redux/checkout-context';
import OrderGenerator from './OrderGenerator';

export default function OrderPlaced() {

  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
    const checkOutCtx = useContext(CheckOutContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
  }, 0);

  let OrderNo = Math.ceil(Math.random() * 1000000)
  let currentDate = new Date().toLocaleDateString()
  let data = {
    OrderNo:OrderNo,
    date:currentDate,
    email:checkOutCtx.items.email,
    phoneNumber:checkOutCtx.items.phoneNumber,
    totalProducts:numberOfCartItems,
  }

  let history = useHistory();

  return (
    <>
       {hasItems ?
       <section className='orderPlaced'>
        <div className='container'>
            <div className='row'>
              <div className='aem-Grid aem-Grid--12'>
                  <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 '>
                      <div>
                          <p className='cart-title'>Order Successful!</p>
                          <div className='line'></div>
                      </div>
                  </div>
              </div>
              <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn  aem-GridColumn--default--8 aem-GridColumn--phone--12 pd-rt-31'>
                  <div className="form_shipping_info">
                    <div className='aem-Grid aem-Grid--12'>
                      <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 space_item'>
                        <h1 className='orderPlaced_number'>Order Number #{OrderNo}</h1>
                        <OrderGenerator data={data} cartCtx={cartCtx} />
                      </div>
                      <div className='row'>
                        <div className='aem-Grid aem-Grid--12'>
                          <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 pd-rt-31'>
                            <h2 className='orderPlaced_title'>Shipping Information</h2>
                            <h6 className='orderPlaced_info'>{checkOutCtx.items.email}</h6>
                            <h6 className='orderPlaced_info'>{checkOutCtx.items.phoneNumber}</h6>
                            <h6 className='orderPlaced_info'>{checkOutCtx.items.fName}{checkOutCtx.items.lName}</h6>
                            <h6 className='orderPlaced_info'>
                            {checkOutCtx.items.address}-{checkOutCtx.items.address2}
                            -{checkOutCtx.items.city}-{checkOutCtx.items.state}-{checkOutCtx.items.country}-{checkOutCtx.items.zip}
                            </h6>

                          </div>
                          <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 '>
                            <h2 className='orderPlaced_title'>Shipping Method</h2>
                            <h6 className='orderPlaced_info'>{checkOutCtx.items.method.replace(/\s+/g, ' ').split(" ").join("\n").replace(/_/g, " ")}</h6>

                          </div>
                          <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 '>
                            <h2 className='orderPlaced_title'>Payment Information</h2>
                            <h6 className='orderPlaced_info'>{checkOutCtx.items.Payment_method}</h6>
                            <h6 className='orderPlaced_info'>Visa ending in {checkOutCtx.items.card_Exp}</h6>

                          </div>
                        </div>
                      </div>
                      <div className="aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 ">
                        <h2 className='orderPlaced_title'>{numberOfCartItems} items in your order </h2>
                      </div>
                      {cartCtx
                      .items.map((item,index) => ( 
                          
                        <div className="aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 padding-tp-bt-10 pd-rt-31" key={index}>
                          <div className="aem-Grid aem-Grid--12 ">
                              <div className="aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--6 d-flex">
                                  <img src={item.image} alt="product-img" className='card-img'/>
                              </div>
                              <div className="aem-GridColumn  aem-GridColumn--default--8 aem-GridColumn--phone--6 pd-lf-20">
                                  <h6 className='orderPlaced_info_cardTitle '>{item.title}</h6>
                                  <h6 className='orderPlaced_info_cardinfo '>Size : Medium</h6>
                                  <h6 className='orderPlaced_info_cardinfo '>Color : Storm</h6>
                                  <h6 className='orderPlaced_info_cardinfo '>Quantity:{item.amount}</h6>
                              </div>
                          </div>  
                        </div>
                        ))
                        }
                      <div className="aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 ">
                        <h2 className='orderPlaced_info_cardTitle mbs-1 mbe-1 '>You will also receive an email with the details and we will let you know when your order has shipped.</h2>
                      </div>
                      <div className="aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 ">
                        <h2 className='orderPlaced_info_cardTitle mbe-1'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST. </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--hide '>
                   <div className='card'>
                    <p className='text'>Give us a follow to SAVE 20% on your next order.</p>
                    <div className='icon'>
                      <a>
                        <img className="icons mr-rt-32" src={process.env.PUBLIC_URL + `/assets/icons/instagram-2.svg`} alt="instagram-2-icon" />
                      </a>
                      <a>
                        <img className="icons mr-rt-32" src={process.env.PUBLIC_URL + `/assets/icons/facebook-2.svg`} alt="facebook-2-icon" />
                      </a>
                      <a>
                        <img className="icons mr-rt-32" src={process.env.PUBLIC_URL + `/assets/icons/twitter-2.svg`} alt="twitter-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
       </section>
       :
        <>
        <p className="d-flex justify-content-center">Nothing inside the cart please add some items </p>
        <p className="d-flex justify-content-center">Go back<button onClick={()=>history.push("/venia/products")}> <i className='fa fa-angle-double-left   '></i></button></p>
        </>
        }
    </>
  )
}
