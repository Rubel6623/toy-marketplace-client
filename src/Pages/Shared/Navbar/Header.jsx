import { Link } from "react-router-dom";
import logo from '../../../assets/image/toy3.png';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Header = () => {
  const {user,logOut}=useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }

  const navItems=<>
  <li><Link className="text-lg font-semibold">Home</Link></li>
  <li><Link to='/allToys' className="text-lg font-semibold">All Toys</Link></li>
  <li>{user&&<Link to='/myToy' className="text-lg font-semibold">My Toys</Link>}</li>
  <li><Link to='/addtoys' className="text-lg font-semibold">Add A Toys</Link></li>
  <li><Link to='/blog' className="text-lg font-semibold">Blogs</Link></li>
  </>

  return (
<div className="navbar bg-base-300">

  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">
      <img className="w-12 h-12 rounded-full mr-1 " src={logo} alt="" />
      Toys Zone
      </Link>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>

  <div className="navbar-end">
    {user?.email?
    <>
              <button
              type="button"
              className=" rounded-full  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-toggle="tooltip"
              data-te-placement="top"
              data-te-ripple-init
              data-te-ripple-color="light"
              title={user?.displayName}
            >
                  <img className="w-12 rounded-full" src={user?.photoURL} data-tip='hello' alt="" />
            </button>
    <button className="btn btn-outline ml-2" onClick={handleLogOut}>Log Out</button>
    </>:
      <Link to='/login'>Login</Link>
      
    }
  </div>
</div>
  );
};

export default Header;