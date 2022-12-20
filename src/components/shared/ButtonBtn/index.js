import React from "react";

const ButtonBtn = ({className, href, btnText, onClick}) => {
    return(
        <a className={`button ${className}`} href={href} onClick={onClick}  >{btnText} </a>
    )
}


export default ButtonBtn