import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='#' ><BsLinkedin/></a>
        <a href='#' ><BsGithub/></a>
        <a href='#' ><BsFacebook/></a>
        
    </div>
  )
}

export default HeaderSocials