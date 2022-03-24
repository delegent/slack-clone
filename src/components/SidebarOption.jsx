import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { useState } from "react";
import db from "../firebase";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
// import {useDispatch} from 'react-redux';
export default function SidebarOption({ Icon, addChannelOption, title, id }) {
  const dispatch = useDispatch();
  // const [channelName, setChannelName] = useState("");
  function addChannel(e) {
    const channelName = prompt("Enter the channel Name");
    e.preventDefault();
    if (channelName) {
      db.collection("rooms").add({
        name: channelName
      });
    }
  }

  function selectChannel() {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id
        })
      );
    }
  }

  return (
    <>
      <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
      >
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <span>#</span>
            {title}
          </SidebarOptionChannel>
        )}
      </SidebarOptionContainer>
    </>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;
  align-items: center;
  transition: 0.4s;
  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
