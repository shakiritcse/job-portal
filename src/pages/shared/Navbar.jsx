import { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../contexts/AuthContext";

const Navbar = () => {
  const authInfo=use(AuthContext);
  const navigate=useNavigate
  const {user,signOutUser}=authInfo;
  const handleLogut=()=>{
    signOutUser()
    .then(()=>{
      alert('user logout successfully')
      navigate('/')
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
  const menuItems=
  <>
   <li>  <NavLink to={`/`} className={({isActive})=>(isActive?"underline":'')}>Home</NavLink></li>
    <li><NavLink to={`/register`} className={({isActive})=>(isActive?'underline':'')}>Register</NavLink></li> 
    <li><NavLink to={`/login`} className={({isActive})=>(isActive?'underline':'')}>Login</NavLink></li> 
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end space-x-1">
        {
          user && <p>{user.email}</p>
        }
        {
         user
         ? <Link onClick={()=>handleLogut()} className="btn btn-success">Logout</Link> 
         : <Link className="btn btn-success" to={`/login`}>Login</Link>
        }
          
      </div>
    </div>
  );
};

export default Navbar;
