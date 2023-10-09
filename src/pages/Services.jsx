import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import Event from "./Event";


const Services = () => {
    const {id} = useParams()
    const events = useLoaderData()
    console.log(events);
    const [evnt,setEvnt] = useState([])

    useEffect(()=>{
        const findEvent = events?.find(evnt=>evnt.id=== id)
        setEvnt(findEvent)
    },[id,events])
    
    return (
        <div className="">
            <div className="bg-sky-500 max-w-6xl mx-auto">
      <Navbar></Navbar>
      </div>
            <div className="">
                <h2 className=" text-center font-semibold my-3 text-3xl">All Events Services are here</h2>
                <div className=" max-w-6xl mx-auto">
                    <Event evnt={evnt}></Event>
                </div>
            </div>
        </div>
    );
};

export default Services;