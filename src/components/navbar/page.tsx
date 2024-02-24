import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar  shadow-2xl bg-base-100 ">
        <div className="navbar-start">    
            <a className="btn btn-ghost text-xl text-[#4d30ff] ml-28 ">Leap Advantages</a>
        </div>
        <div className="navbar-end">
            <a className="btn mr-28  btn-outline text-[#443eff] text-l  ">For Masters</a>
        </div>
        </div>
  )
}

export default Navbar