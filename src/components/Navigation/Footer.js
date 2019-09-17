import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper" >
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <ul className="margin-left-50 large-font-130">
              <li>About Us</li>
              <li>Testimonials</li>
              <li>Terms</li>
              <li>SiteMap</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-8 col-lg-9">
            <ul className="margin-left-50 large-font-130">
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Community</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
        <div className="footer__logo" >
          <div className="row" >
            <div className="col-xs-4 col-md-6 col-lg-5">
              <Link to="/" ><img id="footer-logo" src="./images/logo.svg" alt="Tech Expozed home page" /></Link>
            </div>
            <div className="col-xs-8 col-md-6 col-lg-7 vertical-container">
              <span className="vertical-center large-font-130">&copy; 2019 Tech Expozed Ltd. All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
