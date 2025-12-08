import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">SpendWise</h2>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tracker">Tracker</NavLink>
        <NavLink to="/stats">Stats</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
}
