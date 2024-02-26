import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Main from "./Components/Main";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<App />);
