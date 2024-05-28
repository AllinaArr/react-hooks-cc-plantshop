import React, { useState } from "react";

function PlantCard({ updatePrice, plant, deletePlant }) {
  const [newPrice, setNewPrice] = useState(plant.price);

  function handleUpdate() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ plant: newPrice }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => updatePrice(updatedPlant));
  }

  function handleNewPrice(event) {
    setNewPrice(event.target.value);
  }

  function handleDeletion() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((response) => response.ok)
      .then(() => deletePlant(plant.id));
  }

  const inStock = (plant) => {
    return plant.inStock;
  };

  return (
    <li className='card' data-testid='plant-item'>
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        Price: {plant.price}
        <button onClick={handleUpdate}>Update</button>
        {/* <input type='number' value={newPrice} onChange={handleNewPrice} /> */}
      </p>
      {inStock(plant) ? (
        <button className='primary'>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button className='secondary' onClick={handleDeletion}>
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
