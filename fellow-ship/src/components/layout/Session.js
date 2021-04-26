import * as React from "react";
import { useState, useEffect } from "react";

import { store } from "../../services/storage";

import Player from "../objects/Player";
import Group from "../objects/Group";

const Seance = ({ seance, openSelection }) => {
  const [playerSelectId, setPlayerSelectId] = useState(null);
  const { id, players = [] } = seance;

  useEffect(() => {
    const playerSelectId = store?.user?.id || 100;
    setPlayerSelectId(playerSelectId);
  });

  const selectPlayer = (id) => setPlayerSelectId(id);

  const renderPlayer = (player) => (
    <Player key={player.id} selected={playerSelectId == player.id} select={selectPlayer} seance={id} {...player} />
  );

  const renderUsers = (players) => players.map(renderPlayer);

  return (
    <div className="seance">
      <div className="seance__players">
        {/* <Group key={seance.id} openSelection={openSelection} {...seance} header /> */}
        <div className="seance__players-list">{renderUsers(players)}</div>
        <div className="seance__filler" />
      </div>
    </div>
  );
};

export default Seance;
