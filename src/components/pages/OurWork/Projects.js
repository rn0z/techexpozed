import React from 'react'
import Block from './../../HOC/Block';
import { websites, apps, projects, designs, ux_ui } from "./data";
import ProjectCard from './ProjectCard';

class Projects extends React.Component {

    state={
        websites: [],
        apps: [],
        projects: [],
        designs: [],
        ux_ui: []
    }
    componentDidMount() {
        // Add info from data file into arrays
        this.setState({ 
          websites:  websites,
          apps: apps,
          projects: projects,
          designs: designs,
          ux_ui: ux_ui
        })
    }

    getWebsiteCards() {
        this.websiteCards = this.state.websites.map((website) =>
            <ProjectCard
              key = {website.index}
              heading = {website.heading}
              blurb = {website.blurb}
            />
        );
        return this.websiteCards;
    }

    getAppCards() {
        this.appCards = this.state.apps.map((app) =>
            <ProjectCard
              key = {app.index}
              heading = {app.heading}
              blurb = {app.blurb}
            />
        );
        return this.appCards;
    }

    getProjectCards() {
        this.projectCards = this.state.projects.map((project) =>
            <ProjectCard
              key = {project.index}
              heading = {project.heading}
              blurb = {project.blurb}
            />
        );
        return this.projectCards;
    }

    getDesignCards() {
        this.designCards = this.state.designs.map((design) =>
            <ProjectCard
              key = {design.index}
              heading = {design.heading}
              blurb = {design.blurb}
            />
        );
        return this.designCards;
    }

    getUXUICards() {
        this.ux_uiCards = this.state.ux_ui.map((ux_ui_card) =>
            <ProjectCard
              key = {ux_ui_card.index}
              heading = {ux_ui_card.heading}
              blurb = {ux_ui_card.blurb}
            />
        );
        return this.ux_uiCards;
    }
    
    render() {
        return (
            <Block>
                <div>
                    <div className="row head" >
                        <h1 className="heading-large">Our Work</h1>
                    </div>
                    <ul className="nav nav-tabs nav-justified bold-tabs large-font-130">
                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web">Web</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#app">Apps</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#project">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#design">Design</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#ux-ui">UX/UI</a></li>
                    </ul>
                    <div className="row body" >
                        <div className="col-md-12" >

                        </div>
                        <div className="tab-content">
                            <div id="web" className="tab-pane active">
                                <ul className="card-block-container">
                                    {this.getWebsiteCards()}
                                </ul>
                            </div>
                            <div id="app" className="tab-pane">
                                <ul className="card-block-container">
                                    {this.getAppCards()}
                                </ul>
                            </div>
                            <div id="project" className="tab-pane">
                                <ul className="card-block-container">
                                    {this.getProjectCards()}
                                </ul>
                            </div>
                            <div id="design" className="tab-pane">
                                <ul className="card-block-container">
                                    {this.getDesignCards()}
                                </ul>
                            </div>
                            <div id="ux-ui" className="tab-pane">
                                <ul className="card-block-container">
                                    {this.getUXUICards()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Block>
        )
        
    }
}

export default Projects;
