import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({q, handleInputChange, handleFormSubmit}) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input
          value={q}
          onChange={handleInputChange}
          name="q"
          type="text"
          className="form-control"
          placeholder="The Great Gatsby"
          id="Title"
        />
        <button onClick={props.handleFormSubmit} type="submit" className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;