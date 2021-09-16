import "./App.css";
import { HomePage } from "./containers/HomePage";
import { buildPath, HomePagePath } from "./Paths";
import { LoginPage } from "./containers/customerAccessPage/customerLoginPage";
import { StaffLoginPage } from "./containers/customerAccessPage/staffLoginPage";
import { RegisterPage } from "./containers/customerAccessPage/registerPage";
import { OrderPage } from "./containers/customerAccessPage/orderPage";
// import { ConfirmationPage } from "./containers/customerAccessPage/confirmationPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={HomePagePath} exact component={HomePage} />
          <Route path={buildPath("signin")} exact component={LoginPage} />
          <Route path={buildPath("staff/signin")} exact component={StaffLoginPage} />
          <Route path={buildPath("register")} exact component={RegisterPage} />
          <Route path={buildPath("order")} exact component={OrderPage} />
          {/* <Route path={buildPath("confirm")} exact component={ConfirmationPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
