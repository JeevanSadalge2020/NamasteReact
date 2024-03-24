import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [button, setButton] = useState("Login");

  function handleButtonClick() {
    setButton("Logout");
  }
  return (
    <header className="pd-y-1">
      <div className="header-container container">
        <nav className="navbar">
          <div className="logo-div">
            <img className="logo" src={LOGO_URL} />
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <button
              className="btn"
              onClick={(e) => {
                handleButtonClick();
                e.target.classList.add("btn-logout");
              }}
            >
              {button}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
