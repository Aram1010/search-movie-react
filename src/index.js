import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { DataLayer } from "./context/DataLayer";
import { reducer, initialState } from "./context/reducer";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);
