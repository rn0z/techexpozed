import React from 'react';
import Block from "../../HOC/Block";
import OurWorkCard from './OurWorkCard';
const OurWork = () => {
  return (
    <Block classes="block__wrapper">
      <div className="home__our-work" >
        <div className="row head" >
          <h1 className="heading-large">Our Work&nbsp;
              <span className="heading-medium">Bring the best thing to the world</span>
          </h1>
        </div>
        <div className="row body" >
          <div className="col-md-12" >
            <ul className="nav nav-tabs">
              <li><a className="active" data-toggle="tab" href="#web">Web</a></li>
              <li><a data-toggle="tab" href="#app">App</a></li>
              <li><a data-toggle="tab" href="#project">Projects</a></li>
              <li><a data-toggle="tab" href="#design">Design</a></li>
              <li><a data-toggle="tab" href="#ux-ui">UX/UI</a></li>
            </ul>
          </div>
          <div className="tab-content">
            <OurWorkCard 
             id="web" 
             classActive="active show"
             image="./images/sample.jpg"
             text="Some quick"
             more="see more"
             />
            <OurWorkCard
              id="app"
              classActive=""
              image="./images/sample.jpg"
              text="Some app"
              more="see more"
            />
            <OurWorkCard
              id="project"
              classActive=""
              image="./images/sample.jpg"
              text="Some project"
              more="see more"
            />
            <OurWorkCard
              id="design"
              classActive=""
              image="./images/sample.jpg"
              text="Some design"
              more="see more"
            />
            <OurWorkCard
              id="ux-ui"
              classActive=""
              image="./images/sample.jpg"
              text="Some ux"
              more="see more"
            />    
          </div>
        </div>
      </div>
    </Block>
  )
}

export default OurWork;
