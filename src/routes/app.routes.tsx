import { Routes, Route } from "react-router-dom";
import { Home } from "../page/home";
import { Jobs } from "../page/jobs";
import { Studies } from "../page/studies";
import { Setup } from "../page/setup";
import { Animes } from "../page/animes";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/jobs" element={<Jobs />} />
      <Route path="/studies" element={<Studies />} />

      <Route path="/setup" element={<Setup />} />
      <Route path="/animes" element={<Animes />} />
    </Routes>
  )
}