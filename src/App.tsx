import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Authentication from "./Routes/Authentication";
import Navigation from "./Components/Navigation/Navigation";
import * as React from "react";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </>
  );
}

export default App;
