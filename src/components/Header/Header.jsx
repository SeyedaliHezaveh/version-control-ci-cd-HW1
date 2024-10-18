import React from "react";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" style={{ height: "50px" }} />
      <h1>My Static Site</h1>
      <nav>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
