import React from "react"
import { awards } from "./Data"
import "./awards.css"

const Awards = () => {
  return (
    <>
      <section className='awards'>
        

          <div className='grid_award'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        
      </section>
    </>
  )
}

export default Awards
