import './App.css'
import { Chatbot } from './components/Chatbox'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Resume } from './components/Resume'
import { Skills } from './components/Skills'

function App() {
  return <div>

    <Header />
    <div className='pt-10'><Intro />
    <Skills/>
    <Resume/>
    <Contact/>
    <Chatbot/>
    </div>
  </div>
}

export default App
