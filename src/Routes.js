import React from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from './components/HOC/Layout';
import Home from "./components/pages/Home";
import OurTeam from "./components/pages/OurTeam";
import OurWork from "./components/pages/OurWork";
import Pricing from "./components/pages/Pricing";
import Contact from "./components/pages/Contact";
const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/contact' exact component={Contact} />
                <Route path='/pricing' exact component={Pricing} />
                <Route path='/our-team' exact component={OurTeam} />
                <Route path='/our-work' exact component={OurWork} />
                <Route path='/' exact component={Home} />
            </Switch>
        </Layout>
    )
}

export default Routes;
