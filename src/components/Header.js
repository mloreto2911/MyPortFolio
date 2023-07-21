import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/DL Logo.png'

export const Header = () => {
  return (

    <div className = "bg-body ">
        <div className = "container">
            <div className = "flex justify-end py-2">
                <Link to = '/' className="h-[75px] w-[75px]"> <img src= {logo} alt="DL Logo" /> </Link>
            </div>
        </div>
    </div>
    
  )
}
