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

  return (
    <div>
      <div id="trial-div mt-20">
        {books.map((book) => (
          <div>
            {
              <div className="card mb-20" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    {book.author}
                  </h6>
                  <h3 className="card-title">{book.title}</h3>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {book.pages} pages
                  </h6>
                  <img className="card-img" src={book.imageLink} />
                  <a href="#" className="btn font-weight-bold">
                    READ MORE
                  </a>
                </div>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
}
