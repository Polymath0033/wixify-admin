import { useState, useEffect, useRef } from "react";
import avatar from "../assets/unsplash_TSZo17r3m0s.png";
import { SendIcon } from "./icons";
import classes from "./Chat.module.css";
import { useMatches } from "react-router-dom";
let room = "";
const Chat = ({ socket }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const location = useMatches();
  const scroll = useRef();
  location.map(({ params }) => socket.emit("join_room", params.chat));
  location.map(({ params }) => (room = params.chat));
  const sendMessage = async () => {
    if (message === "") {
      return;
    }
    const messageData = {
      room: room,
      username: "Wittig",
      message: message,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };
    await socket.emit("send_message", messageData);

    setMessages((list) => [...list, messageData]);
    // scroll.current.scrollIntoView({ behavior: "smooth" });
    // console.log(scroll);
  };
  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollTop = scroll.current.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    socket.on("received_message", (data) => {
      setMessages((list) => [...list, data]);
    });
    // return () => socket.off("received_message");
  }, [socket]);
  return (
    <>
      <div className={classes.chat}>
        <header className={classes["chat-header"]}>
          <img src={avatar} alt="profile" />
          <div>
            <h2>Muhammad Jamiu </h2>
            <p>online </p>
          </div>
        </header>
        <div ref={scroll}>
          {messages?.map((message, index) => (
            <div className={classes["chat-inner"]} key={index}>
              <div className={classes.date}>
                {/* <h6>{message.time}</h6> */}
              </div>
              <div
                className={
                  message.username === "Wittig"
                    ? classes.request
                    : classes.driver
                }
              >
                {message.message.length > 0 && <p>{message.message}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className={classes.bottom}>
          <h1>+</h1>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Type message here"
            minLength={1}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button type="submit" onClick={sendMessage}>
            <i>
              <SendIcon />
            </i>
            send
          </button>
        </div>
      </div>
    </>
  );
};
export default Chat;
