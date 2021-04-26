import React, { useState } from "react";
import router from "next/router";
import classnames from "classnames";
import { serialize } from "../../services/format";
import StarIcon from "../icons/StarIcon";
import StarHalfIcon from "../icons/StarHalfIcon";
import MenuIcon from "../icons/MenuIcon";
import useRole from "../../hooks/useRole";

const Player = ({
  id,
  username,
  firstname,
  lastname,
  rate,
  picture,
  description,
  exp,
  role,
  classe,
  niveau,
  selected,
  seances,
  seance,
  select
}) => {
  const [visuDetail, setVisuDetail] = useState(false);
  const userRole = useRole(seance);
  const details = !selected && visuDetail;
  const rest = rate - Math.floor(rate);
  const half = rest > 0.25 && rest <= 0.75;
  const star = rest > 0.75;

  const showMenu = (e) => {
    e.stopPropagation();
  };

  const toggleDetail = () => setVisuDetail(!visuDetail);

  const goToProfile = (id) => () => router.push(`/adventurer/${id}`);
  const messagePlayer = (id) => () => {};

  const playerOptions = [
    { label: "View player profile", action: goToProfile(id) },
    { label: "Send private message", action: messagePlayer(id) }
  ];
  const masterOptions = [...playerOptions, { label: "Expel from session", warning: true, action: () => {} }];

  const renderDetail = () => (
    <div className="player__detail">
      <div className="player__detail__classe">{!role && `${classe} niveau ${niveau}`}</div>
      <div className="player__detail__classe">{`${seances.total} Games - ${seances.running} Running`}</div>{" "}
    </div>
  );

  const renderStar = (_, index) => <StarIcon key={`${username}-star-${index}`} />;

  const renderExperience = () => (
    <div className="player__info__experiences">
      <div className="player__info__experience">{`${exp}xp`}</div>
      <div className="player__info__stars">
        {Array.apply(null, Array(Math.floor(rate))).map(renderStar)}
        {half && <StarHalfIcon key={`${username}-star-half`} />}
        {star && <StarIcon key={`${username}-star-plus`} />}
      </div>
    </div>
  );

  const renderMenuOption = (roleOptions) =>
    roleOptions.map(({ label, action, warning }) => {
      const classes = classnames("player__info__menu__option", { "player__info__menu__option--warned": warning });
      return <div key={`option-${serialize(label)}`} className={classes} onClick={action} children={label} />;
    });

  const renderMenu = (role) => (
    <div className="player__info__menu-icon" onClick={showMenu}>
      <MenuIcon />
      <div className="player__info__menu">
        <div className="player__info__menu__inner" children={renderMenuOption(role ? masterOptions : playerOptions)} />
      </div>
    </div>
  );

  return (
    <div className={classnames("player", { selected })} onClick={toggleDetail}>
      <img className="player__picture" src={picture} alt={username} />
      <div className="player__info">
        {(details || !!role) && renderMenu(!!userRole)}
        <div className="player__info__username">{!role && `${username}`}</div>
        <div className="player__info__username">{!!role && "Maître du Jeu"}</div>
        <div className="player__info__name">{`${firstname} ${lastname}`}</div>
        <div className="player__info__classe">{!role && !details && `${classe}`}</div>
        {details && renderExperience()}
      </div>
      {details && !role && renderDetail()}
    </div>
  );
};

export default Player;
