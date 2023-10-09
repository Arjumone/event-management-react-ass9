import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventContainer = ({event}) => {
    const {id,image,event_name,price,description}= event;
    const handleEvents =()=>{
      const addEventArray = [];

      const eventItems = JSON.parse(localStorage.getItem("event"))

      if(!eventItems){
        addEventArray.push(event);
        localStorage.setItem("event",JSON.stringify(addEventArray));
        alert ("successfully added")
      }
      else{
        const isExits = eventItems.find(event = event.id === id)
        if(!isExits){
          addEventArray.push(...eventItems,event)
          localStorage.setItem("event",JSON.stringify(addEventArray))
          alert("good job")
        }
        else{
          alert("error")
        }
      }
    }
    return (
        <div>
          
            <div className="card bg-sky-100 shadow-2xl h-[500px] ">
  <figure className=" rounded-lg"><img className=" h-60 p-5 rounded-lg" src={image} alt="Shoes" /></figure>
  <div className="card-body -mt-10 ">
    <h2 className="card-title text-2xl">{event_name}</h2>
    <p className=" font-bold text-xl">{price}</p>
    <p>{description}</p>
    <div className="card-actions justify-center">
      <Link to={`/services/${id}`}><button onClick={handleEvents} className="btn -mb-5 text-white bg-sky-400 hover:bg-sky-600">Events Details</button></Link>
    </div>
  </div>
</div>

        </div>
    );
};
EventContainer.propTypes={
    event:PropTypes.object.isRequired
}
export default EventContainer;