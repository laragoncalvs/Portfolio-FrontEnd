import React from "react";
import FlipCard from "../FlipCard";

import infPink from '../../../../assets/Group 5 (2).svg'
import infBlue from '../../../../assets/Group 6 (2).svg'
import teenBlue from '../../../../assets/Group 7 (1).svg'
import teenPink from '../../../../assets/Mask group.svg'
import adPink from '../../../../assets/Group 19.svg'
import adBlue from '../../../../assets/Group 20.svg'

const TimeLine = () => {
    return(
        <div className="timeline">
        

            <FlipCard img1={infPink} img2={infBlue}/>
        </div>
    )
}

export default TimeLine