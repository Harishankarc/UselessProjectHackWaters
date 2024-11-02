import React from 'react'
import '../styles/MainPage.css'
import Video from '../components/Video'
import MainPageTexts from '../components/HappyTexts'
import url from '../assets/new.mp4'
function MainPage({userEmotion}) {

  if(userEmotion.toLowerCase() === 'happy') {
    return (
      <>
         <Video url={url}/> 
         <MainPageTexts text1={"Happy text 1"} text2={"Happy text 2"} text3={"Happy text 3"} text4={"Happy text 4"} text5={"Happy text 5"} text6={"Happy text 6" } text7={"Happy text 7"} status={"Happy"}  />
      </>
    );
  }else if (userEmotion.toLowerCase() === 'sad') {
    return (
      <>
        <Video url={url}/> 
        <MainPageTexts text1={"Sad text 1"} text2={"Sad text 2"} text3={"Sad text 3"} text4={"Sad text 4"} text5={"Sad text 5"} text6={"Sad text 6" } text7={"Sad text 7"} status={"Sad"}  />
      </>
    );
  }else if (userEmotion.toLowerCase() === 'moody') {
    return (
      <>
        <Video url={url}/> 
        <MainPageTexts text1={"moody text 1"} text2={"moody text 2"} text3={"moody text 3"} text4={"moody text 4"} text5={"moody text 5"} text6={"moody text 6" } text7={"moody text 7"} status={"Moody"}  />
      </>
    );
  }else if (userEmotion.toLowerCase() === 'neutral') {
    return (
      <>
        <Video url={url}/> 
        <MainPageTexts text1={"Neutral text 1"} text2={"Neutral text 2"} text3={"Neutral text 3"} text4={"Neutral text 4"} text5={"Neutral text 5"} text6={"Neutral text 6" } text7={"Neutral text 7"} status={"Neutral"}  />
      </>
    );
  }else if (userEmotion.toLowerCase() === 'angry') {
    return (
      <>
        <Video url={url}/> 
        <MainPageTexts text1={"Angry text 1"} text2={"Angry text 2"} text3={"Angry text 3"} text4={"Angry text 4"} text5={"Angry text 5"} text6={"Angry text 6" } text7={"Angry text 7"} status={"Angry"}  />
      </>
    );
  }else{
    return <h1>Error</h1>
  }
  
}

export default MainPage