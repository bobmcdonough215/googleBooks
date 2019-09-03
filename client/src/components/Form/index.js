import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">Search</label>
        <input
          value={q}
          name="q"
          type="text"
          className="form-control"
          placeholder="The Great Gatsby"
          id="Title"
          onChange={handleInputChange}
          required
        />
      </div>
      <button onClick={handleFormSubmit} type="submit" className="btn btn-success ml-2">
        Search
        </button>
    </form>
  );
}

export default SearchForm;