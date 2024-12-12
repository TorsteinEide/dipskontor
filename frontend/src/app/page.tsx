'use client';

import Tabbar from "./components/tabbar";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Events from "./pages/events";
import Ideabank from "./pages/ideabank";

export default function Home() {
  return(
    <HashRouter>
      <Routes>
            <Route index element={<Events />} />
            <Route path="ideabank" element={<Ideabank />} />
      </Routes>
      <Tabbar/>
    </HashRouter>
  );
}
