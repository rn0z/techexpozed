import React from 'react';
import Block from "../../HOC/Block";

const OurService = () => {
  return (
    <Block classes="block__wrapper">
      <div className="home__our-service" >
        <div className="row head">
          <h1 className="heading-large">Our Services</h1>
          <span className="heading-medium">Bring the best thing to the world</span>
        </div>
        <div className="row body" >
          <div className="col-md-6 row" >
            <div className="col-md-6" >
              <img src="./images/home/ourservice_product.svg" alt="developer" />
            </div>
            <div className="col-md-6">
              <span className="heading-small" >Mobile <br/> Development</span>
            </div>
          </div>
          <div className="col-md-6 row" >
            <div className="col-md-6">
              <img src="./images/home/ourservice_developer.svg" alt="product" />
            </div>
            <div className="col-md-6">
              <span className="heading-small" >Web <br/> Development</span>
            </div>
          </div>
          <div className="col-md-6 row" >
            <div className="col-md-6">
              <img src="./images/home/ourservice_server.svg" alt="server" />
            </div>
            <div className="col-md-6">
              <span className="heading-small" >Cloud Server</span>
            </div>
          </div>
          <div className="col-md-6 row" >
            <div className="col-md-6">
              <img src="./images/home/ourservice_marketing.svg" alt="marketing" />
            </div>
            <div className="col-md-6">
              <span className="heading-small" >Marketing Online</span>
            </div>
          </div>
        </div>
      </div>
    </Block>
  )
}

export default OurService;
