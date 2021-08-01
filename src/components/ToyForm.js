import React, { useState } from "react";

function ToyForm({ onAddToy }) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleSubmit(e) {
    const data = {
      name: formData.name,
      image: formData.image,
      likes: formData.likes
    }
    e.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(newToy => onAddToy(newToy))
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"

          onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
