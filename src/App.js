import {BrowserRouter, Switch, Route} from "react-router-dom";
import Suggestions from "./pages/index/index";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FeedbackDetail from "./pages/feedbackDetail/FeedbackDetail";
import NewFeedback from "./pages/newFeedback/newFeedback.page.jsx";
import Roadmap from "./pages/roadmap/roadmap.page";
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
            <Route path="/feedback/:id">
              <FeedbackDetail/>
            </Route>
            <Route path="/new-feedback/">
              <NewFeedback/>
            </Route>
            <Route path="/roadmap/">
              <Roadmap/>
            </Route>
          </Provider>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
