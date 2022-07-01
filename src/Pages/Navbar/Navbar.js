import React from "react";
import logo from "../../Assets/itu-1-removebg-preview.png";
import { NavLink, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar bg-base-300 h-20 md:px-10 text-slate-200 flex justify-between">
      <div>
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/completed">Completed Tasks</NavLink>
            </li>

            <li>
              <NavLink to="todo">To-Do</NavLink>
            </li>
            <li>
              <NavLink to="calendar">Calendar</NavLink>
            </li>
            {user ? (
              <li>
                <button
                  onClick={async () => {
                    await signOut(auth);
                    toast.success("Sign Out Success 🎆");
                  }}
                  className="btn btn-secondary"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <Link to="/login" className="btn btn-secondary">
                Log In
              </Link>
            )}
          </ul>
        </div>
        <div className="flex items-center justify-center ml-auto">
          <img className="w-16" src={logo} alt="logo" />
          <p className="font-semibold text-2xl">Your Task</p>
        </div>
      </div>

      <div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/completed">Completed Tasks</NavLink>
            </li>

            <li>
              <NavLink to="todo">To-Do</NavLink>
            </li>
            <li>
              <NavLink to="calendar">Calendar</NavLink>
            </li>
            {user ? (
              <li>
                <button
                  onClick={async () => {
                    await signOut(auth);
                    toast.success("Sign Out Success 🎆");
                  }}
                  className="btn btn-secondary ml-4"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <Link to="/login" className="btn btn-secondary">
                Log In
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
