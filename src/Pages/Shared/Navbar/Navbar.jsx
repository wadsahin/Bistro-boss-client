import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const NavOptions = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/menu">Our Menu</NavLink></li>
    <li><NavLink to="/order/offers">Order Food</NavLink></li>
    <li><NavLink to="/">Contact us</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    <li><NavLink to="/shop">Our Shop</NavLink></li>
    <button className='btn btn-sm'><NavLink to="/login">Sign In</NavLink></button>
    
  </>
  return (
    <div className="navbar justify-between fixed z-10 w-11/12 mx-auto bg-black bg-opacity-60 text-white py-0">
      <div className="navbar-start w-fit">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
            {NavOptions}
          </ul>
        </div>
        <a className="text-2xl font-semibold"><span className='text-orange-500'>Bistro</span> <span>Boss</span></a>
      </div>  
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 items-center">
          {NavOptions}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;