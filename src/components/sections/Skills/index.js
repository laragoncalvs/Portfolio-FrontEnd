import React, { useState } from "react";
import react from '../../../assets/skils/image 9.png'
import ang from '../../../assets/skils/image 11.png'
import ts from '../../../assets/skils/image 10.png'
import sass from '../../../assets/skils/image 12.png'
import next from '../../../assets/skils/image 13.png'
import { LargerContainer } from "../../styled/GlobalStyles";

const Skills = () => {

    const skills = [
        {
            title: "React",
            description: "Conhecimento avançado",
            img: react
        },
        {
            title: "Angular",
            description: "Experiência profissional",
            img: ang
        },
        {
            title: "TypeScript",
            description: "Experiência profissional",
            img: ts
        },
        {
            title: "Sass",
            description: "Conhecimento intermediário",
            img: sass
        },
        {
            title: "Next.JS",
            description: "Conhecimento intermediário",
            img: next
        },
    ]

    const[className, setClassName] = useState("")
    const[description, setDescription] = useState("skills-description")

    function handleHover () {
        setClassName('skills-img')
        setDescription('skills-hover')
    }




    return(
        <div className="skills-container"  id= "skills">
            <LargerContainer>

            <div className="skills">

            {
                skills.map((item) => (
                    <div> 
                        <img className={className} onMouseOver={handleHover} src = {item.img} /> 
                        {/* <div className={description}>

                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        
                        </div> */}
                        </div>

                    )
                    )
                }
                </div>
                </LargerContainer>

        </div>
    )
}


export default Skills