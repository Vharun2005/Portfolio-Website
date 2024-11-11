import React from 'react'

const Hero = () => {
  return (
    <section className='hero-container'> 
        <div className='hero-content'>
            <h2> I am Vharun|<span style={{color:'green'}}>MERN</span> Stack developer</h2>
            <p>
                welcome to my portfolio! am Vharun
                a passionate self-taught MERN stack Developer
                with  proven a track of building Dynamic web
            </p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='r'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png' alt=''></img>
                </div>
                <img src='https://img.freepik.com/premium-photo/portrait-businessman-3d-cartoon-style_636536-67.jpg' alt='' className='mine'></img>
            </div>

            <div>
                <div className='html'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd2rMcfI56SZEenhvautbZl_xUsPSHaktNw&s' alt=''></img>
                </div>
                <div className='css'>
                    <img src='https://static-00.iconduck.com/assets.00/css-3-icon-726x1024-610441pl.png' alt=''></img>
                </div>
                <div className='js'>
                    <img src='https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' alt=''></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero