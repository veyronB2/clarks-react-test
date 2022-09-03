import React from "react";

function Header() {
  return (
    <header className="main-header">
      <nav className="main-header__navigation">
        <a className="main-header__logo-link" href="/">
          <img
            src="assets/clarks-logo.png"
            alt="Clarks logo and homepage link"
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;
