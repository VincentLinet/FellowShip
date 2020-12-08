import Player from "../objects/Player";
import Group from "../objects/Group";
import React, {cloneElement, useState} from "react";

const Seance = ({ seance }) => {
	const [playerSelect, setPlayerSelect] = useState(null);

	const  selectPlayer = (id) => {
		seance.players.map((player) => {
			if (player.id == id)
				setPlayerSelect(player);
		})
	};
	const renderUser = (players) => {
		if (players)
			return players.map((player) => <Player key={player.id} selected={playerSelect.id == player.id} select={selectPlayer} {...player} />);
	};

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
