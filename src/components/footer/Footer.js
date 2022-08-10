import React from "react";
import './footer.scss';

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
      
        <div className="row">
          <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
                <p className="ref-title">Account</p>
                <ul className="ref-links">
                    <li><a>Sign In</a></li>
                    <li><a>Register</a></li>
                    <li><a>Order Status</a></li>
                </ul>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
                <p className="ref-title">About Us</p>
                <ul className="ref-links">
                    <li><a>Our Story</a></li>
                    <li><a>Careers</a></li>
                </ul>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
                <p className="ref-title">Help</p>
                <ul className="ref-links">
                    <li><a>Contact Us</a></li>
                    <li><a>Order Status</a></li>
                    <li><a>Returns</a></li>
                </ul>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
                <p className="ref-title">Follow Us!</p>
                <ul className="ref-links">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore.</li>
                </ul>
                <a>
                  <img className="icons mr-rt-32" src={process.env.PUBLIC_URL + `/assets/icons/instagram.svg`} alt="instagram-icon" />
                </a>
                <a>
                 <img className="icons mr-rt-32"  src={process.env.PUBLIC_URL + `/assets/icons/facebook.svg`} alt="facebook-icon" />
                </a>
                <a>
                 <img className="icons mr-rt-32"  src={process.env.PUBLIC_URL + `/assets/icons/twitter.svg`} alt="twitter-icon" />
                </a>
            </div>
            
          </div>
        </div>
        <div className="footerline"></div>
        <div className="row">
          <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12 reverse">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide logo-center">
              <img className="logo " src={process.env.PUBLIC_URL + `/assets/icons/logo.png`} alt="logo" />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
              <div className="center">
                <span className="copyright">
                  © Company Name Address Ave, City Name, State ZIP
                </span>
              </div>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 text-right text-center">
              <div className="align">
                <a className="term-policy mr-rt-32">
                  <span>Terms of Use</span>
                </a>
                <a className="term-policy mr-rt-32 ">
                  <span>Privacy Policy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
