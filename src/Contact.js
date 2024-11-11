import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='form-main-div'>
        <form className='form-div' action='mailto:your-vharunsivaraj06@gmail.com' method='post' encType='text/plain' target='_blank'>
            <h6>Contact Me</h6>
           <div>   
                <div className='separate-div'>
                    <input placeholder='Your Name' type='text' required></input>  
                </div>
                <div className='separate-div'>
                <input placeholder='Your Message' type='text' required></input>
                </div>
                <div className='separate-div'>
                <input placeholder='Your Mail' type='email' required></input>
                </div>
           </div> 
         <div className='btn-div'>
            <button type='submit'>Let's Talk</button>
         </div>
         <div className='social-media-profile'>
            <ul className='platform-content'>
                <Link className="l" to={'https://www.linkedin.com/in/vharun-s-848bb5270/'}><li>Linked-In <FaLinkedin /></li></Link>
                <Link className="l" to={'https://github.com/Vharun2005/vharun-portfolio'} ><li className='git'> Git-hub <FaGithub /></li></Link>
            </ul>
         </div>
        </form>

    </div>
  )
}

export default Contact


            