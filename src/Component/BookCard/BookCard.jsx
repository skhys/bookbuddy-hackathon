import React from "react";
import "../BookCard/BookCard.scss";

function BookCard({ title, author, firstPublishYear, cover_i }) {
  return (
    <div className="book-card">
      <img
        src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
        alt={`Cover of ${title}`}
        className="book-cover"
      />
      <div className="book-info">
        <h3 className="book-info__title">{title}</h3>
        <p className="book-info__author">{author}</p>
        <p className="book-info__publishyear">Published: {firstPublishYear}</p>
      </div>
    </div>
  );
}

export default BookCard;
