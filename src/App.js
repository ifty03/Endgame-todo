import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Completed from "./Pages/Completed/Completed";
import Todo from "./Pages/Todo/Todo";
import Calender from "./Pages/Calender/Calender";
import { Toaster } from "react-hot-toast";
import Login from "./Shared/Login/Login";
import SignUp from "./Shared/Login/SignUp";
import RequireAuth from "./Component/RequireAuth";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Todo />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/completed"
          element={
            <RequireAuth>
              <Completed />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/todo"
          element={
            <RequireAuth>
              <Todo />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/calendar"
          element={
            <RequireAuth>
              <Calender />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
