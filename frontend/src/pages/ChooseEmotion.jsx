import React from 'react'
import FaceRecognition from '../components/FaceRecognition'
import { useNavigate } from 'react-router-dom'
import '../styles/ChooseEmotion.css';
function ChooseEmotion({setUserEmotion}) {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/emotion')
  }, 5000)
    
  return (
    <>
        <h1 style={{
            fontSize: '4rem',
            textAlign: 'center',
            color:'white'
        }}>Test Your Emotion</h1>
        <FaceRecognition setUserEmotion={setUserEmotion}/>
    </>
  )
}

export default ChooseEmotion