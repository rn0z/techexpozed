import React from 'react';

const ProjectCard = (props) => {
    return (
        <li className="card-block">
            <div className="card-block-body">
                <h2 className="heading-medium">{props.heading}</h2>
                <p className="card-block-text">{props.blurb}</p>
            </div>
        </li>
    )
}

export default ProjectCard;
