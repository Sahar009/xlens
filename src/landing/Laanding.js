import React from 'react'
import './landing.css'
import Header from '../Components/Header/Header'

const Laanding = () => {
  return (<>
  
    <div className='landing'>
    <Header/>
        
    <div className="container header">
        <div className="header-left" >
          <h1>
            <span>The House of </span>
            <span>THE NARATIVES</span>
            <span> Arts</span>
          </h1>
          <p className="u-text-small">
            You can join and perticipate in our special Fantacy leages
          </p>
          
        </div>
        {/* <div className="header-right" >
       
          <img className="header-img" src={headerbg1}/>
          
        </div> */}
      </div>
        </div>
        </>
  )
}

export default Laanding