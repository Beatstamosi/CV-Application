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

  return (
    <div className='app-layout'>
      <div className='container-sidebar'>
        <Sidebar onclick={setActiveView} activeView={activeView} />
      </div>
      <div className='main-content'>
        {activeView === "personal" && <Personal personalDetails={personalDetails} onChange={setPersonalDetails}/>}
        {activeView === "links" && <Links />}
        {activeView === "skills" && <Skills />}
        {activeView === "work" && <WorkExperience />}
        {activeView === "education" && <Education />}
        {activeView === "certificates" && <Certificates />}
        {activeView === "preview" && <Preview personalDetails={personalDetails} />}
      </div>
    </div>
  )
}

export default App
