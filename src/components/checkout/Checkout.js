import React, { useContext, useState } from "react";
import Footer from '../footer/Footer';
import Header from './../header/Header';
import './checkout.scss';
import FormShippingInfo from './FormShippingInfo';
import FormShippingMethod from './FormShippingMethod';
import FormPaymentInfo from './FormPaymentInfo';
import CartContext from '../../redux/cart-context';
import { useHistory } from 'react-router-dom';
import CheckOutContext from './../../redux/checkout-context';

export default function Checkout() {

    const cartCtx = useContext(CartContext);
    const checkOutCtx = useContext(CheckOutContext);
    const [isSubmitedFormShippingInfo , setIsSubmitedFormShippingInfo] = useState(false);
    const [isSubmitedFormShippingMethod , setIsSubmitedFormShippingMethod] = useState(false);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const hasItemsData = checkOutCtx.items.email;

    let history = useHistory();

    
  return (
    <>
        {/* <Header /> */}
        {hasItems ?
        <section className='checkout'>
            <div className='container'>
                <div className='row'>
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 '>
                            <div>
                                <p className='cart-title'>Checkout</p>
                                <div className='line'></div>
                            </div>
                        </div>
                    </div>
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn  aem-GridColumn--default--8 aem-GridColumn--phone--12 pd-rt-31'>
                            <FormShippingInfo setEditedInfo = {setIsSubmitedFormShippingInfo} setEditedMethod={setIsSubmitedFormShippingMethod} hasItems={hasItemsData} />
                            <FormShippingMethod  isEditedInfo={isSubmitedFormShippingInfo} setEditedInfo = {setIsSubmitedFormShippingInfo} setEditedMethod={setIsSubmitedFormShippingMethod} hasItems={hasItemsData} />
                            <FormPaymentInfo isEditedMethod={isSubmitedFormShippingMethod} setEditedMethod={setIsSubmitedFormShippingMethod} hasItems={hasItemsData} />

                        </div>
                        {/* end From */}
                        <div className='aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--12 '>
                            <div className='card border'>
                                <div className='card-body checkoutBody'>
                                    <p className='checkoutTilte align'>Pricing Summary</p> 
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Subtotal</td>
                                                <td>{totalAmount}</td>
                                            </tr>
                                            <tr>
                                                <td>Coupon</td>
                                                <td>- $ 50.00</td>
                                            </tr>
                                            <tr>
                                                <td>Gift Card</td>
                                                <td>- $ 30.00</td>
                                            </tr>
                                            <tr>
                                                <td>Estimated tax</td>
                                                <td>$ 40.00</td>
                                            </tr>
                                            <tr>
                                                <td>Estimated shipping</td>
                                                <td>$ 40.00</td>
                                            </tr>
                                            <tr>
                                                <th>Estimated Total</th>
                                                <th>{totalAmount}</th>
                                            </tr>
                                        </tbody>
                                    </table>
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
        {/* <Footer /> */}
    </>
  )
}
