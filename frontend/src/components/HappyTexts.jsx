import React from 'react'
import '../styles/MainPage.css'
import '../index.css'
import { useState } from 'react';
import { MdSend } from "react-icons/md";
import FaceRecognition from './FaceRecognition';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);


function MainPageTexts({text1,text2,text3,text4,text5,text6,text7,status}) {
    const scrollref= useRef(null);
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
            scale:1.5,
            delay:3,
            duration:2,
            ease:'power2.in'
        })
        
        gsap.to('.messageInput',{
            y:100,
            opacity:1,
            scale:1.5,
            delay:4,
            ease:'power2.in',

            duration:2,
        })
        
        gsap.to('.text2',{
            opacity:1,
            scale:5,
            x:150,
            y:150,
            scrollTrigger:{
                trigger:text2,
                start:'bottom bottom',
                scrub:true,
                end:'top 1%'
            }
        }
        )
    },{scope:scrollref})
  return (

    <div className="happyTexts">
        <div className="section1">
            <h1 className='texts opacity-0 text-yellow-700'>{text1}</h1>
            <div className="semicircle opacity-0">
                {status}
            </div>
            <h1 className='text2 opacity-0'>{text2}</h1>
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