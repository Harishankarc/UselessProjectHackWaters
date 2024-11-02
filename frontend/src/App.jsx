import React from 'react'
import { useState } from 'react'
import FaceRecognition from './components/FaceRecognition'
import './App.css'
import './index.css'
import MainPage from './pages/MainPage'
import ChooseEmotion from './pages/ChooseEmotion'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  const [userEmotion,setUserEmotion] = useState(null)
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ChooseEmotion setUserEmotion={setUserEmotion}/>}/>
        <Route path='/emotion' element={<MainPage userEmotion={userEmotion}/> }/>
      </Routes>
    </Router>
      
      
    </>
  )
}

export default App