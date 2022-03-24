import { Button } from "@mui/material";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import db , { auth } from "../firebase";
export default function ChatInput({ chatRef, channelName, channelId }) {
const [ user] = useAuthState(auth);
  const [input, setInput] = useState(null);
  function sendMessage(e) {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL
    });

    chatRef.current.scrollIntoView({
      behaviour:"smooth"
    })

    setInput("");
  }
  console.log(channelName);

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button
          hidden
          style={{ display: "none" }}
          onClick={sendMessage}
          type="submit"
        >
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: solid 1px gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
`;
