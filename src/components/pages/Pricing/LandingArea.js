import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLinks from '../../Navigation/NavbarLinks'
import Block from './../../HOC/Block'

const LandingArea = (props) => {
    return (
        <Block classes="block__wrapper">
            <div className="home__landing-page">
                <div className="row">
                    <div id="landing-navbar" className="col-md-12 row" >
                        <div className="col-md-3" >
                            <Link to="/" ><img className="navbar-logo navbar-logo-full-size" src="./images/logo.svg" alt="logo" /></Link>
                        </div>
                        <div className="col-md-9 navbar-links" >
                            <NavbarLinks/>
                        </div>
                    </div>
                    <div className="col-md-5 left">
                        <div id="paragraph">
                            <h1 classNmae="heading-large">
                                <span className="alternate-heading-color">
                                    Pricing <br />
                                </span>
                            </h1>
                            <p>Hello Pricing</p>
                        </div>
                    </div>
                    <div className="col-md-6 right" >
                        <img src={"./images/our-team/Group266.png"} alt="landing-cover" />
                    </div>
                    <div className="col-md-1">
                        <span><img src="./images/icons/behance-logo.svg" alt="behance-logo"/></span>
                        <span><img src="./images/icons/facebook-logo.svg" alt="facebook-logo" /></span>
                        <span><img src="./images/icons/linkedin-logo.svg" alt="linkedin-logo" /></span>
                        <span><img src="./images/icons/reddit-logo.svg" alt="reddit-logo" /></span>
                        <span><img src="./images/icons/youtube-symbol.svg" alt="youtube-symbol" /></span>
                    </div>
                </div>
            </div>
        </Block>
    )
}

export default LandingArea