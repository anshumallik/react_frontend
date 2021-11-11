import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const Service = () => {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container pb-5">
                <div className="row gy-4">
                    {Sdata.map((val,index) => {
                        return <Card key={index} title={val.title} imgsrc={val.imgsrc} description={val.desc}/>
                    })}


                </div>
            </div>
        </div>
    )
}

export default Service
