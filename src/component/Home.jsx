import React, { useState } from 'react'
import './Home.css'
import NavBar from './NavBar'
import Left from './Left'
import Right from './Right'
import Dropdown from './Dropdown'
import Track from './Track'
import Comment from './Comment'
import Simplify from './Simplify'
import Socials from './Socials'
import NavBarDesktop from './NavBarDesktop'

function Home() {

  const[drop_con, setdrop_con]= useState('drop_con')
  const[isMenuClicked, setisMenuClicked]=useState(false)
  const[svgIcon, setsvgIcon]=useState( <svg className='hamburger' xmlns="http://www.w3.org/2000/svg" width="25" height="18"><g fill="#242D52" fill-rule="evenodd"><path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z"/></g></svg>)
  const svgcon=(e)=>{
    e.preventDefault()
    setisMenuClicked(!isMenuClicked)
    if(!isMenuClicked){
      setdrop_con('drop_con2')
      setsvgIcon( <svg className='hamburger' xmlns="http://www.w3.org/2000/svg" width="21" height="22"><path fill="#242D52" fill-rule="evenodd" d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"/></svg>)
      console.log('char')
    }
    else{
      setdrop_con('drop_con')
      setsvgIcon( <svg className='hamburger' xmlns="http://www.w3.org/2000/svg" width="25" height="18"><g fill="#242D52" fill-rule="evenodd"><path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z"/></g></svg>)
    }
  }
  return (
    <html>
    <body>        
        <div className='container'>
          <NavBarDesktop/>
          <NavBar svgcon={svgcon} svgIcon={svgIcon}/>
          <div className='cont'>
           <Dropdown drop_con={drop_con}/>
          <Right />
          <Left/>
          <Track/>
          <Comment/>
          </div>
        </div>
        <footer className='footer'>
          <Simplify/>
        </footer>
        <footer className='second_footer'>
        <Socials/>
        </footer>
    </body>
    </html>
  )
}

export default Home