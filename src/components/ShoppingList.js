import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchText, setSearchText] = useState("");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // const newItem = {
    //   id: uuid(), // the `uuid` library can be used to generate a unique id
    //   name: itemName,
    //   category: itemCategory,
    // };
    function handleAddItem(e) {
      e.preventDefault()
      const name = e.target.elements[0].value
      console.log(name)

    }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem}/>
      <Filter
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
