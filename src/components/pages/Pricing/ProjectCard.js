import React from 'react'
import { relative } from 'path'

function numberWithCommas(num) {
    return num.toLocaleString()
}

const ProjectCard = (props) => {
    const d = props.data
    
    return (
        <li className="card-block">
            <div className="card-block-head">
                <h4>{d.package}</h4>
                <h2 className="heading-medium"><span>$</span>{numberWithCommas(d.price)}</h2>
                <hr/>
            </div>
            <div className="card-block-body">
                <div className="card-block-text">
                    <p>{d.feature.amountOfDesigner} Designer Account</p>
                    <p>Hosting & CMS for {d.feature.hosting} sites</p>
                    <p>{d.feature.activeProject} active Projects</p>
                    <p>{d.feature.spaceGB} GB of Space</p>
                    <p>Up to {d.feature.amountOfDesigner} Team Members</p>
                    <p style={d.feature.isAccountSupport? {}:{textDecoration: 'line-through'}}>Account Support</p>
                    <p style={d.feature.isUnlimitedClient? {}:{textDecoration: 'line-through'}}>Unlimited Client</p>
                    <p><a href="http://localhost:3000/our-team"><u>more information</u></a></p>
                </div>
                <button className="buttonCard">Purchase</button>
            </div>
        </li>
    )
}

export default ProjectCard