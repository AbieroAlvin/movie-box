import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
