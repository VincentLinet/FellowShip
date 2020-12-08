import React from "react";

const Player = ({ id, username, firstname, lastname, rate, picture, description, exp, role, classe, niveau}) => {
	return (
		<div className="player">
			<div className="player__picture">
				{/*ajouter la photo*/}
			</div>
			<div className="player__info">
				<div className="player__info__username">{!role && `${username}`}</div>
				<div className="player__info__username">{!!role && "Maître du Jeu"}</div>
				<div className="player__info__name">{`${firstname} ${lastname}`}</div>
				<div className="player__info__classe">{!role && `${classe}`}</div>
			</div>
			<div className="player__detail">
				{/*mettre le detail au click*/}
			</div>
		</div>
	);
};

export default Player;
