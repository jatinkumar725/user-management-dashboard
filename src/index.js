import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Axios from "./Axios";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Axios />
  </StrictMode>
);
