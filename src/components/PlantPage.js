import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

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
        inStock: plant.inStock,
      }),
    })
      .then((response) => response.json())
      .then((newPlant) => setPlants([...plants, newPlant]));
  }

  function updatePlantPrice(updatedPrice) {
    const updatedPriceArray = plants.map((plant) => {
      if (plant.id !== plant.id) {
        return plant;
      } else {
        return updatedPrice;
      }
    });

    setPlants(updatedPriceArray);
  }

  function deletePlant(id) {
    const plantsArray = plants.filter((plant) => plant.id !== id);
    setPlants(plantsArray);
  }

  function handleSearch(search) {
    setSearch(search);
  }

  const plantsDisplayed = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search onSearch={handleSearch} />
      <PlantList
        updatePrice={updatePlantPrice}
        plants={plantsDisplayed}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
