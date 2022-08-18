import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import CartContext from "../../redux/cart-context";
import './header.scss';
import HeaderMenu from './HeaderMenu';
import './headermenu.scss';
import { useHistory } from 'react-router-dom';

export default function Header() {
  let history = useHistory();

  const cartCtx = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  
  

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const activeLinks = (event) => {
    const menuItem = document.querySelector(".header").querySelector(".center").childNodes;
    menuItem.forEach((item) =>{
      item.classList.remove("active");
    });
    event.target.classList.add("active");
  }


  return (
    <header className="header">
      <div className='container'>
        <div className="row">
          <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
            <div className="aem-GridColumn custom--desktop--hide  aem-GridColumn--phone--4 col">
              <div className="headerMenu">
                <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                  <div className="spinner diagonal part-1"></div>
                  <div className="spinner horizontal"></div>
                  <div className="spinner diagonal part-2"></div>
                </label>
                <HeaderMenu />
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--4 logo-center">
              <a href="/" className=""><img className="logo "
              onClick={()=>history.push("/")}
               src={process.env.PUBLIC_URL + `/assets/icons/logo2.png`} alt="logo" />
              </a>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--hide">
              <div className="center">
              <Link to="/" onClick={activeLinks} className="links mr-rt-32 active">Home</Link>
              {/* <Link to="/venia/products" onClick={activeLinks} className="links mr-rt-32 ">productList</Link> */}
              <Link to="/venia/products"   onClick={activeLinks} className="links mr-rt-32">Women</Link>
              <Link to="/venia/products"  onClick={activeLinks} className="links mr-rt-32">Men</Link>
              <Link to="/venia/products"  onClick={activeLinks} className="links mr-rt-32">Electronics</Link>
              <Link to="/venia/products"  onClick={activeLinks} className="links">Jewellery</Link>
              {/* <NavLink to="/venia/products" className={`links mr-rt-32 ${isActive =>  !isActive ? "links mr-rt-32" : "active" }`} >
              Women
              </NavLink> */}
                
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--4 text-right">
              <div>
              <Link to={`/venia/products/cart`}   className=" cart-bg">
              <svg className={`cart-icon ${btnIsHighlighted ? "bump" : ""}`} xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22"><g id="shopping-bag" transform="translate(-2 -1)"><path id="Path_38093" data-name="Path 38093" d="M6,2,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6L18,2Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line id="Line_555" data-name="Line 555" x2="18" transform="translate(3 6)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line><path id="Path_38094" data-name="Path 38094" d="M16,10a4,4,0,0,1-8,0" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></g></svg>
              {/* <img className={`cart-icon bump `} src={process.env.PUBLIC_URL + `/assets/icons/cart.png`} alt="cart icon"/> */}
              <span className='badge badge-warning' id='lblCartCount'>{numberOfCartItems}</span>
              </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </header>
  );
};