import React from 'react';
import "./CartItem.scss";

export default function CartItem(props) {
  return (
    <div className="aem-Grid aem-Grid--12 ">
                            
                            <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--4">
                                <div className='card'>
                                    <img src={props.image} alt="product-img" className='img-wrapper'/>
                                </div>
                            </div>

                            <div className="aem-GridColumn  aem-GridColumn--default--9 aem-GridColumn--phone--8">
                               <p className='title cart-item-name'>{props.title.slice(0,20)}</p>
                            </div>
                            
                            <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--8">
                                <div className='card'>
                                    <div className='card-body padding-title card-item'>
                                        {/* <p className='title cart-item-name'>{props.title.slice(0,20)}</p> */}
                                        <p className='price'>Size : Medium</p>
                                        <p className='price'>Color : Storm</p>
                                        <p className='price'>$ {props.price}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn  custom--desktop--hide col aem-GridColumn--phone--4 "></div>
                            <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--8 ">
                                <div className='card'>
                                    <div className='card-body padding-quantity-btn'> 
                                    <div className="quantity">
                                        <button className="minus-btn" type="button"  onClick={props.onRemove}>
                                            -
                                        </button>
                                        <input type="text" name="name" value={props.amount} readOnly/>
                                        
                                        <button className="plus-btn" type="button"onClick={props.onAdd} >
                                            +
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn  aem-GridColumn--default--3  aem-GridColumn--phone--hide">
                                <div className='card mr'>
                                    <div className='card-body'> 
                                    <p className='filter-wrapper'><img src={process.env.PUBLIC_URL + `/assets/icons/edit.svg`} alt="Icon" className='icon' /><span>Edit item</span> </p>
                                    <p className='filter-wrapper'><img src={process.env.PUBLIC_URL + `/assets/icons/trash.svg`} alt="Icon" className='icon' /><button className="remove-btn" type="button" onClick={props.onClear} ><span>Remove</span></button> </p>
                                    <p className='filter-wrapper'><img src={process.env.PUBLIC_URL + `/assets/icons/heart.svg`} alt="Icon" className='icon' /><span>Save</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}
