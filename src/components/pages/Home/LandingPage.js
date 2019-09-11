import React from 'react';
import { Link } from "react-router-dom";
import Block from "../../HOC/Block";
import { landingAreaData } from "./data";
import NavbarLinks from '../../Navigation/NavbarLinks';
import { restartAnimation, enterAnimation, exitAnimation } from "../../resusable/Animations";

class LandingPage extends React.Component {
    state={
        sections: [],
        section: {},
        numberOfSections: 0
    }
    componentDidMount() {
        // Add sections from section data file into sections array
        this.setState({
            sections: landingAreaData,
            section: landingAreaData[0],
            numberOfSections: landingAreaData.length
        })
    }

    next = () => { // Next section function
        var paragraph = document.getElementById("paragraph");
        enterAnimation(paragraph);
        restartAnimation(paragraph)

        setTimeout(() => {
            exitAnimation(paragraph)
            let newIndex = this.state.section.index + 1;
            if (newIndex > (this.state.numberOfSections - 1)) {
                newIndex = 0;
            }
            restartAnimation(paragraph)
            this.setState({ section: this.state.sections[newIndex] });
        }, 1000);
        setTimeout(() => {
            paragraph.style.opacity = "1";
        }, 2000);
    }
    
    prev = () => { // Previous section function
        var paragraph = document.getElementById("paragraph");
        enterAnimation(paragraph);
        restartAnimation(paragraph);

        setTimeout(() => {
            exitAnimation(paragraph);
            let newIndex = this.state.section.index - 1;
            if (newIndex < 0) {
                newIndex = this.state.numberOfSections - 1;
            }
            restartAnimation(paragraph)
            this.setState({ section: this.state.sections[newIndex] });
        }, 1000);
        setTimeout(() => {
            paragraph.style.opacity = "1";
        }, 2000);
    }
    onDotClick = (i) => {
        if(i === this.state.section.index) return
        this.getParahByIndex(i);
    }
    getParahByIndex = (i) => {
        var paragraph = document.getElementById("paragraph");
        enterAnimation(paragraph);
        restartAnimation(paragraph); // Fade out parah

        setTimeout(() => {
            exitAnimation(paragraph);
            restartAnimation(paragraph) // Fade in the next parah
            this.setState({ section: this.state.sections[i] });
        }, 1000);

        setTimeout(() => {
            paragraph.style.opacity = "1";
        }, 2000);
    }
    render(){
        const sections = !this.state.sections ? '' : this.state.sections;
        const { heading1, heading2, parah, seeMore, image } = !this.state.section ? '' : this.state.section;
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
                        <div className="col-md-5 left" >
                            <div id="paragraph" >
                                <h1 className="heading-large">
                                    <span className="alternate-heading-color">
                                        {heading1} <br/>
                                        {heading2}
                                    </span>
                                </h1>
                                <p>{parah}</p>
                                <Link to={`${seeMore}`} className="btn button" >See more &#8594;</Link><br /><br />
                            </div>
                            <div className="dot dot-landing-area" >
                                {
                                    sections.map((section, i) => (
                                        <button className={`dot__button ${this.state.section.index===i ? 'active':''}`} key={i} 
                                        onClick={() => this.onDotClick(section.index)} aria-label={"Read section: " + section.heading1 + " " + section.heading2} title={"Read section: " + section.heading1 + " " + section.heading2}>&nbsp;</button>
                                    ))
                                }
                            </div>
                            <div className="col-md-8 col-md-offset-4 first text-align-center">
                                <button onClick={this.prev} aria-label="Previous section" title="Previous section" className="left-chevron-button"></button>
                                <button onClick={this.next} aria-label="Next section" title="Next section" className="right-chevron-button margin-left-50"></button>
                            </div>
                        </div>
                        <div className="col-md-6 right" >
                            <img src={`${image}`} alt="landing-cover" />
                        </div> 
                        <div className="col-md-1 ">
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
}

export default LandingPage;
