import { useEffect, useState } from "react";
import axios from "axios";
// const axios = require("axios").default;
// import books from "../public/books.json";

export default function ListOfBooks() {
  const [books, SetBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await axios("./public/books.json");
      console.log(response);
      SetBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBooks();
    console.log("books.json", books);
  }, []);
  return <div></div>;
}
