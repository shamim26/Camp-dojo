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
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      // student routes
      {
        path: "my-classes",
        element: <MyClasses />,
      },
    ],
  },
]);

export default router;
