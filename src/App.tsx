import { Switch, Route } from "react-router-dom";
import Suggestions from "./pages/Suggestions";
import FeedbackDetail from "./pages/FeedbackDetail";
import FeedbackNew from "./pages/FeedbackNew";
import GlobalStyle from "./GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Suggestions} />
        <Route exact path="/feedback-detail/:id" component={FeedbackDetail} />
        <Route exact path="/feedback-new" component={FeedbackNew} />
      </Switch>
    </>
  );
};

export default App;
