import React, { useState } from "react";
import Head from "next/head";

import HeadBar from "../src/components/layout/HeadBar";
import Content from "../src/components/layout/Content";
import SideBar from "../src/components/layout/SideBar";
import Seance from "../src/components/layout/seance";
import Group from "../src/components/objects/Group";

import "../styles/design.css";
import Button from "../src/components/objects/Button";
import Chat from "../src/components/objects/Chat";

const SEANCES = [
  {
    id: 40000,
    number_of_player: 6,
    title: "Les Prisonniers d'Andodal",
    description: "Dungeons & Dragons",
    location: "home",
    recurrence: "0100100",
    picture:
      "https://cdna.artstation.com/p/assets/images/images/002/021/370/4k/wadim-kashin-after-death.jpg?1456105500",
    players: [
      {
        id: "100",
        username: "",
        firstname: "Vincent",
        lastname: "Cantal",
        rate: 4.5,
        picture: "https://cdnb.artstation.com/p/assets/images/images/037/061/399/large/tolga-aksu-1.jpg?1619383394",
        description: "",
        exp: 10000,
        role: 1,
        classe: null,
        niveau: null
      },
      {
        id: "101",
        username: "Shushamour",
        firstname: "Simon",
        lastname: "Lovei",
        rate: 4,
        picture:
          "https://s3-alpha-sig.figma.com/img/99fd/dec4/d3c07b33e7fccb906c8f0934efe8ff14?Expires=1619395200&Signature=fZ6n4fSk3cXaoFATmKaOuRA954x-aSCJ0Rsre056Rn0Zb-4nkPU3IQbGLqyU80bTi6PDkf1dwbYGE~TaFQS8KklkJyBapoNw3q0NRfD-jrbMTjHAtYKAIFWKnYq6GIWMyKPDDXHeHdxzc8X2fvEUMdHBEP9lS15orCVj3AaqflZG5QURF~0YmVXa48yOFmomjC7~pDHhVsUskQVzxLeC32eVFfb734eKN567CW9kjY4s47VjdcE1fRPSxu3yEe15jQOIFU4IYs5JT-6Tmx4am~Lpeuduy2iyh8mkxtlm2x3tkwLxwdlc5BxrmieYD94cWV4QsBdglfVDsavqpmSCgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        description: "",
        exp: 100,
        role: 0,
        classe: "Marchand",
        niveau: 3,
        seances: {
          total: 4,
          running: 2
        }
      },
      {
        id: "102",
        username: "Kyra",
        firstname: "Bernadette",
        lastname: "Lepileux",
        rate: 4.3,
        picture:
          "https://cdna.artstation.com/p/assets/images/images/033/004/392/4k/jeremy-guerrieri-robot-deathmatch-v5.jpg?1608120071",
        description: "",
        exp: 1000,
        role: 0,
        classe: "Guerrière",
        niveau: 4,
        seances: {
          total: 5,
          running: 1
        }
      },
      {
        id: "103",
        username: "Xerceus",
        firstname: "Zac",
        lastname: "Soutiret",
        rate: 4.4,
        picture:
          "https://s3-alpha-sig.figma.com/img/00fe/c956/307a8498fbc437786e2ea90e63fa7937?Expires=1619395200&Signature=W2hjVwdmd4rv64Pt6viRzzBDEP6FdymnsfztaTYiBJsorExuED0ob9gyeyb-zICGsdB93NaQGtgGu2oBQj7fAWbpMwmeZLS~2uvlRVzn1bgE0d0Io5vTrBFVV7CY17h88zR2tStvSpvNZiurDN4yNNZTnjB2t~sqryc6FUEfScSiJkUxyzI5G1lloTT~0b4e-6f5WPlHRTziYFb66ytWaQMK2lkPAN3OcOrHmWoDqTb3qnAjCzWW~sphLUneAobYs4eKc9zX2h5wg7oQlRoGOIWFsv8iodlEqL5~8~ZtM~UKBTASvFU0U3Apqa4ezsFbb3fhcqv~fgKHoE2OUgQ7UA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        description: "",
        exp: 1000,
        role: 0,
        classe: "Ninja",
        niveau: 4,
        seances: {
          total: 3,
          running: 1
        }
      },
      {
        id: "104",
        username: "Héri la Spectrale",
        firstname: "Ismahane",
        lastname: "Petit",
        rate: 4.5,
        picture:
          "https://s3-alpha-sig.figma.com/img/c9ec/f337/d0ea816dce427e3890a229bf09523a5b?Expires=1619395200&Signature=FFwWMweoDg0kNoRWFB14jCj6enGokwSXIOdkbTjR6dk-QkirTTQXpx5wAkjFEpdPLaqAWEHXUEZ55WlH1bZ1IOrVaWhLawqrhe2CFWKtRq3EvuJamFB1IaNFvvY1UITCXJ2lWYGW~ftCHETIi5I7P957omtInva0y4KQK2s2J~BeTGGXk-nCxAwXHfFQ-dZnpTT7SIRpn0SQzWSyissG6ehP0vRVgkqhLzuRp7Vmi8zgBobviYsz370QECD-9p7wBvHoCqYqNk8ambig0RlzXAuNCF14mNCzd27SlxurIZ4r1P3OBNNaFb-LNTyUvQyeONrKjkvmVpS80x0JxP07Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        description: "",
        exp: 1000,
        role: 0,
        classe: "Nécromancienne",
        niveau: 3,
        seances: {
          total: 1,
          running: 1
        }
      },
      {
        id: "105",
        username: "Fruits Brisés",
        firstname: "Yvonne",
        lastname: "Reine",
        rate: 5,
        picture:
          "https://s3-alpha-sig.figma.com/img/93df/4255/d957f18c194bd625cc38f4089f0dd0f9?Expires=1619395200&Signature=IUhZwc5jvQxOp12WBQmFIlfkxPosojBwUGMjw9CnboL6aacdjJsJHtAyGRcePPsxHqAN-q50p26SlWxnbAWAERx1eqUudmwCVusbbLqVhJJRAomYepxNVJP3Lv2whdep8-osREC0QWAzskc4dCnaZGiMG~sX7eCyZu45djR7knDI9ILA5jH5u33hxaOPN~oUx5P9UnusMPiVHqYFKzcVtUvqvd7DQx1lFyPn3HmI6UDVFDyRsci9HacQRf1YSlXlqnXVCfK1T99Oy4oX1fkP4wWcczBrwJNyYfstyJQznVy-Y-M5GVogvVxEj5e3Nl~1ZhpM-JclZkh55VXN7uXx9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        description: "",
        exp: 1298,
        role: 0,
        classe: "Druide",
        niveau: 4,
        seances: {
          total: 6,
          running: 4
        }
      }
    ]
  },
  {
    id: 40001,
    number_of_player: 5,
    title: "Yerruldeger",
    description: "Homebrew Rules",
    location: "home",
    recurrence: "0010000",
    picture:
      "https://cdna.artstation.com/p/assets/images/images/010/155/008/large/anton-fadeev-sketch-4-04-2018-x.jpg?1522862478",
    players: [
      {
        id: "100",
        username: "",
        firstname: "Martin",
        lastname: "Leveque",
        rate: 2.5,
        picture: null,
        description: "le mal incarné",
        exp: 666,
        role: 1,
        classe: null,
        niveau: null
      },
      {
        id: "101",
        username: "Airszi",
        firstname: "Etienne",
        lastname: "Roy",
        rate: 3,
        picture: null,
        description: "try hardeur",
        exp: 99999,
        role: 0,
        classe: "voleur",
        niveau: 2
      },
      {
        id: "102",
        username: "Auvi",
        firstname: "Victor",
        lastname: "Imbo",
        rate: 1.3,
        picture: null,
        description: "le mec chiant",
        exp: 3000,
        role: 0,
        classe: "troubadour",
        niveau: 2
      },
      {
        id: "103",
        username: "Arco",
        firstname: "Loic",
        lastname: "Janin",
        rate: 2.3,
        picture: null,
        description: "le rageux",
        exp: 1234,
        role: 0,
        classe: "cordonnier",
        niveau: 3
      }
    ]
  },
  {
    id: "40002",
    number_of_player: 4,
    title: "Le mot est meutre",
    description: "Noctum",
    location: "home",
    recurrence: "1000000",
    picture:
      "https://cdna.artstation.com/p/assets/images/images/002/890/432/large/wadim-kashin-marseille.jpg?1466937331"
  },
  {
    id: "40003",
    number_of_player: 6,
    title: "Signe de Vie",
    description: "Shadowlands",
    location: "home",
    recurrence: "0000010",
    picture:
      "https://cdna.artstation.com/p/assets/images/images/028/839/236/4k/christian-dimitrov-fantasy-land-2500.jpg?1595673819"
  },
  {
    id: "40004",
    number_of_player: 4,
    title: "Fjölgard",
    description: "Homebrew Rules",
    location: "Lyon",
    recurrence: "0001001",
    picture:
      "https://cdna.artstation.com/p/assets/images/images/010/601/496/4k/tyler-edlin-fantasy-landscape1.jpg?1525276483"
  }
];

const App = ({ seances, ...props }) => {
  const [current] = seances;
  const [seance, setSeance] = useState(current);
  const available = seances.filter(({ id }) => id !== seance.id);

  const openSelection = () => {};
  const deSelectGroup = () => setSeance(null);
  const selectVisuGroup = (id) => {
    seances.map((seance) => {
      if (seance.id === id) setSeance(seance);
    });
  };

  return (
    <>
      <Head>
        <title>FellowShip</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <HeadBar />
        <Content>
          <div className="groups">
            <Group {...seance} header />
            <div className="lists">
              <SideBar groups={available} selectGroup={selectVisuGroup} />
              <Seance seance={seance} openSelection={openSelection} />
              {/* {!!seance && <Button action={deSelectGroup}>Retour</Button>} */}
            </div>
          </div>
          <Chat />
        </Content>
      </div>
    </>
  );
};

App.getInitialProps = async () => {
  return {
    seances: SEANCES
  };
};

export default App;
