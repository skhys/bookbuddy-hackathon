import React from "react";
import "../BookType/BookType.scss";

function BookType({ onSearch, onGenreChange }) {
  return (
    <div className="book-card">
      <label htmlFor="booktypes">Select BookType:</label>
      <select id="booktypes" className="book-dropdown" onChange={onGenreChange}>
        <option value="">Select a Genre</option>
        <option value="fiction">Fiction</option>
        <option value="science_fiction">Science Fiction</option>
        <option value="fantasy">Fantasy</option>
        <option value="mystery">Mystery</option>
        <option value="thriller">Thriller</option>
      </select>
      <button id="searchButton" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default BookType;
