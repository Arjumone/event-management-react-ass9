import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventContainer = ({event}) => {
    const {id,image,event_name,price,description}= event
    return (
        <div>
          
            <div className="card bg-amber-50 shadow-2xl h-[500px] ">
  <figure className=" rounded-lg"><img className=" h-60 p-5 rounded-lg" src={image} alt="Shoes" /></figure>
  <div className="card-body -mt-10 ">
    <h2 className="card-title text-2xl">{event_name}</h2>
    <p className=" font-bold text-xl">{price}</p>
    <p>{description}</p>
    <div className="card-actions justify-center">
      <Link to={`/services/${id}`}><button className="btn -mb-5 text-white bg-sky-400 hover:bg-sky-600">Events Details</button></Link>
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