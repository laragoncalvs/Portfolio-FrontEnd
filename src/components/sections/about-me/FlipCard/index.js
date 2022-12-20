import React, { useEffect, useState } from "react";
import "./flipcard.scss";

import dots from "../../../../assets/Group 40 (1).svg";

export default function FlipCard({ img1, img2, flipCard, flip }) {
  return (
    <div className="timeline">
      <h3>Infância</h3>
      <img src={dots} className='dots' />
      <div
        className={`flip-card ${flip != true ? "front-flip" : "back-flip"}`}
        onMouseEnter={flipCard}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={img1} />
            <p>Desde cedo demonstrava interesse por atividades visuais</p>
          </div>
          <div className="flip-card-back">
            <img src={img2} />
            <p>Jogos e brinquedos que envolviam lógica eram meus preferidos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
