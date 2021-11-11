import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
    const InputEvent = (event) => {
        const {name,value} = event.target;

        setData((prevVal) => {
            return{
                ...prevVal,
                [name] : value,
            }
        })
    }
    const formSubmit = (event) => {
       event.preventDefault();
       alert(`My name is ${data.name} My email is ${data.email} My phone number is ${data.phone} Message is ${data.message}`)
    }
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name:</label>
                                <input onChange={InputEvent} name="name" value={data.name} type="text" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email:</label>
                                <input onChange={InputEvent} name="email" value={data.email} type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="form-label">Phone:</label>
                                <input onChange={InputEvent} name="phone" value={data.phone} type="phone" className="form-control" placeholder="Enter Phone Number" />
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message:</label>
                                <textarea onChange={InputEvent} name="message" value={data.message} col="" row="3" className="form-control" placeholder="Enter your message..." />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
