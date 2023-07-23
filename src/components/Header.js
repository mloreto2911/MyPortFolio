import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/DL Logo.png'

export const Header = () => {
  return (
    
    <>
    {/* <div className="py-12"></div> */}
    <div className = "bg-body w-full flex fixed">
        <div className = "container">
            <div className = "flex justify-end py-2">
                <Link to = '/' className="h-[100px] w-[100px]"> <img src= {logo} alt="DL Logo" /> </Link>
            </div>
        </div>
    </div>
    </>
    
  )
}
