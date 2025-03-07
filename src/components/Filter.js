import React from "react";

function Filter({ onCategoryChange, searchText, onSearchTextChange }) {
  function handleSearchChange(e) {
    onSearchTextChange(e.target.value);
  }
  return (
    <div className="Filter">
      <input
        onChange={handleSearchChange}
        value={searchText}
        type="text"
        name="search"
        placeholder="Search..."
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
