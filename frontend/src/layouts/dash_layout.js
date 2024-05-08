import { Outlet } from "react-router-dom";
import DashHeader from "../components/dash_header";
import DashFooter from "../components/dash_footer";
function DashLayout() {
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
}

export default DashLayout;
