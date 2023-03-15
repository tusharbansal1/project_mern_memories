import React from "react";
import Login from "./components/Login/Login";
import Memories from "./components/Memories/Memories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "../src/utils/PrivateRoutes";
import PublicRoutes from "../src/utils/PublicRoutes";
import NotFound from "../src/components/Not Found/Not Found";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/memories" element={<Memories />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
