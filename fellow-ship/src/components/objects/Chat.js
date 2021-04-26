import * as React from "react";
import { useEffect, useState } from "react";
import { serialize } from "../../services/format";
import Input from "./Input";

const MESSAGES = [
  {
    author: {
      name: "Sushamour",
      picture:
        "https://cdna.artstation.com/p/assets/images/images/036/627/258/4k/daryl-tan-jet-scream-moth.jpg?1618190503"
    },
    time: "15h18",
    message: "Ca vous va du coup 18h Vendredi ?"
  },
  {
    author: {
      name: "Kyra",
      picture:
        "https://cdna.artstation.com/p/assets/images/images/033/004/392/4k/jeremy-guerrieri-robot-deathmatch-v5.jpg?1608120071"
    },
    time: "15h21",
    message: "Si possible je préférerais qu’on commence à 19h je quitte le boulot à 18h30 :s"
  },
  {
    author: {
      name: "Vincent Cactal",
      picture: "https://cdnb.artstation.com/p/assets/images/images/037/061/399/large/tolga-aksu-1.jpg?1619383394"
    },
    time: "15h27",
    message: "N’attendez pas mon accord, je ferai mes horaires selon vous !"
  }
];

const USER = {
  name: "Vincent Cactal",
  picture: "https://cdnb.artstation.com/p/assets/images/images/037/061/399/large/tolga-aksu-1.jpg?1619383394"
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
      const hasRoll = target.value.startsWith("/roll");
      const dice = hasRoll ? Number(target.value.split(" ")[1]) : 0;
      const roll = dice
        ? {
            author: {
              name: "Fellow",
              picture:
                "https://cdna.artstation.com/p/assets/images/images/032/281/222/4k/mickael-lelievre-b34r-01.jpg?1605981126"
            },
            time: `${now.getHours()}h${now.getMinutes()}`,
            message: `${USER.name} rolled ${Math.ceil(Math.random() * dice)}.`
          }
        : undefined;
      setMessages([...messages, newMessage, roll]);
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
