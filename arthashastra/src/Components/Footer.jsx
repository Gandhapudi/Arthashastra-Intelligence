import React from 'react'
import image from "../Assets/download.webp"
import "../Styles/Footer.css"
import { FaGit, FaLinkedin, FaProjectDiagram } from "react-icons/fa"
const Footer = () => {
  return (
    <>
    <div className=' shadow-2xl shadow-black footer  '>
        <div className=' link-content'><img src={image} className=' image2' /><a className='link' id="link" href="https://arthashastra.ai/" rel="noopener noreferrer"  target="_blank">Link to Arthashastra</a></div>
         <div className='  footer-content-1 '>
            <div className=' footer-content-item'><a href="https://www.linkedin.com/in/gandhapudi-anil-kumar-26a638243/" target="_blank"><FaLinkedin size={20} /></a></div>
            <div className='footer-content-item'><a href="https://protofolio-gandhapudi.vercel.app/"><FaProjectDiagram /></a></div>
            <div className='footer-content-item'><a href="https://github.com/Gandhapudi" target="_blank"><FaGit /></a></div>
            
            
         </div>
         <div className='footer-content-2'>
            <div>G Anil Kumar</div>
            <div>+919391405720</div>
            <div>gandhapudianilkumar0@gmail.com</div>
            </div>
    </div>
    </>
  )
}

export default Footer