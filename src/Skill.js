import React, { useState } from 'react'
import SkillCard from './SkillCard'
import SkillsInfoCard from './SkillsInfoCard'

const Skill = ({SKILLS}) => {
  const[selectedSkill,setSelectedSkill] = useState(SKILLS[0])
  const handleSelectedSkill = (data) => {
    setSelectedSkill(data)
  }
  return (
    <section className='skills-container'>
      <h5>Technical proficiency</h5>
      <div className='skills-content'>
        <div className='skills'>
          {
            SKILLS.map((item)=> <SkillCard key={item.title} title={item.title} iconUrl={item.icon} isActive={selectedSkill.title === item.title} onClick={()=> handleSelectedSkill(item)} />)
          }

        </div>
        <div className='skills-info'>
          <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills}/>
        </div>
      </div>
    </section>
  )
}

export default Skill