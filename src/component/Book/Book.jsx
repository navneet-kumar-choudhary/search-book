import {Link} from "react-router-dom"

const Book = ({book}) => {
  return <Link to={`/${book.id}`} className="col-md-2 border border-primary rounded m-1"
>
  <figure>
    <img
      src={book.volumeInfo.imageLinks?.thumbnail}
      alt={book.volumeInfo.title}
    />
  </figure>
  <figcaption>{book.volumeInfo.title}</figcaption>
</Link>;
};

export default Book;
