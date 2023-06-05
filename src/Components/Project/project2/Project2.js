import React from 'react'
import {data }from './asset'


const Project2 = () => {
  return (
    <div className='project_container'>
        <h1>Project The Grid
          
        </h1>
        <div>
          {data.map((x) =>{
            return(
              <div className='project_images'>
                <img src={x.img}/>
              </div>
            )
          })}

        </div>
    </div>
  )
}


export default Project2