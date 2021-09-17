import "./App.css";
import { HomePage } from "./containers/HomePage";
import { buildPath, HomePagePath } from "./Paths";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import { BookingPage } from "./containers/BookingPage/BookingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={HomePagePath} exact component={HomePage} />
          <Route path={buildPath("/:action")} exact component={CustomerAccessPage}/>
          <Route path={buildPath("signin")} exact component={LoginPage} />
          <Route path={buildPath("staff/signin")} exact component={StaffLoginPage} />
          <Route path={buildPath("register")} exact component={RegisterPage} />
          <Route path={buildPath("booking")} exact component={BookingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
