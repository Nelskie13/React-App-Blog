import React from "react";
import "../Header.css";

function Header() {
  return (
    <header>
      <nav className="navBar">
        <div className="action-button">
          <p className="navBarBtn">Home</p>
          <p className="navBarBtn">Blogs</p>
          <p className="navBarBtn">Contact Me</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
