import { useEffect, useState } from "react";
import SeviceCard from "./SeviceCard";

const Services = () => {
    const [ services,   setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            console.log(data);
        })
    },[])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-600">Our Sevices {services.length
                }</h3>
                <h2 className="text-5xl">Our Services area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <SeviceCard 
                        key={service._id} 
                        service={service}
                        ></SeviceCard>)
                }
            </div>
        </div>
    );
};

export default Services;