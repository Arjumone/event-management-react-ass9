import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin=(e)=>{
        e.preventDefault()
        // console.log("login");

    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
      <p className=" text-3xl font-semibold">Please Login</p>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
  );
};

export default Login;
