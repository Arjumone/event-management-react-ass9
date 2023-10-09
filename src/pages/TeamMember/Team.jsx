import PropTypes from 'prop-types';


const Team = ({team}) => {
    const{persone_name,phone,address,partner_name,image}= team
    return (
        <div>
           <div className="card card-side bg-base-100 shadow-xl p-3 bg-sky-100">
  {/* <figure><img src={image} alt="Movie"/></figure> */}
  <div className="card-body">
    <h2 className="card-title">Name:{persone_name}</h2>
    <p>Phone:{phone}</p>
    <p>Address:{address}</p>
    <p>Partner:{partner_name}</p>
  </div>
</div>
        </div>
    );
};
Team.propTypes={
    team:PropTypes.object
}
export default Team;