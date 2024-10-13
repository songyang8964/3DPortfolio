import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';
// for rendering the content of the box 
const InfoBox=({text,link ,btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        
        <Link 
        to={link}
        className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
// reusable 
const renderContent={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Shane</span>👋
            <br/>
            Studying in Master of Software Development, University of Utah
        </h1>
    ),
    2:(
        <InfoBox text='Study in Master of Software Development program, University of Utah' 
        link='/about'
        btnText='Learn more'
        />
    ),
    3:(
        <InfoBox text='Accomplished multiple projects, including backend, frontend and full stack developments' 
        link='/projects'
        btnText='Visit my portfolio'
        />
    ),    
    4:(
        <InfoBox text='Looking for full time jobs after 12/2024' 
        link='/contact'
        btnText='Contact me'
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo