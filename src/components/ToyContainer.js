import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyCards, onDonation, onLikes }) {
  const toys = toyCards.map(toy => <ToyCard key={toy.id} toy={toy} onDonation={onDonation} onLikes={onLikes}></ToyCard>)
  return (
    <div id="toy-collection">{toys}</div>
  );
}

export default ToyContainer;
