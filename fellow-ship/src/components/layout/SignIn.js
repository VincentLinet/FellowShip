import React, { useState } from "react";

import Button from "../objects/Button";
import PopUp from "../objects/PopUp";
import Input from "../objects/Input";

const SignIn = ({ cancel, open, sign, ...props }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const changedEmail = (val) => setEmail(val);
  const changedPassword = (val) => setPassword(val);

  const connexion = () => sign({ email: email, password: password });

  return (
    <PopUp className="signin" show={open}>
      <div className="signin__inner">
        <div className="bold-input">
          <div className="bold-input__label">Email</div>
          <Input className="signin__email" placeholder="" changed={changedEmail} />
        </div>
        <div className="bold-input">
          <div className="bold-input__label">Password</div>
          <Input className="signin__password" placeholder="" hidden changed={changedPassword} />
        </div>
        <div className="signin__actions">
          <Button kind="tertiary" action={cancel}>
            Cancel
          </Button>
          <Button kind="primary" action={connexion}>
            Sign In
          </Button>
        </div>
        <div className="signin__passreset">I forgot my password</div>
      </div>
    </PopUp>
  );
};

export default SignIn;
