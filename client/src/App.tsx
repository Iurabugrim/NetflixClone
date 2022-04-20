import React from "react";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/watch/:id" element={<Watch />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
