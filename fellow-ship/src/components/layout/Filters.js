import React, { useState } from "react";

import ResultInfo from "./ResultInfo";
import Search from "../objects/Search";
import Toggle from "../objects/Toggle";
import Filter from "../objects/Filter";
import Scroll from "../objects/Scroll";
import DayPicker from "../objects/DayPicker";
import CheckList from "../objects/CheckList";

const GRADE = ["Pro", "All", "Free"];
const RULESETS = ["Dungeons & Dragons", "13th Age", "Warhammer", "King Arthur Pendragon", "Homebrew"];
const GENRE = ["Heroic Fantasy", "Steampunk", "Sci-Fi", "Horror"];
const LANGUAGE = ["French", "English"];
const FOOD = ["Food", "Neutral", "Fast"];
const SMOKER = ["Smoker", "Neutral", "Aerial"];
const ALCOHOL = ["Alcohol", "Neutral", "Sober"];

const Filters = () => {
  const [grade, setGrade] = useState(0);
  return (
    <div className="filters">
      <div className="filters__inner">
        <Search placeholders={["D&D", "Lyon"]}></Search>
        <ResultInfo number={5} type="Game Master"></ResultInfo>
        <Filter>
          <Toggle buttons={GRADE} onChange={setGrade} />
        </Filter>
        <Filter title="Availability" padded>
          <DayPicker days="0010100" />
        </Filter>
        <Filter title="Adventurers" padded>
          <Scroll />
        </Filter>
        <Filter title="Ruleset">
          <CheckList list={RULESETS}></CheckList>
        </Filter>
        <Filter title="Ruleset">
          <CheckList list={GENRE}></CheckList>
        </Filter>
        <Filter title="Ruleset">
          <CheckList list={LANGUAGE}></CheckList>
        </Filter>
        <Filter title="Community Skills" padded>
          <Toggle buttons={FOOD} />
          <Toggle buttons={SMOKER} />
          <Toggle buttons={ALCOHOL} />
        </Filter>
      </div>
    </div>
  );
};

export default Filters;
