import { useLoaderData } from "react-router-dom";
import EventContainer from "./EventContainer";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Home = () => {
    const events = useLoaderData()
    // console.log(events);
    useEffect(()=>{
      Aos.init({duration:2000})
    },[])
    return (
        
        <div>
           
            <div data-aos="fade-up">
            <Header></Header>
            </div>
            <div className=" max-w-6xl mx-auto overflow-x-hidden "data-aos="fade-down">
           
           <h2 className=" text-center text-4xl font-bold my-6">All Events</h2>
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
           {
               events.map(event=><EventContainer key={event.id} event={event}></EventContainer>)
           }
           </div>
           
       </div>
       <div className=" max-w-6xl mx-auto my-4 items-center" data-aos="fade-up">
       <div className="card bg-base-100 shadow-xl image-full w-full h-[400px]">
  <figure><img src="https://i.ibb.co/ynhP48X/cc.jpg" alt="Shoes" /></figure>
  <div className="card-body text-center items-center mt-10">
    <h2 className="card-title text-2xl">50% less offer!!!</h2>
    <p className="text-lg">Time is too short,Hurry Up...</p>
    <div className="card-actions justify-center">
      <button className="btn bg-sky-700 text-white">Booking Now</button>
    </div>
  </div>
</div>
              <h2 className=" my-2 text-center text-3xl font-bold ">Choose the Logo for Events</h2>
            <div className=" max-w-6xl mx-auto flex  my-4 gap-5 justify-center items-center bg-sky-200 p-5 rounded-lg"data-aos="fade-down">
              <img className=" h-44 w-44 rounded-full" src="https://i.ibb.co/S500GB9/1.jpg" alt="" />
              <img className=" h-44 w-44 rounded-full" src="https://i.ibb.co/VvdHSYc/2.jpg" alt="" />
              <img className=" h-44 w-44 rounded-full" src="https://i.ibb.co/R44P1tr/3.jpg" alt="" />
              <img className=" h-44 w-44 rounded-full" src="https://i.ibb.co/Yy9pWjZ/4.jpg" alt="" />
            </div>
       </div>
       <Footer></Footer>
        </div>
    );
};

export default Home;