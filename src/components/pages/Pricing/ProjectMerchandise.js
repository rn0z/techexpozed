import React from 'react'
import Block from '../../HOC/Block'
import { websites, apps, projects, designs, ux_ui } from "./data";
import ProjectCard from './ProjectCard'

class ProjectMerchandise extends React.Component {
    
    state = {
        websites : [],
        apps     : [],
        projects : [],
        designs  : [],
        ux_ui    : []
    }
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.setState({ 
          websites : websites,
          apps     : apps,
          projects : projects,
          designs  : designs,
          ux_ui    : ux_ui
        })
    }
    
    getWebsiteCards() {
        return this.state.websites.map((web) => {
            return (
                <ProjectCard data={web} />
            )
        })
    }

    getAppCards() {

    }

    getProjectCards() {

    }

    getDesignCards() {

    }

    getUXUICards() {

    }

    render() {

        return (
            <Block>
                <div>
                    <div className="row head">
                        <h1></h1>
                    </div>
                    <ul className="nav nav-tabs nav-justified bold-tabs large-font-150">
                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web">Web</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#app">Apps</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#project">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#design">Design</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#ux-ui">UX/UI</a></li>
                    </ul>
                    <div className="row boy">
                        <div className="tab-content">
                            <div id="web" className="tab-pane active">
                                <ul className="card-block-container">
                                    {this.getWebsiteCards()}
                                </ul>
                            </div>
                            <div id="app" className="tab-pane">
                                <ul className="card-block-container">
                                    <h1>Tab pane app</h1>
                                </ul>
                            </div>
                            <div id="project" className="tab-pane">
                                <ul className="card-block-container">
                                    <h1>Tab pane project</h1>
                                </ul>
                            </div>
                            <div id="design" className="tab-pane">
                                <ul className="card-block-container">
                                    <h1>Tab pane design</h1>
                                </ul>
                            </div>
                            <div id="ux-ui" className="tab-pane">
                                <ul className="card-block-container">
                                    <h1>Tab pane ux/ui</h1>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Block>
        )
    }
}

export default ProjectMerchandise