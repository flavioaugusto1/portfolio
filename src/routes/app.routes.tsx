import { Routes, Route } from "react-router-dom";
import { Home } from "../page/home";
import { Jobs } from "../page/jobs";
import { Studies } from "./studies";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/studies" element={<Studies />} />
    </Routes>
  )
}