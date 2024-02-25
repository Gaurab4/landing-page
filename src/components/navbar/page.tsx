"use client"
import React, { useState, useEffect } from 'react';

type Props = {};

const Navbar = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState('absolute');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDropdownPosition('fixed');
      } else {
        setDropdownPosition('absolute');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar shadow-2xl bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-[#4d30ff] lg:ml-28 ml-12 ">Leap Advantage</a>
      </div>
      <div className="navbar-end">

        {/* Dropdown for small screens */}
        <div className="dropdown block lg:hidden relative">
          <div tabIndex={0} role="button" onClick={toggleMenu} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
        </div>

        {/* For Masters - Displayed for larger screens */}
        <a className="btn mr-28  btn-outline text-[#443eff] text-l hidden pt-4 lg:block">For Masters</a>
      </div>
    </div>
  );
};

export default Navbar;
