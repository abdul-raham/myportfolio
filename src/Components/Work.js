import "./WorkCardStyles.css"
import React from 'react'
import WorkCard from "./WorkCard";
import workCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container"> 
        {workCardData.map((val,ind)=>{
            return(
                <WorkCard 
                key={ind}
                imgsrc = {val.imgsrc}
                title={val.title}
                text= {val.text}
                view={val.view}
                source={val.source}/>
            )
        })}
      </div>
    </div>
  )
}

export default Work
