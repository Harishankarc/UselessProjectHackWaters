import React, { useState,useEffect, useRef } from 'react'
import { EmotionDetector} from '@iad-os/emotion-detector'
import '../styles/FaceRecognition.css'
export default function FaceRecognition({setUserEmotion}) {
    const [emotion, setEmotion] = useState(null)
    let currentEmotion;
  
    useEffect(()=>{
      if(emotion === null){
        console.log("No emotion dettected yet!!")
      }else{
        currentEmotion = emotion.reduce((max, current) => {
          return current.percentage > max.percentage ? current : max;
        });
        console.log(currentEmotion.emotion)
        setUserEmotion(currentEmotion.emotion)
      }
    },[emotion])

    return (
        <>
            <div className="video-container">
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
                    camSizeRatio={1}
                />
            </div>
        </div>
        </>
    );
}