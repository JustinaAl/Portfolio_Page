import './App.css'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'


function App() {

  return (
    <div className='flex flex-col h-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/projects'  element={<Projects />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
