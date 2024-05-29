import React from 'react'
import Header from '../components/header';
import '../styles/home.css'

const Home = () => {
  return (
    <div className='lists'>
      <Header />
      <div className='ed'>
      <h1 >Education: </h1>
      <ul>
        <li>Matriculation From APSACS Okara Cantt</li>
        <li>ICS From Punjab Group Of Colleges Okara</li>
        <li>Currently in 4th Semester (BSCS) From The University Of Lahore</li>
        <li>MERN Stack From Nexskill (2023-2024)</li>
      </ul>
      </div>
      
      <div className='skills'>
      <h1>Skills: </h1>
      <ul>
        <li>Proficient In HTML and CSS</li>
        <li>Extensive knowledge Of Javascript Concepts</li>
        <li>Knowledge of React Hooks, State Management, Api Handling, Routing,Forms</li>
        <li>A Collection Of Projects Using Core Concepts Of React and Js</li>
      </ul>
    </div>
      </div>
      
  )
}

export default Home;