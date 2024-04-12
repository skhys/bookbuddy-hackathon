import React from "react";
import "../BookCard/BookCard.scss";

function BookCard({ title, author, description }) {
  return (
    <div className="book-card">
      <div className="book-info">
        <h3 className="book-info__title">{title}</h3>
        <p className="book-info__author">{author}</p>
        <p className="book-info__description">{description}</p>
      </div>
    </div>
  );
}

export default BookCard;
