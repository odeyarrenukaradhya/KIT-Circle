import './App.css';
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from './components/Landing';
import Homepage from "./pages/Homepage";
import BranchPageWrapper from "./pages/BranchPageWrapper";
import Notes from './components/Notes';
import Assignments from './components/Assignments';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/branch/:code" element={<BranchPageWrapper />} />

        {/* Resource pages */}
        <Route path="/resources/:branch/:year/:subject/notes" element={<Notes />} />
        <Route path="/resources/:branch/:year/:subject/assignments" element={<Assignments />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
