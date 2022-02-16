import React from "react";
import { Hero } from "../../models/hero.model";
import "./HeroCard.scss";

export const HeroCard = (hero: Hero) => {
  return (
    <div className="card__container">
      <img id="card__img" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
      <div className="card__body">
        <h1 id="card__title">{hero.name}</h1>
      </div>
    </div>
  );
};
