import React from "react";

export default function Card({ svg, tittle, text }) {
    return  <div className="card">
                <div className="card__box__image"><img className="card__image" src={svg} alt="image" /></div>
                <span className="card__title">{tittle}</span>
                <span className="card__text">{text}</span>
            </div>
}