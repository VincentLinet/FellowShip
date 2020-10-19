import React from "react";
import classnames from "classnames";

import { serialize } from "../../services/format";

import DayPicker from "./DayPicker";

const Card = ({ id, firstname, lastname, picture, city, days, adventurers, keywords, price }) => {
  const { min, max } = adventurers;
  return (
    <div className={classnames("card", { card__price: !!price })}>
      <div className="card__picture">
        <img className="card__picture__image" src={`/profiles/${picture}`} />
        <div className="card__picture__price">{!!price && `${price} €`}</div>
        <div className="card__picture__profile">
          <div className="card__picture__name">{`${firstname} ${lastname}`}</div>
          <div className="card__picture__city">{city}</div>
        </div>
      </div>
      <div className="card__description">
        <div className="card__description__days">
          <DayPicker days={days} id={id} blocked />
        </div>
        <div className="card__description__adventurers">
          {min}-{max} adventurers
        </div>
        <div className="card__description__keywords">
          {keywords.map((keyword) => {
            return (
              <div key={`${serialize(keyword)}${id}`} className="card__description__keyword">
                {keyword}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
