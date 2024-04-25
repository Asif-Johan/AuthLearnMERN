import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
export default function Header() {
  return (
    <>
<div className='header-container bg-blue-300 flex justify-between items-center'>
<h1 className="logo text-2xl font-bold flex justify-between items-center font-serif">Auth</h1>

<ul className='flex gap-3 justify-between'>
   <Link to={"/"}><li className="home">Home</li></Link> 
   <Link to='/about'> <li className="About">About</li></Link>
    <Link to='/sign-in'><li className="Sign In">Sign In</li></Link>
</ul>
</div>
    </>
  )
}
