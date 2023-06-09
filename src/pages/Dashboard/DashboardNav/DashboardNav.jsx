import { Card, List } from "@material-tailwind/react";
import {
  BookOpenIcon,
  CreditCardIcon,
  ClipboardDocumentCheckIcon,
  HomeIcon,
  UserGroupIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import logo from "../../../assets/logo(2).png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const DashboardNav = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, isLoading] = useAdmin();
  const [isInstructor] = useInstructor();

  
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logged out");
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      {!isLoading && (
        <Card className="fixed top-0 left-0 w-full h-screen overflow-auto rounded-none max-w-[20rem] p-4 bg-[#f2ad85]">
          <div className="mb-2 p-4">
            <img src={logo} alt="" />
          </div>
          {isAdmin?.admin ? (
            <List className="flex flex-col ml-6 gap-5">
              <Link
                to="/dashboard/manage-classes"
                className="text-base font-medium flex gap-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.5rem"
                  width="1.5rem"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M2 18h7v2H2v-2zm0-7h9v2H2v-2zm0-7h20v2H2V4zm18.674 9.025l1.156-.391 1 1.732-.916.805a4.017 4.017 0 010 1.658l.916.805-1 1.732-1.156-.391c-.41.37-.898.655-1.435.83L19 21h-2l-.24-1.196a3.996 3.996 0 01-1.434-.83l-1.156.392-1-1.732.916-.805a4.017 4.017 0 010-1.658l-.916-.805 1-1.732 1.156.391c.41-.37.898-.655 1.435-.83L17 11h2l.24 1.196c.536.174 1.024.46 1.434.83zM18 18a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                Manage Classes
              </Link>
              <Link
                to="/dashboard/manage-users"
                className="text-base font-medium flex gap-3"
              >
                <svg
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  height="1.5rem"
                  width="1.5rem"
                >
                  <path d="M144 160c44.2 0 80-35.8 80-80S188.2 0 144 0 64 35.8 64 80s35.8 80 80 80zm368 0c44.2 0 80-35.8 80-80S556.2 0 512 0s-80 35.8-80 80 35.8 80 80 80zM0 298.7C0 310.4 9.6 320 21.3 320h214.1c-26.6-23.5-43.3-57.8-43.3-96 0-7.6.7-15 1.9-22.3-13.6-6.3-28.7-9.7-44.6-9.7h-42.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3 2.5-3.7 5.2-7.3 8-10.7 2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96 43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h300.5c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5v-2.3-2.3l-2.7-1.5zM533.3 192h-42.6c-15.9 0-31 3.5-44.6 9.7 1.3 7.2 1.9 14.7 1.9 22.3 0 17.4-3.5 33.9-9.7 49 2.5.9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6 7.9-1.2 16-1.9 24.2-1.9s16.3.6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3.7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7 2.3 2.8 4.5 5.8 6.6 8.7-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9-6.5-1-13.1-1.5-19.9-1.5s-13.4.5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9-2.6 6.8.5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9 2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5 4.6 5.7 12.7 6.7 19 3l18.2-10.2c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9 6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3 3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8 2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM552 384c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z" />
                </svg>
                Manage Users
              </Link>
            </List>
          ) : isInstructor?.instructor ? (
            <List className="flex flex-col ml-6 gap-5">
              <Link
                to="/dashboard/add-class"
                className="text-base font-medium flex gap-3"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1.5rem"
                  width="1.5rem"
                >
                  <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z" />
                </svg>
                Add Class
              </Link>
              <Link
                to="/dashboard/my-classes"
                className="text-base font-medium flex gap-3"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1.5rem"
                  width="1.5rem"
                >
                  <path d="M13 0H6a2 2 0 00-2 2 2 2 0 00-2 2v10a2 2 0 002 2h7a2 2 0 002-2 2 2 0 002-2V2a2 2 0 00-2-2zm0 13V4a2 2 0 00-2-2H5a1 1 0 011-1h7a1 1 0 011 1v10a1 1 0 01-1 1zM3 4a1 1 0 011-1h7a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                </svg>
                My Classes
              </Link>
            </List>
          ) : (
            <List className="flex flex-col ml-6 gap-5">
              <Link
                to="/dashboard/selected-classes"
                className="text-base font-medium flex gap-3"
              >
                <BookOpenIcon className="h-6 w-6" />
                Selected Classes
              </Link>
              <Link
                to="/dashboard/enrolled-classes"
                className="text-base font-medium flex gap-3"
              >
                <ClipboardDocumentCheckIcon className="h-6 w-6" />
                Enrolled Classes
              </Link>
              <Link
                to="/dashboard/payment-history"
                className="text-base font-medium flex gap-3"
              >
                <CreditCardIcon className="h-6 w-6" />
                Payment History
              </Link>
            </List>
          )}
          <div className="border border-gray-700 my-6"></div>
          <List className="flex flex-col ml-6 gap-5">
            <Link to="/" className="text-base font-medium flex gap-3">
              <HomeIcon className="h-6 w-6" />
              Home
            </Link>
            <Link to="/classes" className="text-base font-medium flex gap-3">
              <UserGroupIcon className="h-6 w-6" />
              Classes
            </Link>
            <button
              onClick={handleLogout}
              className="text-base font-medium flex gap-3"
            >
              <ArrowRightOnRectangleIcon className="h-6 w-6" />
              Log out
            </button>
          </List>
        </Card>
      )}
    </div>
  );
};

export default DashboardNav;
