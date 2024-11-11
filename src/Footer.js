import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
        <span className='foot'>Vharun S</span>
        <p>© 2024 Time to program ,Happy Coding</p>
            <div className='platform-div'>
                <Link className="l" to={'https://www.linkedin.com/in/vharun-s-848bb5270/'} target='_blank'><span><FaLinkedin/></span></Link>
                <Link className="l" to={'https://github.com/Vharun2005/vharun-portfolio'} target='_blank'><span><FaGithub/></span></Link>
                <Link className='l' to={'https://www.instagram.com/meet__me__spartan._/?hl=en'} target='_blank'><span><FaInstagram/></span></Link>
            </div>

    </footer>
  )
}

export default Footer