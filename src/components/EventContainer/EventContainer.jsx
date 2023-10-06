import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventContainer = ({event}) => {
    const {id,image,event_name,price,description}= event
    return (
        <div>
            <div className="card bg-red-50 shadow-2xl ">
  <figure className=" rounded-lg"><img className=" h-60 p-6 " src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{event_name}</h2>
    <p className=" font-bold text-xl">{price}</p>
    <p>Description:{description}</p>
    <div className="card-actions justify-center">
      <Link to={`/event/${id}`}><button className="btn  text-white bg-red-400 hover:bg-red-600">Events Details</button></Link>
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