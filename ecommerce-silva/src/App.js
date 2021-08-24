import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/IteamListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Welcome to the Ecommerce"></ItemListContainer>
          </Route>
          <Route exact path="/:category/:id">
          <ItemDetailContainer greeting="Remarked Tables"></ItemDetailContainer>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
