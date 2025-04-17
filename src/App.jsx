import { useState } from 'react'
import Sidebar from './components/sidebar'
import Personal from './components/personal'
import Links from './components/links'
import Skills from './components/skills'
import WorkExperience from './components/work'
import Education from './components/education'
import Certificates from './components/certificates'
import "./styles/App.css"

function App() {
  const [activeView, setActiveView] = useState("personal");

  return (
    <div className='app-layout'>
      <div className='container-sidebar'>
        <Sidebar onclick={setActiveView} />
      </div>
      <div className='main-content'>
        {activeView === "personal" && <Personal />}
        {activeView === "links" && <Links />}
        {activeView === "skills" && <Skills />}
        {activeView === "work" && <WorkExperience />}
        {activeView === "education" && <Education />}
        {activeView === "certificates" && <Certificates />}
      </div>
    </div>
  )
}

export default App
