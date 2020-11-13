import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./LoginComponent/Login";
import DashBoard from "./DashBoardComponent/DashBoard";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/DashBoard" component={DashBoard} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
