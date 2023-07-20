import React from "react";

import { BrowserRouter as Router, Route} from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat"; 
import "./main.css"

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.MIDDLE
}

function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
      <Route path="/" exact component={Join} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat" exact component={Chat} /> 
    </Provider>
  );
}

export default App;
