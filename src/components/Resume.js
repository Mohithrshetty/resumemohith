import React from 'react'
import './Resume.css'
import logo from './moh.jpg'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
export default function Resume() {
  return (
    <div class="Resume">
        
  
    
    <div class="profile">
    <div class="img">
        <img src={logo} className="App-logo" alt="dp"/>
    </div>
       
    <h2> Mohith R Shetty<br/>
       <span>Full Stack Web Developer</span>
       </h2>
   
       
    </div>
    <div class="contactme">
    <h3 class="contact">CONTACT INFO</h3>
    <ul class="moh">
        <li class="hello">EMAIL :- mohithrshetty03@gmail.com</li>
        <li class="hello">PHONE :- 7204204685</li>
        <li class="hello">LINKEDIN :-Mohith R Shetty</li>
    </ul>

    </div>
    <div class="aboutme">
        <h2 class="about">ABOUT ME</h2>
        <p>Computer Science Engineering Student</p>
        <p>Currently Pursuing BE in computer Science at CANARA ENGINEERING COLLEGE</p>
        <p>Currently Working as a full stack intern at ROOLOO INNOVATIONS</p>
    </div>
    <div class="skill">
        <h2 class="techskills">TECHNICAL SKILLS</h2>
        <div class="box">
            <h3>HTML</h3>
            <div class="percentage"></div>
            <div class="html"></div>
        </div>
        <div class="box">
            <h3>CSS</h3>
            <div class="percentage"></div>
            <div class="css"></div>
        </div>
        <div class="box">
            <h3>JAVASCRIPT</h3>
            <div class="percentage"></div>
            <div class="javascript"></div>
        </div>
        <div class="box">
            <h3>PYTHON</h3>
            <div class="percentage"></div>
            <div class="python"></div>
        </div>
    </div>
    </div>
    
  );

}

  


