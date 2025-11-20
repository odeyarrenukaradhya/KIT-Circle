import React from "react";
import { useParams, Navigate } from "react-router-dom";
import BranchPage from "../components/BranchPage";
import "../index.css";

export default function BranchPageWrapper() {
  const { code } = useParams();

  console.log("Wrapper param code:", code);

  const allowed = ["cse", "ise", "ece", "aiml", "civil", "mech"];

  if (!allowed.includes(code)) {
    return <Navigate to="/" replace />;
  }

  return <BranchPage branch={code} />;
}
