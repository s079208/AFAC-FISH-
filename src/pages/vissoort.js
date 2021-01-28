import React from "react";
import Galerij from "../components/Galerij";

const galerij = {
  date: new Date(),
  avatarUrl1Name:"paling",
  avatarUrl2Name:"karper",
  avatarUrl3Name:"voorn",
  avatarUrl4Name:"snoek",
  avatarUrl1: "../img/paling.jpg",
  avatarUrl2: "../img/karper.jpg",
  avatarUrl3: "../img/voorn.jpg",
  avatarUrl4: "../img/snoek.jpg"
};

export default function Vissoorten() {
  return (
    <>
      <h2>Vissoorten</h2>
      <Galerij
        avatarUrl1Name={galerij.avatarUrl1Name}
        avatarUrl1={galerij.avatarUrl1}
        avatarUrl2Name={galerij.avatarUrl2Name}
        avatarUrl2={galerij.avatarUrl2}
        avatarUrl3Name={galerij.avatarUrl3Name}
        avatarUrl3={galerij.avatarUrl3}
        avatarUrl4Name={galerij.avatarUrl4Name}
        avatarUrl4={galerij.avatarUrl4}
      />
    </>
  );
}
