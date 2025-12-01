import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
let container = document.getElementById("app");
let root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
