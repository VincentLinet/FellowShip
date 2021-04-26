import React, { useContext } from "react";

import { FiltersContext } from "../../controllers/search-context";
import {
  SET_CATEGORY,
  SET_NUMBER,
  SET_AVAILABILITY,
  SET_RULESET,
  SET_GENRE,
  SET_LANGUAGE,
  SET_FOOD,
  SET_SMOKER,
  SET_ALCOHOL
} from "../../controllers/search-context";

import ResultInfo from "./ResultInfo";
import Search from "../objects/Search";
import Toggle from "../objects/Toggle";
import Filter from "../objects/Filter";
import Scroll from "../objects/Scroll";
import DayPicker from "../objects/DayPicker";
import CheckList from "../objects/CheckList";

const GRADE = ["Pro", "All", "Free"];
const RULESETS = [
  { name: "Dungeons & Dragons" },
  { name: "13th Age" },
  { name: "Warhammer" },
  { name: "King Arthur Pendragon" },
  { name: "Homebrew" }
];
const GENRE = [{ name: "Heroic Fantasy" }, { name: "Steampunk" }, { name: "Sci-Fi" }, { name: "Horror" }];
const LANGUAGE = [{ name: "French" }, { name: "English" }];
const FOOD = ["Food", "Neutral", "Fast"];
const SMOKER = ["Smoker", "Neutral", "Aerial"];
const ALCOHOL = ["Alcohol", "Neutral", "Sober"];

const Filters = () => {
  const { filters, dispatch } = useContext(FiltersContext);

  const dispatchFilters = {
    category: (choice) => dispatch({ type: SET_CATEGORY, category: choice }),
    availability: (days) => dispatch({ type: SET_AVAILABILITY, availability: days }),
    number: (choice) => dispatch({ type: SET_NUMBER, number: choice }),
    ruleset: (choice) => dispatch({ type: SET_RULESET, ruleset: choice }),
    genre: (choice) => dispatch({ type: SET_GENRE, genre: choice }),
    language: (choice) => dispatch({ type: SET_LANGUAGE, language: choice }),
    food: (choice) => dispatch({ type: SET_FOOD, food: choice }),
    smoker: (choice) => dispatch({ type: SET_SMOKER, smoker: choice }),
    alcohol: (choice) => dispatch({ type: SET_ALCOHOL, alcohol: choice })
  };

  return (
    <div className="filters">
      <div className="filters__inner">
        <Search placeholders={["D&D", "Lyon"]}></Search>
        <ResultInfo number={5} type="Game Master"></ResultInfo>
        <Filter>
          <Toggle buttons={GRADE} value={filters.category} onChange={dispatchFilters.category} />
        </Filter>
        <Filter title="Availability" padded>
          <DayPicker days={filters.availability} onChange={dispatchFilters.availability} />
        </Filter>
        <Filter title="Adventurers" padded>
          <Scroll number min={filters.number.min} max={filters.number.max} onChange={dispatchFilters.number} />
        </Filter>
        <Filter title="Ruleset">
          <CheckList list={filters.ruleset || RULESETS} onChange={dispatchFilters.ruleset}></CheckList>
        </Filter>
        <Filter title="Genre">
          <CheckList list={filters.genre || GENRE} onChange={dispatchFilters.genre}></CheckList>
        </Filter>
        <Filter title="Language">
          <CheckList list={filters.language || LANGUAGE} onChange={dispatchFilters.language}></CheckList>
        </Filter>
        <Filter title="Community Skills" padded>
          <Toggle buttons={FOOD} value={filters.food} onChange={dispatchFilters.food} />
          <Toggle buttons={SMOKER} value={filters.smoker} onChange={dispatchFilters.smoker} />
          <Toggle buttons={ALCOHOL} value={filters.alcohol} onChange={dispatchFilters.alcohol} />
        </Filter>
      </div>
    </div>
  );
};

export default Filters;
