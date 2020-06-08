import React from "react";
import "./App.css";
import MediaCard from "./components/MediaCard";
import Gate from "./components/Gate";

function App() {
  return (
    <React.Fragment>
      <MediaCard
        title="Media Card"
        body="Lorem ipsum dolor sit amet."
        img_Url="https://i.pinimg.com/originals/cc/18/8c/cc188c604e58cffd36e1d183c7198d21.jpg"
      ></MediaCard>
      <Gate isOpen={true}></Gate>
    </React.Fragment>
  );
}

export default App;
