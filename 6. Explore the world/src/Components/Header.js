import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
