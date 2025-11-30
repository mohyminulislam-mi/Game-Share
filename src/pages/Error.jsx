import { Link } from "react-router";
import error404 from ".././assets/error-404.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Error = () => {
  return (
    <div>
      <title>Got Error!</title>
      <Header />
      <div className="flex-1 w-11/12 mx-auto">
        <div className="p-15 text-center">
          <div className="flex justify-center mb-5">
            <img className="text-center" src={error404} />
          </div>
          <h1 className="font-bold text-4xl">Oops, Page not found!</h1>
          <p className="text-[#627382] my-2">
            The page you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn b gbtn h-10 bg-linear-to-r from-indigo-500 to-purple-500 text-white mt-5"
          >
            {" "}
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
