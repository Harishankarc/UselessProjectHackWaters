import React, { useState,useEffect, useRef } from 'react'
import { EmotionDetector} from '@iad-os/emotion-detector'
import '../styles/FaceRecognition.css'
export default function FaceRecognition() {
    const [emotion, setEmotion] = useState(null)
    const myref = useRef(null)
    let currentEmotion;
    let container;
    let switchOption;
  
    useEffect(()=>{
      if(emotion === null){
        console.log("No emotion dettected yet!!")
      }else{
        currentEmotion = emotion.reduce((max, current) => {
          return current.percentage > max.percentage ? current : max;
        });
        switchOption = currentEmotion.emotion.toLowerCase()
        console.log(currentEmotion.emotion)
        container = document.getElementsByClassName('.video-container')
        if(myref.current){
          if(switchOption === "happy"){
            myref.current.style.backgroundColor = "green"
          }else{
            myref.current.style.backgroundColor = "white"
          }
        }
      }
    },[emotion])

    return (
        <>
            <div className="video-container" ref={myref}>
            <div className="border-container">
                <EmotionDetector 
                    onEmotionDetect={(Detection)=>{
                    console.log(Detection.details.detectedEmotions)
                    setEmotion(Detection.details.detectedEmotions)
                    }}
                    detecting={true}
                    detectAge={false}
                    detectSex={false}  
                    emotionDetectPeriod={100}
                    showLabel={false}
                />
            </div>
        </div>
        </>
    );
}