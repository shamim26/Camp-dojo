import { Card, List } from "@material-tailwind/react";
import {
  BookOpenIcon,
  CreditCardIcon,
  ClipboardDocumentCheckIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import logo from "../../../assets/logo(2).png";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div>
      <Card className="fixed top-0 left-0 w-full h-screen overflow-auto rounded-none max-w-[20rem] p-4 bg-[#f2ad85]">
        <div className="mb-2 p-4">
          <img src={logo} alt="" />
        </div>
        <List className="flex flex-col ml-6 gap-5">
          <Link to="/dashboard/my-classes" className="text-base font-medium flex gap-3">
            <BookOpenIcon className="h-6 w-6" />
            Selected Classes
          </Link>
          <Link to='/dashboard/enrolled-classes' className="text-base font-medium flex gap-3">
            <ClipboardDocumentCheckIcon className="h-6 w-6" />
            Enrolled Classes
          </Link>
          <Link to='/dashboard/payment-history' className="text-base font-medium flex gap-3">
            <CreditCardIcon className="h-6 w-6" />
            Payment History
          </Link>
        </List>
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
        </List>
      </Card>
    </div>
  );
};

export default DashboardNav;
