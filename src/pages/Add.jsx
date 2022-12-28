import React, { useState } from "react";

export default function Add() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);
  return (
    <div className="form">
      <h1>Add books</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        onClick={handleChange}
      />
      <input
        type="text"
        placeholder="desc"
        name="desc"
        onClick={handleChange}
      />
      <input
        type="number"
        placeholder="price"
        name="price"
        onClick={handleChange}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        onClick={handleChange}
      />
    </div>
  );
}
