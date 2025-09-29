import { Outlet } from "react-router-dom";

const Inspiring = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
    </div>
  );
};

export default Inspiring;
