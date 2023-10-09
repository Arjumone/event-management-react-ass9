import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Services = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 lg:grid-cols-3">
                <h2>Services</h2>
                <div>
                    <p>{}</p>
                </div>
            </div>
        </div>
    );
};

export default Services;