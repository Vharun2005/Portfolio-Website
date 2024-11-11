import { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skill from "./Skill";
import { Route, Routes } from "react-router";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import Project from "./Project";
function App() {

  const [menu,setmenu] = useState(false)
  const toggle = ()=>{
    setmenu(!menu)
  }

  const [SKILLS,setSkills] = useState([
    {
    title:"Frontend",
    icon:"https://png.pngitem.com/pimgs/s/499-4998998_code-icon-png-free-coding-symbol-transparent-background.png",
    skills:[
      {skill:"HTML5",percentage:'80%'},
      {skill:"CSS",percentage:'90%'},
      {skill:"JavaScript",percentage:'80%'},
      {skill:"ReactJs",percentage:'80%'}
    ]
  },
  {
    title:"Backend",
    icon:"https://w7.pngwing.com/pngs/549/715/png-transparent-web-development-logo-website-web-design-symmetry-internet-thumbnail.png",
    skills:[
      {skill:"Node.js",percentage:'70%'},
      {skill:"Express.js",percentage:'65%'},
    ]
  },
  {
    title:"Tools",
    icon:"https://png.pngitem.com/pimgs/s/114-1146607_tool-icon-png-transparent-tools-icon-png-png.png",
    skills:[
      {skill:"Git & GitHub",percentage:'85%'},
      {skill:"VisualStudio Code",percentage:'90%'},
      {skill:"Webpack",percentage:'60%'},
      {skill:"Responsive Design",percentage:'70%'}
    ]
  },
  {
    title:"Soft Skills",
    icon:"https://png.pngitem.com/pimgs/s/318-3180020_brainstorm-skill-icon-hd-png-download.png",
    skills:[
      {skill:"Problem-Solving",percentage:'80%'},
      {skill:"Collaboration",percentage:'90%'},
      {skill:"Attention To Detail",percentage:'80%'},
    ]
  }
])
  return (
    <div>
      <Navbar menu={menu} setmenu={setmenu} toggle={toggle}/>
      
      <div className="container" onClick={()=>setmenu(false)}>
        <Routes>
          <Route path='/' element={<Hero/>}></Route>
          <Route path='/skills' element={<Skill SKILLS={SKILLS}/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/project" element={<Project/>} />

        </Routes>
      </div>     
      <Footer/> 
    </div>
  );
}

export default App;
