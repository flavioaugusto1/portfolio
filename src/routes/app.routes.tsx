import { Routes, Route } from "react-router-dom";
import { Home } from "../page/home";
import { Jobs } from "../page/jobs";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  )
}