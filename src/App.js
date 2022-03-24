import "./styles.css";
import styled from "styled-components";
import store from './app/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Sidebar, Chat, Login } from "./components";

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
export default function App() {
const [user,loading] = useAuthState(auth);


  return (
    <div>
      <Router>
      {
        !user?(<Login />):(
          <Provider store = {store}>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
        </Provider>
        )
      }
        
      </Router>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
