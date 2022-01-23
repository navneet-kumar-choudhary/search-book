import axios from "axios";
import { useState, useCallback,useContext } from "react";
import {Outlet} from "react-router-dom"
import Book  from "../Book";
import {BookContext} from "../Context/BookContextProvider"

const API_KEY = "AIzaSyCqeqa7HeQg9Mn_pQQ8J5EiFFlmQmbMcqQ";
const END_POINT = "https://www.googleapis.com/books/v1/volumes";

const Books = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const {Books,dispatch} =useContext(BookContext)

  function handelChange(event) {
    setQuery(event.target.value);
  }
  const handleSubmit = useCallback(async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const {
        data: { items },
      } = await axios.get(
        `${END_POINT}?q=${query}&key=${API_KEY}&maxResults=40`
      );
      dispatch({type:"ADD_BOOK",payload:items})
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
                value={query}
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
            {Books.length > 0 &&
              Books.map((book) => (
                <Book key={book.id} book={book} />
              ))}
          </div>
        </div>
      </div>
  );
};

export default Books;
