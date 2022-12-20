import React from "react";
import github from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";

const contacts = [
  {
    icon: github,
    description: "Github",
    href: "https://github.com/laragoncalvs",
  },
  {
    icon: linkedin,
    description: "Linkedin",
    href: "https://www.linkedin.com/in/lara-goncalves-79b5901ab",
  },
];

const Contact = () => {
  return (
    <div className="contact m-1">
      <h2>Onde me encontrar</h2>
        <div className="icons">

      {contacts.map((item) => (
          
          <a href={item.href} target="_blank">
            <img src={item.icon} />
            <h3>{item.description}</h3>
          </a>
    
    ))}
    </div>
    </div>
  );
};

export default Contact;
