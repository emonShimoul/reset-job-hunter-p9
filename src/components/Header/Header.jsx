import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="container navbar-mob">
        <h2 className="logo">
          <Link to="/">JobHunter</Link>
        </h2>
        <div className="navbar-list">
          <ul className="list-unstyled">
            <li>
              <NavLink className="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="active" to="/statistics">
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink className="active" to="/applied-jobs">
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink className="active" to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="btn large-btn header-btn-mob" type="submit">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
