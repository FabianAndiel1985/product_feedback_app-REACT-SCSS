import { Fragment } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Suggestions from "./components/suggestions";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";




function App() {

  return (

      <BrowserRouter>
        <Switch>
          <Provider store={store}>
            <Route path="/" exact>
              <Suggestions/>
            </Route>
          </Provider>
        </Switch>
      </BrowserRouter>
 

  );
}

export default App;
