import React, { useState } from "react";
import Head from "next/head";
import classnames from "classnames";
import { useRouter } from "next/router";

import DayPicker from "../src/components/objects/DayPicker";
import HeadBar from "../src/components/layout/HeadBar";
import Content from "../src/components/layout/Content";
import DrinkIcon from "../src/components/icons/DrinkIcon";
import FoodIcon from "../src/components/icons/FoodIcon";
import SmokeIcon from "../src/components/icons/SmokeIcon";
import StarIcon from "../src/components/icons/StarIcon";
import StarHalfIcon from "../src/components/icons/StarHalfIcon";

import "../styles/design.css";
import { serialize } from "../src/services/format";

const PLAYER = [
  {
    id: 100,
    username: "",
    firstname: "Vincent",
    lastname: "Cantal",
    recurrence: "0100100",
    rate: 4.5,
    reviews: 12,
    picture: "https://cdnb.artstation.com/p/assets/images/images/037/061/399/large/tolga-aksu-1.jpg?1619383394",
    cover:
      "https://cdna.artstation.com/p/assets/images/images/019/102/354/large/aaron-limonick-tree-sketch-final.jpg?1562028322",
    title: "La Main",
    exp: 10000,
    role: [0, 1],
    pro: true,
    classe: null,
    niveau: null,
    location: ["Lyon", "Villeurbanne"],
    bars: ["Archichouette"],
    rulesets: [{ name: "Dungeons & Dragons" }, { name: "Homebrew" }],
    genres: [{ name: "Heroic Fantasy" }],
    languages: [{ name: "French" }, { name: "English" }],
    food: 0,
    smoke: 2,
    alcohol: 1,
    sessions: [
      {
        title: "Les Prisonniers d'Andoral",
        description:
          "One of the player characters and his step-brother Joli, a friendly sort of guy, have both been taken as lovers by the same merchant's wife, who hides the affairs from her husband, encourages both lovers, and makes them intrigue against each other and her husband, at the same time planting seeds of suspicion in her husband, who is very jealous.",
        date: "Août 2020",
        ruleset: "Dungeons & Dragons",
        running: true
      },
      {
        title: "Yerruldeger",
        description:
          "A madman wanders into town, raving about the monsters that pursue him and his poor, lost love. He is obviously high born, and needs to be taken in. A few days later a squad of pursuers arrives, to find and arrest him for crimes against humanity and his own family, led by his advisor whose advice drove him quite mad, to this awful juncture. Imagine this as a sequel to Othello, with a jealous Iago pursuing tragic Othello to bring him back to justice.",
        date: "Juillet 2020",
        ruleset: "Dungeons & Dragons",
        running: true
      },
      {
        title: "Le mot est meutre",
        description:
          "Procsoutia falls in love with her twin sons Abon and Aromed, and causes them to lay with her. The results of these matings are monstrous and terrible.",
        date: "Mai 2020",
        ruleset: "Dungeons & Dragons",
        running: true
      },
      {
        title: "Fjölgard",
        description:
          "After declaring that only through sacrifice will our land embody IDEAL, a very well respected and loved elderly couple throw themselves onto a bonfire (with spectacular but unclear magical consequences). This would work best if the elders were either priests at a temple the PCs attend, or grandparents or parents of one or more of the PCs. The authorities, ignorant of the planned sacrifice, will have already dispatched troops to break up the gathering and arrest the leaders.",
        date: "Février 2020",
        ruleset: "Homebrew",
        running: true
      }
    ],
    characters: [{ name: "Tichion", job: "Guerrier", ruleset: "Dungeons & Dragons", level: 7, running: true }]
  },
  {
    id: 101,
    username: "Shushamour",
    firstname: "Simon",
    lastname: "Lovei",
    recurrence: "0100100",
    rate: 4,
    reviews: 7,
    picture:
      "https://s3-alpha-sig.figma.com/img/99fd/dec4/d3c07b33e7fccb906c8f0934efe8ff14?Expires=1619395200&Signature=fZ6n4fSk3cXaoFATmKaOuRA954x-aSCJ0Rsre056Rn0Zb-4nkPU3IQbGLqyU80bTi6PDkf1dwbYGE~TaFQS8KklkJyBapoNw3q0NRfD-jrbMTjHAtYKAIFWKnYq6GIWMyKPDDXHeHdxzc8X2fvEUMdHBEP9lS15orCVj3AaqflZG5QURF~0YmVXa48yOFmomjC7~pDHhVsUskQVzxLeC32eVFfb734eKN567CW9kjY4s47VjdcE1fRPSxu3yEe15jQOIFU4IYs5JT-6Tmx4am~Lpeuduy2iyh8mkxtlm2x3tkwLxwdlc5BxrmieYD94cWV4QsBdglfVDsavqpmSCgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    cover:
      "https://cdnb.artstation.com/p/assets/images/images/003/728/007/4k/sergey-vasnev-tundrus-final-arts.jpg?1476872943",
    title: "Softy Heart",
    exp: 100,
    role: [0],
    pro: false,
    classe: "Marchand",
    niveau: 3,
    seances: {
      total: 4,
      running: 2
    },
    location: ["Paris", "Versailles"],
    bars: [],
    rulesets: [{ name: "Dungeons & Dragons" }, { name: "Homebrew" }],
    genres: [{ name: "Steampunk" }, { name: "Sci-Fi" }, { name: "Horror" }],
    languages: [{ name: "French" }, { name: "English" }],
    food: 0,
    smoke: 0,
    alcohol: 0,
    sessions: [],
    characters: []
  },
  {
    id: 102,
    username: "Kyra",
    firstname: "Bernadette",
    lastname: "Lepileux",
    recurrence: "0100100",
    rate: 4.3,
    reviews: 4,
    picture:
      "https://cdna.artstation.com/p/assets/images/images/033/004/392/4k/jeremy-guerrieri-robot-deathmatch-v5.jpg?1608120071",
    cover:
      "https://cdna.artstation.com/p/assets/images/images/013/229/554/large/romain-rosiau-viking-fight-3.jpg?1538654530",
    title: "Viking et roulettes",
    exp: 1000,
    role: [0],
    pro: true,
    classe: "Guerrière",
    niveau: 4,
    seances: {
      total: 5,
      running: 1
    },
    location: ["Lyon"],
    bars: ["Moi J'men Fous je Triche"],
    rulesets: [{ name: "Dungeons & Dragons" }, { name: "King Arthur Pendragon" }],
    genres: [{ name: "Heroic Fantasy" }, { name: "Steampunk" }, { name: "Sci-Fi" }, { name: "Horror" }],
    languages: [{ name: "French" }, { name: "English" }],
    food: 0,
    smoke: 2,
    alcohol: 0,
    sessions: [],
    characters: []
  },
  {
    id: 103,
    username: "Xerceus",
    firstname: "Zac",
    lastname: "Soutiret",
    recurrence: "0100100",
    rate: 4.4,
    reviews: 6,
    picture:
      "https://s3-alpha-sig.figma.com/img/00fe/c956/307a8498fbc437786e2ea90e63fa7937?Expires=1619395200&Signature=W2hjVwdmd4rv64Pt6viRzzBDEP6FdymnsfztaTYiBJsorExuED0ob9gyeyb-zICGsdB93NaQGtgGu2oBQj7fAWbpMwmeZLS~2uvlRVzn1bgE0d0Io5vTrBFVV7CY17h88zR2tStvSpvNZiurDN4yNNZTnjB2t~sqryc6FUEfScSiJkUxyzI5G1lloTT~0b4e-6f5WPlHRTziYFb66ytWaQMK2lkPAN3OcOrHmWoDqTb3qnAjCzWW~sphLUneAobYs4eKc9zX2h5wg7oQlRoGOIWFsv8iodlEqL5~8~ZtM~UKBTASvFU0U3Apqa4ezsFbb3fhcqv~fgKHoE2OUgQ7UA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    cover:
      "https://cdna.artstation.com/p/assets/images/images/002/287/990/large/grzegorz-rutkowski-pirate-ship-battle-1920.jpg?1459801919",
    title: "Sportus Populus Que Rulus",
    exp: 1000,
    pro: false,
    role: [0],
    classe: "Ninja",
    niveau: 4,
    seances: {
      total: 3,
      running: 1
    },
    location: ["Genève"],
    rulesets: [{ name: "Warhammer" }],
    genres: [{ name: "Heroic Fantasy" }, { name: "Steampunk" }],
    languages: [{ name: "French" }, { name: "English" }],
    food: 1,
    smoke: 2,
    alcohol: 2,
    sessions: [],
    characters: []
  },
  {
    id: 104,
    username: "Héri la Spectrale",
    firstname: "Ismahane",
    lastname: "Petit",
    recurrence: "0100100",
    rate: 4.5,
    reviews: 15,
    picture:
      "https://s3-alpha-sig.figma.com/img/c9ec/f337/d0ea816dce427e3890a229bf09523a5b?Expires=1619395200&Signature=FFwWMweoDg0kNoRWFB14jCj6enGokwSXIOdkbTjR6dk-QkirTTQXpx5wAkjFEpdPLaqAWEHXUEZ55WlH1bZ1IOrVaWhLawqrhe2CFWKtRq3EvuJamFB1IaNFvvY1UITCXJ2lWYGW~ftCHETIi5I7P957omtInva0y4KQK2s2J~BeTGGXk-nCxAwXHfFQ-dZnpTT7SIRpn0SQzWSyissG6ehP0vRVgkqhLzuRp7Vmi8zgBobviYsz370QECD-9p7wBvHoCqYqNk8ambig0RlzXAuNCF14mNCzd27SlxurIZ4r1P3OBNNaFb-LNTyUvQyeONrKjkvmVpS80x0JxP07Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    cover:
      "https://cdnb.artstation.com/p/assets/images/images/007/898/717/large/martin-deschambault-aco-desert-poi-mdeschambault.jpg?1509217811",
    title: "👻",
    exp: 1000,
    role: [0],
    pro: false,
    classe: "Nécromancienne",
    niveau: 3,
    seances: {
      total: 1,
      running: 1
    },
    location: ["Lyon", "Villeurbanne"],
    bars: ["Archichouette"],
    rulesets: [
      { name: "Dungeons & Dragons" },
      { name: "13th Age" },
      { name: "Warhammer" },
      { name: "King Arthur Pendragon" },
      { name: "Homebrew" }
    ],
    genres: [{ name: "Heroic Fantasy" }, { name: "Steampunk" }, { name: "Sci-Fi" }, { name: "Horror" }],
    languages: [{ name: "French" }, { name: "English" }],
    food: 0,
    smoke: 2,
    alcohol: 2,
    sessions: [],
    characters: []
  },
  {
    id: 105,
    username: "Fruits Brisés",
    firstname: "Yvonne",
    lastname: "Reine",
    recurrence: "0100100",
    rate: 5,
    reviews: 17,
    picture:
      "https://s3-alpha-sig.figma.com/img/93df/4255/d957f18c194bd625cc38f4089f0dd0f9?Expires=1619395200&Signature=IUhZwc5jvQxOp12WBQmFIlfkxPosojBwUGMjw9CnboL6aacdjJsJHtAyGRcePPsxHqAN-q50p26SlWxnbAWAERx1eqUudmwCVusbbLqVhJJRAomYepxNVJP3Lv2whdep8-osREC0QWAzskc4dCnaZGiMG~sX7eCyZu45djR7knDI9ILA5jH5u33hxaOPN~oUx5P9UnusMPiVHqYFKzcVtUvqvd7DQx1lFyPn3HmI6UDVFDyRsci9HacQRf1YSlXlqnXVCfK1T99Oy4oX1fkP4wWcczBrwJNyYfstyJQznVy-Y-M5GVogvVxEj5e3Nl~1ZhpM-JclZkh55VXN7uXx9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    cover:
      "https://cdnb.artstation.com/p/assets/images/images/022/324/637/4k/atey-ghailan-elden-ring-submission-snatti.jpg?1574982733",
    title: "De sucre et de pulpe",
    exp: 1298,
    role: [0],
    pro: false,
    classe: "Druide",
    niveau: 4,
    seances: {
      total: 6,
      running: 4
    },
    location: ["Lyon", "Villeurbanne"],
    bars: ["Archichouette"],
    rulesets: [{ name: "Dungeons & Dragons" }],
    genres: [{ name: "Heroic Fantasy" }],
    languages: [{ name: "French" }, { name: "English" }],
    food: 1,
    smoke: 2,
    alcohol: 0,
    sessions: [],
    characters: []
  }
];

