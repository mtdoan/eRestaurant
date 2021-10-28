import "./App.css";
import { HomePage } from "./containers/HomePage/homePage";
import { buildPath, HomePagePath } from "./Paths";
import { LoginPage } from "./containers/customerAccessPage/customerLoginPage";
import { StaffLoginPage } from "./containers/StaffAccessPage/staffLoginPage";
import { RegisterPage } from "./containers/customerAccessPage/registerPage";
import { OrderPage } from "./containers/customerAccessPage/orderPage";
import { ListStaffPage } from "./containers/StaffAccessPage/listStaffPage";
import { EditStaff } from "./containers/StaffAccessPage/editStaff";
import { AddStaff } from "./containers/StaffAccessPage/addStaff";
import { BookingPage } from "./containers/customerAccessPage/bookingPage";
import { BookedPage } from "./containers/customerAccessPage/bookedPage";
import { ListBookingsPage } from "./containers/customerAccessPage/listBookingsPage";
import { CustomerAccountDetailsPage } from "./containers/customerAccessPage/customerAccountDetailsPage"
import { CustomerAccountPage } from "./containers/customerAccessPage/customerAccountPage"
import { MenuViewPage } from "./containers/MenuPage/MenuViewPage";
import { AboutPage } from "./containers/HomePage/aboutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { OrderPaymentPage } from "./containers/customerAccessPage/orderPaymentPage";
import { EditBookingPage } from "./containers/customerAccessPage/editBookingPage";
import { OrderedPage } from "./containers/customerAccessPage/orderedPage";
import { OrderDetailsPage } from "./containers/customerAccessPage/orderDetailsPage";
import { ListOrdersPage } from "./containers/customerAccessPage/listOrdersPage";
import { InvoicePage } from "./containers/customerAccessPage/invoicePage";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
          <Route path={buildPath("ordered/:bookingId")} exact component={OrderedPage} />
          <Route path={buildPath("order/details")} exact component={OrderDetailsPage} />
          <Route path={buildPath("staff/list")} exact component={ListStaffPage} />
          <Route path={buildPath("staff/edit/:staffId")} exact component={EditStaff} />
          <Route path={buildPath("staff/add/")} exact component={AddStaff} />
          <Route path={buildPath("booking")} exact component={BookingPage} />
          <Route path={buildPath("booking/list")} exact component={ListBookingsPage} />
          <Route path={buildPath("order/list")} exact component={ListOrdersPage} />
          <Route path={buildPath("invoice/:orderId")} exact component={InvoicePage} />
          <Route path={buildPath("booking/edit/:bookingId")} exact component={EditBookingPage} />
          <Route path={buildPath("orderpayment/:bookingId")} exact component={OrderPaymentPage} />
          <Route path={buildPath("customeraccountdetails")} exact component={CustomerAccountDetailsPage} />
          <Route path={buildPath("customeraccount")} exact component={CustomerAccountPage} />
          <Route path={buildPath("menu")} exact component={MenuViewPage} />
          <Route path={buildPath("about")} exact component={AboutPage} />
          <Route path={buildPath("booked/:bookingId")} exact component={BookedPage} />
        </Switch>
        <ToastContainer autoClose={5000}/>

      </Router>
    </div>
  );
}

export default App;
