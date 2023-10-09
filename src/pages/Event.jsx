

const Event = ({evnt}) => {
    // console.log(evnt);
    const {image,price,event_name,members_name,address,owner_name,email,phone}=evnt
    return (
        <div className=' max-w-6xl mx-auto flex gap-8'>
           <div className=' rounded-lg'>
           <img className=' h-96 rounded-lg items-center' src={image} alt="" />
           </div>
           <div className=' bg-sky-200 text-center justify-center items-center p-8 rounded-lg'>
            <p className=' text-xl font-bold'>{owner_name}</p>
            <p className=' text-lg font-semibold'>{event_name}</p>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <p>Address:{address}</p>
            <p>Price:{price}</p>
           </div>
        </div>
    );
};

export default Event;