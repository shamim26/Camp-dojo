import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import AllInstructor from "../pages/AllInstructor/AllInstructor";
import Classes from "../pages/Classes/Classes";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import ManageClass from "../pages/Dashboard/Admin/ManageClass";
import ManageUser from "../pages/Dashboard/Admin/ManageUser";
import InstructorRoutes from "./InstructorRoutes";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";

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
        path: "selected-classes",
        element: <SelectedClasses />,
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

      // Admin routes
      {
        path: "manage-classes",
        element: (
          <AdminRoutes>
            <ManageClass />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoutes>
            <ManageUser />
          </AdminRoutes>
        ),
      },

      // Instructor Routes
      {
        path: "add-class",
        element: (
          <InstructorRoutes>
            <AddClass />
          </InstructorRoutes>
        ),
      },
      {
        path: "my-classes",
        element: (
          <InstructorRoutes>
            <MyClasses />
          </InstructorRoutes>
        ),
      },
    ],
  },
]);

export default router;
