import * as React from "react";
import { useEffect, useState } from "react";
import { serialize } from "../../services/format";
import Input from "./Input";

const MESSAGES = [
  {
    author: {
      name: "Sushamour",
      picture:
        "https://s3-alpha-sig.figma.com/img/99fd/dec4/d3c07b33e7fccb906c8f0934efe8ff14?Expires=1619395200&Signature=fZ6n4fSk3cXaoFATmKaOuRA954x-aSCJ0Rsre056Rn0Zb-4nkPU3IQbGLqyU80bTi6PDkf1dwbYGE~TaFQS8KklkJyBapoNw3q0NRfD-jrbMTjHAtYKAIFWKnYq6GIWMyKPDDXHeHdxzc8X2fvEUMdHBEP9lS15orCVj3AaqflZG5QURF~0YmVXa48yOFmomjC7~pDHhVsUskQVzxLeC32eVFfb734eKN567CW9kjY4s47VjdcE1fRPSxu3yEe15jQOIFU4IYs5JT-6Tmx4am~Lpeuduy2iyh8mkxtlm2x3tkwLxwdlc5BxrmieYD94cWV4QsBdglfVDsavqpmSCgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    time: "15h18",
    message: "Ca vous va du coup 18h Vendredi ?"
  },
  {
    author: {
      name: "Kyra",
      picture:
        "https://s3-alpha-sig.figma.com/img/3365/170f/dcbc21078d28910395533d80a95a2ed7?Expires=1619395200&Signature=Xbz78wBPL9LcPTZTiNn7l~TOa8jNSWIZkTddJykTxq3DdOQTf2KqwBtlHmstK0gQemNoN-xcAziqtn3h9yDIAKD3GJeJ2G76qpIMjxtTsulLmzEa74AWMhMeJUJpsM-d2hSdXV7suV-xlLYp-gErkS4RyceSnxkrjiO0V7tRW8qugBb2lp57xSe6j9HOcu8bccmXalRcTEiayCx2JUbkgkYu21XjN8nFS2pJWrCzW70-rVXa5SnkyvKLgLOl28BWvidNEqUWU24m9hO3UGCfZeXGp9ZU3x8AMNkbycFPqIUJu1--ptUJ40pN5U0f7uR-M4l6hOw12c-5wtOqMuUf8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    time: "15h21",
    message: "Si possible je préférerais qu’on commence à 19h je quitte le boulot à 18h30 :s"
  },
  {
    author: {
      name: "Vincent Cactal",
      picture:
        "https://s3-alpha-sig.figma.com/img/c125/d70f/e10bf3a0c2b523d3cc39425d6c9f7029?Expires=1619395200&Signature=hv6uNbJrHiIwgQkJPKGFoYjbjZFz1D8yXtRdHkUFFayVvODN-IWhmVR~dEfkNIlkF0sqAbOUTpqFVvXRnpx4P0rizP3Ry4TGtNWvWJYb16BvhSKU1JCFf1nFa6ERrRiGzMg1VoF9fdhtERF9qDqe3TYMfWPACqCxpaIY-s~AfUSpsOypWSL7yYSPbd8HedlFrOTiAxNnUT3GFWLbT5Na4QaPTpwNmbYdGY7CctignOgzBVUHx6YLI68Gm0XAlRecKLNFBEzC8C0Tlwf8zqnOoL0QQPIO4Hgs4SXJbX8LNBhSGGQAm-M6OB-~sEdPBboS2Fs22mqgyz7PhJhZFG5dyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    time: "15h27",
    message: "N’attendez pas mon accord, je ferai mes horaires selon vous !"
  }
];

const USER = {
  name: "Vincent Cactal",
  picture:
    "https://s3-alpha-sig.figma.com/img/c125/d70f/e10bf3a0c2b523d3cc39425d6c9f7029?Expires=1619395200&Signature=hv6uNbJrHiIwgQkJPKGFoYjbjZFz1D8yXtRdHkUFFayVvODN-IWhmVR~dEfkNIlkF0sqAbOUTpqFVvXRnpx4P0rizP3Ry4TGtNWvWJYb16BvhSKU1JCFf1nFa6ERrRiGzMg1VoF9fdhtERF9qDqe3TYMfWPACqCxpaIY-s~AfUSpsOypWSL7yYSPbd8HedlFrOTiAxNnUT3GFWLbT5Na4QaPTpwNmbYdGY7CctignOgzBVUHx6YLI68Gm0XAlRecKLNFBEzC8C0Tlwf8zqnOoL0QQPIO4Hgs4SXJbX8LNBhSGGQAm-M6OB-~sEdPBboS2Fs22mqgyz7PhJhZFG5dyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
};

const Message = ({ author, time, message }) => (
  <div className="chat__messages__message">
    <img className="chat__messages__message__picture" src={author.picture} alt="" />
    <div className="chat__messages__message__text">
      <div className="chat__messages__message__header">
        <div className="chat__messages__message__name">{author.name}</div>
        <div className="chat__messages__message__time">{time}</div>
      </div>
      <div className="chat__messages__message__content">{message}</div>
    </div>
  </div>
);

const renderMessage = (props, index) => <Message key={`${serialize(props.author.name)}-${index}`} {...props} />;

const Chat = ({ room, ...props }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const get = async () => {
      const messages = MESSAGES;
      setMessages(messages);
    };

    messages.length === 0 && get();
  });

  const onEnterPressed = ({ key, target }) => {
    if (key === "Enter") {
      const now = new Date();
      const newMessage = {
        author: USER,
        time: `${now.getHours()}h${now.getMinutes()}`,
        message: target.value
      };
      setMessages([...messages, newMessage]);
    }
  };

  return (
    <div className="chat">
      <div className="chat__messages">
        <div className="chat__messages__inner">{messages.map(renderMessage)}</div>
      </div>
      <div className="chat__write">
        <Input placeholder="Message..." pressed={onEnterPressed} reset />
      </div>
    </div>
  );
};

export default Chat;
