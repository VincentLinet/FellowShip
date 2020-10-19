import React from "react";

import Link from "next/link";
import FellowShip from "../logo/FellowShip";
import Button from "../objects/Button";

const HeadBar = ({ ...props }) => (
  <div className="headbar">
    <Link as="/" href="/">
      <div className="title">
        <div className="logo">
          <FellowShip height="16px" width="16px" />
        </div>
        <div className="name">FellowShip</div>
      </div>
    </Link>
    <div className="login">
      <Button kind="primary">I am a master</Button>
      <Button kind="secondary">I am a player</Button>
      <Button kind="tertiary">Sign In</Button>
    </div>
  </div>
);

export default HeadBar;
