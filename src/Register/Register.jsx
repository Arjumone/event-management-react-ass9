import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
  const {createUser} =useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        console.log("register");
        const form = new FormData(e.currentTarget)
        // const name = form.get("name")
        // const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")

        // create user
        createUser(email,password)
        .then(result=>{
          console.log(result.user);
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
        <p className=" text-3xl font-semibold">Please Register</p>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text" name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text" name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p>Already have an account?<Link to='/login' className=" text-blue-600 font-semibold">Login</Link></p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;