import { Fragment } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Suggestions from "./pages/index/index";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FeedbackDetail from "./pages/feedbackDetail/FeedbackDetail";
import NewFeedback from "./pages/newFeedback/newFeedback.page.jsx";
import { Helmet } from "react-helmet";


function App() {

  return (
      <BrowserRouter>
      <Helmet>
      <title>
        Product-Feedback-App
      </title>
      <meta name="keywords" content="Feedback, Products, Comments" />
      </Helmet>
        <Switch>
          <Provider store={store}>
            <Route path="/" exact>
              <Suggestions/>
            </Route>
            <Route path="/feedback/:id" exact >
              <FeedbackDetail/>
            </Route>
            <Route path="/new-feedback/" exact >
              <NewFeedback/>
            </Route>
          </Provider>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
