import React from "react";
import { useReducer } from "react";
import Head from "next/head";

import { FiltersContext, reducer, initialFilters, SET_CATEGORY, SET_NUMBER } from "../src/controllers/search-context";

import HeadBar from "../src/components/layout/HeadBar";
import Content from "../src/components/layout/Content";
import Filters from "../src/components/layout/Filters";
import Results from "../src/components/layout/Results";

import "../styles/design.css";

const CARDS = [
  {
    id: "40000",
    firstname: "Jonathan",
    lastname: "Escoffier",
    picture: "photo2.png",
    city: "Lyon",
    days: "0110101",
    adventurers: { min: 2, max: 5 },
    keywords: ["Dungeons & Dragons", "Homebrew", "Heroic Fantasy"],
    price: 50
  },
  {
    id: "40001",
    firstname: "Marc",
    lastname: "Jacquier",
    picture: "photo1.jpeg",
    city: "Lyon",
    days: "0100110",
    adventurers: { min: 1, max: 4 },
    keywords: ["Dungeons & Dragons", "Homebrew", "Heroic Fantasy"]
  },
  {
    id: "40002",
    firstname: "Enzo",
    lastname: "Sardou",
    picture: "photo5.jpg",
    city: "Paris",
    days: "0001001",
    adventurers: { min: 2, max: 4 },
    keywords: ["Dungeons & Dragons", "Homebrew", "Heroic Fantasy"]
  },
  {
    id: "40003",
    firstname: "Orianne",
    lastname: "Massé",
    picture: "photo4.jpg",
    city: "Bordeaux",
    days: "0011100",
    adventurers: { min: 3, max: 5 },
    keywords: ["Dungeons & Dragons", "Homebrew", "Heroic Fantasy"]
  },
  {
    id: "40004",
    firstname: "Robert",
    lastname: "Roux",
    picture: "photo3.jpeg",
    city: "Paris",
    days: "1000011",
    adventurers: { min: 3, max: 4 },
    keywords: ["Dungeons & Dragons", "Homebrew", "Heroic Fantasy"]
  }
];

const App = ({ cards, ...props }) => {
  const [filters, dispatch] = useReducer(reducer, initialFilters);

  return (
    <>
      <Head>
        <title>FellowShip</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <HeadBar />
        <Content>
          <FiltersContext.Provider value={{ filters, dispatch }}>
            <Filters />
          </FiltersContext.Provider>
          <Results cards={cards} />
        </Content>
      </div>
    </>
  );
};

App.getInitialProps = async () => {
  return {
    cards: CARDS
  };
};

export default App;
