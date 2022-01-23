import "./App.css";
import axios from "axios";
import { useState, useCallback } from "react";

const API_KEY = "AIzaSyCqeqa7HeQg9Mn_pQQ8J5EiFFlmQmbMcqQ";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);

  function handelChange(event) {
    setBook(event.target.value);
  }
  const handleSubmit = useCallback(async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      const {
        data: { items },
      } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${API_KEY}&maxResults=40`
      );
      setResult(items);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  });

  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-3">Book Search App</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={book}
              onChange={handelChange}
              className="form-control mt-3 mb-3"
              placeholder="Search for Books"
              autoComplete="off"
            />
            <button type="submit" className="btn btn-danger mb-3">
              Search
            </button>
          </div>
        </form>
        <div className="row">
          {isLoading && <h2>Loading...</h2>}
          {result.length > 0 &&
            result.map((book, index) => (
              <a
                className="col-md-2 border border-primary rounded m-1"
                href={"#"}
                key={index}
              >
                <figure>
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                </figure>
                <figcaption>{book.volumeInfo.title}</figcaption>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
