import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plants) => {
        console.log(plants);
        setPlants(plants);
      });
  }, []);

  return (
    <ul className='cards'>
      {plants.map((plant) => (
        <PlantCard plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
