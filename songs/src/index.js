import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'

import reducers from "./reducers";
import App from "./components/App";

createRoot(document.querySelector("#root")).render(
  <Provider store={configureStore({reducer: reducers})}>
    <App />
  </Provider>
);
