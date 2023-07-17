import React from 'react'
import './Comment.css'

function Comment() {
  return (
    <div className='comment_container'>
        <div className="what">
            What they've said 
        </div>
        <div className='slide_con'>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <div className='block'>
              <div className="image_con">
              <img src="./img\avatar-ali.png" alt="" />
            </div>
            <div className="slide_review">
              <div className="slide_name">Ali Bravo</div>
              <div className="slide_content">
              “We have been able to cancel so many other subscriptions since using 
              Manage. There is no more cross-channel confusion and everyone is much 
              more focused.
              </div>
            </div>
              </div>
            </div>

            <div className="slide">
               <div className='block'>
               <div className="image_con">
              <img src="./img\avatar-anisha.png" alt="" />
            </div>
            <div className="slide_review">
              <div className="slide_name">Anisha Li</div>
              <div className="slide_content">
              Manage has supercharged our team’s workflow. The ability to maintain 
              visibility on larger milestones at all times keeps everyone motivated.
              </div>
            </div>
               </div>
            </div>

            <div className="slide">
              <div className='block'>
              <div className="image_con">
              <img src="./img\avatar-richard.png" alt="" />
            </div>
            <div className="slide_review">
              <div className="slide_name">Richard Watt</div>
              <div className="slide_content">
              Manage allows us to provide structure and process. It keeps us organized 
              and focused. I can’t stop recommending them to everyone I talk to!
              </div>
            </div>
                </div> 
            </div>

            <div className="slide">
               <div className='block'>
               <div className="image_con">
              <img src="./img\avatar-shanai.png" alt="" />
            </div>
            <div className="slide_review">
              <div className="slide_name">Shanai Gough</div>
              <div className="slide_content">
              Their software allows us to track, manage and collaborate on our projects 
              from anywhere. It keeps the whole team in-sync without being intrusive..
              </div>
            </div>
               </div>
            </div>
          </div>
        </div>

<button className='get_S'>Get Started</button>
    </div>
  )
}

export default Comment