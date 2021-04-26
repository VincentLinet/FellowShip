import { createContext } from "react";

export const FiltersContext = createContext(null);

export const initialFilters = {
  category: 1,
  number: { min: 0, max: 0 },
  availability: "0000000",
  food: 1,
  smoker: 1,
  alcohol: 1
};

export const SET_CATEGORY = "SET_CATEGORY";
export const SET_AVAILABILITY = "SET_AVAILABILITY";
export const SET_NUMBER = "SET_NUMBER";
export const SET_RULESET = "SET_RULESET";
export const SET_GENRE = "SET_GENRE";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_FOOD = "SET_FOOD";
export const SET_SMOKER = "SET_SMOKER";
export const SET_ALCOHOL = "SET_ALCOHOL";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, category: action.category };
    case SET_AVAILABILITY:
      return { ...state, availability: action.availability };
    case SET_NUMBER:
      return { ...state, number: action.number };
    case SET_RULESET:
      return { ...state, ruleset: action.ruleset };
    case SET_GENRE:
      return { ...state, genre: action.genre };
    case SET_LANGUAGE:
      return { ...state, language: action.language };
    case SET_FOOD:
      return { ...state, food: action.food };
    case SET_SMOKER:
      return { ...state, smoker: action.smoker };
    case SET_ALCOHOL:
      return { ...state, alcohol: action.alcohol };
    default:
      return initialFilters;
  }
};
