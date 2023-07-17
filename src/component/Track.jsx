import React from 'react'
import './Track.css'

function Track() {
  return (
    <div className='track_container'>
        <div className='track_con'>
            <div className='track_first'>
                <div className='num'>01</div>
                <div className='title'>Track company-wide progress</div>           
            </div>
            <div className="content">See how your day-to-day tasks fit into the wider vision. Go from 
                tracking progress at the milestone level all the way done to the 
                smallest of details. Never lose sight of the bigger picture again.
            </div>
        </div>

        <div className='track_con'>
            <div className='track_first'>
                <div className='num'>02</div>
                <div className='title'>Advanced built-in reports</div>
            </div>
            <div className="content">
            Set internal delivery estimates and track progress toward company 
            goals. Our customisable dashboard helps you build out the reports 
            you need to keep key stakeholders informed.
            </div>
        </div>

        <div className='track_con'>
            <div className='track_first'>
                <div className='num'>03</div>
                <div className='title'>Everything you need in one place</div>
            </div>
            <div className="content">
            Stop jumping from one service to another to communicate, store files, 
            track tasks and share documents. Manage offers an all-in-one team 
            productivity solution.
            </div>
        </div>
    </div>
  )
}

export default Track