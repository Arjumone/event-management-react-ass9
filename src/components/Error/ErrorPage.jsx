import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" mx-auto text-center items-center">
      <h1>404.Oops! Something went wrong!</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <button className=" bg-red-300 p-3 rounded-lg">Go to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
