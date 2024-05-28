import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ updatePrice, plants, deletePlant }) {
  return (
    <ul className='cards'>
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          updatePrice={updatePrice}
          deletePlant={deletePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
