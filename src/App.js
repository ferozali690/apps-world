import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./LoginComponent/Login";
import DashBoard from "./DashBoardComponent.js/DashBoard";

const App = () => {
  return (
    <div className="App">
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
