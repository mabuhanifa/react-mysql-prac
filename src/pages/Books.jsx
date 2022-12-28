import React, { useEffect, useState } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("http://localhost:5000/books");
      const data = await res.json();
      console.log(data);
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      {books &&
        books.map((book, i) => (
          <div key={i}>
            <h1>{book.title}</h1>
            <p>{book.desc}</p>
            <p>{book.cover}</p>
          </div>
        ))}
    </div>
  );
}
