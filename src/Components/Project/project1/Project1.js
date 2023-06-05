import React from 'react';
import {data} from './asset.js';
import '../project.css';
const Project1 = () => {
  return (
    <div className='project_container'>
        <h1>Project Itunu City Visualization</h1>
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

export default Project1