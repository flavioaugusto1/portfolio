import React from "react";
import { Toaster } from "sonner";
import ReactDOM from "react-dom/client";
import { Home } from "./page/home.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
    <Toaster position="top-right" />
  </React.StrictMode>,
);
