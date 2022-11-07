import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/t-drawing-logo.png";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  let activeStyle = {
    backgroundColor: "#4ADE80",
    color: "black",
  };
  const menuOptions = (
    <>
      <li className="font-semibold ">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="hover:bg-green-400"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="hover:bg-green-400 "
          to="/blogs"
        >
          Blogs
        </NavLink>
        {user?.uid && (
          <>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="hover:bg-green-400 "
              to="/myReviews"
            >
              My Reviews
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="hover:bg-green-400 "
              to="/addService"
            >
              Add Service
            </NavLink>
          </>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar h-20 pt-12 mb-12 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuOptions}
            </ul>
          </div>
          <Link to="/">
            <img className="w-1/2" src={logo} alt="" />
            <h2 className="font-bold">T-Drawing</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuOptions}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <Link to="/login">
              <button className="btn btn-outline text-green-500 hover:bg-green-400 hover:border-none">
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline text-green-500 hover:bg-green-400 hover:border-none">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
