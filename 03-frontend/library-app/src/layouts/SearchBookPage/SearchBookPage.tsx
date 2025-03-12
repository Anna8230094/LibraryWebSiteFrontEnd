import { useEffect, useState } from "react";
import BookModel from "../../Models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";

export const SearchBookPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      //await promise to come back
      const baseUrl: string = "http://localhost:8080/api/books";
      const url: string = `${baseUrl}?page=0&size=5`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const resposeJson = await response.json(); //covert response into json
      const responseData = resposeJson._embedded.books; // we want to call _embeded.books that we dont have to reuse this every single time
      const loadedBooks: BookModel[] = [];

      for (const key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailable,
          category: responseData[key].category,
          img: responseData[key].img,
        });
      }
      setBooks(loadedBooks);
      setLoading(false);
    };
    fetchBooks().catch((error: any) => {
      setLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container mt-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div>
        <div className=" row mt-5">
          <div className="col-6">
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Seaech"
                aria-labelledby="Search"
              />
              <button className="btn btn-btn-outline-success">Search</button>
            </div>
          </div>
          <div className="col-4">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toogle"
                type="button"
                id="dropdowNMenuButton1"
                data-bs-toogle="dropdown"
                aria-expanded="false"
              >
                Category
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdowNMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                  <a className="dropdown-item" href="#">
                    Front End
                  </a>
                  <a className="dropdown-item" href="#">
                    Back End
                  </a>
                  <a className="dropdown-item" href="#">
                    Data
                  </a>
                  <a className="dropdown-item" href="#">
                    Devops
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3">
            <h5>Number of results:(22)</h5>
          </div>
          <p>
            1 to 5 of 22 items  
          </p>
          {books.map(book => (
            <SearchBook book={book} key={book.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};
