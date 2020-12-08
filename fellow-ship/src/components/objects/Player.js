import React, {cloneElement, useState} from "react";

const Player = ({ id, username, firstname, lastname, rate, picture, description, exp, role, classe, niveau}) => {
	const [visuDetail, setVisuDetail] = useState(false);

	const toggleDetail = () => setVisuDetail(!visuDetail);

	const renderDetail = () => (
		<div className="player__detail">
			<div className="player__detail__classe">{!role && `${classe} niveau ${niveau}`}</div>
			<div className="player__detail__classe">{`${description}`}</div> {/*a remplacer par le nombre de seance*/}
		</div>
	);

	return (
		<div className="player" onDoubleClick={toggleDetail}>
			<div className="player__picture">
				{/*ajouter la photo*/}
			</div>
			<div className="player__info">
				<div className="player__info__username">{!role && `${username}`}</div>
				<div className="player__info__username">{!!role && "Maître du Jeu"}</div>
				<div className="player__info__name">{`${firstname} ${lastname}`}</div>
				<div className="player__info__classe">{!role && !visuDetail && `${classe}`}</div>
				<div className="player__info__experience">{!!visuDetail && `${exp} xp étoiles: ${rate}`}</div>
			</div>
			{!!visuDetail && renderDetail()}
		</div>
	);
};

export default Player;
