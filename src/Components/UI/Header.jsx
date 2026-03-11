import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <h2>
        <img src="/Logo.png" alt="logo" /> ResumeIQ
      </h2>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX size={28}/> : <HiMenu size={28}/>}
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}
          className={({isActive}) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to="/analyzer" onClick={() => setMenuOpen(false)}
          className={({isActive}) => isActive ? "active" : ""}>
          Start
        </NavLink>

        <NavLink to="/about" onClick={() => setMenuOpen(false)}
          className={({isActive}) => isActive ? "active" : ""}>
          About
        </NavLink>

        <NavLink to="/features" onClick={() => setMenuOpen(false)}
          className={({isActive}) => isActive ? "active" : ""}>
          Features
        </NavLink>
      </nav>

    </header>
  );
};