import React from "react";
import logo from "../../Assets/itu-1-removebg-preview.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-base-300 h-20 md:px-10 text-slate-200 flex justify-between">
      <div>
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
          </ul>
        </div>
        <div className="flex items-center justify-center ml-auto">
          <img className="w-16" src={logo} alt="logo" />
          <p className="font-semibold text-2xl">Your Task</p>
        </div>
      </div>

      <div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink to="/completed">Completed Tasks</NavLink>
            </li>

            <li>
              <NavLink to="todo">To-Do</NavLink>
            </li>
            <li>
              <NavLink to="calendar">Calendar</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
