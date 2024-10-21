import { Link } from "react-router-dom";
import { Hospital, Waypoints, FileChartColumnIncreasing, Grid2x2Plus, Settings } from "lucide-react";

const SideNavbar = () => {
  return (
    <aside className="side-navbar bg-gray-600 text-white h-full lg:w-64 w-20">
      <nav className="m-8 flex flex-col gap-6 items-center">
        <Link to="/">
          <h1 className="font-bold text-4xl mb-4 hidden lg:block">Healthnest</h1>
        </Link>
        <ul className="flex flex-col gap-6 text-lg">
          <li className="flex gap-4 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded">
            <Link to="/clinics" className="flex gap-4 items-center w-full">
              <Hospital size={24} />
              <span className="hidden lg:block">Clinics</span>
            </Link>
          </li>
          <li className="flex gap-4 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded">
            <Link to="/networks" className="flex gap-4 items-center w-full">
              <Waypoints size={24} />
              <span className="hidden lg:block">Networks</span>
            </Link>
          </li>
          <li className="flex gap-4 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded">
            <Link to="/reports" className="flex gap-4 items-center w-full">
              <FileChartColumnIncreasing size={24} />
              <span className="hidden lg:block">Reports</span>
            </Link>
          </li>
          <li className="flex gap-4 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded">
            <Link to="/interoperability" className="flex gap-4 items-center w-full">
              <Grid2x2Plus size={24} />
              <span className="hidden lg:block">Interoperability</span>
            </Link>
          </li>
          <li className="flex gap-4 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded">
            <Link to="/settings" className="flex gap-4 items-center w-full">
              <Settings size={24} />
              <span className="hidden lg:block">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavbar;