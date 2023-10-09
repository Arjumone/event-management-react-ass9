import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
  const {user,logout} = useContext(AuthContext)

  const handleSignOut = ()=>{
          logout()
          .then(result=>{
            console.log(result.user);
          })
          .catch(error=>{
            console.log(error);
          })
  }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/team'>Team Members</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div className="navbar text-sky-400 text-xl font-bold max-w-6xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown gap-6">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl font-bold text-sky-500">Entertain<span className=" text-sky-500">Events</span></a>
  </div>
  <div className="navbar-center sm:hidden lg:display  lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <button onClick={handleSignOut} className=" text-amber-400 btn">Sign Out</button>
      :
    <Link to="/login">
      <button className=" text-amber-400 btn">Login</button>
    </Link>
    }
  </div>
</div>
    );
};

export default Navbar;