import React from 'react';

const OurWorkCard = (props) => {
    return (
        <div id={props.id} className={`tab-pane fade ${props.classActive}`}>
            <div className="row" >
                <div className="card col-md-4" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={props.image} alt="Card" />
                    <div className="card-body">
                        <p className="heading-small card-text">{props.text}</p>
                    </div>
                </div>
                <div className="card col-md-4" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={props.image} alt="Card" />
                    <div className="card-body">
                        <p className="heading-small card-text">{props.text} </p>
                    </div>
                </div>
                <div className="card col-md-4" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={props.image} alt="Card" />
                    <div className="card-body">
                        <p className="heading-small card-text">{props.text} </p>
                        <button className="btn button" >{props.more} &#8594;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWorkCard;
