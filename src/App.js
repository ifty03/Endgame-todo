import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Completed from "./Pages/Completed/Completed";
import Todo from "./Pages/Todo/Todo";
import Calender from "./Pages/Calender/Calender";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/completed" element={<Completed />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/calendar" element={<Calender />}></Route>
      </Routes>
    </div>
  );
}

export default App;
