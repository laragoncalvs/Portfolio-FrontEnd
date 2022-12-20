import React from "react";
import Button from "../../shared/Button";
import {BsArrowUpRight} from "react-icons/bs"

const Portfolio = () => {
    return(
        <div className="portfolio" id='portfolio'> 
            <div className="portfolio-header">
               <h2>
                Projetos pessoais
                
                </h2> 
                <Button className="btn-outlined" href='https://github.com/laragoncalvs' btnText= 'Acessar Github ' target='_blank' />
               
            </div>
            <div className="portfolio-body">
                <div className="projects"></div>
                <div className="projects"></div>
                <div className="projects"></div>
                <div className="projects"></div>
                <div className="projects"></div>
                <div className="projects"></div>
            </div>
          
        </div>
    )
}


export default Portfolio