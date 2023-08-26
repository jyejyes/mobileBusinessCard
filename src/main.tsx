import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";
import reset from "./styles/reset.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={reset} />
    <App />
  </React.StrictMode>,
);
