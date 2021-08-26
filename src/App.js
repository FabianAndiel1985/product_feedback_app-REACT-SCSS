import { Fragment } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Suggestions from "./components/suggestions/index";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FeedbackDetail from "./components/feedback/FeedbackDetail";




function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Provider store={store}>
            <Route path="/" exact>
              <Suggestions/>
            </Route>
            <Route path="/feedback/:id" exact >
              <FeedbackDetail/>
            </Route>
          </Provider>
        </Switch>
      </BrowserRouter>
 

  );
}

export default App;
