import React, { useEffect, useState } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("http://localhost:5000/books");
      const data = res.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);
  console.log(books);
  return <div>Books</div>;
}
