import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './socialicons.css'

const SocialIcons = () => {
  return (
    <div className='header__socials'>
        <div className='line'></div>
        <a href="https://linkedin.com" targer="_blank"><BsLinkedin /></a>
        <a href="https://github.com" targer="_blank"><FaGithub /></a>
        <div className='line'></div>
    </div>
  )
}

export default SocialIcons
