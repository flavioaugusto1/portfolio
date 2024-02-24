import React from "react";
import { Toaster } from "sonner";
import ReactDOM from "react-dom/client";
import { Home } from "./page/home.tsx";
import "./index.css";
import { Menu } from "./components/Menu.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
    <Menu className="fixed left-10 bottom-10 " />
    <Toaster />
  </React.StrictMode>,
);
