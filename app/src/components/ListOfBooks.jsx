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
      <div id="trial-div">
        {books.map((book) => (
          <div>
            {
              <div className="card mb-20" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {book.author}
                  </h6>
                  <img className="card-img" src={book.imageLink} />
                  <a href="#" className="btn">
                    Add to favorites
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
