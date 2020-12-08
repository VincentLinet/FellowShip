import React from "react";
import Head from "next/head";

import HeadBar from "../src/components/layout/HeadBar";
import Content from "../src/components/layout/Content";
import SideBar from "../src/components/layout/SideBar";
import Seance from "../src/components/layout/seance";

import "../styles/design.css";

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
		recurrence: "0010000"
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

const App = ({ seances, seance, ...props }) => {
	return (
		<>
			<Head>
				<title>FellowShip</title>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<div className="app">
				<HeadBar />
				<Content>
					{/*<SideBar groups={seances}/>*/}
					<Seance seance={seance}/>
				</Content>
			</div>
		</>
	);
};

App.getInitialProps = async () => {
	return {
		seances: Seances,
		seance: Seances[0]
	};
};

export default App;
