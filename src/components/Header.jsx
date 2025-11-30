import { Link, NavLink, useNavigate } from "react-router";
import UserImg from "../assets/user.png";
import Logo from "../assets/Logo.png";
import { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";

const Header = () => {
  const { user, singOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSingOut = () => {
    singOutUser()
      .then(() => {
        Swal.fire({
          title: "Log Out Successful",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const menus = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-11/12 mx-auto navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menus}
          </ul>
        </div>
        <Link to="/" className="w-[200px]">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
        {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menus}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user?.photoURL}
                />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow mt-3 w-52 p-2 z-50"
            >
              <li>
                <Link
                  to="/my-profile"
                  className="font-bold flex items-center gap-1 justify-center hover:bg-green-50"
                >
                  <CgProfile /> Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleSingOut}
                  className="mt-2 bg-green-500 text-white py-2 rounded flex items-center justify-center gap-1"
                >
                  <IoExitOutline /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-2">
            <Link
              to="/login"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="border border-green-500 text-green-500 px-4 py-2 rounded"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default Header;
