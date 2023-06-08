import { Outlet } from "react-router-dom";
import DashboardNav from "../pages/Dashboard/DashboardNav/DashboardNav";

const Dashboard = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
      <div>
        <DashboardNav />
      </div>
      <div className="container w-10/12 mx-auto my-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
