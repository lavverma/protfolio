import React from 'react'
import data from "../assets/data.json"

const Experience = () => {
    return (
        <div id="experience">
            <div className="experienceBox">
                {data.projects.map((item, index) => (
                    <ExperienceItem
                        heading={item.title}
                        text={item.date}
                        index={index}
                        key={item.title}
                    />
                ))}
            </div>
        </div>
    );
};



const ExperienceItem = ({ heading, text, index }) => {
    return (
        <div className={`experienceItem ${index % 2 === 0 ? "leftSide" : "rightSide"
            }`}>
            <div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Experience