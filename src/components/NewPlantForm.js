import React from "react";

function NewPlantForm({ addNewPlant }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElement = event.target;

    const storeData = {
      name: formElement["name"].value,
      image: formElement["image"].value,
      price: formElement["price"].value,
    };

    addNewPlant(storeData);

    formElement.reset();
  }

  return (
    <div className='new-plant-form'>
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Plant name' />
        <input type='text' name='image' placeholder='Image URL' />
        <input type='number' name='price' step='0.01' placeholder='Price' />
        <button type='submit'>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
