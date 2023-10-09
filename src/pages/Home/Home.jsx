import { useLoaderData } from "react-router-dom";
import EventContainer from "./EventContainer";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer";


const Home = () => {
    const events = useLoaderData()
    // console.log(events);
    return (
        
        <div>
           
            <Header></Header>
            <div className=" max-w-6xl mx-auto ">
           
           <h2 className=" text-center text-4xl font-bold my-6">All Events</h2>
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
           {
               events.map(event=><EventContainer key={event.id} event={event}></EventContainer>)
           }
           </div>
           
       </div>
       <div className=" max-w-6xl mx-auto my-4 items-center">
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
       </div>
       <Footer></Footer>
        </div>
    );
};

export default Home;