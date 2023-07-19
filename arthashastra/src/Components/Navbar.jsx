import React from 'react'
import image from "../Assets/download.webp"
import "../Styles/Navbar.css"
const Navbar = () => {
  return (
    <>
    <div className=' navbar shadow-md'>
<img src={image}  alt="Arthashastra"/>
<div className=' details'>
    <div className='details-item'>G ANIL KUMAR</div>
    <div className='details-item'>+919391405720</div>
    <div className='details-item'>gandhapudianilkumar0@gmail.com</div>
</div>
<div className=' button'><a href="mailto:gandhapudianilkumar0@gmail.com?">Contact me</a></div>
    </div>
    </>
  )
}

export default Navbar