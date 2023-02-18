import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingSection from "./Routes/Landing/LandingSection";
import NotFound from "./Routes/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
