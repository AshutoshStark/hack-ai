import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';
import WavesurferPlayer, { useWavesurfer } from '@wavesurfer/react';

const UserWelcome = () => {

  const [toggle,setToggle]=useState<boolean>(true)

  const containerRef = useRef(null)

  // const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
  //   container: containerRef,
  //   url: 'assets/home.mp3',
  //   waveColor: 'red',
  //   height: 0,
  // })

  const [wavesurfer, setWavesurfer] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const onReady = (ws:any) => {
    setWavesurfer(ws)
    setIsPlaying(false)
  }

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause()
  }

  return (
    <Container>
      <WavesurferPlayer
        height={0}
        waveColor="violet"
        url= {toggle ? "assets/home.mp3" : "assets/homeHindi.mp3"}
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className='speech'>
  <button onClick={()=>setToggle(!toggle)}>
        {toggle ? 'English' : 'Hindi'}
      </button>
  <button onClick={onPlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
</div>
        <p className='heading_style'>AL / ML: - </p>
        <p>
<br/>AI, or artificial intelligence, is the big picture term for machines that can act and think like humans. Machine learning (ML) is a type of AI where computers learn from data, like improving their ability to recognize faces in photos or translate languages.

Imagine AI as a toolbox, and machine learning is a really powerful tool within that box. AI can achieve intelligence through other methods too, like by following programmed rules.<br/>
            <br/>
            Imagine a program that can learn to identify spam emails by analyzing tons of emails and figuring out patterns that differentiate spam from real emails. That's machine learning in action.<br/>
            <br/>
            Here's a breakdown of what machine learning is about:<br/>
            <br/>
           <br/>Learning from data:<br/> ML algorithms are trained on large datasets of information. This data can be anything from text and images to numbers and sound. By analyzing the data, the algorithms discover patterns and relationships.<br/>
           <br/>Improving performance:<br/> As the algorithms process more data, they get better at recognizing patterns and making predictions. This is what allows them to perform tasks like spam filtering or image recognition more accurately over time.<br/>
           <br/>Minimal human intervention:<br/> Unlike traditional programming, where you have to write every single instruction, machine learning algorithms can learn on their own. You provide the data and the overall goal, and the algorithm figures out the specifics.<br/>
            
            Machine learning is used in a wide range of applications, including:
            
           <br/>Recommendation systems:<br/> Recommending products or services you might be interested in, like those suggested items on online shopping websites.<br/>
           <br/>Fraud detection:<br/> Identifying suspicious activity on financial accounts.<br/>
           <br/>Image and speech recognition:<br/> Powering features like facial recognition in photos or voice assistants on smartphones.<br/>
           <br/>Natural language processing:<br/> Enabling machines to understand and respond to human language.<br/>
            
           <br/>Machine learning is a rapidly evolving field with the potential to revolutionize many aspects of our lives.
        </p>
    </Container>
  )
}

const Container = styled.div`

.speech{
  width: 60vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  
  button{
    color:white;
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

}

p{
    height: 80%;
    color: #000000;
}
font-size: 1rem;
padding: 1rem;
width: 65vw;
color: white;
height: 65vh;
margin: 5px;
/* background: rgba( 144, 19, 254, 0.6 ); */
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 10px );
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;

.heading_style{
  text-align: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  margin: 10px 0;
  color: #000000;
}
`

export default UserWelcome
