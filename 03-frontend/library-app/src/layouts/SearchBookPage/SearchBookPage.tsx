import { use, useEffect, useState } from "react";
import BookModel from "../../Models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchBook } from "./components/SearchBook";
import { Pagination } from "../Utils/Pagination";

export const SearchBookPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(5);
  const [totalAmountOfBooks, setTotalAmmountOfBook] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [searchUrl, setSearchUrl] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      //await promise to come back
      const baseUrl: string = "http://localhost:8080/api/books";
      let url: string = "";

      if (searchUrl === "") {
        url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
      } else {
        url = baseUrl + searchUrl;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const resposeJson = await response.json(); //covert response into json
      const responseData = resposeJson._embedded.books; // we want to call _embeded.books that we dont have to reuse this every single time

      setTotalAmmountOfBook(resposeJson.page.totalElements);
      setTotalPages(resposeJson.page.totalPages);
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
    window.scrollTo(0, 0); //Every time that we change page this command will return us in the top of our web site
  }, [currentPage, searchUrl]); //we want tto recall this current hook

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

  const searchHandleChange = () => {
    if (search === '') {
      setSearchUrl('');
    }else{
      setSearchUrl(`/search/findByTitleContaining?title=${search}&page=0&size=${booksPerPage}`)
    }
  }

  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
  let lastItem =
    booksPerPage * currentPage <= totalAmountOfBooks
      ? booksPerPage * currentPage
      : totalAmountOfBooks;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
                onChange={e =>setSearch(e.target.value)}
              />
              <button className="btn btn-btn-outline-success" onClick={() => searchHandleChange()}>
                Search
             </button>
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
            <h5>Number of results:({totalAmountOfBooks})</h5>
          </div>
          <p>
            {indexOfFirstBook + 1} to lastItem of {totalAmountOfBooks} items
          </p>
          {books.map((book) => (
            <SearchBook book={book} key={book.id} />
          ))}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          )}
          {/*only render pagination if totalPages are >1 */}
        </div>
      </div>
    </div>
  );
};
