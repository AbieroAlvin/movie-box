import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="cursor-pointer font-semibold text-4xl text-white">
          Movie<span className="font-bold text-red-600">BOX</span>
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-6 text-white">Account</button>
          </Link>

          <button
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-6 text-white">Sign In</button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
