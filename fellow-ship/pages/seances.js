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
          "https://cdna.artstation.com/p/assets/images/images/036/627/258/4k/daryl-tan-jet-scream-moth.jpg?1618190503",
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
          "https://cdnb.artstation.com/p/assets/images/images/036/827/371/large/minovo-wang-41102.jpg?1618746499",
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
          "https://cdnb.artstation.com/p/assets/images/images/036/643/831/large/alexandr-leskinen-17s.jpg?1618464669",
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
        picture: "https://cdna.artstation.com/p/assets/images/images/031/342/846/4k/kan-liu-666k-manyue.jpg?1603333242",
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
