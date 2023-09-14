import "./App.css";
import ListOfBooks from "./components/ListOfBooks";

function App() {
  return (
    <div className="App">
      <h1>CodeOp Library</h1>

      <h2>Welcome please choose your book of preference</h2>
      <div className="books-container container mt-40">
        <h2>Books</h2>
        <ListOfBooks />
      </div>
      <div className="favourites container">
        <h2>Favourites</h2>
      </div>
    </div>
  );
}

export default App;
