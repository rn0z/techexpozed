import React from 'react'

const CoverProfileCard = (props) => {
    const avatarBackground = {
        backgroundImage: 'url(./images/our-team/Polygon3.png)',
        backgroundSize: 'cover',
        backgroundOrigin: '',
        backgroundAttachment: '',
        backgroundClip: '',
        backgroundBlendMode: '',
        backgroundPosition: 'right 15px',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="avatar">
            <img alt={props.name} src={props.picture} style={avatarBackground} />
            <h4 className="position">{props.position}</h4>
        </div>
    )
}

export default CoverProfileCard