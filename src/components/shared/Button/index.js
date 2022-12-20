import React from "react";

const Button = ({className, href, btnText, onClick, target}) => {
    return(
        <a className={`button ${className}`} href={href} onClick={onClick} target={target}>{btnText} </a>
    )
}


export default Button