import React from "react";

function PlantCard({ plant, deletePlant }) {
  function handleDeletion() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((response) => response.ok)
      .then(() => deletePlant(plant.id));
  }

  return (
    <li className='card' data-testid='plant-item'>
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
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
