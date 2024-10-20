import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <aside className="side-navbar bg-gray-600 text-white h-full">
      <nav className="">
        <h1>Healthnest</h1>
      <ul>
        <li>
          <Link to="/clinics">Clinics</Link>
        </li>
        <li>
          <Link to="/networks">Networks</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/interoperability">Interoperability</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      </nav>
    </aside>
  );
};

export default SideNavbar;