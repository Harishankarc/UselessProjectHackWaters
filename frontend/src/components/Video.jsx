import React from 'react'
import '../styles/Video.css'
function Video({url}) {
  return (
    <>
        <div className="video-container-background">
            <video autoPlay playsInline muted loop>
                <source src={url}  type="video/mp4"/>
            </video>
        </div>
    </>
  )
}

export default Video