import { useState } from 'react'
import Sidebar from './components/sidebar'
import Personal from './components/personal'
import Links from './components/links'
import Skills from './components/skills'
import WorkExperience from './components/work'
import Education from './components/education'
import Certificates from './components/certificates'
import Preview from './components/preview'
import "./styles/App.css"

function App() {
  const [activeView, setActiveView] = useState("personal");

  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    about: ""
  });

  const [links, setLinks] = useState({
    website: "",
    linkedin: "",
    github: "",
  });

  // === Skills logic ===
  const [skills, setSkills] = useState({
    languages: ["Peter"],
    tools: [""],
    other: [""]
  });

  const handleSkillChange = (skill, index, newValue) => {
    const updated = [...skills[skill]];
    updated[index] = newValue;
    setSkills({ ...skills, [skill]: updated });
  };

  const addSkill = (skill) => {
    const updated = [...skills[skill]];
    updated.push("");
    setSkills({ ...skills, [skill]: updated });
  }

  const removeSkill = (skill, index) => {
    const updated = [...skills[skill]];
    updated.splice(index, 1);
    if (updated.length === 0) {
      updated.push("");
    }
    setSkills({ ...skills, [skill]: updated });
  }




  return (
    <div className='app-layout'>
      <div className='container-sidebar'>
        <Sidebar onclick={setActiveView} activeView={activeView} />
      </div>
      <div className='main-content'>
        {activeView === "personal" && <Personal personalDetails={personalDetails} onChange={setPersonalDetails}/>}
        {activeView === "links" && <Links links={links} onChange={setLinks}/>}
        {activeView === "skills" && <Skills skills={skills} onChange={handleSkillChange} addSkill={addSkill} removeSkill={removeSkill}/>}
        {activeView === "work" && <WorkExperience />}
        {activeView === "education" && <Education />}
        {activeView === "certificates" && <Certificates />}
        {activeView === "preview" && <Preview personalDetails={personalDetails} links={links} skills={skills} />}
      </div>
    </div>
  )
}

export default App
