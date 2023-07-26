import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";

const root = createRoot(document.getElementById("container")!);
root.render(
   <StrictMode>
      <App />
   </StrictMode>
);