import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavbarLinks from './NavbarLinks';
class Header extends Component {
  render() {
    return (
      <header>
        <div id="navbar" >
          <nav className="container" >
            <div className="row">
              <div className="col-md-4" >
                <Link to="/" ><img className="navbar-logo" src="./images/logo.svg" alt="logo"/></Link>
              </div>
              <div className="col-md-7 navbar-links" >
                <NavbarLinks/>
              </div>
            </div>
          </nav>
          <button ref="Open" id="sideNavOpen" title="Open navigation" aria-label="Open navigation" aria-expanded="false" onClick={this.openNav}>Menu &#9776;</button>
          <nav id="myNav" ref="myNav" className="overlay">
            <button className="closebtn" title="Close navigation" aria-label="Close navigation" onClick={this.closeNav}>&times;</button>
            <div className="overlay-content">
              <Link to="/" onClick={this.closeNav}>Home</Link>
              <Link to="/our-work" onClick={this.closeNav}>Our Work</Link>
              <Link to="/our-team" onClick={this.closeNav}>Our Service</Link>
              <Link to="/pricing" onClick={this.closeNav}>Pricing</Link>
              <Link to="/contact" onClick={this.closeNav}>Contact</Link>
            </div>
          </nav>
        </div>
      </header>
    )
  }
  openNav = () => {
    var myNav = document.getElementById("myNav");
    myNav.style.display = "block";
    setTimeout(function() { myNav.style.height = "100%"; }, 250);
    this.updateExpandedState();
  }
  closeNav = () => {
    var myNav = document.getElementById("myNav");
    myNav.style.height = "0%";
    setTimeout(function() { myNav.style.display = "none" }, 400);
    this.updateExpandedState();
  }

  updateExpandedState = () => {
    var navButton = document.getElementById("sideNavOpen");
    var expanded = navButton.getAttribute('aria-expanded') === 'true' || false;
    navButton.setAttribute('aria-expanded', !expanded);
  }
  componentDidMount() {
    var navbar = document.getElementById("navbar");
    navbar.style.top = "-107px"; 

    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-107px";
      }
    }
  }
}
export default Header;