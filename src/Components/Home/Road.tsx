import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Road = () => {
  return (
    <Container>
        <p>
        The best roadmap to learn AI depends on your background and goals. Here's a general approach that you can customize:<br/>

            <br/>1. Foundational knowledge:<br/>
            
            <br/>Math:<br/> Get comfortable with linear algebra, calculus, and probability. These are the building blocks of AI algorithms. You can find many resources online and in libraries to learn these concepts.<br/>
            <br/>Programming:<br/>  Python is the go-to language for AI. Learn about data structures, algorithms, and basic functionalities of Python. <br/>
            <br/>
            <br/>2.  Understanding core AI concepts:<br/>
            <br/>
            <br/>Machine Learning (ML):<br/> This is a subfield of AI that allows computers to learn from data without explicit programming.  Grasp the core concepts of supervised learning, unsupervised learning, and reinforcement learning. <br/>
            <br/>Deep Learning:<br/> A powerful subset of ML that uses artificial neural networks for tasks like image recognition and natural language processing.<br/>
            <br/>
            <br/>3. Hands-on practice:<br/>
            
            <br/>Coding:<br/>  While you're learning the theory, don't forget to practice coding.  Work on projects that implement ML algorithms and see them work in real-world scenarios. <br/>
            <br/>Projects:<br/> There are many online resources with beginner-friendly AI projects. This will solidify your understanding and make learning more engaging.<br/>
            <br/>
            <br/>Resources:<br/>
            
            <br/>Online courses: Platforms like Coursera, Udacity, and edX offer various AI courses from beginner to advanced levels. You can choose free or paid courses depending on your needs.<br/>
            <br/>Books: "Deep Learning" by Ian Goodfellow, Yoshua Bengio, and Aaron Courville is a classic reference book. There are many other beginner-friendly books available as well.<br/>
            <br/>Online communities: Join online forums and communities where you can connect with other AI learners and experts. Ask questions, share projects, and get feedback.<br/>
            
            <br/>Remember:<br/>
            
            <br/>Tailor the journey:<br/> This is a general roadmap,  adjust it based on your interests (computer vision, natural language processing, etc.).
            <br/>Stay updated:<br/> The field of AI is constantly evolving. Keep up with the latest advancements through research papers, blogs, and conferences.
    </p>
    </Container>
  )
}

const Container = styled.div`
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

export default Road
