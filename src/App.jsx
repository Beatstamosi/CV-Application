import Sidebar from './components/sidebar'
import Personal from './components/personal'
import Links from './components/links'
import Skills from './components/skills'
import "./styles/App.css"

function App() {
  return (
    <div className='app-layout'>
      <div className='container-sidebar'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <Skills />
      </div>
    </div>
  )
}

export default App
