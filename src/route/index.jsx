import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

//-------------------Admin Panel--------------------//
const Homepage = lazy(() => import("../components/Homepage"));

const RouteIndex = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="*" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouteIndex;
