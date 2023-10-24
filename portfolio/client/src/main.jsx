import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  rootElement
);
