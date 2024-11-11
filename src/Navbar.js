import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

const Navbar = ({menu,setmenu,toggle}) => {
  
  return (
    <>
        <nav className='nav'>
            <div className='nav-div'>
                <span className='logo'>Vharun s</span>
            </div>
            <ul className='nav-ul'>
               <Link className='l' to={'/'}><li className="menuitems"><a href="">Home</a></li></Link>
               <Link className='l' to={'/about'}><li className="menuitems"><a href="">About</a></li></Link>
               <Link className='l' to={'/skills'}><li className="menuitems"><a href="">Skills</a></li></Link>
               <Link className='l' to={'/contact'}><li className="menuitems"><a href="">Contact me</a></li></Link>
               <Link className='l' to={'/project'}><li className="menuitems"><a href="">projects</a></li></Link>
               <Link to={'https://wa.me/+916374191796?text=Hi Vharun!!' } className='l' target='_blank'><button className='nav-btn' >Connect with me</button></Link>
            </ul>
            <button className='menu'  onClick={()=>toggle()}><span style={{fontSize:"1.8rem"}}>{menu ?<IoCloseOutline />:<GiHamburgerMenu/>}</span></button>
        </nav>
        
          
          <nav className={`mob ${menu ?"active":""}`}>
          <ul className='nav-ul-mob'>
                 <Link className='l' to={'/'}><li className="menuitems-mob"><a href="">Home</a></li></Link>
                 <Link className='l' to={'/about'}><li className="menuitems-mob"><a href="">About</a></li></Link>
                 <Link className='l' to={'/skills'}><li className="menuitems-mob"><a href="">Skills</a></li></Link>
                 <Link className='l' to={'/contact'}><li className="menuitems-mob"><a href="">Contact me</a></li></Link>
                 <Link className='l' to={'/contact'}><li className="menuitems-mob"><a href="">Projects</a></li></Link>
                 <Link to={'https://wa.me/+916374191796?text=Hi Vharun!!' } className='l' target='_blank'><button className='nav-btn-mob'><span style={{color:'black',paddingRight:'5px',paddingTop:'5px'}}><FaWhatsapp/></span> whatsapp</button></Link>
              </ul>
        
          </nav>    
        
        
    </>
  )
}

export default Navbar