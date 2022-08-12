import React, { useContext, useState ,useEffect } from 'react';
import CheckOutContext from './../../redux/checkout-context';

export default function FormShippingMethod(props) {
    const checkOutCtx = useContext(CheckOutContext);

    const [isSubmited , setIsSubmited] = useState(false);

    const [inputField , setInputField] = useState({
        method: ''
    })
    useEffect(() => {
        if(props.hasItems){
         setIsSubmited(true);
        }
     }, []);

    const inputsHandler = (e) =>{
        
        setInputField( {...inputField,[e.target.name]: e.target.value} )
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const formAdd = {
            method: inputField.method
        }
        // console.log(formAdd,"Method");

        checkOutCtx.addItem(formAdd);
        setIsSubmited(true)
        props.setEditedMethod(true)
    };

    const onEditHandler = () => {
        setIsSubmited(false);
        setInputField( {
            method: checkOutCtx.items.method
        } );
        props.setEditedInfo(true);
        props.setEditedMethod(false);

    };


  return (
    <>
    {!props.isEditedInfo && !isSubmited ? 
    <div className='form_shipping_method form_line'>
        <form >
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 '>
                    <h2 className='checkout_subTitle2-nonEdit'>2. Shipping Method</h2>
                </div>
                
            </div>
        </form>

    </div>

    : !isSubmited ?
    <>
    <div className='form_shipping_method form_line'>
        <form onSubmit={submitHandler}  >
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 '>
                    <div>
                        <h2 className='checkout_subTitle2'>2. Shipping Method</h2>
                        
                        <div className='wrapper'>
                            <input type="radio" id="method__std" name="method"  onChange={inputsHandler}  value="Standard_Shipping (4-8_business_days_via_USPS) FREE" required />
                            <label className='radio_input' htmlFor="method__std">Standard Shipping (4-8 business days via USPS) FREE</label><br/>
                        </div>
                        <div className='wrapper'>
                            <input type="radio" id="method__exp" name="method" onChange={inputsHandler}  value="Express_Delivery (2-5_business_days_via_USPS) $17.95" required />
                            <label className='radio_input' htmlFor="method__exp">Express Delivery (2-5 business days via USPS) $17.95</label><br/>
                        </div>
                        <div className='wrapper'>
                            <input type="radio" id="method__next" name="method" onChange={inputsHandler}  value="Next_Day_Delivery (Next_business_days_via_FedEx) $53.61" required />
                            <label className='radio_input' htmlFor="method__next">Next Day Delivery (Next business days via FedEx) $53.61</label><br/>
                        </div>
                        <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 mr-bt-16 d-flex justify-content-center mr-tp-32 mr-bt-32'>
                            <button className='checkout__btn' type="submit" value="Submit" >CONTINUE TO PAYMENT</button>
                        </div>

                    </div>
                </div>
                
            </div>
        </form>
    </div>
    </> 
    : 
    <>
    <div className="view_shipping_info">
        <div className='card border '>
            <div className='card-body '>         
                <div className="aem-Grid aem-Grid--12 ">
                    
                <div className="aem-GridColumn  aem-GridColumn--default--10 aem-GridColumn--phone--10 ">
                    <h2 className='checkout_info'>Shipping Method</h2>
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
                            <h6 className='checkout_view_info'>{checkOutCtx.items.method.replace(/\s+/g, ' ').split(" ").join("\n").replace(/_/g, " ")}</h6>
                        </div>
                    </div>
                </div>
                    
                    
                
                </div>
            </div>
        </div>
    </div>

    </>
    }
    </>
  )
}
