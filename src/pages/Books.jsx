import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("http://localhost:5000/books");
      const data = await res.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <button>
        <Link to="/add">Add Books</Link>
      </button>
      {books &&
        books.map((book) => (
          <div key={book.id}>
            <h1>{book.title}</h1>
            <p>{book.desc}</p>
            <p>{book.cover}</p>
          </div>
        ))}
    </div>
  );
}
