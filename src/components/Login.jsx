import styled from "styled-components";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import GoogleIcon from "@mui/icons-material/Google";
export default function Login() {
  function signin(e) {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => {
      alert(err.message);
    });
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="/images/slack-logo-icon.png" />
        <h1>SLACK 2.0</h1>
        <Button onClick={signin}>
          <GoogleIcon /> SignIn with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  background: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: var(--slack-color) !important;
    color: #fff;
    > .MuiSvgIcon-root {
      margin-right: 5px;
    }
  }
`;
