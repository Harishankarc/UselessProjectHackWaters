import React from 'react'
import '../styles/MainPage.css'
import { useState } from 'react';
import { MdSend } from "react-icons/md";
import FaceRecognition from './FaceRecognition';
function MainPageTexts({text1,text2,text3,text4,text5,text6,text7,status}) {
    const [messages,setMessages] = useState(["Hello"])
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        setMessages([...messages, newMessage]);
        setNewMessage("");
      };
  return (
    <div className="happyTexts">
        <div className="section1">
            <h1>{text1}</h1>
            <div className="semicircle">
                {status}
            </div>
            <h1>{text2}</h1>
        </div>
        <div className="section2">
            <h1>{text7}</h1>
            <div className="inputandmesage">
                <div className="message">
                    {
                        messages.map((message,index)=>{
                            return <p key={index}>{message}</p>
                        })
                    }
                </div>
                <div className="messageInput">
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