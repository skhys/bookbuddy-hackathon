import React, { useState, useEffect } from "react";
import axios from "axios";
import BookType from "./Component/BookType/BookType";
import BookCard from "./Component/BookCard/BookCard";
//import logo from "./logo.svg";
import "./App.scss";

function App() {
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSearch = async () => {
    if (!genre) return;
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?subject=${genre}&limit=5`
      );
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  return (
    <>
      <header class="header">
        <nav class="nav">
          <h5>
            <a class="nav__link nav__link--active" href="index.html">
              Home
            </a>
          </h5>
        </nav>
      </header>

      <h1 className="book__title">Book Buddy</h1>
      
      <div className="book__search">
      <BookType onSearch={handleSearch} onGenreChange={handleGenreChange} />


      
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author_name ? book.author_name.join(", ") : "Unknown"}
          description={
            book.first_sentence
              ? book.first_sentence.join(". ")
              : "No description available."
          }
        />
      ))}
    </>
  );
}

export default App;
