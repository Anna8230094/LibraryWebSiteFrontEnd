import { Link } from "react-router";

export const ExploreTopBooks = () => {
  return (
    <div className="p-5 mb-4bg-dark header">
      <div
        className="container-fluid py-5 text-white
            d-flex justify-content-center align-items-center"
      >
        <div>
          <h1 className="display-5 fw-bold">Find your next adventure</h1>
          <p className="col-md-5 fs-4">Where would you like go next</p>
          <Link
            type="button"
            className="btn main-color btn-lg text-white"
            to="/search"
          >
            Explore Top Books
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ExploreTopBooks;
