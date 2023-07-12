import { NavLink, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="nav">
        <h1 className="logo">Pokédex</h1>
        <ul className="nav-links">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { textDecoration: isActive ? "underline" : null };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return { textDecoration: isActive ? "underline" : null };
            }}
          >
            About
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
