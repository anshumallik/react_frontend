import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="col-md-4 card_Service">
            <div className="card rounded-0">
                <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <NavLink to="/" className="btn btn-outline-primary rounded-0">Read More</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card
