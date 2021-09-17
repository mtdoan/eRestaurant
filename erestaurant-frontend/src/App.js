import "./App.css";
import { HomePage } from "./containers/HomePage";
import { buildPath, HomePagePath } from "./Paths";
import { LoginPage } from "./containers/customerAccessPage/loginPage";
import { StaffLoginPage } from "./containers/customerAccessPage/staffLoginPage";
import { RegisterPage } from "./containers/customerAccessPage/registerPage";
import { BookingPage } from "./containers/BookingPage/BookingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={HomePagePath} exact component={HomePage} />
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
