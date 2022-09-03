import React from 'react'
import './home.css'
import Quote from './Quote/Quote.js'
import SocialIcons from './social-icons/SocialIcons'
import image from './calendar.png'

const Home = () => {
  return (
    <div className='home_container'>
      <div className='home-section'>
        <div className='left-side'>
          <Quote />
        </div>
        <div className='right-side'>
          <div className='image-box'>
            <img className='image'src={image} alt='productivity app'></img>
          </div>
        </div>
        <div className='social-icons-box'>
          <SocialIcons />
        </div>
      </div>
    </div>
  )
}

export default Home
