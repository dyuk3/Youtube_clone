import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {

  return (
    <div className="bg-black text-white " >
      <div className="mt-16 py-2  flex ">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;