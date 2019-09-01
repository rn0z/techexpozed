import React from 'react'
import { Link } from "react-router-dom";
import Block from './../../HOC/Block';
import NavbarLinks from '../../Navigation/NavbarLinks';

const LandingArea = () => {
    return (
        <Block classes="block__wrapper">
            <div className="home__landing-page" >
                <div className="row" >
                    <div id="landing-navbar" className="col-md-12 row" >
                        <div className="col-md-3" >
                            <Link to="/" ><img className="navbar-logo navbar-logo-full-size" src="./images/logo.svg" alt="logo" /></Link>
                        </div>
                        <div className="col-md-9 navbar-links" >
                            <NavbarLinks/>
                        </div>
                    </div>
                </div>
            </div>
        </Block>
    )
}

export default LandingArea;
