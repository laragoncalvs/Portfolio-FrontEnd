import React from "react";
import Button from "../../shared/Button";
import float from '../../../assets/Group 38.svg'

const InicialBanner = ({ data, img, idSkills }) => {
  return (
    <div>
      <div className="inicial-banner">
        <div>

        <div className="mb-9">
          <h1>
            {data.texts.inicialBanner.greetings}{" "}
            <span className="purple-span">Lara!</span>
          </h1>
          <span className="description-span">
            {data.texts.inicialBanner.description}
          </span>
        </div>

        <div>
          <Button
            btnText={data.texts.inicialBanner.buttons.projects}
            className="btn-fill"
            href='#portfolio'
            />

          <Button
            btnText={data.texts.inicialBanner.buttons.skills}
            className="btn-outlined ml-15"
            href='#skills'
            />
        </div>
            </div>
            <img src={img}/>
      </div>
    </div>
  );
};

export default InicialBanner;
