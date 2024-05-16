import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Reusable/Header/Header";

export default function Course() {
  const courseID = useParams();
  return (
    <>
      <Header />
    
    </>
  );
}
