import React, { useState, useEffect ,useContext, useRef } from "react";

import CheckOutContext from './../../redux/checkout-context';
// import { Country, State, City }  from 'country-state-city';
import csc from "country-state-city";

export default function FormShippingInfo(props) {
    const checkOutCtx = useContext(CheckOutContext);

    const [isSubmited , setIsSubmited] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [phoneIsValid, setPhoneIsValid] = useState(true);
    const [isCSC , setIsCSC] = useState({
        countries : [],
        states : [],
        cities : [],
        selectedCountry : 'Country',
        selectedState : 'State'
    });

    const email = useRef('');
    const phoneNumber = useRef('');
    const country  = useRef('');
    const fName = useRef('');
    const lName = useRef('');
    const address = useRef('');
    const address2 = useRef('');
    const city = useRef('');
    const state = useRef('');
    const zip = useRef('');
    
    
    useEffect(() => {
       if(props.hasItems){
        setIsSubmited(true);
       }

    }, []);

    const [inputField , setInputField] = useState({
        email: '',
        phoneNumber: '',
        country : '',
        fName: '',
        lName: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    })
    const countryHandler = (e) =>{
       
       
         setIsCSC({...isCSC,countries:csc.getAllCountries()});
        setInputField( {...inputField,country: e.target.value} )
    }
    const stateHandler = (e) =>{
       
          setIsCSC({...isCSC,states:csc.getStatesOfCountry(inputField.country)});
         setInputField( {...inputField,state: e.target.value} )
    }

    const inputsHandler = (e) =>{
       
        setInputField( {...inputField,[e.target.name]: e.target.value} )
    }
    const validateEmail = (value) => {
       
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const enteredEmail = email.current.value;
       
        if(enteredEmail.match(regexEmail)){
            setEmailIsValid(true);
            return true;
        }else{
            setEmailIsValid(false);
            email.current.focus();
            return false;
        }


        
    }
    const validatePhone = (value) => {
       
        let regexPhone = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        const enteredPhone = phoneNumber.current.value;
       
        if(enteredPhone.match(regexPhone)){
            setPhoneIsValid(true)
            return true;
        }else{
            setPhoneIsValid(false);
            phoneNumber.current.focus();
            return false;
        }


        
    }

    const submitHandler = (event) =>{
        event.preventDefault();
       
             
        if(validateEmail() && validatePhone()){
            
            const formAdd = {
                email: email.current.value,
                phoneNumber: phoneNumber.current.value,
                country: country.current.value,
                fName: fName.current.value,
                lName: lName.current.value,
                address: address.current.value,
                address2: address2.current.value,
                city: city.current.value,
                state: state.current.value,
                zip: zip.current.value,
            }
           
             checkOutCtx.addItem(formAdd);
            
             setInputField( {
                email: '',
                phoneNumber: '',
                country : '',
                fName: '',
                lName: '',
                address: '',
                address2: '',
                city: '',
                state: '',
                zip: ''
             } )
             setIsSubmited(true);
             props.setEditedInfo(true);
        }
           
        
       

       
    }
    const onEditHandler = () => {
        setIsSubmited(false);
        props.setEditedMethod(true)
        setInputField( {
            email: checkOutCtx.items.email,
            phoneNumber: checkOutCtx.items.phoneNumber,
            country : checkOutCtx.items.country,
            fName: checkOutCtx.items.fName,
            lName: checkOutCtx.items.lName,
            address: checkOutCtx.items.address,
            address2: checkOutCtx.items.address2,
            city: checkOutCtx.items.city,
            state: checkOutCtx.items.state,
            zip: checkOutCtx.items.zip
        } )
        props.setEditedInfo(false);

    };

    


  return (
    <>
    
    {!isSubmited  ? 
    <div className="form_shipping_info">
        <h1 className='checkout_title'>Guest Checkout</h1>
        <h2 className='checkout_subTitle'>Contact information</h2>
        <p className='checkout_info'>We’ll use these details to keep you informed on your delivery.</p>
        <form onSubmit={submitHandler}  autoComplete="on">
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 '>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" ref={email} name="email" className={`${!emailIsValid ? "error" : "" }`} placeholder="Your Email.."
                        onChange={inputsHandler} 
                        value={inputField.email}
                        
                    />
                     {!emailIsValid && <label className="error">Please enter email correct format.</label>}
                
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 '>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" className={`${!phoneIsValid ? "error" : "" }`} ref={phoneNumber} placeholder="Your Phone Number.."
                         onChange={inputsHandler} 
                        value={inputField.phoneNumber}
                        required
                    />
                     {!phoneIsValid && <label className="error">Please enter Number (10-Digit.)</label>}
                    
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 '>
                    <h2 className='checkout_subTitle2'>1. Shipping Information</h2>
                </div>

            
                <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 mr-bt-32'>
                    <label htmlFor="country">Country</label>
                        <select id="country" name="country" ref={country} onClick={countryHandler} onChange={inputsHandler} value={inputField.country} required>
                            <option >Choose</option>
                            {isCSC.countries.map((country,key) => (
                                <option key={key} value={country.isoCode}>{country.name}--({country.isoCode})</option>
                            ))}
                           
                        </select>
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 col mr-bt-32'></div>
                <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12  mr-bt-16'>
                    <label htmlFor="fName">First Name</label>
                    <input type="text" id="fName" name="fName" ref={fName} placeholder="Your First Name..."
                         onChange={inputsHandler} 
                        value={inputField.fName}
                        required
                    />
                        
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 mr-bt-16'>
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" id="lName" name="lName" ref={lName} placeholder="Your Last Name..."
                         onChange={inputsHandler} 
                        value={inputField.lName}
                    />
                        
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 mr-bt-16'>
                    <label htmlFor="address">Street Address</label>
                    <input type="text" id="address" name="address" ref={address} placeholder="Your Street Address..."
                         onChange={inputsHandler} 
                        value={inputField.address}
                        required
                    />
                        
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 mr-bt-16'>
                    <label htmlFor="address2">Street Address 2</label>
                    <label htmlFor="address2" className='optional_label'>Optional</label>
                    <input type="text" id="address2" name="address2" ref={address2} placeholder="Your Address 2..."
                         onChange={inputsHandler} 
                        value={inputField.address2}
                        
                    />
                        
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--6 aem-GridColumn--phone--12 mr-bt-16'>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" ref={city} placeholder="Your City..."
                         onChange={inputsHandler} 
                        value={inputField.city}
                        required
                    />
                        
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--12 mr-bt-16'>
                    <label htmlFor="state">State</label>
                        <select id="state" name="state" ref={state} onClick={stateHandler}  onChange={inputsHandler} value={inputField.state} required>
                            <option >Choose</option>
                            {isCSC.states.map((state,key) => (
                                <option key={key} value={state.name}>{state.name}--({state.countryCode})</option>
                            ))}
                        </select>
                        
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--2 aem-GridColumn--phone--12 mr-bt-16'>
                    <label htmlFor="zip">ZIP</label>
                    <input type="text" id="zip" name="zip" ref={zip} pattern="[0-9]{6}" placeholder="Your ZIP..."
                         onChange={inputsHandler} 
                        value={inputField.zip}

                        required
                    />
                        
                </div>
                <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 mr-bt-16 d-flex justify-content-center'>
                    <button className='checkout__btn' type="submit" value="Submit" >CONTINUE <span className="custom--phone--hide " >TO SHIPPING METHOD</span></button>
                        
                </div>
                
            </div>

        </form>
    </div>
    :<> 
    <div className="view_shipping_info">
        <div className='card border '>
            <div className='card-body '>         
                <div className="aem-Grid aem-Grid--12 ">
                    
                <div className="aem-GridColumn  aem-GridColumn--default--10 aem-GridColumn--phone--10 ">
                    <h2 className='checkout_info'>Shipping Information</h2>
                </div>
                <div className="aem-GridColumn  aem-GridColumn--default--2 aem-GridColumn--phone--2 ">
                    <div className='wrapper float-right'>
                        <img src={process.env.PUBLIC_URL + `/assets/icons/edit-2-new.svg`}  onClick={onEditHandler} alt="Icon" className='icon' />
                        <button className="edit_btn" onClick={onEditHandler}><span className="custom--phone--hide ">Edit</span></button>
                    </div>
                </div>
                <div className="aem-GridColumn  aem-GridColumn--default--7 aem-GridColumn--phone--12 ">
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn  aem-GridColumn--default--7 aem-GridColumn--phone--12 ">
                            <h6 className='checkout_view_info'>{checkOutCtx.items.email}</h6>
                            <h6 className='checkout_view_info'>{checkOutCtx.items.phoneNumber}</h6>
                        </div>
                        <div className="aem-GridColumn  aem-GridColumn--default--5 aem-GridColumn--phone--12 ">
                            <h6 className='checkout_view_info'>{checkOutCtx.items.fName}&nbsp;{checkOutCtx.items.lName}</h6>
                            
                            <h6 className='checkout_view_info'>
                            {checkOutCtx.items.address}&nbsp;{checkOutCtx.items.address2}
                            &nbsp;{checkOutCtx.items.city}&nbsp;{checkOutCtx.items.state}&nbsp;{checkOutCtx.items.country}&nbsp;{checkOutCtx.items.zip}
                            </h6>
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
