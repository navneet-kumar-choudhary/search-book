import "./App.css";
import { BrowserRouter as Router, Routes, Route,Redirect } from "react-router-dom";
import Books from "./component/Books";
import BookDetail from "./component/BookDetail";
import BookContextProvider from "./component/Context/BookContextProvider";

const App = () => {
  return (
    <BookContextProvider>
      <Router>
        <Routes>
          <Route path="/" index element={<Books />}/>
          <Route path="/:id" element={<BookDetail />} />
        </Routes>
      </Router>
    </BookContextProvider>
  );
};

export default App;
