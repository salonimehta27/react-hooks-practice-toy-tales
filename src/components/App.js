import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyCards, setToyCards] = useState([])

  useState(() => {
    fetch('http://localhost:3001/toys')
      .then(res => res.json())
      .then(cardsArray => setToyCards(cardsArray))
  }, [])
  function addToy(newToy) {
    setToyCards(...toyCards, newToy)
  }
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDonation(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "delete"
    })
    setToyCards(toyCards.filter((toy) => toy.id !== id))
  }
  function handleUpdate(updatedToy) {
    const updatedToys = toyCards.filter((toy) => toy.id === updatedToy.id ? updatedToy : toy)
    setToyCards(updatedToys)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toycards={toyCards} onDonation={handleDonation} onUpdate={handleUpdate} />
    </>
  );
}

export default App;