const FOODS = ["Food", "Neutral", "Fast"];
const SMOKE = ["Smoker", "Neutral", "Aerial"];
const DRINK = ["Alcohol", "Neutral", "Sober"];

const App = ({ ...props }) => {
  const { asPath } = useRouter();
  const id = Number(asPath.split("/")[2]);
  const [player] = PLAYER.filter((player) => player.id === id);
  if (!player) return null;
  const rest = player.rate - Math.floor(player.rate);
  const half = rest > 0.25 && rest <= 0.75;
  const star = rest > 0.75;
  const pictureClasses = classnames("adventurer__header__picture__container", {
    "adventurer__header__picture__container--pro": player.pro
  });

  const renderStar = (_, index) => <StarIcon key={`star-${index}`} />;

  return (
    <>
      <Head>
        <title>FellowShip</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <HeadBar />
        <Content>
          <div className="adventurer">
            <div className="adventurer__inner">
              <div className="adventurer__header">
                <img className="adventurer__header__cover" src={player.cover} alt="" />
                <div className="adventurer__header__profile">
                  <div className={pictureClasses}>
                    <img className="adventurer__header__picture" src={player.picture} alt="" />
                  </div>
                  <div className="adventurer__header__identity">
                    <div className="adventurer__header__name">{`${player.firstname} ${player.lastname}`}</div>
                    <div className="adventurer__header__title">{player.title}</div>
                  </div>
                </div>
              </div>
              <div className="adventurer__content">
                <div className="adventurer__sidebar">
                  <div className="adventurer__sidebar__inner">
                    <div className="adventurer__skills adventurer__roles">
                      <div className="adventurer__skills__title">Rate</div>
                      <div className="adventurer__skills__content">
                        <div className="adventurer__skills__content__stars">
                          {Array.apply(null, Array(Math.floor(player.rate))).map(renderStar)}
                          {half && <StarHalfIcon key={`star-half`} />}
                          {star && <StarIcon key={`star-plus`} />}
                        </div>
                        <div>{` (${player.reviews} avis)`}</div>
                      </div>
                      <div>{`${player.exp}xp`}</div>
                    </div>
                    <div className="adventurer__skills adventurer__roles">
                      <div className="adventurer__skills__title">Availability</div>
                      <div className="adventurer__skills__content">
                        <DayPicker days={player.recurrence} id={"0"} blocked />
                      </div>
                    </div>
                    <div className="adventurer__skills adventurer__roles">
                      <div className="adventurer__skills__title">Roles</div>
                      {player.role.map((role) => (
                        <div className="adventurer__skills__content" key="player">
                          {role === 0 ? "Joueur" : "Maître du Jeu"}
                        </div>
                      ))}
                    </div>
                    <div className="adventurer__skills adventurer__location">
                      <div className="adventurer__skills__title">Location</div>
                      {player.location.map((location) => (
                        <div className="adventurer__skills__content" key={serialize(location)}>
                          {location}
                        </div>
                      ))}
                      <div className="adventurer__skills__title">Bars & Places</div>
                      {player.bars.map((bars) => (
                        <div className="adventurer__skills__content" key={serialize(bars)}>
                          {bars}
                        </div>
                      ))}
                    </div>
                    <div className="adventurer__skills adventurer__rulsets">
                      <div className="adventurer__skills__title">Rulesets</div>
                      {player.rulesets.map(({ name }) => (
                        <div className="adventurer__skills__content" key={serialize(name)}>
                          {name}
                        </div>
                      ))}
                      <div className="adventurer__skills__title">Genres</div>
                      {player.genres.map(({ name }) => (
                        <div className="adventurer__skills__content" key={serialize(name)}>
                          {name}
                        </div>
                      ))}
                    </div>
                    <div className="adventurer__skills adventurer__languages">
                      <div className="adventurer__skills__title">Languages</div>
                      {player.languages.map(({ name }) => (
                        <div className="adventurer__skills__content" key={serialize(name)}>
                          {name}
                        </div>
                      ))}
                    </div>
                    <div className="adventurer__skills adventurer__community">
                      <div className="adventurer__skills__title">Community Skills</div>
                      <div className="adventurer__skills__content">
                        <FoodIcon className="adventurer__skills__icon" />
                        {FOODS[player.food]}
                      </div>
                      <div className="adventurer__skills__content">
                        <SmokeIcon className="adventurer__skills__icon" />
                        {SMOKE[player.smoke]}
                      </div>
                      <div className="adventurer__skills__content">
                        <DrinkIcon className="adventurer__skills__icon" />
                        {DRINK[player.alcohol]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="adventurer__information">
                  <div className="adventurer__information__inner">
                    <div className="adventurer__information__description">{player.description}</div>
                    <div className="adventurer__information__title">Aventures Dirigées</div>
                    <div className="adventurer__information__sessions">
                      {player.sessions.map(({ title, description, date, ruleset, running }) => (
                        <div className="adventurer__information__session">
                          <div className="adventurer__information__session__header">
                            <div className="adventurer__information__session__title">{title}</div>
                            <div className="adventurer__information__session__running">{running && "Running"}</div>
                          </div>
                          <div className="adventurer__information__session__info">
                            <div className="adventurer__information__session__ruleset">{ruleset}</div>
                            <div className="adventurer__information__session__date">{date}</div>
                          </div>
                          <div className="adventurer__information__session__description">{description}</div>
                        </div>
                      ))}
                    </div>
                    <div className="adventurer__information__title">Personnages</div>
                    <div className="adventurer__information__characters">
                      {player.characters.map(({ name, job, ruleset, level, running }) => (
                        <div className="adventurer__information__character">
                          <div className="adventurer__information__character__header">
                            <div className="adventurer__information__character__title">{name}</div>
                            <div className="adventurer__information__character__running">{running && "Running"}</div>
                          </div>
                          <div className="adventurer__information__character__info">
                            <div className="adventurer__information__character__job">{job}</div>
                            <div className="adventurer__information__character__level">{`Niveau ${level}`}</div>
                          </div>
                          <div className="adventurer__information__character__ruleset">{ruleset}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </>
  );
};

App.getInitialProps = async ({ asPath }) => {
  return {};
};

export default App;
