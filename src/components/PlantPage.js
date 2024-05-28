import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plants) => {
        console.log(plants);
        setPlants(plants);
      });
  }, []);

  function addNewPlant(plant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: plant.name,
        price: plant.price,
        image: plant.image,
      }),
    })
      .then((response) => response.json())
      .then((newPlant) => setPlants([...plants, newPlant]));
  }

  function deletePlant(id) {
    const plantsArray = plants.filter((plant) => plant.id !== id);
    setPlants(plantsArray);
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search />
      <PlantList plants={plants} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
