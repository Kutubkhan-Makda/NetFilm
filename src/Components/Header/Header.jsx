import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../Images/Netfilm-logo.png'
import avtar from '../../Images/avtar.jpg'

const Header = () => {
    const [show, handleshow] = useState(false)

    const transitionHeader = () => {
        if (window.scrollY>100)
        {
            handleshow(true)
        }
        else
        {
            handleshow(false)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll",transitionHeader)
      return ()=> window.removeEventListener("scroll",transitionHeader)
    }, [])
    

  return (
    <>
    <div className={`header ${show && "nav-black"}`}>
        <span>
            <img className="logo" src={logo} alt="logo" />
        </span>
        <span>
            <img className="account" src={avtar} alt="avtar" />
        </span>
    </div>
    </>
  )
}

export default Header