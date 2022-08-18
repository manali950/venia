import React, { useContext, useState ,useEffect } from 'react'

import CheckOutContext from '../../redux/checkout-context';
import CartReview from './CartReview';



export default function FormPaymentInfo(props) {

  const checkOutCtx = useContext(CheckOutContext);
  const [isCredit, setIsNotCredit] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);

  const [inputField, setInputField] = useState({
    Payment_method: '',
    card_name: '',
    card_num: '',
    card_Exp: '',
    card_cvv: ''
  })

  useEffect(() => {
    if(props.hasItems){
     setIsSubmited(true);
    }
 }, []);

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    // alert("submited"); 
    const formAdd = {
      Payment_method: inputField.Payment_method,
      card_name: inputField.card_name,
      card_num: inputField.card_num,
      card_Exp: inputField.card_Exp,
      card_cvv: inputField.card_cvv
    }
    // console.log(formAdd, "info");
    checkOutCtx.addItem(formAdd);

    setInputField({
      Payment_method: '',
      card_name: '',
      card_num: '',
      card_Exp: '',
      card_cvv: ''
    })
    setIsSubmited(true);
    //  props.setEditedInfo(true); 
  }

  const onEditHandler = () => {
    setIsSubmited(false);
    setInputField({
      Payment_method: checkOutCtx.items.Payment_method,
      card_name: checkOutCtx.items.card_name,
      card_num: checkOutCtx.items.card_num,
      card_Exp: checkOutCtx.items.card_Exp,
      card_cvv: checkOutCtx.items.card_cvv
    })
     props.setEditedMethod(true); 
  };

  return (
    <>
      {!props.isEditedMethod && !isSubmited ?

        <div className='form_payment_info form_line'>
          <form >
            <div className='aem-Grid aem-Grid--12'>
              <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 '>
                <h2 className='checkout_subTitle2-nonEdit'>3. Payment Information</h2>
              </div>
            </div>
          </form>
        </div>

        : !isSubmited ? <>
          <div className='form_payment_info form_line'>
            <form onSubmit={submitHandler}>
              <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 '>
                  <h2 className='checkout_subTitle2'>3. Payment Information</h2>

                  <div className='wrapper mr-bt-16'>
                    <input type="radio" id="payment_credit" name="Payment_method" onChange={inputsHandler} value="payment_credit" onClick={() => setIsNotCredit(true)} defaultChecked="checked" />
                    <label className='radio_input' htmlFor="payment_credit">Credit Card</label><br />
                  </div>

                  {isCredit ?
                    <>
                      <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 mr-bt-16'>
                          <label htmlFor="card_name">Name on Card</label>
                          <input type="text" id="card_name" name="card_name"  placeholder="Name on Card.."
                            onChange={inputsHandler}
                            value={inputField.card_name}
                            
                          />
                        </div>
                        <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 col mr-bt-16'></div>
                        <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 mr-bt-16'>
                          <label htmlFor="card_num">Credit Card Number</label>
                          <input type="text" id="card_num" name="card_num" pattern="[0-9]{16}" placeholder="Credit Card Number.."
                            onChange={inputsHandler}
                            value={inputField.card_num}
                            required
                          />
                        </div>
                        <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 col mr-bt-16'></div>
                        <div className='aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--12 mr-bt-16'>
                          <label htmlFor="card_Exp">Expiration Date</label>
                          <input type="month" id="card_Exp" name="card_Exp" placeholder="Expiration Date.."
                            onChange={inputsHandler}
                            value={inputField.card_Exp}
                            required
                          />
                        </div>
                        <div className='aem-GridColumn  aem-GridColumn--default--2 aem-GridColumn--phone--12 mr-bt-16'>
                          <label htmlFor="card_cvv">CVV</label>
                          <input type="text" id="card_cvv" name="card_cvv" pattern="[0-9]{3}" placeholder="CVV.."
                            onChange={inputsHandler}
                            value={inputField.card_cvv}
                            required
                          />
                        </div>
                        <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 col mr-bt-16'></div>
                        <div className='aem-GridColumn  aem-GridColumn--default--8 aem-GridColumn--phone--12  mr-bt-16'>
                          <div className="wrapper " >
                            <input type="checkbox" value="BillAddressIsSameAsShipping" />
                            <label>Billing address same as shipping address </label>
                          </div>
                        </div>
                      </div>
                    </>

                    : ""}

                  <div className='wrapper form_line'>
                    <input type="radio" id="payment_paypal" name="Payment_method" onChange={inputsHandler} value="payment_paypal" onClick={() => setIsNotCredit(false)} />
                    <label className='radio_input pd-tp-bt-25' htmlFor="payment_paypal">PayPal</label><br />
                  </div>

                  <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 mr-bt-16 d-flex justify-content-center mr-tp-32 mr-bt-32 '>
                    <button className='checkout__btn' type="submit" value="Submit" >CONTINUE <span className="custom--phone--hide " >TO REVIEW ORDER</span> </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
          : <>
          <div className="view_shipping_info">
            <div className='card border '>
                <div className='card-body '>         
                    <div className="aem-Grid aem-Grid--12 ">
                        
                    <div className="aem-GridColumn  aem-GridColumn--default--10 aem-GridColumn--phone--10 ">
                        <h2 className='checkout_info'>Payment Information</h2>
                    </div>
                    <div className="aem-GridColumn  aem-GridColumn--default--2 aem-GridColumn--phone--2 ">
                        <div className='wrapper float-right'>
                            <img src={process.env.PUBLIC_URL + `/assets/icons/edit-2-new.svg`} onClick={onEditHandler} alt="Icon" className='icon' />
                            <button className="edit_btn" onClick={onEditHandler}><span className="custom--phone--hide ">Edit</span></button>
                        </div>
                    </div>
                    <div className="aem-GridColumn  aem-GridColumn--default--7 aem-GridColumn--phone--12 ">
                        <div className="aem-Grid aem-Grid--12 ">
                            <div className="aem-GridColumn  aem-GridColumn--default--7 aem-GridColumn--phone--12 ">
                                <h6 className='checkout_view_info'>{checkOutCtx.items.card_name}</h6>
                                <h6 className='checkout_view_info'>Visa ending in {checkOutCtx.items.card_Exp}</h6>
                            </div>
                        </div>
                    </div>
                        
                        
                    
                    </div>
                </div>
            </div>
          </div>
          <CartReview />
          </>
      }
    </>
  )
} 