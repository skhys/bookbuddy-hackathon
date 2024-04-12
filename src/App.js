import React, { useState } from "react";
import axios from "axios";
import BookType from "./Component/BookType/BookType";
import BookCard from "./Component/BookCard/BookCard";
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
      const response = await axios.get(`https://openlibrary.org/search.json`, {
        params: {
          subject: genre,
          fields: "key,title,author_name,cover_i,first_publish_year",
          limit: 5,
        },
      });
      const booksData = response.data.docs.map((book) => ({
        key: book.key,
        title: book.title,
        author: book.author_name ? book.author_name.join(", ") : "Unknown",
        firstPublishYear: book.first_publish_year,
        cover_i: book.cover_i,
      }));
      setBooks(booksData);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  return (
    <>
      <h1 className="site-main__title">Book Buddy</h1>
      <BookType onSearch={handleSearch} onGenreChange={handleGenreChange} />
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          firstPublishYear={book.firstPublishYear}
          cover_i={book.cover_i}
        />
      ))}
    </>
  );
}

export default App;
