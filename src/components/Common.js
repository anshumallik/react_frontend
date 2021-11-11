import React from 'react'
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (
        <section className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pt-md-0 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>Welcome to <strong className="brand-name">{props.name}</strong></h1>
                        <h4 className="my-3 desc_style">
                            We turn your vision into reality by creating unique web and mobile projects</h4>
                        <div className="mt-3 get-Started">
                            <NavLink to={props.visit} className="btn btn-primary">Get Started</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 pt-md-0 pt-lg-5 order-1 order-lg-2">
                        <div className="image_home">
                            <img src={props.imgsrc} alt="HomeImage" className="img-fluid animated" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Common
