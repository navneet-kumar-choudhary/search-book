import { useParams } from "react-router-dom";
import { BookContext } from "../Context/BookContextProvider";
import { useContext, useEffect, useState } from "react";

const BookDetail = () => {
  const { id } = useParams();
  const [ResultBook, setResultBook] = useState({});
  const { Books } = useContext(BookContext);

  useEffect(() => {
    if (id) {
      setResultBook(Books.find((Book) => Book.id === id));
    }
  }, [id]);
  const imageContainer = {
    display: "flex",
    width: "100%",
    alignItems: "center",
  };

  const figure = {
    border: "1px #cccccc solid",
    padding: "4px",
    margin: "auto",
  };

  const figcaption = {
    backgroundColor: "black",
    color: "white",
    fontStyle: "italic",
    padding: "2px",
    textAlign: "left",
  };

  return (
    <div style={{ padding: "2rem" }}>
      {/* <h1>Book - {id}</h1> */}
      {!id && <h1>Book with given Id- {id} is not available</h1>}
      {/* <p>{JSON.stringify(ResultBook, 2)}</p> */}
      {/* {console.log({ ResultBook })}; */}
      <div style={imageContainer}>
        <figure style={figure}>
          {
            <img
              src={ResultBook?.volumeInfo?.imageLinks?.thumbnail}
              alt={ResultBook?.volumeInfo?.title}
              title={ResultBook?.volumeInfo?.title.toString()}
              height={"200px"}
              width={"200px"}
            />
          }
          <figcaption style={figcaption}>
            {ResultBook?.volumeInfo?.title}
          </figcaption>
        </figure>
      </div>
      <p
        style={{
          textAlign: "justify",
          fontWeight: "600",
          padding: "1rem",
        }}
      >
        {ResultBook?.volumeInfo?.description}
      </p>
      <h1 style={{ fontSize: "25px" }}>
        Average Rating :{" "}
        {ResultBook?.volumeInfo?.averageRating
          ? ResultBook?.volumeInfo?.averageRating
          : 0}
      </h1>
      {console.log(ResultBook?.volumeInfo?.averageRating)}
      <h1 style={{ fontSize: "25px" }}>
        Reading Link -{" "}
        <span>
          <a target="_blank" href={ResultBook?.volumeInfo?.previewLink}>
            {ResultBook?.volumeInfo?.previewLink}
          </a>
        </span>
      </h1>
    </div>
  );
};

export default BookDetail;
