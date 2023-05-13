import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo.svg";
const NavBar = () => {
  const navitems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="mb-4 h-28 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              {navitems}
            </ul>
          </div>
          <Link to="/" className="text-xl normal-case btn btn-ghost">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navitems}</ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-warning ">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
