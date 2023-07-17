import React from 'react'
import './Left.css'
import { Link } from 'react-router-dom'

function Left() {
  return (
    <div className='left_con'>
        <div className='bring_con'>
        <div className="bring">
            Bring everyone together to build better products.
        </div>
        <div className='manage'>
            Manage makes it simple for software 
            teams to plan day to day tasks while keeping the 
            larger team goals in view.
        </div>

        <div className='bring_get'>
            <Link  className='get' to='/get'>Get Started</Link>
        </div>
        </div>
        <div className='what_con'>
            <div className="what">What's different about Manage?</div>
            <div className="manage_two">
                Manage provides all the functionality your 
                team needs without the complexity. 
                Our software is tailor-made for modern digital product
                teams.
            </div>
        </div>
        
        {/* <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="1439" height="360"><g fill="#FFF0EC" fill-rule="evenodd" opacity=".071" transform="translate(-171 -373)"><rect  width="310.431" height="708" x="205" y="410" rx="155.215" transform="scale(1 -1) rotate(-45 -1484.244 0)"/><rect width="310.431" height="708" x="1269" y="7" rx="155.215" transform="scale(1 -1) rotate(-45 552.684 0)"/></g></svg> */}
    </div>
  )
}

export default Left