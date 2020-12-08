import Player from "../objects/Player";
import Group from "../objects/Group";
import React from "react";

const renderUser = (players) => {
	if (players)
		return players.map((player) => <Player key={player.id} {...player} />);
};

const Seance = ({ seance }) => {
	return (
		<div className="seance">
			<div className="seance__players">
				<Group key={seance.id} {...seance} />
				<div className="list__user">{renderUser(seance.players)}</div>
			</div>
		</div>
	);
};

export default Seance;
