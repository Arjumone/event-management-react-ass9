import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";



const Login = () => {
  const {signIn}= useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        console.log("login");
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")

       signIn(email,password)
       .then(result=>{
        console.log(result.user);

        //  navigate after login
        navigate(location?.state? location.state : "/")
      })
      .catch(error=>{
        console.log(error);
      })

    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <p className=" text-3xl font-semibold">Please Login</p>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password" name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>Do not have an account?<Link to='/register' className=" text-blue-600 font-semibold">Register</Link></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
