import React from 'react';
import OurService from './OurService';
import LandingPage from './LandingPage';
import OurWork from './OurWork';
import Comments from './Comments';
const Home = () => {
    return (
        <div className="content">
            <LandingPage/>
            <OurService/>
            <OurWork/>
            <Comments/>
        </div>
    )
}

export default Home;
