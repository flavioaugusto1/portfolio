import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Toaster } from "sonner";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Routes />
    <Toaster position="top-right" />
  </React.StrictMode>,
);
