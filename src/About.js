import React from 'react'

const About = () => {
  return (
    <div>
      <h2 className='alogo'>About me</h2>
    <div className='about-container'>
      <div className='about'>
        <div className='about-content'>
          <h6>MERN Stack Developer</h6>
            <p>
              I am <span style={{color:'red',fontFamily:'sans-serif',fontWeight:'200'}}>vharun s</span> MERN Stack Developer in cuddalore,Tamilnadu.I am computer science<br/>
              undergraduate from Vinayaka mission kirupananda variyar engineering college in salem <br/>
              I am very passionate about improving my coding skills & devloping applications<br/>and websites.
              I build webapps and websites using MERN stack.Working for my self to improve my skills. 
            </p>
        </div>
    </div>
      <div className='about-img-div'>
        <img src='https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?t=st=1720333994~exp=1720334594~hmac=240f0646c4feb64dfb37d6d8453f2472276829c2beae816ac82705e11e59b193'></img>
      </div>


    </div>
    </div>
  )
}

export default About