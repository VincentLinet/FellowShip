import React from "react";

import Card from "../objects/Card";

const renderCards = (cards) => {
  return cards.map((card) => <Card key={card.id} {...card} />);
};

const Results = ({ cards }) => {
  return <div className="results">{renderCards(cards)}</div>;
};

export default Results;
