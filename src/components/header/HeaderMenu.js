import React from 'react'
import { Link } from 'react-router-dom';

export default function HeaderMenu() {
  return (
    <>
    {/* <div className="header2"></div> */}
      
      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <li className='align'></li>
          <li><Link to="/venia">Shop Categories</Link></li>
          <li><Link to="/venia/products">Women</Link></li>
          <li><Link to="/venia/products">Men</Link></li>
          <li><Link to="/venia/products">Smart Gear</Link></li>
          <li><Link to="/venia/products">Accessories</Link></li>
        </ul>
      </div>
    </>
  )
}
