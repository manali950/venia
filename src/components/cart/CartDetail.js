import React, { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom';
import CartContext from '../../redux/cart-context';
import "./cartDetail.scss";
import CartItem from './CartItem';

export default function CartDetail() {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const clearCartHandler = (id) => {
        cartCtx.clearCart(id);
      };

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item , amount:1});
      };
      
      const changeCollHandler = () => {
        alert("Calling function click again");
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
        }
      }
      let content = <p>Your Cart is Empty.</p>;
      if(cartCtx.items.length !== 0){
        content = cartCtx
        .items.map((item) => ( 
            <CartItem key={item.id}
            title={item.title} 
            image={item.image}
            price={item.price} 
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
            onClear={clearCartHandler.bind(null, item.id)}
            />
        ));
      }
      let history = useHistory();
      const goBack = () => {
        history.push("/venia/products");
      }
      

      

  return (
    <>
    <section className='cartDetail'>
        <div className='container'>
            <div className='row'>
                <div className='aem-Grid aem-Grid--12'>
                    <div className='aem-GridColumn  aem-GridColumn--default--12 aem-GridColumn--phone--12 d-flex justify-content-center'>
                        <div>
                        <p className='cart-title'>Your Shopping Bag</p>
                        <div className='line'></div>
                        </div>
                        
                    </div>
                    <div className='aem-GridColumn  aem-GridColumn--default--8 aem-GridColumn--phone--12'>
                   
                    {content}
                    </div>
                    <div className='aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--12'>
                        {cartCtx.items.length !== 0 ? <>
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
                            <div className="addtocart">
                                 {hasItems &&<button className='btn btn-blue addtocartBtn' ><Link to="/venia/products/checkout"><i className="fa fa-lock"></i> CHECKOUT</Link></button>}
                            </div>
                            <div className="addtocart">
                                 {hasItems &&<img src={process.env.PUBLIC_URL + `/assets/img/pp.png`} className='btn ppBtn ' ></img>}
                            </div>
                        </div>
                        </div>
                        </> : <><p>Go back<button onClick={goBack}> <i className='fa fa-angle-double-left'></i></button></p>
                        
                        </>}
                    </div>

                </div>
            </div>
            <div className='row'>
                <div className='aem-Grid aem-Grid--12'>
                    <div className='aem-GridColumn  aem-GridColumn--default--8 aem-GridColumn--phone--12 d-flex padding-lt-rt-32'>
                    {cartCtx.items.length !== 0 ? <>
                        <button type="button" onClick={changeCollHandler} className="collapsible">Estimate your Shipping <i className='fa fa-angle-down float-right mr-lt-10 ' ></i> <span className='float-right custom--phone--hide'>Shipping to 91001   </span></button>
                                <div className="content">
                                    <p>very bad example </p>
                                </div>
                            <button type="button" onClick={changeCollHandler} className="collapsible">Enter a Coupon Code <i className='fa fa-angle-down float-right'></i> <span className='float-right custom--phone--hide'>- $100 Discount</span> </button>
                                <div className="content">
                                    <p>very bad example </p>                            
                                </div>
                            <button type="button" onClick={changeCollHandler} className="collapsible">Apply Gift Card <i className='fa fa-angle-down float-right'></i>  </button>
                                <div className="content">
                                    <p>very bad example </p>                            
                                </div>
                        </> : ""}
                            
                        
                    </div>
                    <div className='aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--12 d-flex  col'>

                    </div>
                </div>
            </div>
        
        </div>
        
    </section>
   
    </>
  )
}
