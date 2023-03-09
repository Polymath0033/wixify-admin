import classes from "./Chat.module.css";
import avatar from "../assets/unsplash_TSZo17r3m0s.png";
import { SendIcon } from "./icons";
import { useRef, useState } from "react";
const Chat = () => {
  const [messages, setMessages] = useState([
    {
      driver: "You are chatting with Wittig Driver",
      request: "Hello, I am Muhammad and you are",
      date: new Date().toISOString(),
    },
  ]);
  const inputRef = useRef();
  const socket = new WebSocket("ws://localhost:3000/customers-feedback");
  socket.onopen = (e) => {
    console.log("Connection  is established");
    console.log("Sending server");
    socket.send(console.log("Hi John"));
  };
  socket.onmessage = (event) => {
    console.log(`message  sent ${event.data}`);
  };
  socket.onclose = (event) => {
    if (event.wasClean) {
      console.log(
        `Connection closed cleanly code=${event.code}  reason=${event.reason}`
      );
    } else {
      console.log("Connection died");
    }
  };
  socket.onerror = (e) => {
    console.log(`Error ${e}`);
  };
  const addMessage = () => {
    // e.preventDefault();
    const input = inputRef.current.value;
    const message = [
      { driver: "", request: input, date: new Date().toISOString() },
    ];
    console.log(message);
    setMessages([
      ...messages,
      { driver: "", request: input, date: new Date().toISOString() },
    ]);
    socket.onopen = () => {
      socket.send(
        setMessages([
          ...messages,
          { driver: "", request: input, date: new Date().toISOString() },
        ])
      );
    };
    inputRef.current.value = "";
  };
  return (
    <div className={classes.chat}>
      <header className={classes["chat-header"]}>
        <img src={avatar} alt="profile" />
        <div>
          <h2>Muhammad Jamiu </h2>
          <p>online</p>
        </div>
      </header>
      {messages.map((message) => (
        <div className={classes["chat-inner"]} key={message.date}>
          <div className={classes.date}>
            <h6>Today</h6>
          </div>
          <div className={classes.driver}>
            {message.driver.length > 0 && <p>{message.driver}</p>}
          </div>
          <div className={classes.request}>
            {message.request.length > 0 && <p>{message.request}</p>}
          </div>
        </div>
      ))}

      <div className={classes.bottom}>
        <h1>+</h1>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Type message here"
          minLength={1}
          required
          ref={inputRef}
        />
        <button onClick={addMessage} type="button">
          <i>
            <SendIcon />
          </i>
          send
        </button>
      </div>
    </div>
  );
};
export default Chat;
