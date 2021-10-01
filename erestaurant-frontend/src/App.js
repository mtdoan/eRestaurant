import "./App.css";
import { HomePage } from "./containers/HomePage";
import { buildPath, HomePagePath } from "./Paths";
import { LoginPage } from "./containers/CustomerAccessPage/customerLoginPage";
import { LoggedInPage } from "./containers/CustomerAccessPage/loggedInPage";
import { StaffLoginPage } from "./containers/CustomerAccessPage/staffLoginPage";
import { RegisterPage } from "./containers/CustomerAccessPage/registerPage";
import { RegisteredPage } from "./containers/CustomerAccessPage/registeredPage";
import { OrderPage } from "./containers/CustomerAccessPage/orderPage";
import { ListStaffPage } from "./containers/StaffAccessPage/listStaffPage";
import { EditStaff } from "./containers/StaffAccessPage/editStaff";
import { AddStaff } from "./containers/StaffAccessPage/addStaff";
import { MenuViewPage } from "./containers/MenuPage/MenuViewPage";
import { BookingPage } from "./containers/CustomerAccessPage/bookingPage";
import { BookedPage } from "./containers/CustomerAccessPage/bookedPage";
import { Invoice } from "./containers/CustomerAccessPage/invoice";
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
          <Route path={buildPath("menu")} exact component={MenuViewPage} />
          <Route path={buildPath("invoice")} exact component={Invoice} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
