import React from 'react'
import '../styles/MainPage.css'
import '../index.css'
import { useState } from 'react';
import { MdSend } from "react-icons/md";
import FaceRecognition from './FaceRecognition';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function MainPageTexts({text1,text2,text3,text4,text5,text6,text7,status}) {
    const [messages,setMessages] = useState(["Hello"])
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        setMessages([...messages, newMessage]);
        setNewMessage("");
      };
    
      const timeline=gsap.timeline(
        {
            
});
    useGSAP(() =>{

        gsap.to('.semicircle',{
            y:0,
            opacity:1,
            duration:5,
            scale:1.5,
            rotate:360,
            
            repeat:-1,


        })

        gsap.to('.message',{
            opacity:1,
            delay:2,
            duration:2,
        })
        
        gsap.to('.messageInput',{
            opacity:1,
            delay:5,
            duration:2,
        })
        

    },[])
  return (

    <div className="happyTexts">
        <div className="section1">
            <h1 className='texts opacity-0 text-yellow-700'>{text1}</h1>
            <div className="semicircle opacity-0">
                {status}
            </div>
            <h1>{text2}</h1>
        </div>
        <div className="section2">
            <h1>{text7}</h1>
            <div className="inputandmesage ">
                <div className="message opacity-0">
                    {
                        messages.map((message,index)=>{
                            return <p key={index}>{message}</p>
                        })
                    }
                </div>
                <div className="messageInput opacity-0">
                    <input type="text" placeholder="message" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
                    <MdSend size={25} color='white' onClick={handleSendMessage}/>
                </div>
            </div>
            <h1>{text3}</h1>
        </div>
        <div className="section1">
            <h1>{text4}</h1>
            <h1>{text5}</h1>
            <h1>{text6}</h1>
        </div>
    </div>
  )
}

export default MainPageTexts