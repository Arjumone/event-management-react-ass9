import { useLoaderData } from "react-router-dom";
import EventContainer from "../EventContainer/EventContainer";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    const events = useLoaderData()
    // console.log(events);
    return (
        
        <div>
            <Navbar></Navbar>
            
            <div className=" max-w-6xl mx-auto ">
           
           <h2 className=" text-center text-4xl font-bold my-6">All Events</h2>
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
           {
               events.map(event=><EventContainer key={event.id} event={event}></EventContainer>)
           }
           </div>
           
       </div>
       
        </div>
    );
};

export default Home;