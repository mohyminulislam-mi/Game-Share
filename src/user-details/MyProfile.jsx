import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import UpdateProfilePopup from "../components/UpdateProfilePopup";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="py-14">
            <title>Game Share | My Profile</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          <div className="mx-auto">
            <img
              src={user?.photoURL}
              alt=""
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-center mb-1">
              {user?.displayName}
            </h1>
            <p>{user?.email}</p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="btn bg-green-500 text-white mt-4"
          >
            Update Profile
          </button>
          {open && <UpdateProfilePopup closeModal={() => setOpen(false)} />}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
