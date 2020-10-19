import React from "react";

const Results = ({ number, type }) => {
  return (
    <div className="results-info">
      <div className="results-info__information">{`${number} ${type} found`}</div>
      <div className="results-info__help">Too much masters for you ? Try precising your expectations !</div>
    </div>
  );
};

export default Results;
