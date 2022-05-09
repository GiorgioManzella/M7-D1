import "./App.css";
import Board from "./components/board.jsx";
import SearchBar from "./components/searchBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/Company" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
