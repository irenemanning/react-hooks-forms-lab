import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [category, setCategory] = useState("Produce");
  const [name, setName] = useState();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleAddItem(e) {
    e.preventDefault();
    onItemFormSubmit({ category , name , id: uuid(), });

  }

  // const newItem = {
  //   id: uuid(), // the `uuid` library can be used to generate a unique id
  //   name: itemName,
  //   category: itemCategory,
  // };

  return (
    <form onSubmit={handleAddItem} className="NewItem">
      <label>
        Name:
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          name="name"
        />
      </label>

      <label>
        Category:
        <select
          onChange={handleCategoryChange}
          value={category}
          name="category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
