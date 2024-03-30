import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Resourses = () => {

  return (
    <Container>
        <div><br/>
        Machine Learning Crash Course by Google: [Google machine learning crash course] offers a great introduction to ML concepts.<br/>
Machine Learning from Stanford University by Andrew Ng: This classic course on YouTube: youtube.com by Andrew Ng is a highly recommended starting point.<br/>
Introduction to Deep Learning by MIT: If you're interested in deep learning, a subfield of ML, this MIT course on YouTube: youtube.com is a valuable resource.<br/>
        </div>
    </Container>
  )
}

const Container = styled.div`
a{
  display: flex;
  flex-direction: row;
  align-items: center;
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
  font-size: 20px;
  margin: 10px 0;
  color: #ffffff;
}
`

export default Resourses
