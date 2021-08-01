import React from "react";

function ToyCard({ toy, onDonation, onUpdate }) {


  function handleLikes(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "patch",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        likes: toy.likes + 1
      })
    }).then(res => res.json())
      .then(updatedObj => onUpdate(updatedObj))
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => handleLikes(toy.id)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => onDonation(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
