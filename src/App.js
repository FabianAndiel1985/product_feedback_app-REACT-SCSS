import { Fragment } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Suggestions from "./components/suggestions";
import "./App.css";



function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Suggestions/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
