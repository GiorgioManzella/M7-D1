import "./App.css";
import Board from "./components/board.jsx";
import SearchBar from "./components/searchBar.jsx";
import FilterBoard from "./components/filterBoard.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Switch>
          <Route exact path="/" component={Board} />
          <Route path="/:mickeyMouse" component={FilterBoard} />
          <Route path="/favorite" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
