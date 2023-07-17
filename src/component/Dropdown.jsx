import React from 'react'
import { Link } from 'react-router-dom'
import './Dropdown.css'

function Dropdown({drop_con, }) {
  return (
    <div className={drop_con}>     
        <div className='linkdrop_con'>
            <Link className="link_drop" to ='/pricing'>Pricing</Link>
            <Link className="link_drop" to ='/products'>Products</Link>
            <Link className="link_drop" to ='/about'>About Us</Link>
            <Link className="link_drop" to ='/career'>Career</Link>
            <Link className="link_drop" to ='/community'>Community</Link>
       </div>

    </div>
  )
}

export default Dropdown