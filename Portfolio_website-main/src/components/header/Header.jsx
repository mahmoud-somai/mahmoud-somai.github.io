import React from 'react'
import "./header.css"
import Comp from './Comp'
import ME from '../../assets/me.png'
import HeaderScroll from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm </h5>
        <h1>MAHMOUD SOMAI</h1>
        <h5 className='text-light'> SOFTWARE ENGINEERING</h5>
        <Comp/>
        <HeaderScroll/>
        <div className="me">
           <img src={ME} alt='me'/>
        </div>
        <a href='#contact' className='scroll__down'> Scroll Down</a>

      </div>
    </header>
  )
}

export default Header