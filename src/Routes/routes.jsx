import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import AllInstructor from "../pages/AllInstructor/AllInstructor";
import Classes from "../pages/Classes/Classes";
import MyClasses from "../pages/Dashboard/Student/MyClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <AllInstructor />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      // student routes
      {
        path: "my-classes",
        element: <MyClasses />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClass />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
