import React from 'react';
import Header from "../Navigation/Header";
import Footer from '../Navigation/Footer';
const Layout = (props) => {
    return (
          <div className="main__wrapper" >
            <Header/>
              <main>
                {props.children}
              </main>
              <div> 
                <Footer/>
              </div>
          </div>
    )
}
export default Layout;
