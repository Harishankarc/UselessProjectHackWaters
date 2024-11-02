import React, { useRef } from 'react';
import '../styles/MainPage.css';
import '../index.css';
import { useState } from 'react';
import { MdSend } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);

function MainPageTexts({ text1, text2, text3, text4, text5, text6, text7, status }) {
    const scrollref = useRef();
    const text2Ref = useRef(); // Create a ref for text2
    const [messages, setMessages] = useState(["Talk to Yourself 😜"]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        setMessages([...messages, newMessage]);
        setNewMessage("");
    };

    useGSAP(() => {
        gsap.to('.semicircle', {
            y: 0,
            opacity: 1,
            duration: 5,
            scale: 2,
        });

        gsap.to('.message', {
            opacity: 1,
            scale: 1.5,
            delay: 3,
            duration: 2,
            ease: 'power2.in'
        });

        gsap.to('.messageInput', {
            y: 100,
            opacity: 1,
            scale: 1.5,
            delay: 4,
            ease: 'power2.in',
            duration: 2,
        });

        gsap.to('.text2', {
            scale: 2,
            y: 150,
            duration:2,
            ease:'bounce',
            scrollTrigger: {
                opacity:1,
                trigger: text2Ref.current, // Use the ref as the trigger
                start: 'center center',
                scrub: true,
                end: 'top 1%'
            }
        });
    }, { scope: scrollref });

    return (
        <div className="happyTexts" ref={scrollref}>
            <div className="section1">
                <h1 className='texts opacity-0 text-yellow-700'>{text1}</h1>
                <div className="semicircle opacity-0 fixed">
                    {status}
                </div>
                <p className='text2 text-white opacity-0 fixed text-2xl' ref={text2Ref}>{text2}</p> {/* Attach the ref here */}
            </div>
            <div className="section2">
                <h1 className='opacity-0'>{text7}</h1>
                <div className="inputandmesage ">
                    <div className="message opacity-0">
                        {
                            messages.map((message, index) => {
                                return <p key={index}>{message}</p>
                            })
                        }
                    </div>
                    <div className="messageInput opacity-0">
                        <input type="text" placeholder="message" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                        <MdSend size={25} color='white' onClick={handleSendMessage} />
                    </div>
                </div>
                <h1 className='opacity-0'>{text3}</h1>
            </div>
            <div className="section1 opacity-0">
                <h1>{text4}</h1>
                <h1>{text5}</h1>
                <h1>{text6}</h1>
            </div>
        </div>
    );
}

export default MainPageTexts;