import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:5000/books");
    const data = await res.json();
    setBooks(data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
console.log(books);
  const handleDelete = async (id) => {
    try {
      const book = await fetch(`http://localhost:5000/books/${id}`, {
        method: "DELETE",
      });
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button>
        <Link to="/add">Add Books</Link>
      </button>
      <div className="books">
        {books &&
          books.map((book) => (
            <div key={book.id}>
              <h1>{book.title}</h1>
              <p>{book.desc}</p>
              <p>{book.price}</p>
              <p>{book.cover}</p>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
              <button>
                <Link to={`/update/${book.id}`}>Update</Link>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
