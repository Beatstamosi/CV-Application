import Sidebar from './components/sidebar'
import Personal from './components/personal'
import Links from './components/links'
import Skills from './components/skills'
import WorkExperience from './components/work'
import Education from './components/education'
import Certificates from './components/certificates'
import "./styles/App.css"

function App() {
  return (
    <div className='app-layout'>
      <div className='container-sidebar'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <Certificates />
      </div>
    </div>
  )
}

export default App
