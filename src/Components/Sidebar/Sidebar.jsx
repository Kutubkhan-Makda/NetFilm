import React from 'react'
import "./Sidebar.css"
import logo from "../../Images/Netfilm-logo.png"

const Sidebar = () => {
  return (
    <>
    <img src={logo} alt="logo" className="logo" />

    <div className="sidebar">
      <span className='lord-icon'><lord-icon src="https://cdn.lordicon.com/slduhdil.json"trigger="hover"colors="primary:red"></lord-icon></span>
      <span className='lord-icon'><lord-icon src="https://cdn.lordicon.com/rlizirgt.json" trigger="hover"colors="primary:red"></lord-icon></span>
      <span className='lord-icon'><lord-icon src="https://cdn.lordicon.com/rlizirgt.json" trigger="hover"colors="primary:red"></lord-icon></span>
      <span className='lord-icon'><lord-icon src="https://cdn.lordicon.com/rlizirgt.json" trigger="hover"colors="primary:red"></lord-icon></span>
      <span className='lord-icon'><lord-icon src="https://cdn.lordicon.com/rlizirgt.json" trigger="hover"colors="primary:red"></lord-icon></span>
    </div>
    </>
  )
}

export default Sidebar