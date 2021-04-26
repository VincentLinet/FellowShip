import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { store } from "../../services/storage";

import Link from "next/link";
import SignIn from "./SignIn";
import FellowShip from "../logo/FellowShip";
import Button from "../objects/Button";

const HeadBar = ({ ...props }) => {
  const [signing, setSigning] = useState(false);
  const [logged, setLogged] = useState(false);

  const { replace, prefetch } = useRouter();
  useEffect(() => {
    prefetch("/");
  }, []);

  const toggleDialog = (state) => () => setSigning(state !== undefined ? state : !signing);
  const toggleLog = (state) => () => setLogged(state !== undefined ? state : !logged);
  const cancelSignIn = () => toggleDialog(false);

  const sign = async (body) => {
    const { error, user } = await login(body);
    if (error) return console.log(error);
    toggleLog();
    store.user = user;
    toggleSigning();
    replace("/");
  };

  return (
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
        <Button kind="tertiary" action={toggleDialog()}>
          Sign In
        </Button>
      </div>
      <SignIn cancel={cancelSignIn} sign={sign} open={signing} />
    </div>
  );
};

export default HeadBar;
