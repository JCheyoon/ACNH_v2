import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Authentication from "./Routes/Authentication";
import Navigation from "./Components/Navigation/Navigation";
import * as React from "react";
import Villagers from "./Routes/Villagers";
import Encyclopedias from "./Routes/Encyclopedias";
import Collections from "./Routes/Collections";
import ScrollToTopBtn from "./UI/ScrollToTopBtn.component";

function App() {
  return (
    <>
      <Navigation />
      <ScrollToTopBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/villagers" element={<Villagers />} />
        <Route path="/encyclopedia/:type" element={<Encyclopedias />} />
        <Route path="/collections/:type" element={<Collections />} />
      </Routes>
    </>
  );
}

export default App;
