import React, { useEffect, useState } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("http://localhost:5000/books");
      const data = await res.json();
      console.log(data)
      setBooks(data);
    };
    fetchBooks();
  }, []);
 
  return <div>Books</div>;
}
