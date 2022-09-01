import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark justify-content-center'>
            <Link to="/home" className="navbar-brand">TODO LIST</Link>
        </nav>
    </div>
  )
}
export default Navbar