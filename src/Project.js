import React from 'react'
import './project.css'
import projectone from './assests/project1.png'
import weather from './assests/Weather.png'
import ecommerce from './assests/ecommerce.png'
import chatbot from "./assests/chatbot.png"
import todo from "./assests/todo.png"


const Project = () => {
  return (
    <div className='main-div '>
      <section className='main-projects-div'>
        <h1 style={{textAlign:'center',textDecoration:'underline'}}>Projects</h1>
        <div className='project-1 border'>
          <p className='project-name'> mini E-commerce website</p>
          <div>
            <img className='project-img' src={ecommerce} alt=''></img>
          </div>
          <div>
            <p className='project-description' style={{marginLeft:'10px',marginRight:'10px'}}>Developed a streamlined e-commerce platform with essential shopping features and a focus on user experience. This project is built with the MERN stack (MongoDB, Express, React, Node.js) to offer a simplified yet functional online shopping experience without user authentication</p>
          </div>
          <div>
            <p style={{textAlign:'start',marginLeft:'15px',fontWeight:'500'}}>WEBSITE LINK : <a href='https://ecommerce-fn5p.onrender.com' target='_blank' style={{cursor:'pointer',color:'rgb(148, 197, 246)'}}>Click to open</a></p>
          </div>
          <div>
            <p className='key'>Key-features</p>
              <li className='key-features'>1. Shopping Cart & Checkout</li>
              <li className='key-features'>2. Responsive Design</li>
              <li className='key-features'>3. Product Catalog</li>
              <li className='key-features'>4. API integration using Express.js</li>
              <li className='key-features'>5. Hosting & Deployment</li>

          </div>
        </div>


      <div className='project-1 border' style={{marginTop:'20px'}}>
          <p className='project-name'> Gemini Ai Chatbot Clone</p>
          <div>
            <img className='project-img' src={chatbot} alt=''></img>
          </div>
          <div>
            <p className='project-description' style={{marginLeft:'10px',marginRight:'10px'}}>This project is a full-stack clone of the Gemini AI platform, designed to replicate its core functionalities while allowing customization for learning and experimentation. Built with the MERN stack (MongoDB, Express, React, Node.js), this application leverages modern AI capabilities for an immersive user experience similar to Gemini's AI-driven services.</p>
          </div>
          <div>
            <p style={{textAlign:'start',marginLeft:'15px',fontWeight:'500'}}>WEBSITE LINK : <a href='https://ai3-0gemini.onrender.com/' target='_blank' style={{cursor:'pointer',color:'rgb(148, 197, 246)'}}>Click to open</a></p>
          </div>
          <div>
            <p className='key'>Key-features</p>
              <li className='key-features'>1. User Authentication </li>
              <li className='key-features'>2. AI-Powered Interactions</li>
              <li className='key-features'>3. Data Storage using MongoDb</li>
              <li className='key-features'>4. Hosting & deployment</li>
              <li className='key-features'>5. API integration using Express.js</li>
          </div>
        </div>


        <div className='project-1 border' style={{marginTop:'20px'}}>
          <p className='project-name'> Todo App with MongoDb Storage</p>
          <div>
            <img className='project-img' src={todo} alt=''></img>
          </div>
          <div>
            <p className='project-description' style={{marginLeft:'10px',marginRight:'10px'}}>A full-featured Todo application built with the MERN stack (MongoDB, Express.js, React, and Node.js). This app enables users to easily create, read, update, and delete tasks, helping them manage their daily tasks efficiently. The backend is powered by Express.js and Node.js, with MongoDB as the database for seamless data storage and retrieval. React handles the frontend, providing a smooth and responsive user experience</p>
          </div>
          <div>
            <p style={{textAlign:'start',marginLeft:'15px',fontWeight:'500'}}>WEBSITE LINK : <a href='https://ai3-0gemini.onrender.com/' target='_blank' style={{cursor:'pointer',color:'rgb(148, 197, 246)'}}>Click to open</a></p>
          </div>
          <div>
            <p className='key'>Key-features</p>
              <li className='key-features'>1. Task Management </li>
              <li className='key-features'>2. Data Persistence </li>
              <li className='key-features'>3. Responsive Design</li>
              <li className='key-features'>4. API integration using Express.js</li>
              <li className='key-features'>5. Database Handling</li>
          </div>
        </div>

        <div className='project-1 border' style={{marginTop:'20px'}}>
          <p className='project-name'> Weather App</p>
          <div>
            <img className='project-img' src={weather} alt=''></img>
          </div>
          <div>
            <p className='project-description' style={{marginLeft:'10px',marginRight:'10px'}}>This weather app, built using React.js, fetches real-time weather data from an external API, providing users with current weather conditions for any city in the world. The app includes a clean and responsive design, with features like temperature, humidity, wind speed, and weather icons to visually represent different conditions.</p>
          </div>
          <div>
            <p style={{textAlign:'start',marginLeft:'15px',fontWeight:'500'}}>WEBSITE LINK : <a href='https://weather-app-s85j.onrender.com/' target='_blank' style={{cursor:'pointer',color:'rgb(148, 197, 246)'}}>Click to open</a></p>
          </div>
          <div>
            <p className='key'>Key-features</p>
              <li className='key-features'>1. Task Management </li>
              <li className='key-features'>2. Data Persistence </li>
              <li className='key-features'>3. Responsive Design</li>
              <li className='key-features'>4. API integration using Express.js</li>
              <li className='key-features'>5. Databse Handling</li>
          </div>
        </div>

        <div className='project-1 border' style={{marginTop:'20px'}}>
          <p className='project-name'>Calculator</p>
          <div>
            <img className='project-img' src='https://www.codehim.com/wp-content/uploads/2021/12/html-code-for-scientific-calculator.png' alt=''></img>
          </div>
          <div>
            <p className='project-description' style={{marginLeft:'10px',marginRight:'10px'}}>A simple yet functional calculator built with HTML, CSS, and JavaScript. This project demonstrates my understanding of core web development principles, including responsive design and DOM manipulation. The calculator performs basic operations like addition, subtraction, multiplication, and division, with a user-friendly interface and clean layout.</p>
          </div>
          
          <div>
            <p className='key'>Key-features</p>
              <li className='key-features'>1. Basic Arithmetic Operations </li>
              <li className='key-features'>2. Responsive Design </li>
              <li className='key-features'>3. Clear and Delete Functionality</li>
              <li className='key-features'>4. Decimal Calculations</li>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Project