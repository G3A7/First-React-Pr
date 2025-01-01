import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="position-fixed top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center bg-dark   text-white  ">
      <div className="error">
        <Link className="btn mb-5 w-100 btn-outline-info" to="/">
          Home
        </Link>
        <h1>Not Found 4 0 4 😁</h1>
      </div>
    </div>
  );
}

export default NotFound;
