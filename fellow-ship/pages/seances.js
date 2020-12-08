import React, {useState} from "react";
import Head from "next/head";

import HeadBar from "../src/components/layout/HeadBar";
import Content from "../src/components/layout/Content";
import SideBar from "../src/components/layout/SideBar";
import Seance from "../src/components/layout/seance";

import "../styles/design.css";
import Button from "../src/components/objects/Button";

const Seances = [
	{
		id: "40000",
		number_of_player: 6,
		title: "Les Prisonniers d'Andodal",
		description: "Dungeons & Dragons",
		location: "home",
		recurrence: "0100100",
		players:[{
			id: "100",
			username: "",
			firstname: "Vincent",
			lastname: "Cantal",
			rate: 4.5,
			picture: null,
			description: "",
			exp: 10000,
			role: 1,
			classe: null,
			niveau: null
		},{
			id: "101",
			username: "Shushamour",
			firstname: "Simon",
			lastname: "Lovei",
			rate: 4,
			picture: null,
			description: "",
			exp: 100,
			role: 0,
			classe: "marchand",
			niveau: 3
		},{
			id: "102",
			username: "Kyra",
			firstname: "Bernadette",
			lastname: "Lepileux",
			rate: 4.3,
			picture: null,
			description: "",
			exp: 1000,
			role: 0,
			classe: "guerrière",
			niveau: 4
		},{
			id: "103",
			username: "Xerceus",
			firstname: "Zac",
			lastname: "Soutiret",
			rate: 4.4,
			picture: null,
			description: "",
			exp: 1000,
			role: 0,
			classe: "ninja",
			niveau: 4
		},{
			id: "104",
			username: "Héri la Spectrale",
			firstname: "Ismahane",
			lastname: "Petit",
			rate: 4.5,
			picture: null,
			description: "",
			exp: 1000,
			role: 0,
			classe: "nécromancienne",
			niveau: 3
		},{
			id: "105",
			username: "Fruits Brisés",
			firstname: "Yvonne",
			lastname: "Reine",
			rate: 5,
			picture: null,
			description: "",
			exp: 1298,
			role: 0,
			classe: "druide",
			niveau: 4
		}]
	},
	{
		id: "40001",
		number_of_player: 5,
		title: "Yerruldeger",
		description: "Homebrew Rules",
		location: "home",
		recurrence: "0010000",
		players:[{
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
		},{
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
		},{
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
		},{
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
		}]
	},
	{
		id: "40002",
		number_of_player: 4,
		title: "Le mot est meutre",
		description: "Noctum",
		location: "home",
		recurrence: "1000000"
	},
	{
		id: "40003",
		number_of_player: 6,
		title: "Signe de Vie",
		description: "Shadowlands",
		location: "home",
		recurrence: "0000010"
	},
	{
		id: "40004",
		number_of_player: 4,
		title: "Fjölgard",
		description: "Homebrew Rules",
		location: "Lyon",
		recurrence: "0001001"
	}
];

const App = ({ seances, ...props }) => {
	const [seance, setSeance] = useState(Seances[0]);

	const deSelectGroup = () => setSeance(null);

	const selectVisuGroup = (id) => {
		seances.map((seance) => {
			if (seance.id == id)
				setSeance(seance);
		})
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
					{!!seance ? <Seance seance={seance}/> : <SideBar groups={seances} selectGroup={selectVisuGroup}/>}
					{!!seance &&<Button action={deSelectGroup}>Retour</Button>}
				</Content>
			</div>
		</>
	);
};

App.getInitialProps = async () => {
	return {
		seances: Seances
	};
};

export default App;
