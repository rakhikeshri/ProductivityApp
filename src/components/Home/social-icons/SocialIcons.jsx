import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './socialicons.css'

const SocialIcons = () => {
  return (
    <div className='header__socials'>
        <div className='line'></div>
        <a href="https://www.linkedin.com/in/rakhi-keshri-1a3018214/" targer="_blank"><BsLinkedin /></a>
        <a href="https://github.com/rakhikeshri" targer="_blank"><FaGithub /></a>
        <div className='line'></div>
    </div>
  )
}

export default SocialIcons
