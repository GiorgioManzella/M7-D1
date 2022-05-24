import "./App.css";
import Board from "./components/board.jsx";
import SearchBar from "./components/searchBar.jsx";
import FilterBoard from "./components/filterBoard.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/app/store.js";
import Favourites from "../src/components/favourites.jsx";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <SearchBar />
          <Switch>
            <Route exact path="/" component={Board} />
            <Route path="/:mickeyMouse" component={FilterBoard} />
            <Route path="/favourites" component={Favourites} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
