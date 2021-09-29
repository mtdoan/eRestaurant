import "./App.css";
import { HomePage } from "./containers/HomePage";
import { buildPath, HomePagePath } from "./Paths";
import { LoginPage } from "./containers/customerAccessPage/customerLoginPage";
import { LoggedInPage } from "./containers/customerAccessPage/loggedInPage";
import { StaffLoginPage } from "./containers/customerAccessPage/staffLoginPage";
import { RegisterPage } from "./containers/customerAccessPage/registerPage";
import { RegisteredPage } from "./containers/customerAccessPage/registeredPage";
import { OrderPage } from "./containers/customerAccessPage/orderPage";
import { ListStaffPage } from "./containers/StaffAccessPage/listStaffPage";
import { EditStaff } from "./containers/StaffAccessPage/editStaff";
import { AddStaff } from "./containers/StaffAccessPage/addStaff";
import { BookingPage } from "./containers/customerAccessPage/bookingPage";
import { BookedPage } from "./containers/customerAccessPage/bookedPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={HomePagePath} exact component={HomePage} />
          <Route path={buildPath("signin")} exact component={LoginPage} />
          <Route path={buildPath("signedin")} exact component={LoggedInPage} />
          <Route path={buildPath("staff/signin")} exact component={StaffLoginPage} />
          <Route path={buildPath("register")} exact component={RegisterPage} />
          <Route path={buildPath("registered")} exact component={RegisteredPage} />
          <Route path={buildPath("order")} exact component={OrderPage} />
          <Route path={buildPath("staff/list")} exact component={ListStaffPage} />
          <Route path={buildPath("staff/edit/:staffId")} exact component={EditStaff} />
          <Route path={buildPath("staff/add/")} exact component={AddStaff} />
          <Route path={buildPath("booking")} exact component={BookingPage} />
          <Route path={buildPath("booked")} exact component={BookedPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
