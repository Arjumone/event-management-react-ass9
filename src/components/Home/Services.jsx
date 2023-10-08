import { useParams } from "react-router-dom";


const Services = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <h2>servicesssss{id}</h2>
        </div>
    );
};

export default Services;