import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header>
      <div className="logo-div">
        <img
          className="logo"
          src="https://images.unsplash.com/photo-1557053964-937650b63311?q=80&w=1597&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

const App = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
