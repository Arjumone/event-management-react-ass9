import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" mx-auto text-center items-center">
            <h2>404</h2>
            <p>Oops!!! Not found page</p>
            <Link to="/" ><button className=" bg-red-300 p-3 rounded-lg">Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;